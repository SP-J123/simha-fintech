"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CounterAnimationProps {
    target: number;
    suffix?: string;
    prefix?: string;
    duration?: number;
    className?: string;
    style?: React.CSSProperties;
}

export default function CounterAnimation({
    target,
    suffix = "",
    prefix = "",
    duration = 2,
    className,
    style,
}: CounterAnimationProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        const startTime = performance.now();
        const animate = (currentTime: number) => {
            const elapsed = (currentTime - startTime) / 1000;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, target, duration]);

    return (
        <span
            ref={ref}
            className={className}
            style={{
                fontFamily: "var(--font-jetbrains-mono, 'JetBrains Mono', monospace)",
                fontVariantNumeric: "tabular-nums",
                ...style,
            }}
        >
            {prefix}
            {count}
            {suffix}
        </span>
    );
}
