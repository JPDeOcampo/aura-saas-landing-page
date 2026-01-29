import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const aClass =
    "hover:text-purple-600 dark:hover:text-purple-400 transition-colors";

  const menuItems = [
    { label: "How It Works", path: "#how-it-works" },
    { label: "Features", path: "#features" },
    { label: "Results", path: "#comparison" },
    { label: "FAQ", path: "#faq" },
    { label: "Demo", path: "#demo" },
  ];

  const getStartedButton = () => {
    return (
      <button className="px-5 py-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full text-sm font-bold hover:opacity-90 transition-opacity cursor-pointer">
        Get Started
      </button>
    );
  };

  return (
    <nav>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
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
            AI Sass
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <ul className="flex gap-4">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a href={item.path} className={aClass} aria-label={item.label}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {getStartedButton()}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="p-4 md:hidden border-t border-zinc-200 dark:border-zinc-800 overflow-hidden"
          >
            <ul className="pb-4 space-y-3">
              {menuItems.map((item, index) => (
                <li key={item.path}>
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`block font-medium text-zinc-600 dark:text-zinc-400`}
                    onClick={(e) => {
                      e.preventDefault();

                      setIsMenuOpen(false);

                      const target = document.querySelector(item.path);
                      const navHeight = 64;

                      setTimeout(() => {
                        if (target) {
                          const y =
                            target.getBoundingClientRect().top +
                            window.pageYOffset -
                            navHeight;

                          window.scrollTo({ top: y, behavior: "smooth" });
                          window.history.pushState(null, "", item.path);
                        }
                      }, 0);
                    }}
                  >
                    {item.label}
                  </motion.span>
                </li>
              ))}
            </ul>
            {getStartedButton()}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
