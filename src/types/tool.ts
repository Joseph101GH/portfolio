export interface Tool {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription?: string;
  category: 'desktop' | 'web' | 'cli' | 'library';
  status: 'active' | 'maintenance' | 'deprecated' | 'coming-soon';
  
  // Technical details
  tech: string[];
  platforms: string[];
  version: string;
  license: string;
  
  // Links and resources
  github: string;
  website?: string;
  documentation?: string;
  
  // Release information
  releases: {
    latest: string;
    downloadUrl: string;
    releaseNotes?: string;
  };
  
  // Media
  images: {
    hero: string;
    screenshots: string[];
    demo?: string; // GIF or video
    icon: string;
  };
  
  // Features
  features: {
    implemented: string[];
    planned: string[];
  };
  
  // SEO
  keywords: string[];
  
  // Metrics (optional)
  stats?: {
    downloads?: number;
    stars?: number;
    lastUpdated: string;
  };
}