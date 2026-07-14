"use client";

import { createContext, useContext } from "react";
import { defaultMawzunContent, type MawzunContent } from "@/lib/siteContent";

const ContentContext = createContext<MawzunContent>(defaultMawzunContent);

export function ContentProvider({ children, content }: { children: React.ReactNode; content: MawzunContent }) {
  return <ContentContext.Provider value={content}>{children}</ContentContext.Provider>;
}

export function useSiteContent() {
  return useContext(ContentContext);
}
