export default function SectionSeparator() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Main separator with gradient */}
      <div className="relative h-24 bg-gradient-to-b from-background via-background to-muted/20">
        {/* Light mode wave */}
        <div className="absolute inset-0 dark:hidden">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="waveGradientLight" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
                <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.08" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
              </linearGradient>
            </defs>
            <path
              d="M0,60 C300,20 600,100 900,60 C1050,40 1200,80 1200,60 L1200,120 L0,120 Z"
              fill="url(#waveGradientLight)"
            />
          </svg>
        </div>
        
        {/* Dark mode wave */}
        <div className="absolute inset-0 hidden dark:block">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="waveGradientDarkMode" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.35" />
              </linearGradient>
            </defs>
            <path
              d="M0,60 C300,20 600,100 900,60 C1050,40 1200,80 1200,60 L1200,120 L0,120 Z"
              fill="url(#waveGradientDarkMode)"
            />
          </svg>
        </div>
      </div>
      
      {/* Bottom accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent dark:via-primary/50"></div>
    </div>
  );
} 