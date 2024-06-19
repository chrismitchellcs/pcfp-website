import React from "react";
import Image from "mui-image";
import { Box } from "@mui/material";

const TitleImage = () => {
  return (
    <div>
      <Box display={{ xs: "none", sm: "none", md: "block" }}>
        <Image
          src={"titleimageedit copy.jpg"}
          duration={1500}
          width={"100%"}
          style={{ filter: "brightness(90%)" }}
        ></Image>
      </Box>
      <Box display={{ xs: "none", sm: "block", md: "none" }}>
        <Image
          src={"titleimageedit.jpg"}
          duration={1500}
          width={"100%"}
          style={{ filter: "brightness(90%)" }}
        ></Image>
      </Box>
      <Box display={{ xs: "block", sm: "none", md: "none" }}>
        <Image
          src={"titleimage.webp"}
          duration={1500}
          width={"100%"}
          style={{ filter: "brightness(90%)" }}
        ></Image>
      </Box>
    </div>
  );
};

export default TitleImage;
