import React from "react";
import TitleImage from "../components/home/TitleImage";

import GeneralInfo from "components/home/GeneralInfo";

import ZigZag from "components/home/ZigZag";
import InfoBoxes from "components/home/InfoBoxes";

import HideAppBar from "components/general/HideAppBar";

import ProductInfos from "components/home/ProductInfos";
import Footer from "components/general/Footer";
import BerriFresh from "components/home/BerriFresh";

const Home = () => {
  return (
    <div>
      <HideAppBar></HideAppBar>
      <TitleImage></TitleImage>
      <GeneralInfo></GeneralInfo>

      <InfoBoxes></InfoBoxes>
      <ZigZag
        image={"farm.jpg"}
        title={"MADE IN BC"}
        desc={
          "We strive for excellence and quality in everything we produce. Our commitment to sustainable farming practices and meticulous attention to detail set us apart. We believe in nurturing the land and our community, which is why we use environmentally friendly methods and support local initiatives."
        }
        direction={"row"}
      ></ZigZag>
      <ZigZag
        image={"cranberrys-pcfp.jpeg"}
        title={"COMMITMENT TO QUALITY"}
        desc={
          "Our passion for fruit farming goes beyond just growing. It's about creating a product that reflects our dedication to quality, our respect for nature, and our love for the Fraser Valley. Whether it's a fresh batch of blueberries or a perfectly dried cranberry, every product we offer is a testament to our hard work and commitment to excellence."
        }
        direction={"row-reverse"}
      ></ZigZag>
      <ProductInfos></ProductInfos>
      <BerriFresh></BerriFresh>
      <Footer></Footer>

      {/* <Products></Products>
      
      <ZigZag></ZigZag> */}
    </div>
  );
};

export default Home;
