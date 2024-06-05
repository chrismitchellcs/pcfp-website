import { Box, Stack } from "@mui/material";
import React from "react";

const GeneralInfo = () => {
  return (
    <Stack spacing={3} sx={{ m: 5, alignItems: "center" }}>
      <Box
        sx={{
          //   color: "#0c25a6",
          color: "#375072",
          fontSize: "32px",
          fontWeight: "400",
          textAlign: "center",
        }}
      >
        SUSTAINABILITY
      </Box>
      <Box
        sx={{
          //   color: "#0c25a6",
          color: "black",
          fontSize: "20px",
          fontWeight: "350",
          lineHeight: "1.5",
          textAlign: "center",
          width: "60%",
        }}
      >
        At Pacific Canadian Fruit Packers, we are more than just a farm; we are
        stewards of the land, proud of our heritage, and excited about our
        future. Thank you for being a part of our journey and enjoying the
        fruits of our labor.
      </Box>
    </Stack>
  );
};

export default GeneralInfo;
