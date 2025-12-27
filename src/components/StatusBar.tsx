import React from "react";
import { PortfolioFile } from "../types/types";

interface StatusBarProps {
  activeTab: PortfolioFile;
  fileContents: Record<string, string>;
}

const StatusBar: React.FC<StatusBarProps> = ({ activeTab, fileContents }) => {
  const currentCode = fileContents[activeTab.id] || activeTab.rawCode;
  const lineCount = currentCode.split("\n").length;

  return (
    <footer className="h-6 bg-primary text-background-dark flex items-center justify-between px-3 text-[11px] font-sans select-none shrink-0 z-50 font-medium">
      <div className="flex items-center gap-4 h-full">
        <div className="flex items-center gap-1.5 hover:bg-black/10 px-2 h-full cursor-pointer transition-colors rounded-sm">
          <span className="material-symbols-outlined text-[14px]">
            code_off
          </span>
          <span className="font-bold">main*</span>
        </div>
        <div className="flex items-center gap-1.5 hover:bg-black/10 px-2 h-full cursor-pointer transition-colors rounded-sm group">
          <span className="material-symbols-outlined text-[14px] group-hover:rotate-180 transition-transform">
            sync
          </span>
          <span className="hidden sm:inline">Reloaded</span>
        </div>
        <div className="flex items-center gap-1.5 hover:bg-black/10 px-2 h-full cursor-pointer transition-colors rounded-sm">
          <span className="material-symbols-outlined text-[14px]">cancel</span>
          <span>0</span>
          <span className="material-symbols-outlined text-[14px]">warning</span>
          <span>0</span>
        </div>
      </div>

      <div className="flex items-center gap-1 h-full">
        <div className="hover:bg-black/10 px-3 h-full hidden md:flex items-center cursor-pointer transition-colors rounded-sm">
          Ln {lineCount}, Col 1
        </div>
        <div className="hover:bg-black/10 px-3 h-full hidden lg:flex items-center cursor-pointer transition-colors rounded-sm">
          Spaces: 2
        </div>
        <div className="hover:bg-black/10 px-3 h-full hidden lg:flex items-center cursor-pointer transition-colors rounded-sm">
          UTF-8
        </div>
        <div className="hover:bg-black/10 px-3 h-full flex items-center cursor-pointer transition-colors rounded-sm">
          {activeTab.type.toUpperCase()}
        </div>
        <div className="hover:bg-black/10 px-2.5 h-full flex items-center gap-1.5 transition-colors rounded-sm cursor-pointer">
          <span className="material-symbols-outlined text-[14px] animate-pulse">
            broadcast_on_home
          </span>
          <span className="hidden sm:inline">Go Live</span>
        </div>
      </div>
    </footer>
  );
};

export default StatusBar;
