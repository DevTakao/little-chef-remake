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
    <div>
      <h1>Details Page</h1>
      <p>{console.log(recipeDetails)}</p>
    </div>
  );
}

export default RecipeDetails;
