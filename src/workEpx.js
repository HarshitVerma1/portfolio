import React from "react";
import styles from "./sass/index.module.css";
import Spacer from './spacer';


class workEpx extends React.Component {
    render() {
        return (
            <div className={styles.mainDiv_Work_PD}>
                <h1>My services</h1>

                <div>
                    <div className={styles.design_Div_BD}>
                        <h2>Desiging</h2>
                        {/* first section starts here  designing*/}
                        <div className={styles.section_div_PO}>
                            <div className={styles.backgroundDiv_PO}>
                                <img src="./images/designingicons/1.png" alt="icons" />
                                <h3>Unique design</h3>
                                <p>
                                    I design and develop services for customers of all sizes,
                                    specializing in creating stylish, modern websites.
                                </p>
                            </div>
                            <div className={styles.backgroundDiv_PO}>
                                <img src="./images/designingicons/2.png" alt="icons" />
                                <h3>Different Layout</h3>
                                <p>
                                    I design and develop services for customers of all sizes,
                                    specializing in creating stylish, modern websites.
                                </p>
                            </div>
                            <div className={styles.backgroundDiv_PO}>
                                <img src="./images/designingicons/3.png" alt="icons" />
                                <h3>Make it Simple</h3>
                                <p>
                                    I design and develop services for customers of all sizes,
                                    specializing in creating stylish, modern websites.
                                </p>
                            </div>
                        </div>
                        {/* first section ends here  designing*/}
                        {/* second section start here desiging */}
                        <div className={styles.section_div_PO}>
                            <div className={styles.backgroundDiv_PO}>
                                <img src="./images/designingicons/4.png" alt="icons" />
                                <h3>Responsiveness</h3>
                                <p>
                                    I design and develop services for customers of all sizes,
                                    specializing in creating stylish, modern websites.
                                </p>
                            </div>
                            <div className={styles.backgroundDiv_PO}>
                                <img src="./images/designingicons/5.png" alt="icons" />
                                <h3>Testing for Perfection</h3>
                                <p>
                                    I design and develop services for customers of all sizes,
                                    specializing in creating stylish, modern websites.
                                </p>
                            </div>
                            <div className={styles.backgroundDiv_PO}>
                                <img src="./images/designingicons/6.png" alt="icons" />
                                <h3>Advanced Options</h3>
                                <p>
                                    I design and develop services for customers of all sizes,
                                    specializing in creating stylish, modern websites.
                                </p>
                            </div>
                        </div>
                        {/* second section start here desiging */}
                    </div>
                    <Spacer />
                    {/* declopment exp section starts here */}
                    <div className={styles.design_Div_BD}>
                        <h2>Devlopment</h2>
                        {/* first section starts here  devlopment*/}
                        <div className={styles.section_div_PO}>
                            <div className={styles.backgroundDiv_PO}>
                                <img src="./images/designingicons/1.png" alt="icons" />
                                <h3>Unique design</h3>
                                <p>
                                    I design and develop services for customers of all sizes,
                                    specializing in creating stylish, modern websites.
                                </p>
                            </div>
                            <div className={styles.backgroundDiv_PO}>
                                <img src="./images/designingicons/2.png" alt="icons" />
                                <h3>Different Layout</h3>
                                <p>
                                    I design and develop services for customers of all sizes,
                                    specializing in creating stylish, modern websites.
                                </p>
                            </div>
                            <div className={styles.backgroundDiv_PO}>
                                <img src="./images/designingicons/3.png" alt="icons" />
                                <h3>Make it Simple</h3>
                                <p>
                                    I design and develop services for customers of all sizes,
                                    specializing in creating stylish, modern websites.
                                </p>
                            </div>
                        </div>
                        {/* first section ends here  devlopment*/}
                        {/* second section start here devlopment */}
                        <div className={styles.section_div_PO}>
                            <div className={styles.backgroundDiv_PO}>
                                <img src="./images/designingicons/4.png" alt="icons" />
                                <h3>Responsiveness</h3>
                                <p>
                                    I design and develop services for customers of all sizes,
                                    specializing in creating stylish, modern websites.
                                </p>
                            </div>
                            <div className={styles.backgroundDiv_PO}>
                                <img src="./images/designingicons/5.png" alt="icons" />
                                <h3>Testing for Perfection</h3>
                                <p>
                                    I design and develop services for customers of all sizes,
                                    specializing in creating stylish, modern websites.
                                </p>
                            </div>
                            <div className={styles.backgroundDiv_PO}>
                                <img src="./images/designingicons/6.png" alt="icons" />
                                <h3>Advanced Options</h3>
                                <p>
                                    I design and develop services for customers of all sizes,
                                    specializing in creating stylish, modern websites.
                                </p>
                            </div>
                        </div>
                        {/* second section start here devlopment */}
                        {/* declopment exp section starts here */}
                    </div>

                </div>
            </div>
        );
    }
}

export default workEpx;
