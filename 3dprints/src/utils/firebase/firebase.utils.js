import { initializeApp } from 'firebase/app';

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAVkKb7jtjupLlqoHSdXZMiF1unyofvPSY",
  authDomain: "portfolio-react-site-d4951.firebaseapp.com",
  projectId: "portfolio-react-site-d4951",
  storageBucket: "portfolio-react-site-d4951.appspot.com",
  messagingSenderId: "145535152411",
  appId: "1:145535152411:web:c588538a6ee7b7ef4b23be"
};

  const firebaseApp = initializeApp(firebaseConfig);

  const signInOutProvider = new GoogleAuthProvider()

  signInOutProvider.setCustomParameters({
    prompt: 'select_account',
  });
  

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    console.log(userAuth);
  };

  export const auth = getAuth()
  export const signInWithGooglePopup = () => signInWithPopup(auth, signInOutProvider)