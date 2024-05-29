import React from "react";
import HideAppBar from "components/general/HideAppBar";
import Footer from "components/general/Footer";
import ProductInfo from "components/products/ProductInfo";
import FrozenProducts from "components/products/FrozenProducts";
import Blueberries from "components/products/Blueberries";
import Cranberries from "components/products/Cranberries";
import Beets from "components/products/Beets";

const Products = () => {
  return (
    <div>
      <HideAppBar></HideAppBar>
      <ProductInfo></ProductInfo>
      <Blueberries></Blueberries>
      <Cranberries></Cranberries>
      <Beets></Beets>
      <Footer></Footer>
    </div>
  );
};

export default Products;
