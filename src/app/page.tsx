import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import WhatWeDo from "@/components/WhatWeDo";
import WhyAndImpact from "@/components/WhyAndImpact";
import SelectedEngagements from "@/components/SelectedEngagements";
import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ImageBreak from "@/components/ImageBreak";
import { pageMetadata } from "@/lib/metadata";
import { getMawzunContent } from "@/lib/siteContent";

export const metadata = pageMetadata({
  title: "Mawzun Advisory — Senior Advisory for High-Stakes Alignment",
  description:
    "Senior advisory for sponsors navigating high-stakes alignment, consequential rooms, and transformation settings.",
  path: "/",
  image: "/og/home.webp",
});

export default async function Home() {
  const content = await getMawzunContent();

  return (
    <main className="flex min-h-screen flex-col bg-cream text-charcoal">
      <Navbar />
      <Hero />
      <WhoWeWorkWith />
      <ImageBreak
        src="/home-convening.webp"
        alt="Prepared executive convening room"
        height="h-[42vh] md:h-[58vh]"
        position="center"
      />
      <WhatWeDo />
      <WhyAndImpact />
      <SelectedEngagements />
      <AboutUs image={content.home.shareefImage} />
      <ImageBreak
        src={content.home.secondImage.src}
        alt={content.home.secondImage.alt}
        height="h-[38vh] md:h-[52vh]"
        position={content.home.secondImage.position}
      />
      <Testimonials />
      <Footer />
    </main>
  );
}
