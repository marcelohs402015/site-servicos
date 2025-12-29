"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Building2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { COMPANY_INFO, NAV_LINKS } from "@/data/content";
import { Button } from "@/components/ui/Button";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-white/90 backdrop-blur-md shadow-sm py-2"
                    : "bg-transparent py-4"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className={cn(
                    "text-xl md:text-2xl font-bold tracking-tighter flex items-center gap-2",
                    scrolled ? "text-blue-900" : "text-white drop-shadow-lg"
                )}>
                    <Building2 className={cn("w-8 h-8", scrolled ? "text-secondary" : "text-secondary")} /> {COMPANY_INFO.name}
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium hover:text-secondary transition-colors",
                                scrolled ? "text-gray-700" : "text-white drop-shadow-md md:text-gray-800"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Button variant="secondary" size="sm" asChild>
                        <Link href={COMPANY_INFO.contact.whatsapp} target="_blank">
                            <Phone className="w-4 h-4 mr-2" />
                            Fale Conosco
                        </Link>
                    </Button>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className={cn(
                        "md:hidden p-2 transition-colors",
                        scrolled ? "text-gray-800" : "text-white"
                    )}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t"
                    >
                        <nav className="flex flex-col p-4 gap-4">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="text-lg font-medium text-gray-700 py-2 border-b border-gray-100"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Button className="w-full mt-2" asChild>
                                <Link href={COMPANY_INFO.contact.whatsapp} target="_blank">
                                    Chamar no WhatsApp
                                </Link>
                            </Button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
