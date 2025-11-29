"use client";

import {
  PageSection,
  PageSectionContent,
  PageSectionDescription,
  PageSectionHeader,
  PageSectionTitle,
} from "@/components/widgets/page-section";
import { FeedGrid, FeedPost } from "@/screens/feed";
import { allFeeds } from "content-collections";

const sortFeedsByDateDesc = <T extends FeedPost>(feeds: T[]): T[] => {
  return [...feeds].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
};

const FeedPage = () => {
  const feeds = sortFeedsByDateDesc(allFeeds);

  return (
    <PageSection>
      <PageSectionHeader>
        <PageSectionTitle>Feed</PageSectionTitle>
        <PageSectionDescription>
          I&apos;m no longer active on Dribbble so I built this lil place where
          I share my latest explorations. I also share WIPs on Twitter/X and
          more recently on Layers — come say hi!
        </PageSectionDescription>
      </PageSectionHeader>
      <PageSectionContent>
        <FeedGrid posts={feeds} />
      </PageSectionContent>
    </PageSection>
  );
};

export default FeedPage;
