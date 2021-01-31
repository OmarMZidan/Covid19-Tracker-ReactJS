import {
  faChartLine,
  faPlaneDeparture,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./SideMenu.scss";
import logo from "./../../images/logo.png";

const SideMenu = () => {
  return (
    <div className="side-menu">
      <a className="side-menu__logo">
        <img src={logo} alt="logo" />
      </a>
      <ul className="side-menu__list">
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faChartLine} />
            Stats
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faPlaneDeparture} />
            Travel Alert
          </a>
        </li>
        {/* <li>
          <a href="#">
            <span className="fa fa-font"></span>Tipografia
          </a>
        </li>
        <li>
          <a href="#">
            <span className="fa fa-caret-square-o-right"></span>Botões
          </a>
        </li>
        <li>
          <a href="#">
            <span className="fa fa-check-square"></span>Formulários
          </a>
        </li>
        <li>
          <a href="#">
            <span className="fa  fa-square"></span>Cards
          </a>
        </li>
        <li>
          <a href="#">
            <span className="fa fa-bars"></span>Menu
          </a>
        </li> */}
      </ul>
    </div>
  );
};

export default SideMenu;
