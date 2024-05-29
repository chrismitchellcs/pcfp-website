import { Box, Stack } from "@mui/material";
import React from "react";
import { Image } from "mui-image";

const ProductInfo = ({ image, name, desc }) => {
  return (
    <Stack
      direction={"row"}
      spacing={2}
      sx={{ justifyContent: "center", alignItems: "center" }}
    >
      <Image src={image} width={"20%"}></Image>
      <Stack spacing={3} sx={{ width: "60%" }}>
        <Box sx={{ color: "#375072", fontSize: "28px" }}>{name}</Box>
        <Box sx={{ fontSize: "20px", fontWeight: "300", lineHeight: "1.5" }}>
          {desc}
        </Box>
      </Stack>
    </Stack>
  );
};

const ProductInfos = () => {
  return (
    <Stack m={2}>
      <ProductInfo
        image={"blueberries.webp"}
        name={"BLUEBERRIES"}
        desc={
          "Our farm's blueberry products are not only delicious but also packed with health benefits and produced sustainably. The rich, sweet flavor of our blueberries comes from being handpicked at peak ripeness, ensuring the freshest taste in every bite. Nutritionally, they are a powerhouse of antioxidants, vitamins, and fiber, promoting overall health and well-being."
        }
      ></ProductInfo>
      <ProductInfo
        image={"cranberry.jpg"}
        name={"CRANBERRIES"}
        desc={
          "Indulge in the superior taste and health benefits of our farm fresh cranberries. Our products include sweet and tangy dried cranberries, nutritious cranberry seeds, and tart, fresh cranberries, all harvested at their peak for maximum flavor and quality. Enjoy these versatile cranberries in your favorite recipes and support sustainable farming with every purchase."
        }
      ></ProductInfo>
      <ProductInfo
        image={"beets-white.avif"}
        name={"BEETS"}
        desc={
          "Enjoy the earthy sweetness and health benefits of our farm-fresh beets and beet juice. Packed with nutrients and antioxidants, our beets boost stamina and support heart health. Choose our beet juice for a delicious, refreshing way to enhance your wellness."
        }
      ></ProductInfo>
    </Stack>
  );
};

export default ProductInfos;
