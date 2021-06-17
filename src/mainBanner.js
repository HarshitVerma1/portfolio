import React from "react";
import styles from "./sass/index.module.css";

const mainBanner = function () {
  return (
    <div className={styles.Info_section_PO}>
      <div className={styles.main_banner_PO}>
        <img
          src="/images/backgroundimage.jpg"
          class="imagePO"
          alt="main banner"
        />
      </div>
      <div className={styles.my_Info_PO}>
        <h1>Hello</h1>
        <h3>
          I am <span>Devloper</span>
        </h3>
        <div className={styles.socialMedia_PO}>
          <img
            src="/images/languagesknowicons/github.png"
            alt="social media icons"
            style={{ filter: "invert(1)" }}
          />
          <img
            src="/images/languagesknowicons/stackoverflowicon.png"
            alt="social media icons"
          />
          <img
            src="/images/languagesknowicons/codepen.png"
            alt="social media icons"
          />
          <img
            src="/images/languagesknowicons/gmail.png"
            alt="social media icons"
          />
          <img
            src="/images/languagesknowicons/github.png"
            alt="social media icons"
          />
        </div>
      </div>
    </div>
  );
};

export default mainBanner;
