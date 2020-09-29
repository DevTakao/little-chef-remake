import React, { createContext, useState } from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetails";

export const LoaderContext = createContext({
  isLoading: true,
  setIsLoading: () => {},
});

export const RecipeContext = createContext({
  recipeDetails: {},
  setRecipeDetails: () => {},
});

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [recipeDetails, setRecipeDetails] = useState({});
  return (
    <div className="App">
      <Router>
        <Switch>
          <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
            <RecipeContext.Provider value={{ recipeDetails, setRecipeDetails }}>
              <Route path="/" exact component={Homepage} />
              <Route path="/recipe/:id" component={RecipeDetails} />
            </RecipeContext.Provider>
          </LoaderContext.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
