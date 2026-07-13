import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { pageMetadata } from "@/lib/metadata";
import Image from "next/image";
import { getMawzunContent } from "@/lib/siteContent";

export const metadata = pageMetadata({
  title: "Start with a Conversation — Mawzun Advisory",
  description:
    "Start with a short, confidential conversation about a stalled decision, a room that needs design, or a senior transition underway.",
  path: "/contact",
  image: "/og/contact.webp",
});

export default async function ContactPage() {
  const { contact } = await getMawzunContent();

  return (
    <main className="flex min-h-screen flex-col bg-cream text-charcoal">
      <Navbar />

      <section className="flex min-h-[72vh] w-full flex-col justify-center px-6 py-32 md:px-16 lg:px-24">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_0.68fr] lg:items-end">
          <div>
            <div className="mb-8 flex flex-col items-start space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Contact
              </span>
              <div className="h-[2px] w-12 bg-gold/60" />
            </div>

            <h1 className="mb-10 max-w-4xl font-serif text-5xl leading-tight tracking-tight text-charcoal md:text-7xl">
              {contact.heading}
            </h1>

            <div className="max-w-3xl space-y-7 text-lg leading-relaxed text-charcoal/76 md:text-xl">
              {contact.introduction.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

            <aside className="border border-charcoal/10 bg-[#f8f6f2] p-8 shadow-[0_24px_70px_-40px_rgba(0,0,0,0.22)] md:p-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Write to
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="block break-all font-serif text-3xl leading-tight text-charcoal transition-colors hover:text-gold md:text-4xl"
            >
              {contact.email}
            </a>

            <div className="my-10 h-px w-full bg-charcoal/10" />

            <p className="mb-8 text-lg leading-relaxed text-charcoal/72">
              {contact.locations}
            </p>

            <div className="space-y-5 border-l border-gold/50 pl-5 text-base leading-relaxed text-charcoal/72">
              {contact.confidentiality.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            </aside>
          </div>

          <div className="relative mt-16 h-[340px] overflow-hidden bg-charcoal shadow-[0_24px_70px_-40px_rgba(0,0,0,0.35)] md:h-[500px]">
            <Image
              src={contact.image.src}
              alt={contact.image.alt}
              fill
              priority
              className="object-cover"
              style={{ objectPosition: contact.image.position }}
              sizes="(min-width: 1280px) 80rem, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal/18 via-transparent to-charcoal/10" />
            <div className="absolute inset-0 border border-white/10" />
            <p className="absolute bottom-5 left-5 border-l border-gold/60 pl-4 text-[9px] font-medium uppercase tracking-[0.18em] text-cream/70">
              Careful listening before consequential decisions
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
