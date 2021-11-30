import { Container, Grid } from "@mui/material";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import PostCard from "@components/PostCard";

const SectionPost = ({ posts = [] }) => {
  return (
    <Container maxWidth="md" sx={{ my: 15 }}>
      <div id="posty"></div>
      <Typography variant="h2" textAlign="center" sx={{ mb: 10 }}>
        Ostatnie posty
      </Typography>
      <Grid container spacing={4}>
        {posts.map((post, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <PostCard key={index} post={post} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SectionPost;
