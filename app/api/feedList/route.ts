import { NextResponse } from 'next/server';
import prisma from '@/prisma/client';

export async function GET(req: Request) {
  try {
    const TAKE = 8;

    const rawParams = req.url.split('?')[1];
    const cursor = +rawParams.split('=')[1];

    const pageCondition = {
      skip: 1,
      cursor: {
        id: cursor,
      },
    };

    const feedList = await prisma.feed.findMany({
      take: TAKE,
      orderBy: {
        id: 'desc',
      },
      where: {
        type: 'user',
      },
      select: {
        id: true,
        type: true,
        username: true,
        content: true,
        view: true,
        createdAt: true,
      },
      ...(cursor !== 0 && pageCondition),
    });

    const advList = await prisma.feed.findMany({
      take: 2,
      orderBy: {
        view: 'asc',
      },
      where: {
        type: 'advertisement',
      },
      select: {
        id: true,
        type: true,
        username: true,
        content: true,
        view: true,
        createdAt: true,
      },
    });

    type FeedListWithAds =
      | {
          id: number;
          type: string;
          username: string;
          content: string;
          createdAt: Date;
          view: number;
        }
      | undefined;

    const feedListWithAds: FeedListWithAds[] = [];

    feedList.forEach((post, index) => {
      if (cursor !== 0 && index === 0) feedListWithAds.push(advList.pop());
      if (cursor !== 0 && index === 3) feedListWithAds.push(advList.pop());
      feedListWithAds.push(post);
    });

    const lastCursor = feedList.at(-1)?.id;

    return NextResponse.json({ feedList: feedListWithAds, lastCursor }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: 'Error receiving feeds' }, { status: 500 });
  }
}
