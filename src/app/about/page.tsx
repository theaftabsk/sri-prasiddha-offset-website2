"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CredentialsAndStats from "@/components/CredentialsAndStats";
import Footer from "@/components/Footer";
import StickyActions from "@/components/StickyActions";
import {
  MessageCircle,
  ArrowUpRight,
  ShieldCheck,
  Award,
  Printer,
  Sparkles,
  CheckCircle2,
  Phone,
  MapPin,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/printingData";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#080b11] text-white">
      {/* Header */}
      <Navbar />

      <main className="flex-1">
        {/* About Hero Section - Sleek Corporate Style */}
        <section className="relative pt-14 pb-16 bg-[#0a0e17] text-center overflow-hidden border-b border-slate-800">
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-sky-600/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-slate-900/90 border border-slate-700/80 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 shadow-md backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span className="text-slate-200">100% IN-HOUSE PRODUCTION</span>
              <span className="text-slate-600">•</span>
              <span className="text-sky-400 font-bold">ESTABLISHED HYDERABAD FACILITY</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12] uppercase mb-6">
              ABOUT OUR PRINTING{" "}
              <span className="text-sky-400">PRESS & FACILITY</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
              Sri Prasiddha Offset is a premier full-service offset and digital facility in Chintal, Hyderabad, delivering factory audit-compliant industrial registers, safety caution boards, corporate stationery, and custom packaging across Telangana and India.
            </p>

            {/* Two Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`https://wa.me/91${COMPANY_INFO.primaryPhone}?text=${encodeURIComponent(
                  "Hello Hari Kumar garu, I would like to enquire about Sri Prasiddha Offset printing facilities and capabilities."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-lg transition transform hover:-translate-y-0.5 tracking-wide"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Instant WhatsApp Inquiry (+91 {COMPANY_INFO.primaryPhone})</span>
              </a>

              <Link
                href="/contact#quote"
                className="inline-flex items-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm px-7 py-3.5 rounded-full border border-slate-700/80 hover:border-slate-500 shadow-md transition transform hover:-translate-y-0.5 tracking-wide uppercase"
              >
                <span>REQUEST PRINT QUOTE</span>
                <ArrowUpRight className="w-4 h-4 text-sky-400" />
              </Link>
            </div>
          </div>
        </section>

        {/* Credentials Ticker & 4 Statistic Cards */}
        <CredentialsAndStats />

        {/* In-Depth Facility & Machine Details */}
        <section className="py-20 bg-[#080b11]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
              <div className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-16/10">
                <Image
                  src="/assets/images/hero_press.jpg"
                  alt="Multi-Color CMYK Offset Machinery"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block">
                  Production Infrastructure
                </span>
                <h2 className="font-extrabold text-2xl sm:text-3xl text-white leading-tight uppercase">
                  HIGH-SPEED 4-COLOR CMYK OFFSET & AUTOMATED FINISHING
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Our facility houses multi-color commercial offset press units capable of outputting tens of thousands of impressions daily with pinpoint registration and consistent ink density across high-speed paper reels.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10">
                    <span className="block font-bold text-white text-sm mb-1">
                      Multi-Color CMYK Press
                    </span>
                    <span className="text-xs text-slate-400">
                      Vibrant pigment ink cylinders for high-fidelity brochures & catalogues.
                    </span>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10">
                    <span className="block font-bold text-white text-sm mb-1">
                      Heavy-Duty Rexine Binding
                    </span>
                    <span className="text-xs text-slate-400">
                      Sturdy gold foil embossed binding for factory statutory registers.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Leadership Profile */}
            <div className="bg-slate-900/80 rounded-3xl p-8 sm:p-12 border border-white/10 shadow-xl flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border border-white/20 shadow-lg bg-gradient-to-tr from-pink-600 to-amber-500 flex-shrink-0 flex items-center justify-center font-extrabold text-4xl text-white">
                HK
              </div>

              <div className="space-y-3 text-center md:text-left">
                <span className="text-xs font-bold uppercase tracking-widest text-orange-400 block">
                  Proprietor & Technical Director
                </span>
                <h3 className="font-extrabold text-2xl sm:text-3xl text-white uppercase">
                  Hari Kumar K
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                  With over 15 years in industrial and commercial print engineering, Hari Kumar K directly oversees quotation accuracy, substrate verification, client design consultations, and on-time doorstep dispatch across Hyderabad.
                </p>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2 text-xs font-bold text-slate-300">
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <Phone className="w-4 h-4" /> +91 {COMPANY_INFO.primaryPhone}
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <MapPin className="w-4 h-4 text-orange-400" /> Chintal, Hyderabad – 500054
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Quick Actions */}
      <StickyActions />
    </div>
  );
}
