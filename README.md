# 💻 VS Code Portfolio IDE

<div align="center">

![Portfolio Preview](https://img.shields.io/badge/Portfolio-VS_Code_Theme-007ACC?style=for-the-badge&logo=visual-studio-code)
![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?style=for-the-badge&logo=vite)

**An interactive VS Code-themed portfolio built with React, TypeScript, and Tailwind CSS**

[Live Demo](https://abdelrhman-mahmoud.netlify.app) • [Report Bug](https://github.com/abdelrahman-mahmoud2025/vs-code-portfolio-ide/issues) • [Request Feature](https://github.com/abdelrahman-mahmoud2025/vs-code-portfolio-ide/issues)

</div>

---

## ✨ Features

- 🎨 **VS Code Inspired Design** - Authentic VS Code interface with tabs, sidebar, and editor
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 🌙 **Multiple Themes** - One Dark Pro, GitHub Dark, Dracula, and Solarized Dark
- 💻 **Syntax Highlighting** - Real-time code highlighting using react-syntax-highlighter
- 🔍 **File Explorer** - Interactive file tree navigation
- 📄 **Live Preview** - Split view with code editor and live preview
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development
- 🎯 **TypeScript** - Fully typed for better development experience
- 🔧 **Customizable Settings** - Font size, word wrap, minimap, and theme selection

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abdelrahman-mahmoud2025/vs-code-portfolio-ide.git
   cd vs-code-portfolio-ide
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🛠️ Built With

- **[React](https://reactjs.org/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Vite](https://vitejs.dev/)** - Build tool
- **[Tailwind CSS](https://tailwindcss.com/)** - Styling
- **[React Syntax Highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)** - Code highlighting
- **[Material Symbols](https://fonts.google.com/icons)** - Icons

## 📁 Project Structure

```
vs-code-portfolio-ide/
├── public/              # Static assets
│   ├── avatar.jpg
│   ├── img/            # Project images
│   └── ...
├── src/
│   ├── components/     # React components
│   │   ├── ActivityBar.tsx
│   │   ├── EditorArea.tsx
│   │   ├── Sidebar.tsx
│   │   ├── StatusBar.tsx
│   │   └── Editor/
│   │       ├── CodeView.tsx
│   │       └── PreviewView.tsx
│   ├── pages/          # Preview pages
│   │   ├── AboutPreview.tsx
│   │   ├── ProjectsPreview.tsx
│   │   ├── SkillsPreview.tsx
│   │   └── ContactPreview.tsx
│   ├── data/           # Portfolio data
│   │   └── data.ts
│   ├── types/          # TypeScript types
│   │   └── types.ts
│   ├── App.tsx         # Main app component
│   └── main.tsx        # Entry point
├── index.html
├── package.json
├── vite.config.ts
└── tailwind.config.js
```

## 🎨 Customization

### Update Your Portfolio Data

Edit `src/data/data.ts` to customize your portfolio:

```typescript
export const profile: Profile = {
  name: "Your Name",
  alias: "Your Alias",
  role: "Your Role",
  mission: "Your Mission",
  avatar: "./your-avatar.jpg",
  contact: {
    phone: ["Your Phone"],
    email: "your@email.com",
    website: "https://your-website.com",
    location: "Your Location"
  },
  summary: "Your summary..."
};

export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/yourusername', icon: 'github' },
  // Add more social links...
];

// Update projects, skills, experience, etc.
```

### Change Theme

Click the settings icon (⚙️) in the activity bar to:
- Change editor theme
- Adjust font size
- Toggle word wrap
- Enable/disable minimap

## 📦 Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

## 🌐 Deployment

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/abdelrahman-mahmoud2025/vs-code-portfolio-ide/issues).

## 📄 License

Copyright © 2025 [Abdelrhman Mahmoud](https://github.com/abdelrahman-mahmoud2025)

This project is [MIT](./LICENSE) licensed.

## 👤 Author

**Abdelrhman Mahmoud**

- 🌐 Website: [abdelrhman-mahmoud.netlify.app](https://abdelrhman-mahmoud.netlify.app)
- 💼 GitHub: [@abdelrahman-mahmoud2025](https://github.com/abdelrahman-mahmoud2025)
- 💼 LinkedIn: [abdelrhmanmahmoud200204](https://www.linkedin.com/in/abdelrhmanmahmoud200204)
- 📧 Email: abdelrhman.mahmoud.200204@gmail.com

## ⭐ Show your support

Give a ⭐️ if you like this project!

## 🙏 Acknowledgments

- Design inspired by Visual Studio Code
- Icons from Material Symbols
- Syntax highlighting by react-syntax-highlighter

---

<div align="center">
Made with ❤️ by Abdelrhman Mahmoud
</div>
