import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./InfoBox.scss";

function InfoBox({ color, icon, title, number, today, onClick, ...props }) {
  return (
    // <Card
    //   onClick={props.onClick}
    //   className={`infoBox ${active && "infoBox--selected"} ${
    //     isRed && "infoBox--red"
    //   }`}
    // >
    //   <CardContent>
    //     <Typography className="infoBox__title" color="textSecondary">
    //       {title}
    //     </Typography>
    //     <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
    //       {cases}
    //     </h2>
    //     <Typography className="infoBox__total" color="textSecondary">
    //       {total} Total
    //     </Typography>
    //   </CardContent>
    // </Card>
    <div
      className="infoBox"
      onClick={onClick ? onClick : null}
      style={{ cursor: onClick ? "pointer" : "normal" }}
    >
      <div className="infoBox__icon" style={{ backgroundColor: color }}>
        <FontAwesomeIcon icon={icon} color="var(--white-color)" />
      </div>
      <div className="infoBox__details">
        <h4 className="infoBox__title">{title}</h4>
        <p className="infoBox__number">
          {number}
          {today && <sup>{today}</sup>}
        </p>
      </div>
    </div>
  );
}

export default InfoBox;
