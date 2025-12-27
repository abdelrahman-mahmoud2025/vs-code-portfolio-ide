import React, { useState } from "react";
import { profile } from "../data/data";

/* Add content prop to satisfy component interface even if not currently parsed */
const ContactPreview: React.FC<{ content: string }> = ({ content }) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) setStep(step + 1);
    else alert("Message protocol initialized successfully!");
  };

  return (
    <div className="w-full max-w-2xl bg-terminal-bg rounded-lg overflow-hidden border border-border-color shadow-2xl font-mono text-sm md:text-[15px] mt-8">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-sidebar-bg border-b border-border-color">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[16px] text-slate-400">
            terminal
          </span>
          <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">
            Terminal — bash
          </span>
        </div>
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
        </div>
      </div>

      <div className="p-6 h-100 overflow-y-auto custom-scrollbar">
        <div className="mb-4 space-y-1 text-slate-400">
          <p>Last login: Tue Oct 24 10:42:12 on ttys001</p>
          <p className="text-green-500">✓ System check passed.</p>
          <p className="text-green-500">✓ Connection established.</p>
          <br />
          <p className="text-slate-500 italic">// Contact Information</p>
        </div>

        {/* Contact Information Display */}
        {profile.contact && (
          <div className="mb-6 p-4 bg-slate-800/30 border border-slate-700/50 rounded space-y-2">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[18px] text-blue-400 mt-0.5">
                email
              </span>
              <div>
                <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">
                  Email
                </p>
                <a
                  href={`mailto:${profile.contact.email}`}
                  className="text-primary hover:underline"
                >
                  {profile.contact.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[18px] text-green-400 mt-0.5">
                phone
              </span>
              <div>
                <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">
                  Phone
                </p>
                <div className="space-y-1">
                  {profile.contact.phone.map((phone, idx) => (
                    <a
                      key={idx}
                      href={`tel:${phone}`}
                      className="block text-slate-200 hover:text-primary"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[18px] text-purple-400 mt-0.5">
                link
              </span>
              <div>
                <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">
                  Website
                </p>
                <a
                  href={profile.contact.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {profile.contact.website}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[18px] text-yellow-400 mt-0.5">
                location_on
              </span>
              <div>
                <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">
                  Location
                </p>
                <p className="text-slate-200">{profile.contact.location}</p>
              </div>
            </div>
          </div>
        )}

        <div className="pt-2 mb-4 border-t border-slate-700/50">
          <p className="text-slate-500 italic text-sm">
            // Or send me a message directly:
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-green-400 font-bold">root@bode:~$</span>
            <span className="text-slate-200"> ./init-contact.sh --verbose</span>
          </div>
          <div className="pl-4 border-l-2 border-slate-700/50 space-y-1 text-slate-400">
            <p>Initializing contact module...</p>
            <p className="text-blue-400">Ready.</p>
          </div>

          <form onSubmit={handleNext} className="space-y-4">
            {/* Step 1: Name */}
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-green-400 font-bold">root@bode:~$</span>
                <span className="text-blue-400 font-bold">send-message</span>
                <span className="text-purple-400">--name=</span>
                {step === 0 ? (
                  <input
                    autoFocus
                    className="bg-transparent border-none p-0 text-white focus:ring-0 placeholder-slate-600 w-fit"
                    placeholder='"Your Name"'
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                ) : (
                  <span className="text-slate-200">"{formData.name}"</span>
                )}
              </div>
            </div>

            {/* Step 2: Email */}
            {step >= 1 && (
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-green-400 font-bold">root@bode:~$</span>
                  <span className="text-purple-400">--email=</span>
                  {step === 1 ? (
                    <input
                      autoFocus
                      type="email"
                      className="bg-transparent border-none p-0 text-white focus:ring-0 placeholder-slate-600 w-fit"
                      placeholder='"you@example.com"'
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  ) : (
                    <span className="text-slate-200">"{formData.email}"</span>
                  )}
                </div>
              </div>
            )}

            {/* Step 3: Message */}
            {step >= 2 && (
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-green-400 font-bold">root@bode:~$</span>
                  <span className="text-purple-400">--message=</span>
                </div>
                <textarea
                  autoFocus
                  className="w-full bg-slate-800/30 border border-slate-700 rounded p-3 text-white focus:ring-1 focus:ring-primary outline-none resize-none h-24"
                  placeholder="Type your message content..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>
            )}

            <div className="pt-2">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 rounded text-sm font-bold transition-all group"
              >
                <span className="material-symbols-outlined text-[18px]">
                  send
                </span>
                <span>{step === 2 ? "EXECUTE_SEND" : "CONTINUE"}</span>
                <span className="w-2 h-4 bg-primary cursor-blink ml-1"></span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPreview;
