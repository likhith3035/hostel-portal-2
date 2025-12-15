import { firebaseConfig } from './firebase-config.js';

const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();

export const showToast = (message, isError = false) => {
    if (typeof Swal === 'undefined') return;
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
        }
    });
    Toast.fire({
        icon: isError ? 'error' : 'success',
        title: message
    });
};

let unreadNotifications = [];

export function setupNotificationListener(user) {
    if (!user) return;
    
    const notificationBell = document.getElementById('notification-bell');
    if (!notificationBell) return;

    const unreadIndicator = notificationBell.querySelector('span'); 
    const notificationsList = document.getElementById('notifications-list');

    const renderNotifications = (notifications) => {
        notifications.sort((a, b) => b.timestamp.seconds - a.timestamp.seconds);
        
        unreadNotifications = notifications.filter(n => !n.readBy.includes(user.uid));

        if (unreadIndicator) {
            unreadIndicator.style.display = unreadNotifications.length > 0 ? 'block' : 'none';
        }

        if (notifications.length === 0) {
            notificationsList.innerHTML = `<li class="p-4 text-center text-sm text-gray-500">You have no notifications.</li>`;
            return;
        }

        let html = '';
        notifications.forEach(n => {
            const isUnread = !n.readBy.includes(user.uid);
            html += `<li class="border-b border-gray-100 last:border-b-0">
                        <a href="#" class="block p-4 hover:bg-gray-50">
                            <p class="text-sm ${isUnread ? 'font-bold text-gray-800' : 'text-gray-600'}">${n.text}</p>
                            <p class="text-xs text-gray-400 mt-1">${new Date(n.timestamp.seconds * 1000).toLocaleString()}</p>
                        </a>
                    </li>`;
        });
        notificationsList.innerHTML = html;
    };

    const privateUnsubscribe = db.collection('notifications')
        .where('recipientId', '==', user.uid)
        .onSnapshot(privateSnapshot => {
            db.collection('notifications')
                .where('recipientId', '==', null)
                .onSnapshot(generalSnapshot => {
                    const allNotifications = [];
                    privateSnapshot.forEach(doc => allNotifications.push({ id: doc.id, ...doc.data() }));
                    generalSnapshot.forEach(doc => allNotifications.push({ id: doc.id, ...doc.data() }));
                    renderNotifications(allNotifications);
                });
        });
}

export function markNotificationsAsRead() {
    if (unreadNotifications.length === 0) return;
    const user = auth.currentUser;
    if (!user) return;
    const batch = db.batch();
    unreadNotifications.forEach(notification => {
        const docRef = db.collection('notifications').doc(notification.id);
        batch.update(docRef, {
            readBy: firebase.firestore.FieldValue.arrayUnion(user.uid)
        });
    });
    batch.commit().catch(err => console.error("Error marking notifications as read:", err));
}

function setupRealtimeToastListeners(user) {
    if (!user) return;
    let initialBookingStatusHandled = false;

    const processChange = (change, toastPrefix = "") => {
        if (change.type === 'added' && !change.doc.metadata.fromCache) {
            const notificationData = change.doc.data();
            const isTrulyNew = (Date.now() / 1000 - notificationData.timestamp.seconds) < 30;
            if (isTrulyNew) {
                showToast(`${toastPrefix}${notificationData.text}`);
            }
        }
    };
    db.collection('notifications').where('recipientId', '==', user.uid).orderBy('timestamp', 'desc').onSnapshot(s => s.docChanges().forEach(c => processChange(c, "Admin Message: ")));
    db.collection('notifications').where('recipientId', '==', null).orderBy('timestamp', 'desc').onSnapshot(s => s.docChanges().forEach(c => processChange(c, "Announcement: ")));
    
    // Corrected listener for a single document
    db.collection('bookings').doc(user.uid).onSnapshot(doc => {
        if (!initialBookingStatusHandled) {
            initialBookingStatusHandled = true;
            return;
        }
        if (doc.metadata.hasPendingWrites) return;

        const bookingData = doc.data();
        if (bookingData) {
            if (bookingData.status === 'confirmed') {
                showToast('Your room booking has been confirmed! 🎉');
            } else if (bookingData.status === 'rejected') {
                showToast('Your room booking was rejected by the admin.', true);
            }
        }
    });
}

export function checkUserSession() {
  return new Promise((resolve) => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      unsubscribe();
      if (user) {
        setupRealtimeToastListeners(user);
        resolve(user);
      } else {
        window.location.href = 'index.html';
        resolve(null);
      }
    });
  });
}

export async function handleLogout() {
    try {
        await auth.signOut();
        window.location.href = 'index.html';
    } catch (error) {
        console.error('Error logging out:', error);
    }
}