import React, {Component} from 'react';
import '../css/notificationRequest.css';
import { register } from '../service_worker';
import firebase from '../firebase';

export default class NotificationRequest extends Component {
	constructor(props) {
		super(props);
		
		let display = false;

		// check if user has denied permission
		if (Notification.permission === 'default') {
			display = true;
		}

		// dont display if the user has clicked no in the past (stored in a cookie)
		let cookies = document.cookie.split(";").join("").split("=");
		const displayNotificationRequestIndex = cookies.findIndex((cookie) => cookie === "displayNotificationRequest");

		if (displayNotificationRequestIndex >= 0 &&  cookies[displayNotificationRequestIndex + 1] === "false") {
			display = false;
		}
		
		this.state = {display};
		this.onYesClicked = this.onYesClicked.bind(this);
		this.onNoClicked = this.onNoClicked.bind(this);
	}

	onYesClicked() {
		if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
			// Service Worker isn't supported on this browser, disable or hide UI.
			// TODO: alert user it failed
			return;
		}

		var messaging = firebase.messaging();
		messaging.usePublicVapidKey("BGhQOdgIn795oJK7URFsF65Kju3eMFe3fKm_nvrJ91KkZB48hhz7HzkHGcomEzRs_TATVVSq3c9iaiWqITpYMIs");
		messaging.requestPermission().then(() => {
			messaging.onMessage((payload) => {
				console.log(payload);
			}); 
		}).catch((err) =>  {
			console.log("Failed to request permissions");
		});
		
		// const permissionResult = await Notification.requestPermission();

		// if (permissionResult !== 'granted') {
		// 	// throw new Error('We weren\'t granted permission.');
		// }
		this.setState({ display: false });
	}

	onNoClicked() {
		// store no state in a cookie for 8 months
		this.setState({display: false});
		
		let now = new Date(Date.now());
		now.setMonth(now.getMonth() + 8);
		document.cookie = `displayNotificationRequest=false; expires=${now};`;
	}

  render() {
		if (this.state.display) {
			return (
				<div className="request">
					<h4>Would you like to recieve event notifications?</h4>
					<button style={{marginTop: "10px"}} className="button" onClick={this.onYesClicked}>Yes</button>
					<button className="button" onClick={this.onNoClicked}>No</button>
				</div>
			);
		} else {
			return <div></div>;
		}
  }
}
