import React, { createContext, useContext, useState } from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import Loader from "./components/Loader";

export const LoaderContext = createContext({
  isLoading: true,
  setIsLoading: () => {},
});

function App() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="App">
      <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
        <Homepage />
      </LoaderContext.Provider>
    </div>
  );
}

export default App;
