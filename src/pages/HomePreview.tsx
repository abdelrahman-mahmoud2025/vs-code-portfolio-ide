import React from "react";
import { profile, portfolioFiles } from "../data/data";
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
    <div className="w-full max-w-sm bg-[#1a202c]/40 backdrop-blur-2xl border border-white/5 rounded-2xl p-8 shadow-2xl flex flex-col items-center text-center ring-1 ring-white/5 group transition-all duration-500 hover:bg-[#1a202c]/50 hover:shadow-primary/5 hover:border-primary/20 mt-12">
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
      <p className="text-slate-500 text-sm mb-8">{profile.mission}</p>

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
  );
};

export default HomePreview;
