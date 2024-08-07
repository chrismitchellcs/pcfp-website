import { Box, Stack } from "@mui/material";
import React from "react";

const GeneralInfo = () => {
  return (
    <Stack spacing={3} sx={{ m: 5, alignItems: "center" }}>
      <Box
        sx={{
          color: "black",
          fontSize: "20px",
          fontWeight: "350",
          textAlign: "center",
        }}
      >
        FARMING IN BC SINCE 1898
      </Box>
      <Box
        sx={{
          //   color: "#0c25a6",
          color: "#375072",
          fontSize: "36px",
          fontWeight: "500",
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
        beneath the beautiful Golden Ears Mountains. We are proud to say all of
        our products come from our own farms here in the Lower Mainland.
      </Box>
    </Stack>
  );
};

export default GeneralInfo;
