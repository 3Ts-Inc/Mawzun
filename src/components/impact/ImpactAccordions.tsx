"use client";

import { CaretDown } from "@phosphor-icons/react";
import { useState } from "react";
import ImpactHeader from "@/components/impact/ImpactHeader";
import type { MawzunContent } from "@/lib/siteContent";

export default function ImpactAccordions({ content }: { content: MawzunContent["impact"] }) {
  const [openSection, setOpenSection] = useState(content.sections[0]?.id ?? "");

  return (
    <>
      <ImpactHeader content={content} variant="dark" />

      <section className="w-full px-6 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-6xl space-y-6">
          {content.sections.map((section, sectionIndex) => {
            const isOpen = openSection === section.id;
            return (
              <article
                key={section.id}
                className={`group overflow-hidden border bg-[#f8f6f2] transition-all duration-300 ${
                  isOpen
                    ? "border-gold/55 shadow-[0_24px_70px_-46px_rgba(0,0,0,0.28)]"
                    : "border-charcoal/10 hover:-translate-y-0.5 hover:border-gold/35 hover:bg-white"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenSection(isOpen ? "" : section.id)}
                  className="flex w-full items-center justify-between gap-5 p-6 text-left md:gap-8 md:p-8"
                >
                  <span className="grid min-w-0 flex-1 gap-4 md:grid-cols-[5.5rem_1fr] md:items-start md:gap-8">
                    <span
                      className={`font-serif text-5xl leading-none transition-colors md:text-6xl ${
                        isOpen ? "text-gold" : "text-gold/72"
                      }`}
                    >
                      0{sectionIndex + 1}
                    </span>
                    <span className="min-w-0">
                      <span className="mb-4 block text-sm font-semibold uppercase leading-relaxed tracking-[0.2em] text-gold md:text-base">
                        {section.eyebrow}
                      </span>
                      <span className="block max-w-4xl font-serif text-2xl leading-[1.08] text-charcoal md:text-4xl lg:text-5xl">
                        {section.title}
                      </span>
                    </span>
                  </span>

                  <span className="flex shrink-0 items-center gap-3">
                    <span
                      className={`hidden text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors sm:block ${
                        isOpen ? "text-gold" : "text-charcoal/45"
                      }`}
                    >
                      {isOpen ? content.closeLabel : content.openLabel}
                    </span>
                    <span
                      className={`flex h-12 w-12 items-center justify-center border transition-all duration-300 ${
                        isOpen
                          ? "border-gold bg-[#111613] text-gold"
                          : "border-charcoal/15 bg-cream text-charcoal/62 group-hover:border-gold/45 group-hover:text-gold"
                      }`}
                    >
                      <CaretDown
                        aria-hidden="true"
                        size={18}
                        weight="bold"
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </span>
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-charcoal/10 p-6 md:p-8">
                      {section.intro ? (
                        <p className="mb-8 max-w-4xl text-lg leading-relaxed text-charcoal/72">
                          {section.intro}
                        </p>
                      ) : null}
                      <div className="space-y-6">
                        {section.cases.map((item) => (
                          <div key={item.title} className="bg-cream p-6">
                            <h3 className="mb-4 font-serif text-2xl leading-snug text-charcoal">
                              {item.title}
                            </h3>
                            {item.body ? (
                              <p className="text-base leading-relaxed text-charcoal/72">
                                {item.body}
                              </p>
                            ) : null}
                            {item.results?.length ? (
                              <ul className="mt-5 grid gap-3 md:grid-cols-2">
                                {item.results.map((result) => (
                                  <li
                                    key={result}
                                    className="border-l border-gold/50 pl-4 text-sm font-medium leading-relaxed text-charcoal/78"
                                  >
                                    {result}
                                  </li>
                                ))}
                              </ul>
                            ) : null}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
