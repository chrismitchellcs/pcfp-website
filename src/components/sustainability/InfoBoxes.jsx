import { Box, Button, Stack, styled } from "@mui/material";
import React from "react";

const InfoBox = ({ title, desc, link }) => {
  return (
    <Stack
      sx={{
        bgcolor: "#e8e8e8",
        width: "28%",
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
    </Stack>
  );
};

const InfoBoxes = () => {
  return (
    <Stack direction={"row"} justifyContent={"space-around"}>
      <InfoBox
        title={"Locally Grown, Sustainably Managed"}
        desc={
          "Nestled in the Fraser Valley, BC, our fruit farm takes pride in growing all our produce on-site, minimizing transportation emissions and supporting local biodiversity. By cultivating everything on our land, we ensure fresh, high-quality fruits while promoting sustainable agricultural practices."
        }
        link={""}
      ></InfoBox>
      <InfoBox
        title={"Eco-Friendly Processing"}
        desc={
          "Our commitment to sustainability extends to every step of our production process, all of which is done on-site. From washing and drying to packing and freezing, we use eco-friendly methods that reduce waste and conserve energy, ensuring our operations have a minimal environmental impact."
        }
        link={""}
      ></InfoBox>
      <InfoBox
        title={"Farm-to-Table Freshness"}
        desc={
          "By handling all processes on-site, we maintain the highest standards of quality and freshness from farm to table. This approach not only guarantees the best tasting fruit but also reinforces our dedication to sustainable, responsible farming practices that benefit both our community and the planet."
        }
        link={""}
      ></InfoBox>
    </Stack>
  );
};

export default InfoBoxes;
