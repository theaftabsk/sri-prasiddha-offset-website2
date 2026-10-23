"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CredentialsAndStats from "@/components/CredentialsAndStats";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import StickyActions from "@/components/StickyActions";
import { MessageCircle, ArrowUpRight, Camera } from "lucide-react";
import { COMPANY_INFO } from "@/data/printingData";

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#080b11] text-white">
      <Navbar />

      <main className="flex-1">
        {/* Gallery Hero Header - Modern CMYK Dark Style */}
        <section className="relative pt-14 pb-16 bg-[#080b11] text-center overflow-hidden border-b border-white/10">
          <div className="absolute top-10 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-10 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="inline-flex items-center gap-2 bg-slate-900/90 border border-white/10 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-6 shadow-lg backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-slate-300">LIVE SAMPLES & FACILITY PHOTOGRAPHY</span>
              <span className="text-slate-600">•</span>
              <span className="text-orange-400 font-extrabold">100% IN-HOUSE PRESS</span>
            </div>

            <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12] uppercase mb-6">
              PRINT WORK &{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-amber-400 bg-clip-text text-transparent">
                SAMPLE SHOWCASE
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
              Inspect our high-speed offset machinery, industrial caution signage boards, carbonless invoice books, corporate stationery, and finished brand merchandise.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`https://wa.me/91${COMPANY_INFO.primaryPhone}?text=${encodeURIComponent(
                  "Hello Hari Kumar garu, I want to see sample prints and discuss bulk orders."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-lg shadow-emerald-500/20 transition transform hover:-translate-y-0.5 tracking-wide"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Instant WhatsApp Inquiry (+91 {COMPANY_INFO.primaryPhone})</span>
              </a>

              <Link
                href="/contact#quote"
                className="inline-flex items-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full border border-white/10 hover:border-orange-500/50 shadow-md transition transform hover:-translate-y-0.5 tracking-wide uppercase"
              >
                <span>REQUEST SAMPLE QUOTE</span>
                <ArrowUpRight className="w-4 h-4 text-orange-400" />
              </Link>
            </div>
          </div>
        </section>

        {/* Credentials Bar & Counter Cards */}
        <CredentialsAndStats />

        {/* Gallery Section */}
        <div className="bg-[#080b11]">
          <GallerySection />
        </div>
      </main>

      <Footer />
      <StickyActions />
    </div>
  );
}
