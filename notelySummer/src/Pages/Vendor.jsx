import React from "react";
import Navbar from "../Components/NavBar";
import "./pages.css";

const Vendor = () => {
  return (
    <div className="page-container">
      <div className="content-container">
        <h1 className="page-title">Vendor Dashboard</h1>
        <p className="page-description">
          Access tools and resources to list your properties, manage your
          listings, and track performance.
        </p>

        {/* Listing Management Section */}
        <div className="listing-management">
          <h2>Your Listings</h2>
          <button className="add-listing-btn">Add New Listing</button>
          <div className="listing-item">
            <img
              src="listing-image.jpg"
              alt="Listing"
              className="listing-image"
            />
            <div className="listing-details">
              <h3>Listing Title</h3>
              <p>Location: City, State</p>
              <p>Price: $XXX,XXX</p>
              <p>Type: House/Apartment/Condo</p>
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
            </div>
          </div>
          {/* Repeat the above block for more listings */}
        </div>

        {/* Performance Analytics Section */}
        <div className="performance-analytics">
          <h2>Performance Analytics</h2>
          <p>Views: XXXX</p>
          <p>Inquiries: XXX</p>
          <p>Sales: XX</p>
          {/* Add more analytics as needed */}
        </div>
      </div>
    </div>
  );
};

export default Vendor;
