import React, { useState, useMemo } from "react";
import { portfolioFiles, profile, extensions } from "../data/data";
import { PortfolioFile } from "../types/types";

interface SidebarProps {
  activeView: string;
  onOpenFile: (file: PortfolioFile) => void;
  activeFileId: string;
  settings: any;
  onUpdateSettings: (s: any) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  activeView,
  onOpenFile,
  activeFileId,
  settings,
  onUpdateSettings,
}) => {
  const renderView = () => {
    switch (activeView) {
      case "explorer":
        return (
          <ExplorerView onOpenFile={onOpenFile} activeFileId={activeFileId} />
        );
      case "search":
        return <SearchView onOpenFile={onOpenFile} />;
      case "git":
        return <GitView onOpenFile={onOpenFile} />;
      case "debug":
        return <DebugView />;
      case "ext":
        return <ExtensionsView />;
      case "account":
        return <AccountView onOpenFile={onOpenFile} />;
      case "settings":
        return (
          <SettingsView
            settings={settings}
            onUpdateSettings={onUpdateSettings}
          />
        );
      default:
        return (
          <ExplorerView onOpenFile={onOpenFile} activeFileId={activeFileId} />
        );
    }
  };

  return (
    <aside className="w-full h-full flex flex-col bg-sidebar-bg select-none overflow-hidden">
      <div className="h-10 px-4 flex items-center justify-between text-[11px] font-semibold tracking-widest text-slate-400 border-b border-white/5 uppercase">
        <span>{activeView}</span>
        <span className="material-symbols-outlined text-base cursor-pointer hover:text-white">
          more_horiz
        </span>
      </div>
      <div className="flex-1 overflow-hidden">{renderView()}</div>
    </aside>
  );
};

/* --- SUB-VIEW COMPONENTS --- */

const ExplorerView: React.FC<{
  onOpenFile: (f: PortfolioFile) => void;
  activeFileId: string;
}> = ({ onOpenFile, activeFileId }) => {
  const [expandedFolders, setExpandedFolders] = useState<string[]>([
    "root",
    "src",
    "pages",
    "data",
  ]);
  const toggleFolder = (folder: string) => {
    setExpandedFolders((prev) =>
      prev.includes(folder)
        ? prev.filter((f) => f !== folder)
        : [...prev, folder]
    );
  };
  const isExpanded = (folder: string) => expandedFolders.includes(folder);

  const FileItem: React.FC<{ file: PortfolioFile; indent?: number }> = ({
    file,
    indent = 0,
  }) => (
    <div
      onClick={() => onOpenFile(file)}
      className={`flex items-center pr-3 py-1 cursor-pointer transition-colors relative group select-none
        ${
          activeFileId === file.id
            ? "bg-white/10 text-white"
            : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
        }
      `}
      style={{ paddingLeft: `${indent * 12 + 16}px` }}
    >
      {activeFileId === file.id && (
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary"></div>
      )}
      <span
        className={`material-symbols-outlined text-[18px] mr-2 ${file.iconColor}`}
      >
        {file.icon}
      </span>
      <span className="text-sm truncate">{file.name}</span>
    </div>
  );

  const FolderItem: React.FC<{ name: string; id: string; indent?: number }> = ({
    name,
    id,
    indent = 0,
  }) => (
    <div
      onClick={() => toggleFolder(id)}
      className="flex items-center pr-3 py-1 text-slate-300 cursor-pointer hover:bg-white/5 text-sm font-medium select-none"
      style={{ paddingLeft: `${indent * 12 + 16}px` }}
    >
      <span
        className={`material-symbols-outlined text-lg mr-1 transition-transform duration-200 ${
          isExpanded(id) ? "rotate-90" : ""
        }`}
      >
        chevron_right
      </span>
      <span className="material-symbols-outlined text-lg mr-2 text-slate-400">
        {isExpanded(id) ? "folder_open" : "folder"}
      </span>
      {name}
    </div>
  );

  return (
    <div className="flex-1 overflow-y-auto h-full custom-scrollbar pt-2">
      <FolderItem name="PORTFOLIO-V3" id="root" />
      {isExpanded("root") && (
        <div className="flex flex-col">
          <div className="flex items-center pl-10 pr-3 py-1 text-slate-600 hover:bg-white/5 cursor-not-allowed text-sm">
            <span className="material-symbols-outlined text-lg mr-2">
              folder
            </span>
            node_modules
          </div>
          <FolderItem name="src" id="src" indent={1} />
          {isExpanded("src") && (
            <div className="flex flex-col ml-4 border-l border-white/5">
              <FolderItem name="pages" id="pages" indent={1} />
              {isExpanded("pages") && (
                <div className="flex flex-col ml-4 border-l border-white/5">
                  {portfolioFiles
                    .filter((f) => f.path.includes("pages"))
                    .map((f) => (
                      <FileItem key={f.id} file={f} indent={0} />
                    ))}
                </div>
              )}
              <FolderItem name="data" id="data" indent={1} />
              {isExpanded("data") && (
                <div className="flex flex-col ml-4 border-l border-white/5">
                  {portfolioFiles
                    .filter((f) => f.path.includes("data"))
                    .map((f) => (
                      <FileItem key={f.id} file={f} indent={0} />
                    ))}
                </div>
              )}
              <FileItem
                file={portfolioFiles.find((f) => f.id === "css")!}
                indent={1}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const SearchView: React.FC<{ onOpenFile: (f: PortfolioFile) => void }> = ({
  onOpenFile,
}) => {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q || q.length < 2) return [];

    return portfolioFiles.filter((file) => {
      const inName = file.name.toLowerCase().includes(q);
      const inCode = file.rawCode.toLowerCase().includes(q);
      const inPath = file.path.toLowerCase().includes(q);
      return inName || inCode || inPath;
    });
  }, [query]);

  return (
    <div className="p-4 flex flex-col h-full gap-4">
      <div className="relative">
        <input
          autoFocus
          className="w-full bg-[#1e1e1e] border border-white/10 rounded-sm px-3 py-1.5 text-sm text-slate-200 focus:outline-none focus:border-primary/50 transition-all placeholder:text-slate-600"
          placeholder="Search files..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <span
            className="absolute right-2 top-1.5 material-symbols-outlined text-sm text-slate-500 cursor-pointer hover:text-slate-300"
            onClick={() => setQuery("")}
          >
            close
          </span>
        )}
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {results.length > 0 && (
          <div className="flex flex-col gap-1">
            <p className="text-[11px] text-slate-500 font-bold mb-2 uppercase">
              {results.length} results
            </p>
            {results.map((file) => (
              <div
                key={file.id}
                onClick={() => onOpenFile(file)}
                className="p-2 hover:bg-white/5 cursor-pointer rounded-sm group transition-colors border-l-2 border-transparent hover:border-primary"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`material-symbols-outlined text-sm ${file.iconColor}`}
                  >
                    {file.icon}
                  </span>
                  <span className="text-xs font-bold text-slate-300 group-hover:text-primary">
                    {file.name}
                  </span>
                </div>
                <div className="text-[10px] text-slate-500 truncate pl-5">
                  {file.path}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const GitView: React.FC<{ onOpenFile: (f: PortfolioFile) => void }> = ({
  onOpenFile,
}) => {
  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-white/5">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-tighter">
            Source Control
          </span>
        </div>
        <div className="relative">
          <input
            className="w-full bg-[#1e1e1e] border border-white/10 rounded-sm px-2 py-1 text-xs text-slate-400 placeholder:text-slate-600 outline-none"
            placeholder="Message (Ctrl+Enter to commit)"
          />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto pt-2">
        <div className="px-4 py-1 flex items-center gap-1 text-[11px] font-bold text-slate-500 uppercase mb-1">
          <span className="material-symbols-outlined text-sm rotate-90">
            chevron_right
          </span>
          Changes
        </div>
        {portfolioFiles.slice(0, 3).map((file) => (
          <div
            key={file.id}
            onClick={() => onOpenFile(file)}
            className="flex items-center justify-between px-6 py-1 hover:bg-white/5 cursor-pointer group"
          >
            <div className="flex items-center gap-2 overflow-hidden">
              <span
                className={`material-symbols-outlined text-[16px] ${file.iconColor}`}
              >
                {file.icon}
              </span>
              <span className="text-sm text-slate-300 truncate">
                {file.name}
              </span>
            </div>
            <span className="text-[10px] font-bold text-yellow-500 group-hover:scale-110 transition-transform">
              M
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const DebugView: React.FC = () => {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="p-4 space-y-4">
        <button className="w-full bg-primary hover:bg-primary/90 text-background-dark font-bold text-xs py-2 rounded flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all">
          <span className="material-symbols-outlined text-sm">play_arrow</span>
          RUN AND DEBUG
        </button>
      </div>
      <div className="flex-1 overflow-y-auto custom-scrollbar border-t border-white/5">
        {["Variables", "Watch", "Call Stack", "Breakpoints"].map((section) => (
          <div key={section} className="border-b border-white/5">
            <div className="flex items-center gap-1 px-4 py-1 cursor-pointer hover:bg-white/5 transition-colors">
              <span className="material-symbols-outlined text-sm">
                chevron_right
              </span>
              <span className="text-[11px] font-bold text-slate-400 uppercase">
                {section}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ExtensionsView: React.FC = () => {
  return (
    <div className="p-3 flex flex-col gap-3 h-full overflow-y-auto custom-scrollbar">
      <p className="text-[11px] font-bold text-slate-500 uppercase px-1">
        Installed
      </p>
      {extensions.map((ext) => (
        <a
          key={ext.id}
          href={ext.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-3 group cursor-pointer hover:bg-white/5 p-2 rounded transition-colors no-underline"
        >
          <div
            className={`w-10 h-10 rounded-md flex items-center justify-center bg-white/5 ${ext.color} border border-white/5 group-hover:border-primary/20`}
          >
            <span className="material-symbols-outlined">{ext.icon}</span>
          </div>
          <div className="flex-1 overflow-hidden">
            <h4 className="text-sm font-bold text-slate-200 group-hover:text-primary transition-colors truncate">
              {ext.name}
            </h4>
            <p className="text-[10px] text-slate-500 truncate">
              {ext.description}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};

const AccountView: React.FC<{ onOpenFile: (f: PortfolioFile) => void }> = ({
  onOpenFile,
}) => {
  const openContact = () => {
    const contactFile = portfolioFiles.find((f) => f.id === "contact");
    if (contactFile) onOpenFile(contactFile);
  };

  return (
    <div className="p-6 flex flex-col h-full overflow-y-auto custom-scrollbar">
      <div className="flex flex-col items-center text-center mb-8">
        <div className="w-24 h-24 rounded-full border-4 border-primary/20 p-1 mb-4 shadow-2xl relative">
          <div className="w-full h-full rounded-full overflow-hidden bg-black shadow-inner">
            <img
              src={profile.avatar}
              alt="Profile"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="absolute bottom-1 right-1 w-6 h-6 bg-terminal-bg rounded-full flex items-center justify-center border-2 border-primary/20">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
        </div>
        <h3 className="text-lg font-bold text-white mb-1">{profile.name}</h3>
        <p className="text-xs text-slate-500 font-mono uppercase tracking-widest">
          {profile.role}
        </p>
      </div>

      <div className="bg-white/5 border border-white/5 rounded-lg p-4 mb-6">
        <h4 className="text-[11px] font-bold text-primary uppercase mb-2 tracking-tighter">
          About Me
        </h4>
        <p className="text-xs text-slate-400 leading-relaxed italic">
          Passionate Full-Stack Developer with 5+ years of experience building
          scalable web applications. Expert in React, TypeScript, and modern
          architectures. I love solving complex problems with clean code.
        </p>
      </div>

      <div className="space-y-3">
        <button
          onClick={openContact}
          className="w-full flex items-center gap-3 p-3 bg-primary hover:brightness-110 text-background-dark font-bold rounded-lg text-xs transition-all shadow-lg active:scale-95"
        >
          <span className="material-symbols-outlined text-lg">mail</span>
          Message Me
        </button>

        <div className="pt-4 border-t border-white/5 grid grid-cols-2 gap-2">
          <a
            href="https://github.com/abdelrahman-mahmoud2025"
            target="_blank"
            className="flex flex-col items-center gap-2 p-3 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white rounded-lg transition-all border border-white/5 no-underline"
          >
            <span className="material-symbols-outlined text-lg">code</span>
            <span className="text-[10px] font-bold uppercase">GitHub</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="flex flex-col items-center gap-2 p-3 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white rounded-lg transition-all border border-white/5 no-underline"
          >
            <span className="material-symbols-outlined text-lg text-blue-400">
              link
            </span>
            <span className="text-[10px] font-bold uppercase">LinkedIn</span>
          </a>
        </div>

        <a
          href="./Abdelrhman-Mahmoud-CV.pdf"
          className="w-full flex items-center justify-center gap-2 p-3 bg-white/5 hover:bg-white/10 text-slate-300 rounded-lg text-[11px] font-bold uppercase border border-white/5 no-underline"
        >
          <span className="material-symbols-outlined text-sm">download</span>
          Download Resume
        </a>
      </div>
    </div>
  );
};

const SettingsView: React.FC<{
  settings: any;
  onUpdateSettings: (s: any) => void;
}> = ({ settings, onUpdateSettings }) => {
  return (
    <div className="p-6 space-y-8 overflow-y-auto custom-scrollbar h-full">
      <div className="space-y-4">
        <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
          Text Editor
        </h3>
        <div className="space-y-3">
          <div className="space-y-1.5">
            <label className="text-xs text-slate-300 block font-medium">
              Font Size
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="10"
                max="24"
                value={settings.fontSize}
                onChange={(e) =>
                  onUpdateSettings({ fontSize: parseInt(e.target.value) })
                }
                className="flex-1 accent-primary h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-xs text-slate-400 w-8">
                {settings.fontSize}px
              </span>
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs text-slate-300 block font-medium">
              Editor Layout
            </label>
            <div
              className="flex items-center justify-between p-2.5 bg-white/5 rounded-md cursor-pointer group"
              onClick={() => onUpdateSettings({ lineWrap: !settings.lineWrap })}
            >
              <span className="text-[11px] text-slate-400 group-hover:text-white transition-colors">
                Word Wrap
              </span>
              <div
                className={`w-9 h-4.5 rounded-full flex items-center px-1 transition-all ${
                  settings.lineWrap
                    ? "bg-primary justify-end"
                    : "bg-slate-700 justify-start"
                }`}
              >
                <div className="w-3 h-3 bg-background-dark rounded-full shadow-sm"></div>
              </div>
            </div>
            <div
              className="flex items-center justify-between p-2.5 bg-white/5 rounded-md cursor-pointer group"
              onClick={() => onUpdateSettings({ minimap: !settings.minimap })}
            >
              <span className="text-[11px] text-slate-400 group-hover:text-white transition-colors">
                Minimap
              </span>
              <div
                className={`w-9 h-4.5 rounded-full flex items-center px-1 transition-all ${
                  settings.minimap
                    ? "bg-primary justify-end"
                    : "bg-slate-700 justify-start"
                }`}
              >
                <div className="w-3 h-3 bg-background-dark rounded-full shadow-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
          Theme Selection
        </h3>
        <div className="grid grid-cols-1 gap-1.5">
          {[
            { id: "One Dark Pro", label: "One Dark Pro (Default)" },
            { id: "GitHub Dark", label: "GitHub Dark" },
            { id: "Solarized Dark", label: "Solarized Dark" },
            { id: "Dracula", label: "Dracula" },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => onUpdateSettings({ theme: t.id })}
              className={`text-[10px] py-2 px-3 rounded-md border text-left transition-all ${
                settings.theme === t.id
                  ? "bg-primary/20 border-primary text-primary font-bold"
                  : "bg-white/5 border-transparent text-slate-400 hover:text-slate-200 hover:bg-white/10"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
