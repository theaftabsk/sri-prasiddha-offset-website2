"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import WhiteGlassHero from "@/components/WhiteGlassHero";
import CredentialsAndStats from "@/components/CredentialsAndStats";
import ServicesExplorer from "@/components/ServicesExplorer";
import ClientsSection from "@/components/ClientsSection";
import GallerySection from "@/components/GallerySection";
import VisitingCardSpotlight from "@/components/VisitingCardSpotlight";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import StickyActions from "@/components/StickyActions";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Printer, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "@/data/printingData";

export default function HomePage() {
  const handleSelectService = (serviceName: string) => {
    window.location.href = `/contact?service=${encodeURIComponent(serviceName)}`;
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Header Navigation Bar (Sri Ujjwala Met Lab White Glass Style) */}
      <Navbar />

      {/* 2. Main Content */}
      <main className="flex-1">
        {/* White Glass Hero (Playfair display serif, cyan accent, direct desk card) */}
        <WhiteGlassHero />

        {/* Black Credentials Ticker & 4 White Glass Stat Counter Cards */}
        <CredentialsAndStats />

        {/* Services Showcase Preview */}
        <div className="bg-slate-50">
          <ServicesExplorer onSelectService={handleSelectService} />
          <div className="pb-16 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs uppercase tracking-widest px-8 py-4 rounded-full shadow-lg transition transform hover:-translate-y-0.5"
            >
              <span>VIEW FULL SERVICE CATALOGUE (17 SERVICES)</span>
              <ArrowUpRight className="w-4 h-4 text-cyan-400" />
            </Link>
          </div>
        </div>

        {/* 26 Valued Clients Section */}
        <ClientsSection />
        <div className="bg-white pb-14 text-center">
          <Link
            href="/clients"
            className="inline-flex items-center gap-2 bg-[#701a35] hover:bg-[#500f24] text-white font-extrabold text-xs uppercase tracking-widest px-8 py-3.5 rounded-full shadow-md transition transform hover:-translate-y-0.5"
          >
            <span>VIEW ALL 26 VERIFIED CORPORATE CLIENTS</span>
            <ArrowUpRight className="w-4 h-4 text-orange-300" />
          </Link>
        </div>

        {/* Gallery Preview */}
        <GallerySection />

        {/* Official Visiting Card & Contact Information */}
        <VisitingCardSpotlight />

        {/* Location & Google Maps */}
        <MapSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Sticky Actions (WhatsApp + Phone) */}
      <StickyActions />
    </div>
  );
}
