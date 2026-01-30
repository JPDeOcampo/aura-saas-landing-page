import SectionHeader from "./ui/SectionHeader";

const HowItWorksSection = () => {
  return (
    <section
      id="how-it-works"
      className="py-24 px-6 border-y border-zinc-100 dark:border-zinc-900"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          header="Three Steps to Perfection"
          desc="From messy drafts to professional masterpieces."
        />
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              step: "01",
              title: "Input Content",
              desc: "Paste your raw notes, draft, or rough ideas into our intuitive editor.",
            },
            {
              step: "02",
              title: "AI Processing",
              desc: "Our neural networks analyze context, tone, and structure in real-time.",
            },
            {
              step: "03",
              title: "Final Polish",
              desc: "Receive professional, ready-to-use content tailored to your needs.",
            },
          ].map((item, index) => (
            <div key={index} className="group relative">
              <div className="text-7xl font-black text-purple-500/10 dark:text-purple-500/5 absolute -top-10 -left-4 transition-colors group-hover:text-purple-500/20">
                {item.step}
              </div>
              <h3 className="text-2xl font-bold mb-3 dark:text-zinc-100 text-zinc-800 relative z-10">
                {item.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed relative z-10">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
