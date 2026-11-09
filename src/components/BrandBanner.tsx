import React from 'react';
import { ShieldCheck, Globe, Building2, User, Award, ExternalLink } from 'lucide-react';
import { PublishingBrandData } from '../types/course';

interface BrandBannerProps {
  brand: PublishingBrandData;
}

export const BrandBanner: React.FC<BrandBannerProps> = ({ brand }) => {
  return (
    <div className="bg-gradient-to-r from-slate-900 via-indigo-950/60 to-slate-900 border border-indigo-900/40 rounded-2xl p-5 sm:p-6 mb-8 shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-indigo-400 bg-indigo-950/90 px-3 py-1 rounded-md border border-indigo-800/60">
              Official Publishing Identity
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline">•</span>
            <span className="text-xs font-semibold text-emerald-400 hidden sm:inline flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> Verified Editorial Standard
            </span>
          </div>

          <div className="space-y-1">
            <div className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase">
              PUBLISHED BY
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {brand.publisher}
            </h2>
          </div>

          <div className="text-xs text-slate-300 flex flex-wrap items-center gap-x-4 gap-y-1 pt-1">
            <div className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-indigo-400" />
              <span className="text-slate-400">Written and Published by:</span>
              <strong className="text-white font-semibold">{brand.author}</strong>
            </div>
            <div className="flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-slate-300 font-medium">{brand.authorTitle}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end justify-between gap-3 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-slate-800">
          <a
            href={brand.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md shadow-indigo-600/30 transition-all cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Visit Official Website</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>

          <div className="text-[11px] font-mono text-slate-400">
            {brand.website.replace('https://', '')}
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3.5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
        <div className="flex items-center gap-2 font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{brand.tagline}</span>
        </div>
        <div className="text-slate-500">
          Academic Integrity & International Learning Excellence
        </div>
      </div>
    </div>
  );
};
