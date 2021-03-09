import { getAllVideoData } from "lib/youtube";
import Link from "next/link";

import Layout from "components/Layout";

export default function VideoRoot({ videos }) {
  return (
    <Layout>
      <h1>Videos</h1>
      <ul className="mt-12 grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {videos?.map((video) => {
          const videoHref = `/wideo/${video.id}`;

          return (
            <li key={video.id}>
              <Link href={videoHref}>{video.title}</Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const videos = await getAllVideoData();

  return {
    props: {
      videos,
    },
    revalidate: 3600,
  };
}
