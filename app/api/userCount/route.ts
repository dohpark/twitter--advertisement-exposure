import { NextResponse } from 'next/server';
import prisma from '@/prisma/client';

interface ParamMap {
  user: string;
}

export async function GET(req: Request) {
  try {
    const rawParams = req.url.split('?')[1];
    const paramsArray = rawParams.split('&');
    const paramMap: ParamMap = {
      user: '',
    };

    paramsArray.forEach((rawParam) => {
      const [key, value] = rawParam.split('=');
      if (key === 'user') paramMap[key] = value;
    });

    const feedCount = await prisma.feed.aggregate({
      where: {
        username: paramMap.user,
      },
      _count: {
        username: true,
      },
    });

    return NextResponse.json({ feedCount: feedCount._count.username }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: 'Error receiving feeds' }, { status: 500 });
  }
}
