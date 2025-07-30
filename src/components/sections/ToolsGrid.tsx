import { tools } from '@/lib/tools';
import { ToolCard } from '@/components/tools/ToolCard';

export default function ToolsGrid() {
  return (
    <section id="tools" className="container mx-auto px-4 py-16 pt-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Developer Tools
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Modern, efficient tools designed to solve real developer problems. 
            Download instantly and start being more productive today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>

        {/* Coming Soon Teaser */}
        <div className="mt-12 text-center">
          <div className="bg-muted/40 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-2">More Tools Coming Soon</h3>
            <p className="text-muted-foreground mb-4">
              I&apos;m actively working on expanding my tools and adding new features. Follow the GitHub repository 
              to get notified about new releases and tools.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
              <span>• Games</span>
              <span>• Youtube extension</span>
              <span>• WoW addons</span>
              <span>• File Duplicate Watcher</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}