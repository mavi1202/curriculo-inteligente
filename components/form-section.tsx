"use client"

import { ExternalLink, Clock, Shield, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function FormSection() {
  return (
    <section id="criar" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                {/* Left side - Info */}
                <div className="bg-[#00072D] p-8 md:p-12 text-white">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Comece agora
                  </h2>
                  <p className="text-white/80 mb-8 leading-relaxed">
                    Preencha nosso formulário simples e receba seu currículo
                    profissional em minutos. Sem cadastro, sem complicação.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#57A773]/20 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-[#57A773]" />
                      </div>
                      <div>
                        <p className="font-medium">Rápido</p>
                        <p className="text-sm text-white/60">Apenas 5 minutos</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#FFC971]/20 flex items-center justify-center">
                        <Shield className="h-5 w-5 text-[#FFC971]" />
                      </div>
                      <div>
                        <p className="font-medium">Seguro</p>
                        <p className="text-sm text-white/60">Seus dados protegidos</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#19647E]/30 flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-[#3b9cb8]" />
                      </div>
                      <div>
                        <p className="font-medium">Gratuito</p>
                        <p className="text-sm text-white/60">100% sem custos</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side - CTA */}
                <div className="bg-card p-8 md:p-12 flex flex-col justify-center items-center text-center">
                  <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                    <ExternalLink className="h-10 w-10 text-accent" />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Pronto para começar?
                  </h3>
                  
                  <p className="text-muted-foreground mb-8">
                    Clique no botão abaixo para acessar o formulário e criar seu
                    currículo profissional.
                  </p>

                  <Button
                    asChild
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg px-10 py-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 w-full"
                  >
                    <a
                      href="COLOCAR_LINK_DO_FORM_AQUI"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Acessar Formulário
                      <ExternalLink className="ml-2 h-5 w-5" />
                    </a>
                  </Button>

                  <p className="text-xs text-muted-foreground mt-4">
                    Você será redirecionado para o Google Forms
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
