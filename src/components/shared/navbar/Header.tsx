'use client'

import { NAVLINKS } from "@/constants/links"
import { ROUTES } from "@/constants/routes"
import { cn } from "@/lib/utils"
import { SearchIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import ThemeToggle from "./ThemeToggle"

type NavMenuType = {
    href: string
    children: React.ReactNode
}

const NavMenuItem = ({ href, children }: NavMenuType) => {
    const isActive = usePathname() === href
    return (
        <Link href={href} className={cn("text-base font-medium",
            isActive ? "text-primary" : "hover:text-primary"
        )}>
            {children}
        </Link>
    )
}

const Header = () => {
    return (
        <header className="py-8 flex justify-between items-center font-spaceGrotesk sticky z-50 top-0 bg-background">
            <div>
                <Link href={ROUTES.HOME}>
                    <h1 className="font-semibold text-2xl">ljs.</h1>
                </Link>
            </div>
            <nav className="flex items-center gap-6">
                <div className="flex gap-5">
                    {NAVLINKS.map((link) => <NavMenuItem href={link.href} key={link.title}>{link.title}</NavMenuItem>)}
                </div>
                <SearchIcon size={20} />
                <ThemeToggle />
            </nav>
        </header>
    )
}
export default Header