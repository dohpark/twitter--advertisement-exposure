import TweetHeader from '@/components/TweetHeader';
import TweetTextbox from '@/components/TweetTextbox';

export default function Page() {
  return (
    <div className="h-full">
      <TweetHeader />
      <TweetTextbox />
      {/* <Tabs /> */}
    </div>
  );
}
