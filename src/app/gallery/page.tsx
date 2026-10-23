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
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      <Navbar />

      <main className="flex-1">
        {/* Gallery Hero Header - Clean White & Red Style */}
        <section className="relative pt-14 pb-16 bg-gradient-to-b from-red-50/30 to-white text-center overflow-hidden border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="inline-flex items-center gap-2 bg-white border border-red-200 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span className="text-slate-700">LIVE SAMPLES & FACILITY PHOTOGRAPHY</span>
              <span className="text-slate-300">•</span>
              <span className="text-red-600 font-bold">100% IN-HOUSE PRESS</span>
            </div>

            <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.12] uppercase mb-6">
              PRINT WORK &{" "}
              <span className="text-red-600">SAMPLE SHOWCASE</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
              Inspect our high-speed offset machinery, industrial caution signage boards, carbonless invoice books, corporate stationery, and finished brand merchandise.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`https://wa.me/91${COMPANY_INFO.primaryPhone}?text=${encodeURIComponent(
                  "Hello Hari Kumar garu, I want to see sample prints and discuss bulk orders."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-md transition transform hover:-translate-y-0.5 tracking-wide"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Instant WhatsApp Inquiry (+91 {COMPANY_INFO.primaryPhone})</span>
              </a>

              <Link
                href="/contact#quote"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-md transition transform hover:-translate-y-0.5 tracking-wide uppercase"
              >
                <span>REQUEST SAMPLE QUOTE</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>
        </section>

        {/* Credentials Bar & Counter Cards */}
        <CredentialsAndStats />

        {/* Gallery Section */}
        <div className="bg-white">
          <GallerySection />
        </div>
      </main>

      <Footer />
      <StickyActions />
    </div>
  );
}
