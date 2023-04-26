'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import MarkdownBox from '@/components/MarkdownBox';
import Trash from '@/public/icons/trash.svg';
import Share from '@/public/icons/share.svg';
import useModal from '@/hooks/useModal';
import DeleteFeed from '@/components/Modal/deleteFeed';

interface FeedProps {
  id: number;
  username: string;
  content: string;
  type: 'user' | 'advertisement';
  view: number;
  createdAt: string;
  afterDeleteReturnHome: boolean;
}

function Feed({ id, username, createdAt, content, type, view, afterDeleteReturnHome }: FeedProps) {
  const userPage = `/user/${username}`;
  const userAt = `@${username}`;

  const [selectedFeedId, setSelectedFeedId] = useState(0);
  const { openModal, closeModal, ModalPortal } = useModal();

  const handleOpenDeleteModal = (feedId: number) => {
    setSelectedFeedId(feedId);
    openModal();
  };

  const handleCopyFeedLink = (feedId: number) => {
    const { origin } = window.location;
    const copyLink = `${origin}/feed/${feedId}`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(copyLink);
    } else {
      const textArea = window.document.createElement('textarea');
      textArea.value = copyLink;
      window.document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        window.document.execCommand('copy');
      } catch (err) {
        console.error('Unable to copy to clipboard', err);
      }
      window.document.body.removeChild(textArea);
    }
  };

  const elaborateTime = (createdTime: string) => {
    const dateObject = new Date(createdTime);
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    const date = dateObject.getDate();
    const hour = dateObject.getHours();
    const minute = dateObject.getMinutes();

    const hourType = +hour >= 12 ? '오후' : '오전';
    const hourFormat = +hour % 12 === 0 ? 12 : +hour % 12;

    return `${hourType} ${hourFormat.toString().padStart(2, '0')}:${minute
      .toString()
      .padStart(2, '0')} · ${year}년 ${month}월 ${date}일`;
  };
  const elaboratedTime = elaborateTime(createdAt);

  const increaseView = async (targetId: number) => {
    await fetch(`/api/feedView`, {
      method: 'PATCH',
      body: JSON.stringify({
        targetId,
      }),
    });
  };

  const intersectionObserver = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          increaseView(id);
          observer.disconnect();
        }
      },
      {
        threshold: 1,
      }
    );

    if (intersectionObserver.current) observer.observe(intersectionObserver.current);

    return () => observer.disconnect();
  }, [intersectionObserver, id]);

  return (
    <article ref={intersectionObserver} className="px-4 py-2">
      {type === 'advertisement' && <p className="font-bold text-blue-500">광고</p>}
      <Link href={userPage} className="text-sm font-bold active:underline">
        {userAt}
      </Link>
      <MarkdownBox value={content} />
      <div className="mt-2 mb-4 text-sm text-gray-500">
        <time dateTime={createdAt}>{elaboratedTime}</time>
        <p>조회수 {view}</p>
      </div>
      <div>
        <button
          type="button"
          onClick={() => handleCopyFeedLink(id)}
          className="p-2 mr-2 active:bg-sky-100 rounded-full"
        >
          <Image src={Share} height={18} width={18} alt="share post" className="fill-gray-600" />
        </button>
        <button type="button" onClick={() => handleOpenDeleteModal(id)} className="p-2 active:bg-sky-100 rounded-full">
          <Image src={Trash} height={18} width={18} alt="delete post" />
        </button>
      </div>

      <ModalPortal>
        <DeleteFeed
          closeModal={closeModal}
          selectedFeedId={selectedFeedId}
          afterDeleteReturnHome={afterDeleteReturnHome}
        />
      </ModalPortal>
    </article>
  );
}

export default Feed;
