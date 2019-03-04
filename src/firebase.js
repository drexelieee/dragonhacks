import firebase from 'firebase';

// Initialize Firebase
var config = {
	apiKey: "AIzaSyAxL0Nq9tIlloiMbG-hqNbfQ6PzKxmExvw",
	authDomain: "webpushtest-a7d37.firebaseapp.com",
	databaseURL: "https://webpushtest-a7d37.firebaseio.com",
	projectId: "webpushtest-a7d37",
	storageBucket: "webpushtest-a7d37.appspot.com",
	messagingSenderId: "1096100270231"
};
firebase.initializeApp(config);
export default firebase;