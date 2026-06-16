"use client"

import { FileText, Heart, Mail, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Brand */}
          <div>
            <a
              href="#"
              className="flex items-center gap-2 text-foreground font-bold text-lg mb-4"
            >
              <FileText className="h-6 w-6 text-primary" />
              <span>Currículo Inteligente</span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Gerador Digital para Primeiro Emprego. Uma iniciativa de impacto
              social que ajuda jovens a criar currículos profissionais de forma
              gratuita.
            </p>
          </div>

          {/* Team */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Equipe</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              
              <li>• Maria Vitória Barreto</li>
              <li>• Antony Novaes</li>
              <li>• Gustavo Henrique</li>
              <li>• Gabriel Porsi</li>
              <li>• Pietro Martins</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Contato</h4>
            <div className="space-y-3">
              <a
                href="mailto:contato@exemplo.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                {/* Substitua pelo email de contato */}
                curriculointeligente39@gmail.com
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Github className="h-4 w-4" />
                {/* Substitua pelo link do GitHub */}
                https://github.com/mavi1202/curriculo-inteligente
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Currículo Inteligente. Projeto
              Acadêmico.
            </p>
            <p className="flex items-center gap-1">
              Feito com <Heart className="h-4 w-4 text-destructive fill-current" />{" "}
              para a comunidade
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
