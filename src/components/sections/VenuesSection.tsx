"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { fadeUp, stagger } from "../lib/animations";
import { venues } from "../lib/constants";
import SectionHeading from "../ui/SectionHeading";

export default function VenuesSection() {
  return (
    <motion.section
      id="venues"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
      className="px-6 py-16 sm:px-10 lg:px-16"
    >
      <SectionHeading
        eyebrow="Venues"
        title="Baraat & Walima Locations"
        description="Both events are presented with their addresses and live map views so guests can easily find the right venue."
      />

      <div className="mx-auto mt-14 grid max-w-7xl gap-8 lg:grid-cols-2">
        {venues.map((venue) => (
          <motion.article
            key={venue.title}
            variants={fadeUp}
            whileHover={{ y: -8 }}
            className="venue-card overflow-hidden rounded-[2rem]"
          >
            <div
              className={`relative border-b border-white/10 bg-gradient-to-br ${venue.accent} px-6 py-6 sm:px-8`}
            >
              <div className="absolute right-5 top-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#e7c181]/25 bg-white/10 text-[#f1d19e] shadow-[0_10px_25px_rgba(31,6,12,0.24)]">
                <MapPin className="h-6 w-6" />
              </div>
              <p className="text-xs uppercase tracking-[0.5em] text-[#e7c181]">
                {venue.title}
              </p>
             <h3 className="section-title mt-4 max-w-md text-3xl tracking-[0.08em] text-[#fff2e8] sm:text-4xl [@media(max-width:400px)]:[font-size:22px] [@media(max-width:400px)]:mt-10 [@media(max-width:400px)]:leading-snug">
  {venue.venue}
</h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-[#efd9ce]">
                {venue.address}
              </p>
            </div>

            <div className="bg-[linear-gradient(180deg,rgba(84,18,32,0.92),rgba(45,12,20,0.96))] p-4 sm:p-5">
              <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white shadow-[0_20px_45px_rgba(9,2,4,0.34)]">
                <iframe
                  title={`${venue.title} venue map`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(venue.address)}&z=15&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[280px] w-full border-0 sm:h-[320px]"
                />
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-4 px-1">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.45em] text-[#e7c181]">
                    Map Marker
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[#ead1c5]">
                    Open the location in Google Maps for directions.
                  </p>
                </div>
                <a
                  href={venue.mapHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#e7c181]/35 bg-[#e7c181] px-5 py-3 text-xs font-semibold uppercase tracking-[0.26em] text-[#3b121c] transition duration-300 hover:-translate-y-1 hover:bg-[#f0cd91]"
                >
                  Open Map
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
