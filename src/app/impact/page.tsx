import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImpactAccordions from "@/components/impact/ImpactAccordions";
import { pageMetadata } from "@/lib/metadata";
import { getMawzunContent } from "@/lib/siteContent";

export const metadata = pageMetadata({
  title: "Impact — Mawzun Advisory",
  description:
    "Representative cases drawn from public-safe engagements and organised by the type of problem they addressed.",
  path: "/impact",
  image: "/og/impact.webp",
});

export default async function ImpactPage() {
  const content = await getMawzunContent();
  return (
    <main className="flex min-h-screen flex-col bg-cream text-charcoal">
      <Navbar />
      <ImpactAccordions content={content.impact} />
      <Footer />
    </main>
  );
}
