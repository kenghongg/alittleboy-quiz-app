import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { LocalStorage } from 'quasar';
import { useUI } from 'stores/ui';

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
  measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// onAuthStateChanged(auth, (user) => {
//   const ui = useUI();

//   try {
//     ui.onAuthLoading();
//     if (user) {
//       LocalStorage.set('user', user);
//       ui.onAuthUser();
//     } else {
//       LocalStorage.remove('user');
//       ui.offAuthUser();
//     }
//   } finally {
//     ui.offAuthLoading();
//   }
// });

onAuthStateChanged(auth, async (user) => {
  const ui = useUI();
  try {
    ui.onAuthLoading();

    if (user) {
      LocalStorage.set('user', user);
      ui.onAuthUser();
    } else {
      LocalStorage.remove('user');
      ui.offAuthUser();
    }
  } finally {
    ui.offAuthLoading();
  }
});
