import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

const faqs = [
  {
    q: "Is my data used for training?",
    a: "No. We respect your privacy. Your data is processed in real-time and never used to train our public models.",
  },
  {
    q: "Does it support local languages?",
    a: "Yes, our AI is highly proficient in English and Taglish, perfect for users in the Philippines.",
  },
  {
    q: "Can I integrate this into my existing apps?",
    a: "Absolutely. We offer a robust API for seamless integration into your current workflow.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-24 px-6 border-t border-zinc-100 dark:border-zinc-900 bg-white dark:bg-black transition-colors"
    >
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          header="Frequently Asked Questions"
          desc="Everything you need to know about AURA."
        />

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = activeIndex === i;

            return (
              <div
                key={i}
                className={`group rounded-2xl border transition-all duration-300 overflow-hidden 
                  ${
                    isOpen
                      ? "border-purple-500 bg-purple-50/30 dark:bg-purple-900/10"
                      : "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50"
                  }`}
              >
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full flex justify-between items-center p-6 text-left cursor-pointer focus:outline-none z-10 relative"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-lg font-bold transition-colors ${isOpen ? "text-purple-600 dark:text-purple-400" : "text-zinc-900 dark:text-white"}`}
                  >
                    {faq.q}
                  </span>

                  <div
                    className={`shrink-0 ml-4 pointer-events-none p-1 rounded-full transition-all duration-300 ${isOpen ? "rotate-180 bg-purple-500 text-white" : "text-zinc-400"}`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                    >
                      <div className="px-6 pb-6 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
