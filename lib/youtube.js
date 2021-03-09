export async function getUploadsPlaylistId() {
  const data = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?key=${process.env.YOUTUBE_API_KEY}&id=${process.env.YOUTUBE_CHANNEL_ID}&part=contentDetails&maxResults=1`
  ).then((response) => response.json());

  return data.items[0].contentDetails.relatedPlaylists.uploads;
}

export async function getAllVideoData() {
  const playlistId = await getUploadsPlaylistId();

  const videos = [];
  let pageToken = "";
  let hasNextPage = true;

  while (hasNextPage) {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?key=${process.env.YOUTUBE_API_KEY}&playlistId=${playlistId}&part=contentDetails,id,snippet&order=date&maxResults=50&pageToken=${pageToken}`
    ).then((response) => response.json());

    data?.items.map((item) => {
      videos.push({
        id: item?.contentDetails?.videoId,
        publishedAt: item?.snippet?.publishedAt,
        thumbnails: item?.snippet?.thumbnails,
        title: item?.snippet?.title,
      });
    });

    pageToken = data?.nextPageToken;
    hasNextPage = data?.nextPageToken ? true : false;
  }

  return videos;
}

export async function getAllVideoPaths() {
  const data = await getAllVideoData();

  return data.map((item) => ({
    params: {
      id: item?.id,
    },
  }));
}

export async function getVideoData(id) {
  const data = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?key=${process.env.YOUTUBE_API_KEY}&id=${id}&part=contentDetails,id,snippet,statistics,player`
  ).then((response) => response.json());

  const videoData = data.items[0];

  return {
    description: videoData?.snippet?.description,
    duration: videoData?.contentDetails?.duration,
    id: videoData?.id,
    publishedAt: videoData?.snippet?.publishedAt,
    thumbnails: videoData?.snippet?.thumbnails,
    title: videoData?.snippet?.title,
    viewCount: videoData?.statistics?.viewCount,
  };
}
