'use client';

import Link from 'next/link';
import Image from 'next/image';
import MarkdownBox from '@/components/MarkdownBox';
import Trash from '@/public/icons/trash.svg';
import Share from '@/public/icons/share.svg';

interface CardProps {
  username: string;
  content: string;
  createdAt: string;
}

function Card({ username, createdAt, content }: CardProps) {
  const userPage = `/user/${username}`;
  const userAt = `@${username}`;

  const elaborateTime = (createdTime: string) => {
    const dateObject = new Date(createdTime);
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth();
    const date = dateObject.getDate();
    const hour = dateObject.getHours();
    const minute = dateObject.getMinutes();

    const type = +hour >= 12 ? '오후' : '오전';

    return `${type} ${+hour % 12}:${minute} · ${year}년 ${month}월 ${date}일`;
  };
  const elaboratedTime = elaborateTime(createdAt);

  return (
    <article className="px-4 py-2">
      <Link href={userPage} className="text-sm font-bold active:underline">
        {userAt}
      </Link>
      <MarkdownBox value={content} />
      <div className="mt-2 mb-4 text-sm text-gray-500">
        <time dateTime={createdAt}>{elaboratedTime}</time>
      </div>
      <div>
        <button type="button" className="p-2 mr-2 active:bg-sky-100 rounded-full">
          <Image src={Share} height={18} width={18} alt="share post" className="fill-gray-600" />
        </button>
        <button type="button" className="p-2 active:bg-sky-100 rounded-full">
          <Image src={Trash} height={18} width={18} alt="delete post" />
        </button>
      </div>
    </article>
  );
}

export default Card;
