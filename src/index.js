import React from 'react';
import * as serviceWorker from './service_worker';


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register("./firebase-messaging-sw.js");
}
