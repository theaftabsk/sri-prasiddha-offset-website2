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
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      <Navbar />

      <main className="flex-1">
        {/* Contact Hero Header - Clean White & Red Style */}
        <section className="relative pt-14 pb-16 bg-gradient-to-b from-red-50/30 to-white text-center overflow-hidden border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="inline-flex items-center gap-2 bg-white border border-red-200 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span className="text-slate-700">DIRECT FACTORY DESK & VISITATION</span>
              <span className="text-slate-300">•</span>
              <span className="text-red-600 font-bold">CHINTAL, HYDERABAD</span>
            </div>

            <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.12] uppercase mb-6">
              CONTACT &{" "}
              <span className="text-red-600">QUOTATION DESK</span>
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
                className="inline-flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-md transition transform hover:-translate-y-0.5 tracking-wide"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Instant WhatsApp Inquiry (+91 {COMPANY_INFO.primaryPhone})</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.primaryPhone}`}
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-md transition transform hover:-translate-y-0.5 tracking-wide uppercase"
              >
                <Phone className="w-4 h-4 text-white" />
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
