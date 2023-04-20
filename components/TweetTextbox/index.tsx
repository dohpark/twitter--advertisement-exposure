'use client';

import { useState } from 'react';

function TweetTextbox() {
  const [isWrite, setIsWrite] = useState(true);
  const [tweetContent, setTweetContent] = useState('');

  const handleSetWriteFalse = () => setIsWrite(false);
  const handleSetWriteTrue = () => setIsWrite(true);
  const handleSetTweetContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => setTweetContent(e.target.value);

  return (
    <section>
      <input type="text" placeholder="id를 입력해주세요" />
      <input type="text" placeholder="비밀번호를 설정해주세요" />
      <div className="flex mx-3 border-b border-gray-200">
        <button
          type="button"
          onClick={handleSetWriteTrue}
          className={`px-4 py-2 text-sm border rounded-t-md mr-2 -mb-[1px] ${
            isWrite ? 'border-gray-200 border-b-white' : 'border-transparent'
          }`}
        >
          Write
        </button>
        <button
          type="button"
          onClick={handleSetWriteFalse}
          className={`px-4 py-2 text-sm border rounded-t-md mr-2 -mb-[1px] ${
            !isWrite ? 'border-gray-200 border-b-white' : 'border-transparent'
          }`}
        >
          Preview
        </button>
      </div>
      <div className="mx-3 border border-gray-200 border-t-0 p-2">
        {isWrite ? (
          <textarea
            placeholder="무슨 일이 일어나고 있나요?"
            className="w-full p-2 h-40"
            onChange={handleSetTweetContent}
            value={tweetContent}
          />
        ) : (
          <p className="w-full p-2 h-40">{tweetContent}</p>
        )}
      </div>
    </section>
  );
}

export default TweetTextbox;
