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
      ...(cursor !== 0 && pageCondition),
    });

    const feedListWithAds: { id: number; username: string; password: string; content: string; createdAt: Date }[] = [];

    feedList.forEach((post, index) => {
      feedListWithAds.push(post);
      if (index === 3)
        feedListWithAds.push({
          id: 232,
          username: 'advertise',
          password: '3131',
          content: 'ad',
          createdAt: new Date('2023-04-22T12:35:54.733Z'),
        });
      if (index === 7)
        feedListWithAds.push({
          id: 2872,
          username: 'advertise',
          password: '3131',
          content: 'ad',
          createdAt: new Date('2023-04-22T12:35:54.733Z'),
        });
    });

    const lastCursor = feedList.at(-1)?.id;

    return NextResponse.json({ feedList: feedListWithAds, lastCursor }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: 'Error receiving feeds' }, { status: 500 });
  }
}
