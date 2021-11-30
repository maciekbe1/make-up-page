import { Box } from "@mui/material";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const SectionImage = ({ imgSrc, imgAlt, title, subtitle }) => {
  return (
    <Box
      component="section"
      container
      sx={{
        position: "relative",
        width: "100%",
        height: "60vh",
        overflow: "hidden",
        zIndex: -100,
      }}
    >
      <Image
        src={imgSrc}
        alt={imgAlt}
        layout="fill"
        objectFit="cover"
        priority
      />
      <Grid
        container
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0, .7)",
        }}
      >
        <Grid
          container
          item
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            variant="h1"
            align="center"
            gutterBottom
            sx={{
              color: "secondary.main",
              fontWeight: 600,
              fontFamily: "GreatVibes",
            }}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography
              component="p"
              variant="h3"
              align="center"
              color="common.white"
            >
              {subtitle}
            </Typography>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default SectionImage;
