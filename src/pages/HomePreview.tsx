import React from "react";
import { profile, portfolioFiles, impactStats, topProjects } from "../data/data";
import { PortfolioFile } from "../types/types";

interface HomePreviewProps {
  content: string;
  onOpenFile?: (file: PortfolioFile) => void;
}

const HomePreview: React.FC<HomePreviewProps> = ({ content, onOpenFile }) => {
  const handleViewProjects = () => {
    const projectsFile = portfolioFiles.find((f) => f.id === "projects");
    if (projectsFile && onOpenFile) {
      onOpenFile(projectsFile);
    }
  };

  const handleContactMe = () => {
    const contactFile = portfolioFiles.find((f) => f.id === "contact");
    if (contactFile && onOpenFile) {
      onOpenFile(contactFile);
    }
  };

  return (
    <div className="w-full max-w-4xl mt-10 grid grid-cols-1 gap-6">
      <div className="bg-[#1a202c]/40 backdrop-blur-2xl border border-white/5 rounded-2xl p-8 shadow-2xl flex flex-col items-center text-center ring-1 ring-white/5 group transition-all duration-500 hover:bg-[#1a202c]/50 hover:shadow-primary/5 hover:border-primary/20">
        <div className="relative mb-6 group-hover:transform group-hover:scale-105 transition-transform duration-300">
          <div className="w-28 h-28 rounded-full p-0.75 bg-linear-to-br from-primary via-purple-500 to-blue-500 shadow-xl">
            <div className="w-full h-full rounded-full overflow-hidden bg-black">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="absolute bottom-1 right-1 w-7 h-7 bg-[#0c0e12] rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-[#0c0e12]"></div>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-white mb-2 tracking-tight">
          {profile.name}{" "}
          <span className="text-slate-400 font-normal block text-lg mt-0.5">
            ({profile.alias})
          </span>
        </h1>
        <div className="h-px w-16 bg-linear-to-r from-transparent via-slate-600 to-transparent my-4"></div>
        <p className="text-slate-300 font-medium text-sm mb-1">{profile.role}</p>
        <p className="text-slate-500 text-sm mb-6">{profile.mission}</p>

        <div className="bg-black/30 border border-white/5 rounded-xl p-4 w-full text-left mb-6">
          <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2">
            Quick Summary
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            {profile.summary}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 w-full mb-6">
          {impactStats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 border border-white/5 rounded-lg p-3"
            >
              <p className="text-lg font-bold text-white">{stat.value}</p>
              <p className="text-[10px] uppercase tracking-widest text-slate-500">
                {stat.label}
              </p>
              {stat.hint && (
                <p className="text-[10px] text-slate-600 mt-1">{stat.hint}</p>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col w-full gap-3">
          <button
            onClick={handleViewProjects}
            className="w-full py-3 px-4 bg-primary hover:bg-blue-500 text-white font-semibold rounded-lg transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 active:scale-95"
          >
            <span className="material-symbols-outlined text-[20px]">
              visibility
            </span>
            View Projects
          </button>
          <button
            onClick={handleContactMe}
            className="w-full py-3 px-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium rounded-lg transition-all flex items-center justify-center gap-2 hover:border-white/20 active:scale-95"
          >
            <span className="material-symbols-outlined text-[20px]">mail</span>
            Contact Me
          </button>
        </div>
      </div>

      <div className="bg-[#11151c] border border-white/5 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">
            Top Projects
          </h3>
          <button
            onClick={handleViewProjects}
            className="text-xs font-bold text-primary hover:underline"
          >
            View All
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topProjects.map((project) => {
            const hasSource = project.sourceUrl && project.sourceUrl !== "#";
            return (
            <div
              key={project.title}
              className="bg-white/5 border border-white/5 rounded-xl overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="h-28 w-full object-cover"
              />
              <div className="p-3">
                <p className="text-sm font-semibold text-white">
                  {project.title}
                </p>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-3 flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-primary hover:underline"
                  >
                    Live
                  </a>
                  {hasSource ? (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-bold text-slate-300 hover:underline"
                    >
                      Source
                    </a>
                  ) : (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-bold text-slate-300 hover:underline"
                    >
                      Case Study
                    </a>
                  )}
                </div>
              </div>
            </div>
          )})}
        </div>
      </div>
    </div>
  );
};

export default HomePreview;
