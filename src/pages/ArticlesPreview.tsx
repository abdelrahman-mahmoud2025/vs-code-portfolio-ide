
import React, { useState } from 'react';
import { articles } from '../data/data';
import { Article } from '../types/types';

/* Add content prop to satisfy component interface even if not currently parsed */
const ArticlesPreview: React.FC<{ content: string }> = ({ content }) => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  if (selectedArticle) {
    return (
      <div className="w-full max-w-3xl mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <button 
          onClick={() => setSelectedArticle(null)}
          className="flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors text-sm font-medium"
        >
          <span className="material-symbols-outlined text-lg">arrow_back</span>
          Back to list
        </button>

        <div className="mb-6 flex flex-wrap gap-2">
          {selectedArticle.tags.map(tag => (
            <span key={tag} className="text-[10px] font-bold tracking-wider uppercase text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">{selectedArticle.title}</h1>
        
        <div className="flex items-center gap-4 text-slate-500 text-xs mb-10 border-b border-white/5 pb-4">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">calendar_month</span>
            {selectedArticle.date}
          </span>
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">schedule</span>
            {selectedArticle.readTime}
          </span>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-slate-300 text-lg leading-relaxed mb-6 italic">
            {selectedArticle.excerpt}
          </p>
          <div className="text-slate-400 leading-loose text-base">
            {selectedArticle.content}
            <br/><br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mt-8">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-3">
          <span className="p-2 bg-primary/10 rounded-lg text-primary">
            <span className="material-symbols-outlined text-[24px]">article</span>
          </span>
          Latest Articles
        </h2>
        <div className="flex gap-2">
          <span className="text-xs text-slate-500 border border-white/10 px-3 py-1 rounded-full">2 total posts</span>
        </div>
      </div>

      <div className="space-y-6">
        {articles.map((article) => (
          <div 
            key={article.id}
            onClick={() => setSelectedArticle(article)}
            className="group relative bg-[#1a1f28]/40 border border-white/5 hover:border-primary/30 p-8 rounded-2xl transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-primary/5 active:scale-[0.99]"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-2">
                {article.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold tracking-wider uppercase text-slate-500 group-hover:text-primary transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-[11px] text-slate-600 font-medium">{article.date}</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors leading-snug">
              {article.title}
            </h3>
            
            <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
              {article.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                  {article.readTime}
                </span>
              </div>
              <span className="text-primary font-bold text-xs flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0">
                Read More
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlesPreview;
