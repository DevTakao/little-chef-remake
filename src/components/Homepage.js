import React from "react";
import FeedItem from "./FeedItem";
import "./Homepage.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Homepage() {
  return (
    <div className="Homepage">
      <div className="hero-container">
        <div className="bg-screener"></div>
        <div className="hero-captions text-right">
          <h2 className="secondary-heading">Little Chef's</h2>
          <h1 className="primary-heading">Recipes From Heaven</h1>
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
        <div className="scrollX-fixer">.</div>
      </div>
    </div>
  );
}

export default Homepage;
