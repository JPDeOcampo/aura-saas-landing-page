import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  delay = 0,
}: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      <div className="absolute -inset-0.5 bg-linear-to-r from-purple-600 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-20 dark:group-hover:opacity-40 transition duration-500" />

      <div className="relative h-full bg-white/80 dark:bg-zinc-900/50 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 group-hover:border-purple-500/50 dark:group-hover:border-purple-400/50 rounded-2xl p-6 transition-all duration-300 shadow-sm hover:shadow-xl dark:shadow-none">
        <motion.div
          whileHover={{ rotate: 12, scale: 1.1 }}
          className="w-12 h-12 bg-linear-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-purple-500/20"
        >
          <Icon className="w-6 h-6 text-white" />
        </motion.div>

        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
          {title}
        </h3>

        <p className="text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors leading-relaxed">
          {description}
        </p>

        <div className="mt-4 w-8 h-1 bg-zinc-200 dark:bg-zinc-800 rounded-full group-hover:w-16 group-hover:bg-purple-500 transition-all duration-300" />
      </div>
    </motion.div>
  );
};

export default FeatureCard;
