import type { MawzunContent } from "@/lib/siteContent";

export default function ImpactHeader({
  content,
  variant = "light",
}: {
  content: MawzunContent["impact"];
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";

  return (
    <section
      className={`w-full px-6 py-32 md:px-16 lg:px-24 ${
        isDark ? "bg-[#111613] text-cream" : "bg-[#f8f6f2] text-charcoal"
      }`}
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1fr]">
        <div>
          <div className="mb-8 flex flex-col items-start space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {content.eyebrow}
            </span>
            <div className="h-[2px] w-12 bg-gold/60" />
          </div>
          <h1 className="font-serif text-5xl leading-tight tracking-tight md:text-7xl">
            {content.heading}
          </h1>
        </div>

        <div className="self-end space-y-8">
          <p
            className={`font-serif text-2xl italic leading-relaxed ${
              isDark ? "text-cream/86" : "text-charcoal/82"
            }`}
          >
            {content.introduction}
          </p>
          <p
            className={`text-lg leading-relaxed ${
              isDark ? "text-cream/66" : "text-charcoal/72"
            }`}
          >
            {content.qualifier}
          </p>
        </div>
      </div>
    </section>
  );
}
