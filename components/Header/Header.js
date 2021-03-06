import MuiNextLink from "@components/MuiNextLink";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
// import { styled } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import Home from "@mui/icons-material/Home";
import Navbar from "@components/Navbar";
import SideDrawer from "@components/SideDrawer";
import HideOnScroll from "@components/HideOnScroll";
import Fab from "@mui/material/Fab";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import BackToTop from "@components/BackToTop";
import useHeaderState from "./useHeaderState";

// const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

export const navLinks = [
  { title: `o mnie`, path: `/`, id: "#o-mnie" },
  { title: `usługi`, path: `/`, id: "#uslugi" },
  { title: `opinie`, path: `/`, id: "#opinie" },
  { title: `blog`, path: `/blog` },
];

const Header = () => {
  const { isMobile, isViewportScrolled } = useHeaderState();
  return (
    <>
      <HideOnScroll>
        <AppBar
          position="fixed"
          color={isViewportScrolled ? "primary" : "transparent"}
          sx={{
            boxShadow: "none",
          }}
        >
          <Toolbar>
            <Container
              maxWidth="lg"
              sx={{ display: `flex`, justifyContent: `space-between` }}
            >
              <IconButton edge="start" aria-label="home">
                <MuiNextLink activeClassName="active" href="/">
                  <Home
                    sx={{
                      color: (theme) => theme.palette.common.white,
                    }}
                    fontSize="large"
                  />
                </MuiNextLink>
              </IconButton>
              <Navbar navLinks={navLinks} />
              <SideDrawer navLinks={navLinks} />
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <div id="back-to-top-anchor"></div>
      {/* <Offset id="back-to-top-anchor" /> */}
      <BackToTop>
        <Fab color="secondary" size="large" aria-label="back to top">
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </>
  );
};

export default Header;
