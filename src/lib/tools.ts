import { Tool } from '@/types/tool';

export const tools: Tool[] = [
  {
    id: 't1',
    name: 'Developer Tools Suite (t1)',
    tagline: 'Modern desktop toolkit for developers',
    description: 'A comprehensive suite of developer utilities built with Tauri and React, designed for Windows 11 with a beautiful, native-feeling interface.',
    longDescription: `
      t1 is a modern, extensible desktop application that brings together essential developer utilities in one place. 
      Built with performance and user experience in mind, it features a clean interface, dark/light themes, 
      and tools that actually solve real developer problems.
    `,
    category: 'desktop',
    status: 'active',
    
    tech: ['Tauri', 'React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Rust'],
    platforms: ['Windows 11', 'Windows 10'],
    version: '0.6.1-Alpha',
    license: 'MIT',
    
    github: 'https://github.com/Joseph101GH/t1', // UPDATE THIS WITH YOUR ACTUAL REPO
    releases: {
      latest: '0.6.1-Alpha',
      downloadUrl: 'https://github.com/Joseph101GH/t1/releases/latest', // UPDATE THIS
    },
    
    images: {
      hero: '/images/tools/t1/placeholder.svg',
      screenshots: [
        '/images/tools/t1/placeholder.svg',
        '/images/tools/t1/placeholder.svg',
        '/images/tools/t1/placeholder.svg',
      ],
      demo: '/images/tools/t1/placeholder.svg',
      icon: '/images/tools/t1/placeholder.svg',
    },
    
    features: {
      implemented: [
        '.env File Editor with syntax highlighting and validation',
        'Text Case Converter (PascalCase, snake_case, etc.)',
        'Theme system (light/dark/system)',
        'Modern sidebar navigation',
        'Settings management',
      ],
      planned: [
        'Unicode Character Picker',
        'Terminal Commands GUI', 
        'File Size Analyzer',
        'QR Code Generator',
        'Text Diff Tool',
        'Directory Watcher',
        'Network Scanner',
        'Clipboard History',
      ],
    },
    
    keywords: ['developer tools', 'desktop app', 'tauri', 'react', 'windows', 'productivity'],
    
    stats: {
      lastUpdated: new Date().toISOString(),
    },
  },
  // Add more tools here as they're developed
];

export function getToolById(id: string): Tool | undefined {
  return tools.find(tool => tool.id === id);
}

export function getActiveTools(): Tool[] {
  return tools.filter(tool => tool.status === 'active');
}