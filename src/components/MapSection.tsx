"use client";

import React from "react";
import { MapPin, Navigation, Clock, Phone, ExternalLink } from "lucide-react";
import { COMPANY_INFO } from "@/data/printingData";

export default function MapSection() {
  const embedMapUrl = `https://maps.google.com/maps?q=${COMPANY_INFO.coordinates.lat},${COMPANY_INFO.coordinates.lng}&z=17&output=embed`;

  return (
    <section className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold text-orange-600 uppercase tracking-widest block mb-1">
              Find Our Printing Press
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Location & Google Maps
            </h2>
          </div>

          <a
            href={COMPANY_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 hover:text-orange-700 bg-orange-50 hover:bg-orange-100 px-4 py-2.5 rounded-full transition w-fit"
          >
            <Navigation className="w-4 h-4" />
            <span>Open Directions in Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Map Frame with Floating Information Overlay */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100">
          <iframe
            src={embedMapUrl}
            width="100%"
            height="460"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sri Prasiddha Offset Location Map"
            className="w-full h-[460px] filter saturate-110"
          />

          {/* Floating Details Card */}
          <div className="md:absolute bottom-6 left-6 max-w-sm w-full bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-slate-200 m-4 md:m-0">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>Chintal Facility</span>
            </div>

            <h3 className="font-extrabold text-lg text-slate-900 mb-1">
              Sri Prasiddha Offset
            </h3>

            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              # 6-279/9, Kakatiya Nagar, Near Vegetable Market, Chintal, Hyderabad – 500054.
            </p>

            <div className="pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>Working: <strong>Mon - Sat (9 AM - 9 PM)</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span>Direct: <strong>9542717444</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
