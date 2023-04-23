import BottomNav from '@/components/Nav';
import NoUser from '@/components/NoUser';

interface PageProps {
  params: { user: string };
}

export default async function Page({ params }: PageProps) {
  const { user } = params;
  const data = await fetch(`http://localhost:3000/api/user?user=${user}`, {
    method: 'GET',
    cache: 'no-store',
  });
  const hasFeeds: boolean = await data.json();

  return (
    <div className="flex flex-col	h-full">
      {!hasFeeds && <NoUser user={user} />}
      {hasFeeds && (
        <>
          <div>{user}</div>
          <main className="grow" />
          <BottomNav />
        </>
      )}
    </div>
  );
}
