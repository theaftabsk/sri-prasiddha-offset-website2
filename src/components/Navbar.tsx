"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, ArrowUpRight, Menu, X, MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/data/printingData";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Clients", href: "/clients" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all duration-300">
      {/* 1. Mobile Top Helpline & Get Quote Quick Strip */}
      <div className="md:hidden bg-[#0284c7] text-white px-3 py-1.5 flex items-center justify-between text-xs font-bold">
        <a
          href={`tel:${COMPANY_INFO.primaryPhone}`}
          className="inline-flex items-center gap-1.5 text-cyan-50 hover:text-white"
        >
          <Phone className="w-3.5 h-3.5 text-cyan-200" />
          <span>HELPLINE: <strong>+{COMPANY_INFO.primaryPhone}</strong></span>
        </a>

        <Link
          href="/contact#quote"
          className="inline-flex items-center gap-1 bg-[#c28420] hover:bg-[#a66f17] text-white px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-xs"
        >
          <span>GET QUOTE</span>
          <ArrowUpRight className="w-3 h-3" />
        </Link>
      </div>

      {/* 2. Main Navbar Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-3">
        {/* Brand Left */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group flex-shrink-0">
          <div className="relative w-9 h-9 sm:w-11 sm:h-11 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/assets/images/logo.png"
              alt="Sri Prasiddha Offset"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="font-serif font-black text-sm sm:text-xl tracking-tight text-slate-900 uppercase">
                SRI PRASIDDHA
              </span>
              <span className="font-serif font-black text-sm sm:text-xl tracking-tight text-cyan-600 uppercase">
                OFFSET
              </span>
            </div>
            <span className="text-[8px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-wider -mt-0.5 truncate">
              A Complete Printing Solutions
            </span>
          </div>
        </Link>

        {/* Center Nav Pills (Desktop Only) */}
        <div className="hidden lg:flex items-center bg-slate-100/80 p-1.5 rounded-full border border-slate-200/70 shadow-inner">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                  isActive
                    ? "bg-cyan-500 text-white shadow-sm shadow-cyan-500/25"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/90"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right Action Widgets */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          {/* Desktop Helpline Pill */}
          <a
            href={`tel:${COMPANY_INFO.primaryPhone}`}
            className="hidden md:flex items-center gap-2 bg-[#e0f2fe] text-[#0284c7] hover:bg-[#bae6fd] px-3.5 py-2 rounded-full border border-[#bae6fd] text-xs font-bold transition-all duration-200 transform hover:scale-102"
          >
            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#0284c7] shadow-xs">
              <Phone className="w-3 h-3" />
            </div>
            <div className="flex flex-col text-left leading-tight">
              <span className="text-[9px] uppercase tracking-wider text-[#0284c7]/80 font-bold">
                HELPLINE
              </span>
              <span className="font-extrabold text-[12px]">
                +{COMPANY_INFO.primaryPhone}
              </span>
            </div>
          </a>

          {/* Desktop GET QUOTE Button */}
          <Link
            href="/contact#quote"
            className="hidden md:inline-flex items-center gap-1.5 bg-[#c28420] hover:bg-[#a66f17] text-white font-extrabold text-xs px-5 py-2.5 rounded-full shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 uppercase tracking-wider whitespace-nowrap"
          >
            <span>GET QUOTE</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          {/* Mobile & Tablet Hamburger Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-800 px-3 py-2 rounded-xl border border-slate-300 shadow-xs transition"
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? (
              <>
                <X className="w-5 h-5 text-red-600" />
                <span className="text-xs font-bold text-red-600">Close</span>
              </>
            ) : (
              <>
                <Menu className="w-5 h-5 text-cyan-700" />
                <span className="text-xs font-bold text-slate-800">Menu</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-5 py-5 space-y-3 shadow-2xl animate-fade-in-up">
          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`py-3 px-4 rounded-xl text-sm font-bold flex items-center justify-between transition ${
                    isActive
                      ? "bg-cyan-500 text-white shadow-sm shadow-cyan-500/20"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="text-xs font-semibold">● Active</span>}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <Link
              href="/contact#quote"
              onClick={() => setMobileOpen(false)}
              className="w-full py-3 text-center font-extrabold text-white bg-[#c28420] hover:bg-[#a66f17] rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm"
            >
              <span>GET FREE QUOTE NOW</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href={`tel:${COMPANY_INFO.primaryPhone}`}
              className="w-full py-3 text-center font-bold text-cyan-800 bg-cyan-50 rounded-xl text-xs flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-cyan-600" />
              <span>Call Helpline: +91 {COMPANY_INFO.primaryPhone}</span>
            </a>

            <a
              href={`https://wa.me/91${COMPANY_INFO.primaryPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 text-center font-bold text-white bg-emerald-500 hover:bg-emerald-600 rounded-xl text-xs flex items-center justify-center gap-2 shadow-sm transition"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Hari Kumar Directly</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
