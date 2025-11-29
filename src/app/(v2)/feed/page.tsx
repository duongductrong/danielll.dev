"use client";

import {
  PageSection,
  PageSectionContent,
  PageSectionDescription,
  PageSectionHeader,
  PageSectionTitle,
} from "@/components/widgets/page-section";
import { FeedGrid, FeedPost } from "@/screens/feed";
import { allPosts } from "content-collections";

const sortPostsByDateDesc = <T extends FeedPost>(posts: T[]): T[] => {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
};

const FeedPage = () => {
  const posts = sortPostsByDateDesc(allPosts);

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
        <FeedGrid posts={posts} />
      </PageSectionContent>
    </PageSection>
  );
};

export default FeedPage;
