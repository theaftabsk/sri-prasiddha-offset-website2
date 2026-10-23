"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ArrowUpRight, Phone, Send, CheckCircle2, Sparkles, Layers, ShieldCheck, Printer } from "lucide-react";
import { COMPANY_INFO } from "@/data/printingData";

export default function CmykDarkHero() {
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

    const message = `*SRI PRASIDDHA OFFSET - Direct Desk Inquiry* 🖨️
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
    <section className="relative pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-18 lg:pb-24 bg-gradient-to-b from-white via-red-50/15 to-white overflow-hidden">
      {/* Subtle warm red aura */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading, Badges, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Top Corporate Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200/80 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              <span className="text-red-900 font-medium">HIGH-SPEED 4-COLOR CMYK PRESS</span>
              <span className="text-red-300">•</span>
              <span className="text-red-700 font-bold">HYDERABAD</span>
            </div>

            {/* Main Headline - High-Impact White & Red Typography */}
            <h1 className="font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.12] uppercase mb-6">
              NEXT-GEN COMMERCIAL{" "}
              <span className="text-red-600">OFFSET PRINTING</span>{" "}
              & INDUSTRIAL PACKAGING
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mb-8 font-normal">
              From heavy-duty statutory factory registers and OSHA-compliant safety boards to duplicate NCR bill books, product roll labels, and custom corporate branding — 100% in-house production managed by proprietor <strong>Hari Kumar K</strong>.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/91${COMPANY_INFO.primaryPhone}?text=${encodeURIComponent(
                  "Hello Hari Kumar garu, I need an Instant WhatsApp Inquiry for printing services from Sri Prasiddha Offset."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-lg shadow-emerald-600/20 transition-all duration-200 transform hover:-translate-y-0.5 tracking-wide"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Instant WhatsApp Inquiry</span>
              </a>

              {/* View Services Button */}
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm px-7 py-3.5 rounded-full border border-slate-200 hover:border-slate-300 shadow-xs transition-all duration-200 tracking-wide uppercase"
              >
                <span>EXPLORE 17 SERVICES</span>
                <ArrowUpRight className="w-4 h-4 text-red-600" />
              </Link>
            </div>

            {/* Trust Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200 w-full text-slate-600">
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-slate-900 leading-none">26+</span>
                <span className="text-[11px] text-slate-500 font-semibold mt-1 block">Happy Running Clients</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-red-600 leading-none">15+</span>
                <span className="text-[11px] text-slate-500 font-semibold mt-1 block">Years Print Mastery</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-slate-900 leading-none">100%</span>
                <span className="text-[11px] text-slate-500 font-semibold mt-1 block">In-House Production</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-red-600 leading-none">Fast</span>
                <span className="text-[11px] text-slate-500 font-semibold mt-1 block">Doorstep Dispatch</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean White & Red Quick-Quote Form Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-md w-full bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/90 hover:border-red-300 transition-all duration-300">
              {/* Subtle top red calibration micro-strip */}
              <div className="absolute top-0 left-8 right-8 h-[3px] bg-red-600 rounded-b-md" />

              {/* Card Sub-Header */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-red-600 flex items-center gap-1.5">
                  <Printer className="w-3.5 h-3.5 text-red-600" /> DIRECT PRINTING DESK
                </span>
                <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                  Fast Dispatch
                </span>
              </div>

              {/* Card Main Title */}
              <h2 className="font-extrabold text-lg sm:text-xl text-slate-900 leading-tight mb-2 uppercase">
                SCHEDULE BULK PRINT CONSULTATION
              </h2>

              <p className="text-xs text-slate-500 mb-5 leading-relaxed">
                Direct quotation from proprietor Hari Kumar K for factory registers, packaging labels, or safety signboards.
              </p>

              {/* Interactive Compact Form */}
              <form onSubmit={handleHeroFormSubmit} className="space-y-3.5">
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
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition"
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
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Select Printing Requirement
                  </label>
                  <select
                    value={formService}
                    onChange={(e) => setFormService(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:border-red-500 focus:outline-none transition"
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
                  className="w-full inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs py-3.5 px-5 rounded-xl shadow-lg shadow-red-600/25 transition-all duration-200 transform hover:-translate-y-0.5 uppercase tracking-wider mt-2"
                >
                  {formSubmitted ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-white" />
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
              <div className="pt-3.5 mt-3.5 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600 font-semibold">
                <span>Direct Line:</span>
                <a
                  href={`tel:${COMPANY_INFO.primaryPhone}`}
                  className="font-bold text-red-600 hover:text-red-700 flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-red-600" />
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
