import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}