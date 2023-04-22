import { NextResponse } from 'next/server';
import prisma from '@/prisma/client';

export async function GET(req: Request) {
  try {
    const rawParams = req.url.split('?')[1];
    const cursor = +rawParams.split('=')[1];

    const feedList =
      cursor === 0
        ? await prisma.post.findMany({
            take: 5,
            orderBy: {
              id: 'desc',
            },
          })
        : await prisma.post.findMany({
            take: 3,
            orderBy: {
              id: 'desc',
            },
            cursor: {
              id: cursor,
            },
          });

    const lastFeedInResults = feedList[4];
    const lastCursor = lastFeedInResults.id;

    return NextResponse.json({ feedList, lastCursor });
  } catch (e) {
    return NextResponse.json({ status: 500, message: 'Error receiving feeds' });
  }
}
