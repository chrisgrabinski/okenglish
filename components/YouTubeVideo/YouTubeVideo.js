import YouTube from "react-youtube";

import { Wrapper } from "./YouTubeVideo.styled";

export default function YouTubeVideo({ ...props }) {
  return (
    <Wrapper>
      <YouTube {...props} />
    </Wrapper>
  );
}
