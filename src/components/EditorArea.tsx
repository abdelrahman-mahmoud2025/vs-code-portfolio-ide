import React, { useState } from "react";
import { PortfolioFile } from "../types/types";
import CodeView from "./Editor/CodeView";
import PreviewView from "./Editor/PreviewView";

interface EditorAreaProps {
  openTabs: PortfolioFile[];
  activeTab: PortfolioFile;
  onSelectTab: (id: string) => void;
  onCloseTab: (id: string, e?: React.MouseEvent) => void;
  fileContents: Record<string, string>;
  onUpdateFile: (id: string, content: string) => void;
  settings: any;
  onOpenFile: (file: PortfolioFile) => void;
}

const EditorArea: React.FC<EditorAreaProps> = ({
  openTabs,
  activeTab,
  onSelectTab,
  onCloseTab,
  fileContents,
  onUpdateFile,
  settings,
  onOpenFile,
}) => {
  const [mobileView, setMobileView] = useState<"preview" | "code">("preview");

  const currentCode = fileContents[activeTab.id] || activeTab.rawCode;

  return (
    <div className="flex-1 flex flex-col bg-editor-bg min-w-0 overflow-hidden relative h-full">
      {/* Tab Bar */}
      <div className="flex items-center bg-sidebar-bg h-9 overflow-x-auto border-b border-border-color select-none no-scrollbar shrink-0">
        {openTabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => onSelectTab(tab.id)}
            className={`flex items-center px-4 h-full min-w-fit cursor-pointer gap-2 border-r border-border-color transition-all relative
              ${
                activeTab.id === tab.id
                  ? "bg-editor-bg text-white"
                  : "text-slate-500 hover:bg-editor-bg/50 hover:text-slate-300"
              }
            `}
          >
            {activeTab.id === tab.id && (
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary"></div>
            )}
            <span
              className={`material-symbols-outlined text-sm ${tab.iconColor}`}
            >
              {tab.icon}
            </span>
            <span className="text-sm truncate max-w-30">{tab.name}</span>
            <span
              onClick={(e) => onCloseTab(tab.id, e)}
              className="material-symbols-outlined text-sm text-slate-500 hover:text-white p-0.5 rounded-md hover:bg-slate-700 transition-colors"
            >
              close
            </span>
          </div>
        ))}
      </div>

      {/* Breadcrumbs */}
      <div className="hidden md:flex items-center px-4 h-9 text-xs text-slate-500 border-b border-border-color gap-1 bg-editor-bg shrink-0">
        <span className="hover:text-slate-300 cursor-pointer">
          portfolio-v4
        </span>
        <span className="material-symbols-outlined text-[10px]">
          chevron_right
        </span>
        <span className="flex items-center gap-1">
          <span
            className={`material-symbols-outlined text-sm ${activeTab.iconColor}`}
          >
            {activeTab.icon}
          </span>
          {activeTab.path}
        </span>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-hidden relative flex flex-col lg:flex-row h-full">
        {/* Code View Container */}
        <div
          className={`
          flex-1 h-full overflow-hidden transition-all duration-300 border-r border-border-color
          ${mobileView === "code" ? "flex" : "hidden lg:flex lg:w-1/2"}
        `}
        >
          <CodeView
            code={currentCode}
            type={activeTab.type}
            onUpdate={(val) => onUpdateFile(activeTab.id, val)}
            settings={settings}
          />
        </div>

        {/* Preview View Container */}
        <div
          className={`
          flex-1 h-full overflow-auto transition-all duration-300
          ${mobileView === "preview" ? "flex" : "hidden lg:flex lg:w-1/2"}
        `}
        >
          <PreviewView
            fileId={activeTab.id}
            fileContents={fileContents}
            onOpenFile={onOpenFile}
          />
        </div>
      </div>

      {/* Mobile Control Bar */}
      <div className="lg:hidden absolute bottom-6 right-6 flex flex-col gap-3 z-50">
        <button
          onClick={() =>
            setMobileView(mobileView === "preview" ? "code" : "preview")
          }
          className="w-14 h-14 bg-primary text-background-dark rounded-full shadow-2xl flex items-center justify-center active:scale-95 transition-all hover:scale-105"
        >
          <span className="material-symbols-outlined text-2xl">
            {mobileView === "preview" ? "code" : "visibility"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default EditorArea;
