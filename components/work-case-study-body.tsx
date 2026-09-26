"use client"

import { Link } from "next-view-transitions"
import Image from "next/image"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { PhotoProvider, PhotoView } from "react-photo-view"
import "react-photo-view/dist/react-photo-view.css"

export default function WorkCaseStudyBody({ content }: { content: string }) {
  return (
    <PhotoProvider>
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        // Rendered as h2, not h3: the page's own <h1> is the project title, and
        // these subsections (The brief / The approach / Outcome / …) are the only
        // heading level inside the case-study body, h1 -> h3 was skipping a level
        // (Lighthouse heading-order / WCAG 1.3.1). The markdown source uses "##"
        // to match.
        h2: ({ children }) => (
          <h2 className="text-xl lg:text-2xl font-bold text-foreground mt-10 mb-4 leading-snug">{children}</h2>
        ),
        p: ({ children, node }) => {
          // Markdown always wraps a standalone image in a <p>, but the img
          // renderer below outputs a <div> (needed for next/image's `fill`
          // layout), a <div> can't legally sit inside a <p>, which produced
          // "In HTML, div cannot be a descendant of p" and a hydration
          // mismatch on every case-study image. When the paragraph's only
          // child is an image, render the wrapper as a <div> instead of a
          // <p> so the nesting stays valid.
          const soleChild = node?.children?.length === 1 ? node.children[0] : null
          if (soleChild && soleChild.type === "element" && soleChild.tagName === "img") {
            return <div className="mb-5">{children}</div>
          }
          return (
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-5">{children}</p>
          )
        },
        ul: ({ children }) => (
          <ul className="list-disc list-inside space-y-2 mb-6 text-muted-foreground text-base lg:text-lg pl-1">{children}</ul>
        ),
        li: ({ children }) => <li className="mb-1">{children}</li>,
        strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
        table: ({ children }) => (
          <div className="my-8 overflow-x-auto rounded-2xl border border-border">
            <table className="w-full min-w-[480px] text-sm">{children}</table>
          </div>
        ),
        thead: ({ children }) => <thead className="border-b border-border bg-muted/50">{children}</thead>,
        tbody: ({ children }) => <tbody>{children}</tbody>,
        tr: ({ children }) => <tr className="border-b border-border/60 last:border-0">{children}</tr>,
        th: ({ children }) => (
          <th className="px-4 py-3 text-left font-semibold text-foreground">{children}</th>
        ),
        td: ({ children }) => (
          <td className="px-4 py-3 text-muted-foreground">{children}</td>
        ),
        img: ({ src, alt }) =>
          src ? (
            <PhotoView src={String(src)}>
              <div className="relative my-8 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-muted cursor-zoom-in">
                <Image src={String(src)} alt={alt ?? ""} fill className="object-cover" sizes="(max-width: 768px) 100vw, 720px" />
              </div>
            </PhotoView>
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
    </PhotoProvider>
  )
}
