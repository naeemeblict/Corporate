import React, { useState } from 'react';
import { Play, RotateCcw, AlertTriangle, ArrowRight, ShieldCheck } from 'lucide-react';

export const FiveForcesSimulator: React.FC = () => {
  const [entrants, setEntrants] = useState(3);
  const [substitutes, setSubstitutes] = useState(3);
  const [rivalry, setRivalry] = useState(3);
  const [suppliers, setSuppliers] = useState(3);
  const [buyers, setBuyers] = useState(3);

  // Compute average force intensity (1 = Weakest, 5 = Strongest)
  const averageForce = (entrants + substitutes + rivalry + suppliers + buyers) / 5;
  
  // Profit margin estimate: 32% baseline minus pressure from forces
  const projectedMargin = Math.max(1.5, Math.round((36 - averageForce * 6.5) * 10) / 10);
  
  const getAttractiveness = (score: number) => {
    if (score <= 2.2) return { label: 'Highly Attractive (Superior Profits)', color: 'text-emerald-400', bg: 'bg-emerald-950/40 border-emerald-500/40' };
    if (score <= 3.6) return { label: 'Moderately Attractive (Normal Margins)', color: 'text-amber-400', bg: 'bg-amber-950/40 border-amber-500/40' };
    return { label: 'Structurally Brutal (Compressed Margins)', color: 'text-rose-400', bg: 'bg-rose-950/40 border-rose-500/40' };
  };

  const status = getAttractiveness(averageForce);

  const applyPreset = (preset: 'airlines' | 'softdrinks' | 'software') => {
    if (preset === 'airlines') {
      setEntrants(4);
      setSubstitutes(3);
      setRivalry(5);
      setSuppliers(5);
      setBuyers(4);
    } else if (preset === 'softdrinks') {
      setEntrants(1);
      setSubstitutes(2);
      setRivalry(2);
      setSuppliers(1);
      setBuyers(2);
    } else if (preset === 'software') {
      setEntrants(2);
      setSubstitutes(1);
      setRivalry(3);
      setSuppliers(2);
      setBuyers(2);
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 my-6 shadow-xl text-slate-200">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-950/80 px-2.5 py-1 rounded-md border border-indigo-800/50">
            Interactive Strategic Simulator
          </span>
          <h3 className="text-xl font-bold text-white mt-1">Porter's Five Forces Profit Engine</h3>
          <p className="text-sm text-slate-400">
            Adjust the five sliders to see how external structural forces directly squeeze or expand average industry profit margins.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400">Presets:</span>
          <button
            onClick={() => applyPreset('softdrinks')}
            className="text-xs px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          >
            Soft Drinks
          </button>
          <button
            onClick={() => applyPreset('airlines')}
            className="text-xs px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          >
            Airlines
          </button>
          <button
            onClick={() => applyPreset('software')}
            className="text-xs px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          >
            Enterprise SaaS
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Sliders */}
        <div className="lg:col-span-7 space-y-4">
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="font-semibold text-slate-300">1. Threat of New Entrants (Barriers to Entry)</span>
              <span className="text-indigo-400 font-bold">{entrants}/5 ({entrants <= 2 ? 'Low Threat' : entrants >= 4 ? 'High Threat' : 'Moderate'})</span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              value={entrants}
              onChange={(e) => setEntrants(Number(e.target.value))}
              className="w-full accent-indigo-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="font-semibold text-slate-300">2. Threat of Substitute Products (Price Ceiling)</span>
              <span className="text-indigo-400 font-bold">{substitutes}/5 ({substitutes <= 2 ? 'Low Threat' : substitutes >= 4 ? 'High Threat' : 'Moderate'})</span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              value={substitutes}
              onChange={(e) => setSubstitutes(Number(e.target.value))}
              className="w-full accent-indigo-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="font-semibold text-slate-300">3. Rivalry Among Existing Competitors</span>
              <span className="text-indigo-400 font-bold">{rivalry}/5 ({rivalry <= 2 ? 'Polite' : rivalry >= 4 ? 'Fierce / Price Wars' : 'Moderate'})</span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              value={rivalry}
              onChange={(e) => setRivalry(Number(e.target.value))}
              className="w-full accent-indigo-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="font-semibold text-slate-300">4. Bargaining Power of Suppliers (Input Costs)</span>
              <span className="text-indigo-400 font-bold">{suppliers}/5 ({suppliers <= 2 ? 'Weak' : suppliers >= 4 ? 'Powerful Monopoly' : 'Moderate'})</span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              value={suppliers}
              onChange={(e) => setSuppliers(Number(e.target.value))}
              className="w-full accent-indigo-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="font-semibold text-slate-300">5. Bargaining Power of Buyers (Price Pressure)</span>
              <span className="text-indigo-400 font-bold">{buyers}/5 ({buyers <= 2 ? 'Fragmented' : buyers >= 4 ? 'Concentrated Giants' : 'Moderate'})</span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              value={buyers}
              onChange={(e) => setBuyers(Number(e.target.value))}
              className="w-full accent-indigo-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
            />
          </div>
        </div>

        {/* Dashboard Result */}
        <div className="lg:col-span-5 bg-slate-950/80 p-5 rounded-xl border border-slate-800 flex flex-col justify-between">
          <div className="text-center pb-4 border-b border-slate-800">
            <span className="text-xs uppercase tracking-wider text-slate-400">Projected Industry Operating Margin</span>
            <div className="text-4xl font-extrabold text-white mt-1">
              {projectedMargin}%
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Average Force Intensity: <span className="font-bold text-slate-200">{averageForce.toFixed(1)} / 5.0</span>
            </div>
          </div>

          <div className={`mt-4 p-3 rounded-lg border text-sm ${status.bg}`}>
            <div className="font-bold flex items-center gap-1.5 mb-1">
              {averageForce > 3.6 ? <AlertTriangle className="w-4 h-4 text-rose-400" /> : <ShieldCheck className="w-4 h-4 text-emerald-400" />}
              <span className={status.color}>{status.label}</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {averageForce > 3.6 
                ? 'High external pressure forces firms to spend on supplier inputs and promotional discounts, leaving little retained economic profit.' 
                : averageForce <= 2.2 
                ? 'Weak external forces shield incumbents from price wars and cost inflation, allowing disciplined firms to retain substantial economic surplus.' 
                : 'Balanced forces create typical industrial returns. Differentiated firms with VRIO capabilities will out-earn generic players.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
