import { NextResponse } from 'next/server';
import prisma from '@/prisma/client';

export async function GET(req: Request) {
  try {
    const rawParams = req.url.split('?')[1];
    const id = +rawParams.split('=')[1];

    const feed = await prisma.feed.findFirst({
      where: {
        id,
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

    return NextResponse.json({ feed }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: 'Error receiving feeds' }, { status: 500 });
  }
}
