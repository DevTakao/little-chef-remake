import React from "react";
import "./FeedItem.css";

function FeedItem() {
  return (
    <div className="FeedItem">
      <div className="img-container">
        <img
          src="https://foodieandwine.com/wp-content/uploads/2020/01/AirFryerChickenWingsRecipe.jpg"
          alt="preview"
        />
      </div>
      <div className="title-container">
        <h5 className="text-center mt-2">Chicken Wings</h5>
      </div>
      <div className="content-container p-2">
        <p>
          Chicken wing, chicken wing, hotdog and macaroni, chilling with my
          homies.
        </p>
      </div>
      <div className="button-container">
        <div className="neubutton">
          <span>Read Recipe</span>
        </div>
      </div>
    </div>
  );
}

export default FeedItem;
