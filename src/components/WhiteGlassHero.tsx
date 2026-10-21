"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MessageCircle, ArrowUpRight, Phone, Send, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO, SERVICES_DATA } from "@/data/printingData";

export default function WhiteGlassHero() {
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formService, setFormService] = useState("Industrial Registers");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleHeroFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formPhone || formPhone.trim().length < 8) {
      alert("Please enter a valid mobile number.");
      return;
    }

    const message = `*SRI PRASIDDHA OFFSET - Quick Desk Inquiry* 🖨️
━━━━━━━━━━━━━━━━━━
👤 *Client Name:* ${formName || "Business Inquirer"}
📱 *Phone Number:* ${formPhone}
📦 *Service Interested:* ${formService}

📍 *Location:* Hyderabad
_Sent from Direct Printing Desk on Website_`;

    const url = `https://wa.me/91${COMPANY_INFO.primaryPhone}?text=${encodeURIComponent(message)}`;
    setFormSubmitted(true);
    setTimeout(() => {
      window.open(url, "_blank");
      setFormSubmitted(false);
    }, 400);
  };

  return (
    <section className="relative pt-6 pb-14 sm:pt-10 sm:pb-16 lg:pt-14 lg:pb-20 bg-white overflow-hidden">
      {/* Soft gradient aura behind */}
      <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-cyan-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-orange-100/25 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading & Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Top Pill Badge (Compact on mobile) */}
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 bg-[#fef3c7]/70 border border-[#fde68a] text-[#92400e] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold tracking-wider uppercase mb-4 sm:mb-6 shadow-xs max-w-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#b45309]" />
              <span>100% IN-HOUSE OFFSET & DIGITAL</span>
              <span className="text-[#b45309] hidden xs:inline">•</span>
              <span className="truncate">PAN-TELANGANA PRINTING & SIGNAGE</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif font-black text-3xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.14] uppercase mb-4 sm:mb-6">
              COMPLETE COMMERCIAL{" "}
              <span className="relative inline-block text-cyan-600">
                PRINTING
                <span className="absolute left-0 -bottom-1 w-full h-1 bg-red-600 rounded-full" />
              </span>{" "}
              & INDUSTRIAL BRANDING
            </h1>

            {/* Description */}
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mb-6 sm:mb-8 font-normal">
              Sri Prasiddha Offset operates as a premier full-service offset and digital facility for industrial registers, safety signboards, corporate stationery, packaging labels, and brand merchandise across Hyderabad. 100% in-house production with direct guidance from proprietor <strong>Hari Kumar K</strong>.
            </p>

            {/* Buttons Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-6 sm:mb-8">
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

          {/* Right Column: Sleek Compact Quick-Quote Form Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-md w-full bg-white rounded-3xl p-6 sm:p-7 shadow-xl sm:shadow-2xl border border-slate-200/90 transition-all duration-300 hover:shadow-cyan-500/10">
              {/* Top Accent Stripe */}
              <div className="absolute top-0 left-6 right-6 sm:left-8 sm:right-8 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-amber-500 rounded-b-md" />

              {/* Card Sub-Header */}
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-cyan-600">
                  DIRECT PRINTING DESK
                </span>
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  Fast Callback
                </span>
              </div>

              {/* Card Main Title in Serif */}
              <h2 className="font-serif font-black text-lg sm:text-xl text-slate-900 leading-tight mb-2 uppercase">
                SCHEDULE A BULK CONSULTATION
              </h2>

              <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                Direct quote from proprietor Hari Kumar K for registers, packaging labels, or factory safety boards.
              </p>

              {/* Interactive Compact Form */}
              <form onSubmit={handleHeroFormSubmit} className="space-y-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Your Name / Company
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh / Hyderabad Pharma"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:bg-white focus:border-cyan-500 focus:outline-none transition shadow-2xs"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Mobile Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9542717444"
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:bg-white focus:border-cyan-500 focus:outline-none transition shadow-2xs"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Select Printing Requirement
                  </label>
                  <select
                    value={formService}
                    onChange={(e) => setFormService(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:bg-white focus:border-cyan-500 focus:outline-none transition shadow-2xs"
                  >
                    <option value="Industrial Related All Types Registers">Industrial Related All Types Registers</option>
                    <option value="Safety Precaution Boards & ACP">Safety Precaution Boards & ACP</option>
                    <option value="Bill Books & Duplicate NCR Invoices">Bill Books & Duplicate NCR Invoices</option>
                    <option value="Letterheads & Business Cards">Letterheads & Business Cards</option>
                    <option value="Product Stickers & Roll-Form Labels">Product Stickers & Roll-Form Labels</option>
                    <option value="Brochures & Catalogues">Brochures & Catalogues</option>
                    <option value="Rollup Standees & Banners">Rollup Standees & Banners</option>
                    <option value="Branded T-Shirts & Custom Apparel">Branded T-Shirts & Custom Apparel</option>
                    <option value="Other Custom Printing Service">Other Custom Printing Service</option>
                  </select>
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0284c7] hover:bg-[#0369a1] text-white font-extrabold text-xs py-3 px-5 rounded-xl shadow-md shadow-sky-500/20 transition transform hover:-translate-y-0.5 uppercase tracking-wider mt-1"
                >
                  {formSubmitted ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                      <span>Opening WhatsApp...</span>
                    </>
                  ) : (
                    <>
                      <span>WORK WITH SRI PRASIDDHA</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Direct Line Footer */}
              <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold">
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
