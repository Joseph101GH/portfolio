import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ToolsGrid from '@/components/sections/ToolsGrid';
import FAQ from '@/components/sections/FAQ';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header currentPage="home" />
      
      <main className="flex-1">
        <Hero />
        <ToolsGrid />
        <FAQ />
      </main>
      
      <Footer />
    </div>
  );
}
