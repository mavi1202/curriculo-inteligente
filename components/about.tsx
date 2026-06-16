"use client"

import { Target, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="sobre" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sobre o Projeto
          </h2>
          <p className="text-muted-foreground text-lg">
            Uma iniciativa de impacto social para transformar oportunidades
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-border shadow-lg hover:shadow-xl transition-shadow bg-card animate-in fade-in slide-in-from-left-4 duration-500">
            <CardContent className="p-8">
              <div className="w-14 h-14 bg-destructive/10 rounded-2xl flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-destructive" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">O Problema</h3>
              <p className="text-muted-foreground leading-relaxed">
                Muitos jovens enfrentam dificuldades para conseguir seu primeiro
                emprego porque não sabem como criar um currículo adequado. A falta
                de orientação e acesso a ferramentas profissionais cria uma
                barreira significativa para a entrada no mercado de trabalho.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border shadow-lg hover:shadow-xl transition-shadow bg-card animate-in fade-in slide-in-from-right-4 duration-500">
            <CardContent className="p-8">
              <div className="w-14 h-14 bg-[#57A773]/10 rounded-2xl flex items-center justify-center mb-6">
                <Lightbulb className="h-7 w-7 text-[#57A773] dark:text-[#6bc488]" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">A Solução</h3>
              <p className="text-muted-foreground leading-relaxed">
                Criamos um sistema digital guiado que ajuda jovens a montar seu
                currículo passo a passo. Com perguntas simples e um processo
                intuitivo, transformamos informações básicas em um documento
                profissional pronto para impressionar recrutadores.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
