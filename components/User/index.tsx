import Link from 'next/link';
import Image from 'next/image';
import BottomNav from '@/components/Nav';
import Arrow from '@/public/icons/arrow.svg';
import UserFeeds from './UserFeeds';

interface UserProps {
  user: string;
  feedCount: number;
}

function User({ user, feedCount }: UserProps) {
  return (
    <>
      <div className="flex p-3">
        <Link href="/" className="w-fit">
          <Image src={Arrow} height={20} width={20} alt="Back to Home" className="w-fit m-0" />
        </Link>
        <div className="ml-8 text-sm text-gray-600">
          <span className="align-middle">{feedCount} 트윗</span>
        </div>
      </div>
      <UserFeeds user={user} />
      <BottomNav />
    </>
  );
}

export default User;
