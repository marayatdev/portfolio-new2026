// src/components/layout/Navbar.tsx

"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import ResumeDialog from "./ResumeDialog";

const navItems = [
    {
        label: "About",
        href: "#about",
    },
    {
        label: "Skills",
        href: "#skills",
    },
    {
        label: "Projects",
        href: "#projects",
    },
    {
        label: "Experience",
        href: "#experience",
    },
    {
        label: "Contact",
        href: "#contact",
    },
];

export default function Navbar() {
    return (
        <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">

                {/* Logo */}
                <Link
                    href="/"
                    className="text-xl font-bold"
                >
                    &lt;marayatdev /&gt;
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-sm font-medium transition hover:text-primary"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* Resume Button */}
                <div className="hidden md:block">
                    <ResumeDialog />
                </div>

                {/* Mobile Menu */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden"
                        >
                            <Menu />
                        </Button>
                    </SheetTrigger>

                    <SheetContent side="right">
                        <nav className="mt-10 flex flex-col gap-6">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="text-lg"
                                >
                                    {item.label}
                                </a>
                            ))}
                            <div className="mt-8">
                                <ResumeDialog />
                            </div>
                        </nav>
                    </SheetContent>
                </Sheet>

            </div>
        </header>
    );
}