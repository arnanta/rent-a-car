
/*import { rentalData } from 'store/data';

export const fetchRentals = () => { 
  return {
    type: 'FETCH_RENTALS',
    rentals: rentalData
  }
}

export const fetchRentalById = (rentalId) => { 
  const rental = rentalData.find((rental) => rental._id === rentalId);

  return {
    type: 'FETCH_RENTAL_BY_ID',
    rental
  }
}

export const createRental = rental => {
  return {
    type: 'CREATE_RENTAL',
    rental
  }
}

/*import axios from 'axios';

export const fetchRentals = () => dispatch => {
  axios.get('/api/v1/rentals')
    .then(res => {
      const rentals = res.data;
      dispatch({
        type: 'FETCH_RENTALS',
        rentals
      });
    })
}


export const fetchRentalById = rentalId => async dispatch => { 
  dispatch({type: 'IS_FETCHING_RENTAL'});
  const res = await axios.get(`/api/v1/rentals/${rentalId}`)
  dispatch({
    type: 'FETCH_RENTAL_BY_ID',
    rental: res.data
  });
}

export const createRental = rental => {
  return {
    type: 'CREATE_RENTAL',
    rental
  }
}

export const extractApiErrors = (resError) => {
  let errors = [{title: 'Error!', detail: 'Ooops, something went wrong!'}];

  if (resError && resError.data && resError.data.errors) {
    errors = resError.data.errors;
  }

  return errors;
}

export * from './auth';
export * from './rentals';
//export * from './bookings';

//AUTH ACTIONS

import { rentalData } from 'store/data';

export const fetchRentals = () => { 
  return {
    type: 'FETCH_RENTALS',
    rentals: rentalData
  }
}

export const fetchRentalById = (rentalId) => { 
  const rental = rentalData.find((rental) => rental._id === rentalId);

  return {
    type: 'FETCH_RENTAL_BY_ID',
    rental
  }
}

export const createRental = rental => {
  return {
    type: 'CREATE_RENTAL',
    rental
  }
}

export const extractApiErrors = (resError) => {
  let errors = [{title: 'Error!', detail: 'Ooops, something went wrong!'}];

  if (resError && resError.data && resError.data.errors) {
    errors = resError.data.errors;
  }

  return errors;
}

export * from './auth';
export * from './rentals';
export * from './bookings';
export default extractApiErrors;

export const extractApiErrors = (resError) => {
  let errors = [{title: 'Error!', detail: 'Ooops, something went wrong!'}];

  if (resError && resError.data && resError.data.errors) {
    errors = resError.data.errors;
  }

  return errors;
}

export * from './auth';
export * from './rentals';
export * from './bookings';*/

import { rentalData } from '../store/data';

export const fetchRentals = () => { 
  return {
    type: 'FETCH_RENTALS',
    rentals: rentalData
  }
}

export const fetchRentalById = (rentalId) => { 
  const rental = rentalData.find((rental) => rental._id === rentalId);

  return {
    type: 'FETCH_RENTAL_BY_ID',
    rental
  }
}

export const createRental = rental => {
  return {
    type: 'CREATE_RENTAL',
    rental
  }
}


