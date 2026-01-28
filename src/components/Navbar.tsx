import { Sparkles } from "lucide-react";

const Navbar = () => {
  return (
    <nav>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl dark:text-white text-zinc-900 tracking-tight">
            AI Sass
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <a
            href="#features"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            Features
          </a>
          <a
            href="#comparison"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            Results
          </a>
          <a
            href="#faq"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            FAQ
          </a>
        </div>
        <button className="px-5 py-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full text-sm font-bold hover:opacity-90 transition-opacity">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
