"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CmykDarkHero from "@/components/CmykDarkHero";
import CredentialsAndStats from "@/components/CredentialsAndStats";
import ServicesExplorer from "@/components/ServicesExplorer";
import ClientsSection from "@/components/ClientsSection";
import GallerySection from "@/components/GallerySection";
import VisitingCardSpotlight from "@/components/VisitingCardSpotlight";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import StickyActions from "@/components/StickyActions";
import { ArrowUpRight } from "lucide-react";

export default function HomePage() {
  const handleSelectService = (serviceName: string) => {
    window.location.href = `/contact?service=${encodeURIComponent(serviceName)}`;
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#080b11] text-white">
      {/* 1. Header Navigation Bar */}
      <Navbar />

      {/* 2. Main Content */}
      <main className="flex-1">
        {/* CMYK Dark Hero (4-Color Glow, Quick Direct Quote Desk) */}
        <CmykDarkHero />

        {/* Credentials Ticker & 4 Stat Counter Cards */}
        <CredentialsAndStats />

        {/* Services Showcase Preview */}
        <div className="bg-[#080b11] py-4">
          <ServicesExplorer onSelectService={handleSelectService} />
          <div className="pb-16 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-cyan-500 via-pink-600 to-amber-500 hover:opacity-90 text-white font-extrabold text-xs uppercase tracking-widest px-8 py-4 rounded-full shadow-lg shadow-pink-500/20 transition transform hover:-translate-y-0.5"
            >
              <span>VIEW FULL SERVICE CATALOGUE (17 SERVICES)</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </Link>
          </div>
        </div>

        {/* 26 Valued Clients Section */}
        <div className="bg-[#080b11]">
          <ClientsSection />
          <div className="pb-16 text-center">
            <Link
              href="/clients"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-orange-500/30 hover:border-orange-500 text-orange-400 hover:text-white font-extrabold text-xs uppercase tracking-widest px-8 py-3.5 rounded-full shadow-md transition transform hover:-translate-y-0.5"
            >
              <span>VIEW ALL 26 VERIFIED CORPORATE CLIENTS</span>
              <ArrowUpRight className="w-4 h-4 text-orange-400" />
            </Link>
          </div>
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
