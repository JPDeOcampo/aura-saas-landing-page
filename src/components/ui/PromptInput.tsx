import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Send, Command } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { setPrompt, generateAIResponse } from "../../redux/slices/aiSlice";
import { selectAIPrompt, selectIsLoading } from "../../redux/Selectors";

const PromptInput = () => {
  const dispatch = useAppDispatch();
  const prompt = useAppSelector(selectAIPrompt);
  const isLoading = useAppSelector(selectIsLoading);
  const [localValue, setLocalValue] = useState(prompt);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [localValue]);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (localValue.trim() && !isLoading) {
      dispatch(setPrompt(localValue));
      dispatch(generateAIResponse(localValue));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-4xl mx-auto px-4"
    >
      <form onSubmit={handleSubmit} className="relative group">
        <div
          className={`absolute -inset-1 bg-linear-to-r from-purple-600 via-fuchsia-500 to-blue-600 rounded-2xl blur-lg transition-all duration-500 
          ${isLoading ? "opacity-40 animate-pulse" : "opacity-20 group-hover:opacity-40"}`}
        />

        <div className="relative bg-white/80 dark:bg-zinc-900/90 backdrop-blur-2xl rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-2xl transition-colors">
          <div className="p-4 md:p-6">
            <div className="flex items-start gap-4">
              <div className="relative shrink-0">
                <motion.div
                  animate={isLoading ? { rotate: 360 } : {}}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="w-10 h-10 bg-linear-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20"
                >
                  <Sparkles className="w-5 h-5 text-white" />
                </motion.div>
                {isLoading && (
                  <span className="absolute inset-0 rounded-xl bg-purple-500 animate-ping opacity-20" />
                )}
              </div>

              <div className="flex-1 pt-1">
                <textarea
                  ref={textareaRef}
                  value={localValue}
                  onChange={(e) => setLocalValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask me to rewrite a pitch, optimize code, or brainstorm ideas..."
                  disabled={isLoading}
                  rows={1}
                  className="w-full bg-transparent text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 resize-none focus:outline-none text-lg min-h-10 max-h-100 transition-all"
                />
              </div>
            </div>

            <div className="flex items-center justify-between mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
              <div className="hidden md:flex items-center gap-2 text-xs text-zinc-400 font-medium">
                <div className="flex items-center gap-1 bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-700">
                  <Command className="w-3 h-3" />
                  <span>Enter</span>
                </div>
                <span>to enhance</span>
              </div>

              <motion.button
                type="submit"
                disabled={!localValue.trim() || isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative overflow-hidden px-6 py-2.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl font-bold flex items-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-xl shadow-black/5 dark:shadow-white/5"
              >
                <AnimatePresence mode="wait">
                  {isLoading ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      <span className="text-sm">Analyzing...</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="idle"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span className="text-sm">Enhance</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default PromptInput;
