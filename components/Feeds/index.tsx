'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import Card from '@/components/Card';

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

  const { data, isSuccess } = useInfiniteQuery({
    queryKey: ['feedList'],
    queryFn: ({ pageParam = 0 }) => fetchFeeds(pageParam),
    getNextPageParam: (lastItem) => lastItem.lastCursor,
    retry: 2,
  });

  return (
    <main className="grow divide-y divide-gray-200">
      {isSuccess &&
        data.pages.map((page) =>
          page.feedList.map(({ username, content, createdAt }) => (
            <Card username={username} content={content} createdAt={createdAt} />
          ))
        )}
    </main>
  );
}

export default Feeds;
