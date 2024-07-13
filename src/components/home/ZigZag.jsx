import { Box, Stack } from "@mui/material";
import Image from "mui-image";
import React from "react";

const ZigZag = ({ image, title, desc, direction }) => {
  return (
    <Stack direction={{ xs: "column", sm: "column", md: direction }}>
      <Stack
        spacing={2}
        pb={3}
        width={{ xs: "100%", sm: "100%", md: "50%" }}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          bgcolor: "#e8e8e8",
        }}
      >
        <Box width={"80%"}>
          <Box sx={{ fontSize: "28px", color: "#375072", m: 3 }}>{title}</Box>
          <Box
            sx={{
              fontSize: "20px",
              fontWeight: "350",
              lineHeight: "1.6",
            }}
          >
            {desc}
          </Box>
        </Box>
      </Stack>
      <Box width={"50%"} display={{ xs: "none", sm: "none", md: "block" }}>
        <Image src={image} width={"100%"} duration={1500}></Image>
      </Box>
      <Box width={"100%"} display={{ xs: "block", sm: "block", md: "none" }}>
        <Image src={image} width={"100%"} duration={1500}></Image>
      </Box>
    </Stack>
  );
};

export default ZigZag;
