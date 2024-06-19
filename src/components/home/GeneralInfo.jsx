import { Box, Stack } from "@mui/material";
import React from "react";

const GeneralInfo = () => {
  return (
    <Stack spacing={3} sx={{ m: 5, alignItems: "center" }}>
      <Box
        sx={{
          //   color: "#0c25a6",
          color: "#375072",
          fontSize: "36px",
          fontWeight: "400",
          textAlign: "center",
        }}
      >
        PACIFIC CANADIAN FRUIT PACKERS
      </Box>
      <Box
        sx={{
          //   color: "#0c25a6",
          color: "black",
          fontSize: "20px",
          fontWeight: "350",
          lineHeight: "1.6",
          textAlign: "center",
        }}
        width={{ xs: "90%", sm: "90%", md: "60%" }}
      >
        PCFP is a family-run business located in the Fraser Valley, nestled
        beneath the beautiful Golden Ears Mountains. We have been farming in the
        Vancouver area for over 30 years, and we are proud to say all of our
        products come from our own farms here in the Lower Mainland.
      </Box>
    </Stack>
  );
};

export default GeneralInfo;
