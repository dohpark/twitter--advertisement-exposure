import React, { ReactNode } from 'react';
import '@/styles/globals.css';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body className="py-7 px-48 text-red-100 font-bold bg-green-200">{children}</body>
    </html>
  );
}
