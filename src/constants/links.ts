import { File, GithubIcon, LinkedinIcon, Mail } from 'lucide-react';

import { ROUTES } from './routes';

export const NAVLINKS = [
  {
    title: 'Home',
    href: ROUTES.HOME,
  },
  {
    title: 'Apps',
    href: ROUTES.APPS,
  },
  {
    title: 'Projects',
    href: ROUTES.PROJECTS,
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
