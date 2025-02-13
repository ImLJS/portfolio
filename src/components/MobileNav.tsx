import { NAVLINKS } from '@/constants/links';
import {
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react';
import { ChevronDownIcon, X } from 'lucide-react';
import Link from 'next/link';

type MobileNavItemType = {
  href: string;
  children: React.ReactNode;
};

type MobileNavType = React.ComponentPropsWithoutRef<typeof Popover>;

const MobileNavItem = ({ href, children }: MobileNavItemType) => {
  return (
    <PopoverButton
      as={Link}
      href={href}
      className={'block py-2 hover:text-primary'}
    >
      {children}
    </PopoverButton>
  );
};

const MobileNav = (props: MobileNavType) => {
  return (
    <Popover {...props}>
      <PopoverButton className="group flex items-center rounded-full border border-foreground px-4 py-2 text-sm font-medium shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:ring-white/10 dark:hover:ring-white/20">
        Menu
        <ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm duration-150 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in dark:bg-black/80"
      />
      <PopoverPanel
        focus
        transition
        className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-background p-8 ring-1 ring-zinc-900/5 duration-150 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in dark:ring-zinc-800"
      >
        <div className="flex flex-row-reverse items-center justify-between">
          <PopoverButton aria-label="Close menu" className="-m-1 p-1">
            <X className="h-6 w-6" />
          </PopoverButton>
          <h2 className="text-base font-medium">Menu</h2>
        </div>
        <nav className="mt-6">
          <ul className="-my-2 divide-y divide-zinc-100/5 text-lg dark:divide-zinc-100/5">
            {NAVLINKS.map(link => (
              <MobileNavItem href={link.href} key={link.title}>
                {link.title}
              </MobileNavItem>
            ))}
          </ul>
        </nav>
      </PopoverPanel>
    </Popover>
  );
};

export default MobileNav;
