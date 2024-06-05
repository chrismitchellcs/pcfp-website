import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";

import Slide from "@mui/material/Slide";
import { Button, Stack, styled } from "@mui/material";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const NavButton = styled(Button)({
  backgroundColor: "transparent",
  color: "#375072",
  maxHeight: "40px",
  fontSize: "1.2vw",
  fontWeight: "400",

  "&:hover": {
    textDecoration: "underline",
    textDecorationThickness: "2px",
    textUnderlineOffset: "6px",
    backgroundColor: "transparent",
    color: "#375072",
  },
});

export default function HideAppBar(props) {
  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar sx={{ bgcolor: "white" }}>
          {" "}
          <Toolbar>
            <Stack
              width={"100%"}
              direction={"row"}
              justifyContent={"space-around"}
              alignItems={"center"}
              display={{ xs: "none", sm: "flex" }}
            >
              <Stack
                sx={{ justifyContent: "space-between", width: "25%" }}
                direction={"row"}
              >
                <NavButton href="/">About Us</NavButton>
                <NavButton href="/products">Products</NavButton>
              </Stack>

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
              <Stack
                sx={{ justifyContent: "space-between", width: "25%" }}
                direction={"row"}
              >
                <NavButton href="/sustainability">Sustainability</NavButton>
                <NavButton href="/contact">Contact</NavButton>
              </Stack>
            </Stack>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
