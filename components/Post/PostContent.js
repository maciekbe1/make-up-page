import SectionImage from "@components/SectionImage";

import BlockContent from "@sanity/block-content-to-react";
import serializers from "@components/utils/serializers";
import { Container, Grid } from "@mui/material";
import { urlFor } from "lib/client";

export default function PostContent({ post }) {
  return (
    <>
      <SectionImage
        imgSrc={urlFor(post.mainImage).format("webp").url()}
        imgAlt="make up"
        title={post.title}
        subtitle={post.subtitle}
      />
      <Container component="section" maxWidth="md" sx={{ mb: 15 }}>
        {/* <Grid container spacing={3}>
          <Grid item xs={12} sm={6}> */}
        <BlockContent serializers={serializers} blocks={post.body} />
        {/* </Grid>
        </Grid> */}
      </Container>
    </>
  );
}
