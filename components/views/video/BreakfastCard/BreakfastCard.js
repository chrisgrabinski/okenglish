import Image from "next/image";

import Card from "components/Card";

import LiveIndicator from "./LiveIndicator";

export default function BreakfastCard() {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const currentHours = currentDate.getHours();

  const startTime = new Date("2021-01-08T08:00:00.000Z").getHours();
  const endTime = new Date("2021-01-08T09:00:00.000Z").getHours();

  const isMonday = currentDay === 1;
  const isWithinHours = currentHours >= startTime && currentHours <= endTime;

  const isLive = isMonday && isWithinHours;

  const buttonLabel = !isLive ? "Subskrybuj teraz" : "Obejrzyj teraz";

  return (
    <Card isHighlight>
      {isLive && (
        <div className="mb-4">
          <LiveIndicator />
        </div>
      )}
      <h3>
        <span className="block font-bold text-3xl">English Breakfast</span>
        <span className="block text-2xl italic">with&nbsp;Joanna</span>
      </h3>
      <p className="mt-4 text-lg">
        Tune in every Monday morning from 9-10 on Facebook Live
      </p>
      <div className="mt-8">
        <a
          href="https://www.facebook.com/okenglish.eu"
          target="_blank"
          rel="noopener noreferrer"
        >
          {buttonLabel} →
        </a>
      </div>

      <div className="mt-8 -mx-8 -mb-8">
        <Image
          src="/images/ok-english-breakfast-teaser.png"
          width="352"
          height="247"
          alt=""
          layout="responsive"
        />
      </div>
    </Card>
  );
}
