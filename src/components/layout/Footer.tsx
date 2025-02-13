import { SOCIALLINKS } from "@/constants/links";
import Link from "next/link";

type SocialIconType = {
    href: string;
    children: React.ReactNode;
    title: string;
};

const SocialIconItem = ({ href, title, children }: SocialIconType) => {
    return (
        <Link href={href} rel="noopener noreferrer">
            <span title={title}>{children}</span>
        </Link>
    );
};

const Footer = () => {
    return (
        <footer className="flex justify-between flex-shrink-0 py-5">
            <div>
                <p>&copy; 2025</p>
            </div>
            <div className="flex gap-4">
                {SOCIALLINKS.map((link) => <SocialIconItem href={link.href} title={link.title} key={link.title}>
                    <link.icon size={20} />
                </SocialIconItem>)}
            </div>
        </footer>
    )
}
export default Footer