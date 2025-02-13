import { File, GithubIcon, LinkedinIcon, Mail } from 'lucide-react';

import { ROUTES } from './routes';

export const NAVLINKS = [
  {
    title: 'About',
    href: ROUTES.ABOUT,
  },
  {
    title: 'Projects',
    href: ROUTES.PROJECTS,
  },
  {
    title: 'Fun',
    href: ROUTES.NULL,
  },
  {
    title: 'More',
    href: ROUTES.NULL,
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
