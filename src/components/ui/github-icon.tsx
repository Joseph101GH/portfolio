import Image from 'next/image';

interface GitHubIconProps {
  className?: string;
  size?: number;
}

export function GitHubIcon({ className = '', size = 16 }: GitHubIconProps) {
  return (
    <Image
      src="/images/brands/GitHub Logos/SVG/GitHub_Invertocat_Dark.svg"
      alt="GitHub"
      width={size}
      height={size}
      className={`dark:hidden ${className}`}
    />
  );
}

export function GitHubIconDark({ className = '', size = 16 }: GitHubIconProps) {
  return (
    <Image
      src="/images/brands/GitHub Logos/SVG/GitHub_Invertocat_Light.svg"
      alt="GitHub"
      width={size}
      height={size}
      className={`hidden dark:block ${className}`}
    />
  );
}

export function GitHubIconCombined({ className = '', size = 16 }: GitHubIconProps) {
  return (
    <div className="relative">
      <GitHubIcon className={className} size={size} />
      <GitHubIconDark className={className} size={size} />
    </div>
  );
} 