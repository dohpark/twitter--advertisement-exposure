import TopNav from '@/components/TopNav';
import BottomNav from '@/components/Nav';
import Feeds from '@/components/FeedList';

export default function Page() {
  return (
    <div className="flex flex-col	h-full divide-y divide-gray-200">
      <TopNav />
      <Feeds />
      <BottomNav />
    </div>
  );
}
