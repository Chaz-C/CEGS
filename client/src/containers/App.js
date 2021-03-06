import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.handlePlan = this.handlePlan.bind(this);
  }

  handlePlan() {
    this.props.history.push("/flightsform");
  }

  render() {
    return (
    	<div id="home">
        <img id="homepage-pic" src="assets/homepage-pic.jpg" alt="Homepage Pic" />
        <div id="description">
          <p>Aloha and welcome to Hele! Hele means "go" or "travel" in Hawaiian and this site will help you do just that. Pick a destination and easily search for flights, hotels, and rental cars. Your travel information will be conveniently stored in your personal itinerary so all you have to do is go. What are you waiting for? Adventure awaits!</p>
        </div>
        <button className="submitBtn" onClick={this.handlePlan}>Plan Your Adventure Today</button>
      </div>
    );
  }
}

export default App;