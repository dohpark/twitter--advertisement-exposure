import Link from 'next/link';
import Image from 'next/image';
import Arrow from '@/public/icons/arrow.svg';

interface NoUserProps {
  user: string;
}

function NoUser({ user }: NoUserProps) {
  return (
    <>
      <div className="flex p-3">
        <Link href="/" className="w-fit">
          <Image src={Arrow} height={20} width={20} alt="Back to Home" className="w-fit m-0" />
        </Link>
      </div>
      <div className="px-4 py-6  text-lg font-bold">{`@${user}`}</div>
      <div className="mx-10 p-5">
        <div className="text-xl font-semibold">계정이 존재하지 않습니다</div>
        <div className="mt-2 text-gray-500">다른 검색어를 시도해 보세요</div>
      </div>
    </>
  );
}

export default NoUser;
