import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PricingCards from "@/components/PricingCards";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <PricingCards />
      <Footer />
    </div>
  );
};

export default Index;
