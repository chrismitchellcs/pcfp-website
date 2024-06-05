import { Box, Button, Stack, styled } from "@mui/material";
import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import FaxOutlinedIcon from "@mui/icons-material/FaxOutlined";

const FooterButton = styled(Button)({
  backgroundColor: "#375072",
  color: "white",
  fontSize: "16px",
  fontWeight: "300",

  "&:hover": {
    backgroundColor: "#5c86bf",
    color: "white",
  },
});

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#e8e8e8", p: 5 }}>
      <Stack
        direction={"row"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Stack sx={{ textAlign: "center" }}>
          <Box
            sx={{
              color: "#375072",
              fontSize: "5vw",
              fontWeight: "500",
              fontFamily: "Ubuntu",
              fontStyle: "italic",
            }}
          >
            PCFP
          </Box>
          <Box sx={{ fontSize: "20px", fontWeight: "300", color: "#375072" }}>
            Pacific Canada Fruit Packers
          </Box>
        </Stack>
        <Stack justifyContent={"center"} spacing={1}>
          <FooterButton href="/">About Us</FooterButton>
          <FooterButton href="/products">Our Products</FooterButton>
          <FooterButton href="/sustainability">Sustainability</FooterButton>
          <FooterButton href="/contact">Contact Us</FooterButton>
        </Stack>
        <Stack justifyContent={"center"} sx={{ width: "20%" }}>
          <Stack
            spacing={2}
            sx={{ fontSize: "18px", fontWeight: "300", color: "#375072" }}
          >
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <LocationOnOutlinedIcon
                sx={{ fontSize: "30px" }}
              ></LocationOnOutlinedIcon>
              <Box>
                18450 Old Dewdney Trunk Road, Pitt Meadows, B.C. V3Y 2R9
              </Box>
            </Stack>
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <EmailOutlinedIcon sx={{ fontSize: "30px" }}></EmailOutlinedIcon>
              <Box>info@pcfp.ca</Box>
            </Stack>
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <LocalPhoneOutlinedIcon
                sx={{ fontSize: "30px" }}
              ></LocalPhoneOutlinedIcon>
              <Box>604-460-2026</Box>
            </Stack>
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <FaxOutlinedIcon sx={{ fontSize: "30px" }}></FaxOutlinedIcon>
              <Box>604-460-2041</Box>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
