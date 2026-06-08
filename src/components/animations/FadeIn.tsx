// src/components/animations/FadeIn.tsx

"use client";

import { motion } from "motion/react";

interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
}

export default function FadeIn({
    children,
    delay = 0,
}: FadeInProps) {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            transition={{
                duration: 0.6,
                delay,
            }}
        >
            {children}
        </motion.div>
    );
}