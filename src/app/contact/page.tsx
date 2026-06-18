import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Start with a Conversation — Mawzun Advisory",
  description:
    "Start with a short, confidential conversation about a stalled decision, a room that needs design, or a senior transition underway.",
  path: "/contact",
  image: "/og/contact.webp",
});

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-cream text-charcoal">
      <Navbar />

      <section className="flex min-h-[72vh] w-full flex-col justify-center px-6 py-32 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_0.68fr] lg:items-end">
          <div>
            <div className="mb-8 flex flex-col items-start space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Contact
              </span>
              <div className="h-[2px] w-12 bg-gold/60" />
            </div>

            <h1 className="mb-10 max-w-4xl font-serif text-5xl leading-tight tracking-tight text-charcoal md:text-7xl">
              Start with a conversation.
            </h1>

            <div className="max-w-3xl space-y-7 text-lg leading-relaxed text-charcoal/76 md:text-xl">
              <p>
                If a decision is stalled, a room needs design, or a transition
                is underway — and you are wondering whether this work might be
                relevant — the right first step is a short, confidential
                conversation.
              </p>
              <p>
                There is no pitch. No proposal before we have spoken. The first
                conversation is for clarity: whether the situation fits, whether
                the timing is right, and whether there is a useful next step
                worth taking.
              </p>
            </div>
          </div>

          <aside className="border border-charcoal/10 bg-[#f8f6f2] p-8 shadow-[0_24px_70px_-40px_rgba(0,0,0,0.22)] md:p-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Write to
            </p>
            <a
              href="mailto:shareef@3ts-inc.com"
              className="block break-all font-serif text-3xl leading-tight text-charcoal transition-colors hover:text-gold md:text-4xl"
            >
              shareef@3ts-inc.com
            </a>

            <div className="my-10 h-px w-full bg-charcoal/10" />

            <p className="mb-8 text-lg leading-relaxed text-charcoal/72">
              Washington, DC · London, UK · Amman, JO
            </p>

            <div className="space-y-5 border-l border-gold/50 pl-5 text-base leading-relaxed text-charcoal/72">
              <p>
                All initial conversations are completely confidential. Nothing
                discussed is shared, attributed, or referenced without your
                explicit agreement.
              </p>
              <p>No recordings. No AI note takers.</p>
              <p>Meeting method and/or platform of your choosing.</p>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}
