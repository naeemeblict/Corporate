import { ModuleData } from '../types/course';

export const module1: ModuleData = {
  id: 1,
  moduleNumber: "Module 1",
  title: "What does the course cover",
  shortTitle: "Course Map & Roadmap",
  description: "Introduction to the Corporate Strategy program, mapping the 8 core analytical frameworks from organizational purpose to competitive positioning and growth.",
  importance: "Provides learners with the complete mental blueprint so every subsequent analytical tool is understood in context.",
  learningObjectives: [
    "Explain the overall architecture of strategic management",
    "Identify the 8 core frameworks covered across the program",
    "Distinguish between external environment analysis and internal capability assessment",
    "Establish a target company case file for hands-on application throughout the course"
  ],
  requiredKnowledge: "No formal prerequisites. Familiarity with everyday business transactions.",
  skillsToDevelop: ["Strategic Framework Navigation", "Strategic Problem Scoping", "Target Case Selection"],
  expectedOutcomes: "A crystal-clear mental model of how strategy connects purpose, external competition, internal advantage, and enterprise expansion.",
  summary: "Module 1 sets up the complete course journey: Purpose (Mod 2) -> External Analysis (Mods 3-5) -> Internal Capabilities & Positioning (Mods 6-7) -> Growth & Synthesis (Mods 8-9).",
  lessons: [
    {
      id: "1.1",
      lessonNumber: "1.1",
      title: "What does the course cover",
      moduleId: 1,
      moduleTitle: "What does the course cover",
      estimatedMinutes: 20,
      originalVideoTime: "1 min",
      difficulty: "Beginner",
      priorKnowledge: "None required.",
      learningObjectives: [
        "List the main strategic frameworks taught in this course and what core question each framework answers",
        "Distinguish between external analysis (industry context) and internal analysis (firm capabilities)",
        "Select a real-world enterprise to serve as your personal case study throughout all modules"
      ],
      simpleIntro: "Imagine steering a commercial ship across an ocean. You must know your destination (Purpose), the currents and storms outside (External Environment), and the power of your engines and crew inside (Internal Capabilities). Strategy is that master navigation plan. This lesson introduces your navigation map.",
      detailedExplanation: {
        sections: [
          {
            heading: "What Is Strategic Management?",
            content: "Strategic Management is the coordinated process of defining a firm's long-term direction, analyzing external competitive forces, organizing internal capabilities, and committing resources to achieve sustained above-average profitability.",
            bulletPoints: [
              "Coherent Strategy: When every department—from R&D to marketing to finance—pulls in the exact same strategic direction.",
              "Incoherent Strategy: When departments pursue contradictory goals, wasting capital and confusing customers."
            ]
          },
          {
            heading: "The Four Core Pillars of the Program",
            content: "This curriculum organizes 39 lessons into four logical, progressive pillars:",
            table: {
              headers: ["Pillar", "Modules", "Primary Focus & Core Question"],
              rows: [
                ["Pillar 1: Purpose & Levels", "Module 2", "Where do we compete (Corporate) vs. How do we compete (Business)? Defining Mission, Vision, Goals, Values."],
                ["Pillar 2: External Dynamics", "Modules 3, 4, 5", "Industry Life Cycle (Stage timing), Porter's 5 Forces (Industry profit potential), Game Theory (Rival reactions)."],
                ["Pillar 3: Internal Advantage & Position", "Modules 6, 7", "Internal Resources & Capabilities (VRIO), Cost Leadership vs. Differentiation vs. Niche."],
                ["Pillar 4: Expansion & Synthesis", "Modules 8, 9", "Organic vs. M&A Growth, Vertical vs. Horizontal expansion, SWOT & Starbucks Case Synthesis."]
              ]
            }
          }
        ]
      },
      diagram: {
        title: "The Strategic Management Framework Matrix",
        description: "How external evaluation and internal resources converge into market positioning and growth.",
        type: "flow",
        items: [
          { label: "1. Purpose & Levels", sublabel: "Corp vs. Business (Mod 2)" },
          { label: "2. External Forces", sublabel: "Life Cycle & 5 Forces (Mods 3-4)" },
          { label: "3. Interactive Rivalry", sublabel: "Game Theory (Mod 5)" },
          { label: "4. Internal Advantage", sublabel: "Resources & Capabilities (Mod 6)" },
          { label: "5. Positioning", sublabel: "Generic Strategies (Mod 7)" },
          { label: "6. Corporate Growth", sublabel: "M&A, Organic, Vertical (Mod 8)" },
          { label: "7. Synthesis", sublabel: "SWOT Action Matrix (Mod 9)", highlight: true }
        ]
      },
      examples: [
        {
          type: "Real-World Industry",
          title: "The Coherence of IKEA's Strategic System",
          narrative: "IKEA's purpose is to offer stylish home furnishing at prices affordable to the majority of people. Because of this strategic choice, their designers build products to fit flat-pack boxes, stores are placed on inexpensive suburban land, customers assemble products at home, and warehouses double as showrooms. Every activity reinforces the low-cost, high-design position.",
          takeaway: "Strategy is not an isolated slogan; it is an interlocking system of business activities that reinforce one another."
        },
        {
          type: "Hypothetical",
          title: "The Disaster of Incoherent Strategy at 'QuickByte'",
          narrative: "QuickByte, a fast-casual salad restaurant, decides to market itself as an 'ultra-fresh luxury organic lunch destination.' At the same time, the finance director cuts costs by purchasing canned vegetables, and the store manager removes seating to speed up turnover. Customers expecting a luxury lunch feel cheated, while budget diners find it overpriced. The restaurant loses both audiences.",
          takeaway: "When marketing, operations, and finance execute conflicting priorities, the business suffers strategic incoherence."
        }
      ],
      practicalApplication: {
        rule: "Always apply the 'Opposite Test' to verify whether a proposed plan is a true strategy or merely an empty platitude.",
        steps: [
          "State your company's core strategic choice in one clear sentence.",
          "Ask: Could a rational, profitable competitor choose the exact polar opposite?",
          "If the opposite is absurd (e.g., 'We want to waste money and provide terrible service'), then your statement is just basic operational competence, not a strategy.",
          "If the opposite is a viable alternative business model (e.g., 'We sell exclusively online direct-to-consumer with no retail stores'), you have identified a genuine strategic choice."
        ]
      },
      stepByStepPractice: {
        whatToDo: "Establish your Target Case Study Notebook for the entire course.",
        whyToDoIt: "Applying strategic concepts immediately to a real company converts theoretical knowledge into practical analytical skill.",
        howToDoIt: [
          "Select one company you know well (your employer, a local challenger brand, or a public company like Netflix, Toyota, or Zara).",
          "Document its primary industry, core customer segments, and top two direct competitors.",
          "Record what you believe to be its greatest strategic challenge today."
        ],
        expectedResult: "A 1-page baseline case profile ready for testing across all 9 modules.",
        commonMistakes: "Choosing a massive multi-industry conglomerate (like Berkshire Hathaway) for your first study, making analysis overwhelming.",
        correction: "Choose a focused enterprise that operates primarily within 1 or 2 core product categories."
      },
      keyTakeaways: [
        "Strategy is the integrated set of choices by which an organization achieves its goals against competitors.",
        "External analysis (Modules 3-5) discovers where profits exist and how competitors react.",
        "Internal analysis (Modules 6-7) uncovers what unique strengths the firm possesses to win.",
        "Strategic coherence requires every department to align with the same core positioning."
      ],
      lessonSummary: "Lesson 1.1 provided the comprehensive roadmap of the corporate strategy curriculum, detailing the 8 core frameworks, separating external and internal perspectives, and demonstrating how real companies achieve strategic coherence.",
      knowledgeCheck: [
        {
          id: "kc1-1",
          question: "Which of the following frameworks is specifically designed to analyze dynamic, interactive moves and counter-moves between competing companies?",
          options: ["The Industry Life Cycle Model", "Game Theory", "Porter's Value Chain", "Mission Statement"],
          correctIndex: 1,
          explanation: "Game Theory focuses on interactive decision-making where the outcome of your move depends directly on how rivals respond."
        },
        {
          id: "kc1-2",
          question: "What is the primary indicator of an 'incoherent strategy' inside an organization?",
          options: [
            "The company pays higher taxes than its competitors",
            "Different departments (such as marketing and operations) pursue contradictory objectives that cancel each other out",
            "The company has fewer than 100 employees",
            "The CEO does not possess an MBA degree"
          ],
          correctIndex: 1,
          explanation: "Incoherence occurs when organizational choices clash, such as promising ultra-luxury quality while cutting procurement costs to the lowest commodity grade."
        },
        {
          id: "kc1-3",
          question: "Which two modules in this curriculum specifically focus on the internal strengths and positioning of the firm?",
          options: ["Modules 3 and 4", "Modules 4 and 5", "Modules 6 and 7", "Modules 1 and 2"],
          correctIndex: 2,
          explanation: "Module 6 covers Competitive Advantage, Resources, and Capabilities; Module 7 covers Generic Competitive Strategies (Cost Leadership, Differentiation, Niche)."
        }
      ],
      assignment: {
        title: "Target Enterprise Selection & Strategic Baseline Audit",
        instructions: "Choose a focused company and create a 200-word executive summary answering: 1) What is its primary industry? 2) Who are its primary target customers? 3) Who are its two most dangerous rivals? 4) What is one significant trade-off it makes in its current business model?",
        expectedOutput: "A structured 200-word markdown briefing in your study notes.",
        submissionRequirements: "Submit as a markdown document or enter into your local case notebook.",
        evaluationCriteria: [
          "Clarity of industry definition (25%)",
          "Accurate customer segment identification (25%)",
          "Direct rival identification (25%)",
          "Evidence of genuine strategic trade-off (25%)"
        ]
      },
      furtherLearning: [
        "Review '01_COMPLETE_CURRICULUM_MAP.md' to verify course progression",
        "Read Michael E. Porter's foundational article 'What Is Strategy?' (HBR, 1996)"
      ]
    }
  ],
  moduleQuiz: [
    {
      id: "mq1-1",
      question: "What is the primary objective of developing a corporate and business strategy?",
      options: [
        "To satisfy corporate tax compliance filings",
        "To align the efforts of executives, managers, and employees in a unified direction",
        "To ensure a business never faces any competition",
        "To replace the need for operational management"
      ],
      correctIndex: 1,
      explanation: "A coherent strategy aligns organizational energy, ensuring that resources are allocated toward shared, sustainable competitive goals."
    },
    {
      id: "mq1-2",
      question: "Which of the following is considered an EXTERNAL strategic analysis tool?",
      options: [
        "Michael Porter's Five Forces Model",
        "VRIO Capability Analysis",
        "Company Core Values Statement",
        "Internal Decision-Making Tree"
      ],
      correctIndex: 0,
      explanation: "Porter's Five Forces examines the external industry environment (competitors, suppliers, buyers, substitutes, and new entrants)."
    }
  ],
  moduleAssignment: {
    title: "Course Framework Readiness Matrix",
    instructions: "Map the 8 core frameworks of this course against your current level of familiarity (1 = Novice, 5 = Master). For each framework, write down one burning strategic question you need answered for your career or business.",
    expectedOutput: "An 8-row table with self-ratings and specific strategic inquiries.",
    submissionRequirements: "Markdown or document format.",
    evaluationCriteria: [
      "All 8 frameworks included (40%)",
      "Honest self-assessment (20%)",
      "Actionable, high-quality strategic questions (40%)"
    ]
  }
};
