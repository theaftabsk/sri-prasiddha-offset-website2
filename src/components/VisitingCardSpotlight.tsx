"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Copy, Check, ExternalLink, MessageCircle, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "@/data/printingData";

export default function VisitingCardSpotlight() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    });
  };

  return (
    <section id="contact" className="py-20 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-widest block mb-2">
            Official Contact & Direct Numbers
          </span>
          <h2 className="font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4 uppercase">
            Connect Directly with Sri Prasiddha Offset
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Reach out directly to proprietor Hari Kumar K for bulk industrial rate estimates, urgent same-day jobs, or factory visit appointments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: 3D Visiting Card Preview Frame */}
          <div className="lg:col-span-6">
            <div className="bg-slate-50 rounded-3xl p-5 sm:p-7 shadow-xl border border-slate-200 hover:border-orange-500/40 transition-all duration-300">
              <div className="relative aspect-16/9 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white group">
                <Image
                  src="/assets/images/visiting_card.png"
                  alt="Official Visiting Card of Sri Prasiddha Offset - Hari Kumar K"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-102"
                />
              </div>

              <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span className="font-bold text-slate-700 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-orange-500" /> Official Business Card
                </span>
                <span className="text-slate-500">Chintal, Hyderabad</span>
              </div>
            </div>
          </div>

          {/* Right: Direct Contact Actions */}
          <div className="lg:col-span-6 space-y-4">
            {/* Primary Phone */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 shadow-sm flex items-center justify-between gap-4 hover:border-orange-500/40 hover:bg-white transition">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0 border border-orange-100">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                    Primary Office Number (Hari Kumar K)
                  </span>
                  <a
                    href={`tel:${COMPANY_INFO.primaryPhone}`}
                    className="text-lg sm:text-xl font-extrabold text-slate-900 hover:text-orange-600 transition"
                  >
                    +91 {COMPANY_INFO.primaryPhone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(COMPANY_INFO.primaryPhone, "phone1")}
                className="inline-flex items-center gap-1 text-xs font-bold text-slate-700 hover:text-orange-600 bg-white hover:bg-orange-50 px-3.5 py-2 rounded-lg border border-slate-200 transition"
              >
                {copiedKey === "phone1" ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-600">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Alternate Phone */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 shadow-sm flex items-center justify-between gap-4 hover:border-orange-500/40 hover:bg-white transition">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0 border border-orange-100">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                    Second Choice / Alternate Number
                  </span>
                  <a
                    href={`tel:${COMPANY_INFO.altPhone}`}
                    className="text-lg sm:text-xl font-extrabold text-slate-900 hover:text-orange-600 transition"
                  >
                    +91 {COMPANY_INFO.altPhone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(COMPANY_INFO.altPhone, "phone2")}
                className="inline-flex items-center gap-1 text-xs font-bold text-slate-700 hover:text-orange-600 bg-white hover:bg-orange-50 px-3.5 py-2 rounded-lg border border-slate-200 transition"
              >
                {copiedKey === "phone2" ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-600">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Email */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 shadow-sm flex items-center justify-between gap-4 hover:border-orange-500/40 hover:bg-white transition">
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0 border border-orange-100">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                    Official Quotation Email
                  </span>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-sm sm:text-base font-bold text-slate-900 hover:text-orange-600 transition truncate block"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(COMPANY_INFO.email, "email")}
                className="inline-flex items-center gap-1 text-xs font-bold text-slate-700 hover:text-orange-600 bg-white hover:bg-orange-50 px-3.5 py-2 rounded-lg border border-slate-200 transition flex-shrink-0"
              >
                {copiedKey === "email" ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-600">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Address */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 shadow-sm flex items-start justify-between gap-4 hover:border-orange-500/40 hover:bg-white transition">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0 border border-orange-100 mt-0.5">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-0.5">
                    Factory & Office Address
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                    {COMPANY_INFO.address}
                  </p>
                  <span className="text-xs text-slate-500 mt-1 block">
                    Landmark: Near Vegetable Market, Kakatiya Nagar, Chintal
                  </span>
                </div>
              </div>

              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-orange-600 bg-orange-50 hover:bg-orange-100 border border-orange-200 px-3 py-2 rounded-lg transition flex-shrink-0"
              >
                <span>Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Direct Connect Buttons */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={`https://wa.me/91${COMPANY_INFO.primaryPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-extrabold text-xs sm:text-sm py-3.5 px-6 rounded-xl shadow-md transition"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-900 font-extrabold text-xs sm:text-sm py-3.5 px-6 rounded-xl border border-slate-300 shadow-sm hover:border-orange-500 transition"
              >
                <MapPin className="w-4 h-4 text-orange-500" />
                <span>Open Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
