import { NextResponse } from 'next/server';
import prisma from '@/prisma/client';

interface ParamMap {
  cursor: number;
  user: string;
}

export async function GET(req: Request) {
  try {
    const TAKE = 8;

    const rawParams = req.url.split('?')[1];
    const paramsArray = rawParams.split('&');

    const paramMap: ParamMap = {
      cursor: 0,
      user: '',
    };

    paramsArray.forEach((rawParam) => {
      const [key, value] = rawParam.split('=');
      if (key === 'cursor') paramMap[key] = +value;
      if (key === 'user') paramMap[key] = value;
    });

    const pageCondition = {
      skip: 1,
      cursor: {
        id: paramMap.cursor,
      },
    };

    const feedList = await prisma.post.findMany({
      take: TAKE,
      orderBy: {
        id: 'desc',
      },
      where: {
        username: paramMap.user,
      },
      ...(paramMap.cursor !== 0 && pageCondition),
    });

    const lastCursor = feedList.at(-1)?.id;

    return NextResponse.json({ feedList, lastCursor });
  } catch (e) {
    return NextResponse.json({ status: 500, message: 'Error receiving feeds' });
  }
}
