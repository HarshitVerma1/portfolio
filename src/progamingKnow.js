import React from "react";
import styles from "./sass/index.module.css";

const progamingKnow = () => {
    return (
        <div className={styles.proKnow_BD}>
            <div className={styles.proKnowInfo_BD}>
                <h1>What My Programming Skills Included?</h1>
                <p>
                    I develop simple, intuitive and responsive user interface that helps
                    users get things done with less effort and time with those
                    technologies.
                </p>
                <div className={styles.slidbuttons}>
                    <h4>SKills</h4>
                    <h4>Tools</h4>
                </div>
            </div>
            <div className={styles.proKnowInfoIcons_BD}>
                <div>
                    <img src="./images/languagesknowicons/html.png" alt="icons" />
                    <img src="./images/languagesknowicons/css.png" alt="icons" />
                    <img src="./images/languagesknowicons/js.png" alt="icons" />
                    <img src="./images/languagesknowicons/sass.png" alt="icons" />
                    <img src="./images/languagesknowicons/react.png" alt="icons" />
                    <img src="./images/languagesknowicons/jquery.png" alt="icons" />
                    <img src="./images/languagesknowicons/mysql.png" alt="icons" />
                </div>
                <div>
                    <img src="./images/languagesknowicons/php.png" alt="icons" />
                    <img src="./images/languagesknowicons/java.png" alt="icons" />
                    <img src="./images/languagesknowicons/android.png" alt="icons" />
                    <img src="./images/languagesknowicons/flutter.png" alt="icons" />
                    <img src="./images/languagesknowicons/wordpress.png" alt="icons" />

                </div>
            </div>
        </div>
    );
};

export default progamingKnow;
