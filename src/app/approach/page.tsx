import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Approach — Mawzun Advisory",
  description:
    "The work starts long before the meeting does: upstream diagnosis, room design, sponsor preparation, and decisions that hold.",
  path: "/approach",
  image: "/og/approach.webp",
});

const patterns = [
  "When the stakes are high and alignment is fragile.",
  "When a consequential decision is stalled by competing priorities.",
  "When the room needs design before the meeting begins.",
  "When a new senior leader needs judgment in a politically sensitive first chapter.",
];

const workBlocks = [
  {
    title: "The room is only as good as what it produces.",
    body: "Most gatherings generate energy without producing decisions. The reason is almost never the agenda. It is the unspoken resistance, the competing narratives, the stakeholder who was never quite aligned, the decision that was assumed rather than earned. I design and hold the rooms where that changes. My work is not to manage the conversation but to listen for what is underneath it — and to play that back with precision, so senior teams can make informed choices and leave with decisions that survive contact with implementation.",
    service:
      "This is the Facilitation work of the Decision Sprint and the High-Stakes Room.",
  },
  {
    title: "Clarity about yourself is the precondition for everything else.",
    body: "Senior leaders carrying transformation mandates are often the last people given space to think clearly about their own position. I work with sponsors and principals navigating genuine inflection points: new roles, politically sensitive mandates, decisions with consequences they will carry. My approach is disciplined and direct. I hold the structure firmly while creating space for real exploration — listening for the person beneath the presenting problem and reflecting it back with precision, so the next step is chosen rather than made for you.",
    service:
      "This is the Coaching work of the Retained Advisory and the First 90 Days.",
  },
  {
    title:
      "The gap between what the data shows and what people experience is always the real brief.",
    body: "Before a room can be convened or an intervention designed, the alignment problem must be understood. I begin every engagement by listening — to the sponsor, to the principals, to the stakeholders who will not speak freely in the room itself. I map where alignment is breaking, what the competing narratives are, and what a workable decision path might look like. That diagnosis shapes everything that follows: who is in the room, in what sequence, and what the room is actually trying to produce.",
    service:
      "This is the Systems Diagnostic work of the Alignment Read.",
  },
  {
    title: "Announced change is not adopted change.",
    body: "Transformation fails most often not because the strategy was wrong but because the conditions for adoption were never built. The governance was retrofitted. The resistance was ignored. The actual implementation was hoped for. The people carrying the work were never asked what they actually needed. I work with leaders and institutions to close that gap: diagnosing where the friction sits, designing the interventions that address it, and building the structures that make new ways of working stick in practice and reality.",
    service:
      "This is the Change Management work of the Retained Advisory and longer engagements.",
  },
];

export default function ApproachPage() {
  return (
    <main className="flex min-h-screen flex-col bg-cream text-charcoal">
      <Navbar />

      <section className="w-full px-6 py-32 md:px-16 lg:px-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex flex-col items-start space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Our Approach
            </span>
            <div className="h-[2px] w-12 bg-gold/60" />
          </div>
          <h1 className="mb-12 font-serif text-5xl leading-tight tracking-tight text-charcoal md:text-6xl lg:text-7xl">
            The work starts long before the meeting does
          </h1>
        </div>
      </section>

      <section className="w-full px-6 pb-24 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.72fr_1fr] lg:gap-16">
          <div className="order-2 border-t border-charcoal/10 pt-8 lg:order-1">
            <p className="mb-6 font-serif text-2xl leading-snug text-charcoal md:text-3xl">
              The visible meeting is usually the smallest part of the work. Most
              alignment problems are solved — or lost — before anyone enters the
              room.
            </p>
            <p className="text-lg leading-relaxed text-charcoal/70">
              I work upstream: listening for the narratives beneath positions,
              mapping where alignment is actually breaking, designing the
              sequence of the room, and helping sponsors translate decisions
              into action that holds. The method is tailored and varies. The
              underlying logic does not.
            </p>
          </div>
          <div className="relative order-1 h-[380px] overflow-hidden bg-charcoal shadow-[0_24px_70px_-30px_rgba(0,0,0,0.22)] md:h-[520px] lg:order-2">
            <Image
              src="/approach-advisory.webp"
              alt="Confidential advisory materials arranged for stakeholder alignment"
              fill
              priority
              className="object-cover"
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
                Patterns I help clients identify and navigate.
              </span>
              <div className="h-[2px] w-12 bg-gold/60" />
            </div>
            <h2 className="font-serif text-4xl leading-tight tracking-tight text-charcoal md:text-5xl lg:text-6xl">
              Patterns I help clients identify and navigate.
            </h2>
          </div>

          <div className="w-full border-t border-[#edebe4] lg:w-2/3">
            {patterns.map((pattern, index) => (
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
              How I Work
            </span>
            <h2 className="font-serif text-4xl leading-tight tracking-tight text-charcoal md:text-6xl">
              Four lenses for work that has to survive implementation.
            </h2>
          </div>

          <div className="grid gap-px border border-charcoal/10 bg-charcoal/10">
            {workBlocks.map((block, index) => (
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
