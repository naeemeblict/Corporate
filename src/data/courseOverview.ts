import { CourseOverviewData } from '../types/course';

export const courseOverview: CourseOverviewData = {
  title: "Corporate Strategy: Master Competitive Positioning & Decision-Making",
  subtitle: "Official Professional Learning Publication — Comprehensive 9-Module Program",
  brand: {
    publisher: "ASCENDIX CONSULTING",
    author: "Ihtishamul Haque Naeem",
    authorTitle: "Chairman, Seerat Academy Foundation",
    website: "https://seeratfoundation.com",
    tagline: "Professionalism • Knowledge • Quality • Trust • Innovation • Educational Excellence",
    coreValues: [
      "Professionalism & Integrity",
      "Academic & Research Rigor",
      "Educational Excellence",
      "Practical Skill Development",
      "Trust & Knowledge Leadership"
    ]
  },
  targetAudience: [
    "Aspiring Executives & Senior Leaders aiming to steer business direction",
    "Entrepreneurs & Startup Founders choosing pricing, business models, and market entry",
    "Middle Managers & Product Leads seeking alignment with executive goals",
    "Business Analysts, Consultants & MBA students who want real-world practical frameworks"
  ],
  prerequisites: "Basic understanding of how businesses buy goods and sell products. No prior MBA or economics degree required.",
  totalModules: 9,
  totalLessons: 39,
  totalStudyHours: "25 - 30 Hours (130 minutes original video run-time)",
  xpLevel: "Level 7 (Gamified Progression)",
  learningObjectives: [
    "Identify and choose optimal strategic market positioning (Cost Leadership, Differentiation, Niche)",
    "Avoid the severe financial and organizational risks of an incoherent strategy",
    "Diagnose industry dynamics through the 4-stage Industry Life Cycle Model to time investments",
    "Assess structural industry profitability using Michael Porter's 5 Forces Model",
    "Apply Game Theory and payoff matrices to anticipate rival reactions and avoid destructive price wars",
    "Audit internal Resources and Capabilities using VRIO to build sustainable competitive advantage",
    "Design corporate growth paths balancing Organic vs. Inorganic (M&A) and Horizontal vs. Vertical integration",
    "Synthesize internal strengths/weaknesses and external opportunities/threats into actionable SWOT strategies"
  ],
  coreCompetencies: [
    {
      competency: "Strategic Alignment",
      skill: "Separate Corporate Strategy ('Where to compete') from Business Strategy ('How to compete') and write aligned Mission, Vision, Goals, and Values.",
      modules: "Modules 1 & 2"
    },
    {
      competency: "Dynamic Industry Diagnosis",
      skill: "Diagnose Introduction, Growth, Maturity, or Decline stages and adjust capital allocation, marketing, and R&D accordingly.",
      modules: "Module 3"
    },
    {
      competency: "Structural Profitability Analysis",
      skill: "Analyze New Entrants, Substitutes, Rivalry, Supplier Power, and Buyer Power to evaluate industry margins.",
      modules: "Module 4"
    },
    {
      competency: "Interactive Competitor Modeling",
      skill: "Construct 2x2 Game Theory payoff matrices, identify Nash Equilibria, and navigate Prisoner's Dilemmas.",
      modules: "Module 5"
    },
    {
      competency: "Internal Capability Auditing",
      skill: "Evaluate tangible/intangible resources and capabilities using VRIO criteria and Value Chain activities.",
      modules: "Module 6"
    },
    {
      competency: "Competitive Positioning",
      skill: "Select and defend Cost Leadership, Differentiation, or Focus strategies while avoiding the dangerous 'Stuck in the Middle' trap.",
      modules: "Module 7"
    },
    {
      competency: "Corporate Growth Architecture",
      skill: "Structure Organic growth, M&A acquisitions, Horizontal market expansion, and Forward/Backward Vertical integration.",
      modules: "Module 8"
    },
    {
      competency: "Strategic Synthesis",
      skill: "Combine internal and external insights into an actionable SWOT/TOWS matrix using real-world enterprise cases like Starbucks.",
      modules: "Module 9"
    }
  ],
  additionalRecommendations: [
    {
      title: "PESTEL Macro-Environmental Audit",
      description: "Examines broader Political, Economic, Social, Technological, Environmental, and Legal trends operating outside the direct industry boundary.",
      whyUseful: "Complements Porter's Five Forces by detecting macroeconomic shifts before they alter industry structure."
    },
    {
      title: "Blue Ocean Strategy & Value Innovation",
      description: "Framework by Kim & Mauborgne for creating uncontested market space and making the competition irrelevant.",
      whyUseful: "Expands Module 7 positioning by showing how to break the cost-differentiation trade-off."
    },
    {
      title: "Strategy Execution via Balanced Scorecards & OKRs",
      description: "Frameworks translating high-level strategy into quarterly Objectives & Key Results across Financial, Customer, Internal Process, and Learning dimensions.",
      whyUseful: "Bridges the gap between strategic formulation (Module 9) and daily operational execution."
    }
  ]
};
