export interface SiteConfig {
  name: string;
  role: string;
  tagline: string;
  description: string;
  url: string;
  author: string;
  keywords: string[];
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface SocialLinks {
  github: SocialLink;
  linkedin: SocialLink;
  youtube: SocialLink;
  email: SocialLink;
}

export interface NavigationLink {
  title: string;
  href: string;
}
