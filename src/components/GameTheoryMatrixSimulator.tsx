import React, { useState } from 'react';
import { Play, Sparkles, Scale, AlertCircle } from 'lucide-react';

export const GameTheoryMatrixSimulator: React.FC = () => {
  const [p1Choice, setP1Choice] = useState<'high' | 'cut'>('high');
  const [p2Choice, setP2Choice] = useState<'high' | 'cut'>('high');

  // Payoff calculations (Millions in operating profit)
  const getPayoffs = (c1: 'high' | 'cut', c2: 'high' | 'cut') => {
    if (c1 === 'high' && c2 === 'high') return { p1: 10, p2: 10, outcome: 'Cooperative Discipline (Win-Win)' };
    if (c1 === 'cut' && c2 === 'high') return { p1: 15, p2: 2, outcome: 'Firm A Steals Volume; Firm B Suffers' };
    if (c1 === 'high' && c2 === 'cut') return { p1: 2, p2: 15, outcome: 'Firm B Steals Volume; Firm A Suffers' };
    return { p1: 4, p2: 4, outcome: 'NASH EQUILIBRIUM: Price War Trap (Lose-Lose)' };
  };

  const current = getPayoffs(p1Choice, p2Choice);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 my-6 shadow-xl text-slate-200">
      <div className="mb-4 pb-4 border-b border-slate-800">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-2.5 py-1 rounded-md border border-amber-800/50">
          Game Theory Interactive Lab
        </span>
        <h3 className="text-xl font-bold text-white mt-1">2x2 Pricing Prisoner's Dilemma Simulator</h3>
        <p className="text-sm text-slate-400">
          Select pricing actions for Firm A and Rival Firm B to observe dominant strategies, individual incentives to defect, and the low-profit Nash Equilibrium.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Controls */}
        <div className="space-y-4 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
          <div className="font-semibold text-sm text-indigo-300">Player 1: Your Firm (Firm A)</div>
          <div className="flex gap-2">
            <button
              onClick={() => setP1Choice('high')}
              className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                p1Choice === 'high' 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' 
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              Maintain High Price ($100)
            </button>
            <button
              onClick={() => setP1Choice('cut')}
              className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                p1Choice === 'cut' 
                  ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/30' 
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              Discount / Cut Price ($70)
            </button>
          </div>

          <div className="font-semibold text-sm text-amber-300 pt-2 border-t border-slate-800">Player 2: Direct Competitor (Firm B)</div>
          <div className="flex gap-2">
            <button
              onClick={() => setP2Choice('high')}
              className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                p2Choice === 'high' 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' 
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              Maintain High Price ($100)
            </button>
            <button
              onClick={() => setP2Choice('cut')}
              className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                p2Choice === 'cut' 
                  ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/30' 
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              Discount / Cut Price ($70)
            </button>
          </div>
        </div>

        {/* 2x2 Interactive Matrix Display */}
        <div className="bg-slate-950/90 p-4 rounded-xl border border-slate-800 flex flex-col justify-center">
          <div className="text-xs text-center font-bold text-slate-400 mb-2">2x2 Payoff Matrix (Firm A Profit, Firm B Profit)</div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div 
              onClick={() => { setP1Choice('high'); setP2Choice('high'); }}
              className={`p-3 rounded-lg border cursor-pointer transition-all ${
                p1Choice === 'high' && p2Choice === 'high'
                  ? 'bg-indigo-950/80 border-indigo-500 ring-2 ring-indigo-500'
                  : 'bg-slate-900 border-slate-800 opacity-70 hover:opacity-100'
              }`}
            >
              <div className="text-[10px] text-slate-400 font-semibold mb-1">Both High Price</div>
              <div className="text-sm font-bold text-emerald-400">$10M , $10M</div>
              <div className="text-[10px] text-slate-400 mt-1">Joint Optimal ($20M)</div>
            </div>

            <div 
              onClick={() => { setP1Choice('high'); setP2Choice('cut'); }}
              className={`p-3 rounded-lg border cursor-pointer transition-all ${
                p1Choice === 'high' && p2Choice === 'cut'
                  ? 'bg-indigo-950/80 border-indigo-500 ring-2 ring-indigo-500'
                  : 'bg-slate-900 border-slate-800 opacity-70 hover:opacity-100'
              }`}
            >
              <div className="text-[10px] text-slate-400 font-semibold mb-1">A Holds, B Cuts</div>
              <div className="text-sm font-bold text-white">$2M , $15M</div>
              <div className="text-[10px] text-amber-400 mt-1">B Betrays A</div>
            </div>

            <div 
              onClick={() => { setP1Choice('cut'); setP2Choice('high'); }}
              className={`p-3 rounded-lg border cursor-pointer transition-all ${
                p1Choice === 'cut' && p2Choice === 'high'
                  ? 'bg-indigo-950/80 border-indigo-500 ring-2 ring-indigo-500'
                  : 'bg-slate-900 border-slate-800 opacity-70 hover:opacity-100'
              }`}
            >
              <div className="text-[10px] text-slate-400 font-semibold mb-1">A Cuts, B Holds</div>
              <div className="text-sm font-bold text-white">$15M , $2M</div>
              <div className="text-[10px] text-amber-400 mt-1">A Betrays B</div>
            </div>

            <div 
              onClick={() => { setP1Choice('cut'); setP2Choice('cut'); }}
              className={`p-3 rounded-lg border cursor-pointer transition-all ${
                p1Choice === 'cut' && p2Choice === 'cut'
                  ? 'bg-rose-950/80 border-rose-500 ring-2 ring-rose-500'
                  : 'bg-slate-900 border-slate-800 opacity-70 hover:opacity-100'
              }`}
            >
              <div className="text-[10px] text-rose-300 font-bold mb-1">NASH EQUILIBRIUM</div>
              <div className="text-sm font-bold text-rose-400">$4M , $4M</div>
              <div className="text-[10px] text-rose-300 mt-1">Both Trapped in Price War</div>
            </div>
          </div>
        </div>
      </div>

      {/* Outcome Analysis */}
      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
        <div className="text-xs uppercase font-bold tracking-wider text-slate-400">Current Strategic Outcome</div>
        <div className="text-base font-bold text-white mt-1 flex items-center gap-2">
          {current.outcome}
        </div>
        <div className="mt-2 text-xs text-slate-300 leading-relaxed">
          {p1Choice === 'cut' && p2Choice === 'cut' ? (
            <span className="text-rose-300">
              Notice that even though ($10M, $10M) is vastly superior, both firms are pushed by individual self-interest to cut prices. If Firm A holds, Firm B cuts to get $15M. Because both calculate this way, both end up earning only $4M. This is why price-matching commitments and repeated-game signaling are vital to sustain cooperation.
            </span>
          ) : p1Choice === 'high' && p2Choice === 'high' ? (
            <span className="text-emerald-300">
              This joint cooperative state generates $20M in total industry profit. However, it is inherently unstable without binding contracts or credible price-matching threats, because either player can boost short-term profits to $15M by sneakily cutting prices!
            </span>
          ) : (
            <span className="text-amber-300">
              The firm that discounted temporarily gained market share ($15M profit), while the firm that held prices lost customers ($2M). The losing firm will inevitably retaliate tomorrow morning by matching the discount, dragging both into the $4M Nash Equilibrium.
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
