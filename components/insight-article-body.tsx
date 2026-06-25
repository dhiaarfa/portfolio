"use client"

import Link from "next/link"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

export default function InsightArticleBody({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h3: ({ children }) => (
          <h3 className="text-xl lg:text-2xl font-bold text-foreground mt-10 mb-4 leading-snug">{children}</h3>
        ),
        p: ({ children }) => (
          <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-5">{children}</p>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal list-inside space-y-2 mb-6 text-muted-foreground text-base lg:text-lg leading-relaxed pl-1">
            {children}
          </ol>
        ),
        li: ({ children }) => <li className="mb-2">{children}</li>,
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-accent pl-5 py-2 my-8 bg-accent-subtle rounded-r-xl text-foreground text-base lg:text-lg leading-relaxed">
            {children}
          </blockquote>
        ),
        strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
        a: ({ href, children }) => {
          const url = href ?? "#"
          if (url.startsWith("/")) {
            return (
              <Link href={url} className="text-accent font-medium hover:underline">
                {children}
              </Link>
            )
          }
          return (
            <a href={url} target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:underline">
              {children}
            </a>
          )
        },
      }}
      className="article-prose max-w-[68ch]"
    >
      {content}
    </ReactMarkdown>
  )
}
