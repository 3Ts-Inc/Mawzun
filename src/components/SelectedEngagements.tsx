"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Link from "next/link";
import { useBrand } from "@/components/brand/BrandProvider";

const cases = [
  {
    number: "01",
    title: "Saudi Arabia —\nVision 2030 Assessment",
    description:
      "Supporting the World Bank GCC Prosperity team in the assessment of Saudi Arabia's Vision 2030 progress and next steps.\nOngoing.",
    details: [
      ["Context", "World Bank GCC Prosperity team"],
      ["Mode", "Assessment facilitation and next-step design"],
      ["Status", "Current engagement"],
    ],
  },
  {
    number: "02",
    title: "Malaysia —\nNational Governance Reform",
    description:
      "Directed a $27M governance portfolio engaging Parliament, ministries, anti-corruption bodies, and civil society on reform priorities. $17M in cumulative impact to 80+ local actors within 18 months.",
    details: [
      ["Role", "Chief of Party"],
      ["Table", "Parliament, ministries, anti-corruption bodies, civil society"],
      ["Scale", "$27M portfolio; 80+ local grantees"],
    ],
  },
  {
    number: "03",
    title: "World Bank —\nLeadership Development at Scale",
    description:
      "Delivered leadership training across 18 cohorts of World Bank Team Leaders and Supervisors. Cohorts recorded a 16% improvement in measured leadership scores.",
    details: [
      ["Audience", "Team Leaders and Supervisors"],
      ["Scale", "18 cohorts"],
      ["Signal", "16% improvement in leadership scores"],
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const mapDots = Array.from({ length: 400 }).flatMap((_, i) => {
  const x = ((i * 2654435761) >>> 0) % 1000;
  const y = ((i * 1597334677) >>> 0) % 500;
  const noise = ((i * 3812015801) >>> 0) % 10;

  const inAmerica = x > 100 && x < 350 && y > 100 && y < 400;
  const inEurasia = x > 450 && x < 900 && y > 50 && y < 350;
  const inAfrica = x > 450 && x < 650 && y > 250 && y < 450;

  return (inAmerica || inEurasia || inAfrica) && noise > 3
    ? [{ id: i, x, y }]
    : [];
});

export default function SelectedEngagements() {
  const brand = useBrand();

  return (
    <section className="w-full bg-cream py-24 px-6 md:px-16 lg:px-24 border-t border-[#edebe4] relative overflow-hidden">
      {/* Background Stylized Map (Abstract representation) */}
      <div className="absolute right-0 top-0 w-full lg:w-[60%] h-[500px] opacity-10 pointer-events-none">
        <svg
          viewBox="0 0 1000 500"
          className="w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* A highly simplified dotted path to represent the world map feeling without massive inline code */}
          <g fill="#A9835A">
            {mapDots.map((dot) => (
              <circle key={dot.id} cx={dot.x} cy={dot.y} r="2" />
            ))}
          </g>
          {/* Highlight Points */}
          <circle cx="580" cy="220" r="6" fill="#1E2520" /> {/* Saudi Arabia */}
          <circle cx="820" cy="320" r="6" fill="#1E2520" /> {/* Malaysia */}
          <circle cx="280" cy="200" r="6" fill="#1E2520" /> {/* Washington DC */}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-start space-y-4 mb-8">
          <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
            Selected Engagements
          </span>
          <div className="w-12 h-[2px] bg-gold/60"></div>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-charcoal mb-6"
        >
          Most of this work <br className="hidden md:block" />
          is confidential.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gold text-xl md:text-2xl font-serif italic mb-20"
        >
          Selected public-safe cases below.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {cases.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden bg-[#fcfbf9] border border-charcoal/5 p-8 lg:p-10 flex flex-col shadow-[0_10px_40px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] transition-all duration-500"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gold/0 transition-colors duration-500 md:group-hover:bg-gold/60"></div>
              <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full border border-gold/0 transition-all duration-700 md:group-hover:-right-16 md:group-hover:-top-16 md:group-hover:border-gold/15"></div>
              <div className="flex flex-col items-start mb-6">
                <span className="text-gold text-sm font-semibold tracking-[0.2em] mb-2">
                  {item.number}
                </span>
                <div className="w-6 h-px bg-charcoal/20 mb-6"></div>
                <h3 className="font-serif text-2xl text-charcoal leading-snug whitespace-pre-line">
                  {item.title}
                </h3>
              </div>
              <div className="w-full h-px bg-charcoal/10 mb-6"></div>
              <p className="text-charcoal/70 text-sm leading-relaxed whitespace-pre-line">
                {item.description}
              </p>
              <div className="mt-8 border-t border-charcoal/10 pt-5 transition-all duration-500 md:translate-y-2 md:opacity-55 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold/80">
                  Public-safe detail
                </div>
                <dl className="space-y-3">
                  {item.details.map(([label, value]) => (
                    <div
                      key={label}
                      className="grid grid-cols-[72px_1fr] gap-4 border-b border-charcoal/[0.06] pb-3 last:border-b-0 last:pb-0"
                    >
                      <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-charcoal/35">
                        {label}
                      </dt>
                      <dd className="text-xs leading-relaxed text-charcoal/65">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex items-center"
        >
          <Link href={brand.href("/impact")} className="group flex flex-col">
            <span className="text-gold text-sm font-semibold tracking-[0.15em] uppercase pb-2">
              More engagements <span className="group-hover:ml-2 transition-all inline-block">&rarr;</span>
            </span>
            <div className="w-full h-px bg-gold/30 group-hover:bg-gold transition-colors"></div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
