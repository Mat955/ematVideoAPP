import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCByIa39v9--Rm42Ajigs-oLOCvvoENkh0",
  authDomain: "emat-videoapp.firebaseapp.com",
  projectId: "emat-videoapp",
  storageBucket: "emat-videoapp.appspot.com",
  messagingSenderId: "949903960467",
  appId: "1:949903960467:web:b9923f557cd3bb4baaa066"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();


export { auth }
export default db;