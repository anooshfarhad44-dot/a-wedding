"use client";

import { motion } from "framer-motion";

export default function ClosingSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="px-6 pb-24 pt-10 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-5xl rounded-[2.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(125,25,48,0.68),rgba(59,14,24,0.8))] px-8 py-14 text-center shadow-[0_30px_100px_rgba(10,2,4,0.34)]">

        <p className="text-xs uppercase tracking-[0.55em] text-[#e7c181]">
          With Love & Gratitude
        </p>

        <h2 className="section-title mt-5 text-4xl tracking-[0.08em] text-[#fff2e8] sm:text-5xl [@media(max-width:400px)]:[font-size:24px] [@media(max-width:400px)]:leading-[1.2]">
          We Look Forward to Celebrating With You
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-[#ead1c5] sm:text-base">
          Your presence will truly add joy and warmth to our special day.
          We are excited to share these beautiful moments with our
          family and friends as we begin a new journey together.
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-[#e7c181] sm:text-base">
          May this occasion be filled with happiness, love, and countless
          blessings for everyone joining us.
        </p>

      </div>
    </motion.section>
  );
}