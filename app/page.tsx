import { ContactForm } from "./components/contact-form";
import { ServicesSection } from "./components/services-section";
import { HeroSection } from "./components/hero-section";
import { PricingSection } from "./components/pricing-section";
import { TeamSection } from "./components/team-section";
import { Footer } from "./components/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen pt-16">
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <TeamSection />
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
            Get in Touch
          </h2>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}