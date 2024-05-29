import { Box, Stack } from "@mui/material";
import React from "react";
import { Image } from "mui-image";

const Cranberries = () => {
  return (
    <Stack sx={{ width: "100%", alignItems: "center", mb: 5 }}>
      <Image src={"cramberry.jpg"} width={"100%"}></Image>
      <Box sx={{ color: "#375072", fontSize: "30px", m: 3 }}>CRANBERRIES</Box>
      <Box
        sx={{
          width: "80%",
          mb: 3,
          fontSize: "22px",
          color: "black",
          fontWeight: "300",
          lineHeight: "1.5",
          textAlign: "center",
        }}
      >
        Cranberries are a nutritional powerhouse, rich in antioxidants and
        vitamins that support overall health. They are known for promoting
        urinary tract health, boosting the immune system, and providing
        anti-inflammatory benefits. Additionally, their high fiber content aids
        in digestion, making cranberries a delicious and healthy addition to any
        diet.
      </Box>
      <Stack
        direction={"row"}
        sx={{ width: "100%", justifyContent: "space-around" }}
      >
        <Stack spacing={3} sx={{ bgcolor: "#e8e8e8", width: "40%", p: 3 }}>
          <Box sx={{ color: "#375072", fontSize: "30px" }}>
            FROZEN CRANBERRIES
          </Box>
          <Box
            sx={{
              color: "black",
              fontSize: "22px",
              fontWeight: "300",
              lineHeight: "1.5",
            }}
          >
            Autumn is best when it comes to cranberries. The cool weather is
            what gives them their deep ruby hue.
          </Box>
          <Box
            sx={{
              color: "black",
              fontSize: "22px",
              fontWeight: "300",
              lineHeight: "1.5",
            }}
          >
            Within 36 hours, cranberries are harvested from our farms, washed,
            packed and frozen.
          </Box>

          <Box
            sx={{
              color: "black",
              fontSize: "22px",
              fontWeight: "300",
              lineHeight: "1.5",
            }}
          >
            Cranberries are packed in 25lb corrugated cases.
          </Box>
        </Stack>
        <Stack spacing={3} sx={{ bgcolor: "#e8e8e8", width: "40%", p: 3 }}>
          <Box sx={{ color: "#375072", fontSize: "30px" }}>
            SWEETENED & DRIED CRANBERRIES
          </Box>
          <Box
            sx={{
              color: "black",
              fontSize: "22px",
              fontWeight: "300",
              lineHeight: "1.5",
            }}
          >
            These tasty pieces are sweetened, dried, and ready for anything.
          </Box>
          <Box
            sx={{
              color: "black",
              fontSize: "22px",
              fontWeight: "300",
              lineHeight: "1.5",
            }}
          >
            Availiable as both sliced and whole.
          </Box>
          <Box
            sx={{
              color: "black",
              fontSize: "22px",
              fontWeight: "300",
              lineHeight: "1.5",
            }}
          >
            Sweetened & Dried Sliced Cranberries are packed in 25lb corrugated
            cases.
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Cranberries;
