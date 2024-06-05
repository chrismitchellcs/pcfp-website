import GeneralInfo from "components/contact/GeneralInfo";
import InfoBox from "components/contact/InfoBox";
import TitleImage from "components/contact/TitleImage";
import Footer from "components/general/Footer";
import HideAppBar from "components/general/HideAppBar";
import React from "react";

const Contact = () => {
  return (
    <div>
      <HideAppBar></HideAppBar>

      <TitleImage></TitleImage>
      <GeneralInfo></GeneralInfo>
      <InfoBox></InfoBox>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
