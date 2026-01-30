import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PricingSection from "./components/PricingSection";
import HowItWorksSection from "./components/HowItWorksSection";
import FeatureSection from "./components/FeatureSection";
import UseCaseSection from "./components/UseCaseSection";
import ComparisonSection from "./components/ComparisonSection";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-linear-to-br from-purple-900/20 to-blue-900/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-linear-to-tl from-blue-900/20 to-purple-900/20 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_40%,transparent_100%)]" />
      <header className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/40 dark:bg-zinc-900/40">
        <Navbar />
      </header>
      <main className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300 selection:bg-purple-500/30">
        <HeroSection />
        <PricingSection />
        <HowItWorksSection />
        <FeatureSection />
        <ComparisonSection />
        <UseCaseSection />
        <FAQSection />
        <CTASection />
      </main>

      <footer className="relative py-6 px-6 border-t border-zinc-100 dark:border-zinc-900 z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <a
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => {
                window.scrollTo(0, 0);
                window.history.pushState(null, "", "/");
              }}
            >
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl dark:text-white text-zinc-900 tracking-tight">
                AURA
              </span>
            </a>
          </div>
          <div>
            <p className="text-zinc-500 dark:text-zinc-500 text-sm">
              © 2026 AURA.{" "}
              <a
                href="https://jpdeocampo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold hover:underline cursor-pointer"
              >
                Jonathan De Ocampo
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
