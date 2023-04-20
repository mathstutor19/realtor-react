// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAEmQdFi1vxpebf_-8szQsXZZTJONkqt1I',
  authDomain: 'realtor-clone-react-eca31.firebaseapp.com',
  projectId: 'realtor-clone-react-eca31',
  storageBucket: 'realtor-clone-react-eca31.appspot.com',
  messagingSenderId: '218727983462',
  appId: '1:218727983462:web:8777fa7ef4c7936acd40a7',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
