
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import { portfolioFiles } from './data/data';
import { PortfolioFile } from './types/types';

const App: React.FC = () => {
  const [openTabs, setOpenTabs] = useState<PortfolioFile[]>([portfolioFiles[0]]);
  const [activeTabId, setActiveTabId] = useState<string>(portfolioFiles[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSidebarView, setActiveSidebarView] = useState<string>('explorer');

  // Interactive Content State
  const [fileContents, setFileContents] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    portfolioFiles.forEach(f => initial[f.id] = f.rawCode);
    return initial;
  });

  // Editor Settings State
  const [settings, setSettings] = useState({
    fontSize: 14,
    theme: 'One Dark Pro',
    minimap: true,
    lineWrap: true,
    telemetry: false
  });

  const activeTab = openTabs.find(t => t.id === activeTabId) || openTabs[0];

  const handleOpenFile = (file: PortfolioFile) => {
    if (!openTabs.find(t => t.id === file.id)) {
      setOpenTabs(prev => [...prev, file]);
    }
    setActiveTabId(file.id);
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

  const updateFileContent = (id: string, content: string) => {
    setFileContents(prev => ({ ...prev, [id]: content }));
  };

  const updateSettings = (newSettings: Partial<typeof settings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  // Apply theme to body for global CSS variables if needed
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', settings.theme.replace(/\s+/g, '-').toLowerCase());
  }, [settings.theme]);

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
    />
  );
};

export default App;
