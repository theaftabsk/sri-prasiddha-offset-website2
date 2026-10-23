"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const STATS = [
  {
    number: "26+",
    title: "VERIFIED CORPORATE CLIENTS",
    sub: "Chemo, Hatsun, Emnar, Jairaj, Dr. Agarwal & leading brands",
  },
  {
    number: "15+",
    title: "YEARS TECHNICAL PRINT MASTERY",
    sub: "Comprehensive commercial offset & industrial engineering",
  },
  {
    number: "100%",
    title: "IN-HOUSE PRODUCTION STANDARD",
    sub: "High-speed multi-color offset & automated binding machinery",
  },
  {
    number: "500+",
    title: "COMPLETED CORPORATE DELIVERIES",
    sub: "Industrial registers, safety signage & corporate collateral",
  },
];

const TICKER_ITEMS = [
  "26+ VERIFIED CORPORATE CLIENTS",
  "15+ YEARS COMMERCIAL PRINTING EXCELLENCE",
  "STATE-OF-THE-ART 4-COLOR CMYK OFFSET PRESS",
  "DOORSTEP DISPATCH ACROSS HYDERABAD & TELANGANA",
  "FACTORY AUDIT-COMPLIANT STATUTORY REGISTERS",
  "INDUSTRIAL SAFETY PRECAUTION & ACP BOARDS",
  "CARBONLESS DUPLICATE & TRIPLICATE NCR INVOICE BOOKS",
  "PREMIUM VISITING CARDS WITH SPOT UV & VELVET LAMINATION",
];

export default function CredentialsAndStats() {
  const repeatedTicker = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <section className="bg-slate-50 border-y border-slate-200">
      {/* 1. Executive Light Orange Credentials Marquee Bar */}
      <div className="bg-orange-500 text-white flex items-center overflow-hidden border-b border-orange-600">
        <div className="bg-orange-600 px-4 sm:px-6 py-3 font-extrabold text-xs sm:text-sm uppercase tracking-wider text-white whitespace-nowrap flex items-center gap-2 border-r border-orange-700 z-10 shadow-md">
          <span>SRI PRASIDDHA</span>
          <span className="text-orange-200">CREDENTIALS</span>
          <ArrowRight className="w-3.5 h-3.5 text-white" />
        </div>

        <div className="animate-marquee flex items-center py-2.5">
          {repeatedTicker.map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-3 text-xs font-semibold tracking-wider uppercase text-white/95 px-6 whitespace-nowrap"
            >
              <span>{item}</span>
              <span className="text-orange-200 text-xs">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. 4 Statistic Cards (Clean White & Light Orange Cards) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden group hover:border-orange-300"
            >
              {/* Subtle top orange indicator */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-orange-500/30 group-hover:bg-orange-500 transition-colors" />

              <div>
                <span className="font-extrabold text-3xl sm:text-4xl tracking-tight block mb-2 text-orange-500">
                  {stat.number}
                </span>

                <h3 className="font-bold text-xs tracking-wider text-slate-800 uppercase mb-2 leading-snug">
                  {stat.title}
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed font-normal">
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
