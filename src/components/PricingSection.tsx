import { motion } from "motion/react";
import { Check, Zap, Rocket, Star } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

const plans = [
  {
    name: "Spark",
    price: "0",
    description: "Perfect for exploring the possibilities.",
    features: ["10 AI Generations / day", "Standard speed", "Community access"],
    icon: <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
    buttonText: "Start for Free",
    featured: false,
  },
  {
    name: "Ignite",
    price: "12",
    description: "The power user’s choice for daily creation.",
    features: [
      "Unlimited Generations",
      "Turbo Mode processing",
      "Priority support",
      "Export to PDF",
    ],
    icon: <Rocket className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    buttonText: "Get Started",
    featured: true,
  },
  {
    name: "Supernova",
    price: "29",
    description: "Professional grade tools for big ideas.",
    features: [
      "Everything in Ignite",
      "Custom AI Training",
      "API Access",
      "White-labeling",
    ],
    icon: <Star className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
    buttonText: "Contact Sales",
    featured: false,
  },
];

const Pricing = () => {
  return (
    <section
      className="py-20 px-6 bg-white dark:bg-transparent transition-colors duration-300"
      id="pricing"
    >
      <div className="max-w-7xl mx-auto text-center mb-16">
        <SectionHeader
          header="  Choose Your Level of Intelligence"
          desc="Scale your project as your ideas grow"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className={`relative p-8 rounded-3xl border transition-all duration-300 ${
              plan.featured
                ? "bg-blue-50/50 dark:bg-white/10 border-blue-500/50 shadow-xl dark:shadow-[0_0_30px_-10px_rgba(59,130,246,0.5)]"
                : "bg-gray-50 dark:bg-black/40 border-gray-200 dark:border-white/10"
            } backdrop-blur-xl flex flex-col`}
          >
            {plan.featured && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Most Popular
              </span>
            )}

            <div className="mb-6">{plan.icon}</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {plan.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
              {plan.description}
            </p>

            <div className="mb-8">
              <span className="text-4xl font-bold text-gray-900 dark:text-white">
                ${plan.price}
              </span>
              <span className="text-gray-500 ml-2">/month</span>
            </div>

            <ul className="space-y-4 mb-8 grow">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center text-gray-700 dark:text-gray-300 text-sm"
                >
                  <Check className="w-4 h-4 mr-3 text-green-500 dark:text-green-400" />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3 rounded-xl font-semibold transition-all cursor-pointer ${
                plan.featured
                  ? "bg-linear-to-r from-blue-600 to-purple-600 text-white hover:saturate-150 shadow-lg"
                  : "bg-gray-200 dark:bg-white/5 text-gray-900 dark:text-white border border-gray-300 dark:border-white/10 hover:bg-gray-300 dark:hover:bg-white/10"
              }`}
            >
              {plan.buttonText}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
