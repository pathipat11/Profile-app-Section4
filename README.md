# 📱 Profile-app-Section4

A modern and interactive profile showcase app built using **React Native** and **Expo Router**. This app displays personal profile information, course details, and allows user authentication with a clean and elegant UI supporting both light and dark modes.

## ✨ Features

* 👤 **User Profile** with avatar, username, email, role, and creation date
* 🔐 **Authentication System**: Sign In / Sign Up with token-based session persistence
* 🧠 **Conditional Routing**: Redirect users based on authentication status
* 📘 **Course Information**: *Hybrid Mobile Application Programming (IN405109)*
* 👨‍🏫 **Instructor Details** with profile image
* 🌗 **Theme Toggle** (Dark / Light) powered by Context API
* 🔗 **Social Links** (Facebook, GitHub, LinkedIn)
* 💬 **Interactive Cards** with smooth animations
* 📝 **Profile Editing**: Edit username and email via a modal popup
* 📱 **Mobile Responsive**: Optimized for smartphones and tablets

## 🎬 Demo Video

Here is a quick GIF showing the app's interface and interactions:

<img src="assets/video/profile-app.gif" alt="App Demo" width="250" />

*Replace `assets/video/profile-app.gif` with your GIF file path.*

## 🛠️ Tech Stack

* React Native
* Expo
* Expo Router
* React Native Vector Icons
* Context API
* AsyncStorage (for token storage)
* Animated API

## 🚀 Getting Started

### Prerequisites

* Node.js
* Expo CLI (`npm install -g expo-cli`)

### Installation

```bash
npm install
```

### Running the App

```bash
npx expo start
```

Then scan the QR code with **Expo Go** or use an emulator.

## 🔄 Project Structure

```
Profile-app-Section3/
├── app/
│   ├── index.jsx             # Redirects based on auth token
│   ├── main.jsx              # Main Profile Page after login
│   ├── signin.jsx            # Sign In screen
│   ├── signup.jsx            # Sign Up screen
│   ├── about.jsx             # About the Course page
│   ├── book.jsx              # Book Collection page
│   ├── profile.jsx           # User Profile screen (from menu)
│   └── _layout.js            # Stack Navigation with Theme + Auth
├── components/
│   ├── ThemeToggle.jsx       # Theme switch in header
│   └── AuthToggle.jsx        # Avatar or Sign In/Up button in header
├── context/
│   └── ThemeContext.js       # Theme state (Dark / Light)
├── assets/
│   └── image/
│       ├── profile.jpg       # User profile image
│       ├── teacher.jpg       # Instructor image
│       └── demo.gif          # Demo GIF
├── package.json
└── README.md
```

## 🦠 Demo Highlights

* 🔄 Auto redirect to `/signin` if token is missing
* 🧮 AsyncStorage-based session memory
* 👤 Avatar in header using user's first letter
* 🎨 Color themes switch in real-time
* ✏️ Edit profile via modal popup
* 📱 Fully responsive UI for mobile devices
* 🎬 Demo GIF to showcase interactions

## 👤 Author

**Pathipat Mattra**

* 🌐 Facebook: [Pathipat Mattra](https://facebook.com/pathipat.mattra)
* 💻 GitHub: [pathipat11](https://github.com/pathipat11)
* 💼 LinkedIn: [Pathipat Mattra](https://linkedin.com/in/viixl)

---

Crafted with ❤️ for the course *Hybrid Mobile Application Programming* (**IN405109**)
**Computer Science, Khon Kaen University**
