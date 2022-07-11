import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8S_W3R1nt7JKtYee29uBH4Qg4oab2MvU",
  authDomain: "vuefireblog-e6beb.firebaseapp.com",
  projectId: "vuefireblog-e6beb",
  storageBucket: "vuefireblog-e6beb.appspot.com",
  messagingSenderId: "99766677965",
  appId: "1:99766677965:web:5c9aaf40cacf475bd8d484",
};
//初始化application
const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
