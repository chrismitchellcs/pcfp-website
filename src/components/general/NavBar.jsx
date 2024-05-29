import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Stack,
  Toolbar,
  styled,
  useScrollTrigger,
} from "@mui/material";
import PropTypes from "prop-types";
import React, { useTransition } from "react";

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const NavBarTrans = (props) => {
  const NavButton = styled(Button)({
    backgroundColor: "transparent",
    color: "#375072",

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

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar
          sx={{ bgcolor: "white", boxShadow: "none", position: "sticky" }}
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
      </ElevationScroll>
    </React.Fragment>
  );
};

export default NavBarTrans;
