"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CredentialsAndStats from "@/components/CredentialsAndStats";
import ServicesExplorer from "@/components/ServicesExplorer";
import Footer from "@/components/Footer";
import StickyActions from "@/components/StickyActions";
import { MessageCircle, ArrowUpRight, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "@/data/printingData";

export default function ServicesPage() {
  const handleSelectService = (serviceName: string) => {
    window.location.href = `/contact?service=${encodeURIComponent(serviceName)}`;
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero Header (Exact Sri Ujjwala Met Lab Style) */}
        <section className="pt-14 pb-16 bg-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-[#fef3c7]/60 border border-[#fde68a] text-[#92400e] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-6 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#b45309]" />
              <span>17 COMPLETE PRINTING DISCIPLINES</span>
              <span className="text-[#b45309]">•</span>
              <span>IN-HOUSE PRECISION QUALITY</span>
            </div>

            <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.15] uppercase mb-6">
              PRINTING & INDUSTRIAL{" "}
              <span className="text-cyan-600 relative inline-block">
                SIGNAGE SERVICES
                <span className="absolute left-0 -bottom-1.5 w-full h-1 bg-red-600 rounded-full" />
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
              From heavy-duty statutory factory registers and OSHA-compliant safety boards to carbonless invoice books, luxury business cards, product roll labels, and rollup standees.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`https://wa.me/91${COMPANY_INFO.primaryPhone}?text=${encodeURIComponent(
                  "Hello Hari Kumar garu, I need a detailed quote for printing services."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#22c55e] hover:bg-[#16a34a] text-white font-extrabold text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-md shadow-emerald-500/20 transition transform hover:-translate-y-0.5 tracking-wide"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Instant WhatsApp Inquiry (+91 {COMPANY_INFO.primaryPhone})</span>
              </a>

              <Link
                href="/contact#quote"
                className="inline-flex items-center gap-2 bg-[#0284c7] hover:bg-[#0369a1] text-white font-extrabold text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-md shadow-sky-500/20 transition transform hover:-translate-y-0.5 tracking-wide uppercase"
              >
                <span>REQUEST PRINT QUOTE</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Credentials Bar & Counter Cards */}
        <CredentialsAndStats />

        {/* Services Explorer with Filters */}
        <ServicesExplorer onSelectService={handleSelectService} />
      </main>

      <Footer />
      <StickyActions />
    </div>
  );
}
