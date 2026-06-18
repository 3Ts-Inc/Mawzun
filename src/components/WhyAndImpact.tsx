"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { homeImpactStats, homePatterns } from "@/lib/shareefContent";
import StatNumber from "@/components/StatNumber";

const statLabels = [
  "Leadership scores",
  "Gun violence · 3 months",
  "In the room",
  "Years at senior level",
];

const wallVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const tileVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function WhyAndImpact() {
  return (
    <>
      <section className="w-full bg-[#f8f6f2] py-24 px-6 md:px-16 lg:px-24 border-t border-[#edebe4]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 pr-0 lg:pr-12 mb-16 lg:mb-0">
            <div className="flex flex-col items-start space-y-4 mb-8">
              <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
                Patterns I help clients identify and navigate.
              </span>
              <div className="w-12 h-[2px] bg-gold/60"></div>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-charcoal"
            >
              Patterns I help clients identify and navigate.
            </motion.h2>
          </div>

          <div className="w-full lg:w-2/3 border-t border-[#edebe4]">
            {homePatterns.map((pattern, index) => (
              <motion.div
                key={pattern.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center border-b border-[#edebe4] py-8 group cursor-pointer hover:bg-white/40 transition-colors px-4"
              >
                <div className="w-24 shrink-0 font-serif text-3xl text-gold text-center border-r border-[#edebe4] mr-8">
                  0{index + 1}
                </div>
                <div className="flex-grow text-charcoal/80 font-serif text-xl md:text-2xl pr-8">
                  {pattern.text}
                </div>
                <div className="shrink-0 text-gold font-light opacity-50 group-hover:opacity-100 group-hover:translate-x-2 transition-all">
                  &rarr;
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-24 px-6 md:px-16 lg:px-24 bg-[#111613] border-t border-[#111613]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-start space-y-4 mb-8">
            <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
              Selected Impact
            </span>
            <div className="w-12 h-[2px] bg-gold/60"></div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-cream max-w-3xl mb-16"
          >
            Real progress you can actually measure.
          </motion.h2>

          <motion.div
            variants={wallVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-cream/10 border border-cream/10"
          >
            {homeImpactStats.map((impact, index) => (
              <motion.div
                key={impact.text}
                variants={tileVariants}
                className="group relative overflow-hidden bg-[#111613] hover:bg-[#171d19] transition-colors duration-500 p-8 lg:p-10"
              >
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full border border-gold/0 transition-all duration-700 pointer-events-none group-hover:-right-10 group-hover:-top-10 group-hover:border-gold/15" />

                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold/80 mb-6">
                  {statLabels[index]}
                </div>
                <div className="font-serif text-6xl lg:text-7xl text-cream tracking-tighter mb-5 transition-transform duration-500 group-hover:-translate-y-0.5">
                  <StatNumber value={impact.value} />
                </div>
                <div className="h-px w-8 bg-gold/50 mb-6 transition-all duration-500 group-hover:w-16" />
                <p className="text-cream/55 group-hover:text-cream/85 transition-colors duration-500 text-sm leading-relaxed">
                  {impact.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
