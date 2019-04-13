import 'css/Schedule.css';

import React, { Component } from 'react';
import Text from './Text';

export default class Schedule extends Component {
  render() {
    return (
      <table className="schedule">
        <thead>
          <tr>
            <th scope="col"><Text inline>Time</Text></th>
            <th scope="col"><Text inline>Event</Text></th>
          </tr>
        </thead>
        <tbody>
          {this.props.children}
        </tbody>
      </table>
    );
  }
}

export class ScheduleRow extends Component {
  render() {
    return (
      <tr className="schedule__row">
        <td><time dateTime={this.props.time}>
          <Text inline>
            {new Date(this.props.time).toLocaleTimeString(
              navigator.language,
              {hour: 'numeric', minute: '2-digit'}
            )}
          </Text>
        </time></td>
        <td>
          <Text inline>{this.props.event}</Text>
        </td>
      </tr>
    );
  }
}
