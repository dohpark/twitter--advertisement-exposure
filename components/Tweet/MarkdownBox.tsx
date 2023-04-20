/* eslint-disable react/no-children-prop */
/* eslint-disable react/no-unstable-nested-components */

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
      }}
    >
      {value}
    </ReactMarkdown>
  ) : (
    <p className="w-full p-2">작성한 글이 없습니다.</p>
  );
}

export default MarkdownBox;
