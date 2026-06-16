"use client"

import { Lock, ShieldCheck, FileText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const items = [
  {
    icon: Lock,
    title: "Privacidade",
    description: "Seus dados serão utilizados apenas para criação do currículo.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: ShieldCheck,
    title: "Segurança",
    description:
      "As informações serão armazenadas com proteção e acesso restrito.",
    color: "text-[#57A773] dark:text-[#6bc488]",
    bg: "bg-[#57A773]/10",
  },
  {
    icon: FileText,
    title: "Transparência",
    description: "Caso solicitado, os dados poderão ser removidos.",
    color: "text-accent",
    bg: "bg-accent/15",
  },
]

export function DataProtection() {
  return (
    <section id="protecao-dados" className="py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Compromisso com seus dados
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Levamos a proteção das suas informações a sério. Veja como cuidamos
            dos seus dados em cada etapa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {items.map((item) => (
            <Card
              key={item.title}
              className="border border-border shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-5 mx-auto`}
                >
                  <item.icon className={`h-7 w-7 ${item.color}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
