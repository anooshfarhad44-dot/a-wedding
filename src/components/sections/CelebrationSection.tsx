"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Flower2, Heart, Sparkles } from "lucide-react";
import { fadeUp, stagger } from "../lib/animations";
import { eventDays } from "../lib/constants";
import SectionHeading from "../ui/SectionHeading";

const iconMap = {
  Flower2,
  Heart,
  Sparkles,
};

function getEventDate(dayLabel: string) {
  const year = new Date().getFullYear();
  return new Date(`${dayLabel} ${year} 00:00:00`);
}

function formatCountdown(target: Date, now: Date) {
  const diff = target.getTime() - now.getTime();
  if (diff <= 0) {
    return "Started";
  }

  const totalSeconds = Math.max(0, Math.floor(diff / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

export default function CelebrationSection() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <motion.section
      id="celebration"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={stagger}
      className="px-6 py-16 sm:px-10 lg:px-16"
    >
      <SectionHeading
        eyebrow="Celebration"
        title="A Three-Day Wedding Story"
        description="Every section of the page is designed to feel festive, luminous, and alive, with rich motion, maroon elegance, and a romantic wedding atmosphere."
      />

      <div className="mx-auto mt-14 grid max-w-7xl gap-6 lg:grid-cols-3">
        {eventDays.map((item) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap];

          return (
            <motion.article
              key={item.day}
              variants={fadeUp}
              whileHover={{ y: -10, scale: 1.01 }}
              className="glass-panel group relative overflow-hidden rounded-[2rem] p-8"
            >
              <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-[#e7c181]/8 blur-3xl transition duration-500 group-hover:bg-[#8f2037]/18" />
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f3c790]/12 text-[#ffd8a4]">
                  <Icon className="h-7 w-7" />
                </div>
                <span className="text-xs uppercase tracking-[0.45em] text-[#d7b7a8]">
                  {item.day}
                </span>
              </div>
              <h3 className="section-title mt-8 text-3xl tracking-[0.08em] text-[#fff3e8] [@media(max-width:400px)]:[font-size:20px] [@media(max-width:400px)]:mt-5 [@media(max-width:400px)]:tracking-[0.05em]">
  {item.title}
</h3>
              <p className="mt-4 text-sm leading-7 text-[#ead1c5]">
                {item.detail}
              </p>
              {/* TIME LEFT BADGE */}
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#ffffff]/10
  px-4 py-2 text-xs uppercase tracking-[0.35em] text-[#f5e6d3] 
  [@media(max-width:400px)]:[font-size:10px] [@media(max-width:400px)]:tracking-[0.15em] [@media(max-width:400px)]:px-2">

                <span>Time left</span>

                <span className="rounded-full bg-[#e7c181]/15 px-3 py-1 font-semibold text-[#f7e1d4] [@media(max-width:400px)]:[font-size:10px]">
                  {formatCountdown(getEventDate(item.day), now)}
                </span>
              </div>
            </motion.article>
          );
        })}
      </div>
    </motion.section>
  );
}
