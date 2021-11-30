import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Facebook, Instagram } from "@mui/icons-material";
import MuiNextLink from "@components/MuiNextLink";
const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 5, bgcolor: "primary.main", mt: 8 }}>
      <Stack direction="row" justifyContent="center" spacing={4} sx={{ mb: 2 }}>
        <MuiNextLink
          sx={{ textDecoration: "none", color: "common.white" }}
          href="https://www.facebook.com/search/top?q=makeup_sara.bednarczyk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook fontSize="large" />
        </MuiNextLink>
        <MuiNextLink
          sx={{ textDecoration: "none", color: "common.white" }}
          href="https://www.instagram.com/sara.bed_makeup/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram fontSize="large" />
        </MuiNextLink>
      </Stack>
      <Typography align="center" color="common.white">
        Blog © 2021
      </Typography>
    </Box>
  );
};

export default Footer;
