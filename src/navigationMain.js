import React from "react";
import styles from "./sass/index.module.css";

const navigationMain = () => {
  return (
    <div>
      <div className={styles.MainNav_PO}>
        <div>
          <h1>Neeraj Singh</h1>
        </div>
        <div className={styles.navigaitonItems_PO}>
          <a href="#">
            <h5>Home</h5>
          </a>
          <a href="#">
            <h5>About</h5>
          </a>
          <a href="#">
            <h5>Services</h5>
          </a>
          <a href="#">
            <h5>Works</h5>
          </a>
          <a href="#">
            <h5>Blogs</h5>
          </a>
          <a href="#">
            <h5>Contect</h5>
          </a>
        </div>
      </div>
    </div>
  );
};

export default navigationMain;
