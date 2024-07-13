import { Box, Button, Stack, styled } from "@mui/material";
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
      <Box display={{ xs: "none", sm: "none", md: "block" }}>
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
      </Box>
      <Box display={{ xs: "block", sm: "block", md: "none" }}>
        <Box
          component={"img"}
          src="berrifresh.webp"
          position={"absolute"}
          sx={{
            width: "300px",

            textAlign: "center",
          }}
        ></Box>
        <Box
          bgcolor={"#375072"}
          sx={{ width: "300px", height: "150px", borderRadius: "20px" }}
        ></Box>
      </Box>
    </div>
  );
};

const BerriFresh = () => {
  return (
    <Stack
      direction={{ xs: "column", sm: "column", md: "row" }}
      spacing={{ xs: 2, sm: 2, md: 10 }}
      sx={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        pt: 5,
        pb: 5,
      }}
    >
      <BerriImage></BerriImage>
      <Stack
        spacing={2}
        width={{ xs: "80%", sm: "80%", md: "30%" }}
        textAlign={"center"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box sx={{ color: "#375072", fontSize: "28px" }}>Berri Fresh</Box>
        <Box
          sx={{
            color: "black",
            fontSize: "20px",
            fontWeight: "350",
            lineHeight: "1.6",
          }}
        >
          Discover our new line of cold-pressed juices, Berri Fresh, crafted
          with the finest produce farmed right here at PCFP. Enjoy the pure,
          refreshing taste of farm-to-bottle goodness.
        </Box>
        <InfoButton
          href="https://www.berrifresh.ca/"
          // @ts-ignore
          target="_blank"
        >
          More Info
        </InfoButton>
      </Stack>
    </Stack>
  );
};

export default BerriFresh;
