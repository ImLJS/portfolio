import { SOCIALLINKS } from '@/constants/links';
import Link from 'next/link';

type SocialIconType = {
  href: string;
  children: React.ReactNode;
  title: string;
};

const SocialIconItem = ({ href, title, children }: SocialIconType) => {
  return (
    <Link href={href} rel="noopener noreferrer">
      <span title={title} className='hover:text-primary'>{children}</span>
    </Link>
  );
};

const Footer = () => {
  return (
    <footer className="mt-auto flex justify-between border-t-[1px] py-4">
      <div>
        <p>&copy; 2025</p>
      </div>
      <div className="flex gap-4">
        {SOCIALLINKS.map(link => (
          <SocialIconItem href={link.href} title={link.title} key={link.title}>
            <link.icon size={18} />
          </SocialIconItem>
        ))}
      </div>
    </footer>
  );
};
export default Footer;
