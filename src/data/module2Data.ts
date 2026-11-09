import { ModuleData } from '../types/course';

export const module2: ModuleData = {
  id: 2,
  moduleNumber: "Module 2",
  title: "Why companies need a Strategy and how a Strategy helps firms",
  shortTitle: "Strategy Purpose & Levels",
  description: "Examines why companies fail without a coherent strategy, distinguishes Corporate Strategy ('Where to compete') from Business Strategy ('How to compete'), and establishes robust Mission, Goals, and Values statements.",
  importance: "Misunderstanding the difference between corporate-level portfolio decisions and business-unit competitive moves leads to strategic drift and misallocated capital.",
  learningObjectives: [
    "Define strategy and articulate the four key mechanisms by which strategy helps firms thrive",
    "Distinguish Corporate Strategy from Business Strategy across scope, decision-makers, and objectives",
    "Formulate aligned, jargon-free Mission, Vision, Goals, and Values statements"
  ],
  requiredKnowledge: "Completion of Module 1.",
  skillsToDevelop: ["Strategic Hierarchy Analysis", "Trade-Off Formulation", "Purpose Statement Crafting"],
  expectedOutcomes: "Ability to evaluate any executive decision as either corporate or business level, and audit corporate statements for strategic substance.",
  summary: "Strategy defines how an organization navigates trade-offs. Corporate strategy manages the portfolio of industries, business strategy wins inside each market, and Mission/Vision/Goals/Values anchor all decisions.",
  lessons: [
    {
      id: "2.1",
      lessonNumber: "2.1",
      title: "Why companies need a Strategy",
      moduleId: 2,
      moduleTitle: "Why companies need a Strategy and how a Strategy helps firms",
      estimatedMinutes: 45,
      originalVideoTime: "5 min",
      difficulty: "Beginner",
      priorKnowledge: "Lesson 1.1",
      learningObjectives: [
        "Define Strategy and differentiate it from operational effectiveness",
        "Explain the four ways strategy helps firms: Direction, Alignment, Resource Allocation, and Trade-offs",
        "Apply the concept of deliberate trade-offs to business scenarios"
      ],
      simpleIntro: "Many leaders say 'our strategy is to work harder and grow 20% next year.' But working harder is not a strategy; it is just working harder! Strategy is the deliberate set of choices an organization makes to position itself uniquely against rivals.",
      detailedExplanation: {
        sections: [
          {
            heading: "Strategy vs. Operational Effectiveness",
            content: "Michael Porter famously distinguished between Operational Effectiveness (doing similar activities better than rivals) and Strategy (doing different activities, or doing similar activities in different ways).",
            bulletPoints: [
              "Operational Effectiveness (OE): Buying faster machines, using better accounting software, cutting waste. While vital, OE is easily copied by rivals, driving prices down for everyone without conferring a lasting edge.",
              "Strategic Positioning: Choosing a distinctive combination of activities that creates unique economic value that rivals cannot duplicate without severe cost."
            ]
          },
          {
            heading: "The Four Core Ways Strategy Helps Firms",
            content: "A clear strategy guides the entire life of an organization through four concrete mechanisms:",
            table: {
              headers: ["Mechanism", "Without Strategy", "With Coherent Strategy"],
              rows: [
                ["1. Long-Term Direction", "Reacts impulsively to short-term news, gossip, and rival moves.", "Maintains a disciplined 3-to-5-year North Star."],
                ["2. Organizational Alignment", "Departments fight over contradictory targets and pull apart.", "Executives, managers, and frontline workers pull in the same direction."],
                ["3. Resource Allocation", "Budgets are spread thinly across dozens of pet projects.", "Capital and talent are concentrated on 2-3 decisive competitive pillars."],
                ["4. Enforcing Trade-offs", "Tries to be everything to everyone; gets stuck in the middle.", "Clearly chooses what NOT to do to protect competitive uniqueness."]
              ]
            }
          }
        ]
      },
      diagram: {
        title: "The Pillars of Strategic Coherence",
        description: "How strategic choices enforce disciplined trade-offs across operations.",
        type: "comparison",
        items: [
          { label: "Direction", sublabel: "Clear 3-5 Year Horizon" },
          { label: "Alignment", sublabel: "Cross-Departmental Harmony" },
          { label: "Resource Focus", sublabel: "Capital Concentrated on Core" },
          { label: "Trade-offs", sublabel: "Explicit 'What NOT to Do'", highlight: true }
        ]
      },
      examples: [
        {
          type: "Real-World Industry",
          title: "Southwest Airlines' Disciplined Trade-Offs",
          narrative: "Southwest Airlines achieved 47 consecutive years of profitability by making strict strategic trade-offs: no assigned seating, no meals, no inter-airline baggage transfers, and flying only Boeing 737 aircraft. This allowed 15-minute gate turnarounds and rock-bottom operating costs that full-service carriers could not match without destroying their own legacy business models.",
          takeaway: "Sustainable strategy requires saying 'no' to profitable-sounding opportunities that conflict with your operating model."
        }
      ],
      practicalApplication: {
        rule: "Whenever evaluating a proposed strategic plan, ask: 'What are we deliberately choosing NOT to do?'",
        steps: [
          "List all current products, customer segments, and service perks.",
          "Identify which offerings dilute your team's focus or add costs that core customers do not value.",
          "Formulate explicit non-goals (e.g., 'We do not serve customers who demand custom software modifications').",
          "Reallocate freed-up budget to strengthen your core competitive advantage."
        ]
      },
      stepByStepPractice: {
        whatToDo: "Diagnose whether a company's executive plan is a true strategy or just an operational goal.",
        whyToDoIt: "Prevents confusing financial scoreboards with competitive action plans.",
        howToDoIt: [
          "Review the statement: 'Our strategy is to reach $100M revenue by expanding globally.'",
          "Notice that this states the desired outcome, not the unique method or customer value proposition.",
          "Rewrite it into a strategy: 'We will reach $100M by offering cloud compliance automation specifically for European fintech firms, replacing expensive manual legal audits.'"
        ],
        expectedResult: "A transformed strategy statement featuring a clear target market, unique value proposition, and underlying trade-offs.",
        commonMistakes: "Accepting numerical targets ('grow 15%') as strategies.",
        correction: "Always ask HOW the target will be achieved in the face of rival competition."
      },
      keyTakeaways: [
        "Strategy is about making choices and deliberate trade-offs; it defines what to do and what not to do.",
        "Operational effectiveness is essential for survival but is not strategy because rivals can copy it.",
        "Strategy provides direction, drives organizational alignment, guides capital allocation, and protects margins."
      ],
      lessonSummary: "Lesson 2.1 established why organizations need a strategy, detailing the difference between operational efficiency and competitive positioning, and showing how trade-offs preserve coherence.",
      knowledgeCheck: [
        {
          id: "kc2-1-1",
          question: "According to Michael Porter, what is the fundamental difference between Operational Effectiveness and Strategy?",
          options: [
            "Operational effectiveness is about marketing, while strategy is about accounting",
            "Operational effectiveness means performing similar activities better than rivals, while strategy means performing different activities or performing activities differently",
            "Strategy only applies to public corporations, while operational effectiveness applies to startups",
            "There is no difference; they are exact synonyms"
          ],
          correctIndex: 1,
          explanation: "Operational effectiveness is about efficiency in routine activities, whereas strategy is about choosing a unique activity system."
        },
        {
          id: "kc2-1-2",
          question: "Why must a sound strategy always incorporate deliberate trade-offs?",
          options: [
            "Because government regulators enforce trade-offs",
            "Because trying to satisfy opposite customer needs (e.g., ultra-luxury service and rock-bottom prices) leads to internal conflict and inefficient execution",
            "Because trade-offs ensure that marketing teams work fewer hours",
            "Because trade-offs eliminate the need for financial budgets"
          ],
          correctIndex: 1,
          explanation: "Trade-offs create focus. Pursuing incompatible positions confuses employees, compromises processes, and wastes resources."
        }
      ],
      assignment: {
        title: "Trade-Off Identification Audit",
        instructions: "Examine your target company from Lesson 1.1. Identify three things that this company deliberately DOES NOT DO in order to protect its core competitive position. Explain what would happen if it attempted to do them.",
        expectedOutput: "A 200-word analysis listing 3 distinct trade-offs with risk assessments.",
        submissionRequirements: "Submit in your course notebook.",
        evaluationCriteria: [
          "Identification of 3 legitimate trade-offs (50%)",
          "Logical rationale explaining the conflict with existing operations (50%)"
        ]
      },
      furtherLearning: [
        "Study Michael Porter's concept of 'Activity Systems' in competitive strategy"
      ]
    },
    {
      id: "2.2",
      lessonNumber: "2.2",
      title: "Distinguishing Corporate and Business Strategy",
      moduleId: 2,
      moduleTitle: "Why companies need a Strategy and how a Strategy helps firms",
      estimatedMinutes: 45,
      originalVideoTime: "4 min",
      difficulty: "Beginner",
      priorKnowledge: "Lesson 2.1",
      learningObjectives: [
        "Distinguish between Corporate Strategy ('Where to compete') and Business Strategy ('How to compete')",
        "Identify the organizational levels, decision-makers, and key choices associated with each level",
        "Classify strategic business decisions into their appropriate strategic level"
      ],
      simpleIntro: "If someone asks 'What is Disney's strategy?', do they mean how Disney decides to own theme parks, cruise ships, TV networks, and movie studios? Or do they mean how the Disney+ streaming app beats Netflix? The first is Corporate Strategy; the second is Business Strategy.",
      detailedExplanation: {
        sections: [
          {
            heading: "Corporate Strategy: Where to Compete",
            content: "Corporate Strategy is decided by executive headquarters (CEO, Board of Directors, CFO). It addresses the firm's total portfolio of businesses across industries and geographic markets.",
            bulletPoints: [
              "Industry Scope: Which industries should we enter, invest in, or divest (sell off)?",
              "Resource Allocation: How should corporate capital and executive talent be divided among our divisions?",
              "Synergy: How can our different business units share technology, brand equity, or supply chains so the whole enterprise is worth more than the sum of its individual parts?",
              "Mergers & Acquisitions (M&A): Should we buy existing companies or build new divisions internally?"
            ]
          },
          {
            heading: "Business Strategy: How to Compete",
            content: "Business Strategy (also called Competitive Strategy) is formulated at the level of a Strategic Business Unit (SBU). It focuses on winning inside one specific market against direct rivals.",
            bulletPoints: [
              "Competitive Advantage: Should we win through Cost Leadership (lowest price) or Differentiation (unique value)?",
              "Customer Segmentation: Which customer niches within this industry are we targeting?",
              "Product Positioning: How do our features, pricing, and distribution beat our direct rivals?"
            ]
          }
        ]
      },
      diagram: {
        title: "The Hierarchy of Strategic Decision-Making",
        description: "From corporate portfolio allocation down to business-unit competitive tactics.",
        type: "flow",
        items: [
          { label: "Corporate Strategy", sublabel: "Where to Compete? (Portfolio & Capital)", highlight: true },
          { label: "Business Unit Strategy", sublabel: "How to Compete? (Cost vs. Differentiation)" },
          { label: "Functional Strategy", sublabel: "How to Support? (Marketing, Operations, HR)" }
        ]
      },
      examples: [
        {
          type: "Real-World Industry",
          title: "Amazon's Multi-Level Strategy Structure",
          narrative: "Amazon's Corporate Strategy manages a diverse portfolio spanning e-commerce, cloud computing (AWS), digital streaming (Prime Video), smart hardware (Echo/Alexa), and physical grocery stores (Whole Foods). Meanwhile, the Business Strategy of AWS focuses strictly on beating Microsoft Azure and Google Cloud through enterprise service reliability, high switching costs, and developer tooling.",
          takeaway: "Corporate strategy chooses the arenas; business strategy wins the matches within those arenas."
        }
      ],
      practicalApplication: {
        rule: "Diagnose whether a business crisis requires a Corporate pivot or a Business Unit adjustment.",
        steps: [
          "If an entire industry is collapsing due to technological substitution, improving your business unit tactics will not save you; you need a Corporate Strategy decision to exit.",
          "If the industry is booming but your unit is losing customers to rivals, you do not need to exit; you need a sharper Business Strategy."
        ]
      },
      stepByStepPractice: {
        whatToDo: "Classify strategic decisions into Corporate vs. Business level.",
        whyToDoIt: "Ensures clarity when discussing strategy with leadership teams.",
        howToDoIt: [
          "Review: 'A pharmacy chain decides to acquire an insurance company.' -> Corporate Strategy (Portfolio / Vertical Integration).",
          "Review: 'The pharmacy unit launches a 1-hour prescription delivery app to beat local drugstores.' -> Business Strategy (Competitive Differentiation)."
        ],
        expectedResult: "Clear classification of strategic choices across corporate and business levels.",
        commonMistakes: "Assuming Corporate Strategy only applies to giant multinational corporations.",
        correction: "A single-store owner makes a corporate strategy choice when deciding whether to add a catering business alongside the restaurant."
      },
      keyTakeaways: [
        "Corporate Strategy answers 'Where to compete?' (industries, acquisitions, portfolio capital allocation).",
        "Business Strategy answers 'How to compete?' (winning market share against direct rivals).",
        "Corporate and Business strategies must reinforce each other to create multi-business synergies."
      ],
      lessonSummary: "Lesson 2.2 defined and compared Corporate Strategy and Business Strategy, highlighting the core questions, scopes, decision-makers, and practical examples of each.",
      knowledgeCheck: [
        {
          id: "kc2-2-1",
          question: "Which of the following is purely a Corporate Strategy decision?",
          options: [
            "Deciding whether to discount television prices by 10% for Black Friday",
            "Deciding whether an automotive conglomerate should divest its commercial truck division and acquire a battery manufacturer",
            "Redesigning a smartphone user interface to improve usability",
            "Choosing between Google Ads and Facebook Ads for a marketing campaign"
          ],
          correctIndex: 1,
          explanation: "Divesting a division and acquiring a business in a new industry changes the company's overall portfolio scope (Corporate Strategy)."
        },
        {
          id: "kc2-2-2",
          question: "Which core question is the primary focus of Business Strategy?",
          options: [
            "In which new countries should headquarters open subsidiaries next decade?",
            "How should this business unit outperform direct rivals in its specific industry?",
            "What should the corporate tax structure look like?",
            "How many shares should the board authorize for executive stock options?"
          ],
          correctIndex: 1,
          explanation: "Business Strategy focuses on building a competitive advantage against rivals within a single industry."
        }
      ],
      assignment: {
        title: "Multi-Business Portfolio & Competitive Level Breakdown",
        instructions: "Choose a diversified enterprise (e.g., Sony, Alphabet, Unilever, or Samsung). 1) List at least 3 distinct business units in its Corporate portfolio. 2) For one unit, describe its Business Strategy (who are its primary rivals, and what is its basis of competitive advantage?).",
        expectedOutput: "A 250-word structured analysis.",
        submissionRequirements: "Submit in your study notebook.",
        evaluationCriteria: [
          "Accurate portfolio identification (40%)",
          "Detailed business strategy analysis of the selected unit (60%)"
        ]
      },
      furtherLearning: [
        "Explore BCG Growth-Share Matrix as a classic corporate portfolio management tool"
      ]
    },
    {
      id: "2.3",
      lessonNumber: "2.3",
      title: "The Misssion, Goals, and Values statements",
      moduleId: 2,
      moduleTitle: "Why companies need a Strategy and how a Strategy helps firms",
      estimatedMinutes: 45,
      originalVideoTime: "6 min",
      difficulty: "Beginner",
      priorKnowledge: "Lessons 2.1 and 2.2",
      learningObjectives: [
        "Define and distinguish between Mission, Vision, Goals, and Values statements",
        "Explain how foundational purpose statements serve as operational filters for executives and staff",
        "Draft compelling, measurable, and actionable purpose statements for any enterprise"
      ],
      simpleIntro: "Too often, mission and values statements read like generic corporate nonsense: 'We value excellence, integrity, and teamwork.' But when designed with strategic intent, these statements become the constitutional bedrock of the firm, governing every major decision and employee action.",
      detailedExplanation: {
        sections: [
          {
            heading: "The Four Pillars of Strategic Intent",
            content: "A complete strategic foundation aligns four distinct declarations:",
            table: {
              headers: ["Statement", "Time Focus", "Core Question Answered", "Strategic Role"],
              rows: [
                ["Mission Statement", "Present (Today)", "Why do we exist, what do we do, and who do we serve?", "Defines current business scope and customer value proposition."],
                ["Vision Statement", "Future (5-10+ Yrs)", "What do we aspire to become in the future?", "Inspires long-term ambition and sets the ultimate destination."],
                ["Goals & Objectives", "Medium-Term (1-3 Yrs)", "What concrete milestones must we hit?", "Translates broad vision into measurable SMART targets."],
                ["Values Statement", "Timeless / Daily", "How do we behave and conduct business?", "Establishes non-negotiable behavioral boundaries and ethical guardrails."]
              ]
            }
          },
          {
            heading: "How Purpose Statements Act as Strategic Filters",
            content: "Purpose statements are not marketing slogans—they are operational decision filters:",
            bulletPoints: [
              "Portfolio Filter: If an M&A proposal does not align with the Mission, executive leadership rejects it immediately.",
              "Crisis Filter: When a trade-off arises between hitting a quarterly revenue goal and compromising a core Value, the Value must take precedence.",
              "Employee Autonomy: Frontline employees who understand the Mission and Values make smart, consistent decisions without needing manager approval for every situation."
            ]
          }
        ]
      },
      diagram: {
        title: "The Strategic Intent Pyramid",
        description: "From timeless ethical principles up to long-term visionary destination.",
        type: "timeline",
        items: [
          { label: "Values", sublabel: "Ethical Bedrock (Timeless)" },
          { label: "Mission", sublabel: "Present Purpose (Today)" },
          { label: "Goals", sublabel: "SMART Targets (1-3 Years)" },
          { label: "Vision", sublabel: "Aspirational Future (5-10+ Years)", highlight: true }
        ]
      },
      examples: [
        {
          type: "Real-World Industry",
          title: "Google's Original Mission Statement",
          narrative: "'To organize the world's information and make it universally accessible and useful.' This mission provided a crystal-clear filter. When engineers proposed building hardware or search features, the filter was simple: does this organize information and make it accessible? It kept thousands of engineers aligned on software indexing and ranking for over a decade.",
          takeaway: "A great mission statement is concise, memorable, and directly guides engineering and business choices."
        }
      ],
      practicalApplication: {
        rule: "Audit your organization's goals using the SMART framework (Specific, Measurable, Achievable, Relevant, Time-Bound).",
        steps: [
          "Take a vague goal: 'We want to grow our international client base.'",
          "Make it Specific & Measurable: 'Acquire 25 enterprise clients in Germany and France.'",
          "Ensure Relevance & Time-Bound: '...generating $3.5M in ARR by Q4 2027 to establish European market presence.'"
        ]
      },
      stepByStepPractice: {
        whatToDo: "Draft a complete set of foundational statements for a clean-tech startup.",
        whyToDoIt: "Practices translating raw business ideas into aligned strategic statements.",
        howToDoIt: [
          "Mission: 'We design modular commercial battery systems that reduce factory power costs by 40% using recycled lithium cells.'",
          "Vision: 'A world where zero manufacturing facilities rely on fossil-fuel backup generators.'",
          "Goal: 'Deploy 500 MWh of storage across 50 industrial sites within 24 months.'",
          "Value: 'Radical Transparency: We provide live open-source battery health telemetry to all clients.'"
        ],
        expectedResult: "A coherent 4-part strategic declaration.",
        commonMistakes: "Using empty buzzwords like 'synergistic paradigm shifts' or 'world-class solutions.'",
        correction: "Write in simple, natural, clear English that a high-school student can immediately understand."
      },
      keyTakeaways: [
        "Mission defines present purpose; Vision defines future aspiration.",
        "Goals provide measurable SMART milestones to track strategic progress.",
        "Values act as non-negotiable behavioral boundaries and ethical guardrails.",
        "Clear purpose statements empower employees to make autonomous, aligned decisions."
      ],
      lessonSummary: "Lesson 2.3 unpacked the four foundational statements of strategic intent—Mission, Vision, Goals, and Values—demonstrating how they guide decisions, enforce trade-offs, and align organizations.",
      knowledgeCheck: [
        {
          id: "kc2-3-1",
          question: "Which foundational strategic statement defines an organization's PRESENT purpose, customer base, and core activities?",
          options: ["Vision Statement", "Mission Statement", "SMART Goal", "Exit Strategy"],
          correctIndex: 1,
          explanation: "The Mission statement defines what the organization does today, who it serves, and why it exists."
        },
        {
          id: "kc2-3-2",
          question: "What is the primary danger of writing vague, generic Core Values statements like 'We value integrity and excellence'?",
          options: [
            "They violate international corporate law",
            "They fail to provide actionable behavioral guidance when difficult trade-offs arise between ethics and short-term profit",
            "They make the company's stock price drop immediately",
            "They prevent the company from hiring accountants"
          ],
          correctIndex: 1,
          explanation: "Values only matter when they guide real behavior during conflicts; generic clichés offer zero operational guidance."
        }
      ],
      assignment: {
        title: "Foundational Strategic Charter Drafting",
        instructions: "Draft a complete Strategic Charter for your target company (or a venture you wish to launch): 1) Mission Statement (1-2 sentences), 2) Vision Statement (1 sentence), 3) Three SMART Goals for the upcoming year, and 4) Three Core Values with behavioral definitions.",
        expectedOutput: "A structured 1-page charter.",
        submissionRequirements: "Submit in your study notebook.",
        evaluationCriteria: [
          "Clear distinction between Mission and Vision (30%)",
          "SMART criteria satisfied across all 3 goals (40%)",
          "Behavioral clarity in Core Values (30%)"
        ]
      },
      furtherLearning: [
        "Explore John Doerr's 'Measure What Matters' for OKR methodology connecting strategy to goals"
      ]
    }
  ],
  moduleQuiz: [
    {
      id: "mq2-1",
      question: "Which of the following best captures the essence of Corporate Strategy?",
      options: [
        "Optimizing the PPC bidding algorithm on search engines",
        "Deciding which industries to enter, acquire, or divest, and how to allocate capital across business units",
        "Negotiating lower office supply prices with local vendors",
        "Selecting the color scheme for a new retail storefront"
      ],
      correctIndex: 1,
      explanation: "Corporate strategy is high-level portfolio management—deciding where to compete and allocating capital across units."
    },
    {
      id: "mq2-2",
      question: "When a manager states: 'We will increase revenue by 20% by cutting prices 15% and doubling advertising expenses,' what is missing from a strategic perspective?",
      options: [
        "A formal tax filing",
        "A sustainable economic rationale explaining how lower prices and higher costs create enduring competitive advantage and profit",
        "Approval from the local municipal government",
        "A new company logo"
      ],
      correctIndex: 1,
      explanation: "A strategy requires a coherent economic model showing how activities create sustainable value, not just aggressive volume goals."
    }
  ],
  moduleAssignment: {
    title: "Corporate Purpose & Strategic Level Audit",
    instructions: "Perform an executive audit of a real-world enterprise (e.g., Apple, Nike, Tesla, or your target company). Analyze its published Mission and Vision, map its corporate portfolio units, and evaluate how one specific unit executes its business-level strategy.",
    expectedOutput: "A 400-word executive briefing with structural breakdown.",
    submissionRequirements: "Submit as a markdown document.",
    evaluationCriteria: [
      "Rigorous critique of Mission and Vision (30%)",
      "Comprehensive corporate portfolio mapping (35%)",
      "Sharp analysis of business unit competitive positioning (35%)"
    ]
  }
};
