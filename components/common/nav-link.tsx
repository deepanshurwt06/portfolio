'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { MouseEventHandler } from "react";
export default function NavLink({
    href, 
    children,
    className,
}:{
    href:string,
    children: React.ReactNode,
    className?:string
    onClick?: MouseEventHandler<HTMLAnchorElement>
}){
    const pathname = usePathname();
    const isActive = pathname === href || (href !== '/' && pathname?.startsWith(href));

    return ( <Link href={href} className={cn("text-gray-200 hover:text[#4cc9f0] font-semibold",className, 
        isActive && "text-[#4cc9f0]",
    )} >
         {children}
    </Link>
)
}
