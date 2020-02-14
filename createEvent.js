
import React from 'react';
import {
  Link,
  Route,
  Switch
} from 'react-router';
import {BroswerRouter as Router} from 'react-router-dom';
import textFields from './input.js';

let titleStyle = {
  verticalAlign: "text-top"
};

class TopLinks extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
      <ul>
        <li><Link to="./input.js">React</Link></li>
      </ul>
      </Router>
    );
  }
}

class Title extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1 style={titleStyle}> Create New Event </h1>
    );
  }
}


class CalendarField extends React.Component {
  constructor(props) {
    super(props);
  }
}


class EventInfoFields extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form>
      <table>
      <tr>
        <td align="right"> Event Title: </td>
        <td align="left"> <input name="title"/> <br/> </td>
      </tr>
      <tr>
        <td align="right"> Description: </td>
        <td align="left"> <input name="description"/> <br/> </td>
      </tr>
      <tr>
        <td align="right"> Duration: </td>
        <td align="left"> Hours: <select name="hours" id="duration-hours">
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                  </select> <br/> </td>
        <td align="left"> Minutes: <select name="minutes" id="duration-minutes">
                                    <option value="0">0</option>
                                    <option value="15">15</option>
                                    <option value="30">30</option>
                                    <option value="45">45</option>
                                  </select> <br/> </td>
      </tr>
      </table>
      </form>
    );
  }
}


class InvitePeopleFields extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form>
      <h2>Invite People</h2>
      <table>
      <tr>
        <td align="right"> Email: </td>
        <td align="left"> <input type="email"
                                 name="email">
                          </input> <br/> </td>
      </tr>
      <tr>
        <td align="right"> RSVP Deadline: </td>
        <td align="left"> Weeks: <select name="weeks" id="rsvp-weeks">
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                  </select> <br/> </td>
        <td align="left"> Days: <select name="days" id="rsvp-days">
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                  </select> <br/> </td>
        <td align="left"> Hours: <select name="hours" id="rsvp-hours">
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                  </select> <br/> </td>
      </tr>
      </table>
      </form>
    );
  }
}

class CreateButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button type="submit">Create Event</button>
    );
  }
}


let fullCreatePage = <div>
                      <TopLinks/>
                      <Title/>
                      <EventInfoFields/>
                      <InvitePeopleFields/>
                      <CreateButton/>
                     </div>;

export default fullCreatePage;
