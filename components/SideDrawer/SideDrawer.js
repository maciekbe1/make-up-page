import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/icons-material/Menu";
import MuiNextLink from "@components/MuiNextLink";
import { useState } from "react";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import onScroll from "@components/utils/onScroll";

const SideDrawer = ({ navLinks }) => {
  const [state, setState] = useState({
    right: false,
  });
  const router = useRouter();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250, marginTop: `auto`, marginBottom: `auto` }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {navLinks.map(({ title, path, id }, i) => (
        <Typography
          variannt="button"
          key={`${title}${i}`}
          sx={{
            ml: 5,
            my: 2,
            textTransform: `uppercase`,
          }}
        >
          {router.pathname === "/" && id ? (
            <Button
              key={`${title}${i}`}
              onClick={(e) => {
                toggleDrawer(anchor, false);
                setTimeout(() => {
                  onScroll(e, id);
                }, 200);
              }}
              variant="link"
              sx={{ color: `white`, opacity: 0.7 }}
            >
              {title}
            </Button>
          ) : (
            <Button
              variant="link"
              sx={{ color: `white`, opacity: 0.7 }}
              href={path}
            >
              {title}
            </Button>
          )}
        </Typography>
      ))}
    </Box>
  );

  return (
    <>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={toggleDrawer("right", true)}
        sx={{
          color: `common.white`,
          display: { xs: `inline`, md: `none` },
        }}
      >
        <Menu fontSize="large" />
      </IconButton>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
        sx={{
          ".MuiDrawer-paper": {
            bgcolor: "primary.main",
          },
        }}
      >
        {list("right")}
      </Drawer>
    </>
  );
};

export default SideDrawer;
