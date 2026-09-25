"use client"

import { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { BookOpen, Briefcase, Palette, Code, FileText, Search } from "lucide-react"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { useLanguage } from "@/components/language-provider"
import { publishedWorkProjects } from "@/lib/work"
import { publishedInsightArticles } from "@/lib/insights"

/**
 * Site-wide ⌘K quick search — built on the shadcn `Command` primitives that
 * were already scaffolded (components/ui/command.tsx) but never wired to
 * anything (Master to-do list, Tier 6). Indexes the 4 main pages, the 8
 * case studies, and all published Insights articles; opens with ⌘K / Ctrl+K
 * or the "Search" button in the navbar (see components/navbar-new.tsx).
 */
export default function GlobalSearch() {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const { t } = useLanguage()

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        setOpen((v) => !v)
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [])

  useEffect(() => {
    function onOpen() {
      setOpen(true)
    }
    window.addEventListener("dhia:open-search", onOpen)
    return () => window.removeEventListener("dhia:open-search", onOpen)
  }, [])

  const pages = useMemo(
    () => [
      { label: "Home", href: "/", icon: Search },
      { label: "Trainer", href: "/trainer", icon: BookOpen },
      { label: "Visual Designer", href: "/designer", icon: Palette },
      { label: "Web Developer", href: "/developer", icon: Code },
      { label: "Freebies", href: "/freebies", icon: FileText },
      { label: "Insights", href: "/insights", icon: FileText },
    ],
    []
  )

  const projects = useMemo(
    () =>
      publishedWorkProjects().map((p) => ({
        label: p.title,
        href: `/work/${p.slug}`,
        icon: Briefcase,
      })),
    []
  )

  const articles = useMemo(
    () =>
      publishedInsightArticles().map((a) => ({
        label: t(a.titleKey),
        href: `/insights/${a.slug}`,
        icon: FileText,
      })),
    [t]
  )

  function go(href: string) {
    setOpen(false)
    router.push(href)
  }

  return (
    <CommandDialog
      open={open}
      onOpenChange={setOpen}
      title="Quick search"
      description="Jump to a page, case study, or article"
    >
      <CommandInput placeholder="Search pages, case studies, articles..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Pages">
          {pages.map((p) => (
            <CommandItem key={p.href} value={p.label} onSelect={() => go(p.href)}>
              <p.icon />
              <span>{p.label}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Case studies">
          {projects.map((p) => (
            <CommandItem key={p.href} value={p.label} onSelect={() => go(p.href)}>
              <p.icon />
              <span>{p.label}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Insights">
          {articles.map((a) => (
            <CommandItem key={a.href} value={a.label} onSelect={() => go(a.href)}>
              <a.icon />
              <span>{a.label}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
