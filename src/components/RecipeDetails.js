import Axios from "axios";
import React, { useContext, useEffect } from "react";
import { RecipeContext } from "../App";
import "./RecipeDetails.css";

function RecipeDetails({ match }) {
  const { recipeDetails, setRecipeDetails } = useContext(RecipeContext);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await Axios({
          method: "get",
          url: `${process.env.REACT_APP_ENDPOINT}/feeds/list-similarities`,
          headers: {
            "x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`,
          },
          params: {
            start: "0",
            limit: "18",
            id: match.params.id,
          },
        });
        setRecipeDetails(res.data.feed[0].content);
      } catch (err) {
        setRecipeDetails({});
        console.log(err);
      }
    };

    if (!recipeDetails.hasOwnProperty("description")) {
      fetchDetails();
    }
  }, []);
  return (
    recipeDetails.hasOwnProperty("description") && (
      <div className="RecipeDetails my-2">
        <div className="head-div container-fluid">
          <div className="row justify-content-around">
            <div className="col-5">
              <div
                className="img-container"
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${recipeDetails["details"]["images"][0]["hostedLargeUrl"]})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundColor: "#efefef",
                }}
              ></div>
            </div>
            <div className="col-6">
              <div className="head-text-div">
                <h1>{recipeDetails.details.name}</h1>
                <hr></hr>
                <p>{recipeDetails.description.text}</p>
                <hr></hr>
                <p>
                  <strong>
                    <i className="fas fa-star"></i> Rating:{" "}
                  </strong>
                  {recipeDetails.details.rating} / 5
                </p>
                <hr></hr>
                <p>
                  <strong>Number of Servings:</strong>{" "}
                  {recipeDetails.details.numberOfServings}
                </p>
                <hr></hr>
                <p>
                  <strong>Total Preparation Time:</strong>{" "}
                  {recipeDetails.details.totalTime}
                </p>
                <hr></hr>
              </div>
            </div>
          </div>
        </div>
        <div className="ingredients-div-container container-fluid d-flex justify-content-center mt-5">
          <div className="ingredients-div container">
            <div className="row justify-content-around">
              <div className="col-6">
                <h2>Ingredients</h2>
                <hr></hr>
                <ol className="ingredients-list">
                  {recipeDetails.ingredientLines.map((ingredient) => (
                    <li>{ingredient.wholeLine}</li>
                  ))}
                </ol>
              </div>
              <div className="col-5 d-flex align-items-center text-center">
                <i className="ingredients-decor fas fa-carrot m-auto"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default RecipeDetails;
