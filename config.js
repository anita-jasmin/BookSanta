import firebase from "firebase";
require("@firebase/firestore");
var firebaseConfig = {
  apiKey: "AIzaSyDZR8BFlPFIOrXk8jSeAE0wFI3mDjH1tBI",
  authDomain: "booksanta-44fae.firebaseapp.com",
  projectId: "booksanta-44fae",
  storageBucket: "booksanta-44fae.appspot.com",
  messagingSenderId: "594123858103",
  appId: "1:594123858103:web:1c64c1545caf77e55dad32",
};
// Initialize Firebase

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase.firestore();
