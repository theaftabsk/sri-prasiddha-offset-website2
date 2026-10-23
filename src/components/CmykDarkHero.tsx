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
    <section className="relative pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-18 lg:pb-24 bg-[#080b11] overflow-hidden">
      {/* Dynamic CMYK Glow Aura Backgrounds */}
      <div className="absolute top-10 -left-20 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-pink-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading, Badges, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Top CMYK Neon Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-slate-900/90 border border-white/10 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-6 shadow-lg backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-slate-300">HIGH-SPEED 4-COLOR CMYK PRESS</span>
              <span className="text-slate-600">•</span>
              <span className="text-orange-400 font-extrabold">HYDERABAD</span>
            </div>

            {/* Main Headline (Outfit geometric sans-serif + CMYK Gradient) */}
            <h1 className="font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12] uppercase mb-6">
              NEXT-GEN COMMERCIAL{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-amber-400 bg-clip-text text-transparent">
                OFFSET PRINTING
              </span>{" "}
              & INDUSTRIAL PACKAGING
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mb-8 font-normal">
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
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-lg shadow-emerald-500/25 transition-all duration-300 transform hover:-translate-y-0.5 tracking-wide"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Instant WhatsApp Inquiry</span>
              </a>

              {/* View Services Button */}
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full border border-white/10 hover:border-orange-500/50 shadow-md transition-all duration-300 tracking-wide uppercase"
              >
                <span>EXPLORE 17 SERVICES</span>
                <ArrowUpRight className="w-4 h-4 text-orange-400" />
              </Link>
            </div>

            {/* Trust Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 w-full text-slate-300">
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-white leading-none">26+</span>
                <span className="text-[11px] text-slate-400 font-semibold mt-1 block">Happy Running Clients</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-cyan-400 leading-none">15+</span>
                <span className="text-[11px] text-slate-400 font-semibold mt-1 block">Years Print Mastery</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-pink-400 leading-none">100%</span>
                <span className="text-[11px] text-slate-400 font-semibold mt-1 block">In-House Production</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-amber-400 leading-none">Fast</span>
                <span className="text-[11px] text-slate-400 font-semibold mt-1 block">Doorstep Dispatch</span>
              </div>
            </div>
          </div>

          {/* Right Column: Sleek CMYK Dark Quick-Quote Form Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-md w-full bg-slate-900/80 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/10 transition-all duration-300 hover:border-orange-500/40">
              {/* Top 4-Color CMYK Bar */}
              <div className="absolute top-0 left-8 right-8 h-1 flex rounded-b-md overflow-hidden">
                <div className="flex-1 bg-[#00d2ff]" />
                <div className="flex-1 bg-[#ff007a]" />
                <div className="flex-1 bg-[#ffdf00]" />
                <div className="flex-1 bg-[#ff6b35]" />
              </div>

              {/* Card Sub-Header */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-cyan-400 flex items-center gap-1.5">
                  <Printer className="w-3.5 h-3.5 text-cyan-400" /> DIRECT PRINTING DESK
                </span>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                  Fast Dispatch
                </span>
              </div>

              {/* Card Main Title */}
              <h2 className="font-extrabold text-lg sm:text-xl text-white leading-tight mb-2 uppercase">
                SCHEDULE BULK PRINT CONSULTATION
              </h2>

              <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                Direct quotation from proprietor Hari Kumar K for factory registers, packaging labels, or safety signboards.
              </p>

              {/* Interactive Compact Form */}
              <form onSubmit={handleHeroFormSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Your Name / Company
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh / Hyderabad Pharma"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="w-full bg-slate-950/70 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Mobile Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9542717444"
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    className="w-full bg-slate-950/70 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Select Printing Requirement
                  </label>
                  <select
                    value={formService}
                    onChange={(e) => setFormService(e.target.value)}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-cyan-400 focus:outline-none transition"
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
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 via-rose-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-extrabold text-xs py-3.5 px-5 rounded-xl shadow-lg shadow-orange-500/25 transition-all duration-300 transform hover:-translate-y-0.5 uppercase tracking-wider mt-2"
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
              <div className="pt-3.5 mt-3.5 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-semibold">
                <span>Direct Line:</span>
                <a
                  href={`tel:${COMPANY_INFO.primaryPhone}`}
                  className="font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
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
