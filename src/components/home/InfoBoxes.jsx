import { Box, Button, Stack, styled } from "@mui/material";
import React from "react";

const InfoButton = styled(Button)({
  backgroundColor: "#375072",
  color: "white",
  fontSize: "18px",
  fontWeight: "300",
  width: "50%",

  "&:hover": {
    backgroundColor: "#5c86bf",
    color: "white",
  },
});

const InfoBox = ({ title, desc, link }) => {
  return (
    <Stack
      width={{ xs: "80%", sm: "80%", md: "22%" }}
      sx={{
        bgcolor: "#e8e8e8",

        textAlign: "center",
        alignItems: "center",
        justifyContent: "space-between",
        p: 2,
        mb: 5,
      }}
    >
      <Box sx={{ mt: 0, mb: 3, color: "#375072", fontSize: "28px" }}>
        {title}
      </Box>
      <Box
        sx={{
          mt: 0,
          mb: 3,
          fontWeight: "300",
          fontSize: "20px",
          lineHeight: "1.6",
        }}
      >
        {desc}
      </Box>
      <InfoButton href={link}>More Info</InfoButton>
    </Stack>
  );
};

const InfoBoxes = () => {
  return (
    <Stack
      width={"100%"}
      direction={{ xs: "column", sm: "column", md: "row" }}
      justifyContent={"space-around"}
      alignItems={{ xs: "center", sm: "center", md: "normal" }}
    >
      <InfoBox
        title={"OUR PRODUCTS"}
        desc={
          "All of our blueberries, cranberries, and beets are produced in-house on our farm, ensuring top-quality from planting to packaging."
        }
        link={"/products"}
      ></InfoBox>
      <InfoBox
        title={"SUSTAINABILITY"}
        desc={
          "Our farm in Fraser Valley is committed to sustainability, producing everything in-house to ensure environmentally friendly practices and the highest quality produce."
        }
        link={"/sustainability"}
      ></InfoBox>
      <InfoBox
        title={"CONTACT US"}
        desc={
          "For inquiries about our wholesale products, please contact us to discuss your needs and how we can supply the freshest produce directly from our farm."
        }
        link={"/contact"}
      ></InfoBox>
    </Stack>
  );
};

export default InfoBoxes;
