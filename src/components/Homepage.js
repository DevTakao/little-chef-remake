import React from "react";
import FeedItem from "./FeedItem";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="Homepage">
      <div className="hero-container">
        <div className="bg-screener"></div>
        <div className="hero-captions text-right">
          <h2 className="secondary-heading">Little Chef's</h2>
          <h1 className="primary-heading">Award Winning Recipes</h1>
        </div>
      </div>
      <div className="feed-container">
        <FeedItem />
        <FeedItem />
        <FeedItem />
        <FeedItem />
        <FeedItem />
        <FeedItem />
        <FeedItem />
        <FeedItem />
        <FeedItem />
        <FeedItem />
      </div>
    </div>
  );
}

export default Homepage;
