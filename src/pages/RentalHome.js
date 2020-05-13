
/*import React from 'react';
import RentalCard from '../components/rental/RentalCard';

class RentalHome extends React.Component {

  constructor() {
    super();
    this.state = {
      rentals: [{
        _id: '1',
        title: "Maruti Suzuki",
        city: "Kolkata",
        category: "Baleno",
        image: "http://via.placeholder.com/350x250",
        numOfSeats: 4,
        //shared: true,
        description: "Bold and Stylish.",
        hourlyPrice: 15
      },
      {
        _id: '2',
       
      },
      {
        _id: '3',
        title: "Old house in nature",
        city: "Bratislava",
        category: "house",
        image: "http://via.placeholder.com/350x250",
        numOfRooms: 5,
        shared: true,
        description: "Very nice apartment in center of the city.",
        dailyPrice: 23
      }]
    }
  }

  renderRentals = (rentals) => 
    rentals.map(rental => 
      <div key={rental._id} className="col-md-3">
        <RentalCard rental={rental}/>
      </div>
    );
  
  render() {
    const { rentals } = this.state;

    return (
      <div className="card-list">
        <div className="container">
          <h1 className="page-title">Your Home All Around the World</h1>
          <div className="row">
            { this.renderRentals(rentals) }
          </div>
        </div>
      </div>
    )
  }
}

export default RentalHome;


import React from 'react';
import RentalCard from '../components/rental/RentalCard';

class RentalHome extends React.Component {

  constructor() {
    super();
    this.state = {
      rentals: [{
        _id: '1',
        title: "Maruti Suzuki",
        city: "Kolkata",
        category: "Baleno",
        image: "http://via.placeholder.com/350x250",
        numOfSeats: 4,
        //shared: true,
        description: "Bold and Stylish",
        hourlyPrice: 10
      },
      {
        _id: '2',
        title: "Toyota",
        city: "Bengaluru",
        category: "Corola Altis",
        image: "http://via.placeholder.com/350x250",
        numOfSeats: 6,
        //shared: false,
        description: "Classy and Elegant.",
        dailyPrice: 30
      },
      {
        _id: '3',
        title: "Renault",
        city:"Delhi",
        category: "Kwid",
        image: "http://via.placeholder.com/350x250",
        numOfSeats: 4,
        //shared: true,
        description: "Affordable and Comfortable.",
        dailyPrice: 15
      }]
    }
  }

  renderRentals = (rentals) => 
    rentals.map(rental => 
      <div key={rental._id} className="col-md-3">
        <RentalCard rental={rental}/>
      </div>
    );
  
  render() {
    const { rentals } = this.state;

    return (
      <div className="card-list">
        <div className="container">
          <h1 className="page-title">Rent Awesome Cars All Over the Country</h1>
          <div className="row">
            { this.renderRentals(rentals) }
          </div>
        </div>
      </div>
    )
  }
}

export default RentalHome;

/*import React from 'react';
import RentalCard from 'components/rental/RentalCard';
import { connect } from 'react-redux'
import { fetchRentals } from 'actions';

class RentalHome extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchRentals());
  }

  renderRentals = (rentals) => 
    rentals.map(rental => 
      <div key={rental._id} className="col-md-3">
        <RentalCard rental={rental}/>
      </div>
    );
  
  render() {
    const { rentals } = this.props;

    return (
      <div className="card-list">  
        <h1 className="page-title">Rent Awesome Cars All Over the Country</h1>
        <div className="row">
          { this.renderRentals(rentals) }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    rentals: state.rentals
  }
}

export default connect(mapStateToProps)(RentalHome);

import React from 'react';
import RentalCard from 'components/rental/RentalCard';
import { connect } from 'react-redux'
import { fetchRentals } from '..//actions/rentals';

class RentalHome extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchRentals());
  }

  renderRentals = (rentals) => 
    rentals.map(rental => 
      <div key={rental._id} className="col-md-3">
        <RentalCard rental={rental}/>
      </div>
    );
  
  render() {
    const { rentals } = this.props;

    return (
      <div className="card-list">  
        <h1 className="page-title">Rent Awesome Cars All Over The Country</h1>
        <div className="row">
          { this.renderRentals(rentals) }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    rentals: state.rentals
  }
}

export default connect(mapStateToProps)(RentalHome);

import React from 'react';
import RentalCard from 'components/rental/RentalCard';
import { connect } from 'react-redux';
import {fetchRentals} from 'actions';

class RentalHome extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchRentals());
  }

  renderRentals = (rentals) => 
    rentals.map(rental => 
      <div key={rental._id} className="col-md-3">
        <RentalCard rental={rental}/>
      </div>
    );
  
  render() {
    const { rentals } = this.props;

    return (
      <div className="card-list">  
        <h1 className="page-title">Your Home All Around the World</h1>
        <div className="row">
          { this.renderRentals(rentals) }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    rentals: state.rentals
  }
}

export default connect(mapStateToProps)(RentalHome);*/



/*import React from 'react';
import RentalCard from 'components/rental/RentalCard';
import { connect } from 'react-redux';
import { fetchRentals } from 'actions';

class RentalHome extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchRentals());
  }

  renderRentals = (rentals) => 
    rentals.map(rental => 
      <div key={rental._id} className="col-md-3">
        <RentalCard rental={rental}/>
      </div>
    );
  
  render() {
    const { rentals } = this.props;

    return (
      <div className="card-list">  
        <h1 className="page-title">Rent Awesome Cars all Over the Country</h1>
        <div className="row">
          { this.renderRentals(rentals) }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    rentals: state.rentals
  }
}

export default connect(mapStateToProps)(RentalHome);

import React from 'react';
import RentalCard from 'components/rental/RentalCard';
import { connect} from 'react-redux';
import { fetchRentals } from 'actions';

class RentalHome extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchRentals());
  }

  renderRentals = (rentals) => 
    rentals.map(rental => 
      <div key={rental._id} className="col-md-3">
        <RentalCard rental={rental}/>
      </div>
    );
  
  render() {
    const { rentals } = this.props;

    return (
      <div className="card-list">  
        <h1 className="page-title">Rent Awesome Cars All Over The World</h1>
        <div className="row">
          { this.renderRentals(rentals) }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    rentals: state.rentals
  }
}

export default connect(mapStateToProps)(RentalHome);
import React from 'react';
import RentalCard from 'components/rental/RentalCard';
import { connect } from 'react-redux';
import { fetchRentals } from '..//actions';

class RentalHome extends React.Component {

  /*componentDidMount() {
    this.props.dispatch(fetchRentals());
  }

  renderRentals = (rentals) => 
    rentals.map(rental => 
      <div key={rental._id} className="col-md-3">
        <RentalCard rental={rental}/>
      </div>
    );
  
  render() {
    const { rentals } = this.props;

    return (
      <div className="card-list">  
        <h1 className="page-title">Rent Awesome Cars All Over The Country</h1>
        <div className="row">
          { this.renderRentals(rentals) }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    rentals: state.rentals
  }
}

export default connect(mapStateToProps)(RentalHome);

import React from 'react';
import RentalCard from 'components/rental/RentalCard';
import { connect } from 'react-redux';
import { fetchRentals } from '../actions/rentals';

class RentalHome extends React.Component {

  componentDidMount() {
   type: this.props.dispatch(fetchRentals());
  }
  

 /* componentWillUnmount() {
    this.props.dispatch({type: 'UNMOUNT_RENTAL'});
  }

  renderRentals = (rentals) => 
    rentals.map(rental => 
      <div key={rental._id} className="col-md-3">
        <RentalCard rental={rental}/>
      </div>
    );
  
  render() {
    const { rentals } = this.props;

    return (
      <div className="card-list">  
        <h1 className="page-title">Rent Awesome Cars All Over the Country</h1>
        <div className="row">
          { this.renderRentals(rentals) }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    rentals: state.rentals
  }
}

export default connect(mapStateToProps)(RentalHome);*/


import React from 'react';
import RentalCard from '../components/rental/RentalCard';
import { connect } from 'react-redux'
import { fetchRentals } from '../actions';

class RentalHome extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchRentals());
  }

  renderRentals = (rentals) => 
    rentals.map(rental => 
      <div key={rental._id} className="col-md-4">
        <RentalCard rental={rental}/>
      </div>
    );
  
  render() {
    const { rentals } = this.props;

    return (
      <div className="card-list">  
        <h1 className="page-title">Rent Awesome Cars</h1>
        <div className="row">
          { this.renderRentals(rentals) }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    rentals: state.rentals
  }
}

export default connect(mapStateToProps)(RentalHome);

