import NoUser from '@/components/NoUser';
import User from '@/components/User';

interface PageProps {
  params: { user: string };
}

export default async function Page({ params }: PageProps) {
  const { user } = params;
  const hasFeedsData = await fetch(`http://localhost:3000/api/user?user=${user}`, {
    method: 'GET',
    cache: 'no-store',
  });
  const hasFeeds: boolean = await hasFeedsData.json();

  const feedCountData = await fetch(`http://localhost:3000/api/userCount?user=${user}`, {
    method: 'GET',
    cache: 'no-store',
  });
  const feedCount = await feedCountData.json();

  return (
    <div className="flex flex-col	h-full">
      {!hasFeeds && <NoUser user={user} />}
      {hasFeeds && <User user={user} feedCount={feedCount} />}
    </div>
  );
}
