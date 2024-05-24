import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../css/Navbar.module.css";

function Navbar() {
  return (
    <>
      <div className={styles.navContainer}>
        <Link to="/">
          <div className={styles.logo}>졸업할 결심</div>
        </Link>
        <div className={styles.menuDiv}>
          <div className={styles.menu}>
            <img></img>
            <span className={styles.menu}>Link</span>
          </div>
          <span className={styles.menu}>About</span>
          <Link to="/MY">
            <span className={styles.menu}>MY</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
