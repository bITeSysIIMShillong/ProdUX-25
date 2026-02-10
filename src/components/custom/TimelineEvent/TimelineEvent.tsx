import { useMediaQuery } from "@chakra-ui/react";
import TimelineEventMobile from "./TimelineEventMobile";
import TimelineEventDesktop from "./TimelineEventDesktop";

type Event = {
  title: string;
  date: string;
  description: string;
  image: string;
};

const TimelineEvent = ({ event }: { event: Event }) => {
  const [isLargerThanMd] = useMediaQuery(["(min-width: 48em)"], { ssr: false });
  return isLargerThanMd ? (
    <TimelineEventDesktop event={event} />
  ) : (
    <TimelineEventMobile event={event} />
  );
};

export default TimelineEvent;
