import { Box, Stack } from "@mui/material";
import React from "react";
import { Image } from "mui-image";

const Blueberries = () => {
  return (
    <Stack sx={{ width: "100%", alignItems: "center", mb: 5 }}>
      <Image src={"blueberrieslong.jpg"} width={"100%"}></Image>
      <Box sx={{ color: "#375072", fontSize: "30px", m: 3 }}>BLUEBERRIES</Box>
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
        Consumers are becoming more aware of the health benefits associated with
        Blueberries. This little berry is known as an excellent source of
        vitamins A and C and dietary fiber. Researchers have also linked the
        antioxidants found in Blueberries to a reduced risk of cancer and heart
        disease. Blueberries may also be beneficial for eyesight and memory.
        Anthocyanin - the pigment that makes blueberries blue - is thought to be
        responsible for these major health benefits.
      </Box>
      <Stack
        direction={"row"}
        sx={{ width: "100%", justifyContent: "space-around" }}
      >
        <Stack spacing={3} sx={{ bgcolor: "#e8e8e8", width: "40%", p: 3 }}>
          <Box sx={{ color: "#375072", fontSize: "30px" }}>
            FROZEN BLUEBERRIES
          </Box>
          <Box
            sx={{
              color: "black",
              fontSize: "22px",
              fontWeight: "300",
              lineHeight: "1.5",
            }}
          >
            During the summer harvest season, blueberries are cooled immediately
            after being delivered from our farms, and washed, packed, and frozen
            within 24 hours to preserve freshness and quality.
          </Box>
          <Box
            sx={{
              color: "black",
              fontSize: "22px",
              fontWeight: "300",
              lineHeight: "1.5",
            }}
          >
            We grade according to both Canadian and USDA standards, offering
            different classification levels:
          </Box>
          <Stack
            direction={"row"}
            sx={{
              width: "100%",
              justifyContent: "space-around",
              textAlign: "center",
              color: "black",
              fontSize: "22px",
              fontWeight: "450",
              lineHeight: "1.5",
            }}
          >
            <Stack>
              <Box>Grade A</Box>
              <Box>Puree</Box>
            </Stack>
            <Stack>
              <Box>Grade B</Box>
              <Box>Juice</Box>
            </Stack>
          </Stack>
          <Box
            sx={{
              color: "black",
              fontSize: "22px",
              fontWeight: "300",
              lineHeight: "1.5",
            }}
          >
            Blueberries are packed in 30lb corrugated cases.
          </Box>
        </Stack>
        <Stack spacing={3} sx={{ bgcolor: "#e8e8e8", width: "40%", p: 3 }}>
          <Box sx={{ color: "#375072", fontSize: "30px" }}>
            SWEETENED & DRIED BLUEBERRIES
          </Box>
          <Box
            sx={{
              color: "black",
              fontSize: "22px",
              fontWeight: "300",
              lineHeight: "1.5",
            }}
          >
            These are made in-house, sugar-infused and dried into a tasty snack.
          </Box>
          <Box
            sx={{
              color: "black",
              fontSize: "22px",
              fontWeight: "300",
              lineHeight: "1.5",
            }}
          >
            Sweetened & Dried Whole Blueberries are packed in 25lb corrugated
            cases.
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Blueberries;
