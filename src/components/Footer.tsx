"use client";

import Image from "next/image";
import { useBrand } from "@/components/brand/BrandProvider";

export default function Footer() {
  const brand = useBrand();

  return (
    <footer className="w-full bg-[#151a16] pt-16 pb-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between border-t border-cream/10 pt-16">
        <div className="mb-12 md:mb-0">
          <div className="flex flex-col items-start space-y-4 mb-8">
            <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
              Contact
            </span>
            <div className="w-12 h-[2px] bg-gold/60"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-cream mb-4">
            Request a confidential conversation.
          </h2>
          <a
            href="mailto:enquire@mawzun-inc.com"
            className="premium-track text-gold/80 hover:text-gold transition-colors font-sans tracking-widest uppercase text-sm inline-block mt-4"
          >
            enquire@mawzun-inc.com
          </a>
        </div>

        <div className="flex flex-col items-end text-right">
          {brand.logoSrc ? (
            <div className="relative mb-5 h-24 w-24 overflow-hidden border border-cream/10">
              <Image
                src={brand.logoSrc}
                alt={brand.logoAlt ?? brand.name}
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>
          ) : null}
          <div className="font-serif text-2xl md:text-[1.7rem] text-cream mb-2">
            {brand.name}
          </div>
          {brand.arabicName ? (
            <div className="mb-3 text-base font-semibold uppercase tracking-[0.12em] text-gold">
              {brand.arabicName}
            </div>
          ) : null}
          <div className="max-w-xs text-cream/40 text-[10px] leading-relaxed tracking-[0.16em] uppercase mb-6">
            {brand.tagline}
          </div>
          <div className="text-cream/40 text-xs tracking-widest uppercase">
            &copy; {new Date().getFullYear()} {brand.legalName}
          </div>
        </div>
      </div>
    </footer>
  );
}
