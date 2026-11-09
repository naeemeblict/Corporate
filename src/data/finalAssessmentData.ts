import { ModuleData } from '../types/course';
import { module1 } from './module1Data';
import { module2 } from './module2Data';
import { module3 } from './module3Data';
import { module4 } from './module4Data';
import { module5 } from './module5Data';
import { module6 } from './module6Data';
import { module7 } from './module7Data';
import { module8 } from './module8Data';
import { module9 } from './module9Data';

export const allModules: ModuleData[] = [
  module1,
  module2,
  module3,
  module4,
  module5,
  module6,
  module7,
  module8,
  module9
];

export interface FinalExamQuestion {
  id: string;
  module: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const finalExamQuestions: FinalExamQuestion[] = [
  {
    id: "fe-1",
    module: "Module 2: Strategy Purpose & Levels",
    question: "A company's executive committee is deciding whether to acquire an autonomous robotics company to enter the agricultural automation market. What level of strategy does this decision represent?",
    options: ["Functional Strategy", "Business-Level Pricing Strategy", "Corporate Strategy", "Operational Effectiveness"],
    correctIndex: 2,
    explanation: "Deciding which industries to enter or acquire represents Corporate Strategy ('Where to compete')."
  },
  {
    id: "fe-2",
    module: "Module 2: Strategy Purpose & Levels",
    question: "Why does Michael Porter emphasize that operational effectiveness is NOT strategy?",
    options: [
      "Because operational effectiveness only applies to factory workers",
      "Because best practices like lean operations are easily diffused and copied by competitors, creating competitive convergence rather than a unique, defensible market position",
      "Because operational effectiveness lowers profit margins by law",
      "Because strategy ignores cost reduction"
    ],
    correctIndex: 1,
    explanation: "Operational effectiveness is about running the same race faster; strategy is about choosing to run a different race."
  },
  {
    id: "fe-3",
    module: "Module 3: Industry Life Cycle",
    question: "During which stage of the Industry Life Cycle do overall industry profit margins typically reach their peak due to falling unit costs (scale economies) combined with surging customer demand?",
    options: ["Introduction Stage", "Growth Stage", "Maturity Stage", "Decline Stage"],
    correctIndex: 1,
    explanation: "The Growth stage combines falling unit costs (scale economies) with rapid mass-market adoption, yielding peak industry profitability."
  },
  {
    id: "fe-4",
    module: "Module 3: Industry Life Cycle",
    question: "When an industry reaches the Maturity Stage, what is the primary source of sales growth for competing companies?",
    options: [
      "Millions of first-time early adopters trying the technology for the first time",
      "Winning market share away from direct competitors and customer replacement cycles",
      "Government research subsidies",
      "Foreign aid grants"
    ],
    correctIndex: 1,
    explanation: "In a saturated mature market, market expansion flattens; growth comes primarily from stealing market share from rivals."
  },
  {
    id: "fe-5",
    module: "Module 4: Porter's Five Forces",
    question: "How do high Customer Switching Costs affect an industry's structural profitability?",
    options: [
      "They destroy profits by forcing companies to lower prices",
      "They protect industry profits by acting as a barrier to new entrants and reducing the bargaining power of buyers",
      "They only benefit suppliers of raw lumber",
      "They make products illegal to sell"
    ],
    correctIndex: 1,
    explanation: "Switching costs lock in existing customers, dampening buyer leverage and blocking outside entrants from poaching clients."
  },
  {
    id: "fe-6",
    module: "Module 4: Porter's Five Forces",
    question: "For a manufacturer of commercial glass bottles, which of the following is considered an external SUBSTITUTE GOOD?",
    options: [
      "Another glass bottle blowing plant in the neighboring town",
      "Aluminum beverage cans, plastic PET bottles, and liquid cartons",
      "The silica sand mining company providing raw glass materials",
      "The beverage company purchasing the bottles"
    ],
    correctIndex: 1,
    explanation: "Cans, plastic bottles, and cartons come from different industries but satisfy the same underlying customer job of containing beverages."
  },
  {
    id: "fe-7",
    module: "Module 5: Game Theory",
    question: "What is the defining characteristic of a Nash Equilibrium in corporate competitive games?",
    options: [
      "Both companies achieve the highest possible joint profits in the entire market",
      "No company can unilaterally improve its profit by deviating from its chosen strategy, given the strategy chosen by its rival",
      "Both companies agree in writing to fix prices",
      "All competitors go bankrupt simultaneously"
    ],
    correctIndex: 1,
    explanation: "In a Nash Equilibrium, each player's strategy is optimal given the other players' strategies; no single player has an incentive to change course alone."
  },
  {
    id: "fe-8",
    module: "Module 5: Game Theory",
    question: "Why do automated price-matching policies advertised to consumers actually discourage competitors from initiating price cuts?",
    options: [
      "Because competitors are legally forbidden from advertising",
      "Because rivals know that cutting prices will not steal customers—the price cut will be matched immediately by the competitor—eliminating any volume gain",
      "Because consumers hate low prices",
      "Because price-matching is illegal"
    ],
    correctIndex: 1,
    explanation: "Automatic price-matching eliminates any customer volume gain from discounting, removing the rational motive for a competitor to start a price war."
  },
  {
    id: "fe-9",
    module: "Module 6: Competitive Advantage & VRIO",
    question: "Under the Resource-Based View (RBV) and VRIO framework, what happens when an internal resource is Valuable and Rare, but EASY for rivals to imitate within 60 days?",
    options: [
      "Sustained Competitive Advantage",
      "Competitive Disadvantage",
      "Temporary Competitive Advantage",
      "Complete Market Monopoly"
    ],
    correctIndex: 2,
    explanation: "Without barriers to imitation (I), rivals copy the resource quickly, eroding an initial advantage into competitive parity."
  },
  {
    id: "fe-10",
    module: "Module 6: Competitive Advantage & VRIO",
    question: "How is Economic Value Created (EVC) mathematically defined in competitive strategy?",
    options: [
      "Gross Revenue minus Income Taxes",
      "Willingness to Pay (WTP) minus Cost (C)",
      "Price multiplied by Total Units Sold",
      "Shareholder Equity divided by Total Debt"
    ],
    correctIndex: 1,
    explanation: "Economic value created is the total wedge between perceived customer value (WTP) and production cost (C)."
  },
  {
    id: "fe-11",
    module: "Module 7: Generic Competitive Strategies",
    question: "What is the critical rule of 'Cost Proximity' or 'Acceptable Quality' for a company pursuing a Cost Leadership strategy?",
    options: [
      "The product must be the most luxurious on Earth",
      "The product must be sufficiently close in quality and reliability to differentiated rivals so that mainstream buyers accept it as a viable substitute",
      "The company must never use advertising",
      "The product must be priced higher than all competitors"
    ],
    correctIndex: 1,
    explanation: "A cost leader must maintain acceptable quality; if quality falls below customer tolerance, no discount can save the business."
  },
  {
    id: "fe-12",
    module: "Module 7: Generic Competitive Strategies",
    question: "What danger does a firm face when it tries to combine Cost Leadership and Broad Differentiation without revolutionary process innovation?",
    options: [
      "It becomes a guaranteed monopoly",
      "It becomes 'Stuck in the Middle,' suffering from higher costs than the cost leader and lower perceived value than the differentiator, losing customers to both",
      "It eliminates all taxes",
      "It pays lower wages"
    ],
    correctIndex: 1,
    explanation: "Being stuck in the middle leaves a firm squeezed between low-cost rivals and differentiated rivals, eroding its margins."
  },
  {
    id: "fe-13",
    module: "Module 8: Growth Strategies",
    question: "When electric vehicle maker Tesla decided to build its own lithium refining plants and design its own custom microprocessors, which growth strategy was it executing?",
    options: [
      "Forward Vertical Integration",
      "Backward Vertical Integration (moving upstream into suppliers to secure critical inputs)",
      "Horizontal Merger with Ford",
      "Conglomerate Divestiture"
    ],
    correctIndex: 1,
    explanation: "Moving upstream into raw materials and component manufacturing represents Backward Vertical Integration."
  },
  {
    id: "fe-14",
    module: "Module 8: Growth Strategies",
    question: "What is the primary risk of an aggressive Horizontal Acquisition of a direct rival?",
    options: [
      "Antitrust regulatory rejection and difficult post-merger cultural/IT integration",
      "Inability to find any customers",
      "The product becomes too cheap to manufacture",
      "The government forces the company to double wages"
    ],
    correctIndex: 0,
    explanation: "Horizontal mergers face intense regulatory scrutiny for reducing competition and high risk of post-merger integration failure."
  },
  {
    id: "fe-15",
    module: "Module 9: SWOT Framework & Starbucks Case",
    question: "In a TOWS Strategic Matrix, what is an 'SO Strategy'?",
    options: [
      "A strategy to sell off assets during bankruptcy",
      "An offensive, growth-oriented strategy that deploys internal Strengths to capitalize on external market Opportunities",
      "A strategy to minimize weaknesses during recessions",
      "A strategy to reduce payroll expenses"
    ],
    correctIndex: 1,
    explanation: "SO strategies match internal strengths directly with external opportunities for aggressive value creation."
  }
];

export interface GlossaryTerm {
  term: string;
  category: string;
  definition: string;
  example: string;
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Ansoff Matrix",
    category: "Corporate Growth",
    definition: "A 2x2 strategic planning framework categorizing corporate growth into Market Penetration, Market Development, Product Development, and Diversification.",
    example: "Apple launching the Apple Watch to current iPhone users is Product Development."
  },
  {
    term: "Backward Integration",
    category: "Vertical Integration",
    definition: "A corporate growth strategy where a firm expands upstream to own or control the production of its own raw materials or component supplies.",
    example: "Netflix producing original movies rather than licensing from Hollywood studios."
  },
  {
    term: "Barriers to Entry",
    category: "Industry Analysis",
    definition: "Structural, financial, or regulatory obstacles that make it difficult or costly for new competitors to enter an industry.",
    example: "High capital requirements ($15B+ fab costs) protect semiconductor chipmakers."
  },
  {
    term: "Business Strategy",
    category: "Foundations",
    definition: "Strategy formulated at the business unit level focusing on how to win market share and build competitive advantage against direct rivals within a specific industry.",
    example: "How AWS competes against Microsoft Azure in cloud computing."
  },
  {
    term: "Causal Ambiguity",
    category: "Internal Advantage",
    definition: "A barrier to imitation where competitors cannot diagnose the exact causal relationship between a firm's internal practices and its superior market success.",
    example: "Rivals struggling to duplicate Southwest Airlines' unique organizational culture."
  },
  {
    term: "Company Life Cycle",
    category: "Internal Advantage",
    definition: "The internal developmental trajectory of a single firm through Startup/Infancy, Rapid Growth, Maturity/Bureaucracy, and Renewal or Decline.",
    example: "Apple navigating from near-bankruptcy in 1996 into strategic renewal in 1997."
  },
  {
    term: "Competitive Advantage",
    category: "Internal Advantage",
    definition: "The ability of an enterprise to generate a wider wedge between customer Willingness to Pay (WTP) and unit production Cost (C) than its competitors can.",
    example: "Apple capturing 80%+ of smartphone industry profits through high WTP."
  },
  {
    term: "Corporate Strategy",
    category: "Foundations",
    definition: "High-level strategic decisions made at corporate headquarters regarding which industries and markets to compete in, M&A acquisitions, and enterprise capital allocation.",
    example: "Disney deciding to own theme parks, movie studios, cruise lines, and streaming apps."
  },
  {
    term: "Cost Leadership",
    category: "Generic Strategies",
    definition: "A generic competitive strategy where a firm achieves the lowest operating cost structure in the industry across a broad market.",
    example: "Walmart and Ryanair using scale economies and process efficiency to win."
  },
  {
    term: "Differentiation",
    category: "Generic Strategies",
    definition: "A generic competitive strategy where a firm offers unique perceived value (quality, design, brand, service) commanding a premium price across broad markets.",
    example: "BMW and Apple commanding price premiums above their cost of uniqueness."
  },
  {
    term: "Dominant Design",
    category: "Industry Life Cycle",
    definition: "The technological architecture or product standard that wins widespread market acceptance and defines the industry standard for subsequent generations.",
    example: "The capacitive touchscreen smartphone design established by the iPhone in 2007."
  },
  {
    term: "Dominant Strategy",
    category: "Game Theory",
    definition: "In game theory, an action that yields the highest payoff for a player regardless of which choice the opposing player selects.",
    example: "Confessing in the Prisoner's Dilemma regardless of the partner's silence."
  },
  {
    term: "Economic Value Created (EVC)",
    category: "Internal Advantage",
    definition: "The total economic surplus generated by a business activity, calculated as customer Willingness to Pay minus Cost (WTP - C).",
    example: "A customer willing to pay $1,000 for a laptop that costs $400 creates $600 of EVC."
  },
  {
    term: "Economies of Scale",
    category: "Cost Drivers",
    definition: "The cost advantage that arises when unit production cost decreases as total production output volume increases, spreading fixed overhead over more units.",
    example: "Massive automotive stamping plants reducing cost per door panel."
  },
  {
    term: "Five Forces Model",
    category: "Industry Analysis",
    definition: "Michael Porter's framework evaluating industry profitability based on Entrants, Substitutes, Rivalry, Supplier Power, and Buyer Power.",
    example: "Explaining why airlines have low average margins while software has high margins."
  },
  {
    term: "Forward Integration",
    category: "Vertical Integration",
    definition: "A corporate growth strategy where a firm moves downstream into distribution, retail storefronts, or post-sale service to control the customer experience.",
    example: "Apple opening branded Apple Retail Stores instead of relying only on wholesalers."
  },
  {
    term: "Horizontal Growth",
    category: "Corporate Growth",
    definition: "Expanding an enterprise's operations at the same stage of the supply chain/value chain, either by acquiring direct rivals or expanding geographically.",
    example: "Marriott acquiring Starwood Hotels to become the world's largest hotel operator."
  },
  {
    term: "Industry Life Cycle",
    category: "Industry Analysis",
    definition: "The S-curve evolutionary pattern of an entire industry through Introduction, Growth, Maturity, and Decline stages over time.",
    example: "The personal computer industry transitioning from explosive growth into maturity."
  },
  {
    term: "Inorganic Growth",
    category: "Corporate Growth",
    definition: "Expanding a business through external transactions: Mergers, Acquisitions (M&A), joint ventures, and strategic equity investments.",
    example: "Disney acquiring Pixar and Marvel to rapidly capture creative IP and talent."
  },
  {
    term: "Nash Equilibrium",
    category: "Game Theory",
    definition: "A game-theoretic state where no player can unilaterally improve their payoff by altering their strategy, given the choices of all other players.",
    example: "Two competing gas stations stuck charging discounted prices during a price war."
  },
  {
    term: "Network Effects",
    category: "Barriers to Entry",
    definition: "When a product or service becomes exponentially more valuable as more users adopt it, creating powerful lock-in and barriers to entry.",
    example: "Visa/Mastercard, WhatsApp, and eBay."
  },
  {
    term: "Organic Growth",
    category: "Corporate Growth",
    definition: "Expanding an enterprise internally through reinvested operating cash flows, proprietary R&D, direct hiring, and greenfield store/office openings.",
    example: "ALDI and Zara opening stores one by one to preserve operational culture."
  },
  {
    term: "Prisoner's Dilemma",
    category: "Game Theory",
    definition: "A game theory paradox where two rational competitors pursuing individual self-interest arrive at a suboptimal, mutually destructive outcome.",
    example: "Competing airlines slashing ticket prices below fuel cost to defend market share."
  },
  {
    term: "Stuck in the Middle",
    category: "Generic Strategies",
    definition: "The failure to commit to a clear generic strategy (Cost Leadership, Differentiation, or Focus), leaving a firm with high costs and uninspired products.",
    example: "Sears and Kmart being squeezed between low-cost Walmart and stylish Target."
  },
  {
    term: "Switching Costs",
    category: "Barriers to Entry",
    definition: "The financial, operational, or emotional friction and expenses a customer faces when changing from one supplier or brand to another.",
    example: "Retraining 5,000 hospital nurses on a new medical record software system."
  },
  {
    term: "TOWS Matrix",
    category: "Strategic Synthesis",
    definition: "An action-oriented variant of SWOT that cross-matches internal Strengths/Weaknesses with external Opportunities/Threats into SO, ST, WO, and WT initiatives.",
    example: "Pairing Starbucks' digital app (S) with Asian market expansion (O) for growth."
  },
  {
    term: "Value Chain",
    category: "Internal Advantage",
    definition: "Michael Porter's model dividing a firm into Primary Activities (logistics, ops, marketing) and Support Activities (tech, HR, procurement) to locate advantage.",
    example: "Zara's tightly linked design, manufacturing, and store distribution system."
  },
  {
    term: "VRIO Framework",
    category: "Internal Advantage",
    definition: "Jay Barney's test evaluating whether an internal resource is Valuable, Rare, Inimitable, and Organized to sustain competitive advantage over time.",
    example: "Auditing Tesla's proprietary global Supercharger network."
  },
  {
    term: "Willingness to Pay (WTP)",
    category: "Internal Advantage",
    definition: "The maximum monetary amount a customer would willingly part with to purchase a product or service based on its perceived utility and quality.",
    example: "Luxury buyers willing to pay $10,000 for a handcrafted Rolex timepiece."
  },
  {
    term: "Zero-Sum Game",
    category: "Game Theory",
    definition: "A strategic situation where one player's financial or volume gain is exactly equal to another player's loss; total net change equals zero.",
    example: "Market share battles for shelf space in flat, zero-growth mature markets."
  }
];
