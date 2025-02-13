import { NAVLINKS, SOCIALLINKS } from '@/constants/links';
import Image from 'next/image';
import Link from 'next/link';

type SocialIconType = {
    href: string;
    children: React.ReactNode;
    title: string;
};

type MenuType = {
    href: string
    children: React.ReactNode;
}

export const SocialIconItem = ({ href, title, children }: SocialIconType) => {
    return (
        <Link href={href} rel="noopener noreferrer">
            <span title={title}>{children}</span>
        </Link>
    );
};

const MenuItem = ({ href, children }: MenuType) => {
    return (
        <Link href={href} rel="noopener noreferrer">
            {children}
        </Link>
    );
};

const Hero = () => {
    return (
        <>
            <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-10 xl:space-y-0 flex-grow">
                <div className="flex flex-col items-center space-x-2 pt-8 font-spaceGrotesk">
                    <Image
                        src='/avatar3.jpg'
                        alt="avatar"
                        width={192}
                        height={192}
                        className="h-48 w-48 rounded-full"
                    />
                    <h3 className="pt-4 pb-2 text-3xl leading-8 font-bold tracking-tight">Leone Jacob</h3>
                    <div className="font-medium tracking-wide">Frontend Developer</div>
                    <div className="flex space-x-4 pt-6">
                        {SOCIALLINKS.map((link) => <SocialIconItem href={link.href} title={link.title} key={link.title}>
                            <link.icon size={20} />
                        </SocialIconItem>)}
                    </div>
                </div>
                <div className="prose dark:prose-invert max-w-none pt-8 pb-8 xl:col-span-2 space-y-5">
                    <div className='flex gap-1'>
                        <h1 className="gradient-effect font-black text-4xl md:text-6xl">
                            Hey, There!
                        </h1>
                        <span className="animate-wave text-5xl">
                            👋
                        </span>
                    </div>
                    <p className='text-lg font-medium'>
                        I'm Leone Jacob - a passionate Frontend Developer based in India
                    </p>
                    <p className="max-w-xl text-sm font-medium leading-relaxed md:text-base">
                        Frontend developer by day, open-source tinkerer by night. When I’m not coding, I’m lost in books, vibing to music, or admiring Japanese art. Let’s build something cool! 🚀🎨📖
                    </p>
                    <div className='flex flex-col text-base font-medium'>
                        {NAVLINKS.map((link) => <MenuItem href={link.href} key={link.title}>
                            <div className='flex gap-3 items-center py-3'>
                                <link.icon size={16} color={link.color} className='stroke-2' />
                                <p className='hover:underline decoration-2 underline-offset-4 cursor-pointer'>{link.description}</p>
                            </div>
                        </MenuItem>)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero