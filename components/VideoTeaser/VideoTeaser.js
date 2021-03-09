import Image from "next/image";
import Link from "next/link";

import { composeFriendlyDate } from "helpers/date";

export default function VideoTeaser({ url, title, publishedAt, thumbnails }) {
  const friendlyDate = composeFriendlyDate(publishedAt);

  const { url: thumbnail } =
    thumbnails.maxres || thumbnails.standard || thumbnails.high;

  return (
    <Link href={url} passHref>
      <a className="block">
        <Image
          className="rounded-2xl"
          src={thumbnail}
          width="352"
          height="198"
          alt=""
        />
        <div className="mt-2 pr-1">
          <h3 className="font-medium text-lg leading-snug">{title}</h3>
          <p className="mt-2 opacity-75">
            <time dateTime={publishedAt}>{friendlyDate}</time>
          </p>
        </div>
      </a>
    </Link>
  );
}
