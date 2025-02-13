import { Code, File, GithubIcon, LinkedinIcon, Mail, Music, User } from 'lucide-react';

import { ROUTES } from './routes';

export const NAVLINKS = [
  {
    title: 'About',
    href: ROUTES.ABOUT,
    icon: User,
    description: 'A frontend dev who loves books, music, and open-source!',
    color: '#FF6B6B'
  },
  {
    title: 'Projects',
    href: ROUTES.PROJECTS,
    icon: Code,
    description: 'Cool things I’ve built, broken, and fixed!',
    color: '#4D96FF'
  },
  {
    title: 'Fun',
    href: ROUTES.NULL,
    icon: Music,
    description: 'Books, music, anime, and random fun stuff!',
    color: '#FFC75F'
  },
];

export const SOCIALLINKS = [
  {
    title: 'Github',
    icon: GithubIcon,
    href: 'https://github.com/ImLJS',
  },
  {
    title: 'LinkedIn',
    icon: LinkedinIcon,
    href: '#',
  },
  {
    title: 'Mail',
    icon: Mail,
    href: '#',
  },
  {
    title: 'Resume',
    icon: File,
    href: '#',
  },
];
