"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2, X, Sparkles } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "press",
    title: "High-Speed CMYK Commercial Offset Press",
    category: "Machinery & Production",
    image: "/assets/images/hero_press.jpg",
    description:
      "State-of-the-art 4-color offset press running high volume books, registers, brochures, and commercial stationery with flawless color fidelity.",
  },
  {
    id: "industrial",
    title: "Industrial Safety Boards & Registers Display",
    category: "Industrial Printing & Signage",
    image: "/assets/images/industrial_signage.jpg",
    description:
      "OSHA & factory safety compliance boards, acrylic executive signage, and heavy-duty bound attendance and maintenance log registers.",
  },
  {
    id: "stationery",
    title: "Executive Corporate Stationery & Invoice Books",
    category: "Corporate Stationery",
    image: "/assets/images/stationery_showcase.jpg",
    description:
      "Duplicate NCR carbonless invoice books, premium executive letterheads, visiting cards, and employee PVC ID cards with branded lanyards.",
  },
  {
    id: "visiting-card",
    title: "Official Visiting Card & Identity",
    category: "Branding & Visiting Card",
    image: "/assets/images/visiting_card.png",
    description:
      "Official visiting card of Sri Prasiddha Offset featuring proprietor Hari Kumar K, direct contact numbers, and Chintal office location.",
  },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-20 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-red-600 uppercase tracking-widest block mb-2">
            Facility & Finished Work Showcase
          </span>
          <h2 className="font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4 uppercase">
            Work Samples & Production Floor
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Inspect our high-speed offset machinery, industrial caution signage boards, carbonless invoice books, corporate stationery, and finished brand merchandise.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 hover:border-red-500/50 transition-all duration-300 cursor-pointer bg-slate-950 aspect-16/10"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-red-100 bg-red-600/90 backdrop-blur-md px-3 py-1 rounded-full border border-red-400/40">
                    {item.category}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/20"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white flex items-center justify-center transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-16/10 w-full bg-black">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="p-6 sm:p-8">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-400 block mb-1">
                {selectedImage.category}
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
