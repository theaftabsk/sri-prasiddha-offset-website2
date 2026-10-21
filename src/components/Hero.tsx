"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, MessageCircle, CheckCircle2, ShieldCheck, Printer, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "@/data/printingData";

export default function Hero() {
  return (
    <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline, Brand Mission & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-700 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-xs mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>SRI PRASIDDHA OFFSET · HYDERABAD</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-600 font-medium">Chintal, Hyderabad – 500054</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6">
              Everything for your brand —{" "}
              <span className="bg-gradient-to-r from-orange-500 via-rose-600 to-[#701a35] bg-clip-text text-transparent">
                fast, easy, all in one place
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mb-8">
              From industrial registers and safety precaution signboards to business stationery, labels, brochures and custom printing — we provide complete, precision-engineered printing solutions for businesses across industries.
            </p>

            {/* CTA Group */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#quote-calculator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-base px-8 py-3.5 rounded-full shadow-lg shadow-orange-500/30 transition transform hover:-translate-y-0.5"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-bold text-base px-7 py-3.5 rounded-full border border-slate-300 shadow-xs transition hover:border-orange-300"
              >
                <span>Explore Services</span>
              </a>

              <a
                href={`https://wa.me/91${COMPANY_INFO.primaryPhone}?text=${encodeURIComponent(
                  "Hello Hari Kumar garu, I want to discuss a bulk printing requirement with Sri Prasiddha Offset."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-emerald-600 hover:text-emerald-700 font-bold text-base px-4 py-3 rounded-full hover:bg-emerald-50 transition"
              >
                <MessageCircle className="w-5 h-5 text-emerald-500" />
                <span>WhatsApp Quote</span>
              </a>
            </div>

            {/* Trust Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-slate-200 w-full">
              <div>
                <span className="block text-3xl font-extrabold text-slate-900 leading-none">26+</span>
                <span className="text-xs text-slate-500 font-semibold mt-1 block">Happy Running Clients</span>
              </div>
              <div>
                <span className="block text-3xl font-extrabold text-slate-900 leading-none">15+</span>
                <span className="text-xs text-slate-500 font-semibold mt-1 block">Years of Trust</span>
              </div>
              <div>
                <span className="block text-3xl font-extrabold text-orange-600 leading-none">100%</span>
                <span className="text-xs text-slate-500 font-semibold mt-1 block">In-House Precision</span>
              </div>
              <div>
                <span className="block text-3xl font-extrabold text-emerald-600 leading-none">Fast</span>
                <span className="text-xs text-slate-500 font-semibold mt-1 block">Hyderabad Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-impact Visual Container (Printora aesthetic) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Card Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                {/* 4-Color CMYK Bar on top */}
                <div className="flex h-2 w-full">
                  <div className="flex-1 bg-[#00a4e4]" title="Cyan" />
                  <div className="flex-1 bg-[#e5007d]" title="Magenta" />
                  <div className="flex-1 bg-[#fdb913]" title="Yellow" />
                  <div className="flex-1 bg-[#18181b]" title="Black (Key)" />
                </div>

                {/* Hero Press Machine Image */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-800">
                  <Image
                    src="/assets/images/hero_press.jpg"
                    alt="High-speed CMYK commercial offset press machine at Sri Prasiddha Offset"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  {/* Photo Caption Badge */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="inline-block bg-orange-600 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded mb-1">
                      Advanced Press
                    </span>
                    <h2 className="text-sm font-bold text-white/95">
                      Multi-Color CMYK Offset & High-Speed Automated Finishing
                    </h2>
                  </div>
                </div>
              </div>

              {/* Floating Badge: Top Left */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-xl border border-slate-200/80 flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-900">26+ Valued Clients</span>
                  <span className="text-[11px] text-slate-500 font-medium">Hatsun, Emnar, Dr. Agarwal</span>
                </div>
              </div>

              {/* Floating Badge: Bottom Right */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-xl border border-slate-200/80 flex items-center gap-3 animate-float" style={{ animationDelay: "-2s" }}>
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                  <Printer className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-900">A Complete Printing Solution</span>
                  <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Same-Day Available
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
