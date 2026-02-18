import { motion } from "motion/react";
import { Sparkles, Zap, MessageSquare } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

const ComparisonSection = () => {
  return (
    <section
      id="comparison"
      className="py-24 px-6 bg-zinc-50/50 dark:bg-zinc-900/20"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          header="See the Difference"
          desc=" Watch as raw notes turn into professional copy instantly."
        />

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <motion.div
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-4 text-zinc-400">
              <MessageSquare className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest">
                Your Input
              </span>
            </div>
            <p className="text-zinc-500 italic dark:text-zinc-400">
              "hey team i think we need to like change the way we do our
              marketing because it is too slow and i want more users by next
              month maybe use ai?"
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl border border-purple-500/30 bg-purple-50/50 dark:bg-purple-900/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4">
              <Sparkles className="w-5 h-5 text-purple-500 animate-pulse" />
            </div>
            <div className="flex items-center gap-2 mb-4 text-purple-600">
              <Zap className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest">
                AI Enhanced
              </span>
            </div>
            <p className="text-zinc-800 dark:text-zinc-200 font-medium">
              "To optimize our growth trajectory, we should integrate AI-driven
              marketing automation. This will streamline our pipeline and
              accelerate user acquisition by 25% by next month."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
