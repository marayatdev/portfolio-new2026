"use client";

import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
} from "react-icons/fa";

import FadeUp from "@/components/animations/FadeUp";
import SectionReveal from "@/components/animations/SectionReveal";

import { Button } from "@/components/ui/button";

export default function Contact() {
    return (
        <section
            id="contact"
            className="
                relative
                overflow-hidden
                py-32
            "
        >
            {/* Background Glow */}

            <div
                className="
                    absolute
                    left-1/2
                    top-1/2
                    -z-10
                    h-[500px]
                    w-[500px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-blue-500/10
                    blur-3xl
                "
            />

            <div className="container mx-auto px-4">

                <SectionReveal>
                    <div
                        className="
                            mx-auto
                            max-w-4xl
                            rounded-3xl
                            border
                            border-slate-200
                            bg-background/80
                            p-10
                            text-center
                            backdrop-blur-sm
                            shadow-lg
                        "
                    >

                        {/* Title */}

                        <h2
                            className="
                                mb-6
                                text-4xl
                                font-bold
                                md:text-5xl
                                bg-gradient-to-r
                                from-blue-600
                                to-cyan-500
                                bg-clip-text
                                text-transparent
                            "
                        >
                            Let's Work Together
                        </h2>

                        {/* Description */}

                        <p
                            className="
                                mx-auto
                                mb-10
                                max-w-2xl
                                text-lg
                                leading-8
                                text-muted-foreground
                            "
                        >
                            I'm currently open to Fullstack Developer,
                            Backend Developer, Cloud and DevOps opportunities.

                            If you have an exciting project, job opportunity,
                            or collaboration in mind, I'd love to hear from you.
                        </p>

                        {/* Email Button */}

                        <FadeUp delay={0.2}>
                            <Button
                                asChild
                                size="lg"
                                className="
                                    mb-10
                                    bg-blue-600
                                    hover:bg-blue-700
                                "
                            >
                                <a href="mailto:your-email@gmail.com">
                                    <FaEnvelope />
                                    Email Me
                                </a>
                            </Button>
                        </FadeUp>

                        {/* Divider */}

                        <div
                            className="
                                mx-auto
                                mb-10
                                h-px
                                w-32
                                bg-gradient-to-r
                                from-transparent
                                via-blue-500/30
                                to-transparent
                            "
                        />

                        {/* Social Links */}

                        <FadeUp delay={0.3}>
                            <div
                                className="
                                    flex
                                    flex-wrap
                                    justify-center
                                    gap-4
                                "
                            >

                                <Button
                                    asChild
                                    variant="outline"
                                    size="lg"
                                    className="
                                        border-blue-200
                                        hover:border-blue-400
                                    "
                                >
                                    <a
                                        href="https://github.com/your-github"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaGithub />
                                        GitHub
                                    </a>
                                </Button>

                                <Button
                                    asChild
                                    variant="outline"
                                    size="lg"
                                    className="
                                        border-blue-200
                                        hover:border-blue-400
                                    "
                                >
                                    <a
                                        href="https://linkedin.com/in/your-linkedin"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaLinkedin />
                                        LinkedIn
                                    </a>
                                </Button>

                            </div>
                        </FadeUp>

                    </div>
                </SectionReveal>

            </div>
        </section>
    );
}