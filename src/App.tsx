import React from "react";
import IntroCard from "./components/IntroCard";
import Svg from "./assets/website-background.svg";
import "./App.scss";
import AboutMe from "./components/AboutMe";

const App = (): JSX.Element => {
  return (
    <div className="appContainer">
      <IntroCard />
      <img src={Svg} className="svgContainer" />
      <AboutMe />
    </div>
  );
};

export default App;
