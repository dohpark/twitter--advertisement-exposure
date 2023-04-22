import TopNav from '@/components/TopNav';
import BottomNav from '@/components/Nav';
import Card from '@/components/Card';

export default function Page() {
  const content = '@dohpark \n```javascript\nimport React from "react"\n```';

  return (
    <div className="flex flex-col	h-full divide-y divide-gray-200">
      <TopNav />
      <main className="grow">
        <Card username="dohpark" content={content} createdAt="2023-04-21 15:05:36.657" />
      </main>
      <BottomNav />
    </div>
  );
}
