import React from "react";
import { profile, experience, education, impactStats, skills, socialLinks, topProjects } from "../data/data";

interface SimplePortfolioProps {
  onBackToIde: () => void;
}

const SimplePortfolio: React.FC<SimplePortfolioProps> = ({ onBackToIde }) => {

  return (
    <div className="min-h-screen w-full bg-[#0c0f14] text-slate-200">
      <div className="mx-auto w-full max-w-5xl px-6 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Portfolio
            </p>
            <h1 className="text-3xl font-bold text-white">{profile.name}</h1>
            <p className="text-slate-400 mt-1">{profile.role}</p>
            <p className="text-slate-500 mt-3 max-w-2xl text-sm leading-relaxed">
              {profile.summary}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onBackToIde}
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase text-white hover:bg-white/10"
            >
              IDE View
            </button>
            <a
              href="./Abdelrhman-Mahmoud-CV.pdf"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-xs font-bold uppercase text-background-dark hover:brightness-110"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4">
          {impactStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/5 bg-[#10151d] p-4"
            >
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-xs uppercase tracking-widest text-slate-500 mt-1">
                {stat.label}
              </p>
              {stat.hint && (
                <p className="text-[11px] text-slate-600 mt-2">{stat.hint}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-lg font-bold text-white mb-4">Top Projects</h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {topProjects.map((project) => {
              const hasSource = project.sourceUrl && project.sourceUrl !== "#";
              return (
                <div
                  key={project.title}
                  className="rounded-xl border border-white/5 bg-[#10151d] overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-36 w-full object-cover"
                  />
                  <div className="p-4">
                    <p className="text-sm font-semibold text-white">{project.title}</p>
                    <p className="text-xs text-slate-400 mt-2 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="mt-4 flex gap-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-primary hover:underline"
                      >
                        Live
                      </a>
                      {hasSource ? (
                        <a
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-bold text-slate-300 hover:underline"
                        >
                          Source
                        </a>
                      ) : (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-bold text-slate-300 hover:underline"
                        >
                          Case Study
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-lg font-bold text-white mb-4">Experience</h2>
            <div className="space-y-4">
              {experience.map((exp) => (
                <div
                  key={exp.hash}
                  className="rounded-lg border border-white/5 bg-[#10151d] p-4"
                >
                  <p className="text-sm font-semibold text-white">{exp.role}</p>
                  <p className="text-xs text-slate-500 mt-1">
                    {exp.company} • {exp.location}
                  </p>
                  <p className="text-xs text-slate-400 mt-2">{exp.period}</p>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {[
                ...skills.frontend,
                ...skills.backend,
                ...skills.tools,
                ...skills.softSkills,
                ...skills.languages,
              ].map((skill) => (
                <span
                  key={skill.name}
                  className="rounded-md border border-white/5 bg-[#10151d] px-2 py-1 text-[11px] text-slate-300"
                >
                  {skill.name}
                </span>
              ))}
            </div>

            <h2 className="text-lg font-bold text-white mt-8 mb-4">Education</h2>
            <div className="rounded-lg border border-white/5 bg-[#10151d] p-4">
              <p className="text-sm font-semibold text-white">
                {education[0].degree}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                {education[0].institution}
              </p>
              <p className="text-xs text-slate-400 mt-2">{education[0].period}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="text-xs text-slate-500">
            {profile.contact?.email} • {profile.contact?.phone?.[0]}
          </div>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-slate-300 hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimplePortfolio;
