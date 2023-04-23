import ExploreNav from '@/components/ExploreNav';
import BottomNav from '@/components/Nav';

export default function Page() {
  return (
    <div className="flex flex-col	h-full divide-y divide-gray-200">
      <ExploreNav />
      <main className="grow" />
      <BottomNav />
    </div>
  );
}
