import React from 'react';
import styles from "./sass/index.module.css";

class workEpx extends React.Component {
    render() {
        return (
            <div className={styles.exprence_BD}>
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

            </div>
        );
    }
}

export default workEpx;