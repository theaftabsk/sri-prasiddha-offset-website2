"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const STATS = [
  {
    number: "26+",
    title: "HAPPY RUNNING CLIENTS",
    sub: "Chemo, Hatsun, Emnar, Jairaj, Dr. Agarwal & more",
    topColor: "bg-red-500",
  },
  {
    number: "15+",
    title: "YEARS TECHNICAL PRINT EXPERIENCE",
    sub: "Complete commercial offset & digital engineering",
    topColor: "bg-cyan-500",
  },
  {
    number: "100%",
    title: "IN-HOUSE PRODUCTION STANDARD",
    sub: "High-speed multi-color offset & automated binding",
    topColor: "bg-emerald-500",
  },
  {
    number: "500+",
    title: "COMPLETED CORPORATE ORDERS",
    sub: "Industrial registers, safety boards & stationery",
    topColor: "bg-[#701a35]",
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
    <section className="bg-slate-50 border-y border-slate-200">
      {/* 1. Black Credentials Marquee Bar (Exact match to Sri Ujjwala Met Lab Screenshot 3) */}
      <div className="bg-black text-white flex items-center overflow-hidden border-b border-slate-800">
        <div className="bg-black px-4 sm:px-6 py-3 font-serif font-black text-xs sm:text-sm uppercase tracking-wider text-white whitespace-nowrap flex items-center gap-2 border-r border-slate-800 z-10 shadow-lg">
          <span>SRI PRASIDDHA&apos;S CREDENTIALS</span>
          <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
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

      {/* 2. 4 Statistic Cards (Clean white glass cards with colorful top lines) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-2xl p-7 border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
            >
              {/* Top Accent Strip */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 ${stat.topColor}`} />

              <div>
                <span className="font-serif font-black text-4xl sm:text-5xl text-slate-900 tracking-tight block mb-2">
                  {stat.number}
                </span>

                <h3 className="font-sans font-extrabold text-xs tracking-wider text-slate-900 uppercase mb-2 leading-snug">
                  {stat.title}
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed font-medium">
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
