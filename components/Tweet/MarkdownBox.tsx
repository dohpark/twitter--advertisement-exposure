/* eslint-disable react/no-children-prop */
/* eslint-disable react/no-unstable-nested-components */

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

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
              style={materialLight}
              language={match[1]}
              PreTag="div"
            />
          ) : (
            <code {...props} className={className}>
              {children}
            </code>
          );
        },
        p: (paragraph) => {
          const element = paragraph.children[0] as string;
          const arr: ['p' | 'a', Object, string][] = element.split(' ').map((el) => {
            if (el.startsWith('@')) {
              const username = el.slice(1, el.length);
              return ['a', { href: `/${username}` }, `${el} `];
            }
            return ['p', {}, `${el} `];
          });

          type ArrayOfReactElAndStringType = React.ReactElement | string;
          const newArr: ArrayOfReactElAndStringType[] = [];
          arr.forEach(([el, options, v]) => {
            if (el === 'a') newArr.push(React.createElement(el, options, v));
            else newArr.push(v);
          });

          return React.createElement('p', {}, ...newArr);
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
