import NoUser from '@/components/NoUser';
import User from '@/components/User';

interface PageProps {
  params: { user: string };
}

export default async function Page({ params }: PageProps) {
  const { user } = params;

  const { hasFeed } = await fetch(`http://localhost:3000/api/userCheck?user=${user}`, {
    method: 'GET',
    cache: 'no-store',
  }).then((res) => res.json());

  const { feedCount } = await fetch(`http://localhost:3000/api/userCount?user=${user}`, {
    method: 'GET',
    cache: 'no-store',
  }).then((res) => res.json());

  return (
    <div className="flex flex-col	h-full">
      {!hasFeed && <NoUser user={user} />}
      {hasFeed && <User user={user} feedCount={feedCount} />}
    </div>
  );
}
