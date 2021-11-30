import { useState } from "react";
import { styled } from "@mui/system";
import { Container, Grid } from "@mui/material";
import { getAllPosts } from "lib/api";

import PreviewAlert from "@components/PreviewAlert";
import SectionImage from "@components/SectionImage";
import PostCard from "@components/PostCard";

export default function Home({ posts = [], preview }) {
  const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);
  return (
    <>
      <PreviewAlert preview={preview} />
      <SectionImage imgSrc="/images/blog.jpg" imgAlt="make up" title="Blog" />
      <Offset id="back-to-top-anchor" />
      <Container>
        <Grid container spacing={4}>
          {posts.map((post, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <PostCard key={index} post={post} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
export async function getStaticProps({ preview = false }) {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
      preview,
    },
  };
}
