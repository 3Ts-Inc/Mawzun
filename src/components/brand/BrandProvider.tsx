"use client";

import { createContext, useContext } from "react";

type BrandMode = "mawzun-name";

type BrandConfig = {
  mode: BrandMode;
  basePath: string;
  name: string;
  shortName: string;
  arabicName?: string;
  legalName: string;
  tagline: string;
  logoSrc?: string;
  logoAlt?: string;
};

const defaultBrand: BrandConfig = {
  mode: "mawzun-name",
  basePath: "",
  name: "Mawzun Advisory",
  shortName: "Mawzun",
  arabicName: "مَوزُون",
  legalName: "Mawzun Advisory",
  tagline: "Senior advisory for high-stakes alignment in transformation settings",
  logoSrc: "/mawzun-logo.png",
  logoAlt: "Mawzun Advisory logo",
};

const BrandContext = createContext<BrandConfig>(defaultBrand);

export function BrandProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: Partial<BrandConfig>;
}) {
  return (
    <BrandContext.Provider value={{ ...defaultBrand, ...value }}>
      {children}
    </BrandContext.Provider>
  );
}

export function useBrand() {
  const brand = useContext(BrandContext);

  function href(path: string) {
    if (!brand.basePath) return path;
    if (path === "/") return brand.basePath;
    return `${brand.basePath}${path}`;
  }

  return { ...brand, href };
}
