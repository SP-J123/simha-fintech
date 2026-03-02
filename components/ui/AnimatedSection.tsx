"use client";

import React, { useRef } from "react";
import { motion, useInView, type Variant } from "framer-motion";

type AnimationVariant =
    | "fade-up"
    | "fade-in"
    | "fade-down"
    | "slide-left"
    | "slide-right"
    | "scale-in"
    | "scale-up";

interface AnimatedSectionProps {
    children: React.ReactNode;
    variant?: AnimationVariant;
    delay?: number;
    duration?: number;
    once?: boolean;
    className?: string;
    style?: React.CSSProperties;
    amount?: number;
}

const variantMap: Record<AnimationVariant, { hidden: Variant; visible: Variant }> = {
    "fade-up": {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    },
    "fade-in": {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    "fade-down": {
        hidden: { opacity: 0, y: -40 },
        visible: { opacity: 1, y: 0 },
    },
    "slide-left": {
        hidden: { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0 },
    },
    "slide-right": {
        hidden: { opacity: 0, x: 60 },
        visible: { opacity: 1, x: 0 },
    },
    "scale-in": {
        hidden: { opacity: 0, scale: 0.85 },
        visible: { opacity: 1, scale: 1 },
    },
    "scale-up": {
        hidden: { opacity: 0, scale: 0.6 },
        visible: { opacity: 1, scale: 1 },
    },
};

export default function AnimatedSection({
    children,
    variant = "fade-up",
    delay = 0,
    duration = 0.6,
    once = true,
    className,
    style,
    amount = 0.2,
}: AnimatedSectionProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once, amount });

    return (
        <motion.div
            ref={ref}
            className={className}
            style={style}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: variantMap[variant].hidden,
                visible: {
                    ...variantMap[variant].visible,
                    transition: {
                        duration,
                        delay,
                        ease: [0.25, 0.1, 0.25, 1],
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
}
