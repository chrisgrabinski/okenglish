import { NextSeo, VideoJsonLd } from "next-seo";
import anchorMe from "anchorme";

import { getAllVideoPaths, getVideoData } from "lib/youtube";

import { composeDate } from "helpers/date";
import { composeDuration } from "helpers/duration";

import Breadcrumbs from "components/Breadcrumbs";
import Container from "components/Container";
import Layout from "components/Layout";
import LogoVideo from "components/LogoVideo";
import YouTubeVideo from "components/YouTubeVideo";

import BreakfastCard from "components/views/video/BreakfastCard";

export default function Video({ videoData }) {
  const thumbnail =
    videoData?.thumbnails.maxres ||
    videoData?.thumbnails.high ||
    videoData?.thumbnails.default;

  const cleanDescription = videoData?.description?.replace(/\s+/g, " ");
  const formattedDescription = anchorMe(videoData?.description);

  const formattedPublishedAt = composeDate(videoData.publishedAt);
  const formattedDuration = composeDuration(videoData?.duration);

  const breadcrumbsItems = [
    {
      name: "Wideo",
      item: "/wideo",
    },
    {
      name: videoData?.title,
      item: `/wideo/${videoData?.id}`,
    },
  ];

  return (
    <Layout logo={LogoVideo}>
      <Container>
        <YouTubeVideo
          videoId={videoData.id}
          opts={{
            playerVars: {
              autoplay: 1,
              modestbranding: 1,
            },
          }}
        />
        <div className="mt-8 grid md:grid-cols-12 gap-8">
          <div className="md:col-span-7 lg:col-span-8">
            <h1 className="font-bold text-3xl sm:text-4xl">
              {videoData.title}
            </h1>
            <p className="mt-2">
              <time dateTime={videoData.publishedAt}>
                {formattedPublishedAt}
              </time>{" "}
              | <time dateTime={videoData.duration}>{formattedDuration}</time>
            </p>
            <div
              className="mt-4 text-lg whitespace-pre-wrap"
              dangerouslySetInnerHTML={{ __html: formattedDescription }}
            />
          </div>
          <div className="md:col-span-5 lg:col-span-4">
            <BreakfastCard />
          </div>
        </div>
      </Container>
      <div className="mt-8 md:mt-16">
        <Breadcrumbs items={breadcrumbsItems} />
      </div>
      <NextSeo title={videoData?.title} description={cleanDescription} />
      <VideoJsonLd
        description={cleanDescription}
        duration={videoData?.duration}
        embedUrl={`https://www.youtube.com/embed/${videoData?.id}`}
        name={videoData?.title}
        thumbnailUrls={[thumbnail.url]}
        uploadDate={videoData?.publishedAt}
        watchCount={videoData?.viewCount}
      />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getAllVideoPaths();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const videoData = await getVideoData(params.id);

  return {
    props: {
      videoData,
    },
  };
}
