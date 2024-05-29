import React from "react";
import { Box, Stack } from "@mui/material";
import Image from "mui-image";

const TitleImage = () => {
  return (
    <div>
      {/* <Box
        position={"absolute"}
        sx={{
          color: "white",
          fontSize: "3vw",
          fontWeight: "400",
          left: 0,
          right: 0,
          textAlign: "center",
          top: "20%",
        }}
      >
        PACIFIC CANADIAN FRUIT PACKERS
      </Box> */}
      {/* <Box
        position={"absolute"}
        sx={{
          color: "white",
          fontSize: "2.5vw",
          fontWeight: "350",
          left: 0,
          right: 0,
          textAlign: "center",
          top: "27%",
        }}
      >
        Fraser Valley, British Columbia
      </Box> */}

      {/* <Box
        component={"img"}
        src={"titleimageedit copy.jpg"}
        sx={{ width: "100%" }}
      ></Box> */}
      <Image
        src={"titleimageedit copy.jpg"}
        duration={1000}
        width={"100%"}
        style={{ filter: "brightness(90%)" }}
      ></Image>
    </div>
  );
};

export default TitleImage;
