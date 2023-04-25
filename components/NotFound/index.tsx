import Link from 'next/link';
import Image from 'next/image';
import Arrow from '@/public/icons/arrow.svg';

interface NotFoundProps {
  type: 'user' | 'feed';
  target: string;
}

function NotFound({ type, target }: NotFoundProps) {
  return (
    <>
      <div className="flex p-3">
        <Link href="/" className="w-fit">
          <Image src={Arrow} height={20} width={20} alt="Back to Home" className="w-fit m-0" />
        </Link>
      </div>
      <div className="mx-10 p-5">
        {type === 'user' && <div className="text-xl font-semibold">@{target}님 계정이 존재하지 않습니다</div>}
        {type === 'feed' && <div className="text-xl font-semibold">피드가 존재하지 않습니다</div>}
        <div className="mt-2 text-gray-500">다른 검색어를 시도해 보세요</div>
      </div>
    </>
  );
}

export default NotFound;
