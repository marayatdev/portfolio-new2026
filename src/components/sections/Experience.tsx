"use client";

import { experiences } from "@/data/experiences";

import SectionReveal from "@/components/animations/SectionReveal";

export default function Experience() {
    return (
        <section
            id="experience"
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
                    right-0
                    top-1/2
                    -z-10
                    h-[500px]
                    w-[500px]
                    -translate-y-1/2
                    rounded-full
                    bg-cyan-500/10
                    blur-3xl
                "
            />

            <div className="container mx-auto px-4">

                {/* Header */}

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
                            Experience
                        </h2>

                        <p
                            className="
                                mt-4
                                text-lg
                                text-muted-foreground
                            "
                        >
                            My professional journey in software development.
                        </p>

                    </div>
                </SectionReveal>

                <div className="relative mx-auto max-w-5xl">

                    {/* Timeline Line */}

                    <div
                        className="
                            absolute
                            left-4
                            top-0
                            h-full
                            w-[2px]
                            bg-blue-500/20
                            md:left-1/2
                        "
                    />

                    {experiences.map((exp, index) => (
                        <SectionReveal key={index}>

                            <div
                                className={`
                                    relative
                                    mb-20
                                    flex
                                    flex-col
                                    md:flex-row
                                    ${index % 2 === 0
                                        ? ""
                                        : "md:flex-row-reverse"}
                                `}
                            >

                                {/* Timeline Dot */}

                                <div
                                    className="
                                        absolute
                                        left-4
                                        top-8
                                        z-10
                                        h-5
                                        w-5
                                        -translate-x-1/2
                                        rounded-full
                                        border-4
                                        border-white
                                        bg-blue-600
                                        shadow-lg
                                        md:left-1/2
                                    "
                                />

                                {/* Card */}

                                <div
                                    className="
                                        ml-12
                                        rounded-2xl
                                        border
                                        border-slate-200
                                        bg-background/80
                                        p-6
                                        backdrop-blur-sm
                                        transition-all
                                        duration-300
                                        hover:-translate-y-1
                                        hover:border-blue-300
                                        hover:shadow-xl
                                        md:ml-0
                                        md:w-[45%]
                                    "
                                >

                                    {/* Period */}

                                    <span
                                        className="
                                            text-sm
                                            font-medium
                                            uppercase
                                            tracking-wider
                                            text-blue-600
                                        "
                                    >
                                        {exp.period}
                                    </span>

                                    {/* Position */}

                                    <h3
                                        className="
                                            mt-3
                                            text-2xl
                                            font-bold
                                        "
                                    >
                                        {exp.position}
                                    </h3>

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

                                    {/* Company */}

                                    <p
                                        className="
                                            mt-4
                                            text-lg
                                            font-medium
                                        "
                                    >
                                        {exp.company}
                                    </p>

                                    {/* Duration */}

                                    <p
                                        className="
                                            mt-1
                                            text-sm
                                            font-medium
                                            text-blue-600
                                        "
                                    >
                                        {exp.duration}
                                    </p>

                                    {/* Description */}

                                    <ul
                                        className="
                                            mt-6
                                            space-y-3
                                            text-muted-foreground
                                        "
                                    >
                                        {exp.description.map((item) => (
                                            <li
                                                key={item}
                                                className="flex gap-2"
                                            >
                                                <span className="text-blue-500">
                                                    •
                                                </span>

                                                <span>
                                                    {item}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                </div>

                            </div>

                        </SectionReveal>
                    ))}

                </div>

            </div>
        </section>
    );
}