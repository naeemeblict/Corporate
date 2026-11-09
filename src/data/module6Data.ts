import { ModuleData } from '../types/course';

export const module6: ModuleData = {
  id: 6,
  moduleNumber: "Module 6",
  title: "Understanding the concept of competitive advantage",
  shortTitle: "Competitive Advantage & VRIO",
  description: "Examines the internal drivers of sustained business success. Covers internal decision-making, the Company Life Cycle Model, defining Competitive Advantage, barriers to imitation, the Resource-Based View (RBV), the VRIO framework, and Michael Porter's Value Chain activities.",
  importance: "Even in an attractive industry, companies with mediocre internal capabilities will underperform. Competitive advantage explains why certain firms consistently earn superior profits over their rivals by unlocking unique internal strengths.",
  learningObjectives: [
    "Explain how internal decision-making processes shape organizational capabilities",
    "Track a firm's progression through the Company Life Cycle Model (Startup, Growth, Maturity, Renewal/Decline)",
    "Define Competitive Advantage mathematically in terms of Economic Value Created (Willingness-to-Pay minus Cost)",
    "Evaluate internal Resources and Capabilities using the VRIO criteria (Value, Rarity, Inimitability, Organization)",
    "Analyze how primary and support activities in the Value Chain create competitive advantage"
  ],
  requiredKnowledge: "Modules 1 to 5.",
  skillsToDevelop: ["Company Life Cycle Auditing", "Economic Value Creation Modeling", "VRIO Resource Analysis", "Value Chain Activity Mapping"],
  expectedOutcomes: "Ability to evaluate a firm's internal strengths, identify true sources of sustainable advantage, and eliminate vulnerable, easily copied activities.",
  summary: "Sustainable competitive advantage arises from possessing valuable, rare, inimitable, and organized resources and capabilities, configured through an interlocking system of value chain activities.",
  lessons: [
    {
      id: "6.1",
      lessonNumber: "6.1",
      title: "Internal decision making",
      moduleId: 6,
      moduleTitle: "Understanding the concept of competitive advantage",
      estimatedMinutes: 35,
      originalVideoTime: "1 min",
      difficulty: "Beginner",
      priorKnowledge: "Module 5",
      learningObjectives: [
        "Explain how internal governance, culture, and decision-making architectures drive strategic performance",
        "Contrast top-down centralized decision-making with decentralized, autonomous execution",
        "Identify and mitigate common cognitive biases in executive decision-making"
      ],
      simpleIntro: "Up to this point, we have spent Modules 3, 4, and 5 looking outside the company at industries, forces, and rivals. Now, we step INSIDE the enterprise. Why do two companies in the exact same industry with identical access to capital perform completely differently? The answer begins with Internal Decision-Making.",
      detailedExplanation: {
        sections: [
          {
            heading: "How Decision Architecture Shapes Strategy",
            content: "Strategy is not just what an executive writes in an annual plan; it is the cumulative result of thousands of decisions made every day across the company.",
            bulletPoints: [
              "Centralized Architecture: Decisions flow strictly from the top executive suite. Ensures uniform compliance and tight cost control, but creates bottlenecks and slows adaptation to customer changes.",
              "Decentralized Architecture: Frontline managers and teams have autonomy to make strategic choices within defined guardrails. Enables rapid innovation and customer responsiveness, but requires strong cultural alignment to prevent drift."
            ]
          },
          {
            heading: "Mitigating Cognitive Biases in Strategic Decisions",
            content: "Executives frequently fall victim to three dangerous cognitive traps:",
            table: {
              headers: ["Cognitive Trap", "How It Distorts Strategy", "Executive Mitigation"],
              rows: [
                ["Sunk Cost Fallacy", "Pouring more cash into a failing product because 'we've already invested $10M in it.'", "Evaluate projects solely on future incremental cash flow and future returns, ignoring past unrecoverable spending."],
                ["Confirmation Bias", "Seeking out only customer feedback and market reports that confirm the CEO's favorite idea.", "Appoint a formal 'Red Team' whose explicit job is to find flaws in the proposed strategy."],
                ["Status Quo Bias", "Rejecting new business models because 'this is how our company has always done things.'", "Tie executive compensation to growth in new markets and customer satisfaction rather than legacy volume."]
              ]
            }
          }
        ]
      },
      diagram: {
        title: "Internal Decision-Making Architecture",
        description: "How governance and cultural norms filter strategic inputs into operational choices.",
        type: "flow",
        items: [
          { label: "Market Opportunity", sublabel: "External signal received" },
          { label: "Governance Architecture", sublabel: "Centralized vs. Agile filters", highlight: true },
          { label: "Bias Mitigation", sublabel: "Red Team & Sunk Cost checks" },
          { label: "Strategic Commitment", sublabel: "Resource allocation executed" }
        ]
      },
      examples: [
        {
          type: "Historical",
          title: "The Fall of Blockbuster's Internal Decision-Making",
          narrative: "When Netflix was a tiny DVD mail startup, Blockbuster's internal decision-making was dominated by the fact that late fees generated roughly $800M in annual revenue—nearly 16% of total revenue. Because store managers and executives were evaluated and bonused on late fee revenues, internal decision-makers repeatedly rejected moving to a subscription model without late fees, protecting short-term departmental bonuses while opening the door for Netflix to destroy their business.",
          takeaway: "Internal incentive structures dictate whether leadership embraces or rejects disruptive strategies."
        }
      ],
      practicalApplication: {
        rule: "Align internal incentives directly with the strategic outcome you want to produce.",
        steps: [
          "Audit what your managers are actually measured and bonused on.",
          "If you want cross-department collaboration, stop rewarding individual department cost silos.",
          "Establish an independent review process for major capital allocations to eliminate confirmation bias."
        ]
      },
      stepByStepPractice: {
        whatToDo: "Diagnose an internal decision-making failure in a manufacturing firm.",
        whyToDoIt: "Sharpens organizational diagnosis.",
        howToDoIt: [
          "Case: The sales team is bonused on gross revenue; operations is bonused on low unit cost. Sales offers custom product features with no upcharge to close deals; operations refuses to customize machines.",
          "Diagnosis: Misaligned internal incentives create departmental gridlock.",
          "Solution: Bonus both teams on Gross Profit Margin and On-Time Order Delivery."
        ],
        expectedResult: "Alignment of internal decisions with enterprise profitability.",
        commonMistakes: "Blaming individual employees for poor decisions when the incentive system is flawed.",
        correction: "Fix the organizational system and measurement architecture first."
      },
      keyTakeaways: [
        "Internal decision-making determines how effectively strategy is translated into daily action.",
        "Centralized and decentralized structures offer trade-offs between control and agility.",
        "Sunk cost fallacy and confirmation bias are major cognitive threats to strategic discipline.",
        "Incentive systems must be aligned with enterprise strategic goals."
      ],
      lessonSummary: "Lesson 6.1 introduced the internal perspective on competitive advantage, examining how organizational architecture, incentive systems, and cognitive bias mitigation shape corporate execution.",
      knowledgeCheck: [
        {
          id: "kc6-1-1",
          question: "When a company continues funding an unprofitable, failing division simply because it already spent $25M building the factory three years ago, which cognitive bias is driving internal decision-making?",
          options: ["Network Effect Bias", "The Sunk Cost Fallacy", "Pareto Efficiency", "Hyperbolic Discounting"],
          correctIndex: 1,
          explanation: "The sunk cost fallacy occurs when past unrecoverable investments dictate future resource allocations rather than future profit potential."
        }
      ],
      assignment: {
        title: "Internal Decision-Making & Bias Audit",
        instructions: "Analyze an internal decision-making process at your target company (or a past employer). Identify one organizational incentive or cognitive bias that currently helps or hinders strategic execution. Propose a specific structural fix.",
        expectedOutput: "A 150-word diagnostic brief.",
        submissionRequirements: "Submit in your study notebook.",
        evaluationCriteria: ["Accurate identification of organizational bias/incentive (50%)", "Actionable structural fix (50%)"]
      },
      furtherLearning: ["Read 'Thinking, Fast and Slow' by Daniel Kahneman on decision heuristics and biases"]
    },
    {
      id: "6.2",
      lessonNumber: "6.2",
      title: "Introducing the company life cycle model",
      moduleId: 6,
      moduleTitle: "Understanding the concept of competitive advantage",
      estimatedMinutes: 50,
      originalVideoTime: "6 min",
      difficulty: "Beginner to Intermediate",
      priorKnowledge: "Lesson 6.1",
      learningObjectives: [
        "Track a firm's internal evolution through the Company Life Cycle Model: Startup/Infancy, Growth, Maturity, and Decline/Renewal",
        "Distinguish between the Industry Life Cycle (macro market) and the Company Life Cycle (micro firm)",
        "Identify organizational crises that occur at each stage of company growth (e.g., leadership crisis, autonomy crisis, red tape crisis)"
      ],
      simpleIntro: "Just as industries evolve through life cycles (Module 3), individual companies also grow, age, and either reinvent themselves or decline. A nimble 5-person startup operates completely differently from a 50,000-employee global corporation. The Company Life Cycle Model maps this internal journey.",
      detailedExplanation: {
        sections: [
          {
            heading: "Industry Life Cycle vs. Company Life Cycle",
            content: "It is crucial to understand the difference between the two models:",
            table: {
              headers: ["Dimension", "Industry Life Cycle (Module 3)", "Company Life Cycle (Module 6)"],
              rows: [
                ["Unit of Analysis", "The entire external industry (all competing firms combined).", "One single internal firm or enterprise."],
                ["Driver of Evolution", "Underlying technology adoption, demographic shifts, regulation.", "Internal organizational size, culture, management systems, and revenue growth."],
                ["Crucial Insight", "A brand-new startup company (Company Infancy) can enter a 100-year-old mature industry (e.g., Tesla entering the mature automotive industry)."]
              ]
            }
          },
          {
            heading: "The Four Stages and Internal Crises of the Company Life Cycle",
            content: "As pioneered by Larry Greiner and corporate life cycle theorists, as a company expands, it hits predictable internal organizational crises:",
            table: {
              headers: ["Company Stage", "Core Focus & Characteristics", "The Internal Crisis Encountered"],
              rows: [
                ["1. Startup / Infancy", "Founders create product and hunt for product-market fit; informal communication.", "Crisis of Leadership: Founders are great engineers/inventors but lack formal managerial skills as headcount passes 30."],
                ["2. Rapid Growth", "Formal management installed, sales explode, functional departments emerge.", "Crisis of Autonomy: Founders micromanage; middle managers need authority to act without waiting weeks for approval."],
                ["3. Maturity / Bureaucracy", "Processes standardized, complex reporting lines, focus on stability and efficiency.", "Crisis of Red Tape: Systems become so bureaucratic and risk-averse that innovation stalls, frustrating top talent."],
                ["4. Decline or Renewal", "Revenues stagnate, corporate politics dominate, talent departs.", "Crisis of Relevance: The firm must execute radical renewal (re-entrepreneurship) or face terminal decline/acquisition."]
              ]
            }
          }
        ]
      },
      diagram: {
        title: "The Company Life Cycle Growth & Renewal Curve",
        description: "Organizational evolution and the branch between bureaucracy and strategic renewal.",
        type: "timeline",
        items: [
          { label: "1. Startup / Infancy", sublabel: "Informal, founder-driven" },
          { label: "2. Rapid Growth", sublabel: "Formalization & scaling" },
          { label: "3. Mature Enterprise", sublabel: "Standardization & red tape" },
          { label: "4. Renewal OR Decline", sublabel: "Re-invention vs. Obsolescence", highlight: true }
        ]
      },
      examples: [
        {
          type: "Historical",
          title: "Apple's Near-Death Decline and Strategic Renewal",
          narrative: "By 1996, Apple was in the Decline stage of its company life cycle: bogged down with dozens of confusing, bureaucratic Macintosh computer models, losing hundreds of millions of dollars, and weeks from bankruptcy. When Steve Jobs returned in 1997, he slashed 70% of the product line, re-instituted startup agility, and ignited a dramatic Renewal phase that produced the iMac, iPod, and iPhone.",
          takeaway: "Mature or declining firms can achieve corporate renewal by cutting bureaucratic complexity and re-centering on core strategic focus."
        }
      ],
      practicalApplication: {
        rule: "Diagnose your company's life cycle stage to install the right management systems.",
        steps: [
          "If you are in Infancy: Hire an experienced operating manager before the Leadership Crisis breaks the team.",
          "If you are in Growth: Delegate decision-making authority to middle managers before you become the bottleneck.",
          "If you are in Mature Bureaucracy: Create internal autonomous innovation units to bypass corporate red tape."
        ]
      },
      stepByStepPractice: {
        whatToDo: "Diagnose the company life cycle stage of a high-growth tech scale-up.",
        whyToDoIt: "Prepares managers for organizational scaling hurdles.",
        howToDoIt: [
          "Symptoms: Company has grown from 20 to 180 employees in 18 months; the CEO insists on approving every marketing tweet and hiring decision; projects are delayed by 6 weeks waiting for founder signatures.",
          "Diagnosis: Growth Stage experiencing the 'Crisis of Autonomy.'",
          "Solution: Establish clear delegation matrices and functional leadership."
        ],
        expectedResult: "Restoration of organizational agility and team morale.",
        commonMistakes: "Treating organizational scaling problems as personal character flaws.",
        correction: "Recognize that these crises are predictable milestones in corporate evolution."
      },
      keyTakeaways: [
        "The Company Life Cycle tracks a firm's internal organizational growth and evolution.",
        "A young company can enter an old mature industry, and vice versa.",
        "Growth creates predictable crises: Leadership, Autonomy, Red Tape, and Relevance.",
        "Mature companies must actively pursue strategic renewal to avoid terminal decline."
      ],
      lessonSummary: "Lesson 6.2 presented the Company Life Cycle Model, distinguishing firm evolution from industry evolution and illustrating how organizations navigate the internal crises of leadership, scaling, bureaucracy, and renewal.",
      knowledgeCheck: [
        {
          id: "kc6-2-1",
          question: "Can a startup company in the 'Infancy' stage of its Company Life Cycle enter an industry that is currently in the 'Maturity' stage of the Industry Life Cycle?",
          options: [
            "No, it is mathematically impossible",
            "Yes; for example, Tesla was an infant startup when it entered the 100-year-old mature automotive industry",
            "Only if approved by the World Trade Organization",
            "Only in non-profit sectors"
          ],
          correctIndex: 1,
          explanation: "The company life cycle applies to the firm's internal organization, while the industry life cycle applies to the overall market; startups regularly enter mature markets with disruptive models."
        }
      ],
      assignment: {
        title: "Company Life Cycle Diagnosis",
        instructions: "Evaluate your target company's current stage in the Company Life Cycle (Startup, Growth, Maturity, or Decline/Renewal). Describe its current organizational symptoms and identify what internal crisis it must overcome to reach the next stage.",
        expectedOutput: "A 200-word organizational diagnostic.",
        submissionRequirements: "Submit in your study notebook.",
        evaluationCriteria: ["Accurate stage diagnosis (50%)", "Nuanced internal crisis analysis (50%)"]
      },
      furtherLearning: ["Read Larry Greiner's classic HBR article 'Evolution and Revolution as Organizations Grow'"]
    },
    {
      id: "6.3",
      lessonNumber: "6.3",
      title: "What is a competitive advantage and why companies need it",
      moduleId: 6,
      moduleTitle: "Understanding the concept of competitive advantage",
      estimatedMinutes: 40,
      originalVideoTime: "3 min",
      difficulty: "Beginner to Intermediate",
      priorKnowledge: "Lesson 6.2",
      learningObjectives: [
        "Define Competitive Advantage mathematically in terms of Economic Value Created",
        "Explain the formula: Economic Value Created = Willingness to Pay (WTP) minus Cost (C)",
        "Analyze how competitive advantage enables sustainable, above-average profitability"
      ],
      simpleIntro: "What does 'competitive advantage' really mean? It is not just having a cool logo or nice employees. In corporate strategy, Competitive Advantage has a rigorous economic definition: It is the ability of a firm to generate a wider wedge between what customers are willing to pay and the costs it incurs than its competitors can.",
      detailedExplanation: {
        sections: [
          {
            heading: "The Economic Foundation of Competitive Advantage",
            content: "Every business transaction involves three economic values:",
            bulletPoints: [
              "1. Willingness to Pay (WTP): The maximum dollar amount a customer would willingly pay for a product or service based on its perceived value.",
              "2. Price (P): The actual dollar amount the customer pays.",
              "3. Cost (C): The total economic cost incurred by the firm to produce and deliver that unit.",
              "Economic Value Created (EVC) = WTP - C. The wider this total wedge, the greater the economic value produced."
            ]
          },
          {
            heading: "How Value Is Divided: Consumer Surplus vs. Producer Margin",
            content: "The economic wedge (WTP - C) is divided into two distinct parts:",
            table: {
              headers: ["Component", "Formula", "Strategic Role"],
              rows: [
                ["Consumer Surplus", "WTP - P", "The value the customer receives above what they actually paid. Drives customer delight, loyalty, and brand preference."],
                ["Producer Margin (Profit)", "P - C", "The profit the firm captures on each unit sold. Funds dividends, R&D, and expansion."],
                ["Total Economic Value Created", "(WTP - P) + (P - C) = WTP - C", "A firm with a Competitive Advantage creates a LARGER total gap (WTP - C) than its industry competitors."]
              ]
            }
          }
        ]
      },
      diagram: {
        title: "The Economic Value Creation Wedge",
        description: "How Willingness-to-Pay, Price, and Cost divide into Consumer Surplus and Profit.",
        type: "comparison",
        items: [
          { label: "Willingness to Pay (WTP)", sublabel: "Maximum Perceived Value" },
          { label: "Price (P)", sublabel: "Actual Market Price Charged" },
          { label: "Consumer Surplus (WTP - P)", sublabel: "Customer Delight / Incentive to Buy", highlight: true },
          { label: "Producer Margin (P - C)", sublabel: "Firm Economic Profit", highlight: true },
          { label: "Cost (C)", sublabel: "Unit Production & Delivery Cost" }
        ]
      },
      examples: [
        {
          type: "Real-World Industry",
          title: "Apple iPhone vs. Generic Android Smartphone",
          narrative: "A generic Android phone costs $180 to manufacture and customers have a WTP of $300. Value created = $120. Apple manufactures an iPhone for $350, but because of its iOS ecosystem, design, security, and brand prestige, customer WTP is $1,100! Value created = $750. Apple's massive competitive advantage comes from driving WTP far higher than its incremental cost increase, allowing it to capture over 80% of global smartphone industry profits.",
          takeaway: "Competitive advantage is about creating the largest wedge between perceived value and production cost."
        }
      ],
      practicalApplication: {
        rule: "To increase your competitive advantage, you must either drive WTP up faster than costs, or drive costs down without destroying WTP.",
        steps: [
          "Audit customer WTP: What specific features or service assurances would make buyers pay 20% more?",
          "Audit unit costs: Which operational activities add cost without increasing customer WTP? Eliminate them!",
          "Ensure your (WTP - C) gap is demonstrably larger than your top two rivals."
        ]
      },
      stepByStepPractice: {
        whatToDo: "Calculate Economic Value Created for two competing software firms.",
        whyToDoIt: "Masters quantitative value wedge analysis.",
        howToDoIt: [
          "Firm A: WTP = $1,000, Price = $700, Cost = $400. Total Value Created = $600 ($300 consumer surplus + $300 profit).",
          "Firm B: WTP = $600, Price = $500, Cost = $450. Total Value Created = $150 ($100 consumer surplus + $50 profit).",
          "Conclusion: Firm A holds a massive competitive advantage of $450 per customer."
        ],
        expectedResult: "Objective proof of competitive advantage.",
        commonMistakes: "Assuming high price alone proves competitive advantage.",
        correction: "A high price means nothing if costs are equally high; competitive advantage requires a wider GAP between WTP and Cost."
      },
      keyTakeaways: [
        "Competitive Advantage is the ability to generate a wider wedge (WTP - C) than competitors.",
        "Willingness to Pay (WTP) minus Price equals Consumer Surplus.",
        "Price minus Cost equals Firm Profit.",
        "Sustained advantage generates superior Return on Invested Capital over time."
      ],
      lessonSummary: "Lesson 6.3 established the economic definition of Competitive Advantage, illustrating how firms create economic value by expanding the gap between customer Willingness to Pay and unit costs.",
      knowledgeCheck: [
        {
          id: "kc6-3-1",
          question: "If Company X has a customer Willingness to Pay of $500 and a unit Cost of $200, while Competitor Y has a Willingness to Pay of $400 and a unit Cost of $250, which firm holds a competitive advantage?",
          options: [
            "Competitor Y",
            "Company X, because its Economic Value Created ($300) is significantly larger than Competitor Y's ($150)",
            "Neither, because price was not specified",
            "Both have identical competitive parity"
          ],
          correctIndex: 1,
          explanation: "Economic value created is WTP minus Cost. Company X generates $300 of value vs. Competitor Y's $150, giving Company X the competitive advantage."
        }
      ],
      assignment: {
        title: "Economic Value Wedge Audit",
        instructions: "Estimate the Willingness to Pay (WTP), typical market Price (P), and estimated unit Cost (C) for your target company vs. its primary rival. Calculate the Total Economic Value Created for both and explain where your target company's advantage lies (higher WTP or lower Cost).",
        expectedOutput: "A 200-word analysis with data calculations.",
        submissionRequirements: "Submit in your study notebook.",
        evaluationCriteria: ["Accurate WTP, P, C estimates (50%)", "Correct value wedge calculations and interpretation (50%)"]
      },
      furtherLearning: ["Read 'Creating Competitive Advantage' by Pankaj Ghemawat and Jan Rivkin"]
    },
    {
      id: "6.4",
      lessonNumber: "6.4",
      title: "Acquiring a sustainable competitive advantage",
      moduleId: 6,
      moduleTitle: "Understanding the concept of competitive advantage",
      estimatedMinutes: 45,
      originalVideoTime: "3 min",
      difficulty: "Intermediate",
      priorKnowledge: "Lesson 6.3",
      learningObjectives: [
        "Explain what makes a competitive advantage 'Sustainable' over long time horizons",
        "Identify the four major Barriers to Imitation (Isolating Mechanisms)",
        "Apply the VRIO Framework (Value, Rarity, Inimitability, Organization) to test sustainability"
      ],
      simpleIntro: "Having a competitive advantage for three months is nice; having one that lasts for twenty years makes you a legend. In business, competitors are constantly watching, reverse-engineering, and copying whatever works. In this lesson, we study what makes an advantage SUSTAINABLE against aggressive imitation.",
      detailedExplanation: {
        sections: [
          {
            heading: "What Makes an Advantage 'Sustainable'?",
            content: "A competitive advantage is Sustainable if it persists over an extended period despite concerted efforts by rivals to duplicate or neutralize it. Sustainability requires Isolating Mechanisms—barriers that prevent rivals from copying your strengths.",
            bulletPoints: [
              "Temporary Advantage: A clever marketing stunt, a new feature, or a temporary price cut. Rivals copy it in weeks.",
              "Sustainable Advantage: Deeply embedded organizational capabilities, network effects, or proprietary intellectual property that rivals cannot duplicate without years of effort and immense capital."
            ]
          },
          {
            heading: "The Four Major Barriers to Imitation (Isolating Mechanisms)",
            content: "Why can't competitors simply copy your successful formula?",
            table: {
              headers: ["Barrier to Imitation", "Mechanism", "Real-World Example"],
              rows: [
                ["1. Path Dependency", "Capabilities accumulated through a unique historical journey that cannot be bought off the shelf or accelerated.", "Decades of Toyota production system refinement and supplier trust."],
                ["2. Causal Ambiguity", "Rivals cannot pinpoint the exact cause of your success because it arises from thousands of subtle, interdependent cultural and operational practices.", "Southwest Airlines' fun, rapid-turnaround employee culture."],
                ["3. Social Complexity", "Interpersonal relationships, trust, and shared values among teams and partners that cannot be artificially engineered.", "Pixar's creative collaborative studio culture."],
                ["4. Legal / IP Protection", "Patents, trademarks, copyrights, and government licenses.", "Patented pharmaceutical molecular compounds (e.g., Keytruda)."]
              ]
            }
          },
          {
            heading: "The VRIO Framework (Jay Barney)",
            content: "To test whether an internal resource or capability provides a sustainable competitive advantage, evaluate it across four questions:",
            bulletPoints: [
              "V - Is it VALUABLE? (Does it exploit an external opportunity or neutralize a threat?) If No -> Competitive Disadvantage.",
              "R - Is it RARE? (Is it controlled by only a small number of firms?) If No -> Competitive Parity (standard baseline).",
              "I - Is it costly to IMITATE? (Do rivals face severe cost or friction copying it?) If No -> Temporary Competitive Advantage.",
              "O - Is the firm ORGANIZED to capture value? (Do management systems and structure exploit the resource?) If Yes -> SUSTAINED COMPETITIVE ADVANTAGE!"
            ]
          }
        ]
      },
      diagram: {
        title: "The VRIO Strategic Decision Tree",
        description: "The sequential evaluation to verify sustainable competitive advantage.",
        type: "flow",
        items: [
          { label: "Valuable?", sublabel: "No = Disadvantage" },
          { label: "Rare?", sublabel: "No = Competitive Parity" },
          { label: "Costly to Imitate?", sublabel: "No = Temporary Advantage" },
          { label: "Organized to Capture?", sublabel: "YES = SUSTAINED ADVANTAGE!", highlight: true }
        ]
      },
      examples: [
        {
          type: "Case Study",
          title: "VRIO Analysis of Tesla's Supercharger Network",
          narrative: "Tesla's proprietary high-speed global charging network was: 1) Valuable (eliminated range anxiety for EV buyers), 2) Rare (no rival automaker possessed one), 3) Costly to Imitate (required a decade of securing thousands of municipal grid permits, transformer installations, and billions in CapEx), and 4) Organized (seamless vehicle software integration and plug-and-charge billing). For over a decade, this capability provided Tesla with a sustained competitive advantage.",
          takeaway: "Resources that pass all four VRIO criteria create deep, defensible competitive moats."
        }
      ],
      practicalApplication: {
        rule: "Subject your company's core strengths to the VRIO stress test annually.",
        steps: [
          "List your top 3 purported strengths.",
          "Ask: Can a well-funded rival hire our key engineers or buy this software tomorrow?",
          "If yes, it is not Imitation-resistant; you only hold a Temporary Advantage.",
          "Invest in path-dependent capabilities and social complexity to protect your moat."
        ]
      },
      stepByStepPractice: {
        whatToDo: "Run a VRIO audit on a retail company's automated warehouse system.",
        whyToDoIt: "Differentiates between commercial technology and proprietary capability.",
        howToDoIt: [
          "Valuable? Yes (cuts picking costs by 30%).",
          "Rare? No, because any rival can buy the exact same robots and software from the vendor.",
          "Conclusion: Competitive Parity. It is necessary for operational survival, but confers zero sustainable competitive advantage."
        ],
        expectedResult: "Accurate identification of competitive parity.",
        commonMistakes: "Assuming that buying expensive commercial technology creates a sustainable advantage.",
        correction: "If rivals can buy the same technology from the same vendors, it cannot be rare or costly to imitate."
      },
      keyTakeaways: [
        "A competitive advantage is sustainable only if protected by Barriers to Imitation.",
        "Isolating mechanisms include Path Dependency, Causal Ambiguity, Social Complexity, and Patents.",
        "The VRIO framework tests for Value, Rarity, Inimitability, and Organizational readiness.",
        "Off-the-shelf commercial purchases create competitive parity, not sustained advantage."
      ],
      lessonSummary: "Lesson 6.4 unpacked the sustainability of competitive advantage, exploring isolating mechanisms (path dependency, causal ambiguity) and providing complete training on Jay Barney's VRIO framework.",
      knowledgeCheck: [
        {
          id: "kc6-4-1",
          question: "Under the VRIO framework, what competitive result occurs when a company's resource is Valuable and Rare, but EASY for competitors to imitate within three months?",
          options: [
            "Sustained Competitive Advantage",
            "Competitive Disadvantage",
            "Temporary Competitive Advantage",
            "Pure Monopoly"
          ],
          correctIndex: 2,
          explanation: "Without barriers to imitation (I), rivals copy the resource quickly, turning an initial advantage into temporary gains that erode into parity."
        }
      ],
      assignment: {
        title: "VRIO Resource & Capability Audit",
        instructions: "Select two distinct resources or capabilities of your target company. Evaluate each across all four VRIO dimensions (Valuable, Rare, Inimitable, Organized). Conclude whether each resource yields Competitive Disadvantage, Parity, Temporary Advantage, or Sustained Competitive Advantage.",
        expectedOutput: "A structured VRIO table with a 200-word justification.",
        submissionRequirements: "Submit in your study notebook.",
        evaluationCriteria: ["Complete VRIO table for 2 resources (50%)", "Rigorous justification of inimitability (50%)"]
      },
      furtherLearning: ["Read Jay Barney's foundational paper 'Firm Resources and Sustained Competitive Advantage' (1991)"]
    },
    {
      id: "6.5",
      lessonNumber: "6.5",
      title: "The fundamental role of resources and capabilities",
      moduleId: 6,
      moduleTitle: "Understanding the concept of competitive advantage",
      estimatedMinutes: 45,
      originalVideoTime: "3 min",
      difficulty: "Intermediate",
      priorKnowledge: "Lesson 6.4",
      learningObjectives: [
        "Distinguish between Tangible Resources, Intangible Resources, and Organizational Capabilities",
        "Explain the Resource-Based View (RBV) of the firm",
        "Define Dynamic Capabilities and explain how they prevent core capabilities from becoming 'core rigidities'"
      ],
      simpleIntro: "What is the difference between owning a high-end kitchen and being a Michelin-starred chef? The kitchen is a Resource (what you have); the chef's culinary skill is a Capability (what you can do). In this lesson, we study the Resource-Based View (RBV) of strategy and discover why intangible capabilities are the hardest strengths for rivals to replicate.",
      detailedExplanation: {
        sections: [
          {
            heading: "The Resource-Based View (RBV)",
            content: "The Resource-Based View (RBV) argues that a firm's unique bundle of internal resources and capabilities is the primary determinant of sustained superior profitability, rather than external industry structure alone.",
            bulletPoints: [
              "Resource Heterogeneity: Different companies possess different bundles of resources, even within the same industry.",
              "Resource Immobility: Many resources and capabilities cannot easily migrate or be transferred between firms (e.g., corporate culture, brand reputation)."
            ]
          },
          {
            heading: "Categorizing Internal Assets: Resources vs. Capabilities",
            content: "Internal strengths fall into three distinct classes:",
            table: {
              headers: ["Category", "Definition", "Corporate Strategy Examples"],
              rows: [
                ["1. Tangible Resources", "Physical and financial assets that are easily observed, quantified, and valued on a balance sheet.", "Cash reserves, manufacturing plants, real estate, vehicle fleets."],
                ["2. Intangible Resources", "Non-physical assets accumulated over time; difficult for rivals to buy or measure directly.", "Brand equity, intellectual property (patents, trade secrets), customer trust."],
                ["3. Organizational Capabilities", "The firm's ability to coordinate and deploy resources through complex organizational routines and processes.", "Rapid new-product prototyping, lean supply chain management, customer onboarding."]
              ]
            }
          },
          {
            heading: "Dynamic Capabilities vs. Core Rigidities",
            content: "A strength today can become a weakness tomorrow:",
            bulletPoints: [
              "Dynamic Capabilities: The firm's ability to integrate, build, and reconfigure internal and external competences to address rapidly changing environments (David Teece).",
              "Core Rigidity: When a former core capability becomes outdated due to market shifts, but entrenched company politics and habit prevent the firm from changing (e.g., Kodak's mastery of chemical coating becoming a trap)."
            ]
          }
        ]
      },
      diagram: {
        title: "From Resources to Sustainable Advantage",
        description: "How tangible and intangible resources are orchestrated into dynamic capabilities.",
        type: "flow",
        items: [
          { label: "Tangible Assets", sublabel: "Cash, equipment, property" },
          { label: "Intangible Assets", sublabel: "Brands, patents, culture" },
          { label: "Capabilities", sublabel: "Orchestrated routines", highlight: true },
          { label: "Dynamic Adaptation", sublabel: "Reconfigured for new markets" }
        ]
      },
      examples: [
        {
          type: "Real-World Industry",
          title: "Toyota's Production System as an Organizational Capability",
          narrative: "In the 1980s, General Motors opened a joint-venture plant (NUMMI) with Toyota in California. GM owned the exact same tangible factory machines and hired the exact same union workforce. Yet Toyota achieved dramatically higher vehicle quality and productivity. Why? Because the advantage lay not in tangible machines, but in Toyota's intangible capability: the Kaizen continuous-improvement routines and frontline problem-solving culture embedded in its managers.",
          takeaway: "Organizational capabilities—how resources are orchestrated—are far more defensible than physical assets."
        }
      ],
      practicalApplication: {
        rule: "Prioritize investments in Intangible Resources and Capabilities over purely physical assets.",
        steps: [
          "Physical assets (factories, trucks, servers) can be leased by any competitor with bank financing.",
          "Capabilities (engineering culture, rapid experimentation, brand trust) cannot be bought off the shelf.",
          "Audit whether your company's historic capabilities have become 'core rigidities' in the digital era."
        ]
      },
      stepByStepPractice: {
        whatToDo: "Categorize five company assets into Tangible, Intangible, or Capability.",
        whyToDoIt: "Sharpens internal asset auditing skills.",
        howToDoIt: [
          "Asset 1: $500M cash in the bank -> Tangible Resource.",
          "Asset 2: The 'Coca-Cola' registered trademark -> Intangible Resource.",
          "Asset 3: A fleet of 1,000 delivery vans -> Tangible Resource.",
          "Asset 4: The ability to dispatch and route 1,000 vans with AI optimization in real time -> Organizational Capability.",
          "Asset 5: 45 registered pharmaceutical patents -> Intangible Resource."
        ],
        expectedResult: "100% accurate classification.",
        commonMistakes: "Confusing software code (an intangible resource) with the organizational capability of writing and deploying code.",
        correction: "A resource is what you *have*; a capability is what you *do*."
      },
      keyTakeaways: [
        "The Resource-Based View focuses on internal strengths as the root of competitive advantage.",
        "Resources are assets (what a firm has); capabilities are routines (what a firm can do).",
        "Intangible resources and capabilities are much harder for rivals to imitate than tangible assets.",
        "Dynamic capabilities allow a firm to reconfigure its strengths when the external environment changes."
      ],
      lessonSummary: "Lesson 6.5 differentiated Tangible Resources, Intangible Resources, and Organizational Capabilities within the Resource-Based View, demonstrating why dynamic routines create more durable advantages than physical assets.",
      knowledgeCheck: [
        {
          id: "kc6-5-1",
          question: "Which of the following is the best example of an ORGANIZATIONAL CAPABILITY (rather than a simple resource)?",
          options: [
            "A corporate headquarters office building in Chicago",
            "A checking account containing $10M in cash",
            "A company's systematic process for rapidly testing, refining, and launching new software features every two weeks",
            "A fleet of 50 delivery trucks"
          ],
          correctIndex: 2,
          explanation: "An organizational capability represents a coordinated routine or process of doing something, rather than a static physical or financial asset."
        }
      ],
      assignment: {
        title: "Enterprise Resource & Capability Inventory",
        instructions: "Catalog 5 key assets of your target company: 2 Tangible Resources, 2 Intangible Resources, and 1 core Organizational Capability. Explain which single asset among the five provides the strongest protection against rival imitation.",
        expectedOutput: "A 200-word inventory with comparative defense analysis.",
        submissionRequirements: "Submit in your study notebook.",
        evaluationCriteria: ["Accurate categorization across all 5 assets (60%)", "Insightful imitation defense analysis (40%)"]
      },
      furtherLearning: ["Read David Teece's 'Dynamic Capabilities and Strategic Management'"]
    },
    {
      id: "6.6",
      lessonNumber: "6.6",
      title: "Acquiring a competitive advantage",
      moduleId: 6,
      moduleTitle: "Understanding the concept of competitive advantage",
      estimatedMinutes: 40,
      originalVideoTime: "2 min",
      difficulty: "Intermediate",
      priorKnowledge: "Lessons 6.3 to 6.5",
      learningObjectives: [
        "Deconstruct Michael Porter's Value Chain Model into Primary and Support Activities",
        "Analyze how competitive advantage is acquired through activity-system configuration",
        "Formulate an activity-system map that reinforces your strategic position"
      ],
      simpleIntro: "You cannot acquire a competitive advantage by looking at a company as a broad general whole. You must break the business down into its specific activities—purchasing raw materials, assembling parts, shipping boxes, advertising to customers, and providing post-sale repair. Welcome to Michael Porter's Value Chain Model.",
      detailedExplanation: {
        sections: [
          {
            heading: "Michael Porter's Value Chain Architecture",
            content: "A firm's Value Chain is divided into two distinct categories: Primary Activities (physical creation and delivery) and Support Activities (infrastructure that enables primary operations).",
            table: {
              headers: ["Activity Category", "Specific Activity", "Strategic Function"],
              rows: [
                ["Primary Activity", "1. Inbound Logistics", "Receiving, storing, and distributing incoming raw materials."],
                ["Primary Activity", "2. Operations", "Transforming inputs into the final product (manufacturing, coding, assembly)."],
                ["Primary Activity", "3. Outbound Logistics", "Warehousing, order fulfillment, and shipping the finished goods to buyers."],
                ["Primary Activity", "4. Marketing & Sales", "Advertising, pricing, distribution channel management, and sales force."],
                ["Primary Activity", "5. Service", "Post-sale installation, warranty repair, customer support, and training."],
                ["Support Activity", "1. Procurement", "Purchasing inputs, negotiating contracts with vendors across all departments."],
                ["Support Activity", "2. Technology Development", "R&D, equipment design, software engineering, and process automation."],
                ["Support Activity", "3. Human Resource Mgmt", "Recruiting, hiring, training, and compensating talented personnel."],
                ["Support Activity", "4. Firm Infrastructure", "General management, legal, accounting, finance, and quality management."]
              ]
            }
          },
          {
            heading: "How Value Chain Linkages Create Advantage",
            content: "Advantage rarely comes from doing one activity in isolation; it comes from the linkages and fit across the value chain:",
            bulletPoints: [
              "Cost Advantage through Linkages: Designing a product to use fewer components (Technology Development) directly cuts manufacturing assembly time (Operations) and reduces spare parts inventory (Service).",
              "Differentiation through Linkages: Buying superior raw materials (Procurement) enables exceptional product durability (Operations), justifying premium pricing in Marketing."
            ]
          }
        ]
      },
      diagram: {
        title: "Porter's Value Chain Activity System",
        description: "Primary and support activities converging to generate enterprise profit margin.",
        type: "matrix",
        items: [
          { label: "Support: Firm Infra & HR", sublabel: "Governance, culture, talent" },
          { label: "Support: Tech & Procurement", sublabel: "R&D and vendor sourcing" },
          { label: "Primary: Logistics & Ops", sublabel: "Inbound, production, outbound" },
          { label: "Primary: Mktg & Service", sublabel: "Sales channels & customer care", highlight: true }
        ]
      },
      examples: [
        {
          type: "Real-World Industry",
          title: "Zara's Fast-Fashion Value Chain Linkages",
          narrative: "Inditex (Zara) acquires its massive competitive advantage by linking its Value Chain activities tightly: Store managers report real-time customer buying patterns daily (Marketing) -> In-house designers sketch new styles in 48 hours (Tech/R&D) -> Fabric is dyed in company-owned facilities in Spain (Operations) -> Automated logistics hubs ship finished dresses to any store in Europe within 24 hours (Outbound Logistics). This allows Zara to move from sketch to store in 15 days, minimizing inventory markdowns.",
          takeaway: "Tightly coupled value chain activities create an interlocking system that competitors cannot easily copy."
        }
      ],
      practicalApplication: {
        rule: "Map your firm's activity system to ensure every link reinforces your core strategic positioning.",
        steps: [
          "List each of your 5 primary value chain activities.",
          "Identify how information or cost savings in one activity directly assist another activity.",
          "Eliminate activities that do not contribute to either lowering cost or elevating customer WTP."
        ]
      },
      stepByStepPractice: {
        whatToDo: "Trace how a tech company's customer support (Service) links back to product engineering (Technology Development).",
        whyToDoIt: "Validates value chain linkage analysis.",
        howToDoIt: [
          "Service logs the top 5 software bugs encountered by users every week.",
          "Technology Development automatically prioritizes those 5 bug fixes in the next development sprint.",
          "Result: Inbound customer support tickets drop 40% next month, cutting support costs and elevating user satisfaction (WTP)."
        ],
        expectedResult: "Cross-functional value chain optimization.",
        commonMistakes: "Viewing departments as isolated silos with zero operational connection.",
        correction: "Always look for the operational linkages between upstream and downstream activities."
      },
      keyTakeaways: [
        "Competitive advantage is acquired at the activity level within the firm's Value Chain.",
        "The Value Chain consists of 5 Primary Activities and 4 Support Activities.",
        "True advantage arises from the linkages and strategic fit across activities.",
        "An interlocking activity system is virtually impossible for rivals to duplicate piecemeal."
      ],
      lessonSummary: "Lesson 6.6 concluded Module 6 by deconstructing Michael Porter's Value Chain Model, demonstrating how primary and support activities link together to generate superior economic margins.",
      knowledgeCheck: [
        {
          id: "kc6-6-1",
          question: "In Michael Porter's Value Chain Model, which of the following is classified as a SUPPORT ACTIVITY?",
          options: [
            "Inbound Logistics",
            "Operations and Assembly",
            "Technology Development (R&D)",
            "Outbound Logistics"
          ],
          correctIndex: 2,
          explanation: "Technology Development (R&D) is a Support Activity that underpins and enhances all primary operations across the enterprise."
        }
      ],
      assignment: {
        title: "Target Company Value Chain Mapping",
        instructions: "Deconstruct your target company's business model across Porter's Value Chain. 1) Identify its most critical Primary Activity and its most critical Support Activity. 2) Describe one powerful linkage between them that drives either cost reduction or premium differentiation.",
        expectedOutput: "A 200-word activity system analysis.",
        submissionRequirements: "Submit in your study notebook.",
        evaluationCriteria: ["Accurate value chain classification (50%)", "Compelling linkage analysis (50%)"]
      },
      furtherLearning: ["Read Michael Porter's 'Competitive Advantage: Creating and Sustaining Superior Performance' (Chapter 2)"]
    }
  ],
  moduleQuiz: [
    {
      id: "mq6-1",
      question: "Which of the following conditions is required for an internal capability to generate a SUSTAINED (long-term) competitive advantage under the VRIO framework?",
      options: [
        "It must be cheap and easily purchased in the open market",
        "It must be Valuable, Rare, Costly to Imitate, and the firm must be Organized to capture value",
        "It must be patented in at least 150 countries",
        "It must generate immediate accounting profits in week one"
      ],
      correctIndex: 1,
      explanation: "All four VRIO criteria (Value, Rarity, Inimitability, Organization) must be satisfied simultaneously for sustained competitive advantage."
    },
    {
      id: "mq6-2",
      question: "Why are Intangible Resources and Organizational Capabilities typically more defensible sources of advantage than Tangible Physical Assets?",
      options: [
        "Because physical assets pay higher taxes",
        "Because tangible assets (like machines or trucks) can be purchased by any well-funded rival, whereas complex culture, brand trust, and collaborative routines are difficult to observe and duplicate",
        "Because banks refuse to finance physical equipment",
        "There is no difference"
      ],
      correctIndex: 1,
      explanation: "Physical assets are commercially tradeable; organizational capabilities are socially complex, path-dependent, and casually ambiguous, making them hard to copy."
    }
  ],
  moduleAssignment: {
    title: "Comprehensive Internal Capability & VRIO Audit",
    instructions: "Perform a thorough internal audit of your target enterprise. 1) Map its Company Life Cycle stage and identify its core organizational hurdle. 2) Construct a 4-row VRIO matrix evaluating 4 of its key resources/capabilities. 3) Select its highest-performing capability and trace how it operates across its Value Chain activities to generate superior economic value.",
    expectedOutput: "A 500-word structured diagnostic report with VRIO table.",
    submissionRequirements: "Submit as a markdown document.",
    evaluationCriteria: [
      "Rigorous Company Life Cycle evaluation (25%)",
      "Complete, accurate 4-row VRIO matrix (40%)",
      "Nuanced Value Chain linkage analysis (35%)"
    ]
  }
};
