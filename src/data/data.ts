
import { PortfolioFile, Profile, Skill, Project, Experience, Article, Extension } from '../types/types';

export const profile: Profile = {
  name: "Abdelrhman Mahmoud",
  alias: "Bode",
  role: "Full-Stack Developer & Instructor",
  mission: "Founder of Code2Z | Full-Stack Developer with 5+ years experience",
  avatar: "./avatar.jpg",
  contact: {
    phone: ["+20 1277697483", "+20 1017155596"],
    email: "abdelrhman.mahmoud.200204@gmail.com",
    website: "https://abdelrhman-mahmoud.netlify.app",
    location: "10th Of Ramadan, Egypt"
  },
  summary: "Results-oriented Full-Stack Developer with over 5 years of experience building scalable web applications using React.js for high-performance SPAs and PHP/Laravel for stable back-end services. Founder of Code2Z, an Arabic e-learning PWA expanding access to technical education. Strong in database design, SEO, and UI/UX, with extensive experience mentoring teams to real-world results."
};

export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/abdelrahman-mahmoud2025', icon: 'github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/abdelrhmanmahmoud200204', icon: 'linkedin' },
  { name: 'Twitter', url: 'https://x.com/b_pondk', icon: 'twitter' },
  { name: 'Telegram', url: 'https://t.me/Abdelrhman_mahm0ud', icon: 'telegram' },
  { name: 'LeetCode', url: 'https://leetcode.com/u/abdelrahman-mahmoud2025/', icon: 'code' }
];

export const extensions: Extension[] = [
  { id: 'react', name: 'ES7+ React/Redux/React-Native snippets', author: 'dsznajder', description: 'JavaScript and React snippets in ES7+ with Babel plugin features', icon: 'extension', color: 'text-blue-400', url: 'https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets', installed: true },
  { id: 'tailwind', name: 'Tailwind CSS IntelliSense', author: 'Tailwind Labs', description: 'Intelligent Tailwind CSS tooling for VS Code', icon: 'palette', color: 'text-cyan-400', url: 'https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss', installed: true },
  { id: 'prettier', name: 'Prettier - Code formatter', author: 'Prettier', description: 'Opinionated Code Formatter', icon: 'auto_fix', color: 'text-yellow-400', url: 'https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode', installed: true },
  { id: 'github', name: 'GitHub Copilot', author: 'GitHub', description: 'Your AI pair programmer', icon: 'psychology', color: 'text-white', url: 'https://marketplace.visualstudio.com/items?itemName=GitHub.copilot', installed: true }
];

export const articles: Article[] = [
  {
    id: '1',
    title: "Mastering React 19: What's New?",
    date: "Oct 24, 2024",
    readTime: "5 min read",
    excerpt: "Exploring the revolutionary changes in React 19, from Actions to improved SEO support.",
    content: "React 19 brings a host of new features that simplify state management and improve performance. The introduction of 'Actions' allows developers to handle asynchronous transitions seamlessly...",
    tags: ["React", "Frontend", "WebDev"]
  },
  {
    id: '2',
    title: "Why Tailwind CSS is my go-to for speed",
    date: "Sep 15, 2024",
    readTime: "4 min read",
    excerpt: "A deep dive into why utility-first CSS is the superior choice for modern web applications.",
    content: "Tailwind CSS has transformed the way I build interfaces. By shifting away from traditional CSS files to utility classes, I've seen a 3x increase in development speed...",
    tags: ["CSS", "Tailwind", "Design"]
  }
];

export const skills: { [key: string]: Skill[] } = {
  frontend: [
    { name: "HTML5", experience: "5+ Years", shortName: "H5", color: "#e34c26" },
    { name: "CSS3", experience: "5+ Years", shortName: "C3", color: "#264de4" },
    { name: "JavaScript", experience: "5+ Years", shortName: "JS", color: "#f7df1e" },
    { name: "TypeScript", experience: "3+ Years", shortName: "TS", color: "#3178c6" },
    { name: "React.js", experience: "5+ Years", shortName: "Re", color: "#62a6f8" },
    { name: "Next.js", experience: "3+ Years", shortName: "Nx", color: "#ffffff" },
    { name: "Tailwind CSS", experience: "4+ Years", shortName: "Tw", color: "#22d3ee" },
    { name: "Sass", experience: "4+ Years", shortName: "Sa", color: "#f472b6" },
    { name: "Bootstrap", experience: "4+ Years", shortName: "Bs", color: "#a855f7" }
  ],
  backend: [
    { name: "PHP", experience: "5+ Years", shortName: "Ph", color: "#8892be" },
    { name: "Laravel", experience: "5+ Years", shortName: "La", color: "#ef4444" },
    { name: "Node.js", experience: "3+ Years", shortName: "Nd", color: "#22c55e" },
    { name: "Express.js", experience: "3+ Years", shortName: "Ex", color: "#ffffff" },
    { name: "Python", experience: "2+ Years", shortName: "Py", color: "#3776ab" },
    { name: "MongoDB", experience: "3+ Years", shortName: "Mg", color: "#4db33d" },
    { name: "MySQL", experience: "5+ Years", shortName: "My", color: "#00758f" },
    { name: "Firebase", experience: "3+ Years", shortName: "Fb", color: "#ffa611" }
  ],
  tools: [
    { name: "Git", experience: "5+ Years", shortName: "Gt", color: "#f05032" },
    { name: "GitHub", experience: "5+ Years", shortName: "GH", color: "#ffffff" },
    { name: "VS Code", experience: "5+ Years", shortName: "VS", color: "#007acc" },
    { name: "Docker", experience: "2+ Years", shortName: "Dk", color: "#60a5fa" },
    { name: "Postman", experience: "4+ Years", shortName: "Pm", color: "#ff6c37" },
    { name: "Figma", experience: "4+ Years", shortName: "Fi", color: "#c084fc" },
    { name: "Photoshop", experience: "4+ Years", shortName: "Ps", color: "#31a8ff" },
    { name: "SEO", experience: "4+ Years", shortName: "SE", color: "#fde047" },
    { name: "PWA", experience: "3+ Years", shortName: "PW", color: "#93c5fd" },
    { name: "Microsoft Office", experience: "5+ Years", shortName: "Of", color: "#d83b01" }
  ],
  softSkills: [
    { name: "Leadership", experience: "5+ Years", shortName: "Ld", color: "#fbbf24" },
    { name: "Teamwork", experience: "5+ Years", shortName: "Tm", color: "#34d399" },
    { name: "Problem-Solving", experience: "5+ Years", shortName: "PS", color: "#60a5fa" },
    { name: "Communication", experience: "5+ Years", shortName: "Cm", color: "#f472b6" },
    { name: "Mentoring", experience: "3+ Years", shortName: "Mt", color: "#a78bfa" }
  ],
  languages: [
    { name: "Arabic", experience: "Native", shortName: "Ar", color: "#22c55e" },
    { name: "English", experience: "Professional", shortName: "En", color: "#3b82f6" }
  ]
};

export const projects: Project[] = [
  {
    title: "Code2Z — E‑learning Platform (PWA)",
    description: "100% Arabic educational platform making programming accessible to all ages. SPA with offline PWA features, SEO‑optimized, and an engaging UI/UX. Built with React.js and PHP/Laravel RESTful API.",
    tags: ["React.js", "PWA", "SEO", "PHP", "Laravel", "MySQL", "Firebase", "Tailwind"],
    image: "./img/code2z.png",
    liveUrl: "https://code2z.netlify.app",
    sourceUrl: "#"
  },
  {
    title: "Abdelrhman Mahmoud Portfolio",
    description: "100% Arabic educational platform making programming accessible to all ages. SPA with offline PWA features, SEO‑optimized, and an engaging UI/UX. Built with React.js and PHP/Laravel RESTful API.",
    tags: ["React.js", "PWA", "SEO", "PHP", "Laravel", "MySQL", "Firebase", "Tailwind"],
    image: "./img/Abdelrhman-Mahmoud-Portfolio.png",
    liveUrl: "https://abdelrhman-mahmoud.netlify.app/",
    sourceUrl: "https://github.com/abdelrahman-mahmoud2025/vs-code-portfolio-ide"
  },
  {
    title: "EDUX — E‑learning Platform & LMS",
    description: "Professional courses platform built with WordPress + Tutor LMS, WooCommerce, and Kashier gateway. Modern responsive UI and scalable delivery for online education.",
    tags: ["WordPress", "Elementor Pro", "Tutor LMS", "WooCommerce", "Kashier"],
    image: "./img/EDUX.png",
    liveUrl: "https://edux4courses.com",
    sourceUrl: "#"
  },
  {
    title: "API for Drilling Services — Corporate Website",
    description: "Corporate site built with PHP + Tailwind. Portfolio/projects, services, testimonials, careers, and certifications with a crisp, mobile‑friendly design.",
    tags: ["PHP", "Tailwind CSS", "Corporate"],
    image: "./img/API-DS.png",
    liveUrl: "https://api-eg.net",
    sourceUrl: "#"
  },
  {
    title: "C2Z-MS — Code2Z Management System",
    description: "An integrated internal management system (Mini-ERP) designed to centralize and automate core operational and administrative tasks for Code2Z. The system covers Project Management (PM), Human Resources (HR), and Financial Management (FM), ensuring data-driven decision-making and enhancing the efficiency of administrative and technical teams.",
    tags: ["Laravel", "PHP", "React.js", "Tailwind CSS", "Chart.js", "MySQL"],
    image: "./img/C2Z-MS.png",
    liveUrl: "https://c2z-ms.xo.je/",
    sourceUrl: "#"
  },
  {
    title: "Weather App",
    description: "A weather app built with React.js and Tailwind CSS. The app provides real-time weather updates and forecasts for any location in the world.",
    tags: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Weather API"],
    image: "./img/weatherApp.png",
    liveUrl: "https://abdelrahman-mahmoud2025.github.io/whether-app/",
    sourceUrl: "https://github.com/abdelrahman-mahmoud2025/whether-app/"
  },
  {
    title: "Age Calculator",
    description: "Age Calculator built with HTML5, CSS3, and JavaScript.",
    tags: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    image: "./img/Age-Calculator.png",
    liveUrl: "https://code2z-age-calculator.netlify.app/",
    sourceUrl: "https://github.com/abdelrahman-mahmoud2025/age-calc"
  },
  {
    title: "Image Editor",
    description: "Image Editor built with HTML5, CSS3, and JavaScript.",
    tags: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    image: "./img/Image-Editor.png",
    liveUrl: "https://code2z-image-editor.netlify.app/",
    sourceUrl: "https://github.com/abdelrahman-mahmoud2025/Image-Editor"
  },
];

export const experience: Experience[] = [
  {
    hash: "a1b2c3",
    role: "Instructor",
    company: "ITA / Teching-Plant / MTEC / Raya / EDUX",
    location: "Egypt",
    period: "01/2024 - Present",
    isCurrent: true,
    description: "Instructed over 500 students in full-stack web development (HTML5/CSS3 to PHP/Laravel). Developed 5+ complete courses with 80+ hours of video content. Mentored developers with a 90% project completion rate.",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "Laravel", "React.js", "Teaching"]
  },
  {
    hash: "d4e5f6",
    role: "IT Help Desk Specialist",
    company: "Helal Golden Star",
    location: "Egypt",
    period: "10/2024 - 03/2025",
    isCurrent: false,
    description: "Provided comprehensive IT support including Networking (TCP/IP, DNS, DHCP, Firewall), System Administration (Windows/macOS), Security (Patch management, Antivirus), and technical support for end users.",
    technologies: ["TCP/IP", "DNS", "DHCP", "Firewall", "Windows", "macOS", "Security"]
  },
  {
    hash: "g7h8i9",
    role: "ERP & CRM Systems Administrator, Support & Marketing Specialist",
    company: "ISC (Information Systems Company)",
    location: "Egypt",
    period: "05/2023 - 02/2024",
    isCurrent: false,
    description: "Deployed ERP/CRM modules, reducing manual data entry by 40%. Maintained 99.9% uptime. Resolved 100+ support tickets monthly. Grew user engagement by 50% via digital marketing campaigns.",
    technologies: ["ERP", "CRM", "Digital Marketing", "System Administration", "Support"]
  }
];

export const education = [
  {
    degree: "Bachelor's in Computer Science and Information Systems",
    institution: "Institute of Computer Science and Information Systems – New Cairo (HICMIS)",
    period: "09/2020 - 05/2024",
    description: "Specialized in applying information systems to enhance business processes and SDLC foundations."
  }
];

export const portfolioFiles: PortfolioFile[] = [
  {
    id: 'home',
    name: 'Home.tsx',
    path: 'src/pages/Home.tsx',
    type: 'tsx',
    icon: 'Code',
    iconColor: 'text-primary',
    rawCode: `import React from 'react';\nimport { profile } from '../data';\n\nconst Home = () => {\n  return (\n    <main className="hero">\n      <h1>{profile.name}</h1>\n      <p>{profile.role}</p>\n      <button>View Projects</button>\n    </main>\n  );\n};\n\nexport default Home;`
  },
  {
    id: 'skills',
    name: 'skills.json',
    path: 'src/data/skills.json',
    type: 'json',
    icon: 'data_object',
    iconColor: 'text-yellow-400',
    rawCode: JSON.stringify({ frontend: skills.frontend, backend: skills.backend, design: skills.design }, null, 2)
  },
  {
    id: 'articles',
    name: 'Articles.tsx',
    path: 'src/pages/Articles.tsx',
    type: 'tsx',
    icon: 'Code',
    iconColor: 'text-primary',
    rawCode: `import React from 'react';\nimport { articles } from '../data';\n\nconst Articles = () => {\n  return (\n    <main className="articles">\n      <h1>Articles</h1>\n      <p>Latest thoughts on development and technology.</p>\n      <ul>\n        ${articles.map(a => `\n          <li key={a.id}>\n            <h2>{a.title}</h2>\n            <p>{a.date}</p>\n            <p>{a.readTime}</p>\n            <p>{a.excerpt}</p>\n          </li>`).join('')}\n      </ul>\n    </main>\n  );\n};\n\nexport default Articles;`
  },
  {
    id: 'projects',
    name: 'Projects.tsx',
    path: 'src/pages/Projects.tsx',
    type: 'tsx',
    icon: 'Code',
    iconColor: 'text-primary',
    rawCode: `import React from 'react';\nimport { projects } from '../data';\n\nconst Projects = () => {\n  return (\n    <div className="container mx-auto p-6">\n      <h1 className="text-3xl font-bold mb-8">My Projects</h1>\n      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">\n        {projects.map((project, index) => (\n          <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">\n            <img \n              src={project.image} \n              alt={project.title} \n              className="w-full h-48 object-cover"\n            />\n            <div className="p-6">\n              <h3 className="text-xl font-bold mb-2">{project.title}</h3>\n              <p className="text-gray-400 mb-4">{project.description}</p>\n              <div className="flex flex-wrap gap-2 mb-4">\n                {project.tags.map(tag => (\n                  <span key={tag} className="px-2 py-1 bg-gray-700 rounded text-sm text-blue-400">\n                    {tag}\n                  </span>\n                ))}\n              </div>\n              <div className="flex gap-4">\n                <a \n                  href={project.liveUrl} \n                  target="_blank" \n                  rel="noreferrer"\n                  className="text-white hover:text-blue-400 transition-colors"\n                >\n                  Live Demo\n                </a>\n                <a \n                  href={project.sourceUrl} \n                  target="_blank" \n                  rel="noreferrer"\n                  className="text-white hover:text-blue-400 transition-colors"\n                >\n                  Source Code\n                </a>\n              </div>\n            </div>\n          </div>\n        ))}\n      </div>\n    </div>\n  );\n};\n\nexport default Projects;`
  },
  {
    id: 'experience',
    name: 'Experience.git',
    path: 'src/data/Experience.git',
    type: 'git',
    icon: 'commit',
    iconColor: 'text-orange-400',
    rawCode: `// Git history log\n$ git log --graph --oneline\n\n* 8f4d2a (HEAD -> main) Senior Full Stack Engineer`
  },
  {
    id: 'education',
    name: 'education.json',
    path: 'src/data/education.json',
    type: 'json',
    icon: 'school',
    iconColor: 'text-purple-400',
    rawCode: JSON.stringify(education, null, 2)
  },
  {
    id: 'contact',
    name: 'Contact.sh',
    path: 'src/data/Contact.sh',
    type: 'sh',
    icon: 'terminal',
    iconColor: 'text-green-400',
    rawCode: `#!/bin/bash\n\nNAME="Abdelrahman Mahmoud"\nEMAIL="abdelrahman.mahmoud.dev@gmail.com"\nGITHUB="https://github.com/abdelrahman-mahmoud2025"\nLINKEDIN="https://linkedin.com/in/abdelrahman-mahmoud"\necho "Feel free to reach out!"`
  },
  {
    id: 'css',
    name: 'index.css',
    path: 'src/index.css',
    type: 'css',
    icon: 'css',
    iconColor: 'text-blue-400',
    rawCode: `:root {\n  --primary: #62a6f8;\n  --bg: #0f131a;\n}\n\nbody {\n  font-family: 'Inter', sans-serif;\n}`
  }
];
