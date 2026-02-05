// Cache Management Utility
// Add this script to your admin page or create a standalone utility page

async function clearAllCaches() {
    try {
        // 1. Clear all service worker caches
        const cacheNames = await caches.keys();
        await Promise.all(cacheNames.map(cache => caches.delete(cache)));
        console.log('✅ All caches cleared');

        // 2. Unregister all service workers
        if ('serviceWorker' in navigator) {
            const registrations = await navigator.serviceWorker.getRegistrations();
            await Promise.all(registrations.map(reg => reg.unregister()));
            console.log('✅ All service workers unregistered');
        }

        // 3. Clear all storage
        sessionStorage.clear();
        localStorage.clear();
        console.log('✅ Storage cleared');

        // 4. Clear IndexedDB (Firestore offline cache)
        if (window.indexedDB) {
            const databases = await indexedDB.databases();
            await Promise.all(databases.map(db => {
                return new Promise((resolve, reject) => {
                    const request = indexedDB.deleteDatabase(db.name);
                    request.onsuccess = resolve;
                    request.onerror = reject;
                });
            }));
            console.log('✅ IndexedDB cleared');
        }

        alert('✅ All caches and storage cleared!\n\nThe page will now reload with fresh content.');

        // Force hard reload
        window.location.reload(true);
    } catch (error) {
        console.error('❌ Error clearing caches:', error);
        alert('Error clearing caches. Please manually clear browser cache:\n\nChrome/Edge: Ctrl+Shift+Delete\nFirefox: Ctrl+Shift+Delete\nSafari: Cmd+Option+E');
    }
}

// Add this to your HTML to create a clear cache button:
// <button onclick="clearAllCaches()" class="btn-clear-cache">Clear All Caches</button>

// Or call it programmatically when needed:
// clearAllCaches();
