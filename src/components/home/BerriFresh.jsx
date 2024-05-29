import { Box, Button, Stack, styled } from "@mui/material";
import { Image } from "mui-image";
import React from "react";

const InfoButton = styled(Button)({
  backgroundColor: "#375072",
  color: "white",
  fontSize: "18px",
  fontWeight: "300",
  width: "50%",

  "&:hover": {
    backgroundColor: "#5c86bf",
    color: "white",
  },
});

const BerriImage = () => {
  return (
    <div>
      <Box
        component={"img"}
        src="berrifresh.webp"
        position={"absolute"}
        sx={{
          width: "500px",

          textAlign: "center",
        }}
      ></Box>
      <Box
        bgcolor={"#375072"}
        sx={{ width: "500px", height: "250px", borderRadius: "20px" }}
      ></Box>
    </div>
  );
};

const BerriFresh = () => {
  return (
    <Stack
      direction={"row"}
      spacing={10}
      sx={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        p: 5,
      }}
    >
      <BerriImage></BerriImage>
      <Stack spacing={2} sx={{ width: "30%" }}>
        <Box sx={{ color: "#375072", fontSize: "34px" }}>Berri Fresh</Box>
        <Box
          sx={{
            color: "black",
            fontSize: "22px",
            fontWeight: "300",
            lineHeight: "1.5",
          }}
        >
          Discover our new line of cold-pressed juices, Berri Fresh, crafted
          with the finest produce farmed right here at PCFP. Enjoy the pure,
          refreshing taste of farm-to-bottle goodness.
        </Box>
        <InfoButton>More Info</InfoButton>
      </Stack>
    </Stack>
  );
};

export default BerriFresh;
