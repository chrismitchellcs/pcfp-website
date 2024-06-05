import { Box, Stack } from "@mui/material";
import Image from "mui-image";
import React from "react";

const ZigZag = ({ image, title, desc, direction }) => {
  return (
    <Stack direction={direction} sx={{}}>
      <Stack
        spacing={2}
        sx={{
          width: "50%",
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
              fontWeight: "300",
              lineHeight: "1.6",
            }}
          >
            {desc}
          </Box>
        </Box>
      </Stack>

      <Image src={image} width={"50%"} duration={1500}></Image>
    </Stack>
  );
};

export default ZigZag;
