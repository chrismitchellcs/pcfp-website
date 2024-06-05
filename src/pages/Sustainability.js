import Footer from "components/general/Footer";
import HideAppBar from "components/general/HideAppBar";
import GeneralInfo from "components/sustainability/GeneralInfo";
import InfoBoxes from "components/sustainability/InfoBoxes";
import TitleImage from "components/sustainability/TitleImage";
import React from "react";

const Sustainability = () => {
  return (
    <div>
      <HideAppBar></HideAppBar>
      <TitleImage></TitleImage>
      <GeneralInfo></GeneralInfo>
      <InfoBoxes></InfoBoxes>
      <Footer></Footer>
    </div>
  );
};

export default Sustainability;
