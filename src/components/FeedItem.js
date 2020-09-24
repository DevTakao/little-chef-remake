import React from "react";
import "./FeedItem.css";

function FeedItem({ displayData }) {
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
        <div className="neubutton">
          <span>Read Recipe</span>
        </div>
      </div>
    </div>
  );
}

export default FeedItem;
