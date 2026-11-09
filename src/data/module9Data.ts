import { ModuleData } from '../types/course';

export const module9: ModuleData = {
  id: 9,
  moduleNumber: "Module 9",
  title: "The SWOT framework",
  shortTitle: "SWOT Framework & Starbucks Case",
  description: "Examines the SWOT Framework (Strengths, Weaknesses, Opportunities, Threats) as the ultimate strategic synthesis tool. Unpacks the internal vs. external matrix, introduces the actionable TOWS Matrix, and culminates in a master, real-world case study analyzing Starbucks Corporation.",
  importance: "Most business people treat SWOT as a useless brainstorming list of 4 bullet points. When conducted properly, SWOT synthesizes all previous 8 modules into an actionable cross-matching strategic engine.",
  learningObjectives: [
    "Define the SWOT Analysis Framework and enforce the boundary between Internal factors (S/W) and External factors (O/T)",
    "Avoid the common pitfalls of superficial SWOT lists by grounding items in empirical evidence and VRIO/Five Forces criteria",
    "Transform passive SWOT analysis into an active strategic execution engine using the TOWS Matrix (SO, ST, WO, WT strategies)",
    "Conduct a comprehensive, professional SWOT and TOWS analysis on a global enterprise using Starbucks Corporation"
  ],
  requiredKnowledge: "Modules 1 to 8.",
  skillsToDevelop: ["Strategic Factor Screening", "TOWS Strategic Cross-Matching", "Enterprise Synthesis Modeling", "Starbucks Strategic Auditing"],
  expectedOutcomes: "Ability to take raw corporate data, categorize it into internal and external matrices, and generate four categories of concrete strategic initiatives.",
  summary: "The SWOT framework bridges internal capability analysis (Strengths & Weaknesses) with external environmental evaluation (Opportunities & Threats). The TOWS Matrix converts this synthesis into actionable corporate strategies.",
  lessons: [
    {
      id: "9.1",
      lessonNumber: "9.1",
      title: "SWOT analysis - a useful framework for strategic analysis",
      moduleId: 9,
      moduleTitle: "The SWOT framework",
      estimatedMinutes: 40,
      originalVideoTime: "3 min",
      difficulty: "Beginner to Intermediate",
      priorKnowledge: "Modules 1 to 8",
      learningObjectives: [
        "Define the SWOT Matrix: Strengths (S), Weaknesses (W), Opportunities (O), and Threats (T)",
        "Strictly enforce the boundary: S & W are INTERNAL to the firm; O & T are EXTERNAL to the firm",
        "Construct an advanced TOWS Matrix to match internal strengths and weaknesses with external opportunities and threats"
      ],
      simpleIntro: "Almost every business student has heard of SWOT Analysis. Unfortunately, 90% of SWOT analyses created in corporate boardrooms are completely useless! Why? Because people make lazy, unstructured bullet-point lists that sit on a slide and never lead to real action. In this lesson, you will learn how to build a rigorous, professional SWOT and transform it into an actionable TOWS strategy engine.",
      detailedExplanation: {
        sections: [
          {
            heading: "The Golden Rule of SWOT: Internal vs. External",
            content: "The single most common mistake in strategic analysis is confusing internal attributes with external market conditions. Remember this strict division:",
            table: {
              headers: ["Dimension", "INTERNAL to the Organization (What you control)", "EXTERNAL to the Market (The outside world)"],
              rows: [
                ["Helpful / Favorable", "STRENGTHS (S): Internal resources, proprietary patents, talented engineers, high brand trust, low cost structure.", "OPPORTUNITIES (O): External emerging technologies, market deregulation, demographic shifts, unmet customer trends."],
                ["Harmful / Unfavorable", "WEAKNESSES (W): Internal cash shortages, outdated IT systems, bureaucratic culture, poor geographic presence.", "THREATS (T): External aggressive new entrants, substitute technologies, price wars, economic recessions, new tax regulations."]
              ]
            }
          },
          {
            heading: "From Passive SWOT to Active Strategy: The TOWS Matrix",
            content: "A SWOT list only describes; a TOWS Matrix ACTS. By cross-matching internal factors against external factors, you generate four distinct strategic playbooks:",
            table: {
              headers: ["Strategy Type", "Matching Formula", "Strategic Action"],
              rows: [
                ["SO Strategies (Maxi-Maxi)", "Strengths + Opportunities", "Aggressive Growth: Use internal strengths to capitalize on external opportunities."],
                ["ST Strategies (Maxi-Mini)", "Strengths + Threats", "Defensive Shield: Use internal strengths to neutralize or deflect external threats."],
                ["WO Strategies (Mini-Maxi)", "Weaknesses + Opportunities", "Internal Turnaround: Fix internal weaknesses by seizing external market opportunities (e.g., partnering with a tech leader to fix an IT flaw)."],
                ["WT Strategies (Mini-Mini)", "Weaknesses + Threats", "Defensive Damage Control / Retrenchment: Minimize internal weaknesses and avoid external threats to survive (e.g., closing loss-making divisions)."]
              ]
            }
          }
        ]
      },
      diagram: {
        title: "The TOWS Strategic Action Matrix",
        description: "Cross-matching internal capabilities with external market dynamics to formulate action.",
        type: "matrix",
        items: [
          { label: "SO: Aggressive Growth", sublabel: "Leverage Strengths to capture Opportunities", highlight: true },
          { label: "ST: Defensive Shield", sublabel: "Deploy Strengths to neutralize Threats" },
          { label: "WO: Internal Turnaround", sublabel: "Overcome Weaknesses by seizing Opportunities" },
          { label: "WT: Retrenchment / Exit", sublabel: "Minimize Weaknesses and avoid Threats" }
        ]
      },
      examples: [
        {
          type: "Hypothetical",
          title: "Applying TOWS to an Electric Bicycle Startup",
          narrative: "Internal Strength: Patented lightweight battery. Internal Weakness: Zero retail store network. External Opportunity: City governments creating $500 commuter rebates for e-bikes. External Threat: Low-cost Chinese imports flooding the market. TOWS SO Strategy: Run a direct-to-consumer ad blitz highlighting the battery range to capture government rebate buyers. TOWS WO Strategy: Partner with established nationwide bike repair shops to handle assembly, overcoming the lack of retail stores to capture the rebate boom.",
          takeaway: "Cross-matching turns passive observations into concrete, operational growth initiatives."
        }
      ],
      practicalApplication: {
        rule: "Never present a SWOT analysis without immediately following it with a TOWS Action Matrix.",
        steps: [
          "Validate every S and W using Module 6 (VRIO internal analysis).",
          "Validate every O and T using Module 3 (Life Cycle) and Module 4 (Five Forces).",
          "Pair one S with one O to create an SO project.",
          "Pair one W with one T to create a risk-mitigation plan."
        ]
      },
      stepByStepPractice: {
        whatToDo: "Fix a common SWOT error where an external trend was mislabeled as an internal strength.",
        whyToDoIt: "Eliminates the #1 strategic analysis mistake.",
        howToDoIt: [
          "Error: A pharmaceutical executive writes: 'Our #1 Strength is that the elderly population in Europe is growing by 15%.'",
          "Correction: The aging population is an EXTERNAL factor that applies to all competitors equally; it belongs under OPPORTUNITIES (O).",
          "The true STRENGTH (S) would be: 'We possess three patented arthritis medications specifically formulated for geriatric patients.'"
        ],
        expectedResult: "Pristine separation of internal assets and external macro trends.",
        commonMistakes: "Putting market trends into the Strengths box.",
        correction: "Ask: 'If our company dissolved tomorrow morning, would this fact still be true?' If yes, it is EXTERNAL (O or T)."
      },
      keyTakeaways: [
        "Strengths and Weaknesses are INTERNAL (under firm control).",
        "Opportunities and Threats are EXTERNAL (market environment).",
        "The TOWS Matrix cross-matches factors to generate SO, ST, WO, and WT action plans.",
        "SWOT synthesizes all previous external and internal course frameworks into unified execution."
      ],
      lessonSummary: "Lesson 9.1 examined the SWOT Framework, enforcing the strict separation of internal capabilities and external market conditions, and providing complete instruction on constructing the actionable TOWS Matrix.",
      knowledgeCheck: [
        {
          id: "kc9-1-1",
          question: "In a professional SWOT analysis, into which quadrant does 'A sudden 25% increase in government import tariffs on our industry's raw materials' belong?",
          options: ["Internal Strength (S)", "Internal Weakness (W)", "External Threat (T)", "External Opportunity (O)"],
          correctIndex: 2,
          explanation: "Government tariffs are external regulatory conditions that negatively impact costs, making them an External Threat (T)."
        },
        {
          id: "kc9-1-2",
          question: "What is the primary function of a TOWS Matrix compared to a standard SWOT list?",
          options: [
            "To calculate quarterly employee payroll taxes",
            "To systematically cross-match internal strengths and weaknesses with external opportunities and threats to generate four categories of concrete strategic initiatives",
            "To eliminate the need for accounting audits",
            "To replace company logos"
          ],
          correctIndex: 1,
          explanation: "The TOWS matrix converts descriptive SWOT lists into proactive strategic actions: SO, ST, WO, and WT playbooks."
        }
      ],
      assignment: {
        title: "TOWS Strategic Action Matrix Construction",
        instructions: "For your target company: 1) Identify 2 Strengths, 2 Weaknesses, 2 Opportunities, and 2 Threats. 2) Construct a 2x2 TOWS matrix creating one concrete action for SO (Strengths + Opportunities), one for ST (Strengths + Threats), one for WO (Weaknesses + Opportunities), and one for WT (Weaknesses + Threats).",
        expectedOutput: "A structured TOWS matrix with 4 actionable initiatives.",
        submissionRequirements: "Submit in your study notebook.",
        evaluationCriteria: [
          "Pristine internal vs. external factor separation (40%)",
          "Four creative, logically sound TOWS strategic initiatives (60%)"
        ]
      },
      furtherLearning: ["Read Heinz Weihrich's classic paper 'The TOWS Matrix—A Tool for Situational Analysis'"]
    },
    {
      id: "9.2",
      lessonNumber: "9.2",
      title: "SWOT analysis in practice - analyzing Starbucks",
      moduleId: 9,
      moduleTitle: "The SWOT framework",
      estimatedMinutes: 50,
      originalVideoTime: "4 min",
      difficulty: "Intermediate",
      priorKnowledge: "Lesson 9.1",
      learningObjectives: [
        "Synthesize all 9 modules of corporate strategy through a master, real-world case study of Starbucks Corporation",
        "Conduct an empirical SWOT analysis of Starbucks across global operations, digital loyalty, supply chains, and rising costs",
        "Formulate a complete set of TOWS strategic recommendations for Starbucks executive management"
      ],
      simpleIntro: "To conclude our journey through Corporate Strategy, we put all our frameworks to the ultimate test by analyzing one of the most recognizable, fascinating global enterprises in modern business: Starbucks Corporation. From its Seattle origins to over 38,000 stores worldwide, how does Starbucks navigate saturated mature markets, rising coffee bean costs, mobile app dominance, and intense local competition? Let's find out.",
      detailedExplanation: {
        sections: [
          {
            heading: "Comprehensive SWOT Analysis: Starbucks Corporation",
            content: "Applying rigorous internal and external criteria yields the following strategic profile:",
            table: {
              headers: ["Quadrant", "Strategic Factor", "Empirical Evidence & Business Impact"],
              rows: [
                ["STRENGTHS (Internal)", "1. Global Brand Equity & Ubiquitous Footprint", "Instantly recognized brand with over 38,000 stores globally, commanding premium pricing power."],
                ["STRENGTHS (Internal)", "2. Industry-Leading Digital Ecosystem & Loyalty Program", "Starbucks Rewards boasts over 34 million active members; mobile orders drive over 30% of US company-operated transactions, creating massive switching costs."],
                ["STRENGTHS (Internal)", "3. Premium 'Third Place' Customer Experience & Roastery Showcases", "Comfortable ambiance bridging home and work, supported by flagship Reserve Roasteries that elevate brand prestige."],
                ["WEAKNESSES (Internal)", "1. Heavy Reliance on Premium Coffee & Discretionary Consumer Spending", "Premium pricing leaves Starbucks vulnerable to consumer belt-tightening during inflation or recessions."],
                ["WEAKNESSES (Internal)", "2. High Operating Cost Structure & Labor Pressures", "Company-operated store footprint creates heavy fixed lease costs and unionization/wage pressures."],
                ["WEAKNESSES (Internal)", "3. Store Cannibalization in Saturated Urban Markets", "Multiple stores within blocks of each other compete for the same foot traffic in mature cities."],
                ["OPPORTUNITIES (External)", "1. Rapid Growth in Emerging Asian Markets (Particularly China & India)", "Tea-drinking cultures shifting toward coffee consumption; massive rising middle class."],
                ["OPPORTUNITIES (External)", "2. Expansion of Cold Beverages & Plant-Based Customization", "Cold espresso and tea drinks now represent over 70% of beverage sales, driven by Gen Z customizations."],
                ["OPPORTUNITIES (External)", "3. Ready-to-Drink (RTD) Packaged Goods Partnerships", "Global Coffee Alliance with Nestlé to distribute Starbucks-branded packaged coffee and pods in supermarkets worldwide."],
                ["THREATS (External)", "1. Climate Change Impact on Arabica Coffee Bean Supply", "Extreme weather events in Brazil and Colombia threaten coffee harvests, driving volatile wholesale commodity prices."],
                ["THREATS (External)", "2. Fierce Competition from Local Chains & Ultra-Fast Pick-Up Outlets", "Rapid expansion of low-cost, tech-enabled kiosks (e.g., Luckin Coffee in China, Blank Street in US/UK)."],
                ["THREATS (External)", "3. Changing Consumer Habits & Work-From-Home Patterns", "Fewer commuters stopping for morning coffee in downtown financial districts due to hybrid remote work."]
              ]
            }
          },
          {
            heading: "The Starbucks TOWS Strategic Action Matrix",
            content: "Synthesizing Starbucks' SWOT into four concrete corporate strategies:",
            table: {
              headers: ["Strategy Type", "TOWS Formulation", "Executive Action Recommendation"],
              rows: [
                ["SO Strategy (Maxi-Maxi)", "Strengths 1 & 2 + Opportunities 1 & 2", "Aggressive Mobile-First Expansion in Asia: Deploy the 34M-member digital rewards architecture and cold-beverage customization across Tier 2 and Tier 3 cities in China and India."],
                ["ST Strategy (Maxi-Mini)", "Strength 2 + Threat 3", "Suburban Drive-Thru & Digital Commuter Hubs: Rebalance store portfolio away from downtown financial districts toward suburban drive-thrus, using mobile pre-ordering to capture hybrid remote workers."],
                ["WO Strategy (Mini-Maxi)", "Weakness 2 + Opportunity 3", "Expand Packaged RTD Partnership with Nestlé: Grow the asset-light Global Coffee Alliance to capture supermarket grocery profits without incurring store labor or retail lease overhead."],
                ["WT Strategy (Mini-Mini)", "Weakness 1 & 2 + Threats 1 & 2", "Supply Chain Climate Hedging & Store Rationalization: Secure 10-year direct farmer agroforestry contracts for climate-resilient coffee varietals, while closing underperforming urban stores to cut fixed lease overhead."]
              ]
            }
          }
        ]
      },
      diagram: {
        title: "Starbucks Complete Strategic Integration",
        description: "How external forces, life cycle maturity, and internal VRIO capabilities converge in the Starbucks case.",
        type: "matrix",
        items: [
          { label: "Maturity Stage (Mod 3)", sublabel: "Saturated domestic urban markets" },
          { label: "Five Forces (Mod 4)", sublabel: "Supplier volatility & fast-kiosk rivals", highlight: true },
          { label: "VRIO Advantage (Mod 6)", sublabel: "34M-member digital app ecosystem", highlight: true },
          { label: "TOWS Strategy (Mod 9)", sublabel: "Suburban drive-thru & Asian expansion" }
        ]
      },
      examples: [
        {
          type: "Case Study",
          title: "The Battle for China: Starbucks vs. Luckin Coffee",
          narrative: "In China, Starbucks faced a massive strategic challenge from Luckin Coffee. Luckin pioneered ultra-small, cashier-less pickup kiosks with app-only ordering and deep discounts. Starbucks did not panic and abandon its premium brand to copy Luckin's cheap prices (avoiding the 'Stuck in the Middle' trap!). Instead, Starbucks used a Focused Differentiation strategy: it built lavish Reserve Roasteries to solidify its luxury status, while simultaneously launching mobile 'Starbucks Now' pickup stores and partnering with Alibaba for delivery, successfully defending its premium position.",
          takeaway: "In the face of aggressive challenger disruption, defend your differentiated core while adopting necessary operational innovations."
        }
      ],
      practicalApplication: {
        rule: "Notice how all 9 modules of this course converged in the Starbucks analysis:",
        steps: [
          "Module 2: Starbucks' Mission ('To inspire and nurture the human spirit—one person, one cup, and one neighborhood at a time') guides customer experience.",
          "Module 3: Domestic coffee retailing is in the Maturity Stage, requiring focus on customer loyalty and cold drink innovation.",
          "Module 4: Five Forces shows high supplier volatility (Arabica beans) and intense local retail rivalry.",
          "Module 5: Game Theory dictates avoiding price wars with budget kiosks like Luckin, maintaining pricing discipline.",
          "Module 6: Internal VRIO analysis reveals the Starbucks Mobile App and digital rewards as its core sustainable advantage.",
          "Module 7: Starbucks defends a Broad Differentiation positioning strategy.",
          "Module 8: Growth is executed Horizontally (opening international stores) and Vertically (Nestlé packaged goods alliance).",
          "Module 9: SWOT/TOWS synthesizes the entire analysis into actionable executive initiatives."
        ]
      },
      stepByStepPractice: {
        whatToDo: "Formulate one additional TOWS initiative for Starbucks.",
        whyToDoIt: "Demonstrates mastery of strategic synthesis.",
        howToDoIt: [
          "Match: Strength 3 (Third-Place Experience) + Opportunity 2 (Cold Crafted Beverages).",
          "Strategy: Launch 'Afternoon Social Refreshment' menus with handcrafted botanical mocktails and pastry pairings, boosting store foot traffic between 2 PM and 5 PM when morning coffee sales drop.",
          "Financial Impact: Increases same-store sales without requiring additional store square footage."
        ],
        expectedResult: "High-margin operational value creation.",
        commonMistakes: "Proposing strategies that contradict Starbucks' premium brand identity (e.g., selling $0.99 drip coffee in plastic pouches).",
        correction: "Ensure all TOWS initiatives align with the firm's core generic strategy."
      },
      keyTakeaways: [
        "The Starbucks case illustrates how all 8 prior frameworks integrate into a cohesive strategic analysis.",
        "Starbucks' core sustainable advantage lies in its brand equity and digital rewards ecosystem.",
        "Maturity in domestic markets forces companies to seek growth through international expansion and digital efficiency.",
        "A rigorous SWOT/TOWS analysis bridges the gap between high-level theory and concrete corporate execution."
      ],
      lessonSummary: "Lesson 9.2 concluded the Corporate Strategy curriculum with a comprehensive case study of Starbucks Corporation, synthesizing the Industry Life Cycle, Porter's Five Forces, VRIO capabilities, and generic positioning into a master SWOT and TOWS action plan.",
      knowledgeCheck: [
        {
          id: "kc9-2-1",
          question: "When evaluating Starbucks Corporation under Michael Porter's Generic Competitive Strategies (Module 7), which strategic position does Starbucks primarily occupy?",
          options: [
            "Cost Leadership (selling the absolute lowest-priced coffee in the industry)",
            "Broad Differentiation (commanding premium prices through brand prestige, unique customer experience, and mobile convenience across broad consumer markets)",
            "Cost Focus in rural farm towns",
            "Stuck in the Middle between tea and soft drinks"
          ],
          correctIndex: 1,
          explanation: "Starbucks is a textbook Broad Differentiator, using brand equity, customized beverages, and comfortable store ambiance to command premium pricing across the global market."
        },
        {
          id: "kc9-2-2",
          question: "Why is Starbucks' proprietary mobile app and Rewards program (with over 34 million active members) considered a SUSTAINED competitive advantage under the VRIO framework (Module 6)?",
          options: [
            "Because mobile apps are illegal for other coffee shops to build",
            "Because it is Valuable, Rare, Costly for small rivals to imitate at scale, and Starbucks is deeply Organized with in-store barcode scanners and customized marketing algorithms to exploit the customer data",
            "Because Starbucks pays customers in gold coins",
            "Because it eliminates the need for coffee beans"
          ],
          correctIndex: 1,
          explanation: "The loyalty program passes all four VRIO criteria: it creates customer lock-in and high switching costs that competitors cannot duplicate without massive scale and capital."
        }
      ],
      assignment: {
        title: "Master Capstone Case Study Analysis",
        instructions: "Conduct a complete strategic audit of your chosen target company using the 8 frameworks from this course: 1) Corporate vs. Business strategy scope, 2) Industry Life Cycle stage, 3) Primary Five Forces pressure, 4) One Game Theory interaction, 5) Core VRIO capability, 6) Generic competitive strategy, 7) Primary Growth vector, and 8) A 4-box TOWS Action Matrix. Conclude with three decisive executive recommendations for the CEO.",
        expectedOutput: "A comprehensive 600-word Capstone Strategic Audit.",
        submissionRequirements: "Submit in your study notebook.",
        evaluationCriteria: [
          "Complete integration of all 8 core frameworks (50%)",
          "Rigorous, actionable TOWS matrix (25%)",
          "Decisive, practical executive recommendations (25%)"
        ]
      },
      furtherLearning: ["Read Howard Schultz's 'Pour Your Heart Into It' and 'Onward' for the insider corporate strategy of Starbucks"]
    }
  ],
  moduleQuiz: [
    {
      id: "mq9-1",
      question: "Which of the following correctly matches an element of the SWOT framework with its internal or external classification?",
      options: [
        "Strengths = External; Threats = Internal",
        "Opportunities = Internal; Weaknesses = External",
        "Strengths and Weaknesses = INTERNAL to the firm; Opportunities and Threats = EXTERNAL to the market",
        "All four quadrants are strictly internal to the company"
      ],
      correctIndex: 2,
      explanation: "Strengths and Weaknesses belong inside the organization; Opportunities and Threats exist outside in the broader market."
    },
    {
      id: "mq9-2",
      question: "In a TOWS Matrix, what is an 'ST Strategy'?",
      options: [
        "A strategy that uses Internal Strengths to neutralize or shield the firm from External Threats",
        "A strategy that ignores all competition",
        "A strategy that liquidates the entire company",
        "A strategy to borrow maximum bank debt"
      ],
      correctIndex: 0,
      explanation: "ST strategies deploy internal organizational capabilities to defend against external environmental threats."
    }
  ],
  moduleAssignment: {
    title: "Master SWOT & TOWS Enterprise Synthesis",
    instructions: "Perform a full-scale SWOT and TOWS analysis on your target enterprise. Create a 4-quadrant SWOT table with 3 verified facts per box. Construct a complete TOWS Action Matrix generating one concrete initiative each for SO, ST, WO, and WT. Write an executive summary detailing which single initiative will have the greatest impact on enterprise valuation over the next 3 years.",
    expectedOutput: "A 500-word comprehensive SWOT/TOWS report.",
    submissionRequirements: "Submit as a markdown document.",
    evaluationCriteria: [
      "Rigorous internal vs. external factor hygiene (30%)",
      "Four high-impact TOWS initiatives (40%)",
      "Compelling enterprise valuation rationale (30%)"
    ]
  }
};
