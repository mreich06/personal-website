import React from "react";
import "./Experience.scss";
import Icon from "../../assets/terminal-icon.svg";
import TechnologyIcon from "../../assets/technology-icon.svg";
import LanguagesIcon from "../../assets/code-icon.svg";
import ServicesIcon from "../../assets/list-icon.svg";
import ListItem from "../../components/IconText/ListItem";
import IconTitle from "../../components/IconText/IconTitle";
import IconHeader from "../../components/IconText/IconHeader";

interface ExperienceSectionProps {
  icon: string;
  title: string;
  list: string[];
}
const ExperienceSection = ({
  icon,
  list,
  title,
}: ExperienceSectionProps): JSX.Element => {
  return (
    <div>
      <IconTitle icon={icon} title={title} />
      <div className="listContainer">
        {list.map((item: string) => (
          <ListItem title={item} />
        ))}
      </div>
    </div>
  );
};
const Experience = (): JSX.Element => {
  const stack = [
    "React / React Native",
    "GraphQL",
    "AWS",
    "Cypress",
    "Jenkins",
    "Figma",
  ];
  const services = ["Web Development", "Mobile Development", "Graphic Design"];
  const languages = ["TypeScript", "JavaScript", "Python", "Java", "C++"];
  return (
    <div className="experienceContainer">
      <div className="experienceMargin">
        <div className="row">
          <IconHeader title={"experience."} icon={Icon} />
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
            <ExperienceSection
              icon={TechnologyIcon}
              title={"stack"}
              list={stack}
            />
            <ExperienceSection
              icon={ServicesIcon}
              title={"services"}
              list={services}
            />
            <ExperienceSection
              icon={LanguagesIcon}
              title={"languages"}
              list={languages}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
