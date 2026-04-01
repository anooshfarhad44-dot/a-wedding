import { motion } from "framer-motion";
import { fadeUp } from "../lib/animations";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      className="mx-auto max-w-3xl text-center"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.5em] text-[#e7c181]">
        {eyebrow}
      </p>
      <h2 className="section-title text-4xl font-semibold tracking-[0.08em] text-[#fff2e8] sm:text-5xl [@media(max-width:400px)]:[font-size:29px] [@media(max-width:400px)]:leading-tight">
        {title}
      </h2>
      <p className="mt-5 text-sm leading-7 text-[#ead2c6] sm:text-base">
        {description}
      </p>
    </motion.div>
  );
}
