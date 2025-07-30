'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tool } from '@/types/tool';
import { getLatestRelease } from '@/lib/github';
import { GitHubRelease } from '@/types/github';
import { Download, Github, Calendar } from 'lucide-react';

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  const [release, setRelease] = useState<GitHubRelease | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRelease() {
      try {
        const repoPath = tool.github.replace('https://github.com/', '');
        const latestRelease = await getLatestRelease(repoPath);
        setRelease(latestRelease);
      } catch (error) {
        console.error('Error fetching release:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchRelease();
  }, [tool.github]);

  const downloadUrl = release?.html_url || tool.releases.downloadUrl;

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
      {/* Hero Image with Screenshot Background */}
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
        <Image
          src={tool.images.hero}
          alt={`${tool.name} screenshot`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            // Fallback gradient if image fails to load
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <Badge variant={tool.status === 'active' ? 'default' : 'secondary'}>
            {tool.status}
          </Badge>
        </div>

        {/* Version Badge */}
        {release && (
          <div className="absolute top-4 left-4">
            <Badge variant="outline" className="bg-background/80 backdrop-blur">
              v{release.tag_name}
            </Badge>
          </div>
        )}
      </div>
      
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={tool.images.icon}
              alt={`${tool.name} icon`}
              width={32}
              height={32}
              className="rounded"
              onError={(e) => {
                // Fallback icon
                const target = e.target as HTMLImageElement;
                target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iNCIgZmlsbD0iIzM3NzNmNCIvPgo8dGV4dCB4PSIxNiIgeT0iMjAiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWkiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSI2MDAiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5UPC90ZXh0Pgo8L3N2Zz4K';
              }}
            />
            <div>
              <CardTitle className="text-lg">{tool.name}</CardTitle>
              <CardDescription>{tool.tagline}</CardDescription>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">{tool.description}</p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1">
          {tool.tech.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
          {tool.tech.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{tool.tech.length - 4} more
            </Badge>
          )}
        </div>

        {/* Release Info */}
        {release && (
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {new Date(release.published_at).toLocaleDateString()}
            </div>
            {tool.stats?.downloads && (
              <div className="flex items-center gap-1">
                <Download className="w-3 h-3" />
                {tool.stats.downloads} downloads
              </div>
            )}
          </div>
        )}
        
        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          <Button 
            asChild 
            size="sm" 
            className="flex-1 bg-blue-600 hover:bg-blue-700"
            disabled={loading}
          >
            <a 
              href={downloadUrl}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Download className="mr-2 h-3 w-3" />
              {loading ? 'Loading...' : 'Download'}
            </a>
          </Button>
          
          <Button variant="outline" size="sm" asChild>
            <a 
              href={tool.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <Github className="w-3 h-3" />
              Source
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}