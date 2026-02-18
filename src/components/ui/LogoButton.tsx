import { Sparkles } from "lucide-react";

const LogoButton = () => {
  return (
    <div className="flex items-center gap-2">
      <button
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
          AURA
        </span>
      </button>
    </div>
  );
};

export default LogoButton;
