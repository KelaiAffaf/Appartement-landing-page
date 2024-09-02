import React from "react";
import Navbar from "../Components/NavBar";
import "./pages.css";

const Catalog = () => {
  return (
    <div className="page-container">
      <div className="content-container">
        <h1 className="page-title">Property Catalog</h1>
        <p className="page-description">
          Explore a wide range of properties that suit your needs. Use the
          filters to narrow down your search and find the perfect home.
        </p>

        {/* Filters Section */}
        <div className="filters">
          <select className="dropdown" aria-label="Property Status">
            <option value="">For Rent</option>
            <option value="rent">Rent</option>
            <option value="sale">Sale</option>
          </select>

          <input
            type="text"
            className="location-input"
            placeholder="Enter location"
          />

          <select className="dropdown" aria-label="Property Type">
            <option value="">Property Type</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
          </select>

          <select className="dropdown" aria-label="Price">
            <option value="">Price</option>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </select>

          <button className="search-btn">
            <i className="fas fa-search"></i> Search
          </button>
        </div>

        {/* Property List Section */}
        <div className="property-list">
          {/* Placeholder for property items */}
          <div className="property-item">
            <img
              src="property-image.jpg"
              alt="Property"
              className="property-image"
            />
            <div className="property-details">
              <h2>Property Title</h2>
              <p>Location: City, State</p>
              <p>Price: $XXX,XXX</p>
              <p>Type: House/Apartment/Condo</p>
            </div>
          </div>
          {/* Repeat the above block for more properties */}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
