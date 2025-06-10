const sunscreenProtocol = {
  id: "sunscreen-protocol-2025",
  title: "MC1R Sunscreen Study Protocol",
  version: "v0.1",
  updated: "2025-04-18",
  principalInvestigator: "Nina Kilbride",
  contact: "contact@gingerscience.org",
  objective:
    "To assess the real-world accessibility, tolerability, and effectiveness of modern sunscreen formulations among redheads (MC1R carriers), with a focus on non-FDA filters.",
  milestones: [
    { label: "Research Portal Setup", status: "in-progress" },
    { label: "Product Acquisition", status: "in-progress" },
    { label: "Participant Enrollment", status: "in-progress" },
    { label: "Data Logging Activation", status: "not-started" },
    { label: "Preliminary Results", status: "not-started" },
    { label: "Final Report + Recommendations", status: "not-started" },
  ],
  eligibility: {
    inclusion: [
      "Self-identify as redhead or MC1R carrier",
      "Age 18+ or with parental consent",
      "Willing to test and log sunscreen use",
      "Comfortable sharing structured data",
    ],
    exclusion: [
      "Known severe sunscreen allergy",
      "Under active treatment for skin cancer",
      "Living in countries where sunscreen import is prohibited",
    ],
  },
  dataCollection: {
    methods: [
      "Intake form (skin type, location, sunscreen history)",
      "Mailed sample set of 3–5 sunscreens",
      "Product usage and tolerability survey",
      "Optional image uploads for comparison",
    ],
    privacy: {
      summary:
        "All data is pseudonymous unless participant consents to attribution. No biometric data is required.",
    },
  },
};

export default sunscreenProtocol;