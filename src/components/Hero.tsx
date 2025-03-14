import { NAVLINKS, SOCIALLINKS } from '@/constants/links';
import Image from 'next/image';
import Link from 'next/link';

type SocialIconType = {
  href: string;
  children: React.ReactNode;
  title: string;
};

type MenuType = {
  href: string;
  children: React.ReactNode;
};

const SocialIconItem = ({ href, title, children }: SocialIconType) => {
  return (
    <Link href={href} rel="noopener noreferrer">
      <span title={title} className="hover:text-primary">
        {children}
      </span>
    </Link>
  );
};

const MenuItem = ({ href, children }: MenuType) => {
  return (
    <Link href={href} rel="noopener noreferrer" className="w-fit">
      {children}
    </Link>
  );
};

const Hero = () => {
  return (
    <div className="flex min-h-[80vh] items-center justify-center">
      <div className="flex w-full max-w-6xl flex-col items-center space-y-2 pt-6 xl:grid xl:grid-cols-3 xl:gap-x-10 xl:space-y-0">
        <div className="flex flex-col items-center space-x-2 pt-8 font-spaceGrotesk">
          <Image
            src="/avatar.png"
            alt="avatar"
            width={192}
            height={192}
            className="h-48 w-48 rounded-full"
          />
          <h3 className="pb-2 pt-4 text-3xl font-bold leading-8 tracking-tight">
            Leone Jacob
          </h3>
          <div className="font-medium tracking-wide">Frontend Developer</div>
          <div className="flex space-x-4 pt-6">
            {SOCIALLINKS.map(link => (
              <SocialIconItem
                href={link.href}
                title={link.title}
                key={link.title}
              >
                <link.icon size={20} />
              </SocialIconItem>
            ))}
          </div>
        </div>
        <div className="prose dark:prose-invert max-w-none space-y-5 pb-8 pt-8 xl:col-span-2">
          <div className="flex w-full items-center justify-center gap-1 md:justify-start">
            <h1 className="gradient-effect text-4xl font-black md:text-6xl">
              Hey, There!
            </h1>
            <span className="animate-wave text-4xl md:text-6xl">👋</span>
          </div>
          <p className="text-lg font-medium">
            I&apos;m Leone Jacob - a passionate Frontend Developer based in
            India
          </p>
          <p className="max-w-xl text-sm font-medium leading-relaxed md:text-base">
            Frontend developer by day, open-source tinkerer by night. When I’m
            not coding, I&apos;m lost in books, vibing to music, or admiring
            Japanese art. Let&apos;s build something cool! 🚀🎨📖
          </p>
          <div className="flex flex-col text-base font-medium">
            {NAVLINKS.map(link => (
              <MenuItem href={link.href} key={link.title}>
                <div className="group flex items-center gap-3 py-3">
                  <link.icon
                    size={20}
                    color={link.color}
                    className="stroke-2"
                  />
                  <p
                    className="cursor-pointer decoration-2 underline-offset-4 group-hover:text-[var(--link-color)]"
                    style={
                      { '--link-color': link.color } as React.CSSProperties
                    }
                  >
                    {link.description}
                  </p>
                </div>
              </MenuItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
