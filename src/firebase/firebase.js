import firebase from "firebase";
require("firebase/database");

const firebaseConfig = {
	apiKey: "AIzaSyBIZnJq42RWOO8AV8oqFNXNaJqhFyLOqJ4",
	authDomain: "expensify-ashish.firebaseapp.com",
	databaseURL: "https://expensify-ashish-default-rtdb.firebaseio.com",
	projectId: "expensify-ashish",
	storageBucket: "expensify-ashish.appspot.com",
	messagingSenderId: "102183227641",
	appId: "1:102183227641:web:8e76870de4b1b9f1825228",
	measurementId: "G-P9LN74BYV5",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };
