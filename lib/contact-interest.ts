import type { PriceId } from "@/lib/pricing"

/**
 * "Request a quote" on a price card (Oct 2026): the card's link scrolls to
 * #contact-form and fires this event; components/contact-form.tsx listens,
 * picks the matching service and starts the message with the offer and its
 * starting price, so the visitor doesn't retype what they just chose.
 */
export const CONTACT_INTEREST_EVENT = "contact:interest"

export function requestQuote(id: PriceId) {
  window.dispatchEvent(new CustomEvent<PriceId>(CONTACT_INTEREST_EVENT, { detail: id }))
}
