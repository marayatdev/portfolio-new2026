// src/components/animations/SectionReveal.tsx

"use client";

import { motion } from "motion/react";

interface SectionRevealProps {
    children: React.ReactNode;
}

export default function SectionReveal({
    children,
}: SectionRevealProps) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 50,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: false,
                amount: 0.2,
            }}
            transition={{
                duration: 0.7,
            }}
        >
            {children}
        </motion.div>
    );
}