"use client"

import { ArrowRight, Sparkles, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { curriculosCriados, metaCurriculos } from "@/lib/config"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#57A773]/10 text-[#57A773] dark:text-[#6bc488] px-4 py-2 rounded-full mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">100% Gratuito</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-balance animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
            Crie seu currículo de forma{" "}
            <span className="text-primary">simples</span> e{" "}
            <span className="text-primary">rápida</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
            Ajudamos jovens a conquistar seu primeiro emprego com um currículo
            profissional e bem estruturado. Sem complicação, sem custo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
            >
              <a href="#criar">
                Criar meu currículo
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/5 font-semibold text-lg px-8 py-6"
            >
              <a href="#como-funciona">Como funciona</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-primary">
                {curriculosCriados}+
              </p>
              <p className="text-sm text-muted-foreground">Currículos criados</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-[#57A773] dark:text-[#6bc488]">5 min</p>
              <p className="text-sm text-muted-foreground">Tempo médio</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-accent">100%</p>
              <p className="text-sm text-muted-foreground">Gratuito</p>
            </div>
          </div>

          {/* Meta atual */}
          <div className="mt-8 flex justify-center animate-in fade-in zoom-in-95 duration-700 delay-700">
            <div className="inline-flex items-center gap-3 bg-[#57A773]/10 border border-[#57A773]/30 px-5 py-3 rounded-2xl shadow-sm">
              <div className="w-9 h-9 rounded-full bg-[#57A773]/20 flex items-center justify-center shrink-0">
                <Target className="h-5 w-5 text-[#57A773] dark:text-[#6bc488]" />
              </div>
              <p className="text-sm md:text-base font-semibold text-[#57A773] dark:text-[#6bc488]">
                Meta atual: {metaCurriculos} currículos produzidos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
