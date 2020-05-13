
/*import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchRentalById } from 'actions';
import { capitalize } from 'helpers/functions';


class RentalDetail extends React.Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(fetchRentalById(id))
  }

  render() {
    const { rental } = this.props;
    return (
      <section id="rentalDetails">
        <div className="upper-section">
          <div className="row">
            <div className="col-md-6">
              
              <img src={rental.image} alt={rental.title} />
            </div>
            <div className="col-md-6">
              
              <img src={rental.image} alt={rental.title} />
            </div>
          </div>
        </div>

        <div className="details-section">
          <div className="row">
            <div className="col-md-8">
              <div className="rental">
            
                <h2 className={`rental-type type-${rental.category}`}>
                  {rental.shared ? '' : ''} {rental.category}
                </h2>
                
                <h1 className="rental-title">{rental.title}</h1>
                 
                <h2 className="rental-city">{capitalize(rental.city)}</h2>
               
                 
                <p className="rental-description">
                  {rental.description}
                </p>
                <hr/>
                <div className="rental-assets">
                  <h3 className="title">Features</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <span>
                        <FontAwesomeIcon icon="asterisk" /> Spacious
                      </span>
                      <span>
                        <FontAwesomeIcon icon="thermometer" /> Hand Break
                      </span>
                      <span>
                        <FontAwesomeIcon icon="location-arrow" /> Rear Cam
                      </span>
                    </div>
                    <div className="col-md-6">
                      <span>
                        <FontAwesomeIcon icon="desktop" /> Smart Assistant
                      </span>
                      <span>
                        <FontAwesomeIcon icon="cube" /> Comfort
                      </span>
                      <span>
                        <FontAwesomeIcon icon="archive" /> Leg Room
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4"> BOOKING</div>
          </div>
        </div>
      </section> 
    )
  }
}

const mapStateToProps = ({rental}) => ({ rental })

const RentalDetailWithRouter = withRouter(RentalDetail);
export default connect(mapStateToProps)(RentalDetailWithRouter);
/*
import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchRentalById } from 'actions';
import RentalInfo from 'components/rental/RentalInfo';


class RentalDetail extends React.Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(fetchRentalById(id))
  }

  render() {
    const { rental, isFetching } = this.props;
    if (isFetching) { return null; }
    return (
      <section id="rentalDetails">
        <div className="upper-section">
          <div className="row">
            <div className="col-md-6">
              <img src={rental.image} alt={rental.title} />
            </div>
            <div className="col-md-6">
              {/* <!-- TODO: Display rental map -->
              <img src={rental.image} alt={rental.title} />
            </div>
          </div>
        </div>
        <div className="details-section">
          <div className="row">
            <div className="col-md-8">
              <RentalInfo rental={rental} />
            </div>
            <div className="col-md-4"> BOOKING</div>
          </div>
        </div>
      </section> 
    )
  }
}

const mapStateToProps = ({rental}) => 
  ({ rental: rental.item, isFetching: rental.isFetching })

const RentalDetailWithRouter = withRouter(RentalDetail);
export default connect(mapStateToProps)(RentalDetailWithRouter);

import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchRentalById } from '../actions/bookings';
import RentalInfo from 'components/rental/RentalInfo';
import TomMap from 'components/map/TomMap';
import BookingReserve from 'components/booking/BookingReserve';

class RentalDetail extends React.Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(fetchRentalById(id))
  }

  componentWillUnmount() {
    this.props.dispatch({type: 'UNMOUNT_RENTAL'});
  }

  get location() {
    const { rental: { street, city }} = this.props;
    return street && city && city + ', ' + street
  }

  render() {
    const { rental, isFetching, isAuth } = this.props;
    if (isFetching || !rental._id) { return null; }
    return (
      <section id="rentalDetails">
        <div className="upper-section">
          <div className="row">
            <div className="col-md-6">
              <img src={rental.image} alt={rental.title} />
            </div>
            <div className="col-md-6">
              <TomMap location={this.location}/>
            </div>
          </div>
        </div>
        <div className="details-section">
          <div className="row">
            <div className="col-md-8">
              <RentalInfo rental={rental} />
            </div>
            <div className="col-md-4"> 
              <BookingReserve rental={rental} isAuth={isAuth}/>
            </div>
          </div>
        </div>
      </section> 
    )
  }
}

const mapStateToProps = ({rental, auth: { isAuth }}) => 
  ({ rental: rental.item, isFetching: rental.isFetching, isAuth: isAuth })

const RentalDetailWithRouter = withRouter(RentalDetail);
export default connect(mapStateToProps)(RentalDetailWithRouter);

import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchRentalById } from '../actions/rentals';
import RentalInfo from 'components/rental/RentalInfo';
//import TomMap from 'components/map/TomMap';
import BookingReserve from 'components/booking/BookingReserve';

class RentalDetail extends React.Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(fetchRentalById(id))
  }

  componentWillUnmount() {
    this.props.dispatch({type: 'UNMOUNT_RENTAL'});
  }

  get location() {
    const { rental: { street, city }} = this.props;
    return street && city && city + ', ' + street
  }

  render() {
    const { rental, isFetching } = this.props;
    if (isFetching || !rental._id) { return null; }
    return (
      <section id="rentalDetails">
        <div className="upper-section">
          <div className="row">
            <div className="col-md-6">
              <img src={rental.image} alt={rental.title} />
            </div>
           
          </div>
        </div>
        <div className="details-section">
          <div className="row">
            <div className="col-md-8">
              <RentalInfo rental={rental} />
            </div>
            <div className="col-md-4"> 
              <BookingReserve rental={rental} />
            </div>
          </div>
        </div>
      </section> 
    )
  }
}

const mapStateToProps = ({rental}) => 
  ({ rental: rental.item, isFetching: rental.isFetching })

const RentalDetailWithRouter = withRouter(RentalDetail);
export default connect(mapStateToProps)(RentalDetailWithRouter);

import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchRentalById } from 'actions';
import RentalInfo from 'components/rental/RentalInfo';
import TomMap from 'components/map/TomMap';


class RentalDetail extends React.Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(fetchRentalById(id))
  }

  componentWillUnmount() {
    this.props.dispatch({type: 'UNMOUNT_RENTAL'});
  }

  get location() {
    const { rental: { street, city }} = this.props;
    return street && city && city + ', ' + street
  }

  render() {
    const { rental, isFetching } = this.props;
    if (isFetching) { return null; }
    return (
      <section id="rentalDetails">
        <div className="upper-section">
          <div className="row">
            <div className="col-md-6">
              <img src={rental.image} alt={rental.title} />
            </div>
            <div className="col-md-6">
              <TomMap location={this.location}/>
            </div>
          </div>
        </div>
        <div className="details-section">
          <div className="row">
            <div className="col-md-8">
              <RentalInfo rental={rental} />
            </div>
            <div className="col-md-4"> BOOKING</div>
          </div>
        </div>
      </section> 
    )
  }
}

const mapStateToProps = ({rental}) => 
  ({ rental: rental.item, isFetching: rental.isFetching })

const RentalDetailWithRouter = withRouter(RentalDetail);
export default connect(mapStateToProps)(RentalDetailWithRouter);

import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchRentalById } from 'actions';
import RentalInfo from 'components/rental/RentalInfo';
import TomMap from 'components/map/TomMap';
import BookingReserve from 'components/booking/BookingReserve';

class RentalDetail extends React.Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(fetchRentalById(id))
  }

  componentWillUnmount() {
    this.props.dispatch({type: 'UNMOUNT_RENTAL'});
  }

  get location() {
    const { rental: { street, city }} = this.props;
    return street && city && city + ', ' + street
  }

  render() {
    const { rental, isFetching } = this.props;
    if (isFetching) { return null; }
    return (
      <section id="rentalDetails">
        <div className="upper-section">
          <div className="row">
            <div className="col-md-6">
              <img src={rental.image} alt={rental.title} />
            </div>
            <div className="col-md-6">
              <TomMap location={this.location}/>
            </div>
          </div>
        </div>
        <div className="details-section">
          <div className="row">
            <div className="col-md-8">
              <RentalInfo rental={rental} />
            </div>
            <div className="col-md-4"> 
              <BookingReserve />
            </div>
          </div>
        </div>
      </section> 
    )
  }
}

const mapStateToProps = ({rental}) => 
  ({ rental: rental.item, isFetching: rental.isFetching })

const RentalDetailWithRouter = withRouter(RentalDetail);
export default connect(mapStateToProps)(RentalDetailWithRouter);

import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchRentalById } from 'actions';
import RentalInfo from 'components/rental/RentalInfo';
import TomMap from 'components/map/TomMap';
import BookingReserve from 'components/booking/BookingReserve';

class RentalDetail extends React.Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(fetchRentalById(id))
  }

  componentWillUnmount() {
    this.props.dispatch({type: 'UNMOUNT_RENTAL'});
  }

  get location() {
    const { rental: { street, city }} = this.props;
    return street && city && city + ', ' + street
  }

  render() {
    const { rental, isFetching } = this.props;
    if (isFetching || !rental._id) { return null; }
    return (
      <section id="rentalDetails">
        <div className="upper-section">
          <div className="row">
            <div className="col-md-6">
              <img src={rental.image} alt={rental.title} />
            </div>
            <div className="col-md-6">
              <TomMap location={this.location}/>
            </div>
          </div>
        </div>
        <div className="details-section">
          <div className="row">
            <div className="col-md-8">
              <RentalInfo rental={rental} />
            </div>
            <div className="col-md-4"> 
              <BookingReserve rental={rental} />
            </div>
          </div>
        </div>
      </section> 
    )
  }
}

const mapStateToProps = ({rental}) => 
  ({ rental: rental.item, isFetching: rental.isFetching })

const RentalDetailWithRouter = withRouter(RentalDetail);
export default connect(mapStateToProps)(RentalDetailWithRouter);

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchRentalById } from 'actions';
import { capitalize } from 'helpers/functions';


class RentalDetail extends React.Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(fetchRentalById(id))
  }

  render() {
    const { rental } = this.props;
    return (
      <section id="rentalDetails">
        <div className="upper-section">
          <div className="row">
            <div className="col-md-6">
              {/* <!-- TODO: Display rental image --> *
              <img src={rental.image} alt={rental.title} />
            </div>
            <div className="col-md-6">
              {/* <!-- TODO: Display rental map --> 
              <img src={rental.image} alt={rental.title} />
            </div>
          </div>
        </div>

        <div className="details-section">
          <div className="row">
            <div className="col-md-8">
              <div className="rental">
                {/* <!-- TODO: Display shared category --> 
                <h2 className={`rental-type type-${rental.category}`
                  {rental.shared ? 'Shared' : 'Whole'} {rental.category}
                </h2>
                {/* <!-- TODO: Display title --> 
                <h1 className="rental-title">{rental.title}</h1>
                {/* <!-- TODO: Display city --> 
                <h2 className="rental-city">{capitalize(rental.city)}</h2>
                <div className="rental-room-info">
                  {/* <!-- TODO: Display numOfRooms --> 
                  <span><i className="fa fa-building"></i>{rental.numOfRooms} bedrooms</span>
                    {/* // <!-- TODO: Display numOfRooms + 4 --> 
                  <span><i className="fa fa-user"></i> {rental.numOfRooms + 4} guests</span>
                  {/* // <!-- TODO: Display numOfRooms + 2 --> 
                  <span><i className="fa fa-bed"></i> {rental.numOfRooms + 2} beds</span>
                </div>
                {/* <!-- TODO: Display description --> 
                <p className="rental-description">
                  {rental.description}
                </p>
                <hr/>
                <div className="rental-assets">
                  <h3 className="title">Assets</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <span>
                        <FontAwesomeIcon icon="asterisk" /> Cooling
                      </span>
                      <span>
                        <FontAwesomeIcon icon="thermometer" /> Heating
                      </span>
                      <span>
                        <FontAwesomeIcon icon="location-arrow" /> Iron
                      </span>
                    </div>
                    <div className="col-md-6">
                      <span>
                        <FontAwesomeIcon icon="desktop" /> Working area
                      </span>
                      <span>
                        <FontAwesomeIcon icon="cube" /> Washing machine
                      </span>
                      <span>
                        <FontAwesomeIcon icon="archive" /> Dishwasher
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4"> BOOKING</div>
          </div>
        </div>
      </section> 
    )
  }
}

const mapStateToProps = ({rental}) => ({ rental })

const RentalDetailWithRouter = withRouter(RentalDetail);
export default connect(mapStateToProps)(RentalDetailWithRouter);
  

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchRentalById } from 'actions';
import { capitalize } from 'helpers/functions';


class RentalDetail extends React.Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(fetchRentalById(id))
  }

  render() {
    const { rental } = this.props;
    return (
      <section id="rentalDetails">
        <div className="upper-section">
          <div className="row">
            <div className="col-md-6">
              {/* <!-- TODO: Display rental image --> 
              <img src={rental.image} alt={rental.title} />
            </div>
            <div className="col-md-6">
              {/* <!-- TODO: Display rental map --> 
              <img src={rental.image} alt={rental.title} />
            </div>
          </div>
        </div>

        <div className="details-section">
          <div className="row">
            <div className="col-md-8">
              <div className="rental">
                {/* <!-- TODO: Display shared category --> 
                <h2 className={`rental-type type-${rental.category}`}>
                  {rental.shared ? '' : ''} {rental.category}
                </h2>
                {/* <!-- TODO: Display title --> 
                <h1 className="rental-title">{rental.title}</h1>
                {/* <!-- TODO: Display city --> 
                <h2 className="rental-city">{capitalize(rental.city)}</h2>
                
              
                {/* <!-- TODO: Display description --> 
                <p className="rental-description">
                  {rental.description}
                </p>
                <hr/>
                <div className="rental-assets">
                  <h3 className="title">Features</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <span>
                        <FontAwesomeIcon icon="asterisk" /> Smooth Breaking
                      </span>
                      <span>
                        <FontAwesomeIcon icon="thermometer" /> Spacious
                      </span>
                      <span>
                        <FontAwesomeIcon icon="location-arrow" /> Comfort
                      </span>
                    </div>
                    <div className="col-md-6">
                      <span>
                        <FontAwesomeIcon icon="desktop" /> Rear Cam
                      </span>
                      <span>
                        <FontAwesomeIcon icon="cube" /> Super Mileage
                      </span>
                      <span>
                        <FontAwesomeIcon icon="archive" /> Safety Checked
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4"> BOOKING</div>
          </div>
        </div>
      </section> 
    )
  }
}

const mapStateToProps = ({rental}) => ({ rental })

const RentalDetailWithRouter = withRouter(RentalDetail);
export default connect(mapStateToProps)(RentalDetailWithRouter);*/

/*import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchRentalById } from 'actions';
import RentalInfo from 'components/rental/RentalInfo';
import TomMap from 'components/map/TomMap';
import BookingReserve from 'components/booking/BookingReserve';

class RentalDetail extends React.Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(fetchRentalById(id))
  }

  componentWillUnmount() {
    this.props.dispatch({type: 'UNMOUNT_RENTAL'});
  }

  get location() {
    const { rental: { street, city }} = this.props;
    return street && city && city + ', ' + street
  }

  render() {
    const { rental, isFetching, isAuth } = this.props;
    if (isFetching || !rental._id) { return null; }
    return (
      <section id="rentalDetails">
        <div className="upper-section">
          <div className="row">
            <div className="col-md-6">
              <img src={rental.image} alt={rental.title} />
            </div>
            <div className="col-md-6">
              <TomMap location={this.location}/>
            </div>
          </div>
        </div>
        <div className="details-section">
          <div className="row">
            <div className="col-md-8">
              <RentalInfo rental={rental} />
            </div>
            <div className="col-md-4"> 
              <BookingReserve rental={rental} isAuth={isAuth}/>
            </div>
          </div>
        </div>
      </section> 
    )
  }
}

const mapStateToProps = ({rental, auth: { isAuth }}) => 
  ({ rental: rental.item, isFetching: rental.isFetching, isAuth: isAuth })

const RentalDetailWithRouter = withRouter(RentalDetail);
export default connect(mapStateToProps)(RentalDetailWithRouter);

import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchRentalById } from 'actions';
import RentalInfo from 'components/rental/RentalInfo';
import TomMap from 'components/map/TomMap';
import BookingReserve from 'components/booking/BookingReserve';

class RentalDetail extends React.Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(fetchRentalById(id))
  }

  componentWillUnmount() {
    this.props.dispatch({type: 'UNMOUNT_RENTAL'});
  }

  get location() {
    const { rental: { street, city }} = this.props;
    return street && city && city + ', ' + street
  }

  render() {
    const { rental, isFetching, isAuth } = this.props;
    if (isFetching || !rental._id) { return null; }
    return (
      <section id="rentalDetails">
        <div className="upper-section">
          <div className="row">
            <div className="col-md-6">
              <img src={rental.image} alt={rental.title} />
            </div>
            <div className="col-md-6">
              <TomMap location={this.location}/>
            </div>
          </div>
        </div>
        <div className="details-section">
          <div className="row">
            <div className="col-md-8">
              <RentalInfo rental={rental} />
            </div>
            <div className="col-md-4"> 
              <BookingReserve rental={rental} isAuth={isAuth}/>
            </div>
          </div>
        </div>
      </section> 
    )
  }
}

const mapStateToProps = ({rental, auth: { isAuth }}) => 
  ({ rental: rental.item, isFetching: rental.isFetching, isAuth: isAuth })

const RentalDetailWithRouter = withRouter(RentalDetail);
export default connect(mapStateToProps)(RentalDetailWithRouter);

import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchRentalById } from 'actions';
import RentalInfo from 'components/rental/RentalInfo';
import TomMap from 'components/map/TomMap';
import BookingReserve from 'components/booking/BookingReserve';

class RentalDetail extends React.Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(fetchRentalById(id))
  }

  componentWillUnmount() {
    this.props.dispatch({type: 'UNMOUNT_RENTAL'});
  }

  get location() {
    const { rental: { street, city }} = this.props;
    return street && city && city + ', ' + street
  }

  render() {
    const { rental, isFetching } = this.props;
    if (isFetching) { return null; }
    return (
      <section id="rentalDetails">
        <div className="upper-section">
          <div className="row">
            <div className="col-md-6">
              <img src={rental.image} alt={rental.title} />
            </div>
            <div className="col-md-6">
              <TomMap location={this.location}/>
            </div>
          </div>
        </div>
        <div className="details-section">
          <div className="row">
            <div className="col-md-8">
              <RentalInfo rental={rental} />
            </div>
            <div className="col-md-4"> 
              <BookingReserve />
            </div>
          </div>
        </div>
      </section> 
    )
  }
}

const mapStateToProps = ({rental}) => 
  ({ rental: rental.item, isFetching: rental.isFetching })

const RentalDetailWithRouter = withRouter(RentalDetail);
export default connect(mapStateToProps)(RentalDetailWithRouter);

import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchRentalById } from 'actions';
import RentalInfo from 'components/rental/RentalInfo';
import TomMap from 'components/map/TomMap';
import BookingReserve from 'components/booking/BookingReserve';

class RentalDetail extends React.Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(fetchRentalById(id))
  }

  componentWillUnmount() {
    this.props.dispatch({type: 'UNMOUNT_RENTAL'});
  }

  get location() {
    const { rental: { street, city }} = this.props;
    return street && city && city + ', ' + street
  }

  render() {
    const { rental, isFetching } = this.props;
    if (isFetching || !rental._id) { return null; }
    return (
      <section id="rentalDetails">
        <div className="upper-section">
          <div className="row">
            <div className="col-md-6">
              <img src={rental.image} alt={rental.title} />
            </div>
            <div className="col-md-6">
              <TomMap location={this.location}/>
            </div>
          </div>
        </div>
        <div className="details-section">
          <div className="row">
            <div className="col-md-8">
              <RentalInfo rental={rental} />
            </div>
            <div className="col-md-4"> 
              <BookingReserve rental={rental} />
            </div>
          </div>
        </div>
      </section> 
    )
  }
}

const mapStateToProps = ({rental}) => 
  ({ rental: rental.item, isFetching: rental.isFetching })

const RentalDetailWithRouter = withRouter(RentalDetail);
export default connect(mapStateToProps)(RentalDetailWithRouter);

import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchRentalById } from 'actions';
import RentalInfo from 'components/rental/RentalInfo';
import TomMap from 'components/map/TomMap';
import BookingReserve from 'components/booking/BookingReserve';

class RentalDetail extends React.Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(fetchRentalById(id))
  }

  componentWillUnmount() {
    this.props.dispatch({type: 'UNMOUNT_RENTAL'});
  }

  get location() {
    const { rental: { street, city }} = this.props;
    return street && city && city + ', ' + street
  }

  render() {
    const { rental, isFetching } = this.props;
    if (isFetching || !rental._id) { return null; }
    return (
      <section id="rentalDetails">
        <div className="upper-section">
          <div className="row">
            <div className="col-md-6">
              <img src={rental.image} alt={rental.title} />
            </div>
            <div className="col-md-6">
              <TomMap location={this.location}/>
            </div>
          </div>
        </div>
        <div className="details-section">
          <div className="row">
            <div className="col-md-8">
              <RentalInfo rental={rental} />
            </div>
            <div className="col-md-4"> 
              <BookingReserve rental={rental} />
            </div>
          </div>
        </div>
      </section> 
    )
  }
}

const mapStateToProps = ({rental}) => 
  ({ rental: rental.item, isFetching: rental.isFetching })

const RentalDetailWithRouter = withRouter(RentalDetail);
export default connect(mapStateToProps)(RentalDetailWithRouter);

import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchRentalById } from 'actions';
import RentalInfo from 'components/rental/RentalInfo';
import TomMap from 'components/map/TomMap';
import BookingReserve from 'components/booking/BookingReserve';

class RentalDetail extends React.Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(fetchRentalById(id))
  }

  componentWillUnmount() {
    this.props.dispatch({type: 'UNMOUNT_RENTAL'});
  }

  get location() {
    const { rental: { street, city }} = this.props;
    return street && city && city + ', ' + street
  }

  render() {
    const { rental, isFetching, isAuth } = this.props;
    if (isFetching || !rental._id) { return null; }
    return (
      <section id="rentalDetails">
        <div className="upper-section">
          <div className="row">
            <div className="col-md-6">
              <img src={rental.image} alt={rental.title} />
            </div>
            <div className="col-md-6">
              <TomMap location={this.location}/>
            </div>
          </div>
        </div>
        <div className="details-section">
          <div className="row">
            <div className="col-md-8">
              <RentalInfo rental={rental} />
            </div>
            <div className="col-md-4"> 
              <BookingReserve rental={rental} isAuth={isAuth}/>
            </div>
          </div>
        </div>
      </section> 
    )
  }
}

const mapStateToProps = ({rental, auth: { isAuth }}) => 
  ({ rental: rental.item, isFetching: rental.isFetching, isAuth: isAuth })

const RentalDetailWithRouter = withRouter(RentalDetail);
export default connect(mapStateToProps)(RentalDetailWithRouter);

import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchRentalById } from 'actions';
import RentalInfo from 'components/rental/RentalInfo';
import TomMap from 'components/map/TomMap';
import BookingReserve from 'components/booking/BookingReserve';

class RentalDetail extends React.Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(fetchRentalById(id))
  }

  componentWillUnmount() {
    this.props.dispatch({type: 'UNMOUNT_RENTAL'});
  }

  get location() {
    const { rental: { street, city }} = this.props;
    return street && city && city + ', ' + street
  }

  render() {
    const { rental, isFetching, isAuth } = this.props;
    if (isFetching || !rental._id) { return null; }
    return (
      <section id="rentalDetails">
        <div className="upper-section">
          <div className="row">
            <div className="col-md-6">
              <img src={rental.image} alt={rental.title} />
            </div>
            <div className="col-md-6">
              <TomMap location={this.location}/>
            </div>
          </div>
        </div>
        <div className="details-section">
          <div className="row">
            <div className="col-md-8">
              <RentalInfo rental={rental} />
            </div>
            <div className="col-md-4"> 
              <BookingReserve rental={rental} isAuth={isAuth}/>
            </div>
          </div>
        </div>
      </section> 
    )
  }
}

const mapStateToProps = ({rental, auth: { isAuth }}) => 
  ({ rental: rental.item, isFetching: rental.isFetching, isAuth: isAuth })

const RentalDetailWithRouter = withRouter(RentalDetail);
export default connect(mapStateToProps)(RentalDetailWithRouter);

import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchRentalById } from 'actions';
import RentalInfo from 'components/rental/RentalInfo';
import TomMap from 'components/map/TomMap';
import BookingReserve from 'components/booking/BookingReserve';

class RentalDetail extends React.Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(fetchRentalById(id))
  }

  componentWillUnmount() {
    this.props.dispatch({type: 'UNMOUNT_RENTAL'});
  }

  get location() {
    const { rental: { street, city }} = this.props;
    return street && city && city + ', ' + street
  }

  render() {
    const { rental, isFetching, isAuth } = this.props;
    if (isFetching || !rental._id) { return null; }
    return (
      <section id="rentalDetails">
        <div className="upper-section">
          <div className="row">
            <div className="col-md-6">
              <img src={rental.image} alt={rental.title} />
            </div>
            <div className="col-md-6">
              <TomMap location={this.location}/>
            </div>
          </div>
        </div>
        <div className="details-section">
          <div className="row">
            <div className="col-md-8">
              <RentalInfo rental={rental} />
            </div>
              <div className="col-md-4"> 
              <BookingReserve rental={rental} isAuth={isAuth}/>
            </div>
          </div>
        </div>
      </section> 
    )
  }
}

const mapStateToProps = ({rental, auth: { isAuth }}) => 
  ({ rental: rental.item, isFetching: rental.isFetching, isAuth: isAuth })

const RentalDetailWithRouter = withRouter(RentalDetail);
export default connect(mapStateToProps)(RentalDetailWithRouter);*/

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchRentalById } from '../actions';
import { capitalize } from '../helpers/functions';


class RentalDetail extends React.Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(fetchRentalById(id))
  }

  render() {
    const { rental } = this.props;
    return (
      <section id="rentalDetails">
        <div className="upper-section">
          <div className="row">
            <div className="col-md-6">
              {/* <!-- TODO: Display rental image --> */}
              <img src={rental.image} alt={rental.title} />
            </div>
            <div className="col-md-6">
              {/* <!-- TODO: Display rental map --> */}
              <img src={rental.image} alt={rental.title} />
            </div>
          </div>
        </div>

        <div className="details-section">
          <div className="row">
            <div className="col-md-8">
              <div className="rental">
                {/* <!-- TODO: Display shared category --> */}
                <h2 className={`rental-type type-${rental.category}`}>
                  {rental.shared ? '' : ''} {rental.category}
                </h2>
                {/* <!-- TODO: Display title --> */}
                <h1 className="rental-title">{rental.title}</h1>
                {/* <!-- TODO: Display city --> */}
                <h2 className="rental-city">{capitalize(rental.city)}</h2>
               
                {/* <!-- TODO: Display description --> */}
                <p className="rental-description">
                  {rental.description}
                </p>
                <hr/>
                <div className="rental-assets">
                  <h3 className="title">Features</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <span>
                        <FontAwesomeIcon icon="asterisk" /> Rear Cam
                      </span>
                      <span>
                        <FontAwesomeIcon icon="thermometer" /> Smart Breaking
                      </span>
                      <span>
                        <FontAwesomeIcon icon="location-arrow" /> Super Comfort
                      </span>
                    </div>
                    <div className="col-md-6">
                      <span>
                        <FontAwesomeIcon icon="desktop" /> Large Leg Rooms
                      </span>
                      <span>
                        <FontAwesomeIcon icon="cube" /> Super Mileage
                      </span>
                      <span>
                        <FontAwesomeIcon icon="archive" /> Affordable Price
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4"> BOOKING</div>
          </div>
        </div>
      </section> 
    )
  }
}

const mapStateToProps = ({rental}) => ({ rental })

const RentalDetailWithRouter = withRouter(RentalDetail);
export default connect(mapStateToProps)(RentalDetailWithRouter);