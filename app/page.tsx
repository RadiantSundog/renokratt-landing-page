import { ContactForm } from "./components/contact-form";
import { HeroSection } from "./components/hero-section";
import { TeamSection } from "./components/team-section";
import { Footer } from "./components/footer";
import { ValueProposition } from "./components/value-proposition";
import { InfoSection } from "./components/info-section";
import { DemoSection } from "./components/demo-section";
import { PartnersSection } from "./components/partners-section";

export default function HomePage() {
  return (
    <main className="min-h-screen p-8">
      <HeroSection />
      <InfoSection />
      <ValueProposition />
      <DemoSection />
      <TeamSection />
      <ContactForm />
      <PartnersSection />
      <Footer />
    </main>
  );
}
