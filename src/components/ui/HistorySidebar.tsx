import { motion, AnimatePresence } from "framer-motion";
import { History, X, MessageSquare, Clock, Trash2 } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { selectAIHistory } from "../../redux/Selectors";
import { setPrompt, clearHistory } from "../../redux/slices/aiSlice";

interface HistorySidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const HistorySidebar = ({ isOpen, onClose }: HistorySidebarProps) => {
  const dispatch = useAppDispatch();
  const history = useAppSelector(selectAIHistory);

  const handleSelectHistory = (item: { prompt: string; response: string }) => {
    dispatch(setPrompt(item.prompt));
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          />

          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="fixed left-0 top-0 bottom-0 w-80 bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 z-50 shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <History className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h2 className="font-bold text-zinc-900 dark:text-zinc-100">
                  History
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-zinc-500" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {history.length === 0 ? (
                <div className="text-center py-10 opacity-50">
                  <Clock className="w-10 h-10 mx-auto mb-2" />
                  <p className="text-sm">No history yet</p>
                </div>
              ) : (
                history.map((item) => (
                  <motion.button
                    key={item.timestamp}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleSelectHistory(item)}
                    className="w-full text-left p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 hover:border-purple-500/50 transition-all group"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <MessageSquare className="w-3 h-3 text-purple-500" />
                      <span className="text-[10px] uppercase font-bold text-zinc-400">
                        Prompt
                      </span>
                    </div>
                    <p className="text-sm text-zinc-700 dark:text-zinc-300 line-clamp-2 leading-snug">
                      {item.prompt}
                    </p>
                  </motion.button>
                ))
              )}
            </div>

            {history.length > 0 && (
              <div className="p-4 border-t border-zinc-100 dark:border-zinc-800">
                <button
                  onClick={() => dispatch(clearHistory())}
                  className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-xl transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  Clear All History
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default HistorySidebar;
