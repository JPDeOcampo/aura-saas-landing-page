import { motion } from "motion/react";
import { fadeInUp } from "../../utils/motion";

const SectionHeader = ({ header, desc }: { header: string; desc: string }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="text-center mb-24"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-white">
        {header}
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400">{desc}</p>
    </motion.div>
  );
};

export default SectionHeader;
