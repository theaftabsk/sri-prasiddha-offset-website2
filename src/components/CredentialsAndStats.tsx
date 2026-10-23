"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const STATS = [
  {
    number: "26+",
    title: "HAPPY RUNNING CLIENTS",
    sub: "Chemo, Hatsun, Emnar, Jairaj, Dr. Agarwal & more",
    topColor: "bg-[#00d2ff]",
    textColor: "text-[#00d2ff]",
  },
  {
    number: "15+",
    title: "YEARS TECHNICAL PRINT EXPERIENCE",
    sub: "Complete commercial offset & digital engineering",
    topColor: "bg-[#ff007a]",
    textColor: "text-[#ff007a]",
  },
  {
    number: "100%",
    title: "IN-HOUSE PRODUCTION STANDARD",
    sub: "High-speed multi-color offset & automated binding",
    topColor: "bg-[#ffdf00]",
    textColor: "text-[#ffdf00]",
  },
  {
    number: "500+",
    title: "COMPLETED CORPORATE ORDERS",
    sub: "Industrial registers, safety boards & stationery",
    topColor: "bg-[#ff6b35]",
    textColor: "text-[#ff6b35]",
  },
];

const TICKER_ITEMS = [
  "26+ HAPPY RUNNING CORPORATE CLIENTS",
  "OVER 15+ YEARS COMMERCIAL PRINTING EXCELLENCE",
  "STATE-OF-THE-ART 4-COLOR CMYK OFFSET PRESS",
  "SAME-DAY DELIVERY AVAILABLE IN HYDERABAD",
  "AUDIT-COMPLIANT FACTORY & STATUTORY REGISTERS",
  "REFLECTIVE & RADIUM SAFETY PRECAUTION BOARDS",
  "CARBONLESS DUPLICATE & TRIPLICATE NCR BILL BOOKS",
  "PREMIUM VISITING CARDS WITH SPOT UV & VELVET FINISH",
];

export default function CredentialsAndStats() {
  const repeatedTicker = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <section className="bg-[#080b11] border-y border-white/10">
      {/* 1. CMYK Neon Credentials Marquee Bar */}
      <div className="bg-[#05070b] text-white flex items-center overflow-hidden border-b border-white/5">
        <div className="bg-slate-900 px-4 sm:px-6 py-3 font-extrabold text-xs sm:text-sm uppercase tracking-wider text-white whitespace-nowrap flex items-center gap-2 border-r border-white/10 z-10 shadow-lg">
          <span className="text-cyan-400">SRI PRASIDDHA&apos;S</span>
          <span>CREDENTIALS</span>
          <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
        </div>

        <div className="animate-marquee flex items-center py-2.5">
          {repeatedTicker.map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-3 text-xs font-bold tracking-wider uppercase text-slate-300 px-6 whitespace-nowrap"
            >
              <span>{item}</span>
              <span className="text-amber-400 text-sm">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. 4 Statistic Cards (Dark Glassmorphism with Neon CMYK Highlights) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="relative bg-slate-900/60 backdrop-blur-xl rounded-2xl p-7 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden group hover:border-white/20"
            >
              {/* Top Neon Accent Strip */}
              <div className={`absolute top-0 left-0 right-0 h-1 ${stat.topColor} opacity-80 group-hover:opacity-100 transition-opacity`} />

              <div>
                <span className={`font-extrabold text-4xl sm:text-5xl tracking-tight block mb-2 ${stat.textColor}`}>
                  {stat.number}
                </span>

                <h3 className="font-extrabold text-xs tracking-wider text-white uppercase mb-2 leading-snug">
                  {stat.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {stat.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
