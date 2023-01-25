// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDZkNXkU_Ph96nEsznjqvNUTstpTUncDrc",
//   authDomain: "local-hospital-cf73f.firebaseapp.com",
//   projectId: "local-hospital-cf73f",
//   storageBucket: "local-hospital-cf73f.appspot.com",
//   messagingSenderId: "288437164968",
//   appId: "1:288437164968:web:b51b93badb64a8d9901b9d",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app;
