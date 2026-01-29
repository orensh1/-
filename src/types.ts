import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  Icon: LucideIcon;
}

export interface Feature {
  id: string;
  title: string;
  text: string;
}
