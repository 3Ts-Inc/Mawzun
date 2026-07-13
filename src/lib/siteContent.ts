import { fetchCmsDocument } from "./sanity";

export type SiteImage = {
  src: string;
  alt: string;
  position: string;
};

export type MawzunContent = {
  home: {
    secondImage: SiteImage;
    shareefImage: SiteImage;
  };
  services: {
    mainImage: SiteImage;
    shareefImage: SiteImage;
  };
  contact: {
    heading: string;
    introduction: string[];
    email: string;
    locations: string;
    confidentiality: string[];
    image: SiteImage;
  };
};

export const defaultMawzunContent: MawzunContent = {
  home: {
    secondImage: {
      src: "/home-facilitation.webp",
      alt: "Shareef Khatib facilitating a senior working session",
      position: "48% 44%",
    },
    shareefImage: {
      src: "/shareef-home.webp",
      alt: "Shareef Samir Khatib facilitating a working session",
      position: "46% 42%",
    },
  },
  services: {
    mainImage: {
      src: "/services-convening.webp",
      alt: "Shareef Khatib listening during a senior stakeholder convening",
      position: "66% 42%",
    },
    shareefImage: {
      src: "/shareef-services.webp",
      alt: "Shareef Khatib facilitating a working session",
      position: "52% 42%",
    },
  },
  contact: {
    heading: "Start with a conversation.",
    introduction: [
      "If a decision is stalled, a room needs design, or a transition is underway — and you are wondering whether this work might be relevant — the right first step is a short, confidential conversation.",
      "There is no pitch. No proposal before we have spoken. The first conversation is for clarity: whether the situation fits, whether the timing is right, and whether there is a useful next step worth taking.",
    ],
    email: "enquire@mawzun-inc.com",
    locations: "Washington, DC · London, UK · Amman, JO",
    confidentiality: [
      "All initial conversations are completely confidential. Nothing discussed is shared, attributed, or referenced without your explicit agreement.",
      "No recordings. No AI note takers.",
      "Meeting method and/or platform of your choosing.",
    ],
    image: {
      src: "/shareef-contact.webp",
      alt: "Shareef Khatib listening during a facilitated workshop",
      position: "68% 48%",
    },
  },
};

export function getMawzunContent() {
  return fetchCmsDocument<MawzunContent>(
    `*[_type == "mawzunSite"][0]{
      home{
        secondImage{"src": asset->url, alt, position},
        shareefImage{"src": asset->url, alt, position}
      },
      services{
        mainImage{"src": asset->url, alt, position},
        shareefImage{"src": asset->url, alt, position}
      },
      contact{
        heading,
        introduction,
        email,
        locations,
        confidentiality,
        image{"src": asset->url, alt, position}
      }
    }`,
    defaultMawzunContent,
  );
}
