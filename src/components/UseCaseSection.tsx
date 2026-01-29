import { Cpu, CheckCircle2 } from "lucide-react";

const UseCaseSection = () => {
  return (
    <section
      id="use-cases"
      className="py-24 px-6 bg-zinc-50/50 dark:bg-zinc-900/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 dark:text-white text-zinc-900">
              Tailored for every{" "}
              <span className="text-purple-600">workflow.</span>
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Content Creators",
                  text: "Turn bullet points into engaging blog posts and captions.",
                },
                {
                  title: "Business Professionals",
                  text: "Refine emails and reports for maximum executive impact.",
                },
                {
                  title: "Developers",
                  text: "Generate clean documentation and clear commit messages.",
                },
              ].map((useCase, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-purple-500/50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-purple-600 shrink-0" />
                    <div>
                      <h4 className="font-bold dark:text-white text-zinc-900">
                        {useCase.title}
                      </h4>
                      <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                        {useCase.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full aspect-video lg:aspect-square bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-3xl border border-purple-500/20 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent animate-pulse" />
            <Cpu className="w-32 h-32 text-purple-600/30 dark:text-purple-400/20" />
            <div className="absolute bottom-8 left-8 right-8 p-4 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md rounded-xl border border-white/20 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400">
                  System Status: Optimal - Processing 1.2M tokens/sec
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseSection;
