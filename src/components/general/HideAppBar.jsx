import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";

import Slide from "@mui/material/Slide";
import { Button, Menu, MenuItem, Stack, styled } from "@mui/material";

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
  fontSize: "18px",
  fontWeight: "400",

  "&:hover": {
    textDecoration: "underline",
    textDecorationThickness: "2px",
    textUnderlineOffset: "6px",
    backgroundColor: "transparent",
    color: "#375072",
  },
});

function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    const page = e.target.id;
    window.location.href = page;
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: "#375072" }}
      >
        <MenuIcon sx={{ fontSize: "30px" }}></MenuIcon>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose} id="/">
          About Us
        </MenuItem>
        <MenuItem onClick={handleClose} id="products">
          Our Products
        </MenuItem>
        <MenuItem onClick={handleClose} id="sustainability">
          Sustainability
        </MenuItem>
        <MenuItem onClick={handleClose} id="contact">
          Contact Us
        </MenuItem>
      </Menu>
    </div>
  );
}

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
              display={{ xs: "none", sm: "none", md: "flex" }}
            >
              <Stack
                sx={{ justifyContent: "space-between", width: "30%" }}
                direction={"row"}
              >
                <NavButton href="/">About Us</NavButton>
                <NavButton href="/products">Products</NavButton>
              </Stack>

              <Box
                sx={{
                  color: "#375072",
                  fontSize: "70px",
                  fontWeight: "500",
                  fontFamily: "Ubuntu",
                  fontStyle: "italic",
                }}
              >
                PCFP
              </Box>
              <Stack
                sx={{ justifyContent: "space-between", width: "30%" }}
                direction={"row"}
              >
                <NavButton href="/sustainability">Sustainability</NavButton>
                <NavButton href="/contact">Contact</NavButton>
              </Stack>
            </Stack>
            <Stack
              width={"100%"}
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              display={{ xs: "flex", sm: "flex", md: "none" }}
            >
              <Box
                sx={{
                  color: "#375072",
                  fontSize: "70px",
                  fontWeight: "500",
                  fontFamily: "Ubuntu",
                  fontStyle: "italic",
                }}
              >
                PCFP
              </Box>
              <BasicMenu></BasicMenu>
            </Stack>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
