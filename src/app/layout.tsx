import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Developer Portfolio - Modern Tools for Windows 11',
  description: 'Professional developer tools including t1 - a modern desktop suite for Windows. Download free utilities for .env editing, text conversion, and more. Built with Tauri and React.',
  keywords: ['developer tools', 'desktop apps', 'tauri', 'react', 'windows software', 'productivity', '.env editor', 'text converter'],
  authors: [{ name: 'Your Name' }], // UPDATE WITH YOUR NAME
  creator: 'Your Name', // UPDATE WITH YOUR NAME
  publisher: 'Your Name', // UPDATE WITH YOUR NAME
  
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourusername.github.io/portfolio-website/', // UPDATE WITH YOUR URL
    siteName: 'Developer Portfolio - Modern Tools',
    title: 'Developer Portfolio - Modern Tools for Windows 11',
    description: 'Professional developer tools and utilities built with modern technologies',
    images: [
      {
        url: '/images/og-image.png', // You'll need to create this
        width: 1200,
        height: 630,
        alt: 'Developer Portfolio - Modern Tools',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Developer Portfolio - Modern Tools',
    description: 'Professional developer tools and utilities',
    images: ['/images/og-image.png'], // You'll need to create this
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  metadataBase: new URL('https://yourusername.github.io/portfolio-website/'), // UPDATE WITH YOUR URL
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
