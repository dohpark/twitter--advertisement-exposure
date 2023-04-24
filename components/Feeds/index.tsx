'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import Card from '@/components/Card';
import { useEffect, useRef } from 'react';

interface FeedItems {
  id: number;
  username: string;
  content: string;
  createdAt: string;
}

interface FeedList {
  feedList: FeedItems[];
  lastCursor: number;
}

function Feeds() {
  const getFeedLists = async (cursor: string) => {
    const data = await fetch(`/api/postList?cursor=${cursor}`, {
      method: 'GET',
    });
    const res = await data.json();
    return res;
  };

  const fetchFeeds = (cursor: string): Promise<FeedList> => getFeedLists(cursor);

  const { data, isSuccess, fetchNextPage, refetch } = useInfiniteQuery({
    queryKey: ['feedList'],
    queryFn: ({ pageParam = 0 }) => fetchFeeds(pageParam),
    getNextPageParam: (lastItem) => lastItem.lastCursor,
    retry: 2,
  });

  const intersectionObserver = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) fetchNextPage();
    });

    if (intersectionObserver.current) observer.observe(intersectionObserver.current);

    return () => observer.disconnect();
  }, [intersectionObserver, fetchNextPage]);

  return (
    <main className="overflow-y-scroll grow divide-y divide-gray-200">
      {isSuccess &&
        data.pages.map((page) =>
          page.feedList.map(({ id, username, content, createdAt }) => (
            <Card key={id} id={id} username={username} content={content} createdAt={createdAt} refetch={refetch} />
          ))
        )}
      <div ref={intersectionObserver} />
    </main>
  );
}

export default Feeds;
