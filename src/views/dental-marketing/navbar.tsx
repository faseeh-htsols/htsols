"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "@/components/ui/Button";
import GlowButton from "@/components/ui/GlowButton";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { NAV_ITEMS } from "@/constants";

export const Navbar: React.FC = () => {
    const [open, setOpen] = React.useState(false);
    const [hideDesktopDropdown, setHideDesktopDropdown] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 w-full py-6 transition-all duration-300 ${isScrolled ? "bg-black" : "bg-transparent"
                }`}
        >
            <div className="mx-auto flex max-w-7xl items-center gap-6 px-5">

                <Link href="/" className="flex items-center gap-0">
                    <Image
                        className="h-[50px] w-[150px] object-contain md:w-[200px]"
                        src="/footer-logo.webp"
                        width={300}
                        height={100}
                        alt="logo"
                        priority
                    />
                </Link>

                {/* <div className="hidden flex-1 justify-center lg:flex">
                    <div className="flex items-center gap-8">
                        {NAV_ITEMS.map((item) => {
                            const hasDrop = item.drop && item.subItems?.length;

                            if (!hasDrop) {
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.link}
                                        className="text-sm font-medium uppercase tracking-wide text-white/85 transition-colors hover:text-white"
                                    >
                                        {item.name}
                                    </Link>
                                );
                            }

                            return (
                                <div key={item.name} className="group relative" onMouseLeave={() => setHideDesktopDropdown(false)}>
                                    <Link
                                        href={item.link}
                                        className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-white/85 transition-colors hover:text-white"
                                    >
                                        {item.name}
                                        <svg
                                            className="h-3 w-3 transition-transform duration-200 group-hover:rotate-180"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M4 6L8 10L12 6"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </Link>

                                    <div
                                        className={`absolute top-3 left-1/2 z-50 mt-3 w-64 -translate-x-1/2 translate-y-2 rounded-xl border border-white/10 bg-black/95 p-3 transition-all duration-200 ${hideDesktopDropdown
                                            ? "invisible opacity-0"
                                            : "invisible opacity-0 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
                                            }`}
                                    >
                                        <div className="flex flex-col">
                                            {item.subItems?.map((sub) => (
                                                <Link
                                                    key={sub.name}
                                                    href={sub.link}
                                                    onClick={() => setHideDesktopDropdown(true)}
                                                    className="rounded-md px-3 py-2 text-sm text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                                                >
                                                    {sub.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div> */}

                <div className="ml-auto flex items-center gap-4">
                    <div className="">
                        <Link href={"/contact-us"} className="inline-flex items-center gap-3 bg-[linear-gradient(90deg,#075B65_0%,#00838A_37.02%,#328A99_81.25%)] text-white md:pl-6 pl-3 pr-3 py-2 md:py-3 rounded-full font-medium transition">
                            <span>Get Started</span>
                            <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                                <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.9736 9.24778C14.019 9.2188 14.0565 9.17882 14.0824 9.13155C14.1083 9.08428 14.1219 9.03124 14.1219 8.97732C14.1219 8.92341 14.1083 8.87037 14.0824 8.8231C14.0565 8.77582 14.019 8.73585 13.9736 8.70687L0.370647 0.0343148C0.328172 0.00747582 0.277847 -0.00415531 0.227902 0.00132384C0.177958 0.00680299 0.131352 0.0290681 0.095706 0.0644773C0.0600603 0.0998866 0.0374853 0.146344 0.0316738 0.19625C0.0258622 0.246157 0.0371582 0.296558 0.0637138 0.339211L5.30673 8.68479C5.36178 8.77243 5.39099 8.87382 5.39099 8.97731C5.39099 9.08081 5.36178 9.1822 5.30673 9.26983L0.050701 17.6361C-0.101012 17.8776 0.119476 18.0805 0.295505 17.9682L13.9736 9.24778Z" fill="#001F3F" />
                                </svg>

                            </span>
                        </Link>
                    </div>

                    {/* <Drawer open={open} direction="right" onOpenChange={setOpen}>
                        <DrawerTrigger asChild>
                            <button
                                aria-label="Open menu"
                                className="cursor-pointer text-white transition-colors hover:text-primary lg:hidden"
                            >
                                <svg
                                    width="53"
                                    height="53"
                                    viewBox="0 0 53 53"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8"
                                >
                                    <path
                                        d="M13.9711 23.0826H9.11156C3.23157 23.0826 0 19.8511 0 13.9711V9.11157C0 3.23157 3.23157 7.62939e-06 9.11156 7.62939e-06H13.9711C19.8511 7.62939e-06 23.0826 3.23157 23.0826 9.11157V13.9711C23.0826 19.8511 19.8511 23.0826 13.9711 23.0826ZM9.11156 3.64463C5.27256 3.64463 3.64462 5.27256 3.64462 9.11157V13.9711C3.64462 17.8101 5.27256 19.438 9.11156 19.438H13.9711C17.8101 19.438 19.438 17.8101 19.438 13.9711V9.11157C19.438 5.27256 17.8101 3.64463 13.9711 3.64463H9.11156Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M43.1283 23.0826H38.2688C32.3888 23.0826 29.1572 19.8511 29.1572 13.9711V9.11156C29.1572 3.23157 32.3888 0 38.2688 0H43.1283C49.0083 0 52.2398 3.23157 52.2398 9.11156V13.9711C52.2398 19.8511 49.0083 23.0826 43.1283 23.0826ZM38.2688 3.64462C34.4298 3.64462 32.8019 5.27256 32.8019 9.11156V13.9711C32.8019 17.8101 34.4298 19.438 38.2688 19.438H43.1283C46.9673 19.438 48.5952 17.8101 48.5952 13.9711V9.11156C48.5952 5.27256 46.9673 3.64462 43.1283 3.64462H38.2688Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M43.1283 52.2396H38.2688C32.3888 52.2396 29.1572 49.008 29.1572 43.128V38.2685C29.1572 32.3886 32.3888 29.157 38.2688 29.157H43.1283C49.0083 29.157 52.2398 32.3886 52.2398 38.2685V43.128C52.2398 49.008 49.0083 52.2396 43.1283 52.2396ZM38.2688 32.8016C34.4298 32.8016 32.8019 34.4295 32.8019 38.2685V43.128C32.8019 46.9671 34.4298 48.595 38.2688 48.595H43.1283C46.9673 48.595 48.5952 46.9671 48.5952 43.128V38.2685C48.5952 34.4295 46.9673 32.8016 43.1283 32.8016H38.2688Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M13.9711 52.2396H9.11156C3.23157 52.2396 0 49.008 0 43.128V38.2685C0 32.3886 3.23157 29.157 9.11156 29.157H13.9711C19.8511 29.157 23.0826 32.3886 23.0826 38.2685V43.128C23.0826 49.008 19.8511 52.2396 13.9711 52.2396ZM9.11156 32.8016C5.27256 32.8016 3.64462 34.4295 3.64462 38.2685V43.128C3.64462 46.9671 5.27256 48.595 9.11156 48.595H13.9711C17.8101 48.595 19.438 46.9671 19.438 43.128V38.2685C19.438 34.4295 17.8101 32.8016 13.9711 32.8016H9.11156Z"
                                        fill="white"
                                    />
                                </svg>
                            </button>
                        </DrawerTrigger>

                        <DrawerContent className="border-t border-white/10 bg-black text-white">
                            <div className="px-6 py-6">
                                <div className="mb-6 flex items-center justify-between">
                                    <p className="text-sm uppercase tracking-wider text-white/70">
                                        Menu
                                    </p>

                                    <button
                                        onClick={() => setOpen(false)}
                                        className="text-white/70 transition hover:text-white"
                                        aria-label="Close menu"
                                    >
                                        X
                                    </button>
                                </div>

                                <div className="flex flex-col">
                                    {NAV_ITEMS.map((item) => {
                                        const hasDrop = item.drop && item.subItems?.length;

                                        if (!hasDrop) {
                                            return (
                                                <Link
                                                    key={item.name}
                                                    href={item.link}
                                                    onClick={() => setOpen(false)}
                                                    className="border-b border-white/10 py-4 font-medium text-white"
                                                >
                                                    {item.name}
                                                </Link>
                                            );
                                        }

                                        return (
                                            <details
                                                key={item.name}
                                                className="border-b border-white/10"
                                            >
                                                <summary className="flex list-none cursor-pointer items-center justify-between py-4">
                                                    <span className="font-medium text-white">
                                                        {item.name}
                                                    </span>
                                                    <span className="text-white/70 transition-transform group-open:rotate-180">
                                                        v
                                                    </span>
                                                </summary>

                                                <div className="flex flex-col gap-2 pb-4 pl-3">
                                                    {item.subItems?.map((sub) => (
                                                        <Link
                                                            key={sub.name}
                                                            href={sub.link}
                                                            onClick={() => setOpen(false)}
                                                            className="py-2 text-sm text-white/80 transition hover:text-white"
                                                        >
                                                            {sub.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </details>
                                        );
                                    })}
                                </div>

                                <div className="mt-6 lg:hidden">
                                    <GlowButton href="/contact-us">Book a Free Consultation</GlowButton>
                                </div>
                            </div>
                        </DrawerContent>
                    </Drawer> */}
                </div>
            </div>
            <div
                className={`w-full custom-container h-px bg-white/80 mx-auto transition-all duration-300 ${isScrolled ? "opacity-0" : "opacity-100 mt-6"
                    }`}
            />
        </nav>
    );
};

export default Navbar;
