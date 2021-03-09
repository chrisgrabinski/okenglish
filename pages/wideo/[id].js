import { NextSeo, VideoJsonLd } from "next-seo";

import { getAllVideoPaths, getVideoData } from "lib/youtube";

import { composeDate } from "helpers/date";
import { composeDuration } from "helpers/duration";

import Breadcrumbs from "components/Breadcrumbs";
import Card from "components/Card";
import Container from "components/Container";
import Layout from "components/Layout";
import YouTubeVideo from "components/YouTubeVideo";

export default function Video({ videoData }) {
  const thumbnail =
    videoData?.thumbnails.maxres ||
    videoData?.thumbnails.high ||
    videoData?.thumbnails.default;

  const cleanDescription = videoData?.description?.replace(/\s+/g, " ");
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

  const {
    description,
    duration,
    id,
    publishedAt,
    thumbnails,
    title,
    viewCount,
  } = videoData;

  return (
    <Layout>
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
          <div className="md:col-span-8">
            <h1 className="font-bold text-3xl sm:text-4xl">
              {videoData.title}
            </h1>
            <p className="mt-2">
              <time dateTime={videoData.publishedAt}>
                {formattedPublishedAt}
              </time>{" "}
              | <time dateTime={videoData.duration}>{formattedDuration}</time>
            </p>
            <p className="mt-4 text-lg">{videoData.description}</p>
          </div>
          <div className="md:col-span-4">
            <Card isHighlight>Test</Card>
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
