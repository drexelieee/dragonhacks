import React from 'react';
import ReactDOM from 'react-dom';
import App from 'js/component/app';
import * as serviceWorker from './service_worker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register("./firebase-messaging-sw.js");
}
