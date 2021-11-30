import { Container, Grid, Typography } from "@mui/material";
import reviews from "./reviews.json";
import ReviewCard from "@components/ReviewCard";
const SectionReview = () => {
  return (
    <Container maxWidth="md" sx={{ my: 15 }}>
      <div id="opinie"></div>
      <Typography variant="h2" textAlign="center" sx={{ mb: 10 }}>
        Opinie
      </Typography>
      <Grid container spacing={4}>
        {reviews.map((item, index) => (
          <Grid
            key={index}
            container
            item
            justifyContent="center"
            xs={12}
            sm={6}
            md={4}
          >
            <ReviewCard
              shortName={item.shortName}
              review={item.review}
              fullName={item.fullName}
              color={item.color}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SectionReview;
