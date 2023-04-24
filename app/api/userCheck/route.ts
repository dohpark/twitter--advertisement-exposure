import { NextResponse } from 'next/server';
import prisma from '@/prisma/client';

export async function GET(req: Request) {
  try {
    const rawParams = req.url.split('?')[1];
    const user = rawParams.split('=')[1];

    const userFeed = await prisma.feed.findFirst({
      where: {
        username: user,
      },
    });

    return NextResponse.json({ hasFeed: !!userFeed }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: 'Error receiving feeds' }, { status: 500 });
  }
}
