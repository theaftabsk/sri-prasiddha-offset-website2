"use client";

import React, { useState } from "react";
import { MessageCircle, Phone, X } from "lucide-react";
import { COMPANY_INFO } from "@/data/printingData";

export default function StickyActions() {
  const [showTooltip, setShowTooltip] = useState(false); // keep closed by default on mobile to prevent blocking

  return (
    <aside
      aria-label="Quick contact"
      className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2 pointer-events-auto"
    >
      {/* Tooltip popover */}
      {showTooltip && (
        <div className="bg-slate-900/95 backdrop-blur-md text-white text-[11px] sm:text-xs px-3 py-1.5 rounded-xl shadow-xl border border-slate-700 flex items-center gap-2 max-w-[200px] animate-fade-in mb-1">
          <span>Need bulk rates? Chat with Hari Kumar!</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5 rounded-full"
            aria-label="Close tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Buttons */}
      <div className="flex flex-col gap-2 items-center">
        {/* Call Button */}
        <a
          href={`tel:${COMPANY_INFO.primaryPhone}`}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center shadow-md shadow-red-500/30 transition-all duration-200 transform hover:scale-105 active:scale-95"
          title={`Call ${COMPANY_INFO.primaryPhone}`}
          aria-label={`Call office directly at ${COMPANY_INFO.primaryPhone}`}
        >
          <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/91${COMPANY_INFO.primaryPhone}?text=${encodeURIComponent(
            "Hello Hari Kumar garu, I am visiting the Sri Prasiddha Offset website and would like to enquire about printing services."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#22c55e] hover:bg-[#16a34a] text-white flex items-center justify-center shadow-lg shadow-emerald-500/40 transition-all duration-200 transform hover:scale-105 active:scale-95 relative"
          title="Chat on WhatsApp"
          aria-label="Chat with Hari Kumar on WhatsApp"
        >
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-ping" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white" />
        </a>
      </div>
    </aside>
  );
}
