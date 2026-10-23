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
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero Header - Clean White & Light Orange Style */}
        <section className="relative pt-14 pb-16 bg-gradient-to-b from-orange-50/40 to-white text-center overflow-hidden border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="inline-flex items-center gap-2 bg-white border border-orange-200 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-slate-700">26+ VERIFIED INDUSTRIAL & COMMERCIAL CLIENTS</span>
              <span className="text-slate-300">•</span>
              <span className="text-orange-600 font-bold">HAPPY RUNNING CLIENTS</span>
            </div>

            <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.12] uppercase mb-6">
              OUR VALUED{" "}
              <span className="text-orange-500">CLIENT PORTFOLIO</span>
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
                className="inline-flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-md transition transform hover:-translate-y-0.5 tracking-wide"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Instant WhatsApp Inquiry (+91 {COMPANY_INFO.primaryPhone})</span>
              </a>

              <Link
                href="/contact#quote"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-md transition transform hover:-translate-y-0.5 tracking-wide uppercase"
              >
                <span>REQUEST CORPORATE QUOTE</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>
        </section>

        {/* Credentials Bar & Counter Cards */}
        <CredentialsAndStats />

        {/* 26 Clients Directory with Filters */}
        <div className="bg-white">
          <ClientsSection />
        </div>
      </main>

      <Footer />
      <StickyActions />
    </div>
  );
}
