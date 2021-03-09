import { getAllVideoData } from "lib/youtube";

import Container from "components/Container";
import Layout from "components/Layout";
import LogoVideo from "components/LogoVideo";
import VideoTeaser from "components/VideoTeaser";

export default function VideoRoot({ videos }) {
  return (
    <Layout logo={LogoVideo}>
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h1>Videos</h1>
          <p className="text-4xl">
            <strong>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
              suscipit distinctio animi deserunt
            </strong>
          </p>
          <p className="text-lg md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            dolores at minima voluptatibus atque cumque beatae animi, veritatis
            suscipit consequatur porro quia sint recusandae! Corporis hic quia
            doloribus voluptas sed.
          </p>
          <div>
            <a
              href="https://www.facebook.com/okenglish.eu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Subscribe
            </a>
          </div>
        </div>
        <ul className="mt-12 grid gap-x-3 gap-y-6 md:gap-8 grid-cols-2 md:grid-cols-3">
          {videos?.map((video) => {
            return (
              <li key={video.id}>
                <VideoTeaser {...video} />
              </li>
            );
          })}
        </ul>
      </Container>
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
