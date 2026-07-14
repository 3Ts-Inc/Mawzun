import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import { siteUrl } from "@/lib/metadata";
import "./globals.css";
import { ContentProvider } from "@/components/content/ContentProvider";
import { getMawzunContent } from "@/lib/siteContent";
import { BrandProvider } from "@/components/brand/BrandProvider";

export const dynamic = "force-dynamic";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mawzun Advisory — Senior Advisory for High-Stakes Alignment",
  description:
    "Senior advisory for high-stakes alignment in transformation settings across the MENA region and complex environments.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Mawzun Advisory — Senior Advisory for High-Stakes Alignment",
    description:
      "Senior advisory for high-stakes alignment in transformation settings.",
    url: siteUrl,
    siteName: "Mawzun Advisory",
    images: [
      {
        url: "/mawzun-logo.png",
        width: 1200,
        height: 1200,
        alt: "Mawzun Advisory",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mawzun Advisory — Senior Advisory for High-Stakes Alignment",
    description:
      "Senior advisory for high-stakes alignment in transformation settings.",
    images: ["/mawzun-logo.png"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = await getMawzunContent();
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(){var e="3ts-scroll:"+location.pathname;function t(){try{sessionStorage.setItem(e,String(window.scrollY||0))}catch(e){}}function n(){var t=0;try{t=Number(sessionStorage.getItem(e)||0)}catch(e){}document.documentElement.dataset.navAtTop=Math.max(window.scrollY||0,t)>4?"false":"true"}n(),window.addEventListener("scroll",function(){t(),n()},{passive:!0}),window.addEventListener("pagehide",t),window.addEventListener("pageshow",function(){setTimeout(function(){t(),n()},0)})}();`,
          }}
        />
      </head>
      <body className="flex flex-col font-sans bg-cream text-charcoal selection:bg-gold selection:text-cream overflow-x-hidden w-full relative antialiased">
        <BrandProvider value={{ name: content.global.name, shortName: content.global.shortName, arabicName: content.global.arabicName, legalName: content.global.legalName, tagline: content.global.tagline, logoSrc: content.global.logo.src, logoAlt: content.global.logo.alt }}>
          <ContentProvider content={content}>{children}</ContentProvider>
        </BrandProvider>
      </body>
    </html>
  );
}
