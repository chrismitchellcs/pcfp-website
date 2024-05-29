import { Box, Stack } from "@mui/material";
import Image from "mui-image";
import React from "react";

const Product = ({ src, name, desc }) => {
  return (
    <Stack alignItems={"center"} spacing={2} sx={{ textAlign: "center" }}>
      <Image src={src} width={300} style={{ borderRadius: "150px" }}></Image>
      <Box sx={{ fontSize: "2vw" }}>{name}</Box>
      <Box
        sx={{
          fontSize: "1.6vw",
          fontWeight: "300",
          lineHeight: "1.5",
          width: "75%",
        }}
      >
        {desc}
      </Box>
    </Stack>
  );
};

const Products = () => {
  return (
    <Stack direction={"row"} justifyContent={"space-around"}>
      <Product
        src={"blueberries.jpg"}
        name={"Blueberries"}
        desc={
          "Enjoy the health benefits and delicious taste of our farm-fresh blueberries. Available fresh, frozen, or as juice, they're packed with antioxidants, vitamins, and fiber. Perfect for snacking, smoothies, and baking, our blueberries support heart, brain, and immune health. Choose our premium blueberries for a nutritious boost!"
        }
      ></Product>
      <Product
        src={"cranberries.jpg"}
        name={"Cranberries"}
        desc={
          "Discover the vibrant taste and versatile health benefits of our premium cranberries, perfect for adding a tart twist to your favorite dishes."
        }
      ></Product>
      <Product
        src={"beets.jpg"}
        name={"Beets"}
        desc={
          "Indulge in the earthy sweetness and nutritional powerhouse of our farm-fresh beets, hand-harvested to bring rich flavor and vibrant health benefits to your table."
        }
      ></Product>
    </Stack>
  );
};

export default Products;
