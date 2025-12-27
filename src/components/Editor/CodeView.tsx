import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  vscDarkPlus,
  dracula,
  ghcolors,
  solarizedlight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeViewProps {
  code: string;
  type: string;
  onUpdate: (content: string) => void;
  settings: any;
}

const CodeView: React.FC<CodeViewProps> = ({
  code,
  type,
  onUpdate,
  settings,
}) => {
  const [localCode, setLocalCode] = useState<string>(
    typeof code === "string" ? code : ""
  );

  useEffect(() => {
    setLocalCode(typeof code === "string" ? code : "");
  }, [code]);

  const getLang = (t: string) => {
    switch (t) {
      case "tsx":
        return "tsx";
      case "json":
        return "json";
      case "sh":
        return "bash";
      case "css":
        return "css";
      case "md":
        return "markdown";
      case "git":
        return "bash";
      default:
        return "javascript";
    }
  };

  /**
   * Safe style resolver to prevent "Uncaught [object Object]"
   * This ensures we always pass a valid style object to react-syntax-highlighter
   */
  const getThemeStyle = (themeName: string) => {
    const safeVsc = vscDarkPlus || {};
    const safeDracula = dracula || safeVsc;
    const safeGitHub = ghcolors || safeVsc;
    const safeSolarized = solarizedlight || safeVsc;

    switch (themeName) {
      case "Dracula":
        return safeDracula;
      case "GitHub Dark":
        return safeGitHub;
      case "Solarized Dark":
        return safeSolarized;
      case "One Dark Pro":
      default:
        return safeVsc;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setLocalCode(val);
    onUpdate(val);
  };

  const currentStyle = getThemeStyle(settings.theme);

  return (
    <div
      className="relative w-full h-full flex flex-col font-mono overflow-hidden group"
      style={{ fontSize: `${settings.fontSize}px` }}
    >
      <div className="flex-1 overflow-auto custom-scrollbar bg-[#0f1117] h-full relative">
        {/* Transparent Textarea Overlay for Input */}
        <textarea
          className={`
            absolute inset-0 w-full h-full p-4 pl-14 bg-transparent outline-none resize-none text-transparent caret-primary font-mono leading-relaxed z-10
            ${
              settings.lineWrap
                ? "whitespace-pre-wrap"
                : "whitespace-pre overflow-auto"
            }
          `}
          value={localCode}
          onChange={handleChange}
          spellCheck={false}
          autoFocus
          style={{
            fontSize: `${settings.fontSize}px`,
            lineHeight: "1.5",
          }}
        />

        {/* Highlighted Background */}
        <div className="pointer-events-none h-full overflow-hidden">
          <SyntaxHighlighter
            language={getLang(type)}
            style={currentStyle}
            showLineNumbers={true} // Line numbers enabled by default
            wrapLines={settings.lineWrap}
            lineNumberStyle={{
              minWidth: "3.5em",
              paddingRight: "1em",
              color: "#4b5563",
              textAlign: "right",
              borderRight: "1px solid #2b323b",
              marginRight: "1em",
              userSelect: "none",
              opacity: 0.5,
            }}
            customStyle={{
              margin: 0,
              padding: "1rem 0",
              background: "transparent",
              fontSize: `${settings.fontSize}px`,
              lineHeight: "1.5",
              minHeight: "100%",
              overflow: "visible",
            }}
          >
            {localCode || " "}
          </SyntaxHighlighter>
        </div>

        {/* Decorative Minimap Simulation */}
        {settings.minimap && (
          <div className="absolute right-0 top-0 w-16 h-full bg-white/5 border-l border-white/5 opacity-50 pointer-events-none hidden md:block select-none overflow-hidden">
            <div className="scale-[0.12] origin-top-left p-4 opacity-40">
              <pre>{localCode || " "}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeView;
