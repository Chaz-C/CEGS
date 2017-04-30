import React, { Component } from 'react';
import { connect } from 'react-redux';
import { flightDetails } from '../redux/actions/flightsAction';

class Flights extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('FLIGHTS LIST PAGE', this.props);
    return (
      <div>
        <h1>FLIGHTS LIST PAGE</h1>

        {this.props.flights.flights.map( ({ id, saleTotal, slice, pricing }) =>
            <FlightContainer key={ id } id={ id } saleTotal={ saleTotal } slice={ slice } pricing={ pricing } carrierObj={ this.props.flights.carrierCodes } onFlightDetails={ this.props.onFlightDetails } history={ this.props.history }/>
          )
        }
      </div>
    );
  }
}

class FlightContainer extends Component {
  constructor(props) {
    super(props);

    this.detailsHandler = this.detailsHandler.bind(this);
  }

  detailsHandler() {
    this.props.onFlightDetails(this.props.pricing, this.props.saleTotal, this.props.slice);
    this.props.history.push('/flightdetails');
  }

  render() {
    return (
      <div>
        <h4>{ this.props.saleTotal }</h4>
        { this.props.slice.map( ({ duration, segment}) =>
          <SliceDiv key={ duration } segment={ segment } carrierObj={ this.props.carrierObj } />
        )}
        <button onClick={ this.detailsHandler }>Details</button>
      </div>
    );
  }
}

const SliceDiv = ( { id, segment, carrierObj } ) => (
  <div className='slice-div'>
    { segment.map( ({ id, cabin, leg, flight }) => (
      <SegmentDiv key={ id } cabin={ cabin } leg={ leg } carrier={ flight.carrier } carrierObj={ carrierObj } />
      )
    ) }
  </div>
);

const SegmentDiv = ( { id, cabin, leg, carrier, carrierObj } ) => (
  <div>
    <p>Cabin: { cabin }</p>
    <p>{ leg[0].origin} => { leg[0].destination }</p>
    <p>Airlines: { carrierObj[carrier] }</p>
  </div>
);

const mapStateToProps = (state) => {
  return {
    flights: state.flights
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFlightDetails: (pricing, saleTotal, slice) => {
      dispatch(flightDetails(pricing, saleTotal, slice))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Flights);