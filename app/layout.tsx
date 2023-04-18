import '@/styles/globals.css';
import Image from 'next/image';
import TwitterIcon from '@/public/icons/twitter-icon.svg';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <div className="h-screen w-screen flex">
          <div className="h-screen w-screen xs:w-0 relative">
            <Image
              src={TwitterIcon}
              height={96}
              width={96}
              alt="Welcome to Twitter"
              className="absolute m-auto inset-0"
            />
          </div>
          <div className="max-w-40 bg-red-400 h-screen">{children}</div>
        </div>
      </body>
    </html>
  );
}
