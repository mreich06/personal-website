import React from "react";
import "./Experience.scss";
import Icon from "../../assets/terminal-icon.svg";
import TechnologyIcon from "../../assets/technology-icon.svg";
import LanguagesIcon from "../../assets/code-icon.svg";
import ServicesIcon from "../../assets/list-icon.svg";

const Experience = (): JSX.Element => {
  return (
    <div className="experienceContainer">
      <div className="experienceMargin">
        <div className="row">
          <img className="terminalIcon" src={Icon} />
          <header className="header">experience.</header>
        </div>
        <p className="description">
          I have experience in all aspects of the software development process.
          Here are a few of the things I have done at my current job at Viasat:
        </p>
        <p className="detail">
          I built the app MyViasat with my team and am now working on
          transitioning it into a microservices architecture. I have equal
          experience in front and back end development and regularly do web, iOS
          and Android deployments. My team enforces CICD and scrum practices
          which has proven to be a great method for a smooth development
          process. For the new microservices project I am working on for the
          MyViasat app, I set up the data logging in Kibana which we use to
          investigate API data and errors and this has been an essential part of
          tracking issues that occur in API responses.
        </p>
        <p className="detail">
          Our app requires an on-call schedule so I have experience fixing live
          production level bugs, rebuilding the client and server and directly
          helping customers that face issues in our app. I created and manage
          several dashboards that collect user analytics using Google Pixel
          Analytics and Adobe Analytics software. Outside of my job, I offer a
          variety of different software services.
        </p>
        <div className="margin">
          <div className="sectionRows">
            <div className="alignIconTitle">
              <img className="technologyIcon" src={TechnologyIcon} />
              <p className="title">stack</p>
            </div>
            <div className="alignIconTitle">
              <img className="technologyIcon" src={ServicesIcon} />
              <p className="title">services</p>
            </div>
            <div className="alignIconTitle">
              <img className="technologyIcon" src={LanguagesIcon} />
              <p className="title">languages</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
