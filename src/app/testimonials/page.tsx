import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { pageMetadata } from "@/lib/metadata";
import { getMawzunContent } from "@/lib/siteContent";

export const metadata = pageMetadata({
  title: "Client Reflections — Mawzun Advisory",
  description:
    "Selected reflections from clients across program leadership, organisational alignment, facilitation, and coaching engagements.",
  path: "/testimonials",
  image: "/og/testimonials.webp",
});

export default async function TestimonialsPage() {
  const content = await getMawzunContent();
  const { testimonials } = content;
  return (
    <main className="flex min-h-screen flex-col bg-cream text-charcoal">
      <Navbar />

      <section className="w-full bg-[#f8f6f2] px-6 py-32 md:px-16 lg:px-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex flex-col items-start space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {testimonials.eyebrow}
            </span>
            <div className="h-[2px] w-12 bg-gold/60" />
          </div>
          <h1 className="mb-12 font-serif text-5xl leading-tight tracking-tight text-charcoal md:text-6xl lg:text-7xl">
            {testimonials.heading}
          </h1>
          <p className="max-w-3xl font-serif text-xl italic leading-relaxed text-charcoal/80 md:text-2xl">
            {testimonials.introduction}
          </p>
        </div>
      </section>

      <section className="w-full px-6 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <div className="space-y-16">
            {testimonials.reflections.map((reflection, index) => (
              <article
                key={`${reflection.author}-${index}`}
                className="grid gap-8 border-t border-charcoal/10 pt-10 lg:grid-cols-[0.34fr_1fr]"
              >
                <div>
                  <p className="text-xs font-semibold uppercase leading-relaxed tracking-[0.2em] text-gold">
                    {reflection.category}
                  </p>
                </div>

                <div className="relative">
                  <div className="pointer-events-none absolute -left-3 -top-8 font-serif text-8xl leading-none text-gold/10">
                    &ldquo;
                  </div>
                  <blockquote className="relative z-10 mb-8 font-serif text-xl leading-relaxed text-charcoal md:text-2xl">
                    {reflection.quote}
                  </blockquote>
                  <div className="flex items-start gap-6">
                    <div className="mt-3 h-px w-12 bg-gold/50" />
                    <div>
                      <p className="text-sm font-bold uppercase tracking-widest text-charcoal">
                        {reflection.author}
                      </p>
                      <p className="mt-2 font-serif text-base italic text-gold">
                        {reflection.title}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#111613] px-6 py-20 text-center md:px-16 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-8 font-serif text-2xl leading-relaxed text-cream md:text-3xl">
            {testimonials.ctaText}
          </p>
          <a
            href={`mailto:${content.global.email}`}
            className="premium-track text-sm font-semibold uppercase tracking-[0.15em] text-gold hover:text-cream"
          >
            {testimonials.ctaLabel}
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
