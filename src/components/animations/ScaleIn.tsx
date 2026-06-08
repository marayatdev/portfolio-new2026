"use client";

import { motion } from "motion/react";

interface ScaleInProps {
    children: React.ReactNode;
    delay?: number;
}

export default function ScaleIn({
    children,
    delay = 0,
}: ScaleInProps) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                scale: 0.9,
                y: 30,
            }}
            whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
            }}
            viewport={{
                once: false,
                amount: 0.3,
            }}
            transition={{
                duration: 0.6,
                delay,
                ease: "easeOut",
            }}
        >
            {children}
        </motion.div>
    );
}