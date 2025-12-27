import React from "react";

interface ActivityBarProps {
  onToggleSidebar: (view?: string) => void;
  isSidebarOpen: boolean;
  activeView: string;
}

const ActivityBar: React.FC<ActivityBarProps> = ({
  onToggleSidebar,
  isSidebarOpen,
  activeView,
}) => {
  const icons = [
    { id: "explorer", name: "file_copy", label: "Explorer" },
    { id: "search", name: "search", label: "Search" },
    { id: "git", name: "source_environment", label: "Source Control" },
    { id: "debug", name: "bug_report", label: "Run and Debug" },
    { id: "ext", name: "extension", label: "Extensions" },
  ];

  return (
    <div className="w-12 md:w-14 flex flex-col items-center py-4 gap-4 bg-activity-bg border-r border-border-color shrink-0 z-50 select-none">
      {icons.map((icon) => (
        <div
          key={icon.id}
          onClick={() => onToggleSidebar(icon.id)}
          className={`
            relative w-full flex justify-center cursor-pointer h-12 items-center transition-all duration-200
            ${
              isSidebarOpen && activeView === icon.id
                ? "text-white"
                : "text-slate-500 hover:text-slate-300"
            }
          `}
          title={icon.label}
        >
          {isSidebarOpen && activeView === icon.id && (
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary shadow-[0_0_10px_rgba(98,166,248,0.5)]"></div>
          )}
          <span
            className={`material-symbols-outlined text-2xl transition-transform ${
              isSidebarOpen && activeView === icon.id
                ? "scale-110"
                : "scale-100"
            }`}
          >
            {icon.name}
          </span>
        </div>
      ))}
      <div className="mt-auto flex flex-col gap-4 w-full">
        <div
          className={`text-slate-500 hover:text-slate-300 cursor-pointer w-full flex justify-center h-12 items-center ${
            isSidebarOpen && activeView === "account" ? "text-white" : ""
          }`}
          title="Accounts"
          onClick={() => onToggleSidebar("account")}
        >
          <span className="material-symbols-outlined text-2xl">
            account_circle
          </span>
        </div>
        <div
          className={`text-slate-500 hover:text-slate-300 cursor-pointer w-full flex justify-center h-12 items-center pb-2 ${
            isSidebarOpen && activeView === "settings" ? "text-white" : ""
          }`}
          title="Settings"
          onClick={() => onToggleSidebar("settings")}
        >
          <span className="material-symbols-outlined text-2xl">settings</span>
        </div>
      </div>
    </div>
  );
};

export default ActivityBar;
