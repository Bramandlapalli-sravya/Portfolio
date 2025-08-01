'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
    children: React.ReactNode;
    name: string;
    email: string;
    routes?: { path: string; label: string }[];
};

export default function HomeLayout({ children, name, email, routes }: Props) {
    const pathname = usePathname();

    const defaultRoutes = [
        { path: '/home', label: 'Home' },
        { path: '/about', label: 'About me' },
        { path: '/projects', label: 'Projects' },
        { path: '/contact', label: 'Contact' },
        ...(routes || []),
    ];

    const Header = () => {
        return (
            <header className="flex justify-between font-bold w-full px-20 py-8">
                <h1 className="text-lg text-violet-500">{name}</h1>
                <div className="flex gap-10">
                    {defaultRoutes.map((route) => {
                        const isActive = pathname === route.path;
                        return (
                            <Link
                                href={route.path}
                                key={route.label}
                                className={`p-2 text-sm font-medium tracking-wide transition duration-300 rounded-md hover:text-violet-400 ${isActive ? 'text-violet-500' : 'text-white'}`}
                            >
                                {route.label}
                            </Link>
                        )
                    })}
                </div>
            </header>
        )
    }

    const Footer = () => {
        return (
            <footer className="flex p-6 justify-center w-full text-sm text-gray-700">
                <a href={`mailto:${email}`}>{email}</a>
            </footer>
        )
    }

    return (
        <html lang="en">
            <body className="antialiased min-h-screen flex flex-col justify-between !bg-[#01011a] font-poppins">
                <Header />
                <main className='flex-1'>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
