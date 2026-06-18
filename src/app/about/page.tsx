import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About Shareef Khatib — Mawzun Advisory",
  description:
    "Shareef Samir Khatib is a senior adviser for high-stakes alignment in transformation settings.",
  path: "/about",
  image: "/og/about.webp",
});

const competencies = [
  "High-Stakes Stakeholder Alignment",
  "Politically Sensitive Convening & Decision Architecture",
  "Executive Sponsor Coaching & Transition Advisory",
  "Organisational Diagnosis & Change Design",
  "Crisis Navigation & Continuity Leadership",
  "Cross-Cultural & Intercultural Judgment",
];

const credentials = [
  "World Bank facilitator and trainer roster member",
  "Georgetown University — Certificate in Leadership Coaching; Certificate in Organisational Development & Change Leadership",
  "Project Management Professional (PMP)",
  "Advanced degrees in Governance & International Development and Behavioural Neuroscience",
  "20+ countries of professional experience across the Middle East, Africa, Asia, and beyond",
];

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-cream text-charcoal">
      <Navbar />

      <section className="w-full px-6 py-28 md:px-16 md:py-32 lg:px-24">
        <div className="mx-auto grid max-w-7xl items-start gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.72fr)] lg:gap-20">
          <div>
            <div className="mb-8 flex flex-col items-start space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                About Shareef
              </span>
              <div className="h-[2px] w-12 bg-gold/60" />
            </div>

            <h1 className="mb-8 font-serif text-5xl leading-tight tracking-tight text-charcoal md:text-7xl">
              Shareef Samir Khatib
            </h1>
            <p className="mb-12 max-w-2xl font-serif text-2xl italic leading-snug text-charcoal/78 md:text-3xl">
              Senior adviser for high-stakes alignment in transformation settings.
            </p>

            <div className="max-w-3xl space-y-7 text-lg leading-relaxed text-charcoal/72">
              <p>
                I work with senior sponsors navigating the hardest part of
                transformation: getting the right people aligned around
                difficult decisions, and ensuring those decisions survive contact
                with reality. My work is most useful when the issue is
                politically sensitive, cross-functional, or stuck between
                strategy and execution: where ordinary workshops and generic
                facilitation are not enough.
              </p>
              <p>
                My position is grounded in eighteen years of senior operating
                experience, not in method training. As senior program director
                and principal adviser across Nigeria, Malaysia, Iraq,
                Afghanistan, Turkey and Syria, I held direct accountability for
                multi-country portfolios ranging from $27M to $161M, and for
                the governments, communities, and institutions those portfolios
                were designed to serve. The rooms I worked in were
                consequential. The decisions made in them had costs measured in
                lives and livelihoods. This experience is what grounds my
                advisory practice.
              </p>
            </div>
          </div>

          <aside className="lg:sticky lg:top-32">
            <div className="relative h-[500px] overflow-hidden bg-charcoal shadow-[0_24px_70px_-28px_rgba(0,0,0,0.24)] md:h-[620px]">
              <Image
                src="/shareef-khatib.webp"
                alt="Shareef Samir Khatib"
                fill
                priority
                className="object-cover object-[center_28%] grayscale contrast-110 brightness-95"
                sizes="(min-width: 1024px) 38vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/72 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="font-serif text-2xl leading-snug text-cream">
                  Quiet judgment for rooms where trust is fragile and decisions
                  matter.
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
              On working in the region
            </span>
            <h2 className="font-serif text-4xl leading-tight text-charcoal md:text-5xl">
              Trust is built differently here.
            </h2>
          </div>
          <p className="max-w-3xl text-lg leading-relaxed text-charcoal/72">
            I am British and Jordanian — formed by both worlds and comfortable
            operating across them. I work across the Arab world and other
            Muslim-majority and complex environments in English, with
            conversational Arabic and French, and with the cultural literacy
            that comes from having lived and worked across the region. I
            understand that trust is built differently here: through discretion,
            through demonstrated judgment, and through the patience to let a
            relationship earn its own authority before claiming any.
          </p>
        </div>
      </section>

      <section className="w-full px-6 py-24 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.68fr_1fr]">
          <div>
            <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              On how I work
            </span>
            <h2 className="font-serif text-4xl leading-tight text-charcoal md:text-5xl">
              Disciplined, calm, and highly engaged with content.
            </h2>
          </div>
          <div className="space-y-7 text-lg leading-relaxed text-charcoal/72">
            <p>
              As I demonstrate in Approach, I am disciplined, calm, and highly
              engaged with content. I listen for the narratives beneath
              positions, draw out the connections no one has yet made visible,
              and play back synthesis with precision — so that senior teams can
              make informed choices and leave with decisions that hold. I hold
              the room with respect and authority, encouraging candid and at
              times provocative exchange while maintaining the cohesion that
              makes decisions possible.
            </p>
            <p>
              The work starts long before the meeting does. Upstream diagnosis,
              stakeholder mapping, sponsor preparation, and agenda architecture
              are where most alignment problems are actually solved — or lost.
              By the time the room begins, the work is already well underway.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#111613] px-6 py-24 text-cream md:px-16 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Independent judgment, offered without self-interest.
          </p>
          <p className="font-serif text-3xl leading-snug md:text-5xl">
            Senior leaders are rarely short of agreement. What they often lack
            is a trusted adviser who will name what others in the room will not
            — not to provoke, but because clear decisions require honest
            premises.
          </p>
          <p className="mt-10 max-w-3xl text-lg leading-relaxed text-cream/68">
            I work without an agenda of my own. My interest is in my client&apos;s
            success and the quality of their decisions. That independence is
            what makes my honesty useful: it is not flattery, and it is not
            criticism. It is a precise read of the situation, offered with
            respect and without self-interest.
          </p>
        </div>
      </section>

      <section className="w-full px-6 py-24 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Core Competencies
            </span>
            <div className="grid gap-px border border-charcoal/10 bg-charcoal/10 md:grid-cols-2">
              {competencies.map((item) => (
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
              Credentials
            </span>
            <div className="space-y-4 border-l border-gold/40 pl-6">
              {credentials.map((item) => (
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
            The work is advisory. The purpose is consequential: decisions that
            hold, institutions that deliver, and communities that shape their
            own futures.
          </p>
          <div className="mx-auto my-10 h-px w-16 bg-gold/60" />
          <p className="font-serif text-2xl italic text-charcoal/76">
            Quiet judgment for rooms where trust is fragile and decisions
            matter.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
