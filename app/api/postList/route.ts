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

    const feedList = await prisma.post.findMany({
      take: TAKE,
      orderBy: {
        id: 'desc',
      },
      ...(cursor !== 0 && pageCondition),
    });

    const lastCursor = feedList.at(-1)?.id;

    return NextResponse.json({ feedList, lastCursor });
  } catch (e) {
    return NextResponse.json({ status: 500, message: 'Error receiving feeds' });
  }
}
