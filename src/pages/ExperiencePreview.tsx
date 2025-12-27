import React from "react";
import { experience } from "../data/data";

/* Add content prop to satisfy component interface even if not currently parsed */
const ExperiencePreview: React.FC<{ content: string }> = ({ content }) => {
  return (
    <div className="w-full max-w-2xl mt-8">
      <div className="flex items-center justify-between mb-8 border-b border-border-color pb-4">
        <h2 className="text-xl font-semibold text-white tracking-tight">
          Career History
        </h2>
        <div className="flex gap-2">
          <span className="bg-[#283039] p-1.5 rounded-md text-white material-symbols-outlined text-sm">
            filter_list
          </span>
          <span className="bg-[#283039] p-1.5 rounded-md text-white material-symbols-outlined text-sm">
            sort
          </span>
        </div>
      </div>

      <div className="relative pl-4">
        <div className="absolute left-6.75 top-2 bottom-0 w-0.5 bg-border-color"></div>

        {experience.map((exp, idx) => (
          <div key={exp.hash} className="relative mb-10 pl-12 group">
            {/* Timeline Dot */}
            <div
              className={`absolute left-4 top-1.5 -translate-x-1/2 rounded-full transition-all duration-300 z-10
              ${
                exp.isCurrent
                  ? "w-3.5 h-3.5 bg-primary ring-4 ring-primary/20 shadow-[0_0_15px_rgba(98,166,248,0.5)]"
                  : "w-3 h-3 bg-[#30363d] border border-slate-500"
              }
            `}
            ></div>

            <div
              className={`bg-[#161b22] border rounded-lg p-5 transition-all shadow-lg hover:border-primary/50
              ${exp.isCurrent ? "border-primary/30" : "border-border-color"}
            `}
            >
              <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                <div>
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                    <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-mono font-medium border border-primary/20">
                      {exp.hash}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm">
                    {exp.company} • {exp.location}
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <span className="block text-sm font-medium text-white">
                    {exp.period}
                  </span>
                  {exp.isCurrent && (
                    <span className="text-xs text-green-400">Current</span>
                  )}
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border-color/50">
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] px-2 py-1 rounded bg-terminal-bg border border-border-color text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Initial Commit Point */}
        <div className="relative pl-12 group opacity-60">
          <div className="absolute left-4 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-[#30363d] z-10"></div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-base">start</span>
            <span className="text-sm font-mono text-slate-500">
              Initial commit: Started Career
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePreview;
