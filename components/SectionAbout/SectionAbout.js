import { Container, Grid } from "@mui/material";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import BlockContent from "@sanity/block-content-to-react";
import serializers from "@components/utils/serializers";

const SectionAbout = ({ author }) => {
  return (
    <Container component="section" maxWidth="md" sx={{ mb: 15 }}>
      <div id="o-mnie"></div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Image
            src="/images/artist.jpg"
            alt="artist"
            layout="responsive"
            objectFit="cover"
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
          <BlockContent serializers={serializers} blocks={author.bio} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SectionAbout;
