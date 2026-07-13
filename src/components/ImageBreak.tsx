"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ImageBreak({
  src,
  alt,
  height = "h-[40vh] md:h-[55vh]",
  position = "center",
  caption,
}: {
  src: string;
  alt: string;
  height?: string;
  position?: string;
  caption?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.2 }}
      className={`relative w-full ${height} overflow-hidden`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        style={{ objectPosition: position }}
        sizes="100vw"
      />
      {/* Subtle vignette overlay for editorial feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 pointer-events-none" />
      {caption && (
        <div className="absolute bottom-6 right-6 text-white/60 text-xs tracking-[0.2em] uppercase font-medium">
          {caption}
        </div>
      )}
    </motion.div>
  );
}
