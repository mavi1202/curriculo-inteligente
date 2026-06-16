import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { HowItWorks } from "@/components/how-it-works"
import { FormSection } from "@/components/form-section"
import { Benefits } from "@/components/benefits"
import { SampleResume } from "@/components/sample-resume"
import { SocialImpact } from "@/components/social-impact"
import { DataProtection } from "@/components/data-protection"
import { Footer } from "@/components/footer"
import { ConsentModal } from "@/components/consent-modal"

export default function Home() {
  return (
    <main className="min-h-screen">
      <ConsentModal />
      <Header />
      <Hero />
      <About />
      <HowItWorks />
      <Benefits />
      <SampleResume />
      <FormSection />
      <SocialImpact />
      <DataProtection />
      <Footer />
    </main>
  )
}
