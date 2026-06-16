"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function SampleResume() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Exemplo de Currículo
          </h2>
          <p className="text-muted-foreground text-lg">
            Veja como seu currículo ficará: limpo, profissional e organizado
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-primary/20 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-500">
            <CardContent className="p-0">
              {/* Header */}
              <div className="bg-primary text-primary-foreground p-8 text-center">
                <h3 className="text-3xl font-bold mb-2">Maria Silva Santos</h3>
                <p className="text-primary-foreground/80">Candidata ao Primeiro Emprego</p>
              </div>

              {/* Content */}
              <div className="p-8 space-y-6 bg-card">
                {/* Contact */}
                <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground pb-6 border-b border-border">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <span>maria.santos@email.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <span>(11) 99999-9999</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>São Paulo, SP</span>
                  </div>
                </div>

                {/* Objective */}
                <div>
                  <h4 className="text-lg font-bold text-primary mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    Objetivo Profissional
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Busco minha primeira oportunidade no mercado de trabalho,
                    onde possa desenvolver minhas habilidades e contribuir com
                    dedicação e vontade de aprender.
                  </p>
                </div>

                {/* Education */}
                <div>
                  <h4 className="text-lg font-bold text-primary mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    Formação Acadêmica
                  </h4>
                  <div className="text-muted-foreground">
                    <p className="font-medium text-foreground">
                      Ensino Médio Completo
                    </p>
                    <p>Escola Estadual Professor João da Silva</p>
                    <p className="text-sm">Conclusão: 2024</p>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    Habilidades
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Pacote Office",
                      "Comunicação",
                      "Trabalho em equipe",
                      "Organização",
                      "Proatividade",
                      "Inglês Básico",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Courses */}
                <div>
                  <h4 className="text-lg font-bold text-primary mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    Cursos Complementares
                  </h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Informática Básica - SENAC (2023)</li>
                    <li>• Comunicação Empresarial - Online (2024)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <p className="text-center text-muted-foreground mt-6 text-sm">
            * Este é apenas um exemplo ilustrativo
          </p>
        </div>
      </div>
    </section>
  )
}
