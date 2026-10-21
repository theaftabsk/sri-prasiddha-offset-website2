"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CredentialsAndStats from "@/components/CredentialsAndStats";
import ClientsSection from "@/components/ClientsSection";
import Footer from "@/components/Footer";
import StickyActions from "@/components/StickyActions";
import { MessageCircle, ArrowUpRight, Building2, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/printingData";

export default function ClientsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero Header (Sri Ujjwala Met Lab White Glass Style) */}
        <section className="pt-14 pb-16 bg-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-[#fef3c7]/60 border border-[#fde68a] text-[#92400e] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-6 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#b45309]" />
              <span>26+ VERIFIED INDUSTRIAL & COMMERCIAL CLIENTS</span>
              <span className="text-[#b45309]">•</span>
              <span>HAPPY RUNNING CLIENTS</span>
            </div>

            <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.15] uppercase mb-6">
              OUR VALUED{" "}
              <span className="text-cyan-600 relative inline-block">
                CLIENT PORTFOLIO
                <span className="absolute left-0 -bottom-1.5 w-full h-1 bg-red-600 rounded-full" />
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
              Trusted by 26+ prestigious pharmaceutical manufacturers, steel conglomerates, food packaging corporations, infrastructure developers, and educational institutions across Hyderabad and Telangana.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`https://wa.me/91${COMPANY_INFO.primaryPhone}?text=${encodeURIComponent(
                  "Hello Hari Kumar garu, I am interested in establishing a corporate printing partnership with Sri Prasiddha Offset."
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
                <span>REQUEST CORPORATE QUOTE</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Credentials Bar & Counter Cards */}
        <CredentialsAndStats />

        {/* 26 Clients Directory with Filters */}
        <ClientsSection />
      </main>

      <Footer />
      <StickyActions />
    </div>
  );
}
