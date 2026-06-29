/** Ordered main-site navigation for prev/next page arrows. */
export type SiteNavItem = {
  path: string
  label: string
  labelFr: string
  labelAr: string
}

export const SITE_NAV_FLOW: SiteNavItem[] = [
  { path: "/", label: "Home", labelFr: "Accueil", labelAr: "الرئيسية" },
  { path: "/about", label: "About", labelFr: "À propos", labelAr: "نبذة" },
  { path: "/designer", label: "Designer", labelFr: "Design", labelAr: "التصميم" },
  { path: "/trainer", label: "Trainer", labelFr: "Formation", labelAr: "التدريب" },
  { path: "/developer", label: "Developer", labelFr: "Développement", labelAr: "التطوير" },
  { path: "/freebies", label: "Freebies", labelFr: "Ressources", labelAr: "موارد" },
  { path: "/insights", label: "Insights", labelFr: "Articles", labelAr: "مقالات" },
]

export function navNeighbors(pathname: string): {
  prev: SiteNavItem | null
  next: SiteNavItem | null
} {
  const normalized =
    pathname.startsWith("/work/") || pathname.startsWith("/insights/")
      ? pathname.startsWith("/work/")
        ? "/developer"
        : "/insights"
      : SITE_NAV_FLOW.some((item) => item.path === pathname)
        ? pathname
        : "/"

  const index = SITE_NAV_FLOW.findIndex((item) => item.path === normalized)
  if (index === -1) return { prev: null, next: null }

  return {
    prev: index > 0 ? SITE_NAV_FLOW[index - 1] : null,
    next: index < SITE_NAV_FLOW.length - 1 ? SITE_NAV_FLOW[index + 1] : null,
  }
}
