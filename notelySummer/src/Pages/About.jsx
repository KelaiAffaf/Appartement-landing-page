import React from "react";
import Navbar from "../Components/NavBar";
import "./pages.css";

const About = () => {
  return (
    <div className="page-container">
      <div className="content-container">
        <h1 className="page-title">About Us</h1>
        <p className="page-description">
          Learn more about our mission, values, and the team behind our
          platform. We're dedicated to making your property search as easy as
          possible.
        </p>

        {/* Mission Statement Section */}
        <div className="mission-statement">
          <h2>Our Mission</h2>
          <p>
            Our mission is to simplify the process of finding and securing the
            perfect property, whether you're looking to buy, rent, or sell. We
            believe in transparency, efficiency, and providing the best possible
            user experience.
          </p>
        </div>

        {/* Values Section */}
        <div className="values">
          <h2>Our Values</h2>
          <ul>
            <li>
              Integrity: We prioritize honesty and transparency in all our
              dealings.
            </li>
            <li>
              Customer Focus: Our users' needs are at the forefront of
              everything we do.
            </li>
            <li>
              Innovation: We constantly seek new ways to improve our platform
              and services.
            </li>
          </ul>
        </div>

        {/* Team Section */}
        <div className="team">
          <h2>Meet the Team</h2>
          <div className="team-member">
            <img
              src="team-member.jpg"
              alt="Team Member"
              className="team-image"
            />
            <div className="team-details">
              <h3>John Doe</h3>
              <p>CEO & Founder</p>
            </div>
          </div>
          {/* Repeat the above block for more team members */}
        </div>
      </div>
    </div>
  );
};

export default About;
