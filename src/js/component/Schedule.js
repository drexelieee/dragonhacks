import 'css/Schedule.css';

import React, { Component } from 'react';
import Text from './Text';

export default class Schedule extends Component {
  render() {
    return (
      <div className="schedule">
        <h1 className="schedule__title">{this.props.title}</h1>
        <table style={{borderCollapse: 'collapse'}}>
          <thead className="schedule__header">
            <tr>
              <th scope="col">Time</th>
              <th scope="col">Event</th>
            </tr>
          </thead>
          <tbody>
            {this.props.children}
          </tbody>
        </table>
      </div>
    );
  }
}

export class ScheduleRow extends Component {
  render() {
    return (
      <tr className="schedule__row">
        <td className="schedule__row-cell schedule__row-cell--time">
          <Text inline>
            {this.props.time}
          </Text>
        </td>
        <td className="schedule__row-cell">
          <Text inline>{this.props.event}</Text>
        </td>
      </tr>
    );
  }
}
