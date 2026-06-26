"use client"

import Link from "next/link"
import Image from "next/image"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

export default function WorkCaseStudyBody({ content }: { content: string }) {
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
        ul: ({ children }) => (
          <ul className="list-disc list-inside space-y-2 mb-6 text-muted-foreground text-base lg:text-lg pl-1">{children}</ul>
        ),
        li: ({ children }) => <li className="mb-1">{children}</li>,
        strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
        img: ({ src, alt }) =>
          src ? (
            <div className="relative my-8 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-muted">
              <Image src={String(src)} alt={alt ?? ""} fill className="object-cover" sizes="(max-width: 768px) 100vw, 720px" />
            </div>
          ) : null,
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
    >
      {content}
    </ReactMarkdown>
  )
}
