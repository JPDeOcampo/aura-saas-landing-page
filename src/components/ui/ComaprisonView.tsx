import { motion } from "framer-motion";
import {
  FileText,
  Sparkles,
  ArrowRight,
  ArrowDown,
  History,
  Zap,
} from "lucide-react";
import { useAppSelector } from "../../hooks/useRedux";
import {
  selectAIPrompt,
  selectAIResponse,
  selectHasResponse,
} from "../../redux/Selectors";

const ComparisonView = () => {
  const prompt = useAppSelector(selectAIPrompt);
  const response = useAppSelector(selectAIResponse);
  const hasResponse = useAppSelector(selectHasResponse);

  if (!hasResponse) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full max-w-6xl mx-auto mt-20 px-4 mb-24"
    >
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-500/10 mb-4">
          <History className="w-6 h-6 text-purple-500" />
        </div>
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
          The Transformation
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 max-w-md mx-auto">
          Comparing your original draft with the AI-optimized enhancement.
        </p>
      </div>

      <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 transition-colors"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-zinc-200 dark:bg-zinc-800 rounded-xl flex items-center justify-center">
                <FileText className="w-5 h-5 text-zinc-500 dark:text-zinc-400" />
              </div>
              <h3 className="font-bold text-zinc-700 dark:text-zinc-300">
                Original
              </h3>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 bg-zinc-200/50 dark:bg-zinc-800 px-2 py-1 rounded">
              Draft
            </span>
          </div>

          <div className="flex-1 text-zinc-500 dark:text-zinc-400 leading-relaxed italic text-sm md:text-base">
            "{prompt}"
          </div>
        </motion.div>

        <div className="flex md:flex-col items-center justify-center py-12 md:py-0 relative min-w-20">
          <div
            className="hidden md:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 z-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent, var(--line-color, #e4e4e7), transparent)",
            }}
          >
            <div className="w-full h-full bg-linear-to-b from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" />
          </div>

          <div className="md:hidden absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 z-0">
            <div className="w-full h-full bg-linear-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent" />
          </div>

          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-12 h-12 bg-linear-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-xl shadow-purple-500/20 border-4 border-white dark:border-zinc-950"
          >
            <ArrowRight className="hidden md:block w-5 h-5 text-white" />
            <ArrowDown className="md:hidden w-5 h-5 text-white" />
          </motion.div>
        </div>


        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col bg-white dark:bg-zinc-900/60 border-2 border-purple-500/30 dark:border-purple-400/20 rounded-3xl p-8 relative overflow-hidden shadow-2xl shadow-purple-500/5"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl -z-10" />

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-600/20">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-purple-600 dark:text-purple-400 text-lg">
                Enhanced
              </h3>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-[10px] font-black uppercase tracking-tighter border border-purple-200 dark:border-purple-800">
              <Zap className="w-3 h-3 fill-current" />
              Better
            </div>
          </div>

          <div className="flex-1 text-zinc-900 dark:text-zinc-100 leading-relaxed text-sm md:text-base font-medium">
            {response}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ComparisonView;
