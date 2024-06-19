import { Box, Stack } from "@mui/material";
import React from "react";

const ProductInfo = () => {
  return (
    <Stack sx={{ pt: 5, alignItems: "center", bgcolor: "#e8e8e8" }}>
      <Box sx={{ mt: 0, mb: 3, color: "#375072", fontSize: "32px" }}>
        OUR PRODUCTS
      </Box>
      <Box
        sx={{
          mt: 0,
          mb: 3,
          color: "black",
          fontSize: "20px",
          fontWeight: "300",
          textAlign: "center",
          lineHeight: "1.6",
        }}
        width={{ xs: "80%", sm: "80%", md: "60%" }}
      >
        We offer premium wholesale products straight from our farm. Our sweet
        blueberries and cranberries are picked at peak ripeness for maximum
        freshness and quality. Enjoy our sustainably farmed produce and taste
        the difference.
      </Box>
    </Stack>
  );
};

export default ProductInfo;
