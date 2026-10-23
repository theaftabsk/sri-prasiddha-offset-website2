"use client";

import React, { useState } from "react";
import {
  BookOpenCheck,
  LayoutGrid,
  AlertTriangle,
  Layers,
  FileText,
  Receipt,
  CreditCard,
  Contact,
  Newspaper,
  BookOpen,
  Tag,
  Scroll,
  Sparkles,
  Presentation,
  Shirt,
  Heart,
  BookMarked,
  ArrowRight,
  MessageCircle,
  Check,
} from "lucide-react";
import { SERVICES_DATA, ServiceItem, COMPANY_INFO } from "@/data/printingData";

interface ServicesExplorerProps {
  onSelectService: (serviceName: string) => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  BookOpenCheck,
  LayoutGrid,
  AlertTriangle,
  Layers,
  FileText,
  Receipt,
  CreditCard,
  Contact,
  Newspaper,
  BookOpen,
  Tag,
  Scroll,
  Sparkles,
  Presentation,
  Shirt,
  Heart,
  BookMarked,
};

const CATEGORIES = [
  { key: "all", label: "All 17 Services" },
  { key: "industrial", label: "Industrial Printing & Signage" },
  { key: "stationery", label: "Corporate Stationery" },
  { key: "marketing", label: "Marketing Materials" },
  { key: "promotional", label: "Promotional & Custom" },
];

export default function ServicesExplorer({ onSelectService }: ServicesExplorerProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredServices =
    selectedCategory === "all"
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.categoryKey === selectedCategory);

  return (
    <section id="services" className="py-20 bg-[#0b0f19] text-white relative">
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-orange-400 uppercase tracking-widest block mb-2">
            Complete Print Solutions Catalogue
          </span>
          <h2 className="font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-4 uppercase">
            Industrial, Commercial & Custom Printing Services
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            High-precision offset and digital print engineering with premium finishing, die-cutting, embossing, and automated binding.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                selectedCategory === cat.key
                  ? "bg-gradient-to-r from-orange-500 via-rose-500 to-pink-600 text-white shadow-lg shadow-orange-500/25"
                  : "bg-slate-900/90 text-slate-300 hover:text-white border border-white/10 hover:border-white/25"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredServices.map((service) => {
            const Icon = ICON_MAP[service.iconName] || FileText;

            return (
              <div
                key={service.id}
                className="bg-slate-900/70 backdrop-blur-xl rounded-3xl p-7 border border-white/10 shadow-xl hover:shadow-2xl hover:border-orange-500/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Accent Top Border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-pink-500 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-slate-800 text-orange-400 flex items-center justify-center shadow-inner group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-pink-600 group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-3 py-1 rounded-full">
                      {service.categoryKey === "industrial"
                        ? "Industrial"
                        : service.categoryKey === "stationery"
                        ? "Stationery"
                        : service.categoryKey === "marketing"
                        ? "Marketing"
                        : "Promotional"}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-xl text-white mb-2.5 leading-snug group-hover:text-orange-400 transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Specification Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.specs.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1 text-[11px] font-medium bg-slate-950/80 text-slate-300 border border-white/5 px-2.5 py-1 rounded-md"
                      >
                        <Check className="w-3 h-3 text-emerald-400" />
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectService(service.name)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-orange-400 hover:text-orange-300 transition"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`https://wa.me/91${COMPANY_INFO.primaryPhone}?text=${encodeURIComponent(
                      `Hi Hari Kumar garu, I need a quotation for ${service.name} from Sri Prasiddha Offset.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition bg-emerald-950/50 hover:bg-emerald-950/80 border border-emerald-500/30 px-3 py-1.5 rounded-full"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
