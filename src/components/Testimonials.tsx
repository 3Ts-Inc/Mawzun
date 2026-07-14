"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useBrand } from "@/components/brand/BrandProvider";
import type { MawzunContent } from "@/lib/siteContent";

export default function Testimonials({ content }: { content: MawzunContent["home"] }) {
  const brand = useBrand();

  return (
    <section className="relative w-full flex flex-col justify-between border-t border-[#edebe4]">
      {/* Subtle Background pattern */}
      <div className="absolute inset-0 z-0 bg-[#fcfbf9]">
        {/* Subtle overlay texture if desired */}
      </div>

      <div className="relative z-10 w-full py-32 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto flex-grow flex flex-col">
        {/* Header */}
        <div className="flex flex-col items-start space-y-4 mb-20">
          <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
            {content.testimonialsEyebrow}
          </span>
          <div className="w-12 h-[2px] bg-gold/60"></div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-charcoal mt-6">
            {content.testimonialsHeading}
          </h2>
        </div>

        {/* Vertical Stack instead of cramped grid */}
        <div className="space-y-20 mb-20">
          {content.testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="flex flex-col md:flex-row gap-8 md:gap-16 border-b border-charcoal/10 pb-16 last:border-b-0"
            >
              {/* Big Quote Marker */}
              <div className="font-serif text-7xl md:text-8xl text-gold/20 leading-none -mt-4 select-none">
                &ldquo;
              </div>
              
              {/* Content container */}
              <div className="flex-grow">
                <blockquote className="font-serif text-lg md:text-xl lg:text-2xl text-charcoal/80 leading-relaxed italic mb-8 text-pretty">
                  {t.quote}
                </blockquote>
                
                <div className="flex flex-col">
                  <div className="text-charcoal text-lg font-semibold tracking-wide uppercase font-sans">
                    {t.author}
                  </div>
                  <div className="text-gold text-sm tracking-widest uppercase font-medium mt-1">
                    {t.title}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Link to full testimonials page */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center pt-8 border-t border-charcoal/10"
        >
          <Link href={brand.href("/testimonials")} className="group flex flex-col">
            <span className="text-gold text-sm font-semibold tracking-[0.15em] uppercase pb-2">
              {content.testimonialsCta} <span className="group-hover:ml-2 transition-all inline-block">&rarr;</span>
            </span>
            <div className="w-full h-px bg-gold/30 group-hover:bg-gold transition-colors"></div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
