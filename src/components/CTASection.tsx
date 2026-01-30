import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 px-6 text-center overflow-hidden">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto py-20 px-8 rounded-[2.5rem] bg-zinc-900 dark:bg-zinc-900/40 border border-zinc-800 dark:border-white/10 text-white overflow-hidden relative"
      >
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [0, 20, 0],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -top-20 -right-20 w-96 h-96 bg-purple-600/30 blur-[100px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.3, 0.1],
              x: [0, -30, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
            className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-600/20 blur-[100px]"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-200">
              Available Now
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-[1.1]">
            Ready to amplify <br />
            <span className="bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              your intelligence?
            </span>
          </h2>

          <p className="text-zinc-400 mb-10 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Join thousands of professionals utilizing AI to streamline their
            workflow and boost productivity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <button className="group relative flex items-center gap-2 px-10 py-5 bg-linear-to-r from-purple-600 to-blue-600 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/40 transition-all active:scale-95 cursor-pointer">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
