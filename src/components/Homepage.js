import React, { useEffect, useState, useRef, useContext } from "react";
import FeedItem from "./FeedItem";
import "./Homepage.css";
import Axios from "axios";
import Footer from "./Footer";
import { LoaderContext } from "../App.js";
import Loader from "./Loader";

function Homepage() {
  const { isLoading, setIsLoading } = useContext(LoaderContext);

  const feedRef = useRef(); // scrolling buttons logic
  const [feedScrollInterval, setFeedScrollInterval] = useState(undefined);
  const feedScrollL = () => {
    setFeedScrollInterval(
      setInterval(() => {
        feedRef.current.scrollLeft -= 20;
      }, 10)
    );
    // console.log(feedRef.current.scrollLeft);
  };
  const feedScrollR = () => {
    setFeedScrollInterval(
      setInterval(() => {
        feedRef.current.scrollLeft += 20;
      }, 10)
    );
    // console.log(feedRef.current.scrollLeft);
  };

  const [recipes, setRecipes] = useState([]); // initial api call logic
  useEffect(() => {
    fetchRecipes();
  }, []);
  const fetchRecipes = async () => {
    console.log("api called");
    setIsLoading(true);
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
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setRecipes([]);
      setIsLoading(false);
    }
  };

  return (
    <div className="Homepage">
      <div className="hero-container">
        <div className="bg-screener"></div>
        <div className="hero-quote">
          <p className="michelin-quote">
            &#10045;&#10045;&#10045;{" "}
            <span className="quote-mark">&#8220; </span>
            Exceptional cuisine, worth a special journey!
            <span className="quote-mark"> &#8221;</span> <br /> - Le Guide
            Michelin 2020
          </p>
        </div>
        <div className="hero-quote-logo">
          <img
            src="https://d2zvpvpg8wrzfh.cloudfront.net/news/michelin-guide.jpg"
            alt="michelin logo"
          ></img>
        </div>
        <div className="hero-captions text-right">
          <h2 className="secondary-heading">Little Chef's</h2>
          <h1 className="primary-heading">Recipes From Heaven</h1>
        </div>
        <div className="clouds">
          <img
            src={require("../Assets/cloud1.png")}
            alt=""
            style={{ "--i": "1" }}
          ></img>
          <img
            src={require("../Assets/cloud2.png")}
            alt=""
            style={{ "--i": "2" }}
          ></img>
          <img
            src={require("../Assets/cloud3.png")}
            alt=""
            style={{ "--i": "3" }}
          ></img>
          <img
            src={require("../Assets/cloud4.png")}
            alt=""
            style={{ "--i": "4" }}
          ></img>
          <img
            src={require("../Assets/cloud5.png")}
            alt=""
            style={{ "--i": "5" }}
          ></img>
        </div>
      </div>
      <div className="feed-area">
        {!isLoading && (
          <span
            className="feed-scroller"
            onMouseDown={feedScrollL}
            onMouseUp={() => clearInterval(feedScrollInterval)}
          >
            <i className="fas fa-arrow-left"></i>
          </span>
        )}
        {!isLoading && (
          <span
            className="feed-scroller"
            onMouseDown={feedScrollR}
            onMouseUp={() => clearInterval(feedScrollInterval)}
          >
            <i className="fas fa-arrow-right"></i>
          </span>
        )}

        {isLoading ? (
          <Loader />
        ) : (
          <div className="feed-container" ref={feedRef}>
            {!!recipes &&
              recipes.length > 0 &&
              recipes.map((recipe) => (
                <FeedItem key={recipe["tracking-id"]} displayData={recipe} />
              ))}
            <div className="scrollX-fixer">.</div>
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
