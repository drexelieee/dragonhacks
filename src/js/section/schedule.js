import React, { Component } from 'react';
import '../../css/section/schedule.css';
import NotificationRequest from '../../component/notificationRequest';

export default class Schedule extends Component {
  render() {
    return (
      <section id="schedule">
        <header>
          <h2>Schedule</h2>
        </header>
        <NotificationRequest/>
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Event</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Placeholder</td>
              <td>Placeholder</td>
              <td>Placeholder</td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  }
}
