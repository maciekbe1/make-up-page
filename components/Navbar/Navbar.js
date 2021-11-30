import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import onScroll from "@components/utils/onScroll";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

const Navbar = ({ navLinks }) => {
  const router = useRouter();
  return (
    <Toolbar
      component="nav"
      sx={{
        display: { xs: `none`, md: `flex` },
      }}
    >
      <Stack direction="row" spacing={4}>
        {navLinks.map(({ title, path, id }, i) =>
          router.pathname === "/" && id ? (
            <Button
              key={`${title}${i}`}
              onClick={(e) => onScroll(e, id)}
              variant="link"
              sx={{ color: `white`, opacity: 0.7 }}
            >
              {title}
            </Button>
          ) : (
            <Button
              key={`${title}${i}`}
              href={path}
              variant="button"
              sx={{ color: `white`, opacity: 0.7 }}
            >
              {title}
            </Button>
          )
        )}
      </Stack>
    </Toolbar>
  );
};

export default Navbar;
