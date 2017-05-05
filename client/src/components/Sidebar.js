import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <ul>
          <li><Link to='/flightsform'>Flight</Link></li>
          <li><Link to='/hotelsform'>Hotel</Link></li>
          <li><Link to='/carsform'>Car</Link></li>
          <li><Link to='/itinerary'>Itinerary</Link></li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;