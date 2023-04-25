import Image from 'next/image';
import Link from 'next/link';
import Feed from '@/components/Feed';
import NotFound from '@/components/NotFound';
import BottomNav from '@/components/Nav';
import Arrow from '@/public/icons/arrow.svg';

interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
  const { id } = params;

  const { feed } = await fetch(`http://localhost:3000/api/feedCheck?id=${id}`, {
    method: 'GET',
    cache: 'no-store',
  }).then((res) => res.json());

  return (
    <div className="flex flex-col	h-full">
      {!feed && <NotFound type="feed" target={id} />}
      {feed && (
        <>
          <div className="flex p-3">
            <Link href="/" className="w-fit">
              <Image src={Arrow} height={20} width={20} alt="Back to Home" className="w-fit m-0" />
            </Link>
          </div>
          <main className="grow">
            <Feed
              id={feed.id}
              username={feed.username}
              createdAt={feed.createdAt}
              content={feed.content}
              type={feed.type}
              view={feed.view}
              afterDeleteReturnHome
            />
          </main>
          <BottomNav />
        </>
      )}
    </div>
  );
}
