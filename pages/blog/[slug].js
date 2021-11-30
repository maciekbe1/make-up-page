import { getPostBySlug, getAllPosts } from "lib/api";
import PostContent from "@components/Post";
import PostMeta from "@components/Post/PostMeta";
import PreviewAlert from "@components/PreviewAlert";

export default function Post({ post, preview }) {
  return (
    <>
      <PreviewAlert preview={preview} />
      <PostMeta post={post} />
      <PostContent post={post} />
    </>
  );
}
export async function getStaticProps({ params, preview = false, previewData }) {
  const post = await getPostBySlug(params.slug, preview);
  return { props: { post, preview }, revalidate: 1 };
}

export async function getStaticPaths() {
  const posts = await getAllPosts();
  const paths = posts?.map((post) => ({ params: { slug: post.slug } })) || [];
  return {
    paths: [...paths],
    fallback: false,
  };
}
