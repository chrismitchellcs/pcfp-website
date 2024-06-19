import React from "react";
import { Image } from "mui-image";
import { Box } from "@mui/material";

const TitleImage = () => {
  return (
    <div>
      <Box display={{ xs: "none", sm: "none", md: "block" }}>
        <Image src="sustain.jpg" width={"100%"} duration={1500}></Image>
      </Box>
      <Box display={{ xs: "block", sm: "block", md: "none" }}>
        <Image src="sustain-large.webp" width={"100%"} duration={1500}></Image>
      </Box>
    </div>
  );
};

export default TitleImage;
