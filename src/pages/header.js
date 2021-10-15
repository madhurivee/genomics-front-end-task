import React from "react";
import styles from "./style.module.scss";
import logo from "../ACMElogo.png";
import mission from "./../mission.png";
import team from "./../team.png";
import career from "./../career.png";

class Header extends React.Component {
  render() {
    return (
      <nav className={styles.navbar}>
        <a href="#logo">
          <img
            src={logo}
            alt="logo"
            width="50px"
            height="50px"
            className={styles.logo}
          />
        </a>
        <ul className={styles.listItems}>
          <li className={styles.listItem}>
            <a>Home</a>
          </li>
          <li className={styles.listItem}>
            <a>
              About
              <i className={` ${styles.icon} fa fa-caret-down`} />
            </a>
            <div className={styles.dropDown}>
              <ul>
                <li className={styles.container}>
                  <a href="#">
                    <img src={mission} className={styles.iconItem} style={{paddingRight: 10}} />
                    Our Mission
                  </a>
                </li>
                <li className={styles.container}>
                  <a href="#">
                    <img src={team} className={styles.iconItem} style={{paddingRight: 10}} />
                    Meet the Team
                  </a>
                </li>
                <li className={styles.container}>
                  <a href="#">
                    <img src={career} className={styles.iconItem} style={{paddingRight: 10}} />
                    Careers
                  </a>
                </li>
                <li className={styles.locationBlock}>
                  <div className={styles.container}>
                    <a href="#">Location</a>
                    <a href="#">Contact US</a>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
