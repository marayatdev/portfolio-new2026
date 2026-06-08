"use client";

import { Button } from "@/components/ui/button";
import FadeUp from "@/components/animations/FadeUp";

export default function Hero() {
    return (
        <section
            id="hero"
            className="
                relative
                flex
                min-h-screen
                items-center
                justify-center
                overflow-hidden
                px-4
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

            {/* Content */}

            <div className="max-w-4xl text-center">

                <FadeUp delay={0.1}>
                    <p
                        className="
                            mb-4
                            text-lg
                            text-muted-foreground
                        "
                    >
                        Hi, I'm Chawalit Marayat 👋
                    </p>
                </FadeUp>

                <FadeUp delay={0.2}>
                    <h1
                        className="
                            mb-6
                            text-5xl
                            font-bold
                            md:text-7xl
                            bg-gradient-to-r
                            from-blue-600
                            to-cyan-500
                            bg-clip-text
                            text-transparent
                        "
                    >
                        Software Developer
                    </h1>
                </FadeUp>

                <FadeUp delay={0.4}>
                    <p
                        className="
                            mx-auto
                            mb-8
                            max-w-2xl
                            text-lg
                            leading-8
                            text-muted-foreground
                        "
                    >
                        A Fullstack Developer with experience in
                        building modern web applications, designing
                        backend services, and deploying scalable
                        infrastructure.

                        Skilled in TypeScript, Node.js, React,
                        Docker, Kubernetes, Azure, AWS, and CI/CD
                        pipelines.
                    </p>
                </FadeUp>

                <FadeUp delay={0.5}>
                    <div
                        className="
            mb-8
            flex
            flex-wrap
            justify-center
            gap-3
        "
                    >
                        {[
                            "TypeScript",
                            "Next.js",
                            "Node.js",
                            "Docker",
                            "Azure",
                        ].map((tech) => (
                            <span
                                key={tech}
                                className="
                    rounded-full
                    border
                    bg-blue-500/5
                    border-blue-500/20
                    px-4
                    py-2
                    text-sm
                "
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </FadeUp>

                <FadeUp delay={0.6}>
                    <div
                        className="
                            flex
                            flex-wrap
                            justify-center
                            gap-4
                        "
                    >
                        <Button size="lg">
                            View Projects
                        </Button>

                        <Button
                            variant="outline"
                            size="lg"
                        >
                            Contact Me
                        </Button>
                    </div>
                </FadeUp>

            </div>
        </section>
    );
}