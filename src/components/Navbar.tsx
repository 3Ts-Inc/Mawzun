"use client";

import { useState, useEffect, useLayoutEffect } from "react";
import type { MouseEvent } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useBrand } from "@/components/brand/BrandProvider";

const links = [
  { href: "/about", label: "About" },
  { href: "/approach", label: "Approach" },
  { href: "/services", label: "Services" },
  { href: "/impact", label: "Impact" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

const menuVariants: Variants = {
  closed: {
    opacity: 0,
    y: "-100%",
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const linkContainerVariants: Variants = {
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const linkVariants: Variants = {
  closed: { opacity: 0, y: 20 },
  open: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

let hasPlayedNavIntro = false;

const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

function isPastHeroTop() {
  return typeof window !== "undefined" ? window.scrollY > 4 : false;
}

export default function Navbar() {
  const brand = useBrand();
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuNavigating, setIsMenuNavigating] = useState(false);
  const [shouldAnimateIntro] = useState(() => !hasPlayedNavIntro);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    hasPlayedNavIntro = true;
  }, []);

  // Close menu on route change
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setIsOpen(false);
      setIsMenuNavigating(false);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    };
  }, [isOpen]);

  const [scrolled, setScrolled] = useState(true);

  useIsomorphicLayoutEffect(() => {
    const handleScroll = () => {
      const isScrolled = isPastHeroTop();
      document.documentElement.dataset.navAtTop = isScrolled ? "false" : "true";
      setScrolled(isScrolled);
    };
    handleScroll();
    const frame = window.requestAnimationFrame(handleScroll);
    const restorationCheck = window.setTimeout(handleScroll, 120);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(restorationCheck);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isHome = pathname === brand.href("/");
  const navIsTransparent = isHome && !scrolled && !isOpen && !isMenuNavigating;
  const navToneClass = navIsTransparent ? "text-white/80" : "text-charcoal/80";
  const brandToneClass = navIsTransparent ? "text-white" : "text-charcoal";
  const dividerToneClass = navIsTransparent ? "bg-white/20" : "bg-charcoal/20";

  const handleMobileNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    const targetHref = brand.href(href);
    if (targetHref === pathname) {
      setIsOpen(false);
      setIsMenuNavigating(false);
      return;
    }

    event.preventDefault();
    setIsMenuNavigating(true);
    router.push(targetHref);
  };

  return (
    <>
      <header
        data-home={isHome ? "true" : "false"}
        data-transparent={navIsTransparent ? "true" : "false"}
        data-menu-open={isOpen ? "true" : "false"}
        data-menu-navigating={isMenuNavigating ? "true" : "false"}
        className={`site-nav w-full fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
          navIsTransparent
            ? "bg-transparent border-b border-transparent"
            : "bg-cream/95 backdrop-blur-md border-b border-charcoal/5"
        }`}
      >
        <motion.div
          initial={shouldAnimateIntro ? { opacity: 0, y: -20 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full px-6 md:px-12 py-6 flex items-center justify-between"
        >
          <div className="flex items-center space-x-6">
            <Link href={brand.href("/")} className="flex items-center gap-3.5 z-[70]">
              {brand.logoSrc ? (
                <span className="relative h-12 w-12 overflow-hidden border border-current/10">
                  <Image
                    src={brand.logoSrc}
                    alt={brand.logoAlt ?? brand.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </span>
              ) : null}
              <span className="flex flex-col">
                <span className={`site-nav-brand font-serif text-[19px] md:text-2xl tracking-tight ${brandToneClass}`}>
                  {brand.name}
                </span>
                {brand.arabicName ? (
                  <span className={`site-nav-brand mt-1 text-sm md:text-[15px] font-semibold uppercase tracking-[0.12em] ${brandToneClass}`}>
                    {brand.arabicName}
                  </span>
                ) : null}
              </span>
            </Link>
            <div className={`site-nav-divider hidden md:block w-px h-10 ${dividerToneClass}`}></div>
          </div>

          {/* Desktop Links */}
          <nav className={`site-nav-tone hidden md:flex items-center space-x-8 text-sm font-medium tracking-widest uppercase ${navToneClass}`}>
            {links.slice(0, 5).map((link) => {
              const isActive = pathname === brand.href(link.href);

              return (
                <Link
                  key={link.href}
                  href={brand.href(link.href)}
                  aria-current={pathname === brand.href(link.href) ? "page" : undefined}
                  data-active={pathname === brand.href(link.href) ? "true" : undefined}
                  className={`premium-track ${isActive ? "text-gold" : "hover:text-gold"}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Contact */}
          <div className="hidden md:flex items-center space-x-6">
            <div className={`site-nav-divider w-px h-10 ${dividerToneClass}`}></div>
            <Link
              href={brand.href("/contact")}
              aria-current={pathname === brand.href("/contact") ? "page" : undefined}
              data-active={pathname === brand.href("/contact") ? "true" : undefined}
              className={`premium-track text-sm font-medium tracking-widest uppercase ${
                pathname === brand.href("/contact")
                  ? "text-gold"
                  : `hover:text-gold ${navToneClass}`
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            className={`site-nav-brand md:hidden flex items-center justify-center p-2 -mr-2 z-[70] hover:text-gold focus:outline-none group ${brandToneClass}`}
            onClick={() => {
              setIsMenuNavigating(false);
              setIsOpen((current) => !current);
            }}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="pointer-events-none"
              width={28}
              height={28}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12L20 12"
                className="origin-center -translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
              />
              <path
                d="M4 12H20"
                className="origin-center transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
              />
              <path
                d="M4 12H20"
                className="origin-center translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
              />
            </svg>
          </button>
        </motion.div>
      </header>

      {/* Spacer to replace sticky flow — hidden on homepage where hero bleeds behind navbar */}
      {!isHome && <div className="w-full h-[96px] shrink-0"></div>}

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 h-[100dvh] bg-cream z-40 flex flex-col justify-center px-8 md:hidden overflow-hidden touch-none overscroll-none"
          >
            <motion.nav
              variants={linkContainerVariants}
              initial="closed"
              animate="open"
              className="flex flex-col items-start space-y-8"
            >
              {links.map((link) => (
                <motion.div key={link.href} variants={linkVariants}>
                  <Link
                    href={brand.href(link.href)}
                    onClick={(event) => handleMobileNavClick(event, link.href)}
                    className="font-serif text-4xl text-charcoal hover:text-gold transition-colors inline-block relative group"
                  >
                    {link.label}
                    <div className="absolute -bottom-2 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></div>
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            <motion.div
              variants={linkVariants}
              initial="closed"
              animate="open"
              className="absolute bottom-12 left-8 border-t border-charcoal/10 pt-8 w-[calc(100%-4rem)]"
            >
              <a
                href="mailto:shareef@3ts-inc.com"
                className="text-gold text-sm tracking-[0.2em] uppercase font-medium"
              >
                shareef@3ts-inc.com
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
