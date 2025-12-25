import ReactMarkdown from 'react-markdown';

const Markdown = ({ children, className }: {
  children: string,
  className?: string,
}) => {
  return (
    <ReactMarkdown
      components={{
        p: ({children}) => (
          <p className={`markdown-p ${className}`}>{children}</p>
        ),
        strong: ({children}) => (
          <strong className={`markdown-strong ${className}`}>{children}</strong>
        ),
        ul: ({children}) => (
          <ul className={`markdown-ul ${className}`}>{children}</ul>
        ),
        li: ({children}) => (
          <li className={className}>{children}</li>
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
}

export default Markdown;