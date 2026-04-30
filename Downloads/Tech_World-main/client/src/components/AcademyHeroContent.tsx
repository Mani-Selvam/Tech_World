import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { AcademyStats, StatItem } from "./AcademyStats";
import { Users, TrendingUp } from "lucide-react";

interface AcademyHeroContentProps {
  animationsEnabled: boolean;
  onWorkshopClick: () => void;
  onConsultationClick: () => void;
  stats?: StatItem[];
}

const DEFAULT_STATS: StatItem[] = [
  { icon: Users, number: "5000+", label: "Active Students" },
  { icon: TrendingUp, number: "95%", label: "Success Rate" },
  { icon: Zap, number: "4.5K", label: "Tutors" },
];

/**
 * Hero section left side content
 * Contains headline, description, CTA buttons, and stats
 */
export function AcademyHeroContent({
  animationsEnabled,
  onWorkshopClick,
  onConsultationClick,
  stats = DEFAULT_STATS,
}: AcademyHeroContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={animationsEnabled ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="space-y-10">
      {/* Accent Line */}
      <motion.div
        initial={{ width: 0 }}
        animate={animationsEnabled ? { width: 120 } : { width: 120 }}
        transition={animationsEnabled ? { duration: 0.8, delay: 0.05 } : { duration: 0 }}
        className="h-1.5 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full"
      />

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={animationsEnabled ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
        transition={animationsEnabled ? { duration: 0.6, delay: 0.1 } : { duration: 0 }}
        className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/30 to-cyan-600/20 border border-purple-400/50 backdrop-blur-md shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
        {animationsEnabled && (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity }}>
            <Zap className="w-4 h-4 text-purple-300" />
          </motion.div>
        ) || <Zap className="w-4 h-4 text-purple-300" />}
        <span className="text-xs font-bold text-transparent bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text uppercase tracking-widest">
          TECHARA ACADEMY
        </span>
      </motion.div>

      {/* Headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={animationsEnabled ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
        transition={animationsEnabled ? { duration: 0.8, delay: 0.2 } : { duration: 0 }}
        className="space-y-6">
        <h1 className="text-5xl sm:text-6xl lg:text-5xl xl:text-6xl font-black leading-tight tracking-tight">
          <span className="block text-white mb-3">Master Blockchain</span>
          <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent pb-3">
            In 3 Months
          </span>
          <span className="block text-gray-300 text-xl sm:text-2xl font-medium">Learn from industry pioneers</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-300 max-w-xl leading-relaxed font-medium opacity-90">
          India's first all-in-one blockchain academy with live projects, real-world applications, and certified instruction from Web3 experts
        </p>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={animationsEnabled ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
        transition={animationsEnabled ? { duration: 0.8, delay: 0.3 } : { duration: 0 }}
        className="flex flex-col sm:flex-row gap-4 pt-4">
        <motion.button
          onClick={onWorkshopClick}
          whileHover={animationsEnabled ? { scale: 1.05, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)" } : {}}
          whileTap={animationsEnabled ? { scale: 0.95 } : {}}
          className="px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 via-purple-600 to-purple-700 hover:shadow-2xl transition-all duration-300 shadow-lg text-center">
          Enroll in Workshop
        </motion.button>
        <motion.button
          onClick={onConsultationClick}
          whileHover={animationsEnabled ? { scale: 1.05, borderColor: "#60a5fa", backgroundColor: "rgba(30, 58, 138, 0.4)" } : {}}
          whileTap={animationsEnabled ? { scale: 0.95 } : {}}
          className="px-8 py-4 rounded-xl font-bold text-gray-100 border-2 border-gray-500 hover:border-blue-400 hover:bg-blue-950/30 transition-all duration-300 backdrop-blur-sm text-center">
          Book Consultation
        </motion.button>
      </motion.div>

      {/* Stats */}
      <AcademyStats stats={stats} animationsEnabled={animationsEnabled} />
    </motion.div>
  );
}
