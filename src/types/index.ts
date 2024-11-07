export interface Essay {
  date: string;
  title: string;
  slug: string;
  description?: string;
}

export interface Project {
  title: string;
  slug: string;
  description: string;
}

import { LucideIcon } from 'lucide-react'

export interface Interest {
  icon: LucideIcon;
  title: string;
  description: string;
}