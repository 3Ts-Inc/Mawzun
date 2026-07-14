import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { pageMetadata } from "@/lib/metadata";
import { getMawzunContent } from "@/lib/siteContent";

export const metadata = pageMetadata({
  title: "Approach — Mawzun Advisory",
  description:
    "The work starts long before the meeting does: upstream diagnosis, room design, sponsor preparation, and decisions that hold.",
  path: "/approach",
  image: "/og/approach.webp",
});

export default async function ApproachPage() {
  const { approach } = await getMawzunContent();
  return (
    <main className="flex min-h-screen flex-col bg-cream text-charcoal">
      <Navbar />

      <section className="w-full px-6 py-32 md:px-16 lg:px-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex flex-col items-start space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {approach.eyebrow}
            </span>
            <div className="h-[2px] w-12 bg-gold/60" />
          </div>
          <h1 className="mb-12 font-serif text-5xl leading-tight tracking-tight text-charcoal md:text-6xl lg:text-7xl">
            {approach.heading}
          </h1>
        </div>
      </section>

      <section className="w-full px-6 pb-24 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.72fr_1fr] lg:gap-16">
          <div className="order-2 border-t border-charcoal/10 pt-8 lg:order-1">
            <p className="mb-6 font-serif text-2xl leading-snug text-charcoal md:text-3xl">
              {approach.lead}
            </p>
            <p className="text-lg leading-relaxed text-charcoal/70">
              {approach.introduction}
            </p>
          </div>
          <div className="relative order-1 h-[380px] overflow-hidden bg-charcoal shadow-[0_24px_70px_-30px_rgba(0,0,0,0.22)] md:h-[520px] lg:order-2">
            <Image
              src={approach.image.src}
              alt={approach.image.alt}
              fill
              priority
              className="object-cover"
              style={{ objectPosition: approach.image.position }}
              sizes="(min-width: 1024px) 58vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-charcoal/10 via-transparent to-charcoal/20" />
            <div className="pointer-events-none absolute inset-0 border border-white/10" />
          </div>
        </div>
      </section>

      <section className="w-full border-y border-[#edebe4] bg-[#f8f6f2] px-6 py-24 md:px-16 lg:px-24">
        <div className="mx-auto flex max-w-7xl flex-col lg:flex-row">
          <div className="mb-16 w-full pr-0 lg:mb-0 lg:w-1/3 lg:pr-12">
            <div className="mb-8 flex flex-col items-start space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                {approach.patternsEyebrow}
              </span>
              <div className="h-[2px] w-12 bg-gold/60" />
            </div>
            <h2 className="font-serif text-4xl leading-tight tracking-tight text-charcoal md:text-5xl lg:text-6xl">
              {approach.patternsHeading}
            </h2>
          </div>

          <div className="w-full border-t border-[#edebe4] lg:w-2/3">
            {approach.patterns.map((pattern, index) => (
              <div
                key={pattern}
                className="group flex items-center border-b border-[#edebe4] px-4 py-8 transition-colors hover:bg-white/40"
              >
                <div className="mr-8 w-24 shrink-0 border-r border-[#edebe4] text-center font-serif text-3xl text-gold">
                  0{index + 1}
                </div>
                <div className="flex-grow pr-8 font-serif text-xl text-charcoal/80 md:text-2xl">
                  {pattern}
                </div>
                <div className="shrink-0 font-light text-gold opacity-50 transition-all group-hover:translate-x-2 group-hover:opacity-100">
                  &rarr;
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-6 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl">
            <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {approach.workEyebrow}
            </span>
            <h2 className="font-serif text-4xl leading-tight tracking-tight text-charcoal md:text-6xl">
              {approach.workHeading}
            </h2>
          </div>

          <div className="grid gap-px border border-charcoal/10 bg-charcoal/10">
            {approach.workBlocks.map((block, index) => (
              <article
                key={block.title}
                className="grid gap-8 bg-cream p-8 md:p-10 lg:grid-cols-[0.2fr_0.8fr]"
              >
                <div className="font-serif text-5xl text-gold/80">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="mb-6 max-w-3xl font-serif text-3xl leading-tight text-charcoal md:text-4xl">
                    {block.title}
                  </h3>
                  <p className="max-w-4xl text-lg leading-relaxed text-charcoal/72">
                    {block.body}
                  </p>
                  <p className="mt-8 border-l border-gold/50 pl-5 font-serif text-xl italic leading-snug text-charcoal">
                    {block.service}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
