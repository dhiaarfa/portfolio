import AboutPageClient from "./AboutPageClient"

export const metadata = {
  title: "About - Mohamed Dhia Arfa",
  description:
    "Learn about Mohamed Dhia Arfa's journey as a designer, trainer, and developer. 7+ years of experience, 990+ participants trained, CNFCPP certified trainer.",
  keywords: ["about", "Mohamed Dhia Arfa", "designer", "trainer", "developer", "Tunisia", "CNFCPP", "professional journey"],
  openGraph: {
    title: "About - Mohamed Dhia Arfa",
    description: "Learn about Mohamed Dhia Arfa's professional journey and expertise.",
    type: "profile",
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
