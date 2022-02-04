import React from "react";
import "./AboutMe.scss";
import Photo from "../../assets/me.jpeg";

const AboutMe = (): JSX.Element => {
  return (
    <div className="aboutMeContainer">
      <div className="alignAboutMe">
        <div>
          <header className="aboutMeHeader">about me.</header>
          <p className="description">
            I am a full stack developer with a passion for web and mobile
            development. Welcome to my website!
          </p>
          <p className="detail">
            I began my journey as a software engineer 2 and a half years ago
            after graduating with a Computer Science degree from Middlebury
            College. My favorite part of my job as a software engineering is
            definitely front end development so I love designing and creating my
            own websites, like this one! I currently work at Viasat Inc. on an
            application for our WiFi customers. In my free time, I enjoy
            creating artwork, trying new foods, unicycling and traveling.
          </p>
        </div>
        <img className="photo" src={Photo} />
      </div>
    </div>
  );
};

export default AboutMe;
