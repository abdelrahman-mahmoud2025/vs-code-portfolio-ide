
import React from 'react';
import { skills } from '../data/data';

/* Add content prop to satisfy component interface even if not currently parsed */
const SkillsPreview: React.FC<{ content: string }> = ({ content }) => {
  return (
    <div className="w-full max-w-2xl mt-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-3">
          <span className="p-1.5 bg-primary/20 rounded-md text-primary">
            <span className="material-symbols-outlined text-[20px]">preview</span>
          </span>
          Preview: Tech Stack
        </h2>
        <span className="text-xs text-slate-500 bg-white/5 px-2 py-1 rounded border border-white/5">Live Reload</span>
      </div>

      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="mb-10">
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">
              {category === 'frontend' ? 'code' : category === 'backend' ? 'database' : 'palette'}
            </span>
            {category} Development
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {items.map((skill) => (
              <div 
                key={skill.name} 
                className="group relative bg-[#1c2431]/80 border border-white/5 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(98,166,248,0.15)] rounded-lg p-3 transition-all duration-300 cursor-default"
                style={{ borderLeftColor: skill.color }}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-8 h-8 rounded flex items-center justify-center font-mono text-xs font-bold border"
                    style={{ color: skill.color, backgroundColor: '#10161d' }}
                  >
                    {skill.shortName}
                  </div>
                  <span className="text-slate-200 font-medium text-sm">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsPreview;
