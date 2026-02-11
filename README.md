# NBKRIST Hostel Portal (Unofficial Student Project)

> **Disclaimer:** This is a student academic project developed for learning purposes. It is **NOT** the official portal of NBKR Institute of Science and Technology.

A comprehensive, modern, and mobile-responsive web application designed to streamline hostel management tasks for students and administrators. This project demonstrates a full-stack serverless architecture using Firebase.

## 🚀 Features

### 🎓 Student Module
- **Dashboard**: Real-time overview of notices, complaints, and daily mess menu.
- **Mess Menu**: View weekly and daily food menus with a modern UI.
- **Room Booking**: Real-time room availability status and booking requests.
- **Outpass System**: Digital outpass application and tracking.
- **Complaints**: Submit and track maintenance or other issues.
- **Digital ID**: A generated digital identity card for hostel verification.
- **Profile Management**: Manage personal details and settings.

### 🛡️ Admin Module
- **Analytics Dashboard**: Visual insights into student stats, room occupancy, and complaint trends using Charts.js.
- **User Management**: View, search, filter, and manage student profiles.
- **Booking Management**: Approve or reject room booking requests.
- **Outpass Control**: Review and action outpass applications.
- **Content Management**: Update mess menus, notices, and flash news.
- **User Archive**: Soft-delete and restore functionality for student data.

### 🛂 Gate/Security Module
- **QR Code Verification**: Verify student outpasses and identity instantly using checking algorithms.
- **Gate Kiosk**: Optimized interface for security personnel to check student status.
- **Live Logs**: Real-time entry/exit logging.

## 🚀 Feature Workflows

### 🎫 Outpass System
The outpass system streamlines the traditional paper-based permission process:
1.  **Request**: Students submit an outpass request via the `outpass.html` page, providing destination, reason, dates, and parent contact.
2.  **Notification**: The system validates the request and queues it for warden approval.
3.  **Approval/Rejection**: Admins view pending requests on the dashboard (`admin.js`). They can Approve or Reject with a single click.
    *   **Approved**: A digital gate pass with a unique QR code is generated for the student.
    *   **Rejected**: The student is notified with the status change.
4.  **Verification**: Security personnel scan the generated QR code at the gate to log the student's exit and entry by `outpass-scanner.html`.

### 🛏️ Room Booking & Allocation
A fully digital room allocation system replacing manual ledgers:
1.  **Campus Heatmap**: Students view an interactive map of hostels (`booking.html`) showing real-time occupancy.
2.  **Room Selection**: Students browse available rooms and specific beds (e.g., Room 101, Bed A).
3.  **Booking Request**: Clicking a bed submits a request. The bed is temporarily locked or marked as "Pending" to prevent double-booking.
4.  **Warden Action**:
    *   **Approval**: The warden confirms the booking in the admin panel. The student is officially assigned the room.
    *   **Vacation**: Students can request to vacate. Admins approve this to free up the bed for new applicants.
5.  **Status Tracking**: Students can track their application status (Pending, Approved, Rejected) directly from their dashboard.

### 🍽️ Mess Menu & Ratings
An interactive way to manage and view dining options:
1.  **Daily Display**: The menu for the day (Breakfast, Lunch, Snacks, Dinner) is automatically highlighted based on the current time.
2.  **Admin Updates**: Mess managers can update the menu in real-time from the admin panel (`mess-menu.js` logic).
3.  **Student Feedback**: Students can "Like" or "Pass" specific meal items.
4.  **Analytics**: The admin dashboard aggregates these ratings, providing insights into popular and unpopular dishes to improve food quality.

## 🛠️ Tech Stack

- **Frontend**: 
  - HTML5 (Semantic & Accessible)
  - **Tailwind CSS** (Utility-first styling, Dark Mode support)
  - **Alpine.js** (Lightweight reactivity for UI components)
  - Vanilla JavaScript (Core logic)
- **Backend (Serverless)**:
  - **Firebase Authentication**: Secure user login and identity management.
  - **Cloud Firestore**: Real-time NoSQL database.
  - **Firebase Hosting**: Fast and secure web hosting.
- **Libraries & Tools**:
  - `Chart.js`: Visualizing analytics (Occupancy rates, Complaint trends).
  - `SweetAlert2`: Beautiful, responsive popup alerts and confirmation dialogs.
  - `FontAwesome`: Scalable vector icons.
  - `EmailJS`: Specialized service for sending transactional emails directly from the client.
  - `html2canvas`: Generating downloadable images (Digital IDs).
  - `QRCode.js`: Generating QR codes for outpasses.
  - `Flatpickr`: User-friendly date and time pickers.

## 🏗️ Project Structure

```
hostel-portal-2/
├── admin.html          # Admin dashboard and management console
├── index.html          # Main student dashboard
├── login.html          # Authentication page
├── firebase-config.js  # Firebase configuration (ensure keys are secure)
├── js/                 # Application logic
│   ├── auth/           # Authentication handlers
│   ├── firebase/       # Firebase service wrappers
│   ├── components/     # UI components (Calendar, Toast, etc.)
│   └── ...
├── css/                # Custom styles and Tailwind inputs
├── assets/             # Static assets (images, icons)
└── ...
```

## ⚙️ Installation & Setup

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/likhith3035/hostel-portal-2.git
    cd hostel-portal-2
    ```

2.  **Configure Firebase**
    - Create a project in the [Firebase Console](https://console.firebase.google.com/).
    - Enable **Authentication** (Email/Password).
    - Enable **Firestore Database**.
    - Copy your web app configuration keys.
    - Update `firebase-config.js` with your specific keys.

3.  **Run Locally**
    You can use any static file server. For example, using Python or Node.js:
    
    *Using Python:*
    ```bash
    python -m http.server 8000
    ```
    
    *Using npx (Node.js):*
    ```bash
    npx serve .
    ```

    Open `http://localhost:8000` (or the port shown) in your browser.

## 🤝 Contribution

This is a personal project, but suggestions are welcome!
1. Fork the repo.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## 👨‍💻 Developer

**Likhith Kami**
- [GitHub](https://github.com/likhith3035)
- [LinkedIn](https://www.linkedin.com/in/likhith-kami/)
- [Instagram](https://www.instagram.com/lucky__likhith?igsh=bTgxYjZtZ2wwYmR4)

---
*Built with ❤️ for NBKRIST Students*
