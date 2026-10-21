"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import CredentialsAndStats from "@/components/CredentialsAndStats";
import QuoteCalculator from "@/components/QuoteCalculator";
import VisitingCardSpotlight from "@/components/VisitingCardSpotlight";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import StickyActions from "@/components/StickyActions";
import { MessageCircle, ArrowUpRight, Phone, MapPin, Mail } from "lucide-react";
import { COMPANY_INFO } from "@/data/printingData";

export default function ContactPage() {
  const [initialService, setInitialService] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const s = params.get("service");
      if (s) setInitialService(s);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Contact Hero Header */}
        <section className="pt-14 pb-16 bg-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 bg-[#fef3c7]/60 border border-[#fde68a] text-[#92400e] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-6 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#b45309]" />
              <span>DIRECT FACTORY DESK & VISITATION</span>
              <span className="text-[#b45309]">•</span>
              <span>CHINTAL, HYDERABAD</span>
            </div>

            <h1 className="font-serif font-black text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.15] uppercase mb-6">
              CONTACT &{" "}
              <span className="text-cyan-600 relative inline-block">
                QUOTATION DESK
                <span className="absolute left-0 -bottom-1.5 w-full h-1 bg-red-600 rounded-full" />
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
              Reach out directly to proprietor Hari Kumar K for bulk industrial rate quotes, paper substrate consultations, or urgent same-day printing dispatches.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`https://wa.me/91${COMPANY_INFO.primaryPhone}?text=${encodeURIComponent(
                  "Hello Hari Kumar garu, I am contacting you for an instant printing quotation."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#22c55e] hover:bg-[#16a34a] text-white font-extrabold text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-md shadow-emerald-500/20 transition transform hover:-translate-y-0.5 tracking-wide"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Instant WhatsApp Inquiry (+91 {COMPANY_INFO.primaryPhone})</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.primaryPhone}`}
                className="inline-flex items-center gap-2 bg-[#0284c7] hover:bg-[#0369a1] text-white font-extrabold text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-md shadow-sky-500/20 transition transform hover:-translate-y-0.5 tracking-wide uppercase"
              >
                <Phone className="w-4 h-4" />
                <span>CALL: {COMPANY_INFO.primaryPhone}</span>
              </a>
            </div>
          </div>
        </section>

        {/* Credentials Bar & Counter Cards */}
        <CredentialsAndStats />

        {/* Official Visiting Card & Direct Phone Numbers */}
        <VisitingCardSpotlight />

        {/* Instant Quote Calculator & WhatsApp Generator */}
        <div id="quote">
          <QuoteCalculator
            selectedService={initialService}
            onClearService={() => setInitialService("")}
          />
        </div>

        {/* Google Maps & Office Location */}
        <MapSection />
      </main>

      <Footer />
      <StickyActions />
    </div>
  );
}
