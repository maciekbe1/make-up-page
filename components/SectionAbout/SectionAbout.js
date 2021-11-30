import { Container, Grid } from "@mui/material";
import Image from "next/image";
import Typography from "@mui/material/Typography";

const SectionAbout = () => {
  return (
    <Container component="section" maxWidth="md" sx={{ mb: 15 }}>
      <div id="o-mnie"></div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Image
            src="/images/artist.jpg"
            alt="artist"
            layout="responsive"
            width={800}
            height={1100}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          container
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            component="h2"
            variant="h4"
            textAlign="center"
            gutterBottom
          >
            O mnie
          </Typography>
          <Typography textAlign="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            consectetur, autem incidunt aliquid expedita assumenda, dolor atque
            saepe recusandae rem ipsam? Mollitia soluta cupiditate assumenda,
            illo doloribus itaque sit perferendis? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Ducimus quis atque iure dolores
            quibusdam incidunt qui nam accusantium aperiam. Harum at asperiores
            nostrum aliquid ex dolorum consectetur odio maiores totam.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SectionAbout;
