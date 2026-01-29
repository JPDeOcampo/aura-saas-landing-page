import {
  Zap,
  Sparkles,
  Shield,
  Layers,
  BarChart,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Get AI-enhanced results in seconds with our optimized processing pipeline and real-time response system.",
  },
  {
    icon: Sparkles,
    title: "Smart Enhancement",
    description:
      "Advanced algorithms analyze and improve your content with context-aware suggestions and optimizations.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description:
      "Your data is encrypted and never stored. We prioritize your privacy with enterprise-grade security.",
  },
  {
    icon: Layers,
    title: "Multi-Purpose",
    description:
      "Perfect for content creation, copywriting, brainstorming, and professional communication needs.",
  },
  {
    icon: BarChart,
    title: "Analytics Driven",
    description:
      "Track improvements and optimize your workflow with detailed insights and performance metrics.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Learning",
    description:
      "Our AI models improve over time, learning from patterns to provide even better results.",
  },
];
