import { useState } from "react";
import { motion } from "motion/react";
import { Zap, History } from "lucide-react";
import { fadeInUp } from "../utils/motion";
import PromptInput from "./ui/PromptInput";
import AIResponse from "./ui/AIResponse";
import ComparisonView from "./ui/ComaprisonView";
import HistorySidebar from "./ui/HistorySidebar";

const HeroSection = () => {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  return (
    <section className="pt-32 pb-20 px-6 overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto text-center relative">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-8"
          >
            <Zap className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
              Powered by Advanced AI
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            <span className="bg-linear-to-r from-zinc-900 via-zinc-700 to-zinc-500 dark:from-white dark:via-zinc-300 dark:to-zinc-500 bg-clip-text text-transparent">
              Turn Raw Thoughts into 
            </span>
            <br />
            <span className="bg-linear-to-r from-purple-600 via-blue-600 to-cyan-600 dark:from-purple-400 dark:via-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Polished Reality
            </span>
          </h1>

          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Experience the power of AI-driven enhancement. Transform your raw
            ideas into polished content in seconds.
          </p>

          {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-purple-600 text-white rounded-full font-bold text-lg hover:bg-purple-700 transition-all hover:scale-105 shadow-lg shadow-purple-500/25">
              Start Enhancing Now
            </button>
          </div> */}
          <div id="demo" className="pt-24">
            <PromptInput />
            <AIResponse />
            <ComparisonView />
          </div>
          {/* <button
            onClick={() => setIsHistoryOpen(true)}
            className="fixed bottom-6 left-6 p-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full shadow-xl hover:scale-110 transition-transform z-30"
          >
            <History className="w-6 h-6" />
          </button>

          <HistorySidebar
            isOpen={isHistoryOpen}
            onClose={() => setIsHistoryOpen(false)}
          /> */}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
