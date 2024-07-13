import { Box, Stack } from "@mui/material";
import React from "react";
import { Image } from "mui-image";

const Cranberries = () => {
  return (
    <Stack sx={{ width: "100%", alignItems: "center", mb: 5 }}>
      <Image src={"cramberry.jpg"} width={"100%"} duration={1500}></Image>
      <Box sx={{ color: "#375072", fontSize: "28px", m: 3 }}>CRANBERRIES</Box>
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
        <Stack
          spacing={2}
          sx={{ bgcolor: "#e8e8e8", p: 3 }}
          width={{ xs: "80%", sm: "80%", md: "60%" }}
        >
          <Box sx={{ color: "#375072", fontSize: "24px" }}>
            FROZEN CRANBERRIES
          </Box>

          <Box
            sx={{
              color: "black",
              fontSize: "20px",
              fontWeight: "350",
              lineHeight: "1.6",
            }}
          >
            Within 36 hours, cranberries are harvested from our farms, washed,
            packed and frozen.
          </Box>
          <Box sx={{ color: "#375072", fontSize: "24px" }}>
            SWEETENED CRANBERRIES
          </Box>

          <Box
            sx={{
              color: "black",
              fontSize: "20px",
              fontWeight: "350",
              lineHeight: "1.6",
            }}
          >
            Sweetened cranberries are tart berries coated in sugar for a sweet
            and tangy flavor.
          </Box>
          <Box sx={{ color: "#375072", fontSize: "24px" }}>CRANBERRY JUICE</Box>

          <Box
            sx={{
              color: "black",
              fontSize: "20px",
              fontWeight: "350",
              lineHeight: "1.6",
            }}
          >
            Available in both single-strength and concentrate forms.
          </Box>
          <Box sx={{ color: "#375072", fontSize: "24px" }}>CRANBERRY SYRUP</Box>

          <Box
            sx={{
              color: "black",
              fontSize: "20px",
              fontWeight: "350",
              lineHeight: "1.6",
            }}
          >
            Our cranberry syrup is made from cooked cranberries and sugar,
            creating a sweet, tangy flavor perfect for many dishes and drinks.
          </Box>
          <Box sx={{ color: "#375072", fontSize: "24px" }}>CRANBERRY SEEDS</Box>

          <Box
            sx={{
              color: "black",
              fontSize: "20px",
              fontWeight: "350",
              lineHeight: "1.6",
            }}
          >
            Discover the nutritious and versatile benefits of cranberry seeds,
            ideal for adding a healthy crunch to your meals and snacks.
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Cranberries;
