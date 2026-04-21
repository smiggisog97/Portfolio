export const cases = {
  pathao_homepage: {
    company: 'Pathao', year: '2024', role: 'Senior Product Designer',
    title: 'Platform Homepage Revamp',
    tagline: 'A bento-grid homepage that turned passive browsing into active service adoption across a 5.7M-user super-app.',
    sections: [
      { label: 'A. Problem', content: `<p>Pathao's homepage was a static grid of service icons — no hierarchy, no context. Users landed, tapped their habitual service, and left. Tile penetration across secondary services was stuck in the single digits despite millions of daily opens.</p>` },
      { label: 'B. Context', content: `<p><strong>Product:</strong> Pathao's super-app homepage — the central surface for rides, food, parcels, and payments across Bangladesh.</p><p class="mt-3"><strong>Users:</strong> Urban daily commuters with strong habits around 1–2 services, low awareness of the rest of the platform.</p><p class="mt-3"><strong>Constraints:</strong> Most-trafficked surface in the product. Any layout change needed to work across a wide range of device sizes and network conditions.</p>` },
      { label: 'C. Process', content: `<p>Audited session recordings to understand how users scanned the homepage. Ran card-sorting exercises with 40+ users to map service grouping mental models.</p><p class="mt-3"><strong>Key insight:</strong> Users didn't know what they didn't tap. The flat grid gave every service equal weight — which meant nothing stood out.</p>` },
      { label: 'D. Solution', content: `<p>Redesigned with a bento-grid layout using visual weight hierarchy — large anchor tiles for high-frequency services, contextual recommendations for discovery. Added dynamic tile prioritisation based on time of day and usage history.</p><p class="mt-3">The layout communicated the platform's breadth at a glance without requiring users to actively explore.</p>` },
      { label: 'E. Impact', content: `<p>Tile penetration across secondary services grew <strong>20%+</strong>. The bento layout became the visual language used across subsequent Pathao product surfaces. Design extended to the Rental homepage, which drove a 50% increase in niche trip bookings.</p>` },
    ]
  },
  pathao_onboarding: {
    company: 'Pathao', year: '2023', role: 'Senior Product Designer',
    title: 'Quick Driver Onboarding',
    tagline: 'Rebuilding a broken signup funnel so 16× more applicants became active drivers.',
    sections: [
      { label: 'A. Problem', content: `<p>Driver supply was a critical growth lever — but the onboarding funnel was losing the vast majority of applicants before they ever completed a trip. The flow required document uploads, multi-step verification, and multiple app context switches that most applicants abandoned.</p>` },
      { label: 'B. Context', content: `<p><strong>Product:</strong> Pathao Driver — the supply-side app for ride and delivery drivers.</p><p class="mt-3"><strong>Users:</strong> Prospective drivers, many first-time gig workers, often on lower-end Android devices with variable connectivity.</p><p class="mt-3"><strong>Constraints:</strong> Regulatory requirements meant document verification couldn't be removed. The challenge was redesigning around the requirements, not eliminating them.</p>` },
      { label: 'C. Process', content: `<p>Shadowed driver onboarding sessions at Pathao's field offices. Mapped every drop-off point in the funnel with data from the analytics team.</p><p class="mt-3"><strong>Key insight:</strong> Applicants didn't abandon because the process was long — they abandoned because they couldn't tell how far they'd come or what was left. Uncertainty, not effort, caused drop-off.</p>` },
      { label: 'D. Solution', content: `<p>Rebuilt the flow with a persistent progress indicator showing exact steps remaining. Chunked document uploads into clear micro-tasks. Added inline guidance that explained why each document was needed and what a valid photo looked like.</p><p class="mt-3">Introduced an async verification state so applicants could exit the app and return when approved — removing the need to wait in the flow.</p>` },
      { label: 'E. Impact', content: `<p>Signup-to-active conversion improved <strong>16×</strong>. Driver supply constraints eased measurably in the quarters following launch. The pattern was reused for the CNG ride vertical onboarding.</p>` },
    ]
  },
  pathao_autopay: {
    company: 'Pathao', year: '2024', role: 'Senior Product Designer',
    title: 'Autopay v2.0',
    tagline: 'Designing the payment flow that added 14,000 new Pathao Pay users.',
    sections: [
      { label: 'A. Problem', content: `<p>Pathao Pay adoption was low despite being deeply integrated into the ride experience. Most users paid cash by default — not out of preference, but because setting up autopay felt like a commitment they weren't ready to make mid-booking.</p>` },
      { label: 'B. Context', content: `<p><strong>Product:</strong> Pathao Pay — the in-app wallet and payment method used across rides, food, and parcels.</p><p class="mt-3"><strong>Users:</strong> Existing Pathao users who hadn't adopted the wallet — a mix of habitual cash payers and users who had started setup but dropped off.</p><p class="mt-3"><strong>Constraints:</strong> Payment flows require high trust signals. Any friction introduced during payment is felt immediately in conversion.</p>` },
      { label: 'C. Process', content: `<p>Analysed drop-off in the existing autopay setup funnel. Ran qualitative interviews with 20 non-adopters to understand the hesitation.</p><p class="mt-3"><strong>Key insight:</strong> Users didn't distrust the product — they distrusted the moment. Being asked to set up a payment method inside a booking flow felt like the wrong time.</p>` },
      { label: 'D. Solution', content: `<p>Redesigned the autopay setup as a standalone post-trip moment — surfaced after a successful cash trip with contextual framing ("Skip this step on your next ride"). Reduced the setup to 3 steps with clear reversibility messaging.</p><p class="mt-3">Added a "try once" mode that let users pay with wallet for a single trip before committing to autopay — lowering the perceived risk of adoption.</p>` },
      { label: 'E. Impact', content: `<p><strong>14,000 new Pathao Pay users</strong> added in the first month post-launch. Autopay adoption rate among prompted users increased significantly. The post-trip nudge pattern was adopted across other Pathao Pay activation flows.</p>` },
    ]
  },
}
