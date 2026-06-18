"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";

const STAT_PATTERN = /^(\D*)(\d+)(\D*)$/;

export default function StatNumber({
  value,
  className,
  duration = 1.6,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const match = value.match(STAT_PATTERN);
  const target = match ? Number(match[2]) : 0;
  const prefix = match?.[1] ?? "";
  const suffix = match?.[3] ?? "";

  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const count = useMotionValue(0);
  const text = useTransform(count, (v) => `${prefix}${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (!match || !inView) return;
    if (reduce) {
      count.set(target);
      return;
    }
    const controls = animate(count, target, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [match, inView, reduce, target, duration, count]);

  if (!match) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  return (
    <motion.span ref={ref} className={className} aria-label={value}>
      {text}
    </motion.span>
  );
}
