import Head from "next/head";
import { urlFor } from "lib/client";

export default function PostMeta({ post }) {
  return (
    <Head>
      <title>{post.title}</title>
      <meta description={post.subtitle} />
      {post?.categories?.length && (
        <meta
          name="keyworld"
          content={post.categories
            .slice(", ")
            .map((item) => item.toLowerCase())}
        />
      )}
      <meta property="og:title" content={post.title} key="ogtitle" />
      <meta property="og:description" content={post.subtitle} key="ogdesc" />
      <meta
        property="og:image"
        content={urlFor(post.thumnailImage)
          .height(300)
          .crop("center")
          .fit("clip")
          .url()}
        key="ogimage"
      />
      <meta
        property="og:url"
        content={process.env.NEXT_PUBLIC_ORIGIN + "/posts/" + post.slug}
        key="ogurl"
      />
    </Head>
  );
}
