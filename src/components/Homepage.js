import React, { useEffect, useState, useRef } from "react";
import FeedItem from "./FeedItem";
import "./Homepage.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Axios from "axios";
import Footer from "./Footer";

function Homepage() {
  const feedRef = useRef(); // scrolling buttons logic
  const [feedScrollInterval, setFeedScrollInterval] = useState(undefined);
  const feedScrollL = () => {
    setFeedScrollInterval(
      setInterval(() => {
        feedRef.current.scrollLeft -= 20;
      }, 10)
    );
  };
  const feedScrollR = () => {
    setFeedScrollInterval(
      setInterval(() => {
        feedRef.current.scrollLeft += 20;
      }, 10)
    );
  };

  const [recipes, setRecipes] = useState([]); // initial api call logic
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
      <div className="feed-area">
        <span
          className="feed-scroller"
          onMouseDown={feedScrollL}
          onMouseUp={() => clearInterval(feedScrollInterval)}
        >
          <i className="fas fa-arrow-left"></i>
        </span>
        <span
          className="feed-scroller"
          onMouseDown={feedScrollR}
          onMouseUp={() => clearInterval(feedScrollInterval)}
        >
          <i className="fas fa-arrow-right"></i>
        </span>
        <div className="feed-container" ref={feedRef}>
          {!!recipes &&
            recipes.length > 0 &&
            recipes.map((recipe) => (
              <FeedItem key={recipe["tracking-id"]} displayData={recipe} />
            ))}
          <div className="scrollX-fixer">.</div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
