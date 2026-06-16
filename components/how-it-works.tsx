"use client"

import { ClipboardList, Settings, FileCheck, Download } from "lucide-react"

const steps = [
  {
    icon: ClipboardList,
    title: "Preencha o formulário",
    description: "Responda perguntas simples sobre você, sua educação e habilidades.",
    color: "var(--primary)",
  },
  {
    icon: Settings,
    title: "Organizamos suas informações",
    description: "Nosso sistema estrutura seus dados de forma profissional.",
    color: "var(--accent)",
  },
  {
    icon: FileCheck,
    title: "Geramos seu currículo",
    description: "Criamos um documento limpo e pronto para o mercado de trabalho.",
    color: "#57A773",
  },
  {
    icon: Download,
    title: "Você recebe pronto para usar",
    description: "Baixe seu currículo em PDF e comece a se candidatar!",
    color: "var(--destructive)",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como Funciona
          </h2>
          <p className="text-muted-foreground text-lg">
            Em apenas 4 passos simples, você terá seu currículo profissional
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative text-center animate-in fade-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
                )}

                <div
                  className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                  style={{ backgroundColor: `color-mix(in srgb, ${step.color} 15%, transparent)` }}
                >
                  <step.icon className="h-9 w-9" style={{ color: step.color }} />
                </div>

                <div 
                  className="w-8 h-8 mx-auto -mt-3 mb-4 rounded-full bg-card border-2 flex items-center justify-center text-sm font-bold shadow-sm"
                  style={{ borderColor: step.color, color: step.color }}
                >
                  {index + 1}
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
