import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { GitHubIconCombined } from '@/components/ui/github-icon';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Developer Portfolio</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Creating modern, efficient developer tools that solve real problems. 
              All tools are free and open-source.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Joseph101GH" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <GitHubIconCombined size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/tools" className="hover:text-foreground transition-colors">
                  All Tools
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/Joseph101GH/t1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors flex items-center space-x-1"
                >
                  <span>t1 Source Code</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Tools & Resources */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Tools</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/tools/t1" className="hover:text-foreground transition-colors">
                  Developer Tools Suite (t1)
                </Link>
              </li>
              <li className="text-xs text-muted-foreground/60">
                More tools coming soon...
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Copyright & Legal */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {currentYear} Joseph. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <span>Built with Next.js & Tailwind CSS</span>
            <span>•</span>
            <span>Hosted on GitHub Pages</span>
          </div>
        </div>
      </div>
    </footer>
  );
}