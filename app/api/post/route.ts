import { NextResponse } from 'next/server';
import prisma from '@/prisma/client';

interface PostProps {
  username: string;
  password: string;
  content: string;
}

export async function POST(req: Request) {
  const post: PostProps = await req.json();
  try {
    await prisma.post.create({
      data: {
        username: post.username,
        password: post.password,
        content: post.content,
      },
    });
    return NextResponse.json({ status: 200, message: 'New post created' });
  } catch (e) {
    return NextResponse.json({ status: 500, message: 'Error creating a new post' });
  }
}
