import Grid from "@mui/material/Grid";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
export default function Hero({ imgSrc, imgAlt, title, subtitle }) {
  return (
    <Grid
      component="section"
      container
      sx={{
        position: `relative`,
        height: "100vh",
        // width: `100vw`,
        // overflow: `hidden`,
        // zIndex: -100,
        mb: 15,
        inset: 0,
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
          <Typography
            component="p"
            variant="h3"
            align="center"
            color="common.white"
            sx={{
              mb: 10,
            }}
          >
            {subtitle}
          </Typography>
          <Button
            href="https://booksy.com/pl-pl/102213_makeup-sara-bednarczyk_makijaz-slubny_21029_gdynia"
            color="secondary"
            variant="contained"
            target="_blank"
            size="large"
          >
            Umów
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
