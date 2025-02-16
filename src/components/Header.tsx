'use client';

import MobileNav from '@/components/MobileNav';
import ThemeToggle from '@/components/ThemeToggle';
import { NAVLINKS } from '@/constants/links';
import { ROUTES } from '@/constants/routes';
import { cn } from '@/lib/utils';
import { SearchIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavMenuType = {
  href: string;
  children: React.ReactNode;
};

const NavMenuItem = ({ href, children }: NavMenuType) => {
  const isActive = usePathname() === href;
  return (
    <Link
      href={href}
      className={cn(
        'text-sm font-medium',
        isActive ? 'text-primary' : 'hover:text-primary',
      )}
    >
      {children}
    </Link>
  );
};

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-background pt-5 font-spaceGrotesk">
      <div>
        <Link href={ROUTES.HOME}>
          <h1 className="text-xl font-semibold">ljs.</h1>
        </Link>
      </div>
      <nav className="flex items-center gap-6">
        <div className="hidden gap-5 md:flex">
          {NAVLINKS.map(link => (
            <NavMenuItem href={link.href} key={link.title}>
              {link.title}
            </NavMenuItem>
          ))}
        </div>
        <SearchIcon size={18} />
        <ThemeToggle />
        <MobileNav className={'md:hidden'} />
      </nav>
    </header>
  );
};
export default Header;
