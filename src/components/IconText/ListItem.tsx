import React from "react";
import BulletPoint from "../../assets/bullet-point.svg";

interface ListItemProps {
  title: string;
}
const ListItem = ({ title }: ListItemProps): JSX.Element => {
  return (
    <div className="alignlistItem">
      <img className="bulletPt" src={BulletPoint} />
      <p className="listItem">{title}</p>
    </div>
  );
};

export default ListItem;
