import { Box, Stack } from "@mui/material";
import React from "react";
import { Image } from "mui-image";

const FrozenProducts = () => {
  return (
    <Stack sx={{ bgcolor: "white", alignItems: "center", p: 3 }}>
      <Box sx={{ mb: 3, color: "#375072", fontSize: "30px" }}>
        FROZEN PRODUCTS
      </Box>
      <Stack
        direction={"row"}
        sx={{ width: "100%", justifyContent: "space-around" }}
      >
        <Stack sx={{}}>
          <Image
            src="blueberries.jpg"
            width={300}
            style={{ borderRadius: "100px" }}
          ></Image>
        </Stack>
        <Stack sx={{}}>
          <Image
            src="cramberry.jpg"
            width={300}
            style={{ borderRadius: "500px" }}
          ></Image>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default FrozenProducts;
