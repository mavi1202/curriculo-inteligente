"use client"

import { Zap, Gift, Timer, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const benefits = [
  {
    icon: Zap,
    title: "Fácil de usar",
    description:
      "Interface simples e intuitiva, perfeita para quem nunca fez um currículo antes.",
    color: "var(--primary)",
  },
  {
    icon: Gift,
    title: "Gratuito",
    description:
      "Sem taxas escondidas, sem assinaturas. Totalmente gratuito, sempre.",
    color: "#57A773",
  },
  {
    icon: Timer,
    title: "Rápido",
    description:
      "Em menos de 5 minutos você tem seu currículo pronto para enviar.",
    color: "var(--accent)",
  },
  {
    icon: TrendingUp,
    title: "Aumenta suas chances",
    description:
      "Um currículo bem estruturado pode aumentar em até 3x suas chances de ser chamado.",
    color: "var(--destructive)",
  },
]

export function Benefits() {
  return (
    <section id="beneficios" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que usar o Currículo Inteligente?
          </h2>
          <p className="text-muted-foreground text-lg">
            Vantagens que fazem a diferença na sua busca por emprego
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card
              key={benefit.title}
              className="border-border shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-card animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div
                  className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `color-mix(in srgb, ${benefit.color} 15%, transparent)` }}
                >
                  <benefit.icon
                    className="h-8 w-8"
                    style={{ color: benefit.color }}
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
