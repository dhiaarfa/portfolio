"use client"

import { Link } from "next-view-transitions"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { headingId, nodeText } from "@/lib/heading-id"

export default function InsightArticleBody({ content }: { content: string }) {
  return (
    <div className="article-prose max-w-[68ch]">
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        // Rendered as h2, not h3: the page's own <h1> is the article title, and
        // these are the only subsection headings in the article body, h1 -> h3
        // was skipping a level (Lighthouse heading-order / WCAG 1.3.1), and the
        // page's "Related articles" <h2> further down made the mismatch visible
        // in the DOM order too. The markdown source uses "##" to match.
        // ids (Oct 2026): anchor targets for the table of contents and for
        // sharing/deep links (#heading); scroll-mt clears the fixed navbar.
        h2: ({ children }) => (
          <h2 id={headingId(nodeText(children))} className="scroll-mt-24 text-xl lg:text-2xl font-bold text-foreground mt-10 mb-4 leading-snug">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 id={headingId(nodeText(children))} className="scroll-mt-24 text-lg lg:text-xl font-semibold text-foreground mt-8 mb-3 leading-snug">{children}</h3>
        ),
        // Bulleted lists had no styling at all: Tailwind's reset strips
        // list markers, so the 120+ "- " items across the articles rendered
        // as unmarked, unindented lines.
        ul: ({ children }) => (
          <ul className="list-disc ps-6 space-y-2 mb-6 text-muted-foreground text-base lg:text-lg leading-relaxed marker:text-accent">
            {children}
          </ul>
        ),
        p: ({ children }) => (
          <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-5">{children}</p>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal ps-6 space-y-2 mb-6 text-muted-foreground text-base lg:text-lg leading-relaxed marker:text-accent marker:font-semibold">
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
    >
      {content}
    </ReactMarkdown>
    </div>
  )
}
