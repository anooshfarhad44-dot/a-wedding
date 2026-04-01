"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import BackgroundOrnaments from "./ui/BackgroundOrnaments";
import AudioPlayer from "./ui/AudioPlayer";
import CelebrationSection from "./sections/CelebrationSection";
import ClosingSection from "./sections/ClosingSection";
import DetailsSection from "./sections/DetailsSection";
import HeroSection from "./sections/HeroSection";
import InvitationCard from "./sections/InvitationCard";
import VenuesSection from "./sections/VenuesSection";

export default function WeddingSite() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="relative isolate overflow-hidden">
      <BackgroundOrnaments />
      <AudioPlayer isOpen={isOpen} />
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <InvitationCard onOpen={() => setIsOpen(true)} />
        ) : (
          <motion.div
            key="site-content"
            initial={{ opacity: 0, scale: 0.98, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <HeroSection />
            <CelebrationSection />
            <VenuesSection />
            <DetailsSection />
            <ClosingSection />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
