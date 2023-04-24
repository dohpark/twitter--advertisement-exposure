/* eslint-disable react/no-children-prop */
/* eslint-disable react/no-unstable-nested-components */

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface MarkdownBoxProps {
  value: string;
}

function MarkdownBox({ value }: MarkdownBoxProps) {
  return value ? (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      className="w-full p-2 h-fit markdown"
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter
              {...props}
              children={String(children).replace(/\n$/, '')}
              style={darcula}
              language={match[1]}
              PreTag="div"
            />
          ) : (
            <code {...props} className={className}>
              {children}
            </code>
          );
        },
        p: (p) => {
          const paragraph = p.children[0] as string;

          type ParagraphAndATagType = 'p' | 'a';
          type OptionType = { href?: string };
          const wordArray: [ParagraphAndATagType, OptionType, string][] = paragraph.split(' ').map((el) => {
            if (el.startsWith('@')) {
              const username = el.slice(1, el.length);
              return ['a', { href: `/user/${username}` }, `${el} `];
            }
            return ['p', {}, `${el} `];
          });

          type ReactElAndStringType = React.ReactElement | string;
          const createReactElArgArray: ReactElAndStringType[] = [];
          wordArray.forEach(([el, options, v]) => {
            if (el === 'a') createReactElArgArray.push(React.createElement(el, options, v));
            else createReactElArgArray.push(v);
          });

          return React.createElement('p', {}, ...createReactElArgArray);
        },
      }}
    >
      {value}
    </ReactMarkdown>
  ) : (
    <p className="w-full p-2">작성한 글이 없습니다.</p>
  );
}

export default MarkdownBox;
