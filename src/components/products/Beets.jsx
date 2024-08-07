import { Box, Stack } from "@mui/material";
import React from "react";
import { Image } from "mui-image";

const Beets = () => {
  return (
    <Stack sx={{ width: "100%", alignItems: "center", mb: 5 }}>
      <Image src={"beets.jpg"} width={"100%"} duration={1500}></Image>
      <Box sx={{ color: "#375072", fontSize: "28px", m: 3 }}>BEETS</Box>
      <Box
        sx={{
          width: "80%",
          mb: 3,
          fontSize: "20px",
          color: "black",
          fontWeight: "350",
          lineHeight: "1.6",
          textAlign: "center",
        }}
      >
        Beets are rich in vitamins, minerals, and antioxidants, supporting heart
        health, digestion, and reducing inflammation. They also enhance exercise
        performance and stamina, making them a nutritious addition to your diet.
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
          <Box sx={{ color: "#375072", fontSize: "24px" }}>BEET JUICE</Box>
          <Box
            sx={{
              color: "black",
              fontSize: "20px",
              fontWeight: "350",
              lineHeight: "1.6",
            }}
          >
            Beet juice is a nutrient-rich beverage that boosts energy, supports
            heart health, and improves exercise performance with its high levels
            of vitamins, minerals, and antioxidants.
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Beets;
