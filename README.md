🍔 Crazee burger Platform
This project is a React.js application that allows users to order burgers and juices. The platform includes an admin interface where authorized users can modify product details such as name, price, and image. Any changes made by the admin are automatically reflected in the user's basket if the product is already added.

🚀 Features

# User Interface:

Browse and order burgers and juices.
View cart and see total price updates in real-time.
Responsive design for seamless experience on all devices.
Admin Interface:

# Admin login for secure access.

Modify product details (name, price, image) directly from the admin panel.
Automatic updates to the user’s basket when a product's details are changed by the admin.
Real-time Updates:
Products in the user's basket are automatically updated when the admin modifies any product information.
Real-time synchronization ensures users always see the latest product information.

# Frontend:

- React.js with Hooks
- React Router for navigation
- Context API for state management
- Firebase Firestore for real-time database and data synchronization

# Backend:

- Firebase Firestore (No need for a traditional server; Firebase handles all backend functionality)

📚 Setup & Installation

# Clone the repository:

git clone https://github.com/KellaSoa/crazee-burger.git
cd crazee-burger

# Install dependencies:

npm install

# Set up Firebase:

- Create a Firebase project at Firebase Console.
- Set up Firestore Database and Firebase Authentication.
- Obtain your Firebase config object from the Firebase console and add it to a firebase-config.js file in your src directory:

// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
apiKey: "YOUR_API_KEY",
authDomain: "YOUR_AUTH_DOMAIN",
projectId: "YOUR_PROJECT_ID",
storageBucket: "YOUR_STORAGE_BUCKET",
messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
appId: "YOUR_APP_ID"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

# Start the development server:

npm start
