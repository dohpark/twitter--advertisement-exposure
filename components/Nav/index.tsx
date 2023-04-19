import Image from 'next/image';
import Link from 'next/link';
import HomeIcon from '@/public/icons/home.svg';
import UserIcon from '@/public/icons/user.svg';
import PenIcon from '@/public/icons/pen.svg';

function Nav() {
  return (
    <nav className="grid grid-flow-col justify-stretch">
      <Link href="/">
        <Image src={HomeIcon} height={24} width={24} alt="Back to Home" className="mx-auto my-3" />
      </Link>
      <Link href="/user">
        <Image src={UserIcon} height={24} width={24} alt="Check users" className="mx-auto my-3" />
      </Link>
      <Link href="/tweet">
        <Image src={PenIcon} height={24} width={24} alt="Write your thoughts" className="mx-auto my-3" />
      </Link>
    </nav>
  );
}

export default Nav;
