"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle, ArrowUpRight, Phone, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "@/data/printingData";

export default function WhiteGlassHero() {
  return (
    <section className="relative pt-8 pb-14 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-24 bg-white overflow-hidden">
      {/* Soft gradient aura behind */}
      <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-cyan-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-orange-100/25 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading & Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Top Pill Badge (Fully responsive on mobile!) */}
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 bg-[#fef3c7]/70 border border-[#fde68a] text-[#92400e] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold tracking-wider uppercase mb-5 sm:mb-6 shadow-xs max-w-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#b45309]" />
              <span>100% IN-HOUSE OFFSET & DIGITAL</span>
              <span className="text-[#b45309] hidden xs:inline">•</span>
              <span className="truncate">PAN-TELANGANA PRINTING & SIGNAGE</span>
            </div>

            {/* Main Headline (Responsive font clamp) */}
            <h1 className="font-serif font-black text-3xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.15] uppercase mb-5 sm:mb-6">
              COMPLETE COMMERCIAL{" "}
              <span className="relative inline-block text-cyan-600">
                PRINTING
                <span className="absolute left-0 -bottom-1 w-full h-1 bg-red-600 rounded-full" />
              </span>{" "}
              & INDUSTRIAL BRANDING
            </h1>

            {/* Description */}
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mb-7 sm:mb-8 font-normal">
              Sri Prasiddha Offset operates as a premier full-service offset and digital facility for industrial registers, safety signboards, corporate stationery, packaging labels, and brand merchandise across Hyderabad. 100% in-house production with direct guidance from proprietor <strong>Hari Kumar K</strong>.
            </p>

            {/* Buttons Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-7 sm:mb-8">
              {/* WhatsApp Inquiry Pill */}
              <a
                href={`https://wa.me/91${COMPANY_INFO.primaryPhone}?text=${encodeURIComponent(
                  "Hello Hari Kumar garu, I need an Instant WhatsApp Inquiry for printing services from Sri Prasiddha Offset."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#22c55e] hover:bg-[#16a34a] text-white font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-md shadow-emerald-500/20 transition transform hover:-translate-y-0.5 tracking-wide"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Instant WhatsApp Inquiry</span>
              </a>

              {/* Consultation / Quote Button */}
              <Link
                href="/contact#quote"
                className="inline-flex items-center justify-center gap-2 bg-[#0284c7] hover:bg-[#0369a1] text-white font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-md shadow-sky-500/20 transition transform hover:-translate-y-0.5 tracking-wide uppercase"
              >
                <span>BOOK FREE CONSULTATION</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Text Link: Explore All Services */}
            <div>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-xs font-black text-slate-800 hover:text-cyan-600 uppercase tracking-widest transition"
              >
                <span>EXPLORE ALL SERVICES</span>
                <span className="text-sm">↓</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Floating Direct Desk Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-md w-full bg-white rounded-3xl p-6 sm:p-9 shadow-xl sm:shadow-2xl border border-slate-200/90 transition-all duration-300 hover:shadow-cyan-500/10">
              {/* Top Accent Stripe */}
              <div className="absolute top-0 left-6 right-6 sm:left-8 sm:right-8 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-amber-500 rounded-b-md" />

              {/* Card Sub-Header */}
              <span className="block text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-cyan-600 mb-2">
                DIRECT PRINTING DESK
              </span>

              {/* Card Main Title in Serif */}
              <h2 className="font-serif font-black text-xl sm:text-2xl text-slate-900 leading-tight mb-3 sm:mb-4 uppercase">
                SCHEDULE A BULK PRINTING CONSULTATION
              </h2>

              {/* Card Body */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 sm:mb-8">
                Reserve a technical consultation with proprietor Hari Kumar K to evaluate paper GSM substrates, audit-compliance registers, roll packaging labels, or custom factory safety boards.
              </p>

              {/* Action Button */}
              <Link
                href="/contact#quote"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#0284c7] hover:bg-[#0369a1] text-white font-extrabold text-xs sm:text-sm py-3.5 px-6 rounded-xl shadow-md transition transform hover:-translate-y-0.5 uppercase tracking-wider mb-5"
              >
                <span>WORK WITH SRI PRASIDDHA</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              {/* Direct Line Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold">
                <span>Direct Line:</span>
                <a
                  href={`tel:${COMPANY_INFO.primaryPhone}`}
                  className="font-bold text-cyan-700 hover:text-cyan-800 flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-cyan-600" />
                  <span>+{COMPANY_INFO.primaryPhone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
