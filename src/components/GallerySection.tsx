"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2, X, Sparkles, MessageCircle, Filter, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/printingData";

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  categoryKey: "all" | "brochures" | "stationery" | "merchandise" | "stamps";
  image: string;
  clientHighlight?: string;
  description: string;
  aspectClass?: string;
}

export const REAL_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "sample-rack",
    title: "Commercial Print Samples Display Rack",
    category: "Full Production Portfolio",
    categoryKey: "brochures",
    image: "/assets/images/sample_rack_overview.jpg",
    clientHighlight: "Live Shop Samples",
    description:
      "Comprehensive rack displaying multi-page product catalogues, jewellery discount hangtags, award certificates, restaurant menu cards, and retail branded jute carry bags.",
  },
  {
    id: "restaurant-menu-booklets",
    title: "KVR's Flight Restaurant Menu & Corporate Catalogues",
    category: "Menu Books & Brochures",
    categoryKey: "brochures",
    image: "/assets/images/brochures_and_menus.jpg",
    clientHighlight: "KVR's Flight Restaurant & Vanguard",
    description:
      "Vibrant full-color multi-page food menus printed on heavy gloss art card with thermal lamination, alongside engineering project booklets and institutional journals.",
  },
  {
    id: "school-diaries-desk-calendars",
    title: "Pallavi Model School Daily Logs & 2025 Spiral Calendars",
    category: "School Diaries & Calendars",
    categoryKey: "stationery",
    image: "/assets/images/school_diaries_calendars.png",
    clientHighlight: "Pallavi Model Schools & PRAS",
    description:
      "Custom-bound student daily log diaries with laminated color covers, interior design catalogs, wedding invitation stationery, and corporate desk spiral calendars.",
  },
  {
    id: "corporate-apparel",
    title: "Corporate Polo T-Shirts & Custom Embroidered Caps",
    category: "Apparel & Headwear",
    categoryKey: "merchandise",
    image: "/assets/images/custom_tshirts_caps.png",
    clientHighlight: "Uniforms & Factory Merchandise",
    description:
      "Corporate uniform polo t-shirts in royal blue, sky blue, crimson red, jet black, emerald green and purple, accompanied by embroidered safety and staff caps.",
  },
  {
    id: "calendars-lanyards",
    title: "2026 Wall Calendars & Official Staff ID Lanyards",
    category: "Calendars & Identity Lanyards",
    categoryKey: "stationery",
    image: "/assets/images/calendars_and_lanyards.jpg",
    clientHighlight: "BBMA & Sri Lakshmi Narasimha",
    description:
      "Large-format 2026 Telugu and English offset-printed wall calendars, paired with premium satin neck lanyards and corporate smart ID cards (AWS Frontier).",
  },
  {
    id: "stamps-and-seals",
    title: "Pre-Inked Flash Stamps & Self-Inking Seals",
    category: "Official Seals & Stamps",
    categoryKey: "stamps",
    image: "/assets/images/stamps_and_seals.jpg",
    clientHighlight: "Trodat, Super Stamper & Exmark",
    description:
      "Ready-to-use precision flash stamps, round institutional seals, pocket stampers, and replaceable ink cartridges for factories, doctors, schools, and offices.",
  },
  {
    id: "custom-mug-signage",
    title: "AQUA X Branded Coffee Mug & Earth Pit Signage",
    category: "Mugs & Safety Signage",
    categoryKey: "merchandise",
    image: "/assets/images/custom_mug_and_signage.jpg",
    clientHighlight: "AQUA X & Industrial Earth Pit",
    description:
      "Direct dye-sublimation gloss ceramic mug with 'AQUA X' brand logo alongside heavy-duty 'Earth Pit No.' industrial retroreflective precaution compliance board.",
  },
  {
    id: "wedding-stationery",
    title: "Suramalla Wedding Invitations & Satin Rosettes",
    category: "Invitations & Event Badges",
    categoryKey: "stationery",
    image: "/assets/images/print_stationery_samples.jpg",
    clientHighlight: "Wedding Cards & Event Ribbons",
    description:
      "Gold-foiled religious wedding invitations, multi-color pleated award rosettes, jewellery discount vouchers, and corporate presentation folders.",
  },
];

const CATEGORIES = [
  { key: "all", label: "All Samples (8)" },
  { key: "brochures", label: "Brochures & Menus" },
  { key: "stationery", label: "Diaries & Calendars" },
  { key: "merchandise", label: "T-Shirts, Caps & Mugs" },
  { key: "stamps", label: "Stamps & Seals" },
] as const;

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems = activeCategory === "all"
    ? REAL_GALLERY_ITEMS
    : REAL_GALLERY_ITEMS.filter((item) => item.categoryKey === activeCategory);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-orange-950">AUTHENTIC IN-HOUSE WORK PHOTOS</span>
            <span className="text-orange-300">•</span>
            <span className="text-orange-600 font-bold">100% REAL SAMPLES</span>
          </div>

          <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight mb-4 uppercase">
            LIVE SAMPLE SHOWCASE & WORK GALLERY
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Real photos from our Chintal production facility and display racks — featuring actual jobs completed for Pallavi Model Schools, KVR Flight Restaurant, BBMA, corporate apparel, Trodat stamps, and custom packaging.
          </p>
        </div>

        {/* Filter Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-orange-500 text-white shadow-md shadow-orange-500/25 scale-105"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border border-slate-200"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-slate-200 hover:border-orange-500 transition-all duration-300 cursor-pointer bg-slate-900 flex flex-col justify-end aspect-4/5"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-5 text-white">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-orange-200 bg-orange-600/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-orange-400/30">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-90 group-hover:opacity-100 group-hover:bg-orange-500 transition-all">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </div>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white mb-1.5 leading-snug line-clamp-2">
                  {item.title}
                </h3>

                {item.clientHighlight && (
                  <div className="flex items-center gap-1.5 text-[11px] text-orange-300 font-semibold mb-1">
                    <CheckCircle2 className="w-3 h-3 text-orange-400 shrink-0" />
                    <span className="truncate">{item.clientHighlight}</span>
                  </div>
                )}

                <p className="text-[11px] text-slate-300 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-orange-50 via-white to-orange-50 border border-orange-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">
              Want to see physical samples at our Hyderabad facility?
            </h4>
            <p className="text-slate-600 text-xs sm:text-sm">
              Visit proprietor Hari Kumar K at our Chintal workshop or request samples delivered to your factory/office.
            </p>
          </div>

          <a
            href={`https://wa.me/91${COMPANY_INFO.primaryPhone}?text=${encodeURIComponent(
              "Hello Hari Kumar garu, I saw your live work samples on the website. I want to inspect print substrates and request sample copies for our business."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-md transition transform hover:-translate-y-0.5 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Request Sample Kit (+91 {COMPANY_INFO.primaryPhone})</span>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/20 flex flex-col max-h-[92vh]"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-orange-500 text-white flex items-center justify-center transition cursor-pointer"
              aria-label="Close image modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-4/3 w-full bg-black flex-1 min-h-[300px] sm:min-h-[420px]">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Modal Footer Details */}
            <div className="p-5 sm:p-6 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex-1 pr-2">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-orange-400 bg-orange-950/80 border border-orange-500/40 px-2.5 py-0.5 rounded-full">
                    {selectedImage.category}
                  </span>
                  {selectedImage.clientHighlight && (
                    <span className="text-[11px] text-emerald-400 font-semibold">
                      • {selectedImage.clientHighlight}
                    </span>
                  )}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                  {selectedImage.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedImage.description}
                </p>
              </div>

              <a
                href={`https://wa.me/91${COMPANY_INFO.primaryPhone}?text=${encodeURIComponent(
                  `Hello Hari Kumar garu, I am viewing the real sample "${selectedImage.title}" on your website and would like to order/inquire for our company.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md transition whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
