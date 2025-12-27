import React from "react";
import HomePreview from "../../pages/HomePreview";
import SkillsPreview from "../../pages/SkillsPreview";
import ProjectsPreview from "../../pages/ProjectsPreview";
import ExperiencePreview from "../../pages/ExperiencePreview";
import EducationPreview from "../../pages/EducationPreview";
import ContactPreview from "../../pages/ContactPreview";
import ArticlesPreview from "../../pages/ArticlesPreview";
import { PortfolioFile } from "../../types/types";

interface PreviewViewProps {
  fileId: string;
  fileContents: Record<string, string>;
  onOpenFile?: (file: PortfolioFile) => void;
}

const PreviewView: React.FC<PreviewViewProps> = ({
  fileId,
  fileContents,
  onOpenFile,
}) => {
  const renderPreview = () => {
    // Note: We currently don't re-parse complex JSON for the preview live,
    // but the structure allows for future enhancements.
    switch (fileId) {
      case "home":
        return (
          <HomePreview content={fileContents["home"]} onOpenFile={onOpenFile} />
        );
      case "skills":
        return <SkillsPreview content={fileContents["skills"]} />;
      case "projects":
        return <ProjectsPreview content={fileContents["projects"]} />;
      case "experience":
        return <ExperiencePreview content={fileContents["experience"]} />;
      case "education":
        return <EducationPreview content={fileContents["education"]} />;
      case "contact":
        return <ContactPreview content={fileContents["contact"]} />;
      case "articles":
        return <ArticlesPreview content={fileContents["articles"]} />;
      default:
        return (
          <div className="text-slate-500 p-8">
            No live preview available for this file.
          </div>
        );
    }
  };

  return (
    <div className="w-full h-full relative min-fit">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[24px_24px]"></div>

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 w-[80%] h-[80%] bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      {/* Preview Badge */}
      <div className="sticky top-4 flex justify-end px-4 z-20 pointer-events-none">
        <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5 text-[11px] font-mono text-white flex items-center gap-2 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
          Live Preview: localhost:3000
        </div>
      </div>

      <div className="relative z-10 p-4 md:p-10 flex flex-col items-center">
        {renderPreview()}
      </div>
    </div>
  );
};

export default PreviewView;
