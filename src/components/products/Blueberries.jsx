import { Box, Stack } from "@mui/material";
import React from "react";
import { Image } from "mui-image";

const Blueberries = () => {
  return (
    <Stack sx={{ width: "100%", alignItems: "center", mb: 5 }}>
      <Image src={"blueberrieslong.jpg"} width={"100%"} duration={1500}></Image>
      <Box sx={{ color: "#375072", fontSize: "28px", m: 3 }}>BLUEBERRIES</Box>
      <Box
        sx={{
          width: "80%",
          mb: 3,
          fontSize: "20px",
          color: "black",
          fontWeight: "300",
          lineHeight: "1.6",
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
        <Stack
          spacing={3}
          sx={{ bgcolor: "#e8e8e8", p: 3 }}
          width={{ xs: "80%", sm: "80%", md: "60%" }}
        >
          <Box sx={{ color: "#375072", fontSize: "24px" }}>
            FROZEN BLUEBERRIES
          </Box>
          <Box
            sx={{
              color: "black",
              fontSize: "20px",
              fontWeight: "300",
              lineHeight: "1.6",
            }}
          >
            During the summer harvest season, blueberries are cooled immediately
            after being delivered from our farms, and washed, packed, and frozen
            within 24 hours to preserve freshness and quality.
          </Box>
          <Box
            sx={{
              color: "black",
              fontSize: "20px",
              fontWeight: "300",
              lineHeight: "1.6",
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
              fontSize: "20px",
              fontWeight: "450",
              lineHeight: "1.6",
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
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Blueberries;
