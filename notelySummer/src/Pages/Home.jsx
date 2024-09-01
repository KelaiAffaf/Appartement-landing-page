import React from "react";
import Navbar from "../Components/NavBar";
import "./pages.css"; // Importing the CSS file
import bg from "../assets/hero-bg.png";
const Home = () => {
  return (
    <div className="home-container">
      <div className="sub-container">
        <div className="description">
          <p className="main-title">Easiest way to find a perfect property</p>
          <p className="sub-title">
            Utilize online real estate platforms for the simplest path to
            discovering the ideal property, with tailored search filters and
            comprehensive listings at your fingertips.
          </p>
        </div>
        <div className="filters">
          <select className="dropdown" aria-label="For Rent">
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
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
      <div className="bg-hero">
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default Home;
