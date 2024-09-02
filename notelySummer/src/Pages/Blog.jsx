import React from "react";
import Navbar from "../Components/NavBar";
import "./pages.css";

const Blog = () => {
  return (
    <div className="page-container">
      <div className="content-container">
        <h1 className="page-title">Our Blog</h1>
        <p className="page-description">
          Stay updated with the latest news, tips, and trends in the real estate
          market. Read our articles to gain insights and make informed
          decisions.
        </p>

        <div className="blog-list">
          {/* Blog posts would be mapped here */}
          <div className="blog-post">
            <img src="blog-image.jpg" alt="Blog" className="blog-image" />
            <div className="blog-content">
              <h3 className="blog-title">
                Top 5 Tips for First-Time Homebuyers
              </h3>
              <p className="blog-excerpt">
                Navigating the real estate market for the first time? Here are
                five essential tips to help you make the best decision...
              </p>
              <button className="read-more-btn">Read More</button>
            </div>
          </div>
          {/* Repeat blog posts as needed */}
        </div>
      </div>
    </div>
  );
};

export default Blog;
