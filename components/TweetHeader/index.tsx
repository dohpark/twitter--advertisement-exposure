import Image from 'next/image';
import Arrow from '@/public/icons/arrow.svg';
import Link from 'next/link';

function TweetHeader() {
  return (
    <div className="flex justify-between p-3">
      <Link href="/">
        <Image src={Arrow} height={24} width={24} alt="Back to Home" className="my-auto" />
      </Link>
      <button type="button" className="bg-sky-500 px-3 py-1 rounded-3xl text-white text-sm active:bg-sky-600">
        트윗하기
      </button>
    </div>
  );
}

export default TweetHeader;
