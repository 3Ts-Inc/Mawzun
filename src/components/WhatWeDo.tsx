"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { homeServices } from "@/lib/shareefContent";
import { useBrand } from "@/components/brand/BrandProvider";

export default function WhatWeDo() {
  const brand = useBrand();
  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-cream py-24 px-6 md:px-16 lg:px-24 border-t border-[#edebe4]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-start space-y-4 mb-8">
          <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
            What We Do
          </span>
          <div className="w-12 h-[2px] bg-gold/60"></div>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-charcoal max-w-4xl mb-20"
        >
          The work is organized around four engagements, each designed for a
          different stage of the alignment problem.
        </motion.h2>
        <p className="text-charcoal/55 text-sm tracking-wide mb-12 md:mb-16 hidden md:block">
          Hover, focus, or select an engagement to open it.
        </p>

        <div className="hidden md:flex h-[30rem] w-full overflow-hidden border border-charcoal/10 bg-cream">
          {homeServices.map((service, index) => {
            const isActive = active === index;
            return (
              <motion.div
                key={service.id}
                role="group"
                aria-label={service.title}
                style={{ flexBasis: 0 }}
                animate={{ flexGrow: isActive ? 2.7 : 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                onMouseEnter={() => setActive(index)}
                className={`relative h-full min-w-[4.5rem] overflow-hidden border-l border-charcoal/10 first:border-l-0 transition-colors duration-500 ${
                  isActive ? "bg-[#fcfbf9]" : "bg-cream hover:bg-[#faf8f4]"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isActive}
                  aria-label={`${service.title} — ${service.essence}, ${service.duration}`}
                  onFocus={() => setActive(index)}
                  onClick={() => setActive(index)}
                  className="absolute inset-0 z-20 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-inset"
                />

                <div
                  className={`absolute inset-x-0 top-0 h-px bg-gold transition-opacity duration-500 ${
                    isActive ? "opacity-70" : "opacity-0"
                  }`}
                />

                <motion.div
                  aria-hidden="true"
                  animate={{ opacity: isActive ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 z-10 flex flex-col items-center justify-between py-8 pointer-events-none"
                >
                  <span className="font-serif text-3xl text-gold">
                    {service.number}
                  </span>
                  <span className="font-serif text-xl text-charcoal/80 [writing-mode:vertical-rl] rotate-180 tracking-wide whitespace-nowrap">
                    {service.title}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-charcoal/40 [writing-mode:vertical-rl] rotate-180">
                    {service.essence}
                  </span>
                </motion.div>

                <motion.div
                  animate={{ opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.45, delay: isActive ? 0.12 : 0 }}
                  aria-hidden={!isActive}
                  className="absolute inset-0 z-10 flex flex-col justify-between p-10 lg:p-12 pointer-events-none"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-serif text-5xl text-gold">
                      {service.number}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold/80 text-right whitespace-nowrap">
                      {service.essence} · {service.duration}
                    </span>
                  </div>
                  <div className="max-w-md">
                    <h3 className="font-serif text-3xl lg:text-4xl text-charcoal mb-5">
                      {service.title}
                    </h3>
                    <div className="w-10 h-px bg-gold/50 mb-5" />
                    <p className="text-charcoal/70 text-sm lg:text-[0.95rem] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <div className="md:hidden border-y border-charcoal/10">
          {homeServices.map((service, index) => {
            const isOpen = active === index;
            return (
              <div
                key={service.id}
                className="border-b border-charcoal/10 last:border-b-0"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`expanding-svc-${service.id}`}
                  onClick={() => setActive(index)}
                  className="w-full flex items-center gap-5 py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-inset"
                >
                  <span className="font-serif text-2xl text-gold w-10 shrink-0">
                    {service.number}
                  </span>
                  <span className="flex-grow font-serif text-2xl text-charcoal">
                    {service.title}
                  </span>
                  <span
                    className={`text-gold text-2xl font-light shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`expanding-svc-${service.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-7 pl-[3.75rem] pr-2">
                        <div className="flex items-center gap-3 mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold/80">
                          <span>{service.essence}</span>
                          <span className="w-1 h-1 rounded-full bg-gold/40" />
                          <span>{service.duration}</span>
                        </div>
                        <p className="text-charcoal/70 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex items-center"
        >
          <Link href={brand.href("/approach")} className="group flex flex-col">
            <span className="text-gold text-sm font-semibold tracking-[0.15em] uppercase pb-2">
              Read More About How We Work{" "}
              <span className="group-hover:ml-2 transition-all inline-block">
                &rarr;
              </span>
            </span>
            <div className="w-full h-px bg-gold/30 group-hover:bg-gold transition-colors"></div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
