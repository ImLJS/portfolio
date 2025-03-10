import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiPython,
} from '@icons-pack/react-simple-icons';

export const PROJECTS = [
  {
    id: 1,
    title: 'TaskFlow',
    imgSrc: '/project.jpg',
    description:
      'A web application for managing tasks and projects efficiently.',
    tech: ['React', 'Tailwind', 'Node.js'],
    github: 'https://github.com',
    projectLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    featured: true,
    longDescription:
      'TaskFlow is a powerful yet simple project management tool designed for teams and individuals. It offers task tracking, kanban boards, and real-time collaboration. Built with a modern UI and intuitive workflow, TaskFlow helps you stay productive and organized.',
  },
  {
    id: 2,
    title: 'DevHub',
    imgSrc: '/project.jpg',
    description:
      'A centralized dashboard for developers to track GitHub activities.',
    tech: ['React', 'Next.js', 'GraphQL'],
    github: 'https://github.com',
    projectLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    featured: true,
    longDescription:
      'DevHub provides an interactive dashboard to track GitHub repositories, issues, PRs, and commits in one place. With real-time updates and analytics, it helps developers stay on top of their projects and contributions effortlessly.',
  },
  {
    id: 3,
    title: 'MangaSync',
    imgSrc: '/project.jpg',
    description:
      'A web app for tracking and downloading manga from various sources.',
    tech: ['React', 'Tailwind', 'Express.js'],
    github: 'https://github.com',
    projectLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    longDescription:
      "MangaSync is an all-in-one manga tracker and downloader. It fetches the latest manga chapters from multiple sources and lets users organize their collections seamlessly. Featuring offline reading support and real-time updates, it's a must-have for manga enthusiasts.",
  },
  {
    id: 4,
    title: 'SnippetVault',
    imgSrc: '/project.jpg',
    description: 'A personal code snippet manager with cloud sync.',
    tech: ['React', 'Firebase', 'Tailwind'],
    github: 'https://github.com',
    projectLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    longDescription:
      'SnippetVault allows developers to save, organize, and retrieve their most-used code snippets. With cloud sync via Firebase, snippets are always accessible across devices. It supports multiple programming languages and includes a powerful search feature.',
  },
];

export const APPS = [
  {
    id: 1,
    title: 'App 1',
    imgSrc: '/project.jpg',
    description: 'A simple personal tool for tracking daily habits.',
    tech: ['React', 'Tailwind'],
    github: 'https://www.github.com',
    appLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    featured: true,
    longDescription:
      'This app helps you build good habits by tracking your daily progress. Features include reminders, analytics, and a clean UI to keep you motivated.',
  },
  {
    id: 2,
    title: 'App 2',
    imgSrc: '/project.jpg',
    description: 'A minimal expense tracker for personal finance.',
    tech: ['React', 'Firebase'],
    github: 'https://www.github.com',
    appLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    featured: true,
    longDescription:
      'A lightweight expense tracking app to monitor your spending habits. Features include income/expense tracking, budget limits, and real-time data sync with Firebase.',
  },
  {
    id: 3,
    title: 'App 3',
    imgSrc: '/project.jpg',
    description: 'A Markdown editor with live preview and local storage.',
    tech: ['React', 'Tailwind'],
    github: 'https://www.github.com',
    appLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    longDescription:
      'A distraction-free Markdown editor with a real-time preview feature. Saves your work automatically using local storage so you never lose your notes.',
  },
  {
    id: 4,
    title: 'App 4',
    imgSrc: '/project.jpg',
    description: 'A simple Pomodoro timer for productivity.',
    tech: ['React', 'TypeScript'],
    github: 'https://www.github.com',
    appLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    longDescription:
      'A customizable Pomodoro timer to boost focus and productivity. Features include adjustable session durations, break reminders, and sound notifications.',
  },
];

export const TECH = [
  {
    title: 'HTML',
    icon: SiHtml5,
  },
  {
    title: 'CSS',
    icon: SiCss3,
  },
  {
    title: 'JavaScript',
    icon: SiJavascript,
  },
  {
    title: 'TypeScript',
    icon: SiTypescript,
  },
  {
    title: 'React',
    icon: SiReact,
  },
  {
    title: 'NextJs',
    icon: SiNextdotjs,
  },
  {
    title: 'Tailwind',
    icon: SiTailwindcss,
  },
  {
    title: 'Python',
    icon: SiPython,
  },
];
