"use client"

import { useState, useEffect } from "react"
import { ShieldCheck, ExternalLink, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

const CONSENT_KEY = "curriculo-inteligente-consent"
const LGPD_URL =
  "https://www2.senado.leg.br/bdsf/bitstream/handle/id/658231/Lei_geral_protecao_dados_pessoais_1ed.pdf"

export function ConsentModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [accepted, setAccepted] = useState(false)
  const [linkClicked, setLinkClicked] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY)
    if (consent !== "true") {
      setIsOpen(true)
    }
  }, [])

  // Bloqueia o scroll do body enquanto o modal estiver aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const handleContinue = () => {
    if (!accepted) return
    localStorage.setItem(CONSENT_KEY, "true")
    setIsOpen(false)
  }

  const handleCancel = () => {
    // Volta o usuário para fora do site, ou mostra um aviso
    window.location.href = "https://www.google.com"
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#00072D]/70 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consent-title"
    >
      <div className="bg-card rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-300">
        <div className="p-6 md:p-8">
          {/* Ícone */}
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5 mx-auto">
            <ShieldCheck className="h-7 w-7 text-primary" />
          </div>

          <h2
            id="consent-title"
            className="text-xl md:text-2xl font-bold text-foreground text-center mb-4 text-balance"
          >
            Termo de Consentimento para Uso de Dados
          </h2>

          <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
            <p>
              Para utilizar esta plataforma, precisamos da sua autorização para
              coletar e utilizar as informações enviadas exclusivamente para
              criação e organização do currículo.
            </p>
            <p>
              Os dados enviados serão protegidos, utilizados apenas para fins
              deste projeto acadêmico e não serão compartilhados com terceiros.
            </p>
            <p>
              Ao continuar, você declara estar ciente e concorda com o uso dos
              dados conforme descrito.
            </p>
          </div>

          {/* Link para a LGPD */}
          <a
            href={LGPD_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setLinkClicked(true)}
            className="flex items-center justify-between gap-3 p-4 rounded-xl border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors mb-4"
          >
            <span className="text-sm font-medium text-primary leading-relaxed">
              Leia a Lei Geral de Proteção de Dados (LGPD)
            </span>
            {linkClicked ? (
              <CheckCircle2 className="h-5 w-5 text-[#57A773] dark:text-[#6bc488] shrink-0" />
            ) : (
              <ExternalLink className="h-5 w-5 text-primary shrink-0" />
            )}
          </a>

          {!linkClicked && (
            <p className="text-xs text-muted-foreground mb-4 text-center">
              É necessário abrir e ler a LGPD antes de continuar.
            </p>
          )}

          {/* Checkbox */}
          <label
            className={`flex items-start gap-3 p-4 rounded-xl bg-muted/60 mb-6 ${
              linkClicked ? "cursor-pointer" : "opacity-50 cursor-not-allowed"
            }`}
          >
            <Checkbox
              checked={accepted}
              onCheckedChange={(checked) => setAccepted(checked === true)}
              disabled={!linkClicked}
              className="mt-0.5"
              aria-label="Autorizo o uso dos meus dados"
            />
            <span className="text-sm text-foreground font-medium leading-relaxed">
              Li e autorizo o uso dos meus dados para este projeto.
            </span>
          </label>

          {/* Botões */}
          <div className="flex flex-col-reverse sm:flex-row gap-3">
            <Button
              variant="outline"
              onClick={handleCancel}
              className="flex-1 border-border text-foreground hover:bg-muted font-semibold"
            >
              Cancelar
            </Button>
            <Button
              onClick={handleContinue}
              disabled={!accepted}
              className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continuar
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
