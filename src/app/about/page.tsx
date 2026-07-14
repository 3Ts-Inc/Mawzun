import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { pageMetadata } from "@/lib/metadata";
import { getMawzunContent } from "@/lib/siteContent";

export const metadata = pageMetadata({
  title: "About Shareef Khatib — Mawzun Advisory",
  description:
    "Shareef Samir Khatib is a senior adviser for high-stakes alignment in transformation settings.",
  path: "/about",
  image: "/og/about.webp",
});

export default async function AboutPage() {
  const { about } = await getMawzunContent();
  return (
    <main className="flex min-h-screen flex-col bg-cream text-charcoal">
      <Navbar />

      <section className="w-full px-6 py-28 md:px-16 md:py-32 lg:px-24">
        <div className="mx-auto grid max-w-7xl items-start gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.72fr)] lg:gap-20">
          <div>
            <div className="mb-8 flex flex-col items-start space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                {about.eyebrow}
              </span>
              <div className="h-[2px] w-12 bg-gold/60" />
            </div>

            <h1 className="mb-8 font-serif text-5xl leading-tight tracking-tight text-charcoal md:text-7xl">
              {about.heading}
            </h1>
            <p className="mb-12 max-w-2xl font-serif text-2xl italic leading-snug text-charcoal/78 md:text-3xl">
              {about.subheading}
            </p>

            <div className="max-w-3xl space-y-7 text-lg leading-relaxed text-charcoal/72">
              {about.introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>

          <aside className="lg:sticky lg:top-32">
            <div className="relative h-[500px] overflow-hidden bg-charcoal shadow-[0_24px_70px_-28px_rgba(0,0,0,0.24)] md:h-[620px]">
              <Image
                src={about.image.src}
                alt={about.image.alt}
                fill
                priority
                className="object-cover grayscale contrast-110 brightness-95"
                style={{ objectPosition: about.image.position }}
                sizes="(min-width: 1024px) 38vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/72 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="font-serif text-2xl leading-snug text-cream">
                  {about.imageCaption}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="w-full border-y border-[#edebe4] bg-[#f8f6f2] px-6 py-24 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.68fr_1fr]">
          <div>
            <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {about.regionEyebrow}
            </span>
            <h2 className="font-serif text-4xl leading-tight text-charcoal md:text-5xl">
              {about.regionHeading}
            </h2>
          </div>
          <p className="max-w-3xl text-lg leading-relaxed text-charcoal/72">
            {about.regionText}
          </p>
        </div>
      </section>

      <section className="w-full px-6 py-24 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.68fr_1fr]">
          <div>
            <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {about.workEyebrow}
            </span>
            <h2 className="font-serif text-4xl leading-tight text-charcoal md:text-5xl">
              {about.workHeading}
            </h2>
          </div>
          <div className="space-y-7 text-lg leading-relaxed text-charcoal/72">
            {about.workParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#111613] px-6 py-24 text-cream md:px-16 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {about.independenceEyebrow}
          </p>
          <p className="font-serif text-3xl leading-snug md:text-5xl">
            {about.independenceLead}
          </p>
          <p className="mt-10 max-w-3xl text-lg leading-relaxed text-cream/68">
            {about.independenceText}
          </p>
        </div>
      </section>

      <section className="w-full px-6 py-24 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {about.competenciesHeading}
            </span>
            <div className="grid gap-px border border-charcoal/10 bg-charcoal/10 md:grid-cols-2">
              {about.competencies.map((item) => (
                <div key={item} className="bg-cream p-6">
                  <p className="font-serif text-xl leading-snug text-charcoal">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {about.credentialsHeading}
            </span>
            <div className="space-y-4 border-l border-gold/40 pl-6">
              {about.credentials.map((item) => (
                <p key={item} className="text-lg leading-relaxed text-charcoal/72">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full border-t border-[#edebe4] bg-[#f8f6f2] px-6 py-24 text-center md:px-16 lg:px-24">
        <div className="mx-auto max-w-4xl">
          <p className="font-serif text-3xl leading-snug text-charcoal md:text-5xl">
            {about.closingLead}
          </p>
          <div className="mx-auto my-10 h-px w-16 bg-gold/60" />
          <p className="font-serif text-2xl italic text-charcoal/76">
            {about.closingQuote}
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
