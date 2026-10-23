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
    <section id="services" className="py-20 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-red-600 uppercase tracking-widest block mb-2 bg-red-50 border border-red-200/80 px-3.5 py-1 rounded-full w-fit mx-auto">
            Complete Print Solutions Catalogue
          </span>
          <h2 className="font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4 uppercase">
            Industrial, Commercial & Custom Printing Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            High-precision offset and digital print engineering with premium finishing, die-cutting, embossing, and automated binding.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                selectedCategory === cat.key
                  ? "bg-red-600 text-white shadow-md shadow-red-600/20"
                  : "bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 border border-slate-200"
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
                className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-red-300 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Accent Top Border */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shadow-xs group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">
                      {service.categoryKey === "industrial"
                        ? "Industrial"
                        : service.categoryKey === "stationery"
                        ? "Stationery"
                        : service.categoryKey === "marketing"
                        ? "Marketing"
                        : "Promotional"}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-xl text-slate-900 mb-2.5 leading-snug group-hover:text-red-600 transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Specification Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.specs.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1 text-[11px] font-medium bg-slate-50 text-slate-700 border border-slate-200 px-2.5 py-1 rounded-md"
                      >
                        <Check className="w-3 h-3 text-red-600" />
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectService(service.name)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-red-600 hover:text-red-700 transition"
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
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3 py-1.5 rounded-full"
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
