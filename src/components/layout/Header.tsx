'use client';

import Link from 'next/link';
import { Home, User, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';

interface HeaderProps {
  currentPage?: string;
}

export default function Header({ currentPage = 'home' }: HeaderProps) {
  const navItems = [
    { label: 'Home', href: '#', icon: Home, active: currentPage === 'home' },
    { label: 'Tools', href: '#tools', icon: Wrench, active: currentPage === 'tools' },
    { label: 'About', href: '#faq', icon: User, active: currentPage === 'about' },
  ];

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo/Brand */}
        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-red-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">J</span>
          </div>
          <span className="font-bold text-xl">Joseph Portfolio</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={(e) => handleNavClick(item.href, e)}
              className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary ${
                item.active ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Theme Toggle */}
        <ThemeToggle />
      </div>

      {/* Breadcrumbs (when not on home page) */}
      {currentPage !== 'home' && (
        <div className="border-t bg-muted/40">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-foreground capitalize">{currentPage}</span>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}