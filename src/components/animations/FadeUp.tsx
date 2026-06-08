"use client";

import { motion } from "motion/react";

interface FadeUpProps {
    children: React.ReactNode;
    delay?: number;
}

export default function FadeUp({
    children,
    delay = 0,
}: FadeUpProps) {
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
                amount: 0.3,
            }}
            transition={{
                duration: 0.7,
                delay,
                ease: "easeOut",
            }}
        >
            {children}
        </motion.div>
    );
}