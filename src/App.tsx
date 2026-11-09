import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Layers, 
  HelpCircle, 
  CheckSquare, 
  Search, 
  Award, 
  ChevronRight, 
  ChevronLeft, 
  Clock, 
  BarChart3, 
  GraduationCap, 
  Flame, 
  CheckCircle, 
  FileText, 
  Compass, 
  ArrowUpRight, 
  Sparkles,
  Shield,
  Target,
  Maximize2
} from 'lucide-react';
import confetti from 'canvas-confetti';

import { allModules, finalExamQuestions, glossaryTerms } from './data/finalAssessmentData';
import { courseOverview } from './data/courseOverview';
import { LessonContent, ModuleData } from './types/course';
import { FiveForcesSimulator } from './components/FiveForcesSimulator';
import { GameTheoryMatrixSimulator } from './components/GameTheoryMatrixSimulator';
import { QuizEngine } from './components/QuizEngine';
import { BrandBanner } from './components/BrandBanner';

export default function App() {
  const [activeTab, setActiveTab] = useState<'learn' | 'overview' | 'simulator' | 'exam' | 'glossary' | 'tracker'>('learn');
  const [selectedModuleId, setSelectedModuleId] = useState<number>(1);
  const [selectedLessonId, setSelectedLessonId] = useState<string>("1.1");
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(() => {
    const saved = localStorage.getItem('stratmaster_completed_lessons');
    return saved ? new Set(JSON.parse(saved)) : new Set(['1.1']);
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [examPassed, setExamPassed] = useState<boolean>(false);

  // Sync completed lessons to localStorage
  useEffect(() => {
    localStorage.setItem('stratmaster_completed_lessons', JSON.stringify(Array.from(completedLessons)));
  }, [completedLessons]);

  const currentModule = allModules.find(m => m.id === selectedModuleId) || allModules[0];
  const currentLesson = currentModule.lessons.find(l => l.id === selectedLessonId) || currentModule.lessons[0];

  const totalLessonsCount = allModules.reduce((acc, m) => acc + m.lessons.length, 0);
  const progressPercent = Math.round((completedLessons.size / totalLessonsCount) * 100);

  const toggleLessonComplete = (lessonId: string) => {
    setCompletedLessons(prev => {
      const next = new Set(prev);
      if (next.has(lessonId)) {
        next.delete(lessonId);
      } else {
        next.add(lessonId);
        if (next.size === totalLessonsCount) {
          confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
        }
      }
      return next;
    });
  };

  const navigateToNextLesson = () => {
    const currentIndex = currentModule.lessons.findIndex(l => l.id === selectedLessonId);
    if (currentIndex < currentModule.lessons.length - 1) {
      setSelectedLessonId(currentModule.lessons[currentIndex + 1].id);
    } else if (selectedModuleId < 9) {
      const nextMod = allModules.find(m => m.id === selectedModuleId + 1);
      if (nextMod) {
        setSelectedModuleId(nextMod.id);
        setSelectedLessonId(nextMod.lessons[0].id);
      }
    }
  };

  const navigateToPrevLesson = () => {
    const currentIndex = currentModule.lessons.findIndex(l => l.id === selectedLessonId);
    if (currentIndex > 0) {
      setSelectedLessonId(currentModule.lessons[currentIndex - 1].id);
    } else if (selectedModuleId > 1) {
      const prevMod = allModules.find(m => m.id === selectedModuleId - 1);
      if (prevMod) {
        setSelectedModuleId(prevMod.id);
        setSelectedLessonId(prevMod.lessons[prevMod.lessons.length - 1].id);
      }
    }
  };

  // Glossary filter
  const filteredGlossary = glossaryTerms.filter(g => {
    const matchesSearch = g.term.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          g.definition.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === 'all' || g.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const glossaryCategories = ['all', ...Array.from(new Set(glossaryTerms.map(g => g.category)))];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500/30">
      {/* Top Header with Official Publishing Brand */}
      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 px-4 lg:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-amber-500 flex items-center justify-center shadow-lg shadow-indigo-600/30 font-black text-white text-lg tracking-tighter">
            AC
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base tracking-tight text-white">ASCENDIX CONSULTING</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-950 text-indigo-400 border border-indigo-800/60 uppercase tracking-wider hidden sm:inline-block">
                Official Publishing
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Corporate Strategy Masterclass • Written & Published by <span className="text-slate-200 font-medium">Ihtishamul Haque Naeem</span> (Chairman, Seerat Academy Foundation)
            </p>
          </div>
        </div>

        {/* Global Nav Tabs */}
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={() => setActiveTab('learn')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeTab === 'learn' 
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20' 
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Lessons</span>
          </button>

          <button
            onClick={() => setActiveTab('simulator')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeTab === 'simulator' 
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20' 
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive Labs</span>
          </button>

          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeTab === 'overview' 
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20' 
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Overview & Map</span>
          </button>

          <button
            onClick={() => setActiveTab('exam')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeTab === 'exam' 
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20' 
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <Award className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">Final Exam</span>
          </button>

          <button
            onClick={() => setActiveTab('glossary')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeTab === 'glossary' 
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20' 
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Glossary</span>
          </button>

          <button
            onClick={() => setActiveTab('tracker')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              activeTab === 'tracker' 
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20' 
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden md:inline">Tracker</span>
          </button>
        </div>

        {/* Global Progress Indicator */}
        <div className="hidden xl:flex items-center gap-3 pl-4 border-l border-slate-800">
          <div className="w-24 bg-slate-800 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-indigo-500 to-emerald-400 h-full rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="text-xs font-mono font-bold text-slate-300">{progressPercent}%</span>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {activeTab === 'learn' && (
          <>
            {/* Sidebar Module & Lesson Navigation */}
            <aside className="w-72 lg:w-80 bg-slate-950 border-r border-slate-800/80 flex flex-col shrink-0 overflow-y-auto">
              <div className="p-4 border-b border-slate-800/80">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Curriculum Navigation</div>
                <div className="text-sm font-semibold text-white">9 Modules • 39 Lessons</div>
                <div className="mt-2 text-xs text-slate-400 flex items-center justify-between">
                  <span>{completedLessons.size} of {totalLessonsCount} completed</span>
                  <span className="text-emerald-400 font-bold">{progressPercent}%</span>
                </div>
                <div className="w-full bg-slate-800/60 rounded-full h-1.5 mt-1 overflow-hidden">
                  <div 
                    className="bg-emerald-400 h-full rounded-full transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Module List Accordion */}
              <div className="p-2 space-y-1.5 flex-1">
                {allModules.map((mod) => {
                  const isCurrentModule = mod.id === selectedModuleId;
                  const modLessonsCompleted = mod.lessons.filter(l => completedLessons.has(l.id)).length;
                  const isModFinished = modLessonsCompleted === mod.lessons.length;

                  return (
                    <div key={mod.id} className="rounded-xl overflow-hidden border border-slate-900 bg-slate-950/40">
                      <button
                        onClick={() => {
                          setSelectedModuleId(mod.id);
                          setSelectedLessonId(mod.lessons[0].id);
                        }}
                        className={`w-full p-2.5 text-left flex items-start justify-between gap-2 transition-all ${
                          isCurrentModule 
                            ? 'bg-slate-900/90 text-white font-bold border-l-2 border-indigo-500' 
                            : 'text-slate-400 hover:bg-slate-900/40 hover:text-slate-200'
                        }`}
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px] font-mono uppercase text-indigo-400 font-bold">
                              M{mod.id}
                            </span>
                            {isModFinished && (
                              <CheckCircle className="w-3 h-3 text-emerald-400" />
                            )}
                          </div>
                          <div className="text-xs truncate font-medium text-slate-200 mt-0.5">
                            {mod.shortTitle}
                          </div>
                        </div>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 shrink-0">
                          {modLessonsCompleted}/{mod.lessons.length}
                        </span>
                      </button>

                      {/* Expanded Lessons if active */}
                      {isCurrentModule && (
                        <div className="bg-slate-950/90 p-1.5 space-y-1 border-t border-slate-900">
                          {mod.lessons.map((lesson) => {
                            const isSelected = lesson.id === selectedLessonId;
                            const isDone = completedLessons.has(lesson.id);

                            return (
                              <button
                                key={lesson.id}
                                onClick={() => setSelectedLessonId(lesson.id)}
                                className={`w-full p-2 rounded-lg text-left text-xs transition-all flex items-center justify-between gap-2 ${
                                  isSelected
                                    ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                                    : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                                }`}
                              >
                                <div className="flex items-center gap-2 truncate">
                                  <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isDone ? 'bg-emerald-400' : 'bg-slate-600'}`} />
                                  <span className="truncate">{lesson.lessonNumber}. {lesson.title}</span>
                                </div>
                                <span className="text-[10px] font-mono text-slate-400 shrink-0">
                                  {lesson.originalVideoTime}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </aside>

            {/* Main Lesson Content Reader */}
            <main className="flex-1 overflow-y-auto bg-slate-950 px-4 sm:px-8 py-8 lg:px-12 max-w-5xl mx-auto">
              {/* Official Ascendix Brand Banner */}
              <BrandBanner brand={courseOverview.brand} />

              {/* Lesson Breadcrumb & Metadata */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 mb-1">
                    <span>{currentModule.moduleNumber}</span>
                    <span>•</span>
                    <span>{currentModule.title}</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {currentLesson.lessonNumber} {currentLesson.title}
                  </h1>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => toggleLessonComplete(currentLesson.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
                      completedLessons.has(currentLesson.id)
                        ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/80'
                        : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700'
                    }`}
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span>{completedLessons.has(currentLesson.id) ? 'Completed' : 'Mark as Done'}</span>
                  </button>

                  <div className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800 text-xs text-slate-400 font-mono">
                    <Clock className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Est. {currentLesson.estimatedMinutes}m</span>
                  </div>
                </div>
              </div>

              {/* 1. Simple Introduction */}
              <section className="my-8 bg-indigo-950/30 border border-indigo-900/40 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl" />
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2">
                  <Compass className="w-4 h-4" />
                  <span>Executive Intuition & Simple Introduction</span>
                </div>
                <p className="text-slate-200 text-base leading-relaxed">
                  {currentLesson.simpleIntro}
                </p>
              </section>

              {/* 2. Learning Objectives */}
              <section className="my-8">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <Target className="w-4 h-4 text-emerald-400" />
                  <span>Target Learning Objectives</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {currentLesson.learningObjectives.map((obj, i) => (
                    <div key={i} className="bg-slate-900/80 border border-slate-800/80 p-3.5 rounded-xl text-xs text-slate-300 flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-slate-800 text-indigo-400 font-mono font-bold flex items-center justify-center shrink-0 text-[10px]">
                        {i + 1}
                      </span>
                      <span className="leading-relaxed">{obj}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* 3. Detailed Step-by-Step Explanation */}
              <section className="my-8 space-y-6">
                <h2 className="text-xl font-bold text-white border-b border-slate-800 pb-2">
                  Comprehensive Strategic Analysis
                </h2>

                {currentLesson.detailedExplanation.sections.map((sec, idx) => (
                  <div key={idx} className="space-y-3">
                    <h3 className="text-base font-bold text-indigo-300">{sec.heading}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{sec.content}</p>

                    {sec.bulletPoints && (
                      <ul className="space-y-2 mt-2">
                        {sec.bulletPoints.map((pt, pIdx) => (
                          <li key={pIdx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2 pl-2">
                            <span className="text-indigo-400 font-bold shrink-0">•</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {sec.table && (
                      <div className="overflow-x-auto my-4 border border-slate-800 rounded-xl">
                        <table className="w-full text-xs text-left">
                          <thead className="bg-slate-900 text-slate-300 uppercase tracking-wider font-semibold border-b border-slate-800">
                            <tr>
                              {sec.table.headers.map((h, hIdx) => (
                                <th key={hIdx} className="p-3 font-semibold">{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-800 bg-slate-950/60">
                            {sec.table.rows.map((r, rIdx) => (
                              <tr key={rIdx} className="hover:bg-slate-900/40 transition-colors">
                                {r.map((c, cIdx) => (
                                  <td key={cIdx} className="p-3 text-slate-300 leading-relaxed font-mono sm:font-sans">{c}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                ))}
              </section>

              {/* Visual Diagram Representation */}
              {currentLesson.diagram && (
                <section className="my-8 bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Visual Framework</div>
                  <h3 className="text-base font-bold text-white mb-1">{currentLesson.diagram.title}</h3>
                  <p className="text-xs text-slate-400 mb-6">{currentLesson.diagram.description}</p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {currentLesson.diagram.items.map((item, dIdx) => (
                      <div 
                        key={dIdx} 
                        className={`p-4 rounded-xl border flex flex-col justify-between ${
                          item.highlight 
                            ? 'bg-indigo-950/60 border-indigo-500/80 text-white' 
                            : 'bg-slate-950/80 border-slate-800 text-slate-300'
                        }`}
                      >
                        <div className="text-xs font-mono font-bold text-indigo-400 mb-1">0{dIdx + 1}</div>
                        <div className="text-sm font-bold">{item.label}</div>
                        {item.sublabel && (
                          <div className="text-[11px] text-slate-400 mt-1">{item.sublabel}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Module-Specific Embedded Interactive Simulators */}
              {currentModule.id === 4 && (
                <FiveForcesSimulator />
              )}
              {currentModule.id === 5 && (
                <GameTheoryMatrixSimulator />
              )}

              {/* 4. Real-World & Case Examples */}
              <section className="my-8 space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-indigo-400" />
                  <span>Practical Business Case Examples</span>
                </h3>

                {currentLesson.examples.map((ex, exIdx) => (
                  <div key={exIdx} className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-white">{ex.title}</h4>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-800 text-indigo-400">
                        {ex.type}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{ex.narrative}</p>
                    <div className="mt-3 pt-3 border-t border-slate-800/80 text-xs text-amber-300 flex items-start gap-2">
                      <span className="font-bold shrink-0">Strategic Takeaway:</span>
                      <span>{ex.takeaway}</span>
                    </div>
                  </div>
                ))}
              </section>

              {/* 5. Step-by-Step Practice */}
              <section className="my-8 bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <CheckSquare className="w-4 h-4" />
                  <span>Step-by-Step Practice Workflow</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">{currentLesson.stepByStepPractice.whatToDo}</h4>
                  <p className="text-xs text-slate-400 mb-3">{currentLesson.stepByStepPractice.whyToDoIt}</p>
                  <div className="space-y-1.5">
                    {currentLesson.stepByStepPractice.howToDoIt.map((step, sIdx) => (
                      <div key={sIdx} className="text-xs text-slate-300 flex items-start gap-2 bg-slate-950/60 p-2.5 rounded-lg border border-slate-900">
                        <span className="font-mono font-bold text-indigo-400 shrink-0">Step {sIdx + 1}:</span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3 border-t border-slate-800/60 text-xs">
                  <div className="p-3 rounded-lg bg-rose-950/20 border border-rose-900/30 text-rose-300">
                    <span className="font-bold">Common Mistake: </span>
                    {currentLesson.stepByStepPractice.commonMistakes}
                  </div>
                  <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-900/30 text-emerald-300">
                    <span className="font-bold">Correction: </span>
                    {currentLesson.stepByStepPractice.correction}
                  </div>
                </div>
              </section>

              {/* 6. Key Takeaways & Summary */}
              <section className="my-8 bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Core Strategic Takeaways</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  {currentLesson.keyTakeaways.map((take, tIdx) => (
                    <div key={tIdx} className="flex items-start gap-2 text-xs text-slate-200">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{take}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 leading-relaxed">
                  <span className="font-bold text-slate-300">Lesson Summary: </span>
                  {currentLesson.lessonSummary}
                </div>
              </section>

              {/* 7. Lesson Knowledge Check Interactive Quiz */}
              <QuizEngine 
                title={`Knowledge Check: Lesson ${currentLesson.lessonNumber}`}
                questions={currentLesson.knowledgeCheck}
              />

              {/* 8. Practical Assignment */}
              <section className="my-8 bg-slate-900/90 border border-slate-800 rounded-2xl p-6">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                    Practical Assignment
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    Case Notebook Exercise
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">{currentLesson.assignment.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">{currentLesson.assignment.instructions}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                  <div>
                    <span className="font-bold text-slate-400">Expected Output:</span>
                    <p className="text-slate-300 mt-1">{currentLesson.assignment.expectedOutput}</p>
                  </div>
                  <div>
                    <span className="font-bold text-slate-400">Evaluation Rubric:</span>
                    <ul className="mt-1 space-y-1">
                      {currentLesson.assignment.evaluationCriteria.map((c, cIdx) => (
                        <li key={cIdx} className="text-slate-300">• {c}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Bottom Navigation Buttons */}
              <div className="my-10 pt-6 border-t border-slate-800 flex items-center justify-between">
                <button
                  onClick={navigateToPrevLesson}
                  className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold flex items-center gap-2 border border-slate-800 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous Lesson</span>
                </button>

                <button
                  onClick={navigateToNextLesson}
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition-all cursor-pointer"
                >
                  <span>Next Lesson</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </main>
          </>
        )}

        {/* TAB 2: OVERVIEW & CURRICULUM MAP */}
        {activeTab === 'overview' && (
          <div className="flex-1 overflow-y-auto p-6 lg:p-12 max-w-5xl mx-auto space-y-8">
            <BrandBanner brand={courseOverview.brand} />

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-950 px-2.5 py-1 rounded-md border border-indigo-800/60">
                Course Architecture & Publishing DNA
              </span>
              <h1 className="text-3xl font-black text-white mt-2 tracking-tight">{courseOverview.title}</h1>
              <p className="text-slate-400 text-sm mt-1">{courseOverview.subtitle}</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
                <div className="text-xs text-slate-400">Total Modules</div>
                <div className="text-2xl font-black text-white mt-1">{courseOverview.totalModules}</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
                <div className="text-xs text-slate-400">Total Lessons</div>
                <div className="text-2xl font-black text-white mt-1">{courseOverview.totalLessons}</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
                <div className="text-xs text-slate-400">Study Duration</div>
                <div className="text-lg font-black text-white mt-1">{courseOverview.totalStudyHours}</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
                <div className="text-xs text-slate-400">Platform XP Level</div>
                <div className="text-lg font-black text-emerald-400 mt-1">{courseOverview.xpLevel}</div>
              </div>
            </div>

            {/* Core Competencies Matrix */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Core Competencies & Skills Matrix</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-950 text-slate-400 uppercase tracking-wider font-semibold border-b border-slate-800">
                    <tr>
                      <th className="p-3">Competency</th>
                      <th className="p-3">Specific Measurable Practical Skill</th>
                      <th className="p-3">Where Developed</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {courseOverview.coreCompetencies.map((comp, idx) => (
                      <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                        <td className="p-3 font-bold text-indigo-300">{comp.competency}</td>
                        <td className="p-3 text-slate-300">{comp.skill}</td>
                        <td className="p-3 font-mono text-slate-400">{comp.modules}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Additional Recommendations */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                <Sparkles className="w-4 h-4" />
                <span>Recommended Additional Frameworks (Beyond Original Curriculum)</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {courseOverview.additionalRecommendations.map((rec, rIdx) => (
                  <div key={rIdx} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                    <h4 className="text-sm font-bold text-white">{rec.title}</h4>
                    <p className="text-xs text-slate-300">{rec.description}</p>
                    <div className="text-[11px] text-amber-300/80 pt-2 border-t border-slate-900">
                      <span className="font-semibold">Why Useful: </span>{rec.whyUseful}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: INTERACTIVE LABS */}
        {activeTab === 'simulator' && (
          <div className="flex-1 overflow-y-auto p-6 lg:p-12 max-w-5xl mx-auto space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950 px-2.5 py-1 rounded-md border border-amber-800/60">
                Interactive Strategic Labs
              </span>
              <h1 className="text-3xl font-black text-white mt-2">Executive Simulation Suite</h1>
              <p className="text-slate-400 text-sm mt-1">
                Interact with live strategic models to visualize how market forces and rival decisions determine corporate profitability.
              </p>
            </div>

            <FiveForcesSimulator />
            <GameTheoryMatrixSimulator />
          </div>
        )}

        {/* TAB 4: FINAL COMPREHENSIVE EXAM */}
        {activeTab === 'exam' && (
          <div className="flex-1 overflow-y-auto p-6 lg:p-12 max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded-md border border-emerald-800/60">
                Master Certification Examination
              </span>
              <h1 className="text-3xl font-black text-white mt-2">Final Course Examination</h1>
              <p className="text-slate-400 text-sm mt-1">
                15 scenario-based questions spanning all 9 modules. Score 80%+ to unlock course completion status.
              </p>
            </div>

            <QuizEngine 
              title="Corporate Strategy Comprehensive Final Examination (15 Questions)"
              questions={finalExamQuestions}
              onComplete={(score, total) => {
                if (score / total >= 0.8) {
                  setExamPassed(true);
                  confetti({ particleCount: 200, spread: 100, origin: { y: 0.5 } });
                }
              }}
            />

            {examPassed && (
              <div className="my-6 p-6 rounded-2xl bg-gradient-to-r from-emerald-950 via-slate-900 to-indigo-950 border border-emerald-500/50 shadow-2xl flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">Mastery Achieved</div>
                  <h3 className="text-xl font-bold text-white mt-1">StratMaster Course Certification Complete!</h3>
                  <p className="text-xs text-slate-300 mt-1 max-w-xl">
                    You have successfully completed the rigorous 9-module Corporate Strategy curriculum, mastered all 8 strategic frameworks, and demonstrated certified analytical competence.
                  </p>
                </div>
                <Award className="w-12 h-12 text-emerald-400 shrink-0" />
              </div>
            )}
          </div>
        )}

        {/* TAB 5: GLOSSARY */}
        {activeTab === 'glossary' && (
          <div className="flex-1 overflow-y-auto p-6 lg:p-12 max-w-5xl mx-auto space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-950 px-2.5 py-1 rounded-md border border-indigo-800/60">
                Reference Guide
              </span>
              <h1 className="text-3xl font-black text-white mt-2">Executive Strategy Glossary</h1>
              <p className="text-slate-400 text-sm mt-1">
                Complete lexicon of essential terms, frameworks, and formulas across all 9 modules.
              </p>
            </div>

            {/* Search & Filter Bar */}
            <div className="flex flex-wrap gap-3 items-center justify-between pb-4 border-b border-slate-800">
              <div className="relative flex-1 min-w-[240px]">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="Search terminology or definitions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="flex flex-wrap gap-1.5">
                {glossaryCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilterCategory(cat)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium capitalize transition-all ${
                      filterCategory === cat
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-900 text-slate-400 hover:bg-slate-800'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Glossary Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredGlossary.map((g, gIdx) => (
                <div key={gIdx} className="bg-slate-900/70 border border-slate-800/80 p-4 rounded-xl space-y-2 hover:border-slate-700 transition-all">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-white">{g.term}</h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-indigo-400 border border-slate-700">
                      {g.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{g.definition}</p>
                  <div className="pt-2 border-t border-slate-800/60 text-[11px] text-amber-300/80">
                    <span className="font-semibold text-slate-400">Example: </span>
                    {g.example}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: TRACKER */}
        {activeTab === 'tracker' && (
          <div className="flex-1 overflow-y-auto p-6 lg:p-12 max-w-5xl mx-auto space-y-6">
            <BrandBanner brand={courseOverview.brand} />

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950 px-2.5 py-1 rounded-md border border-cyan-800/60">
                Course Progress & QA
              </span>
              <h1 className="text-3xl font-black text-white mt-2">Master Progress Tracker</h1>
              <p className="text-slate-400 text-sm mt-1">
                Track completion status across every module, lesson, and assignment in the course.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-950 text-slate-400 uppercase tracking-wider font-semibold border-b border-slate-800">
                  <tr>
                    <th className="p-3.5">Curriculum Item</th>
                    <th className="p-3.5">Module</th>
                    <th className="p-3.5">Study Duration</th>
                    <th className="p-3.5">Content Created</th>
                    <th className="p-3.5">Quality Checked</th>
                    <th className="p-3.5">Completion Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {allModules.map(mod => (
                    <React.Fragment key={mod.id}>
                      <tr className="bg-slate-950/40 font-bold text-white">
                        <td className="p-3 font-semibold text-indigo-300">{mod.moduleNumber}: {mod.shortTitle}</td>
                        <td className="p-3 text-slate-400">Module {mod.id}</td>
                        <td className="p-3 text-slate-400">{mod.lessons.length} Lessons</td>
                        <td className="p-3 text-emerald-400">Yes</td>
                        <td className="p-3 text-emerald-400">Yes</td>
                        <td className="p-3">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            mod.lessons.every(l => completedLessons.has(l.id))
                              ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                              : 'bg-amber-950 text-amber-400 border border-amber-800'
                          }`}>
                            {mod.lessons.every(l => completedLessons.has(l.id)) ? 'Completed' : 'In Progress'}
                          </span>
                        </td>
                      </tr>
                      {mod.lessons.map(lesson => (
                        <tr key={lesson.id} className="hover:bg-slate-800/30 transition-colors">
                          <td className="p-3 pl-8 text-slate-300">
                            Lesson {lesson.lessonNumber}: {lesson.title}
                          </td>
                          <td className="p-3 text-slate-500 text-[11px] font-mono">M{mod.id}</td>
                          <td className="p-3 text-slate-400 font-mono text-[11px]">{lesson.estimatedMinutes} mins</td>
                          <td className="p-3 text-emerald-400 text-[11px]">Yes</td>
                          <td className="p-3 text-emerald-400 text-[11px]">Yes</td>
                          <td className="p-3">
                            <button
                              onClick={() => toggleLessonComplete(lesson.id)}
                              className={`px-2.5 py-1 rounded text-[10px] font-semibold transition-all cursor-pointer ${
                                completedLessons.has(lesson.id)
                                  ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                                  : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                              }`}
                            >
                              {completedLessons.has(lesson.id) ? 'Completed' : 'Pending'}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Official Mandatory Publishing Footer */}
      <footer className="bg-slate-950 border-t border-slate-800/80 px-6 py-8 text-center text-xs text-slate-400">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="text-[11px] font-bold uppercase tracking-widest text-indigo-400">
            PUBLISHED BY
          </div>
          <div className="text-lg font-black text-white tracking-wider">
            ASCENDIX CONSULTING
          </div>
          <div className="text-slate-300">
            Written and Published by <span className="text-white font-semibold">Ihtishamul Haque Naeem</span>
            <br />
            <span className="text-amber-400 font-medium">Chairman, Seerat Academy Foundation</span>
          </div>
          <div className="pt-2">
            <a 
              href="https://seeratfoundation.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 underline font-mono text-xs"
            >
              https://seeratfoundation.com
            </a>
          </div>
          <div className="text-[10px] text-slate-500 pt-2 border-t border-slate-900">
            Professionalism • Knowledge • Quality • Trust • Innovation • Educational Excellence
          </div>
        </div>
      </footer>
    </div>
  );
}
