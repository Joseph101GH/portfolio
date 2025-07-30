import { GitHubRelease, GitHubRepo } from '@/types/github';

export async function getLatestRelease(repo: string): Promise<GitHubRelease | null> {
  try {
    const response = await fetch(`https://api.github.com/repos/${repo}/releases/latest`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        // Add token for higher rate limits in production
        // 'Authorization': `token ${process.env.GITHUB_TOKEN}`,
      },
    });
    
    if (!response.ok) return null;
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch release:', error);
    return null;
  }
}

export async function getRepositoryInfo(repo: string): Promise<GitHubRepo | null> {
  try {
    const response = await fetch(`https://api.github.com/repos/${repo}`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
    });
    
    if (!response.ok) return null;
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch repository info:', error);
    return null;
  }
}

export async function getAllReleases(repo: string): Promise<GitHubRelease[]> {
  try {
    const response = await fetch(`https://api.github.com/repos/${repo}/releases`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
    });
    
    if (!response.ok) return [];
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch releases:', error);
    return [];
  }
}