'use client';

import Image from 'next/image';
import Link from 'next/link';
import Arrow from '@/public/icons/arrow.svg';
import Search from '@/public/icons/search.svg';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function ExploreNav() {
  const router = useRouter();

  const [user, setUser] = useState('');

  const handleSetUser = (e: React.ChangeEvent<HTMLInputElement>) => setUser(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/user/${user}`);
  };

  return (
    <nav className="w-full flex p-3">
      <Link href="/" className="mr-5">
        <Image src={Arrow} height={20} width={20} alt="Back to Home" className="h-full" />
      </Link>
      <form
        onSubmit={handleSubmit}
        className="flex w-full focus-within:border focus-within:border-sky-500 bg-gray-100 rounded-2xl border border-transparent"
      >
        <button type="submit">
          <Image src={Search} height={20} width={20} alt="Search users" className="h-full mr-1 ml-5" />
        </button>
        <input
          type="text"
          placeholder="사용자를 찾아보세요"
          value={user}
          onChange={handleSetUser}
          className="w-full py-1 px-3 text-sm focus:outline-none bg-transparent"
        />
      </form>
    </nav>
  );
}

export default ExploreNav;
