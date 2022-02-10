import React from "react";
import IntroCard from "./pages/IntroCard";
import Svg from "./assets/website-background.svg";
import "./App.scss";
import AboutMe from "./pages/AboutMe";
import Experience from "./pages/Experience";

const App = (): JSX.Element => {
  return (
    <div className="appContainer">
      <IntroCard />
      <img className="svgContainer" src={Svg} />
      <AboutMe />
      <Experience />
      <div style={{ marginTop: "1000px" }}></div>
    </div>
  );
};

export default App;
