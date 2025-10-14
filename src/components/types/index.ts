// Navigation Types
export interface NavItem {
  id: number;
  title: string;
  link: string;
}

export interface SecondaryNavData {
  line: string;
  appname: string;
  link: string;
  emoji: string;
}

// Feature Types
export interface FeatureData {
  id: number;
  title: string;
  greenTitle?: string;
  detail: string;
  img: string;
}

// Component Props Types
export interface PreloaderProps {
  isLoading: boolean;
}

// Common UI Types
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

// Layout Types
export interface LayoutProps {
  children: React.ReactNode;
}

// Utility Types
export type Theme = 'light' | 'dark';

export interface AppConfig {
  name: string;
  version: string;
  description: string;
}