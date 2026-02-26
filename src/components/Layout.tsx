import React from "react";
import { PortfolioFile } from "../types/types";
import ActivityBar from "./ActivityBar";
import Sidebar from "./Sidebar";
import EditorArea from "./EditorArea";
import StatusBar from "./StatusBar";

interface LayoutProps {
  openTabs: PortfolioFile[];
  activeTab: PortfolioFile;
  onSelectTab: (id: string) => void;
  onCloseTab: (id: string, e?: React.MouseEvent) => void;
  onOpenFile: (file: PortfolioFile) => void;
  isSidebarOpen: boolean;
  activeSidebarView: string;
  onToggleSidebar: (view?: string) => void;
  fileContents: Record<string, string>;
  onUpdateFile: (id: string, content: string) => void;
  settings: any;
  onUpdateSettings: (s: any) => void;
  onOpenContact: () => void;
  onSwitchView: () => void;
  onOpenSearch: () => void;
}

const Layout: React.FC<LayoutProps> = ({
  openTabs,
  activeTab,
  onSelectTab,
  onCloseTab,
  onOpenFile,
  isSidebarOpen,
  activeSidebarView,
  onToggleSidebar,
  fileContents,
  onUpdateFile,
  settings,
  onUpdateSettings,
  onOpenContact,
  onSwitchView,
  onOpenSearch,
}) => {
  return (
    <div
      className="flex flex-col h-full w-full bg-editor-bg overflow-hidden relative"
      style={{ fontSize: `${settings.fontSize}px` }}
    >
      {/* MacOS Window Frame */}
      <div className="h-10 bg-[#1e1e1e] flex items-center px-4 border-b border-white/5 shrink-0 z-60 select-none">
        <div className="flex gap-2 w-24 text-[13px]">
          <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] shadow-inner cursor-pointer hover:brightness-75 flex items-center justify-center group">
            <span className="material-symbols-outlined text-[10px] opacity-0 group-hover:opacity-100 text-black/50 font-bold">
              close
            </span>
          </div>
          <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] shadow-inner cursor-pointer hover:brightness-75 flex items-center justify-center group">
            <span className="material-symbols-outlined text-[10px] opacity-0 group-hover:opacity-100 text-black/50 font-bold">
              remove
            </span>
          </div>
          <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f] shadow-inner cursor-pointer hover:brightness-75 flex items-center justify-center group">
            <span className="material-symbols-outlined text-[10px] opacity-0 group-hover:opacity-100 text-black/50 font-bold">
              expand_content
            </span>
          </div>
        </div>
        <div className="flex-1 text-center text-[13px] text-slate-400 font-medium truncate px-4">
          <span className="opacity-50">portfolio-v4 / src / </span>
          {activeTab.name} — Visual Studio Code
        </div>
        <div className="w-32 flex justify-end gap-3">
          <span
            className="material-symbols-outlined text-slate-500 text-lg cursor-pointer hover:text-slate-300"
            onClick={onOpenContact}
            title="Contact"
          >
            mail
          </span>
          <span
            className="material-symbols-outlined text-slate-500 text-lg cursor-pointer hover:text-slate-300"
            onClick={onOpenSearch}
            title="Search (/)"
          >
            search
          </span>
          <span
            className="material-symbols-outlined text-slate-500 text-lg cursor-pointer hover:text-slate-300"
            onClick={onSwitchView}
            title="Simple View"
          >
            view_agenda
          </span>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden relative">
        <ActivityBar
          onToggleSidebar={onToggleSidebar}
          isSidebarOpen={isSidebarOpen}
          activeView={activeSidebarView}
        />

        <div
          className={`
            fixed md:relative z-50 h-[calc(100%-2.5rem)] md:h-full transition-all duration-300 ease-in-out border-r border-border-color
            ${
              isSidebarOpen
                ? "translate-x-0 w-64 lg:w-72"
                : "-translate-x-full md:translate-x-0 md:w-0 overflow-hidden"
            }
          `}
        >
          <Sidebar
            activeView={activeSidebarView}
            onOpenFile={(file) => {
              onOpenFile(file);
              if (window.innerWidth < 768) onToggleSidebar();
            }}
            activeFileId={activeTab.id}
            settings={settings}
            onUpdateSettings={onUpdateSettings}
          />
        </div>

        {isSidebarOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black/60 z-40 transition-opacity backdrop-blur-sm"
            onClick={() => onToggleSidebar()}
          />
        )}

        <EditorArea
          openTabs={openTabs}
          activeTab={activeTab}
          onSelectTab={onSelectTab}
          onCloseTab={onCloseTab}
          fileContents={fileContents}
          onUpdateFile={onUpdateFile}
          settings={settings}
          onOpenFile={onOpenFile}
        />
      </div>
      <StatusBar activeTab={activeTab} fileContents={fileContents} />
    </div>
  );
};

export default Layout;
