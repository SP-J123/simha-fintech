"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";

interface StaggerContainerProps {
    children: React.ReactNode;
    delay?: number;
    stagger?: number;
    className?: string;
    style?: React.CSSProperties;
}

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: (custom: { delay: number; stagger: number }) => ({
        opacity: 1,
        transition: {
            delayChildren: custom.delay,
            staggerChildren: custom.stagger,
        },
    }),
};

export const staggerItemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
        },
    },
};

export const staggerItemScaleVariants: Variants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
        },
    },
};

export const staggerItemSlideLeftVariants: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
        },
    },
};

export const staggerItemSlideRightVariants: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
        },
    },
};

export default function StaggerContainer({
    children,
    delay = 0,
    stagger = 0.1,
    className,
    style,
}: StaggerContainerProps) {
    return (
        <motion.div
            className={className}
            style={style}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            custom={{ delay, stagger }}
        >
            {children}
        </motion.div>
    );
}
