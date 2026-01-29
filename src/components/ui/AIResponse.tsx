import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, AlertCircle, Copy, Check, Sparkles } from "lucide-react";
import { useAppSelector } from "../../hooks/useRedux";
import {
  selectAIResponse,
  selectAIStatus,
  selectAIError,
} from "../../redux/Selectors";

const AIResponse = () => {
  const response = useAppSelector(selectAIResponse);
  const status = useAppSelector(selectAIStatus);
  const error = useAppSelector(selectAIError);

  const [displayedText, setDisplayedText] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (status === "success" && response) {
      let index = 0;
      setDisplayedText("");

      const speed = response.length > 200 ? 10 : 25;

      const interval = setInterval(() => {
        if (index < response.length) {
          setDisplayedText(response.slice(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }
  }, [response, status]);

  const handleCopy = () => {
    if (!response) return;
    navigator.clipboard.writeText(response);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (status === "idle") return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="w-full max-w-4xl mx-auto mt-8 px-4"
    >
      <AnimatePresence mode="wait">
        {status === "loading" && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8"
          >
            <div className="flex flex-col items-center text-center gap-6">
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 bg-linear-to-tr from-purple-500 via-fuchsia-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl shadow-purple-500/20"
                >
                  <Bot className="w-8 h-8 text-white" />
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-purple-500 blur-xl rounded-full -z-10"
                />
              </div>

              <div className="space-y-2 w-full max-w-sm">
                <div className="h-2 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="h-full w-1/2 bg-linear-to-r from-transparent via-purple-500 to-transparent"
                  />
                </div>
                <p className="text-zinc-500 dark:text-zinc-400 font-medium animate-pulse">
                  Synthesizing intelligence...
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {status === "success" && (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="group relative bg-white dark:bg-zinc-900/80 backdrop-blur-2xl border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/30">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100 block">
                    AI Enhanced
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-zinc-500">
                    Ready to use
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="p-2 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg transition-colors relative"
                  title="Copy to clipboard"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4 text-zinc-500" />
                  )}
                </button>
              </div>
            </div>

            <div className="p-8">
              <div className="prose prose-zinc dark:prose-invert max-w-none">
                <div className="text-zinc-800 dark:text-zinc-200 leading-relaxed text-lg whitespace-pre-wrap font-medium">
                  {displayedText}
                  {displayedText.length < (response?.length || 0) && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity }}
                      className="inline-block w-1.5 h-5 bg-purple-500 ml-1 rounded-full align-middle"
                    />
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {status === "error" && (
          <motion.div
            key="error"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50 rounded-2xl p-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-red-100 dark:bg-red-900/50 rounded-xl flex items-center justify-center shrink-0">
                <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-red-900 dark:text-red-400">
                  Unable to generate
                </h3>
                <p className="text-red-700 dark:text-red-300/80 text-sm mt-1">
                  {error || "The AI encountered an issue. Please try again."}
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="mt-3 text-xs font-bold text-red-900 dark:text-red-400 underline underline-offset-4"
                >
                  Try Again
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AIResponse;
