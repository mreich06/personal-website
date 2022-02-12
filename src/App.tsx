import React from "react";
import IntroCard from "./pages/IntroCard";
import Svg from "./assets/website-background.svg";
import "./App.scss";
import AboutMe from "./pages/AboutMe";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";

const App = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <div className="appContainer">
        <IntroCard />
        <img className="svgContainer" src={Svg} />
        <AboutMe />
        <Experience />
        <Contact />
      </div>
    </>
  );
};

export default App;
