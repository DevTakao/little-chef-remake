import React, { useContext } from "react";
import "./FeedItem.css";
import { Link } from "react-router-dom";
import { RecipeContext } from "../App";


function FeedItem({ displayData }) {
  const { recipeDetails, setRecipeDetails } = useContext(RecipeContext);
  return (
    <div className="FeedItem">
      <div className="img-container">
        <img src={displayData.display.images[0]} alt="preview" />
      </div>
      <div className="title-container m-2">
        <h5 className="text-center mt-2">{displayData.display.displayName}</h5>
      </div>
      <div className="content-container p-2">
        <p>{displayData.content.description.text}</p>
      </div>
      <div className="button-container">
        <Link style={{textDecoration: "none"}} to={`/${displayData["tracking-id"]}`} onClick={() => setRecipeDetails(displayData.content)}>
            <div className="neubutton">
              <span>Read Recipe</span>
            </div>
        </Link>
      </div>
    </div>
  );
}

export default FeedItem;
