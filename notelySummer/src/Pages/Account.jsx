import React from "react";
import Navbar from "../Components/NavBar";
import "./pages.css";

const Account = () => {
  return (
    <div className="page-container">
      <div className="content-container">
        <h1 className="page-title">My Account</h1>
        <p className="page-description">
          Manage your account details, view your saved properties, and update
          your preferences.
        </p>

        {/* Account Details Section */}
        <div className="account-details">
          <h2>Account Information</h2>
          <p>
            <strong>Name:</strong> John Doe
          </p>
          <p>
            <strong>Email:</strong> johndoe@example.com
          </p>
          <button className="edit-btn">Edit Information</button>
        </div>

        {/* Saved Properties Section */}
        <div className="saved-properties">
          <h2>Saved Properties</h2>
          <div className="property-item">
            <img
              src="saved-property.jpg"
              alt="Saved Property"
              className="property-image"
            />
            <div className="property-details">
              <h3>Property Title</h3>
              <p>Location: City, State</p>
              <p>Price: $XXX,XXX</p>
              <p>Type: House/Apartment/Condo</p>
              <button className="remove-btn">Remove</button>
            </div>
          </div>
          {/* Repeat the above block for more saved properties */}
        </div>

        {/* Preferences Section */}
        <div className="preferences">
          <h2>Preferences</h2>
          <label>
            <input type="checkbox" name="email-updates" /> Receive email updates
          </label>
          <label>
            <input type="checkbox" name="sms-updates" /> Receive SMS updates
          </label>
          <button className="save-btn">Save Preferences</button>
        </div>
      </div>
    </div>
  );
};

export default Account;
