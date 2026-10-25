<p align="center">
  <img src="assets/images/nbkrist-logo.png" alt="NBKRIST Logo" width="120" style="border-radius: 50%;" />
</p>

<h1 align="center">🏨 NBKRIST Hostel Portal</h1>

<p align="center">
  <b>A modern, serverless, mobile-responsive hostel management ecosystem.</b><br/>
  <sub>Real-Time Firestore Sync • Atomic Double-Booking Protection • Cryptographic QR Gate Passes • Glassmorphism UI</sub>
</p>

<p align="center">
  <a href="https://nbkristhostelportal.netlify.app/"><img src="https://img.shields.io/badge/Status-🟢_Live_Production-brightgreen?style=for-the-badge" alt="Production Status" /></a>
  <a href="https://nbkristhostelportal.netlify.app/"><img src="https://img.shields.io/badge/Demo-🌐_Explore_Portal-6C63FF?style=for-the-badge" alt="Live Demo" /></a>
  <a href="https://app.netlify.com/start/deploy?repository=https://github.com/likhith3035/hostel-portal-2"><img src="https://img.shields.io/badge/Deploy-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Deploy to Netlify" /></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Architecture-JAMstack_Serverless-FF6F00?style=flat-square&logo=jamstack&logoColor=white" alt="JAMstack" />
  <img src="https://img.shields.io/badge/Database-Cloud_Firestore-FFCA28?style=flat-square&logo=firebase&logoColor=black" alt="Firestore" />
  <img src="https://img.shields.io/badge/Auth-Firebase_Authentication-FF8F00?style=flat-square&logo=firebase&logoColor=white" alt="Firebase Auth" />
  <img src="https://img.shields.io/badge/Styling-Tailwind_CSS_CDN-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/PWA-Service_Worker_v31-5A67D8?style=flat-square&logo=pwa&logoColor=white" alt="PWA" />
  <img src="https://img.shields.io/badge/Security-RBAC_%26_Rules_v2-10B981?style=flat-square&logo=shield&logoColor=white" alt="Security" />
  <img src="https://img.shields.io/badge/License-MIT-blue?style=flat-square" alt="MIT License" />
</p>

<p align="center">
  <a href="https://github.com/likhith3035/hostel-portal-2/stargazers"><img src="https://img.shields.io/github/stars/likhith3035/hostel-portal-2?style=flat-square&color=yellow" alt="GitHub stars"/></a>
  <a href="https://github.com/likhith3035/hostel-portal-2/network/members"><img src="https://img.shields.io/github/forks/likhith3035/hostel-portal-2?style=flat-square&color=orange" alt="GitHub forks"/></a>
  <a href="https://github.com/likhith3035/hostel-portal-2/issues"><img src="https://img.shields.io/github/issues/likhith3035/hostel-portal-2?style=flat-square&color=red" alt="GitHub issues"/></a>
</p>

> [!NOTE]
> **Academic Project Disclaimer:** This platform is an independent student academic project engineered for learning and demonstration purposes. It is **NOT** the official web portal of NBKR Institute of Science and Technology (NBKRIST).

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Why NBKRIST Hostel Portal?](#-why-nbkrist-hostel-portal)
- [System Architecture](#-system-architecture)
- [Key Workflows & Data Flows](#-key-workflows--data-flows)
  - [1. Digital Outpass & Gate Verification](#1-digital-outpass--gate-verification-workflow)
  - [2. Atomic Room Booking with Concurrency Protection](#2-atomic-room-booking-flow)
  - [3. Dedicated Gate Kiosk & Scanner Flow](#3-dedicated-gate-kiosk--scanner-flow)
- [Feature Matrix by Role](#-feature-matrix-by-role)
  - [Student Portal](#-student-portal)
  - [Admin & Warden Command Center](#-admin--warden-command-center)
  - [Security & Gate Kiosk](#-security--gate-kiosk)
- [UI / UX Design Highlights](#-ui--ux-design-highlights)
- [Repository Structure](#-repository-structure)
- [Database Schema & Security Architecture](#-database-schema--security-architecture)
- [Quick Start & Local Setup](#-quick-start--local-setup)
- [Configuration Reference](#-configuration-reference)
- [Production Deployment](#-production-deployment)
- [Progressive Web App (PWA) & Cache Management](#-progressive-web-app-pwa--cache-management)
- [Troubleshooting & FAQs](#-troubleshooting--faqs)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [Developer & Institutional Credits](#-developer--institutional-credits)
- [License](#-license)

---

## 🌟 Overview

The **NBKRIST Hostel Portal** is a production-ready, full-stack serverless web application engineered to replace archaic paper-based hostel administration with a fast, transparent, and mobile-responsive digital hub.

Built on the **JAMstack** philosophy, the portal operates without a dedicated backend server by leveraging **Firebase modular services** (Authentication, Cloud Firestore real-time listeners, and atomic transactions) backed by an Edge CDN (Netlify) and client-side route guards.

### 🎯 Primary Capabilities
- 🛏️ **Visual Bed Heatmap**: Real-time room vacancy visualization with atomic transaction-safe reservation to prevent double-booking.
- 🎫 **Digital Outpass Engine**: Streamlined outpass request workflow with warden approvals and dynamically signed QR codes for gate check-in/out.
- 🛂 **Dedicated Gate Kiosk & ID Checker**: Touch-friendly, high-contrast kiosk mode with camera QR scanning (`html5-qrcode`) and manual fallback.
- 🍽️ **Smart Mess Schedule**: Automated 7-day meal schedule with countdown timers to the next meal and student satisfaction ratings.
- 📝 **Complaint Resolution Hub**: Transparent ticketing for room, mess, Wi-Fi, and electrical maintenance with real-time status tracking.
- 🪪 **Digital Student Identity Card**: Instant digital identification with barcode, secure verification QR, and photo flip view.
- 🛡️ **Comprehensive Admin Suite**: Chart.js analytics, student directory management, bulk actions, user archival/restore, immutable audit trails, and EmailJS communication.

---

## 💡 Why NBKRIST Hostel Portal?

Traditional hostel management relies on handwritten logbooks, paper outpass slips, physical bulletin boards, and manual room allocation ledgers. This creates inefficiencies, lost paperwork, delays at the security gate, and lack of accountability.

| Challenge in Traditional Hostels | NBKRIST Hostel Portal Solution |
| :--- | :--- |
| **Paper Outpass Delays** | ⚡ Instant digital application, warden one-click approval, and sub-second QR code scan at the gate. |
| **Double-Booking & Allotment Bias** | 🔒 Interactive room vacancy heatmap backed by **Firestore Transactions** to guarantee atomic room locks. |
| **Lost or Damaged ID Cards** | 🪪 Web-based **Digital Student ID** accessible anywhere on smartphone with verifiable QR payload. |
| **Unaddressed Complaints** | 📊 Transparent grievance redressal tracking (`Pending` ➔ `In Progress` ➔ `Resolved`). |
| **Static & Forgotten Mess Timetables** | 🕒 Dynamic 7-day timetable that auto-highlights the current meal with a live countdown timer. |
| **Manual Gate Logs & Night Bottlenecks** | 📱 Dedicated **Gate Kiosk** (`gate-kiosk.html`) optimized for low-light camera QR scanning with live security logs. |
| **Server Maintenance Costs** | ☁️ **100% Serverless**: Zero cloud server costs, near-infinite scalability, and instantaneous Edge CDN delivery. |

---

## 🏗️ System Architecture

The architecture follows a decoupled, secure **Serverless JAMstack** topology:

```mermaid
flowchart TB
    subgraph ClientLayer["🖥️ Frontend Client (PWA / SPA)"]
        UI["Tailwind CSS + Alpine.js + Vanilla ES Modules"]
        AG["Auth Guard & Route Validator (auth-guard.js)"]
        SW["Service Worker v31 (Offline Cache & Sync)"]
    end

    subgraph CDNLayer["☁️ Netlify Global Edge CDN"]
        Edge["Static Asset Distribution & Clean URL Rewrites (_redirects)"]
    end

    subgraph FirebaseLayer["🔥 Firebase Backend-as-a-Service"]
        Auth["Firebase Authentication<br/>(Email/Password & Role Tokens)"]
        Firestore[("Cloud Firestore<br/>(Real-Time Listeners & Atomic Transactions)")]
        Rules["Security Rules v2<br/>(Role-Based Access Control & Immutability)"]
    end

    subgraph ExternalServices["📡 Third-Party Integrations"]
        EmailJS["EmailJS Service<br/>(Transactional Student Notifications)"]
        QR["html5-qrcode / QRCode.js<br/>(Scanner & Cryptographic QR Generator)"]
        Charts["Chart.js<br/>(Real-time Occupancy & Trend Visuals)"]
    end

    Edge --> ClientLayer
    ClientLayer --> AG
    AG --> Auth
    ClientLayer --> Firestore
    Firestore --- Rules
    ClientLayer --> EmailJS
    ClientLayer --> QR
    ClientLayer --> Charts
```

---

## 🔄 Key Workflows & Data Flows

### 1. Digital Outpass & Gate Verification Workflow

```mermaid
sequenceDiagram
    autonumber
    actor S as Student
    actor W as Warden / Admin
    participant FS as Cloud Firestore
    actor G as Gate Security (Kiosk)

    S->>FS: Submit outpass request (destination, dates, parent phone, reason)
    Note over S,FS: Status: 'pending'
    W->>FS: Review pending requests on Admin Panel
    W->>FS: Click "Approve Outpass"
    Note over W,FS: Status updated to 'approved'
    FS-->>S: Real-time listener triggers QR generation on Student Portal
    S->>G: Presents Digital Outpass QR at Security Gate
    G->>G: Scans QR code via Gate Kiosk camera (html5-qrcode)
    G->>FS: Queries outpass record & updates check-out timestamp
    Note over G,FS: Status: 'departed' / Logged to security audit
    G-->>S: Gate clearance granted!
```

---

### 2. Atomic Room Booking Flow

To prevent race conditions where two students apply for the same bed at the exact same millisecond, room reservations run inside **Firestore atomic transactions**:

```mermaid
stateDiagram-v2
    [*] --> BrowseHeatmap: Student views live floor & room availability
    BrowseHeatmap --> SelectBed: Chooses Vacant Bed (e.g., Room 104 - Bed B)
    SelectBed --> TransactionLock: Submits reservation request
    
    state TransactionLock {
        [*] --> CheckStatus: Read current bed state in Firestore
        CheckStatus --> Confirmed: Bed is vacant -> Mark bed 'pending' & write booking doc
        CheckStatus --> AbortRace: Bed already taken by concurrent user
    }
    
    AbortRace --> BrowseHeatmap: Alert: "Bed already claimed. Pick another."
    Confirmed --> WardenReview: Booking awaits Warden confirmation
    WardenReview --> Approved: Warden Approves -> Bed permanently 'taken'
    WardenReview --> Rejected: Warden Rejects -> Bed returned to 'available'
    Approved --> [*]
    Rejected --> [*]
```

---

### 3. Dedicated Gate Kiosk & Scanner Flow

```mermaid
flowchart TD
    Start(["Security Officer opens /gate-kiosk"]) --> GateCheck{"PIN Screen Locked?"}
    GateCheck -- Yes --> EnterPIN["Enter Security PIN (Settings collection)"]
    EnterPIN -- Valid PIN --> UnlockKiosk["Kiosk Workspace Unlocked (Session Cached)"]
    GateCheck -- No --> UnlockKiosk

    UnlockKiosk --> SelectMode{"Select Verification Method"}
    SelectMode -- Camera Scan --> CamScan["Activate Device Camera (html5-qrcode)"]
    SelectMode -- Manual Entry --> Manual["Enter Student ID or Outpass UID"]

    CamScan --> ParseQR["Parse Scanned QR String"]
    Manual --> QueryFS["Fetch Student / Outpass Document"]
    ParseQR --> QueryFS

    QueryFS --> Valid{"Record Found & Approved?"}
    Valid -- Valid Approved Outpass --> Grant["🟢 Clearance APPROVED<br/>Display Photo, Room, Parent Phone & Timestamp"]
    Valid -- Expired / Pending --> Reject["🔴 Clearance DENIED<br/>Display Warning & Contact Warden"]

    Grant --> AutoLog["Record Entry/Exit to Security Audit Log"]
```

---

## 📊 Feature Matrix by Role

### 🎓 Student Portal

| Feature | File | Description |
| :--- | :--- | :--- |
| **Real-Time Dashboard** | [`index.html`](file:///c:/Users/kamil/OneDrive/Desktop/hsp2%20backup/index.html) | Live summary of current meal countdown, recent notices, and personal complaint statuses. |
| **Room Booking Heatmap** | [`booking.html`](file:///c:/Users/kamil/OneDrive/Desktop/hsp2%20backup/booking.html) | Interactive floor map showing live room & bed status (Available, Pending, Taken) with atomic booking. |
| **Digital Outpass** | [`outpass.html`](file:///c:/Users/kamil/OneDrive/Desktop/hsp2%20backup/outpass.html) | Submit leave/outpass requests, view approval status, and display verified QR code for gate check. |
| **7-Day Dynamic Mess Menu** | [`mess-menu.html`](file:///c:/Users/kamil/OneDrive/Desktop/hsp2%20backup/mess-menu.html) | Weekly meal calendar, automatic time-based meal highlighting, and interactive meal rating system. |
| **Grievance Redressal** | [`complaints.html`](file:///c:/Users/kamil/OneDrive/Desktop/hsp2%20backup/complaints.html) | Submit tickets for electrical, plumbing, Wi-Fi, or food issues with real-time status updates. |
| **Digital Identity Card** | [`id-card.html`](file:///c:/Users/kamil/OneDrive/Desktop/hsp2%20backup/id-card.html) | Official-style digital student ID with barcode, personal details, photo, and verification QR code. |
| **Profile & Settings** | [`profile.html`](file:///c:/Users/kamil/OneDrive/Desktop/hsp2%20backup/profile.html) | Manage student bio, avatar, emergency contacts, room allocation details, and password security. |
| **Campus Regulations** | [`rules.html`](file:///c:/Users/kamil/OneDrive/Desktop/hsp2%20backup/rules.html) | Official hostel timings, disciplinary policies, mess guidelines, and ragging prohibition protocols. |

---

### 🛡️ Admin & Warden Command Center

| Feature | Location | Description |
| :--- | :--- | :--- |
| **Executive Analytics** | [`admin.html`](file:///c:/Users/kamil/OneDrive/Desktop/hsp2%20backup/admin.html) | Real-time KPI cards, hostel occupancy donut chart, and complaint categories breakdown via **Chart.js**. |
| **Room Allocation Control** | [`admin.html`](file:///c:/Users/kamil/OneDrive/Desktop/hsp2%20backup/admin.html) | Review bed booking applications, execute atomic approve/reject decisions, and perform forced room vacates. |
| **Outpass Approval Hub** | [`admin.html`](file:///c:/Users/kamil/OneDrive/Desktop/hsp2%20backup/admin.html) | Filter outpasses by status (`pending`, `approved`, `expired`), approve requests, or revoke permissions. |
| **Student Directory & Export** | [`admin.html`](file:///c:/Users/kamil/OneDrive/Desktop/hsp2%20backup/admin.html) | Search, filter by branch/room, promote roles, and export complete student rosters to CSV. |
| **User Archival & Restore** | [`admin.html`](file:///c:/Users/kamil/OneDrive/Desktop/hsp2%20backup/admin.html) | Soft-delete student records into `deletedUsers` collection with complete one-click restoration. |
| **Mess Menu Live Editor** | [`admin.html`](file:///c:/Users/kamil/OneDrive/Desktop/hsp2%20backup/admin.html) | Modify daily breakfast, lunch, snacks, and dinner items with immediate propagation to all students. |
| **Campus Broadcast Notices** | [`admin.html`](file:///c:/Users/kamil/OneDrive/Desktop/hsp2%20backup/admin.html) | Publish critical alerts, notices, and announcements with date-based priority. |
| **Email Communication** | [`admin.html`](file:///c:/Users/kamil/OneDrive/Desktop/hsp2%20backup/admin.html) | Dispatch direct notifications and broadcast reminders to students using the integrated **EmailJS** service. |
| **Gate Passcode Manager** | [`admin.html`](file:///c:/Users/kamil/OneDrive/Desktop/hsp2%20backup/admin.html) | Manage and rotate gate kiosk access passcodes with persistent history tracking in `settings/gateKiosk`. |
| **Immutable Audit Logs** | [`admin.html`](file:///c:/Users/kamil/OneDrive/Desktop/hsp2%20backup/admin.html) | Security log inspector tracking admin approvals, role adjustments, room vacates, and user modifications. |

---

### 🛂 Security & Gate Kiosk

| Feature | Location | Description |
| :--- | :--- | :--- |
| **Gate Kiosk Interface** | [`gate-kiosk.html`](file:///c:/Users/kamil/OneDrive/Desktop/hsp2%20backup/gate-kiosk.html) | High-contrast, dark-mode terminal engineered for outdoor, night-time, and tablet/mobile gate operations. |
| **PIN Lock Protection** | [`js/gate-kiosk.js`](file:///c:/Users/kamil/OneDrive/Desktop/hsp2%20backup/js/gate-kiosk.js) | Prevents unauthorized tampering; gate personnel authenticate using a centralized security passcode. |
| **Camera QR Scanner** | [`gate-kiosk.html`](file:///c:/Users/kamil/OneDrive/Desktop/hsp2%20backup/gate-kiosk.html) | Instant QR barcode scanning leveraging `html5-qrcode` with live video stream overlay. |
| **Public ID Checker** | [`id-checker.html`](file:///c:/Users/kamil/OneDrive/Desktop/hsp2%20backup/id-checker.html) | Lightweight standalone scanner to authenticate any student's digital identity card by QR or roll number. |
| **Automatic Timestamping** | [`js/gate-kiosk.js`](file:///c:/Users/kamil/OneDrive/Desktop/hsp2%20backup/js/gate-kiosk.js) | Automatically logs exact check-out and check-in timestamps to Firestore upon successful verification. |

---

## 🎨 UI / UX Design Highlights

The portal's visual architecture is crafted to feel like a modern native iOS/macOS application rather than an academic tool:

- **Glassmorphism Design System**: Translucent frosted panels (`backdrop-blur-xl`), soft border reflections, and layered elevation shadows.
- **Dynamic Theme Engine**: Persistent Dark Mode and Light Mode with system-preference auto-detection (`prefers-color-scheme`).
- **Tactile Micro-Interactions**: Spring-click physics, floating animations, skeleton loaders during network latency, and non-blocking toast alerts.
- **Mobile-First Layout**: Fully responsive fluid grid layouts tailored for smartphone screens, tablets, kiosks, and widescreen monitors.
- **High-Accessibility Design**: High-contrast typography with [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) and semantic HTML5 structures.

---

## 🛠️ Tech Stack

<table>
  <tr>
    <th align="left">Category</th>
    <th align="left">Technology</th>
  </tr>
  <tr>
    <td><b>🎨 Frontend</b></td>
    <td>
      <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" />
      <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" />
      <img src="https://img.shields.io/badge/Alpine.js-8BC0D0?style=flat-square&logo=alpine.js&logoColor=black" />
      <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" />
    </td>
  </tr>
  <tr>
    <td><b>☁️ Backend</b></td>
    <td>
      <img src="https://img.shields.io/badge/Firebase_Auth-FFCA28?style=flat-square&logo=firebase&logoColor=black" />
      <img src="https://img.shields.io/badge/Cloud_Firestore-FFCA28?style=flat-square&logo=firebase&logoColor=black" />
      <img src="https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white" />
    </td>
  </tr>
  <tr>
    <td><b>📦 Libraries</b></td>
    <td>
      <img src="https://img.shields.io/badge/Chart.js-FF6384?style=flat-square&logo=chartdotjs&logoColor=white" />
      <img src="https://img.shields.io/badge/SweetAlert2-8B5CF6?style=flat-square" />
      <img src="https://img.shields.io/badge/FontAwesome-528DD7?style=flat-square&logo=fontawesome&logoColor=white" />
      <img src="https://img.shields.io/badge/EmailJS-FC5C65?style=flat-square" />
      <img src="https://img.shields.io/badge/QRCode.js-000?style=flat-square" />
      <img src="https://img.shields.io/badge/html2canvas-4ECDC4?style=flat-square" />
      <img src="https://img.shields.io/badge/Flatpickr-4A90D9?style=flat-square" />
    </td>
  </tr>
</table>

---

## 📂 Project Structure

```bash
hostel-portal-2/
│
├── 🔑 firebase-config.example.js   # ⬅️ Copy → firebase-config.js & add keys
│
├── 📄 index.html                    # Student Dashboard
├── 📄 admin.html                    # Admin Control Panel
├── 📄 login.html                    # Authentication Page
├── 📄 booking.html                  # Room Booking (Heatmap)
├── 📄 outpass.html                  # Outpass System (QR Codes)
├── 📄 mess-menu.html                # Mess Menu & Ratings
├── 📄 complaints.html               # Complaint System
├── 📄 profile.html                  # Student Profile & Digital ID
├── 📄 gate-kiosk.html               # Security Gate Interface
│
├── 📁 js/
│   ├── 📁 auth/                     # Auth handlers & guards
│   ├── 📁 firebase/                 # Firebase SDK wrappers
│   ├── 📁 core/                     # DB services & constants
│   ├── 📁 security/                 # Encryption & audit utils
│   ├── 📁 components/               # Reusable UI components
│   ├── admin.js                     # Admin logic (80KB+)
│   ├── booking.js                   # Room booking logic
│   ├── outpass.js                   # Outpass logic
│   └── mess-menu.js                 # Mess menu logic
│
├── 📁 css/                          # Stylesheets
├── 📁 assets/                       # Images & icons
└── .gitignore
```

---

## ⚙️ Installation & Setup

### Prerequisites

| Requirement | Details |
|-------------|---------|
| 🔥 Firebase Account | Free tier works — [Sign up here](https://firebase.google.com/) |
| 💻 Code Editor | VS Code recommended |
| 🌐 Local Server | Live Server extension, Python, or Node.js |

### Step 1 — Clone

```bash
git clone https://github.com/likhith3035/hostel-portal-2.git
cd hostel-portal-2
```

### Step 2 — Firebase Setup

1. Create a project at [Firebase Console](https://console.firebase.google.com/)
2. Enable **Authentication** → Sign-in method → **Email/Password**
3. Enable **Cloud Firestore** → Create database → **Test mode**

### Step 3 — Configure Keys

```bash
# Copy the example config
cp firebase-config.example.js firebase-config.js        # Mac/Linux
copy firebase-config.example.js firebase-config.js      # Windows
```

Open `firebase-config.js` and paste your Firebase keys:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",                    // ← from Firebase Console
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};
```


### Step 3.1 — EmailJS Setup (Optional)

This project uses **EmailJS** for sending emails without a backend server.

1.  Create an account at [EmailJS](https://www.emailjs.com/).
2.  Create a **Service** (e.g., Gmail).
3.  Create an **Email Template**.
4.  Update the Public Key in `js/admin.js` and `js/outpass.js` where `emailjs.init()` is called.

```javascript
emailjs.init("YOUR_PUBLIC_KEY");
```

---

### Step 4 — Launch

| Method | Command |
|--------|---------|
| 🟢 **VS Code** | Right-click `index.html` → Open with Live Server |
| 🐍 **Python** | `python -m http.server 8000` |
| 🟩 **Node.js** | `npx serve .` |

### Step 5 — Open

Navigate to `http://localhost:8000` — You're all set! 🎉

---

## 🚀 Deployment

The easiest way to deploy this project is with **Netlify**.

### Option 1: Drag & Drop (Recommended)
1.  Go to [Netlify Drop](https://app.netlify.com/drop).
2.  Drag the `hostel-portal-2` folder onto the page.
3.  **Done!** Your site is live. 

> [!IMPORTANT]  
> Remember to add your Netlify domain (e.g., `https://your-site.netlify.app`) to **Firebase Console → Authentication → Settings → Authorized Domains** to allow sign-ins.

### Option 2: Netlify CLI
```bash
npm install netlify-cli -g
netlify login
netlify deploy --prod
```

### Option 3: Vercel / GitHub Pages
- **Vercel**: Install Vercel CLI or import from GitHub.
- **GitHub Pages**: Not recommended for this specific setup due to SPA routing with history API, but possible with configuration.

---

## 🔮 Roadmap

- [ ] **Push Notifications**: Real-time alerts for outpass approvals.
- [ ] **Parent Portal**: Dedicated login for parents to view attendance and expenses.
- [ ] **Payment Gateway**: Integration for hostel fee payments.
- [ ] **AI Chatbot**: For answering common student queries regarding rules and mess.

---

## ❓ Troubleshooting

| Issue | Solution |
|-------|----------|
| **White Screen / No Data** | Check your internet connection and ensure Firestore rules allow read access. |
| **Login Fails** | Verify that you have created an account in the Authentication tab of Firebase Console. |
| **Map Not Loading** | Ensure `booking.js` is correctly linked and your browser supports SVG rendering. |

---

## 📈 Star History

<p align="center">
  <a href="https://star-history.com/#likhith3035/hostel-portal-2&Date">
    <img src="https://api.star-history.com/svg?repos=likhith3035/hostel-portal-2&type=Date" alt="Star History Chart" width="100%">
  </a>
</p>

---

## 🤝 Contributing


Contributions are welcome! Here's how:

```bash
# 1. Fork & Clone
git clone https://github.com/YOUR_USERNAME/hostel-portal-2.git

# 2. Create a branch
git checkout -b feature/AmazingFeature

# 3. Make your changes & commit
git commit -m "Add some AmazingFeature"

# 4. Push & open a PR
git push origin feature/AmazingFeature
```

---

## ✨ Contributors

<a href="https://github.com/likhith3035/hostel-portal-2/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=likhith3035/hostel-portal-2" alt="Contributors" />
</a>

---

## 👨‍💻 Developer

<p align="center">
  <b>Likhith Kami</b><br/>
  <sub>NBKRIST — AI & Data Science Department</sub>
</p>

<p align="center">
  <a href="https://github.com/likhith3035">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />
  </a>
  <a href="https://www.linkedin.com/in/likhith-kami/">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>
  <a href="https://www.instagram.com/lucky__likhith?igsh=bTgxYjZtZ2wwYmR4">
    <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" />
  </a>
</p>

---

<p align="center">
  <sub>Built with ❤️ for NBKRIST Students</sub><br/><br/>
  <img src="https://img.shields.io/badge/Made_with-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Powered_by-Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black" />
  <img src="https://img.shields.io/badge/Deployed_on-Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white" />
</p>

<p align="center">
  <sub>⭐ Star this repo if you found it useful!</sub>
</p>

---

## 📄 License

This project is licensed under the **MIT License**.

```text
MIT License

Copyright (c) 2025 Likhith Kami

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
