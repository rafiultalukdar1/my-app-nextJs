"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {

    const pathname = usePathname();
    const links = <>
        <Link href="/" className={pathname === "/" ? "active-link" : ""}>Home</Link>
        <Link href="/items" className={pathname === "/items" ? "active-link" : ""}>Items</Link>
        <Link href="/about" className={pathname === "/about" ? "active-link" : ""}>About</Link>
    </>

    return (
        <>
           <nav className='py-5 shadow'>
                <div className='container'>
                    <div className='flex items-center justify-between'>
                        <div>
                            LOGO
                        </div>
                        <div className='flex items-center gap-5'>
                            {links}
                        </div>
                    </div>
                </div>
            </nav> 
        </>
    );
};

export default Navbar;