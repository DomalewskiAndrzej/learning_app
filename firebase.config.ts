// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAybK7a2tZG8vzsg3X-ohtS7T4HKZXtvXo",
  authDomain: "angular-learning-app-e069d.firebaseapp.com",
  projectId: "angular-learning-app-e069d",
  storageBucket: "angular-learning-app-e069d.appspot.com",
  messagingSenderId: "933601187275",
  appId: "1:933601187275:web:71f189cb76d936bdeb924e",
  measurementId: "G-KE90Y8LDZT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
