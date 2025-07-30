import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { GitHubIconCombined } from '@/components/ui/github-icon';

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 pb-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Developer Tools
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              That Actually Work
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Building modern, efficient desktop applications for developers. 
            Free, open-source, and designed primarily for Windows 11.
          </p>
        </div>

        {/* Stats or Quick Facts */}
        <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex flex-col items-center">
            <div className="text-2xl font-bold text-foreground">1</div>
            <div>Active Tool</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl font-bold text-foreground">100%</div>
            <div>Free & Open Source</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="text-lg px-8 py-6" asChild>
            <a href="#tools">
              <Download className="mr-2 h-5 w-5" />
              Download Tools
            </a>
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
            <a 
              href="https://github.com/Joseph101GH"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <GitHubIconCombined size={20} className="mr-2" />
              View on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}