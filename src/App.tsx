
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import SimplePortfolio from './pages/SimplePortfolio';
import { portfolioFiles } from './data/data';
import { PortfolioFile } from './types/types';

const SETTINGS_STORAGE_KEY = "portfolio_editor_settings_v1";
const SEO_BASE_TITLE = "Abdelrhman Mahmoud | Full-Stack Developer | Code2Z (C2Z)";
const SEO_BASE_DESCRIPTION =
  "Abdelrhman Mahmoud portfolio, Full-Stack Developer and Instructor. Founder of Code2Z (C2Z) and Wanas with projects in React, TypeScript, Laravel, PWA, and SEO.";

const App: React.FC = () => {
  const [openTabs, setOpenTabs] = useState<PortfolioFile[]>([portfolioFiles[0]]);
  const [activeTabId, setActiveTabId] = useState<string>(portfolioFiles[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSidebarView, setActiveSidebarView] = useState<string>('explorer');
  const [viewMode, setViewMode] = useState<'ide' | 'simple'>('ide');

  // Interactive Content State
  const [fileContents, setFileContents] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    portfolioFiles.forEach(f => initial[f.id] = f.rawCode);
    return initial;
  });

  // Editor Settings State
  const [settings, setSettings] = useState(() => {
    const defaults = {
      fontSize: 14,
      theme: 'One Dark Pro',
      minimap: true,
      lineWrap: true,
      telemetry: false
    };

    try {
      const raw = localStorage.getItem(SETTINGS_STORAGE_KEY);
      if (!raw) return defaults;
      const parsed = JSON.parse(raw);
      return { ...defaults, ...parsed };
    } catch {
      return defaults;
    }
  });

  const activeTab = openTabs.find(t => t.id === activeTabId) || openTabs[0];

  const handleOpenFile = (file: PortfolioFile) => {
    if (!openTabs.find(t => t.id === file.id)) {
      setOpenTabs(prev => [...prev, file]);
    }
    setActiveTabId(file.id);
  };

  const handleOpenContact = () => {
    const contactFile = portfolioFiles.find((f) => f.id === "contact");
    if (contactFile) handleOpenFile(contactFile);
  };

  const handleCloseTab = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    const newTabs = openTabs.filter(t => t.id !== id);
    
    if (newTabs.length === 0) {
      setOpenTabs([portfolioFiles[0]]);
      setActiveTabId(portfolioFiles[0].id);
      return;
    }

    if (id === activeTabId) {
      const closingIndex = openTabs.findIndex(t => t.id === id);
      const nextTab = newTabs[Math.max(0, closingIndex - 1)];
      setActiveTabId(nextTab.id);
    }
    
    setOpenTabs(newTabs);
  };

  const handleToggleSidebar = (view?: string) => {
    if (view) {
      if (activeSidebarView === view && isSidebarOpen) {
        setIsSidebarOpen(false);
      } else {
        setActiveSidebarView(view);
        setIsSidebarOpen(true);
      }
    } else {
      setIsSidebarOpen(!isSidebarOpen);
    }
  };

  const handleOpenSearch = () => {
    if (viewMode !== 'ide') return;
    handleToggleSidebar('search');
  };

  const updateFileContent = (id: string, content: string) => {
    setFileContents(prev => ({ ...prev, [id]: content }));
  };

  const updateSettings = (newSettings: Partial<typeof settings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  const upsertMetaTag = (
    selector: string,
    attr: "name" | "property",
    value: string,
    content: string
  ) => {
    let tag = document.head.querySelector(selector) as HTMLMetaElement | null;
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute(attr, value);
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", content);
  };

  // Apply theme to body for global CSS variables if needed
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', settings.theme.replace(/\s+/g, '-').toLowerCase());
  }, [settings.theme]);

  useEffect(() => {
    const tabSeo: Record<string, { title: string; description: string }> = {
      home: {
        title: SEO_BASE_TITLE,
        description: SEO_BASE_DESCRIPTION,
      },
      projects: {
        title: "Projects | Abdelrhman Mahmoud | Code2Z, Wanas, Portfolio",
        description:
          "Explore Abdelrhman Mahmoud projects including Code2Z, Wanas, and production-ready full-stack apps built with React, TypeScript, Laravel, and PWA architecture.",
      },
      skills: {
        title: "Skills | Abdelrhman Mahmoud | React, TypeScript, Laravel",
        description:
          "Technical skills of Abdelrhman Mahmoud across frontend, backend, tools, and architecture including React, TypeScript, Laravel, SEO, and PWA.",
      },
      experience: {
        title: "Experience | Abdelrhman Mahmoud | Full-Stack Developer",
        description:
          "Career timeline and engineering experience of Abdelrhman Mahmoud across teaching, IT support, ERP/CRM systems, and full-stack product development.",
      },
      education: {
        title: "Education | Abdelrhman Mahmoud",
        description:
          "Academic background and qualifications of Abdelrhman Mahmoud in Computer Science and Information Systems.",
      },
      contact: {
        title: "Contact | Abdelrhman Mahmoud | Hire Full-Stack Developer",
        description:
          "Contact Abdelrhman Mahmoud for full-stack development, mentoring, and product engineering opportunities.",
      },
      articles: {
        title: "Articles | Abdelrhman Mahmoud | React and Web Development",
        description:
          "Articles and insights by Abdelrhman Mahmoud about React, TypeScript, architecture decisions, and modern web engineering.",
      },
    };

    const current = tabSeo[activeTab.id] || {
      title: SEO_BASE_TITLE,
      description: SEO_BASE_DESCRIPTION,
    };

    document.title = current.title;
    upsertMetaTag('meta[name="description"]', "name", "description", current.description);
    upsertMetaTag('meta[property="og:title"]', "property", "og:title", current.title);
    upsertMetaTag(
      'meta[property="og:description"]',
      "property",
      "og:description",
      current.description
    );
    upsertMetaTag('meta[name="twitter:title"]', "name", "twitter:title", current.title);
    upsertMetaTag(
      'meta[name="twitter:description"]',
      "name",
      "twitter:description",
      current.description
    );
  }, [activeTab.id]);

  useEffect(() => {
    document.documentElement.setAttribute("data-telemetry", settings.telemetry ? "on" : "off");
    try {
      localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
    } catch {
      // Storage may be blocked; keep runtime settings only.
    }
  }, [settings]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const isEditable =
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable);
      if (isEditable) return;

      if (e.key === '/' && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        handleOpenSearch();
      }

      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        handleOpenSearch();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode, activeSidebarView, isSidebarOpen]);

  if (viewMode === 'simple') {
    return <SimplePortfolio onBackToIde={() => setViewMode('ide')} />;
  }

  return (
    <Layout
      openTabs={openTabs}
      activeTab={activeTab}
      onSelectTab={setActiveTabId}
      onCloseTab={handleCloseTab}
      onOpenFile={handleOpenFile}
      isSidebarOpen={isSidebarOpen}
      activeSidebarView={activeSidebarView}
      onToggleSidebar={handleToggleSidebar}
      fileContents={fileContents}
      onUpdateFile={updateFileContent}
      settings={settings}
      onUpdateSettings={updateSettings}
      onOpenContact={handleOpenContact}
      onSwitchView={() => setViewMode('simple')}
      onOpenSearch={handleOpenSearch}
    />
  );
};

export default App;
