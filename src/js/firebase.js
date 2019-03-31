import firebase from 'firebase';
import { apiKey } from './private';

// Initialize Firebase
var config = {
  apiKey,
  authDomain: "dragon-hacks-website.firebaseapp.com",
  databaseURL: "https://dragon-hacks-website.firebaseio.com",
  projectId: "dragon-hacks-website",
  storageBucket: "dragon-hacks-website.appspot.com",
  messagingSenderId: "155813667568"
};
firebase.initializeApp(config);
firebase.functions();
export default firebase;
