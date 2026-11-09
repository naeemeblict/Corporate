import { ModuleData } from '../types/course';

export const module3: ModuleData = {
  id: 3,
  moduleNumber: "Module 3",
  title: "The industry life cycle model",
  shortTitle: "Industry Life Cycle",
  description: "Examines the evolutionary trajectory of industries across four distinct stages: Introduction, Growth, Maturity, and Decline. Teaches how demand, unit economics, competitor count, and strategic priorities evolve over time.",
  importance: "Applying a growth-stage strategy in a mature or declining market leads to catastrophic overcapacity and bankruptcy. Executives must align investments with their industry's life cycle stage.",
  learningObjectives: [
    "Identify and sequence the four stages of the Industry Life Cycle",
    "Explain why practitioners must diagnose an industry's stage before committing capital",
    "Analyze demand patterns, customer types, unit costs, and rivalry in Introduction, Growth, Maturity, and Decline",
    "Select stage-appropriate strategies: R&D in Introduction, Capacity Scaling in Growth, Process Efficiency in Maturity, and Harvest/Niche in Decline"
  ],
  requiredKnowledge: "Modules 1 and 2.",
  skillsToDevelop: ["Industry Life Cycle Stage Diagnosis", "Market Saturation Analysis", "Stage-Aligned Strategic Planning"],
  expectedOutcomes: "Ability to accurately diagnose any industry's current life cycle phase and adjust product, marketing, and CapEx decisions accordingly.",
  summary: "Industries follow an S-curve lifecycle. Understanding whether an industry is in Introduction, Growth, Maturity, or Decline dictates whether capital should be invested in product innovation, scale expansion, cost control, or harvesting.",
  lessons: [
    {
      id: "3.1",
      lessonNumber: "3.1",
      title: "Introducing the industry life cycle model",
      moduleId: 3,
      moduleTitle: "The industry life cycle model",
      estimatedMinutes: 35,
      originalVideoTime: "3 min",
      difficulty: "Beginner",
      priorKnowledge: "Module 2",
      learningObjectives: [
        "Define an Industry and explain the theoretical foundation of the Industry Life Cycle Model",
        "Sequence the four evolutionary stages: Introduction, Growth, Maturity, and Decline",
        "Distinguish between a single Product Life Cycle and an entire Industry Life Cycle"
      ],
      simpleIntro: "Just like living organisms, industries are born, grow rapidly, mature, and eventually decline. What worked yesterday in a young market will fail in a mature one. The Industry Life Cycle Model gives us the timeline of industry evolution.",
      detailedExplanation: {
        sections: [
          {
            heading: "What Is an Industry?",
            content: "An Industry is a group of competing companies offering products or services that serve as close substitutes for each other, satisfying the same core customer need (e.g., commercial airlines, electric vehicle manufacturing, cloud cybersecurity).",
            bulletPoints: [
              "Industry Scope: Must be defined carefully. 'Transportation' is too broad, whereas 'Electric Passenger Cars' represents a distinct, identifiable industry."
            ]
          },
          {
            heading: "The S-Curve of Industry Evolution",
            content: "When Total Industry Sales are plotted over Time, most industries trace an S-shaped curve through four phases:",
            table: {
              headers: ["Stage", "Primary Demand Dynamic", "Key Strategic Question"],
              rows: [
                ["1. Introduction", "Low sales volume, slow growth, early adopters testing technology.", "Can we establish a reliable, standardized dominant design?"],
                ["2. Growth", "Explosive sales acceleration, mass-market adoption, new entrants.", "Can we scale production and build brand loyalty fast enough?"],
                ["3. Maturity", "Saturated demand, replacement sales only, industry shakeout.", "Can we maximize operational efficiency and retain customer share?"],
                ["4. Decline", "Shrinking sales volume due to technological substitution.", "Should we harvest cash, serve a loyal niche, or divest early?"]
              ]
            }
          }
        ]
      },
      diagram: {
        title: "The Industry Life Cycle S-Curve",
        description: "Total sales volume trajectory across the four evolutionary stages.",
        type: "timeline",
        items: [
          { label: "1. Introduction", sublabel: "Low volume, high R&D" },
          { label: "2. Growth", sublabel: "Surging volume, high margins", highlight: true },
          { label: "3. Maturity", sublabel: "Peak volume, price competition" },
          { label: "4. Decline", sublabel: "Shrinking volume, substitution" }
        ]
      },
      examples: [
        {
          type: "Historical",
          title: "The Evolution of the Personal Computer Industry",
          narrative: "In the late 1970s, personal computers were in the Introduction stage (hobbyist kits like the Altair). In the 1980s-1990s, the IBM/Apple standards launched explosive Growth. By the 2000s, PCs entered Maturity (commodity boxes, price cuts, Dell/HP consolidation). Today, traditional desktop PCs face Decline as tablets and smartphones substitute daily computing tasks.",
          takeaway: "Industries progress predictably through stages as consumer behavior and technology mature."
        }
      ],
      practicalApplication: {
        rule: "Do not confuse a single product's life cycle with the entire industry's life cycle.",
        steps: [
          "Check the product: The iPhone 7 was discontinued in a few years (Product Life Cycle).",
          "Check the industry: The global smartphone industry has spanned nearly two decades and is currently mature.",
          "Strategic decisions must be anchored in the overall industry stage, not just one model's quarterly sales."
        ]
      },
      stepByStepPractice: {
        whatToDo: "Categorize four given industries into their current life cycle stage.",
        whyToDoIt: "Trains rapid environmental diagnosis.",
        howToDoIt: [
          "Evaluate: Commercial Quantum Computing -> Introduction Stage (unproven commercial viability, high R&D).",
          "Evaluate: Generative AI Enterprise SaaS -> Growth Stage (surging mainstream corporate adoption).",
          "Evaluate: Bottled Water & Soft Drinks -> Maturity Stage (saturated market, stable oligopolistic brands).",
          "Evaluate: Printed Daily Newspapers -> Decline Stage (steady migration to digital information)."
        ],
        expectedResult: "Accurate 4-stage categorization based on customer adoption and growth rates.",
        commonMistakes: "Assuming every industry moves through the cycle at the same pace. Cement can stay mature for centuries, while consumer tech moves in decades.",
        correction: "Analyze the underlying drivers of demand rather than arbitrary time limits."
      },
      keyTakeaways: [
        "The Industry Life Cycle tracks total industry demand and competitive dynamics across time.",
        "The four stages are Introduction, Growth, Maturity, and Decline.",
        "Industry stages determine capital expenditure requirements, marketing messages, and profit expectations."
      ],
      lessonSummary: "Lesson 3.1 introduced the Industry Life Cycle Model, outlining its S-curve progression across Introduction, Growth, Maturity, and Decline, and establishing the baseline for dynamic industry analysis.",
      knowledgeCheck: [
        {
          id: "kc3-1-1",
          question: "Which of the following correctly lists the four stages of the Industry Life Cycle in chronological order?",
          options: [
            "Growth, Introduction, Maturity, Decline",
            "Introduction, Growth, Maturity, Decline",
            "Introduction, Maturity, Growth, Decline",
            "Emergence, Saturation, Shakeout, Revival"
          ],
          correctIndex: 1,
          explanation: "Industries emerge through Introduction, accelerate through Growth, stabilize in Maturity, and eventually contract in Decline."
        }
      ],
      assignment: {
        title: "Stage Identification Matrix",
        instructions: "Identify one industry for each of the four life cycle stages within your country or region. Provide a 2-sentence empirical justification for each selection based on customer adoption trends.",
        expectedOutput: "A 4-part categorized table.",
        submissionRequirements: "Submit in your study notebook.",
        evaluationCriteria: ["Accurate identification across all 4 stages (100%)"]
      },
      furtherLearning: ["Explore the diffusion of innovations theory by Everett Rogers"]
    },
    {
      id: "3.2",
      lessonNumber: "3.2",
      title: "Here is why you need to know about the industry lifecycle model",
      moduleId: 3,
      moduleTitle: "The industry life cycle model",
      estimatedMinutes: 35,
      originalVideoTime: "2 min",
      difficulty: "Beginner",
      priorKnowledge: "Lesson 3.1",
      learningObjectives: [
        "Explain why strategy must match the life cycle stage to prevent strategic failure",
        "Describe how innovation shifts from Product Innovation to Process Innovation over time",
        "Analyze the shifting sources of sales growth across the life cycle"
      ],
      simpleIntro: "Wearing a winter coat in a desert summer will cause heatstroke. In business, applying a Growth strategy (massive capacity expansion) inside a Mature or Declining industry will cause bankruptcy. Here is why the life cycle model is essential.",
      detailedExplanation: {
        sections: [
          {
            heading: "Strategic Priorities Shift Across the Life Cycle",
            content: "Executives must adapt their investments as industries mature:",
            table: {
              headers: ["Dimension", "Early Life Cycle (Intro & Growth)", "Late Life Cycle (Maturity & Decline)"],
              rows: [
                ["Source of Growth", "First-time buyers entering the market.", "Stealing customer share from rivals or replacement purchases."],
                ["Innovation Focus", "Product Innovation: Creating unique features and technical designs.", "Process Innovation: Optimizing manufacturing, logistics, and unit costs."],
                ["Capacity Strategy", "Aggressive CapEx expansion to prevent stock-outs.", "Strict capacity discipline; rationalizing or closing underutilized plants."],
                ["Cash Flow", "Negative or highly reinvested; heavy capital requirements.", "Strong cash generation ('Cash Cows') or disciplined cash harvesting."]
              ]
            }
          }
        ]
      },
      diagram: {
        title: "Product vs. Process Innovation Shift",
        description: "How engineering and operational focus evolves across industry life cycle stages.",
        type: "comparison",
        items: [
          { label: "Introduction", sublabel: "Dominant: Product R&D" },
          { label: "Growth", sublabel: "Product & Process R&D" },
          { label: "Maturity", sublabel: "Dominant: Process Efficiency", highlight: true },
          { label: "Decline", sublabel: "Cost Minimization / Harvesting" }
        ]
      },
      examples: [
        {
          type: "Case Study",
          title: "The Fatal Misjudgment of DVD Rental Stores (2005-2010)",
          narrative: "In the mid-2000s, some physical DVD rental chains continued borrowing capital to build new brick-and-mortar stores, treating the industry as if it were still in Growth. In reality, the industry was rapidly entering Decline due to digital streaming. When demand collapsed, chains were saddled with massive store lease liabilities, leading to total bankruptcy.",
          takeaway: "Failing to recognize an industry's transition into decline turns capital investments into lethal liabilities."
        }
      ],
      practicalApplication: {
        rule: "Before signing off on any major capital expenditure (CapEx), audit the 3-year volume growth rate of the target industry.",
        steps: [
          "If industry volume growth is >15% CAGR, invest in capacity and customer acquisition.",
          "If industry volume growth is 0-3%, reject new capacity additions; invest strictly in automation and cost-cutting.",
          "If volume growth is negative, initiate harvesting or plan an orderly strategic exit."
        ]
      },
      stepByStepPractice: {
        whatToDo: "Audit a business proposal for life-cycle alignment.",
        whyToDoIt: "Prevents misallocating enterprise capital.",
        howToDoIt: [
          "Scenario: A traditional wired landline telephone manufacturer requests $50M to double factory size.",
          "Diagnosis: Wired telephones are in late Decline due to mobile substitution.",
          "Decision: Veto the proposal. Direct capital into cellular/VoIP communications or return funds to shareholders."
        ],
        expectedResult: "Avoidance of catastrophic overcapacity.",
        commonMistakes: "Believing that clever marketing can reverse macro industry decline.",
        correction: "Recognize that technological substitution is driven by customer preference and cannot be reversed by advertising."
      },
      keyTakeaways: [
        "Matching strategy to life cycle stage is non-negotiable for enterprise survival.",
        "Early stages demand product innovation; late stages demand process and cost innovation.",
        "In maturity, sales growth comes from stealing market share rather than market expansion."
      ],
      lessonSummary: "Lesson 3.2 highlighted why practitioners must understand the Industry Life Cycle, explaining the shift from product to process innovation and how capital allocation must adapt to market realities.",
      knowledgeCheck: [
        {
          id: "kc3-2-1",
          question: "When an industry matures, where does a company's primary innovation focus typically shift?",
          options: [
            "From process innovation to basic scientific research",
            "From product innovation (new features) to process innovation (manufacturing and cost efficiency)",
            "To eliminating all customer service",
            "To increasing factory wages by 100%"
          ],
          correctIndex: 1,
          explanation: "In mature industries, products become standardized, shifting the competitive battleground to cost reduction and operational process optimization."
        }
      ],
      assignment: {
        title: "Capital Allocation Life Cycle Review",
        instructions: "Write a 150-word executive briefing on your target company's industry. State its current life cycle phase and explain whether its current R&D and capital expenditure align with that phase.",
        expectedOutput: "A 150-word strategic audit memo.",
        submissionRequirements: "Submit in your course notebook.",
        evaluationCriteria: ["Stage alignment accuracy (50%)", "Logical CapEx critique (50%)"]
      },
      furtherLearning: ["Read 'Crossing the Chasm' by Geoffrey Moore on technology adoption lifecycles"]
    },
    {
      id: "3.3",
      lessonNumber: "3.3",
      title: "The introduction stage",
      moduleId: 3,
      moduleTitle: "The industry life cycle model",
      estimatedMinutes: 45,
      originalVideoTime: "5 min",
      difficulty: "Beginner to Intermediate",
      priorKnowledge: "Lessons 3.1 and 3.2",
      learningObjectives: [
        "Detail the characteristics of the Introduction Stage: low demand, early adopters, high unit costs, negative cash flow",
        "Explain the battle to establish a 'Dominant Design'",
        "Formulate surviving and winning strategies for pioneering firms"
      ],
      simpleIntro: "Every technological giant—from automobiles to personal computers to generative AI—began in the fragile Introduction stage. In this lesson, we study what happens when a market is born, why costs are sky-high, and how pioneers survive.",
      detailedExplanation: {
        sections: [
          {
            heading: "Dynamics of the Introduction Stage",
            content: "The Introduction Stage is marked by four core business realities:",
            bulletPoints: [
              "Customer Profile: Only Innovators and Early Adopters buy. Mass-market consumers are skeptical, unaware, or find the technology too complex.",
              "Technological Uncertainty: Competing architectures fight to become the 'Dominant Design' (e.g., AC vs. DC electricity, Betamax vs. VHS, Blu-ray vs. HD-DVD).",
              "Cost Structure: High unit production costs due to small batch sizes and zero economies of scale.",
              "Financial Profile: Negative cash flow. Heavy R&D and customer education spending require patient equity financing (venture capital, angel investors, or corporate parent funds)."
            ]
          }
        ]
      },
      diagram: {
        title: "Introduction Stage Operating Profile",
        description: "The economic and customer structure of nascent industries.",
        type: "flow",
        items: [
          { label: "Customers", sublabel: "Early Adopters Only" },
          { label: "Product", sublabel: "Rapid Iteration & Bug Fixing" },
          { label: "Costs", sublabel: "High Unit Cost (Small Batches)" },
          { label: "Cash Flow", sublabel: "Negative (Funded by Equity)", highlight: true }
        ]
      },
      examples: [
        {
          type: "Historical",
          title: "The Automotive Introduction Stage (1880s-1900s)",
          narrative: "When Karl Benz and early pioneers built the first automobiles, there were no paved roads, no gas stations, and cars broke down constantly. Steam, electric, and gasoline engines competed fiercely. Only wealthy enthusiasts bought them. It took Henry Ford's Model T in 1908 to establish the Dominant Design and propel the industry into Growth.",
          takeaway: "Pioneers must survive high costs and technical fragmentation until a dominant design emerges."
        }
      ],
      practicalApplication: {
        rule: "In the Introduction Stage, market education must focus on the CATEGORY rather than brand rivalry.",
        steps: [
          "Do not spend money saying 'Our air taxi is better than Rival B's air taxi.'",
          "Educate the public on why air taxis are safe, legal, convenient, and worth the fare.",
          "Fund operations with patient equity capital, never high-interest short-term debt."
        ]
      },
      stepByStepPractice: {
        whatToDo: "Structure a commercialization roadmap for an Introduction-stage clean-tech venture.",
        whyToDoIt: "Practices early-stage strategic planning.",
        howToDoIt: [
          "Target: High-wealth early adopters with urgent environmental mandates.",
          "Product: Focus engineering on proving safety and reliability milestones.",
          "Finance: Secure multi-year grant or venture funding to survive negative cash flow."
        ],
        expectedResult: "A resilient startup plan built for survival.",
        commonMistakes: "Expecting mass-market profitability in year one.",
        correction: "Measure early success by technical milestones and customer retention rather than accounting net profit."
      },
      keyTakeaways: [
        "Introduction stage brings low volume, high unit costs, and negative cash flow.",
        "Early adopters are key customers willing to tolerate imperfections.",
        "Winning requires establishing the Dominant Design and securing equity financing."
      ],
      lessonSummary: "Lesson 3.3 detailed the Introduction Stage, analyzing the challenges of customer education, technological uncertainty, small-scale production, and cash burn.",
      knowledgeCheck: [
        {
          id: "kc3-3-1",
          question: "Why should an Introduction-stage startup avoid funding its core operations primarily with short-term high-interest bank loans?",
          options: [
            "Because bank loans are illegal for startups",
            "Because cash flow is typically negative in the Introduction stage, creating extreme risk of immediate debt default",
            "Because banks require 50% ownership of the company",
            "Because venture capitalists do not allow bank accounts"
          ],
          correctIndex: 1,
          explanation: "Introduction-stage firms burn cash on R&D and customer education; they lack predictable revenues to service short-term debt payments."
        }
      ],
      assignment: {
        title: "Dominant Design Case Audit",
        instructions: "Identify an emerging industry today (e.g., commercial humanoid robots, fusion energy, eVTOL air taxis). Explain what constitutes the battle for the 'Dominant Design' in that sector.",
        expectedOutput: "A 200-word analysis.",
        submissionRequirements: "Submit in your study notebook.",
        evaluationCriteria: ["Clarity of dominant design analysis (100%)"]
      },
      furtherLearning: ["Read 'Mastering the Dynamics of Innovation' by James Utterback"]
    },
    {
      id: "3.4",
      lessonNumber: "3.4",
      title: "The growth stage",
      moduleId: 3,
      moduleTitle: "The industry life cycle model",
      estimatedMinutes: 40,
      originalVideoTime: "3 min",
      difficulty: "Beginner to Intermediate",
      priorKnowledge: "Lesson 3.3",
      learningObjectives: [
        "Describe the transition from Introduction to Growth: surging mass-market demand, falling unit costs, and high profitability",
        "Explain how Economies of Scale and the Experience Curve operate during Growth",
        "Analyze why competitive rivalry remains relatively mild despite an influx of new entrants"
      ],
      simpleIntro: "Suddenly, the technology works, early adopters rave to their peers, prices drop, and the mass market rushes in. Welcome to the Growth Stage—the most profitable and fast-paced phase of industry evolution.",
      detailedExplanation: {
        sections: [
          {
            heading: "The Mechanics of the Growth Stage",
            content: "During the Growth stage, industry dynamics undergo a dramatic transformation:",
            bulletPoints: [
              "Mass Market Adoption: The product crosses the chasm from early adopters to the Early Majority.",
              "Economies of Scale: As factory production increases, fixed costs are spread over millions of units, driving down the unit cost of production.",
              "The Experience Curve: Production workers and engineers gain cumulative experience, cutting manufacturing defects and accelerating assembly speed.",
              "Mild Rivalry: Even though dozens of new competitors enter the market, the overall industry pie is expanding so fast that everyone can grow without stealing each other's customers."
            ]
          }
        ]
      },
      diagram: {
        title: "Growth Stage Virtuous Cycle",
        description: "How volume expansion drives cost reduction and market penetration.",
        type: "flow",
        items: [
          { label: "Surging Demand", sublabel: "Mass Market Enters" },
          { label: "Volume Scaling", sublabel: "Factory Expansion" },
          { label: "Unit Costs Fall", sublabel: "Economies of Scale", highlight: true },
          { label: "Lower Prices", sublabel: "Further Demand Acceleration" }
        ]
      },
      examples: [
        {
          type: "Real-World Industry",
          title: "The Smartphone Golden Era (2008-2015)",
          narrative: "Once capacitive touchscreens became the dominant design, global smartphone sales exploded from tens of millions to over one billion units annually. Apple, Samsung, HTC, LG, and Xiaomi scaled production rapidly. Margins were peak, component prices plummeted through massive scale, and brands expanded distribution worldwide.",
          takeaway: "In the Growth stage, the priority is capturing distribution and locking in customer ecosystem loyalty."
        }
      ],
      practicalApplication: {
        rule: "In the Growth Stage, prioritize market share acquisition and distribution over short-term dividend payouts.",
        steps: [
          "Reinvest operating cash flows back into manufacturing capacity and distribution expansion.",
          "Shift marketing messages from 'What is this category?' to 'Why our brand is superior.'",
          "Build customer loyalty programs and ecosystem switching costs before the market matures."
        ]
      },
      stepByStepPractice: {
        whatToDo: "Evaluate capacity expansion during high market growth.",
        whyToDoIt: "Prevents losing market share to faster-scaling competitors.",
        howToDoIt: [
          "Analyze: If market demand is growing at 40% annually and your production is growing at 10%, your market share is collapsing.",
          "Action: Form strategic supplier partnerships or build modular capacity to match market growth velocity."
        ],
        expectedResult: "Maintained or expanded market leadership.",
        commonMistakes: "Hoarding cash instead of scaling during peak growth.",
        correction: "Recognize that market share captured during Growth becomes the foundation for cash generation during Maturity."
      },
      keyTakeaways: [
        "Growth stage features rapid mass-market adoption and peak profit margins.",
        "Economies of Scale and the Experience Curve dramatically lower unit costs.",
        "Rivalry is relatively mild because all competitors can grow simultaneously.",
        "Key strategic priorities are scaling capacity, securing distribution, and building brand loyalty."
      ],
      lessonSummary: "Lesson 3.4 examined the Growth Stage, explaining how explosive demand, falling unit costs, and expanding distribution create the most lucrative phase of the industry life cycle.",
      knowledgeCheck: [
        {
          id: "kc3-4-1",
          question: "Why does competitive rivalry often remain relatively polite during the Growth Stage despite dozens of new entrants?",
          options: [
            "Because price competition is prohibited by law",
            "Because total customer demand is growing so rapidly that companies can expand sales by winning first-time buyers rather than stealing customers from rivals",
            "Because all companies share their customer databases",
            "Because production costs are identical across all companies"
          ],
          correctIndex: 1,
          explanation: "In an expanding market, growth is non-zero-sum; firms capture new adopters without needing to trigger aggressive price wars."
        }
      ],
      assignment: {
        title: "Growth Stage Capacity Plan",
        instructions: "Analyze a company currently in a high-growth sector (e.g., commercial EV charging, enterprise AI integration). Write a 200-word evaluation of its distribution strategy and capacity scaling plans.",
        expectedOutput: "A 200-word strategic plan.",
        submissionRequirements: "Submit in your study notebook.",
        evaluationCriteria: ["Distribution and scaling analysis (100%)"]
      },
      furtherLearning: ["Study Boston Consulting Group's classic Experience Curve model"]
    },
    {
      id: "3.5",
      lessonNumber: "3.5",
      title: "The maturity stage",
      moduleId: 3,
      moduleTitle: "The industry life cycle model",
      estimatedMinutes: 40,
      originalVideoTime: "3 min",
      difficulty: "Beginner to Intermediate",
      priorKnowledge: "Lesson 3.4",
      learningObjectives: [
        "Detail the characteristics of the Maturity Stage: market saturation, replacement demand, commoditization, and consolidation",
        "Explain the causes and consequences of an 'Industry Shakeout'",
        "Formulate winning strategies for managing Mature businesses as high-cash-flow 'Cash Cows'"
      ],
      simpleIntro: "What happens when everyone who wants a refrigerator, an automobile, or a smartphone already owns one? Growth flattens out, the party ends, and the industry enters Maturity. In this lesson, we study how to win in saturated markets.",
      detailedExplanation: {
        sections: [
          {
            heading: "The Mechanics of the Maturity Stage",
            content: "Maturity is typically the longest stage of an industry's life:",
            bulletPoints: [
              "Market Saturation: Nearly 100% of addressable customers have already adopted the product. Sales growth slows to general population growth rates (1-3% per year).",
              "Replacement Demand: Revenue comes primarily from customers replacing worn-out units or upgrading existing models.",
              "Commoditization: Competing products look and perform similarly; customers become price-sensitive and experienced.",
              "The Industry Shakeout: Slowing growth combined with excess capacity triggers intense price competition. High-cost, weaker firms fail or merge, leaving an oligopoly of 3-5 dominant survivors.",
              "Cash Cow Financials: With factories already built and R&D spending lower, surviving leaders generate immense, steady free cash flow."
            ]
          }
        ]
      },
      diagram: {
        title: "The Shakeout to Maturity Oligopoly",
        description: "How slowing growth triggers industry consolidation into a stable oligopoly.",
        type: "flow",
        items: [
          { label: "End of Growth", sublabel: "Dozens of Entrants, Excess Capacity" },
          { label: "The Shakeout", sublabel: "Price Wars & Margin Squeeze" },
          { label: "Consolidation", sublabel: "M&A, Exits, Bankruptcies" },
          { label: "Mature Oligopoly", sublabel: "3-5 Dominant Leaders (Cash Cows)", highlight: true }
        ]
      },
      examples: [
        {
          type: "Real-World Industry",
          title: "The Consolidation of the US Airline Industry",
          narrative: "Following deregulation, dozens of airlines entered and fought destructive price wars. Over decades of maturity, repeated shakeouts and bankruptcies forced consolidation. Today, four major airlines (Delta, United, American, Southwest) control over 75% of domestic passenger traffic, focusing on capacity discipline and loyalty rewards.",
          takeaway: "Mature industries inevitably consolidate into stable oligopolies to protect pricing power."
        }
      ],
      practicalApplication: {
        rule: "In Maturity, focus on customer retention, operational cost reduction, and free cash flow generation.",
        steps: [
          "Audit customer churn: Keeping existing customers is far cheaper than stealing them from rivals.",
          "Cut operational waste: Invest in process automation to protect operating margins.",
          "Do not build speculative new capacity that could trigger industry-wide price wars."
        ]
      },
      stepByStepPractice: {
        whatToDo: "Shift an organization's focus from growth metrics to mature efficiency metrics.",
        whyToDoIt: "Prevents reckless capital expenditure in saturated markets.",
        howToDoIt: [
          "Transition KPI from 'Gross New Customer Additions' to 'Net Retention Rate (NRR)' and 'Free Cash Flow Margin.'",
          "Institute loyalty programs and long-term service contracts to lock in existing accounts."
        ],
        expectedResult: "Sustained high profitability and cash generation.",
        commonMistakes: "Attempting to restart explosive growth through ruinous price discounts.",
        correction: "Recognize that price cuts in mature markets are matched immediately by rivals, hurting everyone."
      },
      keyTakeaways: [
        "Maturity brings saturated demand, replacement sales, and experienced, price-sensitive buyers.",
        "The transition from Growth triggers an Industry Shakeout that consolidates competitors into an oligopoly.",
        "Surviving leaders manage their business units as Cash Cows, focusing on cost efficiency and retention."
      ],
      lessonSummary: "Lesson 3.5 explored the Maturity Stage, detailing how market saturation drives industry shakeouts and why surviving firms must shift their focus to cost discipline, customer retention, and steady cash flow.",
      knowledgeCheck: [
        {
          id: "kc3-5-1",
          question: "What primarily triggers an 'Industry Shakeout' during the transition from Growth to Maturity?",
          options: [
            "A sudden increase in government taxes across all industries",
            "Demand growth slows dramatically while companies have built excess capacity, resulting in price wars that eliminate high-cost competitors",
            "Consumers completely stop using the product forever",
            "Suppliers refuse to sell materials to large corporations"
          ],
          correctIndex: 1,
          explanation: "When growth decelerates, excess capacity forces price discounting; firms with high cost structures cannot survive and are shaken out."
        }
      ],
      assignment: {
        title: "Mature Industry Oligopoly Mapping",
        instructions: "Select a mature industry (e.g., retail banking, telecom networks, commercial soft drinks). Identify the 3-4 dominant players, describe one competitor that was acquired or went bankrupt during the shakeout, and explain how the market leader retains customers today.",
        expectedOutput: "A 250-word case brief.",
        submissionRequirements: "Submit in your study notebook.",
        evaluationCriteria: ["Accurate oligopoly identification (35%)", "Historical shakeout evidence (35%)", "Customer retention analysis (30%)"]
      },
      furtherLearning: ["Read 'Competitive Advantage' by Michael Porter on managing mature cost structures"]
    },
    {
      id: "3.6",
      lessonNumber: "3.6",
      title: "The decline stage",
      moduleId: 3,
      moduleTitle: "The industry life cycle model",
      estimatedMinutes: 40,
      originalVideoTime: "3 min",
      difficulty: "Beginner to Intermediate",
      priorKnowledge: "Lesson 3.5",
      learningObjectives: [
        "Identify the primary drivers of industry decline: technological substitution, social changes, and regulation",
        "Describe competitive dynamics when total market demand contracts year after year",
        "Compare and execute the four strategic options in Decline: Leadership, Niche, Harvest, and Divest"
      ],
      simpleIntro: "No industry lasts forever. Typewriters, horse-drawn buggies, photographic film, and wired landlines all faced superior substitutes. When an industry's sales shrink permanently, it has entered Decline. But decline does not have to mean bankruptcy if you manage it strategically.",
      detailedExplanation: {
        sections: [
          {
            heading: "Why Do Industries Enter Decline?",
            content: "Three primary forces push an industry into terminal decline:",
            bulletPoints: [
              "Technological Substitution: A newer, superior technology solves the customer's problem cheaper, faster, or better (e.g., digital streaming replacing DVD rental; smartphones replacing digital cameras).",
              "Social and Demographic Shifts: Changing lifestyle values or health awareness reduce consumption (e.g., declining demand for tobacco cigarettes).",
              "Regulatory Mandates: Governments ban or penalize specific products (e.g., phase-outs of incandescent light bulbs or internal combustion engines)."
            ]
          },
          {
            heading: "The Four Strategic Choices in the Decline Stage",
            content: "When market demand shrinks permanently, executives choose among four distinct paths:",
            table: {
              headers: ["Strategy", "Strategic Action", "When to Use"],
              rows: [
                ["1. Leadership ('Last Player Standing')", "Acquire or outlast exiting competitors to monopolize the remaining market.", "When decline is gradual and you possess the lowest cost structure."],
                ["2. Niche Focus", "Retreat from the mass market to serve a dedicated, highly loyal customer pocket.", "When a passionate subset of buyers refuses to switch to substitutes."],
                ["3. Harvest ('Milking')", "Eliminate all new CapEx, R&D, and marketing; extract maximum remaining cash.", "When the business can generate cash without ongoing investment."],
                ["4. Divest / Early Exit", "Sell the business or liquidate assets early while they still have market value.", "When decline is rapid and assets have no viable future value."]
              ]
            }
          }
        ]
      },
      diagram: {
        title: "The Four Strategic Paths in Decline",
        description: "Decision matrix for managing declining industry business units.",
        type: "comparison",
        items: [
          { label: "Leadership", sublabel: "Consolidate remaining demand" },
          { label: "Niche Focus", sublabel: "Serve dedicated enthusiast pocket", highlight: true },
          { label: "Harvest", sublabel: "Cut investment; extract cash" },
          { label: "Divest / Exit", sublabel: "Sell early before asset value collapses" }
        ]
      },
      examples: [
        {
          type: "Real-World Industry",
          title: "Fujifilm vs. Kodak in the Photographic Film Decline",
          narrative: "When digital sensors replaced chemical film in the 2000s, Kodak delayed diversification and filed for bankruptcy in 2012. In contrast, Fujifilm executed a dual strategy: it harvested and repositioned film into a profitable youth niche (Instax instant cameras) while using its core chemical capabilities to diversify into medical imaging and pharmaceuticals.",
          takeaway: "Disciplined management of decline combined with corporate repositioning protects shareholder value."
        }
      ],
      practicalApplication: {
        rule: "Differentiate between a cyclical recession dip and structural industry decline.",
        steps: [
          "In a cyclical recession, demand falls because customer budgets are tight, but recovers when the economy rebounds.",
          "In structural decline, sales fall even during economic booms because customers have migrated permanently to a substitute.",
          "Never treat structural decline as a temporary dip; act decisively with one of the four Decline strategies."
        ]
      },
      stepByStepPractice: {
        whatToDo: "Select the optimal Decline strategy for a traditional vinyl record manufacturer.",
        whyToDoIt: "Demonstrates practical niche positioning.",
        howToDoIt: [
          "Analyze: Mass-market music listeners use streaming (Spotify/Apple Music).",
          "Identify Niche: Audiophiles, collectors, and music superfans value physical vinyl artwork and analog sound.",
          "Execute: Eliminate cheap mass-market pressings; produce premium, high-margin, collectible vinyl editions."
        ],
        expectedResult: "A highly profitable, enduring niche business inside a declining broader industry.",
        commonMistakes: "Pouring millions into trying to convert smartphone streamers back to vinyl records.",
        correction: "Accept market contraction and focus on maximizing willingness-to-pay within the loyal niche."
      },
      keyTakeaways: [
        "Industries enter Decline through technological substitution, demographic shifts, or regulation.",
        "The four Decline strategies are Leadership, Niche Focus, Harvest, and Divest.",
        "Niche focus and disciplined harvesting can generate exceptional returns even in shrinking markets."
      ],
      lessonSummary: "Lesson 3.6 concluded Module 3 by examining the Decline Stage, explaining the causes of market contraction and providing actionable strategies to harvest cash, serve loyal niches, or exit profitably.",
      knowledgeCheck: [
        {
          id: "kc3-6-1",
          question: "What does an executive 'Harvest Strategy' entail when managing a business unit in a declining industry?",
          options: [
            "Borrowing money to build a massive new headquarters",
            "Eliminating all new R&D, capital expenditures, and marketing to squeeze out maximum short-term cash flow before closure",
            "Giving the company's products away for free to students",
            "Launching a hostile takeover of a high-tech startup"
          ],
          correctIndex: 1,
          explanation: "Harvesting strictly minimizes expenses and reinvestment to extract remaining cash flow from an aging asset base."
        }
      ],
      assignment: {
        title: "Decline Strategy Case Audit",
        instructions: "Identify an industry that entered decline over the past two decades. Describe: 1) The substitute technology that caused the decline, 2) How one specific company responded using one of the 4 Decline strategies, and 3) Whether that strategic response succeeded or failed.",
        expectedOutput: "A 250-word case analysis.",
        submissionRequirements: "Submit in your study notebook.",
        evaluationCriteria: [
          "Identification of root substitute (30%)",
          "Accurate classification of the Decline strategy used (40%)",
          "Critique of outcome (30%)"
        ]
      },
      furtherLearning: ["Read Kathryn Harrigan's 'Strategies for Declining Businesses'"]
    }
  ],
  moduleQuiz: [
    {
      id: "mq3-1",
      question: "In which stage of the Industry Life Cycle are profit margins typically at their highest peak due to falling unit costs and booming demand?",
      options: ["Introduction Stage", "Growth Stage", "Maturity Stage", "Decline Stage"],
      correctIndex: 1,
      explanation: "Growth stage combines falling unit costs (scale economies) with surging customer demand, producing peak industry margins."
    },
    {
      id: "mq3-2",
      question: "What is the key difference between a temporary cyclical economic downturn and structural industry decline?",
      options: [
        "Cyclical downturns only affect European companies",
        "In structural decline, sales drop permanently because customers have migrated to superior substitutes, even during general economic booms",
        "Structural decline only lasts for one quarter",
        "There is no difference"
      ],
      correctIndex: 1,
      explanation: "Structural decline is permanent technological or behavioral substitution, whereas cyclical downturns reflect macroeconomic fluctuations."
    }
  ],
  moduleAssignment: {
    title: "Comprehensive Industry Life Cycle Diagnostic",
    instructions: "Evaluate the primary industry of your chosen target company. 1) Score it across 5 indicators: Volume Growth Rate, Buyer Type, Competitor Entry/Exit trends, Degree of Standardization, and Cash Flow Profile. 2) Provide a definitive diagnosis of its current stage. 3) Draft 3 strategic recommendations aligned with that stage.",
    expectedOutput: "A 1-page structured diagnostic report.",
    submissionRequirements: "Submit as a markdown document.",
    evaluationCriteria: [
      "Rigorous 5-indicator evaluation table (40%)",
      "Definitive, evidence-based stage diagnosis (30%)",
      "3 stage-appropriate recommendations (30%)"
    ]
  }
};
