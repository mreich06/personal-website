import React from "react";
import { IconTitleProps } from "./IconTitle";

const IconHeader = ({ icon, title }: IconTitleProps): JSX.Element => {
  return (
    <>
      <img className="terminalIcon" src={icon} />
      <header className="header">{title}</header>
    </>
  );
};

export default IconHeader;
