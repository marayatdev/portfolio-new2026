"use client";

import Image from "next/image";
import { projects } from "@/data/projects";

import SectionReveal from "@/components/animations/SectionReveal";
import ScaleIn from "@/components/animations/ScaleIn";

import { Button } from "@/components/ui/button";

export default function Projects() {
    return (
        <section
            id="projects"
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
                    left-0
                    top-1/2
                    -z-10
                    h-[500px]
                    w-[500px]
                    -translate-y-1/2
                    rounded-full
                    bg-blue-500/10
                    blur-3xl
                "
            />

            <div className="container mx-auto px-4">

                {/* Section Header */}

                <SectionReveal>
                    <div className="mb-24 text-center">

                        <h2
                            className="
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
                            Featured Projects
                        </h2>

                        <p
                            className="
                                mt-4
                                text-lg
                                text-muted-foreground
                            "
                        >
                            Projects that showcase my experience in
                            Fullstack Development, Cloud and DevOps.
                        </p>

                    </div>
                </SectionReveal>

                <div className="space-y-40">

                    {projects.map((project, index) => {
                        const reverse = index % 2 !== 0;

                        return (
                            <div
                                key={project.id}
                                className={`
                                    grid
                                    items-center
                                    gap-12
                                    lg:grid-cols-2
                                    ${reverse
                                        ? "lg:[&>*:first-child]:order-2"
                                        : ""}
                                `}
                            >

                                {/* Image */}

                                <ScaleIn delay={0.1}>
                                    <div
                                        className="
                                            group
                                            overflow-hidden
                                            rounded-3xl
                                            border
                                            border-slate-200
                                            shadow-lg
                                            transition-all
                                            duration-300
                                            hover:border-blue-300
                                            hover:shadow-2xl
                                        "
                                    >
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            width={1200}
                                            height={700}
                                            className="
                                                h-auto
                                                w-full
                                                transition-transform
                                                duration-700
                                                group-hover:scale-105
                                            "
                                        />
                                    </div>
                                </ScaleIn>

                                {/* Content */}

                                <SectionReveal>
                                    <div className="relative">

                                        {/* Project Number */}

                                        <span
                                            className="
                                                absolute
                                                -top-12
                                                left-0
                                                text-7xl
                                                font-bold
                                                text-blue-500/10
                                                md:text-8xl
                                            "
                                        >
                                            {project.id}
                                        </span>

                                        <p
                                            className="
                                                mb-3
                                                text-sm
                                                font-medium
                                                uppercase
                                                tracking-widest
                                                text-blue-600
                                            "
                                        >
                                            Project {project.id}
                                        </p>

                                        <h3
                                            className="
                                                mb-4
                                                text-3xl
                                                font-bold
                                                md:text-4xl
                                            "
                                        >
                                            {project.title}
                                        </h3>

                                        {/* Accent Line */}

                                        <div
                                            className="
                                                mb-6
                                                h-1
                                                w-20
                                                rounded-full
                                                bg-gradient-to-r
                                                from-blue-600
                                                to-cyan-500
                                            "
                                        />

                                        <p
                                            className="
                                                mb-8
                                                leading-8
                                                text-muted-foreground
                                            "
                                        >
                                            {project.description}
                                        </p>

                                        {/* Tech Stack */}

                                        <div
                                            className="
                                                mb-8
                                                flex
                                                flex-wrap
                                                gap-3
                                            "
                                        >
                                            {project.tech.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="
                                                        rounded-full
                                                        border
                                                        border-blue-500/20
                                                        bg-blue-500/5
                                                        px-4
                                                        py-2
                                                        text-sm
                                                        transition-colors
                                                        hover:bg-blue-500/10
                                                    "
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Buttons */}

                                        {/* Buttons */}
                                        <div className="flex gap-4">

                                            <Button
                                                asChild
                                                variant="outline"
                                                className="border-blue-200 hover:border-blue-400"
                                            >
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    GitHub
                                                </a>
                                            </Button>

                                            <Button
                                                asChild
                                                className="bg-blue-600 hover:bg-blue-700"
                                            >
                                                <a
                                                    href={project.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Live Demo
                                                </a>
                                            </Button>

                                        </div>

                                    </div>
                                </SectionReveal>

                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}