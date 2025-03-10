'use client';

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { ChevronDownIcon, ChevronsRightIcon } from 'lucide-react';
import Link from 'next/link';
import { NAVLINKS } from '@/constants/links';
import { useState } from 'react';

type MobileNavType = React.ComponentPropsWithoutRef<'div'>;

type NavMenuType = {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const NavMenuItem = ({ href, children, onClick }: NavMenuType) => {
  return (
    <Link
      href={href}
      className="flex w-full items-center justify-between border-b p-4 text-base font-medium"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

const MobileNav = (props: MobileNavType) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div {...props}>
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onOpenChange={setIsOpen}
      >
        <DrawerTrigger className="group flex items-center rounded-full border border-foreground px-4 py-2 text-sm font-medium shadow-lg shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur dark:ring-white/10 dark:hover:ring-white/20">
          Menu
          <ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="sr-only">Menu</DrawerTitle>
          </DrawerHeader>
          <div className="flex w-full flex-col items-center gap-5">
            {NAVLINKS.map(link => (
              <NavMenuItem
                href={link.href}
                key={link.title}
                onClick={() => setIsOpen(false)}
              >
                {link.title}
                <ChevronsRightIcon size={18} className="text-primary" />
              </NavMenuItem>
            ))}
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MobileNav;
