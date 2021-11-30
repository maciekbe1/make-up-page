import { Container, Grid, Typography } from "@mui/material";
import services from "./services.json";
import ServiceCard from "@components/ServiceCard";

const SectionServices = () => {
  return (
    <Container maxWidth="md" sx={{ my: 15 }}>
      <div id="uslugi"></div>
      <Typography variant="h2" textAlign="center" sx={{ mb: 10 }}>
        Usługi
      </Typography>
      <Grid container spacing={4}>
        {services.map((item, i) => (
          <Grid
            key={i}
            container
            item
            justifyContent="center"
            xs={12}
            sm={6}
            md={4}
          >
            <ServiceCard key={i} title={item.title} image={item.image} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SectionServices;
