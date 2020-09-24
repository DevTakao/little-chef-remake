import React, { useEffect, useState } from "react";
import FeedItem from "./FeedItem";
import "./Homepage.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Axios from "axios";

function Homepage() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const res = await Axios({
        method: "get",
        url: `${process.env.REACT_APP_ENDPOINT}/feeds/list-similarities`,
        headers: {
          "x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`,
        },
        params: {
          authorId: "Yummly",
          apiFeedType: "moreFrom",
          start: "0",
          limit: "18",
        },
      });
      setRecipes(res.data.feed);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

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
        {!!recipes &&
          recipes.length > 0 &&
          recipes.map((recipe) => <FeedItem displayData={recipe} />)}
        <div className="scrollX-fixer">.</div>
      </div>
    </div>
  );
}

export default Homepage;
