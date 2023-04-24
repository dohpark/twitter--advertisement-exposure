import { NextResponse } from 'next/server';
import prisma from '@/prisma/client';

interface Feed {
  username: string;
  password: string;
  content: string;
}

interface DeleteFeed {
  id: number;
  password: string;
}

export async function POST(req: Request) {
  const feed: Feed = await req.json();
  try {
    await prisma.feed.create({
      data: {
        username: feed.username,
        password: feed.password,
        content: feed.content,
      },
    });
    return NextResponse.json({ message: 'New post created' }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: 'Error creating a new post' }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  const feed: DeleteFeed = await req.json();
  try {
    const checkPassword = await prisma.feed.findFirst({
      where: {
        id: feed.id,
        password: feed.password,
      },
    });

    if (!checkPassword) return NextResponse.json({ message: 'Wrong Password' }, { status: 401 });

    await prisma.feed.delete({
      where: {
        id: feed.id,
      },
    });
    return NextResponse.json({ message: 'New post created' }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: 'Error creating a new post' }, { status: 500 });
  }
}
