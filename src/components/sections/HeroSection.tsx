"use client";

import { motion } from "framer-motion";
import { highlightCards } from "../lib/constants";
import { fadeUp, stagger } from "../lib/animations";
import { Heart, Music, Sparkles, Calendar, MapPin, User, Users, Star, Flower, Gift } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative px-6 pb-16 pt-8 sm:px-10 lg:px-16 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 left-10 opacity-20"
        >
          <Star className="h-8 w-8 text-[#ffd700]" />
        </motion.div>
        <motion.div
          animate={{ rotate: [360, 0], y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 opacity-15"
        >
          <Flower className="h-6 w-6 text-[#e7c181]" />
        </motion.div>
        <motion.div
          animate={{ rotate: [0, -360], scale: [1, 0.8, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-1/4 opacity-10"
        >
          <Sparkles className="h-10 w-10 text-[#f25a5a]" />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-gradient-to-r from-white/8 to-white/4 px-5 py-3 text-[11px] uppercase tracking-[0.4em] text-[#f3d9cb] backdrop-blur md:text-xs shadow-lg shadow-[#ffd700]/10"
        whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(255, 215, 0, 0.2)" }}
      >
        <motion.span
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Wedding Celebration
        </motion.span>
        <span className="flex items-center gap-2">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <Calendar className="h-3 w-3 text-[#ffd700]" />
          </motion.div>
          14-16 May
        </span>
      </motion.div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 pt-12 lg:grid-cols-[1.15fr_0.85fr] lg:pt-20">
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="relative"
        >
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#f1d3ba]/20 bg-gradient-to-r from-[#f1d3ba]/15 to-[#f1d3ba]/5 px-4 py-2 text-sm text-[#f7e1d4] shadow-lg shadow-[#f1d3ba]/10"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(241, 211, 186, 0.3)" }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="relative"
            >
              <Users className="h-4 w-4" />
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -inset-1 rounded-full border border-[#f7e1d4]/30"
              />
            </motion.div>
            <motion.span
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Crafted for a memorable family occasion
            </motion.span>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-[10px] sm:text-xs uppercase tracking-[0.4em] sm:tracking-[0.55em] text-[#dcb7a8]"
          >
            Younas Salik's Family
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="section-title mt-4 sm:mt-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[0.92] font-semibold tracking-[0.06em] sm:tracking-[0.08em] text-[#fff2e8] bg-gradient-to-r from-[#fff2e8] via-[#fff2e8] to-[#f7e1d4] bg-clip-text text-transparent"
          >
            <motion.span
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Amber Younas 
            </motion.span>
            <span className="block mt-4">
              <motion.span 
                className="inline-flex items-center gap-1 sm:gap-2 text-[#f25a5a]"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Weds
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Heart className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-[#f25a5a]" />
                </motion.div>
              </motion.span>
              <motion.span 
                className="block text-[#e7c181] mt-1 sm:mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Anoosh Farhad
              </motion.span>
            </span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="mt-3 sm:mt-4 md:mt-6 flex items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8"
          >
            <motion.div 
              className="flex items-center gap-1 sm:gap-2 text-[#f7e1d4]"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ y: [0, -5, 0], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <User className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-[#ffd700]" />
              </motion.div>
              <motion.span
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-[4px] sm:text-[6px]"
              >
                Bride
              </motion.span>
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <Heart className="h-2 w-2 sm:h-3 sm:w-3 md:h-4 md:w-4 text-[#ff6b6b]" />
              <motion.div
                animate={{ scale: [1, 2, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-[#ff6b6b]/20"
              />
            </motion.div>
            <motion.div 
              className="flex items-center gap-1 sm:gap-2 text-[#f7e1d4]"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ y: [0, -5, 0], rotate: [0, -5, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <User className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-[#ffd700]" />
              </motion.div>
              <motion.span
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="text-[4px] sm:text-[6px]"
              >
                Groom
              </motion.span>
            </motion.div>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-4 sm:mt-6 md:mt-8 max-w-lg sm:max-w-xl md:max-w-2xl text-xs sm:text-sm leading-6 sm:leading-7 md:leading-8 text-[#ead2c6]"
          >
            <motion.span
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              A glowing digital invitation for a wedding celebration
            </motion.span>
            <br />
            <motion.span
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            >
              filled with grace, family, and three unforgettable evenings
            </motion.span>
            <br />
            <motion.span
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            >
              of mehndi, baraat, and walima.
            </motion.span>
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 md:gap-4"
          >
            <motion.a
              href="#celebration"
              className="group relative rounded-full bg-gradient-to-r from-[#e7c181] to-[#f1cf93] px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4 text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.28em] text-[#35111a] transition duration-300 hover:-translate-y-1 shadow-lg shadow-[#e7c181]/30"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(231, 193, 129, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Explore Celebration</span>
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#f1cf93] to-[#e7c181] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.a>
            <motion.a
              href="#details"
              className="group relative rounded-full border border-white/14 bg-white/8 px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 md:py-4 text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.28em] text-[#fff0e6] transition duration-300 hover:-translate-y-1 hover:border-[#e7c181]/50 backdrop-blur"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View Details</span>
              <motion.div
                className="absolute inset-0 rounded-full border border-[#e7c181]/50 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="glass-panel relative overflow-hidden rounded-[1rem] sm:rounded-[1.5rem] md:rounded-[2rem] p-3 sm:p-4 md:p-6 lg:p-8"
        >
          <div className="absolute inset-x-6 top-6 h-px glow-line" />
          <motion.div
            animate={{ rotate: [0, 4, 0], scale: [1, 1.04, 1] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mx-auto mb-3 sm:mb-4 md:mb-6 flex h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 items-center justify-center rounded-full border border-[#e7c181]/25 bg-gradient-to-br from-[#e7c181]/15 to-[#e7c181]/5 text-[#f0d0a1] shadow-lg shadow-[#e7c181]/20"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Heart className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-10 lg:w-10" />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 rounded-full border border-[#e7c181]/30"
            />
          </motion.div>
          <motion.p 
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-center text-[10px] sm:text-xs uppercase tracking-[0.5em] sm:tracking-[0.6em] text-[#dcb9a9]"
          >
            Save The Date
          </motion.p>
          <motion.h2 
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="section-title mt-2 sm:mt-3 md:mt-4 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[0.06em] sm:tracking-[0.08em] text-[#fff2e8] bg-gradient-to-r from-[#fff2e8] via-[#fff2e8] to-[#e7c181] bg-clip-text text-transparent"
          >
            14 - 16 May
          </motion.h2>
          <motion.p 
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="mx-auto mt-2 sm:mt-3 md:mt-5 max-w-xs sm:max-w-sm text-center text-[10px] sm:text-xs leading-5 sm:leading-6 md:leading-7 text-[#ead1c5]"
          >
            A romantic, modern one-page site designed to celebrate
            union of two families with elegance and motion.
          </motion.p>

          <motion.div 
            variants={fadeUp}
            className="mt-4 sm:mt-6 md:mt-8 space-y-2 sm:space-y-3 md:space-y-4"
          >
            {highlightCards.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-[1rem] sm:rounded-[1.2rem] md:rounded-[1.6rem] border border-white/10 bg-gradient-to-br from-[rgba(84,18,32,0.92)] via-[rgba(45,12,20,0.96)] to-[rgba(84,18,32,0.92)] p-3 sm:p-4 md:p-6 shadow-[0_15px_30px_sm:0_25px_50px_md:0_25px_50px_rgba(10,2,4,0.15)] backdrop-blur transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_sm:0_30px_60px_md:0_30px_60px_rgba(10,2,4,0.25)]"
                whileHover={{ y: -5, rotate: [0, 1, -1, 0] }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-[#e7c181]/10 to-[#c8a882]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="relative z-10">
                  <motion.div className="flex items-center gap-3 mb-3">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: index * 0.5 }}
                    >
                      {index === 0 && <Gift className="h-5 w-5 text-[#e7c181]" />}
                      {index === 1 && <Star className="h-5 w-5 text-[#e7c181]" />}
                      {index === 2 && <Sparkles className="h-5 w-5 text-[#e7c181]" />}
                    </motion.div>
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                      className="h-px flex-1 bg-gradient-to-r from-transparent via-[#e7c181]/50 to-transparent"
                    />
                  </motion.div>
                  <motion.h3 
                    className="text-base sm:text-lg md:text-xl font-semibold tracking-[0.06em] sm:tracking-[0.08em] text-[#fff2e8]"
                    whileHover={{ scale: 1.05, x: 5 }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p 
                    className="mt-1 sm:mt-2 md:mt-3 text-[10px] sm:text-xs md:text-sm leading-5 sm:leading-6 md:leading-7 text-[#ead2c6]"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1, x: 3 }}
                  >
                    {item.text}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
