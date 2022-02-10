import React from "react";

export interface IconTitleProps {
  icon: string;
  title: string;
}
const IconTitle = ({ icon, title }: IconTitleProps): JSX.Element => {
  return (
    <div className="alignIconTitle">
      <img className="technologyIcon" src={icon} />
      <p className="title">{title}</p>
    </div>
  );
};

export default IconTitle;
