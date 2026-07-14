"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useBrand } from "@/components/brand/BrandProvider";
import type { MawzunContent } from "@/lib/siteContent";

export default function Hero({ content }: { content: MawzunContent["home"] }) {
  const brand = useBrand();

  return (
    <section className="relative w-full min-h-[calc(100vh-96px)] flex flex-col overflow-hidden">
      {/* Full Background Image — responsive */}
      <div className="absolute inset-0 z-0">
        {/* Mobile portrait image */}
        <Image
          src={content.heroMobileImage.src}
          alt={content.heroMobileImage.alt}
          fill
          priority
          className="object-cover md:hidden"
          style={{ objectPosition: content.heroMobileImage.position }}
          sizes="100vw"
        />
        {/* Desktop wide image */}
        <Image
          src={content.heroDesktopImage.src}
          alt={content.heroDesktopImage.alt}
          fill
          priority
          className="object-cover hidden md:block"
          style={{ objectPosition: content.heroDesktopImage.position }}
          sizes="100vw"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[100vw] flex-1 flex flex-col justify-between px-6 md:px-16 lg:px-24 pt-40 md:pt-56 pb-12 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-[calc(100vw-3rem)] md:max-w-3xl"
        >
          <h1 className="w-full max-w-[19rem] md:max-w-2xl font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.08] md:leading-[1.1] tracking-tight text-white mb-8 md:text-balance">
            {content.heroHeading}
          </h1>

          <p className="w-full max-w-[21rem] md:max-w-2xl text-white/76 text-base md:text-lg leading-relaxed mb-10 md:mb-12 text-pretty">
            {content.heroIntroduction}
          </p>

          <Link href={brand.href("/contact")} className="block w-full max-w-[20rem] sm:inline-block sm:w-auto sm:max-w-full">
            <button className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border border-white/20 text-white px-5 md:px-8 py-4 text-xs md:text-sm tracking-[0.1em] md:tracking-widest uppercase font-medium hover:bg-white/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 whitespace-normal text-center leading-relaxed">
              {content.heroCta} &rarr;
            </button>
          </Link>
        </motion.div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 md:mt-24 flex items-start space-x-6 border-t border-white/15 pt-8 w-full max-w-[calc(100vw-3rem)] md:max-w-xl"
        >
          <div className="font-serif text-4xl text-gold shrink-0 italic pr-2 border-r border-white/15">
            {brand.logoSrc ? (
              <span className="relative block h-12 w-12 overflow-hidden">
                <Image
                  src={brand.logoSrc}
                  alt={brand.logoAlt ?? brand.name}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </span>
            ) : (
              <>
                3<span className="text-3xl ml-0.5">T</span>
              </>
            )}
          </div>
          <p className="text-sm text-white/50 leading-relaxed font-medium">
            {brand.tagline}.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
