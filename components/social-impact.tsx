"use client"

import { Heart, Users, Code } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const impacts = [
  {
    icon: Users,
    title: "Ajuda a Comunidade",
    description:
      "Oferecemos uma ferramenta gratuita que beneficia jovens de todas as classes sociais, especialmente aqueles que não têm acesso a recursos profissionais.",
  },
  {
    icon: Heart,
    title: "Promove Inclusão",
    description:
      "Democratizamos o acesso a oportunidades de emprego, ajudando a reduzir desigualdades no mercado de trabalho.",
  },
  {
    icon: Code,
    title: "Tecnologia para o Bem",
    description:
      "Utilizamos tecnologia de forma responsável para criar impacto social positivo e transformar vidas através da educação.",
  },
]

export function SocialImpact() {
  return (
    <section id="impacto" className="py-20 bg-[#00072D] dark:bg-[#050a15]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 bg-[#57A773]/20 text-[#57A773] dark:text-[#6bc488] rounded-full text-sm font-medium mb-4">
            Impacto Social
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Transformando Vidas com Tecnologia
          </h2>
          <p className="text-white/70 text-lg">
            Mais do que um gerador de currículos, somos uma iniciativa de
            transformação social
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {impacts.map((impact, index) => (
            <Card
              key={impact.title}
              className="border-none bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-[#57A773]/20 flex items-center justify-center mb-6">
                  <impact.icon className="h-8 w-8 text-[#57A773] dark:text-[#6bc488]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {impact.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {impact.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quote */}
        <div className="max-w-2xl mx-auto mt-16 text-center">
          <blockquote className="text-xl md:text-2xl text-white/80 italic leading-relaxed">
            &ldquo;Acreditamos que todos merecem uma chance justa de entrar no mercado
            de trabalho, independentemente de sua origem ou condição
            social.&rdquo;
          </blockquote>
          <p className="text-[#FFC971] mt-4 font-medium">
            — Equipe Currículo Inteligente
          </p>
        </div>
      </div>
    </section>
  )
}
