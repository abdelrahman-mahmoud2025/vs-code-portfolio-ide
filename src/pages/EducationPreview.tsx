import React from "react";
import { education } from "../data/data";

const EducationPreview: React.FC<{ content: string }> = ({ content }) => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="material-symbols-outlined text-primary text-3xl">
            school
          </span>
          <h1 className="text-3xl font-bold text-white">Education</h1>
        </div>
        <p className="text-slate-400 text-sm font-mono">
          // Academic background and qualifications
        </p>
      </div>

      {/* Education Timeline */}
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className="relative bg-sidebar-bg border border-border-color rounded-lg p-6 hover:border-primary/50 transition-all group"
          >
            {/* Degree Badge */}
            <div className="absolute -top-3 left-6 bg-primary/10 border border-primary/30 px-3 py-1 rounded-full">
              <span className="text-primary text-xs font-bold uppercase tracking-wider">
                {edu.period}
              </span>
            </div>

            {/* Content */}
            <div className="mt-3">
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                {edu.degree}
              </h2>

              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-slate-400 text-[18px]">
                  apartment
                </span>
                <p className="text-slate-300 font-medium">{edu.institution}</p>
              </div>

              <p className="text-slate-400 leading-relaxed">
                {edu.description}
              </p>
            </div>

            {/* Decorative Element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="mt-8 p-4 bg-slate-800/30 border border-slate-700/50 rounded">
        <p className="text-slate-500 text-sm italic font-mono">
          // Continuous learning and professional development
        </p>
      </div>
    </div>
  );
};

export default EducationPreview;
