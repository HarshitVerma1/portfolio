import React from "react";
import styles from "./sass/index.module.css";

const aboutMe = () => {
    return (
        <div className={styles.aboutMain_outer_PO}>
            <div className={styles.aboutMain_PO}>
                <div>
                    <img src="./images/myimage.jpeg" alt="myimage" />
                </div>
                <div className={styles.aboutMain_Info_PO}>
                    <h1>About Me</h1>
                    <p>UI UX designer/ Web devloper/ Designer</p>
                    <p>
                        Hi! I’m Neeraj Singh, and I’m a developer who has passion for
                        building clean web applications with intuitive functionality. I
                        enjoy the process of turning ideas into reality using creative
                        solutions. I’m always curious about learning new skills, tools, and
                        concepts. In addition to working on various solo full stack
                        projects, I have worked with creative teams, which involves daily
                        stand-ups and communications, source control, and project
                        management.
                    </p>
                    <div className={styles.button_section_BD}>
                        <button>Hire Me</button>
                        <button>Downlaod my CV</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default aboutMe;
