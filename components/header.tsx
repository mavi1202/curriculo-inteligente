"use client"

import { useState } from "react"
import { Menu, X, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "#sobre", label: "Sobre" },
    { href: "#como-funciona", label: "Como Funciona" },
    { href: "#beneficios", label: "Benefícios" },
    { href: "#impacto", label: "Impacto Social" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 text-foreground font-bold text-lg">
            <FileText className="h-6 w-6 text-primary" />
            <span>Currículo Inteligente</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <ThemeToggle />
            <Button
              asChild
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
            >
              <a href="#criar">Criar Currículo</a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <Button
                asChild
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold w-full"
              >
                <a href="#criar" onClick={() => setIsMenuOpen(false)}>
                  Criar Currículo
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
