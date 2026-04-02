"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Heart, Sparkles, ArrowRight } from "lucide-react";

function cleanPhone(phone: string) {
  return phone.replace(/\D/g, "");
}

function openWhatsApp(phone: string) {
  const cleaned = cleanPhone(phone);
  window.open(`https://wa.me/92${cleaned.slice(1)}`, "_blank");
}

function makePhoneCall(phone: string) {
  const cleaned = cleanPhone(phone);
  window.open(`tel:${cleaned}`);
}

function getWeddingDate() {
  const now = new Date();
  return new Date(now.getFullYear(), 4, 14, 0, 0, 0); // May 14, 2025
}

function formatCountdown(target: Date, now: Date) {
  const diff = target.getTime() - now.getTime();
  if (diff <= 0) return "Wedding Started";

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
}

export default function InvitationCard({ onOpen }: { onOpen: () => void }) {
  const [mounted, setMounted] = useState(false);
  const [countdown, setCountdown] = useState("Loading...");
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    setMounted(true);
    setCountdown(formatCountdown(getWeddingDate(), new Date()));

    const timer = setInterval(() => {
      setCountdown(formatCountdown(getWeddingDate(), new Date()));
    }, 1000);

    const checkScreen = () => {
      setIsSmallScreen(window.innerWidth < 400);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => {
      clearInterval(timer);
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  const references = [
    { name: "Younas Salik", phone: "03379710671", title: "Father" },
    { name: "Sharoon Younas", phone: "03358421547", title: "Brother" },
    { name: "Imram Younas", phone: "03334799715", title: "Brother" },
    { name: "Sagar Younas", phone: "03422311234", title: "Brother" },
    { name: "Faisal Waris", phone: "03418866251", title: "Uncle" }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative flex min-h-screen items-center justify-center px-4 py-10 bg-transparent"
    >
      <motion.div
        role="button"
        tabIndex={0}
        onClick={onOpen}
        whileHover={{ scale: 1.01, y: -6 }}
        whileTap={{ scale: 0.98 }}
        className="group relative w-full max-w-5xl rounded-[2rem] cursor-pointer"
      >
        <div className="glass-panel relative overflow-hidden rounded-[2rem] border border-white/10 px-6 py-8 shadow-[0_30px_80px_rgba(90,29,42,0.35)]">

          {/* HEADER */}
          <div className="flex justify-between items-center border-b border-white/10 pb-4">
            <div className={`text-xs tracking-[0.4em] uppercase text-[#f1d2ab] ${isSmallScreen ? "text-[9px] tracking-[0.3em]" : ""}`}>
              {isSmallScreen ? (
                <>
                  Wedding Invitation<br />
                  <button 
                    className="mt-1 px-2 py-1 bg-[#ffd700] text-[#5a1d2a] rounded-full text-[8px] font-semibold hover:bg-[#ffed4e] transition-colors"
                  >
                    Click To Open
                  </button>
                </>
              ) : (
                "Wedding Invitation"
              )}
            </div>

            <div className={`flex items-center gap-2 ${isSmallScreen ? "flex-col gap-1" : ""}`}>
              {!isSmallScreen && (
                <span className="text-xs tracking-[0.4em] uppercase text-[#ead2c6]">
                  Click To Open
                </span>
              )}
              <span className={`text-xs tracking-[0.4em] text-[#ead2c6] ${isSmallScreen ? "text-[9px] gap-1 tracking-[0.3em]" : ""}`}>
                <Sparkles size={isSmallScreen ? 8 : 12} />
                {!isSmallScreen && ""}
              </span>
            </div>
          </div>

          {/* TITLE */}
          <div className={`mt-10 text-center ${isSmallScreen ? "mt-6" : ""}`}>
            <p className={`text-xs tracking-[0.5em] text-[#dcb7a8] uppercase ${isSmallScreen ? "text-[8px] tracking-[0.3em]" : ""}`}>
              Yonas Salik's Family
            </p>

            <h1 className={`mt-6 text-4xl sm:text-6xl font-semibold text-white leading-tight ${isSmallScreen ? " text-[23px] mt-3" : ""}`}>
              Amber Yonas <br />
              <span className={`inline-flex items-center gap-2 text-[#f25a5a] ${isSmallScreen ? "gap-1" : ""}`}>
                Weds <Heart className={isSmallScreen ? "h-3 w-3" : "h-6 w-6"} />
              </span>
              <span className={`block text-[#e7c181] mt-2 ${isSmallScreen ? "mt-1 text-[23px]" : ""}`}>
                Anoosh Farhad
              </span>
            </h1>
          </div>

          {/* DESCRIPTION */}
          <p className="mt-6 text-center text-[#ead2c6] leading-6 sm:leading-7 max-w-xl mx-auto text-sm sm:text-base px-4">
            1 Corinthians 13:4-7: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud..."
          </p>

          {/* COUNTDOWN */}
          <motion.div
            className="mt-8 rounded-[2rem] border border-[#5a1d2a]/60 bg-gradient-to-br from-[#5a1d2a]/30 via-[#3d140e]/20 to-[#5a1d2a]/30 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 text-center shadow-[0_25px_60px_rgba(90,29,42,0.3)]"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-2 sm:mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.9 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-[#f5e6d3]" />
              </motion.div>
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#f5e6d3] font-semibold">
                Time Until Wedding Celebration
              </p>
              <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-[#f5e6d3]" />
              </motion.div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-r from-[#5a1d2a]/40 to-[#3d140e]/40 rounded-xl px-3 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 mb-2 sm:mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 2.1 }}
            >
              <motion.p
                className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold text-[#f5e6d3] font-mono tracking-wider"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 2.1 }}
              >
                {mounted ? countdown : "Loading..."}
              </motion.p>
            </motion.div>

            <motion.div
              className="flex justify-center items-center gap-2 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.3 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#f5e6d3] animate-pulse" />
                <p className="text-[10px] sm:text-sm text-[#ead2c6]">Live Countdown</p>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#f5e6d3] animate-pulse" />
              </div>
            </motion.div>

            <motion.p
              className="text-[10px] sm:text-sm text-[#ead2c6] mt-2 sm:mt-4 border-t border-[#5a1d2a]/30 pt-2 sm:pt-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 2.5 }}
            >
              🎉 May 14-16, 2025 - Three Days of Celebration 🎉
            </motion.p>
          </motion.div>

          {/* WAX SEAL */}
          <div className="flex justify-center mt-1">
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="relative h-56 w-64 flex items-center justify-center "
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              {/* Heart-Shaped Golden Border */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 100 100"
                  style={{ filter: 'drop-shadow(0 0 8px rgba(255, 215, 0, 0.4))' }}
                >
                  <path
                    d="M50,25 C30,0 0,12.5 0,40 C0,60 50,95 50,95 C50,95 100,60 100,40 C100,12.5 70,0 50,25 Z"
                    fill="none"
                    stroke="url(#goldGradient)"
                    strokeWidth="2"
                  />
                  <defs>
                    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffd700" />
                      <stop offset="100%" stopColor="#ffed4e" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Clickable Seal Image */}
              <motion.div
                onClick={onOpen}
                className="relative h-48 w-48 z-10 pt-6 cursor-pointer group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onOpen()}
                aria-label="Click to open full wedding invitation"
              >
                <Image
                  src="/seal.png"
                  alt="Wedding Seal"
                  fill
                  className="object-contain drop-shadow-[0_8px_25px_rgba(139,0,0,0.4)]"
                />

                {/* Click hint text - Always visible */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[4px] sm:text-[7px] md:text-[8px] text-[#ffd700] font-semibold uppercase tracking-wider whitespace-nowrap animate-pulse">
                  Click to Open Invitation
                </div>
              </motion.div>

              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-red-900/10 to-transparent opacity-30 pointer-events-none" />
            </motion.div>
          </div>

          {/* CONTACTS */}
          <div className="mt-10">
            <p className="text-center text-xs uppercase tracking-[0.4em] text-[#dcb7a8] mb-6 mt-15">
              For RSVP & Inquiries
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {references.map((ref, i) => (
                <motion.div
                  key={ref.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl border border-[#5a1d2a]/40 bg-white/5 px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                >
                  <div>
                    <p className="text-[#f5e6d3] font-semibold">{ref.name}</p>
                    <p className="text-xs text-[#dcb7a8]">{ref.title}</p>
                    <p className="text-sm text-[#ead2c6]">{ref.phone}</p>
                  </div>

                  {/* UPDATED BUTTONS */}
                  <div className="flex gap-3">
                    {/* CALL */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        makePhoneCall(ref.phone);
                      }}
                      className="h-10 w-10 flex items-center justify-center rounded-full 
                      bg-blue-600 text-white shadow-md hover:scale-110 transition"
                    >
                      <Phone size={16} />
                    </button>

                    {/* WHATSAPP */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openWhatsApp(ref.phone);
                      }}
                      className="h-10 w-10 flex items-center justify-center rounded-full 
                      bg-green-600 text-white shadow-md hover:scale-110 transition"
                    >
                      <MessageCircle size={16} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 border-t border-white/10 pt-6 flex justify-between items-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[#dcb7a8]">
              We await your gracious presence
            </p>

            <span className="flex items-center gap-2 text-[#e7c181] text-sm uppercase">
              Open Full Invitation <ArrowRight size={16} />
            </span>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}