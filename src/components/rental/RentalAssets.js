
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const RentalAssets = () => 
  <div className="rental-assets">
    <h3 className="title">Assets</h3>
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
          <FontAwesomeIcon icon="desktop" /> Large Leg Spaces
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


export default RentalAssets; 