# Electron React TypeScript Tailwind Starter

A modern Electron desktop application boilerplate with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Electron** - Cross-platform desktop framework
- **React 19** - Modern UI library
- **TypeScript** - Type-safe code
- **Tailwind CSS 4** - Utility-first styling
- **Vite** - Fast development server
- **Electron Builder** - Easy packaging and auto-updates
- **System Tray** - Native tray icon with menu
- **Auto-Updater** - Built-in update support
- **Protocol Handler** - Custom URL scheme (`app://`)
- **Preload Script** - Secure IPC communication

## 📦 Quick Start

### Prerequisites

- Node.js 22+
- npm, yarn, or pnpm
- Electron Builder

### Installation

```bash
# Clone the repository
git clone https://github.com/kamalesh404/electron-app.git
cd electron-app

# Install dependencies
npm install

# Start development mode
npm run dev

# Start Electron with Vite
npm run electron:dev
```

### Build for Production

```bash
# Build the Vite frontend
npm run build

# Build and package Electron
npm run electron:build
```

## 🛠️ Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite development server |
| `npm run build` | Build Vite for production |
| `npm run preview` | Preview production build |
| `npm run electron:dev` | Start Electron in development mode |
| `npm run electron:build` | Build Electron app for distribution |

## 📁 Project Structure

```
electron-app/
├── electron/           # Electron main process
│   ├── main.cjs       # Main process entry point
│   └── preload.cjs    # Preload script for IPC
├── src/               # React source files
│   ├── components/    # React components
│   │   └── App.tsx    # Main application component
│   ├── pages/         # Page components
│   ├── index.html     # HTML template
│   └── main.tsx       # Entry point
├── package.json       # Project dependencies and scripts
├── vite.config.ts     # Vite configuration
├── tailwind.config.ts # Tailwind CSS configuration
├── tsconfig.json      # TypeScript configuration
├── .env.example      # Environment variables example
└── README.md          # This file
```

## 🐋 Docker (Optional)

```bash
# Build Docker image
docker build -t electron-app .

# Run container
docker run -e DISPLAY=$DISPLAY -v /tmp/.X11-unix:/tmp/.X11-unix electron-app
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

- **GitHub**: [@kamalesh404](https://github.com/kamalesh404)
- **Project**: [electron-app](https://github.com/kamalesh404/electron-app)