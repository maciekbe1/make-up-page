import Container from "@mui/material/Container";
import Hero from "@components/Hero";
import SectionAbout from "@components/SectionAbout";
import SectionReview from "@components/SectionReview";
import SectionServices from "@components/SectionServices";
import SectionPost from "@components/SectionPost";
import PreviewAlert from "@components/PreviewAlert";
import { getAuthor, getPaginatedPosts } from "lib/api";

const Home = ({ preview, posts, author }) => {
  return (
    <>
      <PreviewAlert preview={preview} />
      <Hero
        imgSrc="/images/image.jpg"
        imgAlt="make up"
        title="Sara Bednarczyk"
        subtitle="Make-up Artist"
      />
      <SectionAbout author={author[0]} />
      <SectionServices />
      <SectionReview />
      <SectionPost posts={posts} />
    </>
  );
};
export async function getStaticProps({ preview = false }) {
  const posts = await getPaginatedPosts({ offset: 0, date: "desc" });
  const author = await getAuthor();
  return {
    props: {
      posts,
      preview,
      author,
    },
  };
}
export default Home;
