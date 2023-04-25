import { NextResponse } from 'next/server';
import prisma from '@/prisma/client';

interface FeedView {
  targetId: number;
}

export async function PATCH(req: Request) {
  const feedView: FeedView = await req.json();
  try {
    await prisma.feed.update({
      where: { id: feedView.targetId },
      data: { view: { increment: 1 } },
    });
    return NextResponse.json({ message: 'View increased' }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: 'Error increasing view' }, { status: 500 });
  }
}
