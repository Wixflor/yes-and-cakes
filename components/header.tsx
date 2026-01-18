"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"

interface HeaderProps {
  lang: "es" | "en"
}

const navigation = {
  es: {
    catalog: "Catálogo",
    philosophy: "Filosofía",
    contact: "Contacto",
  },
  en: {
    catalog: "Catalog",
    philosophy: "Philosophy",
    contact: "Contact",
  },
}

export function Header({ lang }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : ""
  }, [mobileMenuOpen])

  if (!mounted) {
    return null
  }
  const nav = navigation[lang]
  const otherLang = lang === "es" ? "en" : "es"
  const otherLangPath = lang === "es" ? "/en" : "/"
  const homePath = lang === "es" ? "/" : "/en"
 



  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href={homePath}>Yes and Cakes</Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href={`${lang === "es" ? "" : "/en"}#catalog`}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {nav.catalog}
            </Link>
            <Link
              href={`${lang === "es" ? "" : "/en"}#philosophy`}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {nav.philosophy}
            </Link>
            <Link
              href={`${lang === "es" ? "" : "/en"}#contact`}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {nav.contact}
            </Link>
            <Link
               href={otherLangPath}
                aria-label={lang === "es" ? "Switch to English" : "Cambiar a español"}
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition"
              >
                <span className={lang === "es" ? "font-semibold text-foreground" : ""}>
                  ES
                </span>
                <span>/</span>
                <span className={lang === "en" ? "font-semibold text-foreground" : ""}>
                  EN
                </span>
              </Link>
              <button
                  onClick={() =>
                    setTheme(resolvedTheme === "dark" ? "light" : "dark")
                  }
                  className="rounded-md p-2 hover:bg-muted transition"
                  aria-label="Toggle theme"
                >
                  {resolvedTheme === "dark" ? (
                    <Sun className="h-5 w-5" />
                  ) : ( 
                    <Moon className="h-5 w-5" />
                  )}
                </button>



          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background md:hidden" role="dialog" aria-modal="true">
          <div className="container flex h-16 items-center justify-between px-4">
            <span className="text-xl font-semibold">Yes and Cakes</span>
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="flex flex-col items-center gap-8 px-4 pt-16">
            <Link
              href={`${lang === "es" ? "" : "/en"}#catalog`}
              className="text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {nav.catalog}
            </Link>
            <Link
              href={`${lang === "es" ? "" : "/en"}#philosophy`}
              className="text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {nav.philosophy}
            </Link>
            <Link
              href={`${lang === "es" ? "" : "/en"}#contact`}
              className="text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {nav.contact}
            </Link>
              <Link
                href={otherLangPath}
                aria-label={lang === "es" ? "Switch to English" : "Cambiar a español"}
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition"
              >
                <span className={lang === "es" ? "font-semibold text-foreground" : ""}>
                  ES
                </span>
                <span>/</span>
                <span className={lang === "en" ? "font-semibold text-foreground" : ""}>
                  EN
                </span>
              </Link>
              <button
                onClick={() =>
                  setTheme(resolvedTheme === "dark" ? "light" : "dark")
                }
                className="rounded-md p-2 hover:bg-muted transition"
                aria-label="Toggle theme"
              >
                {resolvedTheme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>



          </nav>
        </div>
      )}
    </>
  )
}
