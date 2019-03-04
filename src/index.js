import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import * as serviceWorker from './service_worker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();

// registerServiceWorker();
// async function registerServiceWorker() {
// 	let registration;
// 	if ('serviceWorker' in navigator) {
// 		registration = await navigator.serviceWorker.getRegistration(`${process.env.PUBLIC_URL}/service_worker.js`)
// 	} else {
// 		return;
// 	}
	
// 	if (registration === undefined) {
// 		return;
// 	}
// 	// subscribe to push
// 	const subscribeOptions = {
// 		userVisibleOnly: true,
// 		applicationServerKey: urlBase64ToUint8Array("BDp4jgyXs-7iOxvXnsB8dXJh4OnfCcW4I2y42iAedgCfMf01hKbu15GHa4j4TX0qvmrb50PQXwb8LBWoTYfL12w")
// 	};

// 	const subscription = await registration.pushManager.subscribe(subscribeOptions);
// 	console.log(JSON.stringify(subscription));
// }

// function urlBase64ToUint8Array(base64String) {
// 	var padding = '='.repeat((4 - base64String.length % 4) % 4);
// 	var base64 = (base64String + padding)
// 			.replace(/\-/g, '+')
// 			.replace(/_/g, '/');

// 	var rawData = window.atob(base64);
// 	var outputArray = new Uint8Array(rawData.length);

// 	for (var i = 0; i < rawData.length; ++i) {
// 			outputArray[i] = rawData.charCodeAt(i);
// 	}
// 	return outputArray;
// }