"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useBrand } from "@/components/brand/BrandProvider";
import type { MawzunContent } from "@/lib/siteContent";

export default function AboutUs({ content }: { content: MawzunContent["home"] }) {
  const brand = useBrand();

  return (
    <section className="w-full bg-[#f8f6f2] py-24 px-6 md:px-16 lg:px-24 border-t border-[#edebe4]">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 pr-0 lg:pr-16 mt-16 lg:mt-0 z-10">
          <div className="flex flex-col items-start space-y-4 mb-8">
            <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
              {content.aboutSection.eyebrow}
            </span>
            <div className="w-12 h-[2px] bg-gold/60"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl leading-snug text-charcoal">
              {content.aboutSection.heading}
            </p>
            {content.aboutSection.paragraphs.map((paragraph) => <p key={paragraph} className="text-charcoal/70 text-base md:text-lg leading-relaxed">{paragraph}</p>)}
          </motion.div>

          <div className="mt-10 grid grid-cols-2 gap-px bg-charcoal/10 border border-charcoal/10">
            {content.aboutSection.statistics.map(({ value, label }) => (
              <div key={value} className="bg-[#f8f6f2] p-5">
                <div className="font-serif text-3xl text-charcoal mb-2">
                  {value}
                </div>
                <div className="text-[11px] uppercase tracking-[0.16em] leading-relaxed text-charcoal/55">
                  {label}
                </div>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex items-center"
          >
            <Link href={brand.href("/about")} className="group flex flex-col">
              <span className="text-gold text-sm font-semibold tracking-[0.15em] uppercase pb-2">
                {content.aboutSection.cta} <span className="group-hover:ml-2 transition-all inline-block">&rarr;</span>
              </span>
              <div className="w-full h-px bg-gold/30 group-hover:bg-gold transition-colors"></div>
            </Link>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full lg:w-1/2 relative h-[420px] md:h-[560px] lg:h-[640px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.14)] bg-charcoal overflow-hidden"
        >
          <Image
            src={content.shareefImage.src}
            alt={content.shareefImage.alt}
            fill
            className="object-cover grayscale contrast-110 brightness-95"
            style={{ objectPosition: content.shareefImage.position }}
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-cream">
            <div className="font-serif text-2xl">{content.aboutSection.imageName}</div>
            <div className="mt-2 text-xs uppercase tracking-[0.18em] text-gold">
              {content.aboutSection.imageRole}
            </div>
          </div>
          <div className="absolute inset-0 border border-white/10 pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
}
