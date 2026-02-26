import React from "react";
import { projects } from "../data/data";

/* Add content prop to satisfy component interface even if not currently parsed */
const ProjectsPreview: React.FC<{ content: string }> = ({ content }) => {
  return (
    <div className="w-full max-w-6xl mt-8 pb-20">
      <div className="flex items-center gap-4 mb-12">
        <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/10 to-transparent"></div>
        <h2 className="text-2xl font-bold text-white tracking-widest uppercase flex items-center gap-3">
          <span className="material-symbols-outlined text-primary">
            rocket_launch
          </span>
          Project Portfolio
        </h2>
        <div className="h-px flex-1 bg-linear-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      <div className="grid grid-cols-1 gap-8 px-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#10141b] transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
          >
            {/* Project Image Overlay */}
            <div className="relative h-52 w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#10141b] via-transparent to-transparent opacity-60"></div>

              <div className="absolute top-4 right-4 flex gap-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/60 backdrop-blur-md border border-white/10 p-2 rounded-full hover:bg-primary hover:text-white transition-colors cursor-pointer text-white flex items-center justify-center"
                  title="View Site"
                >
                  <span className="material-symbols-outlined text-lg">
                    open_in_new
                  </span>
                </a>
              </div>
            </div>

            {/* Project Content */}
            <div className="relative flex flex-1 flex-col p-6">
              <div className="mb-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-md bg-white/5 px-2 py-0.5 text-[10px] font-bold text-slate-400 border border-white/5 transition-colors group-hover:border-primary/20 group-hover:text-primary uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-primary">
                {project.title}
              </h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-400 line-clamp-3">
                {project.description}
              </p>

              <div className="flex gap-4 mt-auto">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-primary py-2.5 text-xs font-bold text-background-dark hover:brightness-110 transition-all shadow-lg shadow-primary/10 active:scale-95"
                >
                  <span className="material-symbols-outlined text-sm">
                    visibility
                  </span>
                  Live Demo
                </a>
                {project.sourceUrl && project.sourceUrl !== "#" ? (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-white/5 border border-white/10 py-2.5 text-xs font-bold text-white hover:bg-white/10 transition-all active:scale-95"
                  >
                    <span className="material-symbols-outlined text-sm">
                      terminal
                    </span>
                    Source
                  </a>
                ) : (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-white/5 border border-white/10 py-2.5 text-xs font-bold text-white hover:bg-white/10 transition-all active:scale-95"
                  >
                    <span className="material-symbols-outlined text-sm">
                      article
                    </span>
                    Case Study
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPreview;
