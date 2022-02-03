import React from "react";
import "./IntroCard.scss";

const IntroCard = (): JSX.Element => {
  return (
    <div className="card">
      <div className="cardContent">
        <div>
          <span className="header">Hi, my name is </span>
          <span className="headerBlue">Maya Reich</span>
        </div>
        <p className="descriptionLineOne">full stack engineer</p>
        <p className="descriptionLineTwo">web and mobile development</p>
        <div className="underline"></div>
      </div>
    </div>
  );
};

export default IntroCard;
