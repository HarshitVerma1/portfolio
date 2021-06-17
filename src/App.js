import React from "react";
import "./App.css";
import NavigationMenu from "./navigationMain";
import MainBanner from "./mainBanner";
import Spacer from './spacer';
import AboutMe from "./aboutMe";
import ProgamingKnow from "./progamingKnow";
import WorkerExp from "./workEpx";


function App() {
  return (
    <React.Fragment>
      <NavigationMenu />
      <MainBanner />
      <Spacer />
      <AboutMe />
      <Spacer />
      <ProgamingKnow />
      <Spacer />
      <WorkerExp />
    </React.Fragment>
  );
}

export default App;
