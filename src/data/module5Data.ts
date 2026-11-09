import { ModuleData } from '../types/course';

export const module5: ModuleData = {
  id: 5,
  moduleNumber: "Module 5",
  title: "Game theory applied in a corporate context",
  shortTitle: "Game Theory in Strategy",
  description: "Explores dynamic strategic interactions using Game Theory. Examines zero-sum vs. non-zero-sum games, dominant strategies, the Prisoner's Dilemma, Nash Equilibrium, and how firms navigate price wars, capacity commitments, and advertising battles in the real business world.",
  importance: "While Porter's Five Forces provides a static structural snapshot of an industry, Game Theory models the dynamic, multi-step moves and counter-moves of intelligent competitors. Ignoring rival reactions leads to disastrous price wars.",
  learningObjectives: [
    "Distinguish between Zero-Sum and Non-Zero-Sum (Positive-Sum and Negative-Sum) games",
    "Explain why Game Theory is indispensable for analyzing oligopolistic competition",
    "Analyze the Prisoner's Dilemma and its critical implications for pricing, advertising, and capacity investments",
    "Construct and solve a 2x2 Game Theory Payoff Matrix to identify dominant strategies and Nash Equilibrium"
  ],
  requiredKnowledge: "Modules 1 to 4.",
  skillsToDevelop: ["Payoff Matrix Construction", "Nash Equilibrium Identification", "Competitor Reaction Forecasting", "Price War Avoidance"],
  expectedOutcomes: "Ability to anticipate how rivals will respond before making pricing, capacity, or promotional moves, preventing destructive tit-for-tat retaliation.",
  summary: "Game theory teaches that business success depends not only on your choices, but on anticipating the choices of your rivals. Understanding the Prisoner's Dilemma helps firms maintain pricing discipline and avoid mutually destructive moves.",
  lessons: [
    {
      id: "5.1",
      lessonNumber: "5.1",
      title: "The essence of zero-sum games",
      moduleId: 5,
      moduleTitle: "Game theory applied in a corporate context",
      estimatedMinutes: 35,
      originalVideoTime: "2 min",
      difficulty: "Beginner to Intermediate",
      priorKnowledge: "Module 4",
      learningObjectives: [
        "Define a Zero-Sum Game and contrast it with Positive-Sum and Negative-Sum games",
        "Explain why pure zero-sum thinking is dangerous and often inaccurate in modern business",
        "Identify business scenarios that are truly zero-sum vs. those capable of value creation"
      ],
      simpleIntro: "In poker or chess, whatever one player wins, the other player loses: (+1) + (-1) = 0. That is a Zero-Sum Game. Many business leaders mistakenly treat all competition as zero-sum warfare. But in the business world, games can expand total value (Positive-Sum) or destroy it for everyone (Negative-Sum). Let's explore the difference.",
      detailedExplanation: {
        sections: [
          {
            heading: "Defining the Three Types of Strategic Games",
            content: "Game Theory classifies competitive interactions into three primary categories:",
            table: {
              headers: ["Game Type", "Mathematical Formula", "Business Meaning & Example"],
              rows: [
                ["Zero-Sum Game", "Gains + Losses = 0", "Pure redistribution of a fixed pie. Winning 10% market share means a rival loses exactly 10% market share in a mature, fixed-size market."],
                ["Positive-Sum Game", "Gains + Losses > 0", "Win-win value creation. Two firms cooperate or innovate, expanding total market demand so both earn higher profits."],
                ["Negative-Sum Game", "Gains + Losses < 0", "Mutual destruction (Lose-lose). Both firms slash prices to cost in a brutal price war, burning cash and destroying industry value."]
              ]
            }
          },
          {
            heading: "The Danger of Blind Zero-Sum Mentality",
            content: "When executives assume business is always zero-sum, they make three common mistakes:",
            bulletPoints: [
              "They fixate on crushing rivals rather than creating unique value for customers.",
              "They trigger destructive price wars, turning the industry into a negative-sum bloodbath.",
              "They ignore potential value-creating partnerships, industry standard alliances, and supply chain efficiencies."
            ]
          }
        ]
      },
      diagram: {
        title: "The Three Game Dynamics",
        description: "How total economic surplus behaves across competitive interactions.",
        type: "matrix",
        items: [
          { label: "Positive-Sum", sublabel: "Market expansion (Win-Win)", highlight: true },
          { label: "Zero-Sum", sublabel: "Fixed pie redistribution (+1 / -1)" },
          { label: "Negative-Sum", sublabel: "Price war destruction (Lose-Lose)" }
        ]
      },
      examples: [
        {
          type: "Real-World Industry",
          title: "The Zero-Sum Supermarket Shelf War",
          narrative: "In a country where population growth is 0%, consumer purchases of laundry detergent are fixed. If Brand A wins 5 feet of supermarket eye-level shelf space, Brand B loses exactly 5 feet, and Brand A's 3% sales increase is Brand B's 3% sales drop. In this mature, fixed-pie scenario, physical shelf-space competition is strictly zero-sum.",
          takeaway: "In saturated mature markets with fixed consumer demand, market share competition is often zero-sum."
        }
      ],
      practicalApplication: {
        rule: "Always determine whether your market pie is fixed (Zero-Sum) or expandable (Positive-Sum) before designing your strategy.",
        steps: [
          "If the market is growing rapidly (Growth stage), seek positive-sum customer adoption.",
          "If the market is saturated (Maturity stage), expect aggressive zero-sum resistance from incumbents whenever you try to take their customers.",
          "Avoid triggering negative-sum price wars by competing on differentiation rather than raw price."
        ]
      },
      stepByStepPractice: {
        whatToDo: "Classify three business situations into Zero-Sum, Positive-Sum, or Negative-Sum.",
        whyToDoIt: "Sharpens strategic game awareness.",
        howToDoIt: [
          "Situation 1: Two tech giants agree on a universal Bluetooth standard so all wireless headphones work on all phones -> Positive-Sum (market expands).",
          "Situation 2: Two regional gas stations enter a price-matching war, dropping gas prices below wholesale cost -> Negative-Sum (both lose money).",
          "Situation 3: Two law firms bid for an exclusive legal contract with the city government -> Zero-Sum (one wins, one loses)."
        ],
        expectedResult: "Accurate classification of strategic game dynamics.",
        commonMistakes: "Believing that all business competition is naturally zero-sum.",
        correction: "Recognize that creating new customer value and expanding markets makes business positive-sum."
      },
      keyTakeaways: [
        "In zero-sum games, one player's gain equals another player's exact loss.",
        "Positive-sum games create new value and expand total industry profits.",
        "Negative-sum price wars destroy industry profits for all participants.",
        "Effective strategists look for positive-sum opportunities to grow the market while defending zero-sum positions."
      ],
      lessonSummary: "Lesson 5.1 introduced Game Theory by examining Zero-Sum, Positive-Sum, and Negative-Sum games, warning against destructive zero-sum thinking and showing when cooperation expands the total pie.",
      knowledgeCheck: [
        {
          id: "kc5-1-1",
          question: "When two competing airlines enter an aggressive price war where both fly flights half-empty at prices below fuel costs, what type of strategic game are they playing?",
          options: ["Positive-Sum Game", "Negative-Sum Game", "Zero-Sum Game", "Cooperative Alliance"],
          correctIndex: 1,
          explanation: "In a price war where both players lose cash, the net industry outcome is negative-sum (destruction of value)."
        }
      ],
      assignment: {
        title: "Game Dynamic Classification Audit",
        instructions: "Identify three distinct competitive situations in your target company's industry. Label one as Zero-Sum, one as Positive-Sum, and one as Negative-Sum, explaining the rationale for each.",
        expectedOutput: "A 150-word classification memo.",
        submissionRequirements: "Submit in your study notebook.",
        evaluationCriteria: ["Correct identification of all 3 game types (100%)"]
      },
      furtherLearning: ["Read 'Theory of Games and Economic Behavior' by John von Neumann and Oskar Morgenstern"]
    },
    {
      id: "5.2",
      lessonNumber: "5.2",
      title: "Game theory and why it is useful in strategy",
      moduleId: 5,
      moduleTitle: "Game theory applied in a corporate context",
      estimatedMinutes: 35,
      originalVideoTime: "2 min",
      difficulty: "Beginner to Intermediate",
      priorKnowledge: "Lesson 5.1",
      learningObjectives: [
        "Explain why Game Theory is specifically suited for Oligopolistic markets (markets with few competitors)",
        "Define the core components of any strategic game: Players, Actions/Strategies, Information, and Payoffs",
        "Explain how Game Theory complements Porter's Five Forces Model"
      ],
      simpleIntro: "If you operate a wheat farm among 50,000 other wheat farmers, your decision to sell wheat does not change the global price—you are a 'price taker.' But if you run Coca-Cola, whatever you do directly affects Pepsi, and whatever Pepsi does directly affects you! That mutual interdependence is why Game Theory is essential for corporate strategy.",
      detailedExplanation: {
        sections: [
          {
            heading: "Strategic Interdependence in Oligopolies",
            content: "Game Theory applies whenever there is Strategic Interdependence: a situation where the optimal choice for Firm A depends directly on what Firm A expects Firm B to do, and vice versa.",
            bulletPoints: [
              "Perfect Competition: Millions of tiny players; no single player has market power; game theory is not needed.",
              "Pure Monopoly: Only one player; no rivals to react; game theory is not needed.",
              "Oligopoly: A handful of large, powerful competitors (e.g., smartphones, commercial airliners, credit cards). Game theory is INDISPENSABLE here because rivals observe and react to every move."
            ]
          },
          {
            heading: "The Four Elements of a Strategic Game",
            content: "Every business game consists of four structural elements:",
            table: {
              headers: ["Game Element", "Definition", "Corporate Strategy Example"],
              rows: [
                ["1. Players", "The rational decision-makers in the game.", "Boeing and Airbus."],
                ["2. Actions / Strategies", "The choices available to each player.", "Build a new mid-size passenger jet or cancel the project."],
                ["3. Information", "What each player knows about the other's costs, capacity, and motives.", "Public announcements, patent filings, and supplier rumors."],
                ["4. Payoffs", "The resulting profit, revenue, or market share for each combination of choices.", "Net present value (NPV) of cash flows under each scenario."]
              ]
            }
          }
        ]
      },
      diagram: {
        title: "The Game Theory Dynamic Feedback Loop",
        description: "How interdependent rivals continuously anticipate and react to strategic moves.",
        type: "flow",
        items: [
          { label: "Firm A Plans Move", sublabel: "E.g., Price cut or CapEx expansion" },
          { label: "Anticipates Reaction", sublabel: "How will Rival B respond?", highlight: true },
          { label: "Rival B Countermove", sublabel: "Match, ignore, or retaliate" },
          { label: "Final Payoff Realized", sublabel: "Joint industry equilibrium" }
        ]
      },
      examples: [
        {
          type: "Case Study",
          title: "The Airbus A380 vs. Boeing 787 Strategic Duel",
          narrative: "In the early 2000s, Airbus and Boeing faced a massive strategic choice: where to invest billions in next-generation aircraft. Airbus bet that hub-to-hub travel would dominate and built the giant 550-seat A380. Boeing anticipated that passengers wanted direct point-to-point flights and built the mid-sized, ultra-fuel-efficient composite 787 Dreamliner. Boeing's anticipation of airline economics and passenger behavior won the strategic game.",
          takeaway: "In oligopolies, billions in capital are won or lost based on accurately predicting rival moves and market realities."
        }
      ],
      practicalApplication: {
        rule: "Before making any major pricing or capacity move, play out the 'Next 3 Moves' like a chess player.",
        steps: [
          "Move 1: What is my proposed action?",
          "Move 2: What is the most rational, profit-maximizing counter-move my competitor will make in response?",
          "Move 3: If they make that counter-move, am I in a better or worse financial position than before I started?",
          "If Move 3 leaves you worse off, ABANDON Move 1!"
        ]
      },
      stepByStepPractice: {
        whatToDo: "Apply the 'Next 3 Moves' rule to a retail price discount.",
        whyToDoIt: "Prevents impulsive price cuts that trigger retaliation.",
        howToDoIt: [
          "Move 1: Local Gym A cuts monthly membership from $50 to $35 to steal Gym B's members.",
          "Move 2: Gym B immediately matches the $35 price within 24 hours.",
          "Move 3: Both gyms now have the exact same number of members as before, but both earn 30% less revenue.",
          "Decision: Do not cut price; instead, add free personal training sessions (differentiation)."
        ],
        expectedResult: "Avoidance of a self-inflicted revenue collapse.",
        commonMistakes: "Assuming competitors will sit passively and do nothing when you attack their market share.",
        correction: "Always assume competitors are rational, watchful, and will defend their cash flow."
      },
      keyTakeaways: [
        "Game Theory models strategic interdependence where outcomes depend on mutual decisions.",
        "It is most valuable in Oligopoly industries with a few dominant players.",
        "Always evaluate: Players, Actions, Information, and Payoffs.",
        "Think forward and reason backward: Anticipate how rivals will respond before you act."
      ],
      lessonSummary: "Lesson 5.2 explained the power of Game Theory in corporate strategy, demonstrating how strategic interdependence operates in oligopolies and providing the 'Next 3 Moves' rule for decision-making.",
      knowledgeCheck: [
        {
          id: "kc5-2-1",
          question: "In which type of market structure is Game Theory MOST useful and necessary for strategic executives?",
          options: [
            "Perfect Competition (thousands of identical wheat farmers)",
            "Pure Monopoly with zero rivals and zero substitutes",
            "Oligopoly (a few dominant firms whose moves directly impact each other)",
            "A government agency with no budget"
          ],
          correctIndex: 2,
          explanation: "In an oligopoly, the strategic choices of one firm directly impact the profits and responses of its rivals."
        }
      ],
      assignment: {
        title: "Interdependent Competitor Interaction Analysis",
        instructions: "Identify an oligopoly market (e.g., commercial aircraft, smartphones, ride-hailing). Outline: 1) The key Players, 2) The primary Actions/Strategies available, and 3) A historical example where Firm A made a move and Firm B immediately countered.",
        expectedOutput: "A 200-word analysis.",
        submissionRequirements: "Submit in your study notebook.",
        evaluationCriteria: ["Clear oligopoly identification (30%)", "Accurate player/action breakdown (35%)", "Compelling countermove example (35%)"]
      },
      furtherLearning: ["Read 'Thinking Strategically' by Avinash Dixit and Barry Nalebuff"]
    },
    {
      id: "5.3",
      lessonNumber: "5.3",
      title: "Understanding the Prisoner's dilemma and its implications in the business world",
      moduleId: 5,
      moduleTitle: "Game theory applied in a corporate context",
      estimatedMinutes: 45,
      originalVideoTime: "3 min",
      difficulty: "Intermediate",
      priorKnowledge: "Lessons 5.1 and 5.2",
      learningObjectives: [
        "Explain the classic Prisoner's Dilemma thought experiment and mathematical structure",
        "Define Dominant Strategy and Nash Equilibrium in strategic decision-making",
        "Explain why individually rational choices lead to a collectively disastrous outcome in business price wars and advertising battles"
      ],
      simpleIntro: "Why do two intelligent, rational business leaders repeatedly make choices that destroy millions of dollars in profits for both of their companies? The answer lies in the most famous puzzle in game theory: The Prisoner's Dilemma. In this lesson, we break down why individual self-interest often produces collective financial disaster.",
      detailedExplanation: {
        sections: [
          {
            heading: "The Classic Prisoner's Dilemma Story",
            content: "Two criminal suspects (Suspect A and Suspect B) are arrested and placed in separate interrogation cells with zero communication:",
            bulletPoints: [
              "If both stay silent (Cooperate with each other): Both get a light 1-year sentence on a minor charge.",
              "If one confesses (Betrays) while the other stays silent: The confessor goes free (0 years), while the silent one gets a harsh 10-year prison sentence.",
              "If BOTH confess (Betray each other): Both get a heavy 5-year prison sentence."
            ]
          },
          {
            heading: "The Mathematical 2x2 Payoff Matrix",
            content: "Let us examine the payoff matrix for Suspect A and Suspect B (years in prison; lower is better):",
            table: {
              headers: ["Choice", "Suspect B Stays Silent (Cooperate)", "Suspect B Confesses (Defect)"],
              rows: [
                ["Suspect A Stays Silent", "A: 1 year, B: 1 year (Best Joint Outcome)", "A: 10 years, B: 0 years (A is crushed)"],
                ["Suspect A Confesses", "A: 0 years, B: 10 years (A goes free)", "A: 5 years, B: 5 years (NASH EQUILIBRIUM)",]
              ]
            }
          },
          {
            heading: "Why Both Confess: Dominant Strategy and Nash Equilibrium",
            content: "Notice Suspect A's logic:",
            bulletPoints: [
              "If Suspect B stays silent, A should confess (0 years is better than 1 year).",
              "If Suspect B confesses, A should STILL confess (5 years is better than 10 years).",
              "Dominant Strategy: Confessing is the best choice for Suspect A NO MATTER WHAT Suspect B does!",
              "Because Suspect B has the exact same dominant strategy, BOTH confess, and both get 5 years in prison—even though staying silent would have given both just 1 year!",
              "Nash Equilibrium: A state where neither player can improve their outcome by unilaterally changing their strategy, given what the other player has chosen."
            ]
          }
        ]
      },
      diagram: {
        title: "The Prisoner's Dilemma Corporate Payoff Matrix",
        description: "How individual incentives push competing firms into low-profit Nash Equilibrium.",
        type: "matrix",
        items: [
          { label: "Both Keep High Prices", sublabel: "Win-Win ($10M, $10M) - Ideal" },
          { label: "Firm A Cuts / B Holds", sublabel: "Firm A wins ($15M), B loses ($2M)" },
          { label: "Firm B Cuts / A Holds", sublabel: "Firm B wins ($15M), A loses ($2M)" },
          { label: "Both Cut Prices", sublabel: "NASH EQUILIBRIUM ($4M, $4M) - Trapped", highlight: true }
        ]
      },
      examples: [
        {
          type: "Case Study",
          title: "The Cigarette Advertising Ban Paradox",
          narrative: "Before 1971, tobacco companies in the US spent tens of millions on television advertising. If Philip Morris advertised and RJ Reynolds did not, Philip Morris stole millions in market share. So both were forced to advertise heavily, spending immense sums just to maintain their existing market shares (a classic Prisoner's Dilemma). In 1971, the US government banned cigarette ads on TV. Suddenly, both firms were legally forced to cooperate (stop advertising). The result? Cigarette sales remained steady, marketing expenses collapsed, and tobacco company profits skyrocketed!",
          takeaway: "An external rule that enforces cooperation can rescue competing firms from a Prisoner's Dilemma."
        }
      ],
      practicalApplication: {
        rule: "Recognize when you are trapped in a Prisoner's Dilemma and use signaling or repeat-game strategies to escape.",
        steps: [
          "Single-round games lead to betrayal; repeated games ('Iterated Prisoner's Dilemma') allow cooperation to emerge.",
          "Use Tit-for-Tat: Start by cooperating (maintain fair prices). If a competitor discounts, retaliate immediately and proportionally. Once they return to disciplined pricing, forgive and cooperate again.",
          "Broadcast clear public price-matching commitments ('We guarantee to match any rival's advertised price'). This signals to rivals that price cutting will NOT steal customers, removing their incentive to defect!"
        ]
      },
      stepByStepPractice: {
        whatToDo: "Construct a 2x2 matrix for two gas stations deciding whether to cut prices.",
        whyToDoIt: "Masters the construction and interpretation of strategic payoff matrices.",
        howToDoIt: [
          "Players: Station 1 and Station 2.",
          "Strategies: High Price ($4.00) vs. Discount Price ($3.50).",
          "Payoffs: Both High = ($5,000, $5,000). Both Discount = ($2,500, $2,500). One cuts while other holds = Cutter gets $8,000, holder gets $1,000.",
          "Solve: Identify that Both Discount is the Nash Equilibrium ($2,500, $2,500)."
        ],
        expectedResult: "Visual proof of how self-interest reduces joint profits from $10,000 to $5,000.",
        commonMistakes: "Confusing the Best Joint Outcome with the Nash Equilibrium.",
        correction: "The Best Joint Outcome is unstable because both players have an individual incentive to cheat; the Nash Equilibrium is stable because neither can improve alone."
      },
      keyTakeaways: [
        "The Prisoner's Dilemma proves that individually rational choices can produce collectively terrible outcomes.",
        "A Dominant Strategy is an action that yields the highest payoff regardless of what rivals choose.",
        "Nash Equilibrium is the stable state where neither player has an incentive to change their choice unilaterally.",
        "In business, price wars and ad battles are classic Prisoner's Dilemmas that destroy industry profitability."
      ],
      lessonSummary: "Lesson 5.3 unpacked the Prisoner's Dilemma, mathematically illustrating how dominant strategies push competing firms into low-profit Nash Equilibria, and showing how repeated games and price-matching commitments restore pricing discipline.",
      knowledgeCheck: [
        {
          id: "kc5-3-1",
          question: "What is a 'Nash Equilibrium' in a business game?",
          options: [
            "A situation where both companies go bankrupt simultaneously",
            "A state where each company is making the best possible decision given the choices of its rivals, and neither firm has an incentive to change its choice unilaterally",
            "A legal contract signed by two monopolies",
            "A situation where advertising is completely free"
          ],
          correctIndex: 1,
          explanation: "In a Nash Equilibrium, no player can unilaterally improve their payoff by deviating from their chosen strategy."
        },
        {
          id: "kc5-3-2",
          question: "Why did tobacco company profits INCREASE after the US government legally banned cigarette television advertising in 1971?",
          options: [
            "Because more teenagers started smoking immediately",
            "Because the ban legally forced all competitors out of the Prisoner's Dilemma, eliminating millions in costly advertising while market shares remained stable",
            "Because television networks paid damages to tobacco firms",
            "Because cigarette manufacturing became completely automated"
          ],
          correctIndex: 1,
          explanation: "The ban eliminated the mutually destructive need to spend millions on TV ads just to defend market share, boosting industry profits."
        }
      ],
      assignment: {
        title: "Corporate Prisoner's Dilemma Matrix Construction",
        instructions: "Construct a 2x2 Payoff Matrix for two competing streaming services (StreamA and StreamB) choosing between 'Standard Subscription ($15/mo)' and 'Deep Discount ($8/mo)'. 1) Assign realistic quarterly profit payoffs in millions. 2) Identify the Dominant Strategy for each firm. 3) Circle the Nash Equilibrium and explain why it is worse than the cooperative outcome.",
        expectedOutput: "A 2x2 markdown matrix with 150-word analysis.",
        submissionRequirements: "Submit in your study notebook.",
        evaluationCriteria: [
          "Mathematically sound 2x2 matrix (40%)",
          "Correct identification of Dominant Strategy and Nash Equilibrium (40%)",
          "Insightful explanation of collective failure (20%)"
        ]
      },
      furtherLearning: ["Read Robert Axelrod's 'The Evolution of Cooperation' on the Tit-for-Tat strategy"]
    },
    {
      id: "5.4",
      lessonNumber: "5.4",
      title: "Gametheory shown in practice",
      moduleId: 5,
      moduleTitle: "Game theory applied in a corporate context",
      estimatedMinutes: 45,
      originalVideoTime: "2 min",
      difficulty: "Intermediate",
      priorKnowledge: "Lessons 5.1 to 5.3",
      learningObjectives: [
        "Apply game theory to real-world corporate decisions: capacity expansion, pre-emptive commitments, and price signaling",
        "Explain the strategic power of 'Credible Commitments' (burning bridges and irreversibility)",
        "Analyze how companies establish tacit coordination to avoid destructive price wars without violating antitrust laws"
      ],
      simpleIntro: "How do real companies use game theory every day? They don't just solve mathematical puzzles on a blackboard—they make strategic commitments, send public price signals, and structure guarantees to guide competitor behavior. In this lesson, we examine Game Theory in real-world business practice.",
      detailedExplanation: {
        sections: [
          {
            heading: "Strategic Commitments: The Power of Irreversibility",
            content: "In game theory, an announcement is only meaningful if it is a Credible Commitment—meaning it is physically or financially irreversible. If a competitor knows you cannot back down, they are forced to adjust their strategy around you.",
            bulletPoints: [
              "Cheap Talk: Saying 'We plan to fight any price cut' is easily ignored as a bluff.",
              "Credible Commitment: Sinking $500M into a massive automated factory or signing a publicly advertised 'Price Match Guarantee' makes backing down impossible, forcing rivals to back off."
            ]
          },
          {
            heading: "Three Practical Game Theory Applications in Business",
            content: "Leading corporations apply game theory across three primary strategic challenges:",
            table: {
              headers: ["Application", "The Strategic Problem", "Game-Theoretic Solution"],
              rows: [
                ["1. Pre-emptive Capacity Expansion", "Two chemical firms both want to build a new plant, but the market can only support one plant profitably.", "Firm A publicly breaks ground, purchases specialized machinery, and signs irreversible construction contracts, forcing Firm B to cancel its plant."],
                ["2. Price-Matching Guarantees", "Retailer A wants to stop Retailer B from undercutting its prices on consumer electronics.", "Retailer A advertises: 'Find a lower price anywhere and we will beat it by 10%!' This signals to Retailer B that cutting prices will win zero customers, neutralizing price wars."],
                ["3. Judicious Tit-for-Tat Retaliation", "A low-cost airline enters a legacy carrier's primary hub airport.", "The legacy carrier retaliates immediately by matching the entrant's price on that specific route, proving that entering its hub will generate zero profits, while keeping prices normal elsewhere."]
              ]
            }
          }
        ]
      },
      diagram: {
        title: "Pre-Emptive Capacity Commitment Tree",
        description: "How irreversible early moves eliminate rival alternatives.",
        type: "flow",
        items: [
          { label: "Firm A Sinks CapEx", sublabel: "Irreversible $500M commitment", highlight: true },
          { label: "Rival B Observes", sublabel: "Market cannot support 2 plants" },
          { label: "Rival B Cancels Plant", sublabel: "Avoids mutual financial ruin" },
          { label: "Firm A Captures Market", sublabel: "High long-term profits realized" }
        ]
      },
      examples: [
        {
          type: "Real-World Industry",
          title: "DuPont's Titanium Dioxide Pre-Emptive Capacity Strategy",
          narrative: "In the 1970s, DuPont anticipated that growing environmental regulations would impact titanium dioxide producers. Rather than waiting, DuPont made a massive, public, irreversible commitment to expand its own low-cost ilmenite-process capacity ahead of global demand. Competitors recognized that if they also built plants, massive oversupply would cause catastrophic losses. Seeing DuPont's credible commitment, competitors canceled their expansion plans, and DuPont came to dominate the global market.",
          takeaway: "An early, credible, irreversible capacity expansion can pre-empt rival investment and secure market dominance."
        }
      ],
      practicalApplication: {
        rule: "To deter aggressive competitor attacks, make your retaliatory capability credible and public.",
        steps: [
          "Do not rely on private threats.",
          "Establish publicly known, automatic retaliatory mechanisms (e.g., automated price-matching algorithms).",
          "Demonstrate that you possess the balance sheet liquidity to withstand a price war longer than your rival."
        ]
      },
      stepByStepPractice: {
        whatToDo: "Evaluate whether a strategic threat is 'cheap talk' or a 'credible commitment.'",
        whyToDoIt: "Prevents being bluffed by rival PR statements.",
        howToDoIt: [
          "Threat A: A CEO states in a newspaper interview, 'We will vigorously defend our market share.' -> Cheap Talk (zero cost to say, easily reversed).",
          "Threat B: A pharmaceutical firm breaks ground on a $1B automated manufacturing facility -> Credible Commitment (sunk capital, irreversible)."
        ],
        expectedResult: "Accurate evaluation of genuine competitor intentions.",
        commonMistakes: "Assuming public press releases are binding strategic commitments.",
        correction: "Only actions involving substantial sunk capital or contractual obligations constitute credible commitments."
      },
      keyTakeaways: [
        "Game Theory in practice relies on Credible Commitments to influence competitor behavior.",
        "Irreversible actions force rivals to accommodate rather than attack.",
        "Price-matching guarantees and automatic retaliation discourage destructive price wars.",
        "Distinguish between cheap talk and genuine, capital-backed commitments."
      ],
      lessonSummary: "Lesson 5.4 concluded Module 5 by examining Game Theory in real-world corporate practice, analyzing pre-emptive capacity expansion, credible commitments, and methods for maintaining pricing discipline.",
      knowledgeCheck: [
        {
          id: "kc5-4-1",
          question: "Why does an electronics retailer's public policy of 'We will beat any competitor's price by 10%' actually DISCOURAGE competitors from discounting prices?",
          options: [
            "Because the retailer pays fines to competitors",
            "Because the competitor realizes that discounting will not win any new customers—it will only trigger an automatic 10% lower price at the rival—destroying the competitor's incentive to cut prices in the first place",
            "Because the government prohibits other retailers from advertising",
            "Because customers prefer to pay higher prices"
          ],
          correctIndex: 1,
          explanation: "Automatic price-matching eliminates any customer volume gain from discounting, removing the rational motive for a competitor to start a price war."
        }
      ],
      assignment: {
        title: "Credible Commitment Strategy Design",
        instructions: "Design a strategic move for your target company that qualifies as a 'Credible Commitment.' 1) What specific action would it take? 2) Why is this action difficult or costly to reverse? 3) How will its primary competitor alter its behavior once it observes this commitment?",
        expectedOutput: "A 250-word strategic proposal.",
        submissionRequirements: "Submit in your study notebook.",
        evaluationCriteria: [
          "Clear, specific strategic action (30%)",
          "Rigorous explanation of irreversibility (35%)",
          "Logical forecast of competitor accommodation (35%)"
        ]
      },
      furtherLearning: ["Read Thomas Schelling's 'The Strategy of Conflict' on credible threats and commitments"]
    }
  ],
  moduleQuiz: [
    {
      id: "mq5-1",
      question: "What is the defining characteristic of a Dominant Strategy in game theory?",
      options: [
        "It is only played by the largest monopoly in an industry",
        "It is the optimal strategy for a player regardless of which choice the opposing player selects",
        "It is a strategy that guarantees 100% market share",
        "It is illegal under antitrust regulations"
      ],
      correctIndex: 1,
      explanation: "A dominant strategy yields the highest payoff for a player across all possible choices made by rivals."
    },
    {
      id: "mq5-2",
      question: "How does repeated interaction (the 'Iterated Prisoner's Dilemma') change competitive behavior compared to a one-shot game?",
      options: [
        "It forces all companies into bankruptcy immediately",
        "It enables companies to build trust and sustain mutually beneficial cooperation (such as price stability) through the threat of future retaliation",
        "It makes mathematics impossible to calculate",
        "It eliminates all customers from the market"
      ],
      correctIndex: 1,
      explanation: "Repeated interaction introduces the shadow of the future, allowing firms to penalize defection and sustain profitable cooperation."
    }
  ],
  moduleAssignment: {
    title: "Oligopoly Game Theory Strategic Simulation",
    instructions: "Model an interactive strategic choice between your target company and its #1 direct rival (e.g., launching an aggressive advertising blitz, introducing a low-cost subscription, or expanding capacity). Build a 2x2 payoff matrix with estimated payoffs, identify the dominant strategies and Nash Equilibrium, and explain what tactical commitments your company can use to steer the outcome toward mutual profitability.",
    expectedOutput: "A 500-word analysis with a complete 2x2 matrix.",
    submissionRequirements: "Submit as a markdown document.",
    evaluationCriteria: [
      "Rigorous 2x2 payoff matrix with realistic business payoffs (40%)",
      "Correct game-theoretic solution (Dominant strategy / Nash Equilibrium) (30%)",
      "Actionable recommendations for credible commitment or signaling (30%)"
    ]
  }
};
