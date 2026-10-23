"use client";

import React from "react";
import { MapPin, Navigation, Clock, Phone, ExternalLink } from "lucide-react";
import { COMPANY_INFO } from "@/data/printingData";

export default function MapSection() {
  const embedMapUrl = `https://maps.google.com/maps?q=${COMPANY_INFO.coordinates.lat},${COMPANY_INFO.coordinates.lng}&z=17&output=embed`;

  return (
    <section className="py-16 bg-[#080b11] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold text-orange-400 uppercase tracking-widest block mb-1">
              Find Our Printing Press
            </span>
            <h2 className="font-extrabold text-2xl sm:text-3xl text-white tracking-tight uppercase">
              Location & Google Maps
            </h2>
          </div>

          <a
            href={COMPANY_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-orange-400 hover:text-white bg-slate-900 hover:bg-slate-800 border border-orange-500/30 px-5 py-2.5 rounded-full transition w-fit shadow-md"
          >
            <Navigation className="w-4 h-4 text-orange-400" />
            <span>Open Directions in Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Map Frame with Floating Information Overlay */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-slate-950">
          <iframe
            src={embedMapUrl}
            width="100%"
            height="460"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sri Prasiddha Offset Location Map"
            className="w-full h-[460px] filter invert-[90%] hue-rotate-180 contrast-125 brightness-90"
          />

          {/* Floating Details Card */}
          <div className="md:absolute bottom-6 left-6 max-w-sm w-full bg-slate-900/90 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/15 m-4 md:m-0 text-white">
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-cyan-400 mb-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>Chintal Facility</span>
            </div>

            <h3 className="font-extrabold text-lg text-white mb-1">
              Sri Prasiddha Offset
            </h3>

            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              # 6-279/9, Kakatiya Nagar, Near Vegetable Market, Chintal, Hyderabad – 500054.
            </p>

            <div className="pt-3 border-t border-white/10 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>Working: <strong>Mon - Sat (9 AM - 9 PM)</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-orange-400" />
                <span>Direct: <strong>+91 {COMPANY_INFO.primaryPhone}</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
