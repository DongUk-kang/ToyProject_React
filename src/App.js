import { mainWrapper } from "./App.css";
import React from "react";
import { hot } from "react-hot-loader";
import appleImage from "../src/images/apple.jpeg";

const App = () => {
  return (
    <div className={mainWrapper}>
      <h1>Hello, World</h1>
      <img src={appleImage} />
    </div>
  );
};

export default hot(module)(App);
