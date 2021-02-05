import {
  faChartLine,
  faPlaneDeparture,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./SideMenu.scss";
import logo from "./../../images/logo.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TravelAlert from "../TravelAlert/TravelAlert";
import Home from "../HomePage/Home";

const SideMenu = () => {
  return (
    <Router>
      <div>
        <div className="side-menu">
          <Link to="/" className="side-menu__logo">
            <img src={logo} alt="logo" />
          </Link>
          <ul className="side-menu__list">
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={faChartLine} />
                Stats
              </Link>
            </li>
            <li>
              <Link to="/travel-alert">
                <FontAwesomeIcon icon={faPlaneDeparture} />
                Travel Alert
              </Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/travel-alert">
            <TravelAlert />
          </Route>
        </Switch>
      </div>
    </Router>
    // <div className="side-menu">
    //   <a href="/" className="side-menu__logo">
    //     <img src={logo} alt="logo" />
    //   </a>
    //   <ul className="side-menu__list">
    //     <li>
    //       <a href="/">
    //         <FontAwesomeIcon icon={faChartLine} />
    //         Stats
    //       </a>
    //     </li>
    //     <li>
    //       <a href="/">
    //         <FontAwesomeIcon icon={faPlaneDeparture} />
    //         Travel Alert
    //       </a>
    //     </li>
    //   </ul>
    // </div>
  );
};

export default SideMenu;
