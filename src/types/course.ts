export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface PracticalAssignment {
  title: string;
  instructions: string;
  expectedOutput: string;
  submissionRequirements: string;
  evaluationCriteria: string[];
}

export interface LessonContent {
  id: string;
  lessonNumber: string;
  title: string;
  moduleId: number;
  moduleTitle: string;
  estimatedMinutes: number;
  originalVideoTime: string;
  difficulty: 'Beginner' | 'Beginner to Intermediate' | 'Intermediate' | 'Advanced';
  priorKnowledge: string;
  learningObjectives: string[];
  simpleIntro: string;
  detailedExplanation: {
    sections: {
      heading: string;
      content: string;
      table?: {
        headers: string[];
        rows: string[][];
      };
      bulletPoints?: string[];
    }[];
  };
  diagram?: {
    title: string;
    description: string;
    type: 'flow' | 'matrix' | 'timeline' | 'comparison';
    items: { label: string; sublabel?: string; highlight?: boolean }[];
  };
  examples: {
    type: 'Real-World Industry' | 'Hypothetical' | 'Historical' | 'Case Study';
    title: string;
    narrative: string;
    takeaway: string;
  }[];
  practicalApplication: {
    rule: string;
    steps: string[];
  };
  stepByStepPractice: {
    whatToDo: string;
    whyToDoIt: string;
    howToDoIt: string[];
    expectedResult: string;
    commonMistakes: string;
    correction: string;
  };
  keyTakeaways: string[];
  lessonSummary: string;
  knowledgeCheck: QuizQuestion[];
  assignment: PracticalAssignment;
  furtherLearning: string[];
}

export interface ModuleData {
  id: number;
  moduleNumber: string;
  title: string;
  shortTitle: string;
  description: string;
  importance: string;
  learningObjectives: string[];
  requiredKnowledge: string;
  skillsToDevelop: string[];
  expectedOutcomes: string;
  summary: string;
  lessons: LessonContent[];
  moduleQuiz: QuizQuestion[];
  moduleAssignment: PracticalAssignment;
}

export interface PublishingBrandData {
  publisher: string;
  author: string;
  authorTitle: string;
  website: string;
  tagline: string;
  coreValues: string[];
}

export interface CourseOverviewData {
  title: string;
  subtitle: string;
  brand: PublishingBrandData;
  targetAudience: string[];
  prerequisites: string;
  totalModules: number;
  totalLessons: number;
  totalStudyHours: string;
  xpLevel: string;
  learningObjectives: string[];
  coreCompetencies: {
    competency: string;
    skill: string;
    modules: string;
  }[];
  additionalRecommendations: {
    title: string;
    description: string;
    whyUseful: string;
  }[];
}
