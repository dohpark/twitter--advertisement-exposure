import Image from 'next/image';
import TwitterIcon from '@/public/icons/twitter-icon.svg';

function TopNav() {
  return (
    <nav className="">
      <Image src={TwitterIcon} height={24} width={24} alt="Welcome to Twitter" className="mx-auto my-3" />
    </nav>
  );
}

export default TopNav;
