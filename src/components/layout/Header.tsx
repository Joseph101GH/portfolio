'use client';

import Link from 'next/link';
import { Github, Home, User, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  currentPage?: string;
}

export default function Header({ currentPage = 'home' }: HeaderProps) {
  const navItems = [
    { label: 'Home', href: '/', icon: Home, active: currentPage === 'home' },
    { label: 'Tools', href: '/tools', icon: Wrench, active: currentPage === 'tools' },
    { label: 'About', href: '/about', icon: User, active: currentPage === 'about' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo/Brand */}
        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">D</span>
          </div>
          <span className="font-bold text-xl">Developer Portfolio</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary ${
                item.active ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* GitHub Link */}
        <Button variant="outline" size="sm" asChild>
          <a
            href="https://github.com/Joseph101GH" // UPDATE WITH YOUR GITHUB
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2"
          >
            <Github className="w-4 h-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </Button>
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