"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  Music4,
  Sparkles,
  Heart,
} from "lucide-react";
import { fadeUp, stagger } from "../lib/animations";

export default function DetailsSection() {
  return (
    <motion.section
      id="details"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={stagger}
      className="px-6 py-16 sm:px-10 lg:px-16"
    >
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* LEFT SIDE */}
        <motion.div
          variants={fadeUp}
          className="glass-panel rounded-[2rem] p-8 sm:p-10"
        >
          <p className="text-xs uppercase tracking-[0.55em] text-[#e7c181] [max-width:400px]:text-[0.6rem]">
            Wedding Details
          </p>

          <h3 className="section-title mt-5 text-4xl tracking-[0.08em] text-[#fff2e8] sm:text-5xl [@media(max-width:400px)]:[font-size:20px]">
            A Celebration of Love & Commitment
          </h3>

          <p className="mt-6 max-w-2xl text-sm leading-8 text-[#ead1c5] sm:text-base [max-width:400px]:text-[11px]">
            With the blessings of God, we are honored to invite you to
            celebrate this beautiful occasion with us. Join our families as we
            come together to witness a meaningful union, filled with love,
            traditions, and heartfelt moments.
          </p>

          {/* CARDS */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {/* MEHNDI */}
            <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(84,18,32,0.92),rgba(45,12,20,0.96))] p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/8 text-[#f0cf9e]">
                <Music4 className="h-6 w-6" />
              </div>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#f1d2ab] [max-width:400px]:text-xs">
                Mehndi Evening
              </p>
              <p className="mt-3 text-sm leading-7 text-[#ead1c5] [max-width:400px]:text-xs">
                A vibrant evening of music, colors, and celebration as we begin
                the wedding festivities with joy, laughter, and traditional
                dances.
              </p>
            </div>

            {/* DATE */}
            <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(84,18,32,0.92),rgba(45,12,20,0.96))] p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/8 text-[#f0cf9e]">
                <CalendarDays className="h-6 w-6" />
              </div>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#f1d2ab] [max-width:400px]:text-xs">
                Wedding Day
              </p>
              <p className="mt-3 text-sm leading-7 text-[#ead1c5] [max-width:400px]:text-xs">
                The day when two hearts unite in a sacred bond. Your presence
                will make this occasion even more memorable and meaningful.
              </p>
            </div>

            {/* VENUE */}
            <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(84,18,32,0.92),rgba(45,12,20,0.96))] p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/8 text-[#f0cf9e]">
                <MapPin className="h-6 w-6" />
              </div>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#f1d2ab] [max-width:400px]:text-xs">
                Wedding Venue
              </p>
              <p className="mt-3 text-sm leading-7 text-[#ead1c5] [max-width:400px]:text-xs">
                A beautifully arranged venue where friends and family gather to
                celebrate together. Location details are available for your
                convenience.
              </p>
            </div>

            {/* CEREMONY */}
            <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(84,18,32,0.92),rgba(45,12,20,0.96))] p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/8 text-[#f0cf9e]">
                <Heart className="h-6 w-6" />
              </div>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#f1d2ab] [max-width:400px]:text-xs">
                Nikah Ceremony
              </p>
              <p className="mt-3 text-sm leading-7 text-[#ead1c5] [max-width:400px]:text-xs">
                Witness the sacred Nikah ceremony where two souls are joined in
                love and commitment, surrounded by prayers and blessings.
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div variants={fadeUp} className="grid gap-6">
          {/* FAMILY MESSAGE */}
          <div className="glass-panel rounded-[2rem] p-8">
            <p className="text-xs uppercase tracking-[0.55em] text-[#e7c181] [max-width:400px]:text-[11px]">
              Family Invitation
            </p>
            <p className="section-title mt-5 text-3xl leading-tight tracking-[0.06em] text-[#fff2e8] [@media(max-width:400px)]:[font-size:16px] [@media(max-width:400px)]:[line-height:1.5]">
  &quot;With great joy and gratitude, we invite you to be a part of
  our wedding celebrations and bless the couple with your presence,
  prayers, and best wishes.&quot;
</p>
          </div>

          {/* HIGHLIGHTS */}
          <div className="glass-panel rounded-[2rem] p-8">
            <div className="flex items-center gap-3 text-[#e7c181]">
              <Sparkles className="h-5 w-5" />
              <p className="text-xs uppercase tracking-[0.55em] [max-width:400px]:text-[0.6rem]">
                Wedding Highlights
              </p>
            </div>

            <ul className="mt-6 space-y-4 text-sm leading-7 text-[#ead1c5] [max-width:400px]:text-xs">
              <li>Traditional Mehndi celebration with music and colors</li>
              <li>Sacred Nikah ceremony with family and close friends</li>
              <li>Grand Baraat gathering with elegant arrangements</li>
              <li>Walima reception to celebrate the new beginning</li>
              <li>Warm and beautifully decorated venue ambiance</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}