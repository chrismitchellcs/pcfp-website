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
        CONTACT US
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
        width={{ xs: "80%", sm: "80%", md: "60%" }}
      >
        Contact Pacific Canadian Fruit Packers for inquiries regarding wholesale
        orders, partnerships, or more information about our premium blueberry
        and cranberry products and sustainable farming practices.
      </Box>
    </Stack>
  );
};

export default GeneralInfo;
