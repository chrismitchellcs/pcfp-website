import { Box, Button, Stack, styled } from "@mui/material";
import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import FaxOutlinedIcon from "@mui/icons-material/FaxOutlined";

const InfoButton = styled(Button)({
  backgroundColor: "#375072",
  color: "white",
  fontSize: "18px",
  fontWeight: "350",
  width: "50%",

  "&:hover": {
    backgroundColor: "#5c86bf",
    color: "white",
  },
});

const InfoBox = () => {
  return (
    <Stack width={"100%"} justifyContent={"center"} alignItems={"center"}>
      <Stack
        sx={{
          bgcolor: "#e8e8e8",

          alignItems: "center",
          justifyContent: "center",
          p: 2,
          mb: 5,
        }}
        width={{ xs: "80%", sm: "80%", md: "50%" }}
      >
        <Stack
          spacing={4}
          sx={{ fontSize: "20px", fontWeight: "350", color: "#375072" }}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <LocationOnOutlinedIcon
              sx={{ fontSize: "30px" }}
            ></LocationOnOutlinedIcon>
            <Box>18450 Old Dewdney Trunk Road, Pitt Meadows, B.C. V3Y 2R9</Box>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <EmailOutlinedIcon sx={{ fontSize: "30px" }}></EmailOutlinedIcon>
            <Box>info@pcfp.ca</Box>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <LocalPhoneOutlinedIcon
              sx={{ fontSize: "30px" }}
            ></LocalPhoneOutlinedIcon>
            <Box>604-460-2026</Box>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <FaxOutlinedIcon sx={{ fontSize: "30px" }}></FaxOutlinedIcon>
            <Box>604-460-2041</Box>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default InfoBox;
