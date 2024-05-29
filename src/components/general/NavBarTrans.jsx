import { AppBar, Box, Button, Stack, Toolbar, styled } from "@mui/material";
import React, { useTransition } from "react";

const NavBarTrans = () => {
  const NavButton = styled(Button)({
    backgroundColor: "transparent",
    color: "white",
    maxHeight: "40px",
    fontSize: "1.2vw",
    fontWeight: "400",

    "&:hover": {
      textDecoration: "underline",
      textDecorationThickness: "2px",
      textUnderlineOffset: "6px",
      backgroundColor: "transparent",
      color: "white",
    },
  });

  return (
    <AppBar
      sx={{ bgcolor: "transparent", boxShadow: "none", position: "absolute" }}
    >
      {" "}
      <Toolbar sx={{ p: 0 }}>
        <Stack
          width={"100%"}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          display={{ xs: "none", sm: "flex" }}
        >
          <NavButton>Our Story</NavButton>
          <NavButton>Services</NavButton>

          <Box
            sx={{
              color: "#375072",
              fontSize: "6vw",
              fontWeight: "500",
              fontFamily: "Ubuntu",
              fontStyle: "italic",
            }}
          >
            PCFP
          </Box>

          <NavButton>Sustainability</NavButton>
          <NavButton>Contact</NavButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavBarTrans;
