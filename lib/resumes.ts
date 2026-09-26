export type ResumeOption = {
  id: string
  /** Translation key for this resume's label in the dropdown. */
  labelKey: string
  /** Path under /public, served directly, no build step needed. */
  fileUrl: string
}

/** The 5 role-specific resumes offered from the navbar's Resume dropdown.
 *  Files live in public/resumes/, add a new PDF there and an entry here to
 *  offer another one; nothing else needs to change. */
export const resumeOptions: ResumeOption[] = [
  { id: "general", labelKey: "resumeGeneral", fileUrl: "/resumes/mohamed-dhia-arfa-cv.pdf" },
  { id: "designer", labelKey: "resumeDesigner", fileUrl: "/resumes/mohamed-dhia-arfa-graphic-designer.pdf" },
  { id: "trainer", labelKey: "resumeTrainerRole", fileUrl: "/resumes/mohamed-dhia-arfa-trainer.pdf" },
  { id: "developer", labelKey: "resumeDeveloperRole", fileUrl: "/resumes/mohamed-dhia-arfa-web-developer.pdf" },
  { id: "social", labelKey: "resumeSocialEngagement", fileUrl: "/resumes/mohamed-dhia-arfa-social-engagement.pdf" },
]
