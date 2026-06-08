"use client";

import { FaCloud, FaLaptopCode, FaServer } from "react-icons/fa";

import ScaleIn from "@/components/animations/ScaleIn";
import SectionReveal from "@/components/animations/SectionReveal";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const skillGroups = [
    {
        title: "Frontend",
        icon: FaLaptopCode,
        skills: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Shadcn UI",
        ],
    },
    {
        title: "Backend",
        icon: FaServer,
        skills: [
            "Node.js",
            "Express",
            "NestJS",
            "Prisma",
            "MongoDB",
        ],
    },
    {
        title: "Infra & DevOps",
        icon: FaCloud,
        skills: [
            "Docker",
            "Kubernetes",
            "Azure",
            "AWS",
            "GitLab",
            "Jenkins",
            "Nginx",
        ],
    },
];

export default function Skills() {
    return (
        <section
            id="skills"
            className="
                relative
                overflow-hidden
                py-24
            "
        >
            {/* Background Glow */}

            <div
                className="
                    absolute
                    right-0
                    top-1/2
                    -z-10
                    h-[400px]
                    w-[400px]
                    -translate-y-1/2
                    rounded-full
                    bg-cyan-500/10
                    blur-3xl
                "
            />

            <div className="container mx-auto px-4">

                {/* Section Header */}

                <SectionReveal>
                    <div className="mb-16 text-center">

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
                            Skills & Technologies
                        </h2>

                        <p
                            className="
                                mt-4
                                text-lg
                                text-muted-foreground
                            "
                        >
                            Technologies I use to build,
                            deploy and maintain modern applications.
                        </p>

                    </div>
                </SectionReveal>

                {/* Cards */}

                <div className="grid gap-6 lg:grid-cols-3">

                    {skillGroups.map((group, index) => {
                        const Icon = group.icon;

                        return (
                            <ScaleIn
                                key={group.title}
                                delay={index * 0.15}
                            >
                                <Card
                                    className="
                                        h-full
                                        border-slate-200
                                        transition-all
                                        duration-300
                                        hover:-translate-y-2
                                        hover:border-blue-300
                                        hover:shadow-xl
                                    "
                                >
                                    <CardHeader>

                                        {/* Icon */}

                                        <div
                                            className="
                                                mb-4
                                                inline-flex
                                                rounded-xl
                                                bg-blue-500/10
                                                p-3
                                                text-blue-600
                                            "
                                        >
                                            <Icon size={28} />
                                        </div>

                                        <CardTitle className="text-xl">
                                            {group.title}
                                        </CardTitle>

                                        {/* Accent Line */}

                                        <div
                                            className="
                                                mt-3
                                                h-1
                                                w-16
                                                rounded-full
                                                bg-gradient-to-r
                                                from-blue-600
                                                to-cyan-500
                                            "
                                        />

                                    </CardHeader>

                                    <CardContent>

                                        <div className="flex flex-wrap gap-2">

                                            {group.skills.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="
                                                        rounded-full
                                                        border
                                                        border-blue-500/20
                                                        bg-blue-500/5
                                                        px-3
                                                        py-1
                                                        text-sm
                                                        transition-colors
                                                        hover:bg-blue-500/10
                                                    "
                                                >
                                                    {skill}
                                                </span>
                                            ))}

                                        </div>

                                    </CardContent>
                                </Card>
                            </ScaleIn>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}