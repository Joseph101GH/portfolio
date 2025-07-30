'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tool } from '@/types/tool';
import { getLatestRelease } from '@/lib/github';
import { GitHubRelease } from '@/types/github';
import { Download, Calendar, Play, Github } from 'lucide-react';

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
        console.log('Fetching release for:', repoPath);
        const latestRelease = await getLatestRelease(repoPath);
        console.log('Release data:', latestRelease);
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
    <Dialog>
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
          {/* Hero Image with Screenshot Background */}
          <DialogTrigger asChild>
            <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 cursor-pointer">
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

            {/* Play Button Overlay */}
            {tool.images.demo && (
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                <div className="bg-white/90 dark:bg-black/90 rounded-full p-3">
                  <Play className="h-8 w-8 text-black dark:text-white" fill="currentColor" />
                </div>
              </div>
            )}

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
            {/* Fallback Version Badge if no release data */}
            {!release && !loading && (
              <div className="absolute top-4 left-4">
                <Badge variant="outline" className="bg-background/80 backdrop-blur">
                  v{tool.releases.latest}
                </Badge>
              </div>
            )}
            </div>
          </DialogTrigger>

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
                className="flex-1 bg-yellow-500 hover:bg-red-500"
                disabled={loading}
              >
                <a
                  href={downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
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
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1">
                  <Github size={12} />
                  Source
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

      {/* Demo Dialog */}
      {tool.images.demo && (
        <DialogContent className="max-w-6xl w-full max-h-[90vh] overflow-y-auto">
          <DialogHeader className="space-y-3">
            <div className="flex items-center gap-3">
              <Image
                src={tool.images.icon}
                alt={`${tool.name} icon`}
                width={40}
                height={40}
                className="rounded"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iNCIgZmlsbD0iIzM3NzNmNCIvPgo8dGV4dCB4PSIyMCIgeT0iMjUiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWkiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSI2MDAiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5UPC90ZXh0Pgo8L3N2Zz4K';
                }}
              />
              <div>
                <DialogTitle className="text-2xl">{tool.name}</DialogTitle>
                <p className="text-muted-foreground">{tool.tagline}</p>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <Badge variant={tool.status === 'active' ? 'default' : 'secondary'}>
                  {tool.status}
                </Badge>
                {release && (
                  <Badge variant="outline">
                    v{release.tag_name}
                  </Badge>
                )}
                {!release && !loading && (
                  <Badge variant="outline">
                    v{tool.releases.latest}
                  </Badge>
                )}
              </div>
            </div>
          </DialogHeader>

          <div className="space-y-6">
            {/* Demo GIF */}
            <div className="flex justify-center">
              <Image
                src={tool.images.demo}
                alt={`${tool.name} demo`}
                width={800}
                height={600}
                className="rounded-lg border"
                unoptimized // Important for GIFs to preserve animation
              />
            </div>

            {/* Full Description */}
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-muted-foreground leading-relaxed">{tool.description}</p>
              </div>

              {tool.longDescription && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">About</h3>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{tool.longDescription.trim()}</p>
                </div>
              )}
            </div>

            {/* Technical Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {tool.tech.map((tech) => (
                    <Badge key={tech} variant="outline">{tech}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {tool.platforms.map((platform) => (
                    <Badge key={platform} variant="secondary">{platform}</Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">✅ Implemented Features</h3>
                <ul className="space-y-2">
                  {tool.features.implemented.map((feature, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">🚧 Planned Features</h3>
                <ul className="space-y-2">
                  {tool.features.planned.map((feature, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-orange-500 mt-0.5">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4 border-t">
              <Button asChild>
                <a
                  href={downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download Latest
                </a>
              </Button>

              <Button variant="outline" asChild>
                <a
                  href={tool.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github size={16} />
                  View Source
                </a>
              </Button>

              {release && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground ml-auto">
                  <Calendar className="h-4 w-4" />
                  Updated {new Date(release.published_at).toLocaleDateString()}
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
}