import 'css/Schedule.css';

import React, { Component } from 'react';
import Text from './Text';

export default class Schedule extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th><Text inline>Time</Text></th>
            <th><Text inline>Event</Text></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><time dateTime="9:00"><Text inline>9:00 AM</Text></time></td>
            <td><Text inline>Registration</Text></td>
          </tr>
          <tr>
            <td><time dateTime="11:00"><Text inline>11:00 AM</Text></time></td>
            <td><Text inline>Team Building 1</Text></td>
          </tr>
          <tr>
            <td><time dateTime="12:00"><Text inline>12:00 PM</Text></time></td>
            <td><Text inline>Team Building 2</Text></td>
          </tr>
          <tr>
            <td><time dateTime="13:00"><Text inline>1:00 PM</Text></time></td>
            <td><Text inline>Lunch &amp; Network</Text></td>
          </tr>
          <tr>
            <td><time dateTime="14:00"><Text inline>2:00 PM</Text></time></td>
            <td><Text inline>Opening Ceremony</Text></td>
          </tr>
          <tr>
            <td><time dateTime="15:00"><Text inline>3:00 PM</Text></time></td>
            <td><Text inline>Tech Workshop 1</Text></td>
          </tr>
          <tr>
            <td><time dateTime="16:00"><Text inline>4:00 PM</Text></time></td>
            <td><Text inline>Tech Workshop 2</Text></td>
          </tr>
          <tr>
            <td><time dateTime="17:00"><Text inline>5:00 PM</Text></time></td>
            <td><Text inline>Tech Workshop 3</Text></td>
          </tr>
          <tr>
            <td><time dateTime="18:00"><Text inline>6:00 PM</Text></time></td>
            <td><Text inline>Tech Workshop 4</Text></td>
          </tr>
          <tr>
            <td><time dateTime="19:00"><Text inline>7:00 PM</Text></time></td>
            <td><Text inline>Dinner</Text></td>
          </tr>
          <tr>
            <td><time dateTime="19:30"><Text inline>7:30 PM</Text></time></td>
            <td><Text inline>Arcade Opens!</Text></td>
          </tr>
          <tr>
            <td><time dateTime="20:00"><Text inline>8:00 PM</Text></time></td>
            <td><Text inline>Entertainment</Text></td>
          </tr>
          <tr>
            <td><time dateTime="00:00"><Text inline>12:00 AM</Text></time></td>
            <td><Text inline>More Entertainment</Text></td>
          </tr>
          <tr>
            <td><time dateTime="1:00"><Text inline>1:00 AM</Text></time></td>
            <td><Text inline>Midnight Pizza</Text></td>
          </tr>
          <tr>
            <td><time dateTime="9:00"><Text inline>9:00 AM</Text></time></td>
            <td><Text inline>Breakfast</Text></td>
          </tr>
          <tr>
            <td><time dateTime="13:00"><Text inline>1:00 PM</Text></time></td>
            <td><Text inline>Lunch</Text></td>
          </tr>
          <tr>
            <td><time dateTime="14:00"><Text inline>2:00 PM</Text></time></td>
            <td><Text inline>Devpost Submissions</Text></td>
          </tr>
          <tr>
            <td><time dateTime="15:00"><Text inline>3:00 PM</Text></time></td>
            <td><Text inline>Hacking Ends</Text></td>
          </tr>
          <tr>
            <td><time dateTime="16:00"><Text inline>4:00 PM</Text></time></td>
            <td><Text inline>Judging Begins</Text></td>
          </tr>
          <tr>
            <td><time dateTime="17:00"><Text inline>5:00 PM</Text></time></td>
            <td><Text inline>Closing Ceremony</Text></td>
          </tr>
          <tr>
            <td><time dateTime="17:30"><Text inline>5:30 PM</Text></time></td>
            <td><Text inline>Return Equipment</Text></td>
          </tr>
        </tbody>
      </table>
    );
  }
}
