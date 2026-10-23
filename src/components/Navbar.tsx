"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, ArrowUpRight, Menu, X, MessageCircle, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "@/data/printingData";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Clients", href: "/clients" },
    { label: "About", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all duration-300">
      {/* Precision Top Red Calibration Strip */}
      <div className="flex h-1 w-full bg-red-600">
        <div className="w-1/4 bg-[#00d2ff]" title="Cyan" />
        <div className="w-1/4 bg-[#ff007a]" title="Magenta" />
        <div className="w-1/4 bg-[#ffdf00]" title="Yellow" />
        <div className="w-1/4 bg-red-600" title="Crimson Key" />
      </div>

      {/* Mobile Top Helpline & Get Quote Quick Strip */}
      <div className="sm:hidden bg-red-50/90 text-red-950 px-3.5 py-1.5 flex items-center justify-between text-xs font-bold border-b border-red-200/70">
        <a
          href={`tel:${COMPANY_INFO.primaryPhone}`}
          className="inline-flex items-center gap-1.5 text-red-700 hover:text-red-800 text-[11px]"
        >
          <Phone className="w-3 h-3 text-red-600 animate-pulse" />
          <span>HELP: <strong className="text-slate-900">+{COMPANY_INFO.primaryPhone}</strong></span>
        </a>

        <Link
          href="/contact#quote"
          className="inline-flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider shadow-xs transition"
        >
          <span>GET QUOTE</span>
          <ArrowUpRight className="w-2.5 h-2.5" />
        </Link>
      </div>

      {/* Main Navbar Row */}
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand Left */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group flex-shrink min-w-0">
          <div className="relative w-8 h-8 sm:w-11 sm:h-11 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/assets/images/logo.png"
              alt="Sri Prasiddha Offset Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1 sm:gap-1.5 truncate">
              <span className="font-extrabold text-xs sm:text-lg lg:text-xl tracking-tight text-slate-900 uppercase truncate">
                SRI PRASIDDHA
              </span>
              <span className="font-extrabold text-xs sm:text-lg lg:text-xl tracking-tight text-red-600 uppercase">
                OFFSET
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-1 mt-0.5">
              <span className="bg-red-700 text-white text-[9px] font-black px-1.5 py-0.2 rounded-xs uppercase tracking-wider">
                A Complete
              </span>
              <span className="bg-slate-800 text-white text-[9px] font-black px-1.5 py-0.2 rounded-xs uppercase tracking-wider">
                Printing Solutions
              </span>
            </div>
          </div>
        </Link>

        {/* Center Nav Pills (Clean White / Slate Container) */}
        <div className="hidden lg:flex items-center bg-slate-100 p-1.5 rounded-full border border-slate-200/90 shadow-inner">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 lg:px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                  isActive
                    ? "bg-red-600 text-white shadow-md shadow-red-600/20"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right Action Widgets */}
        <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
          {/* Desktop Helpline Phone Pill */}
          <a
            href={`tel:${COMPANY_INFO.primaryPhone}`}
            className="hidden md:flex items-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-800 px-3.5 py-2 rounded-full border border-slate-200 text-xs font-bold transition hover:border-red-300"
          >
            <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <div className="flex flex-col text-left leading-tight">
              <span className="text-[9px] uppercase tracking-widest text-slate-500 font-bold">
                HELPLINE
              </span>
              <span className="font-extrabold text-[12px] text-slate-900">
                +{COMPANY_INFO.primaryPhone}
              </span>
            </div>
          </a>

          {/* GET QUOTE Button (Hidden on tiny screens to avoid overflow) */}
          <Link
            href="/contact#quote"
            className="hidden sm:inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white font-extrabold text-[11px] sm:text-xs px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-md shadow-red-600/20 transition uppercase tracking-wider whitespace-nowrap"
          >
            <span>GET QUOTE</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile Quick Call Button */}
          <a
            href={`tel:${COMPANY_INFO.primaryPhone}`}
            className="sm:hidden w-9 h-9 rounded-xl bg-red-50 border border-red-200 text-red-600 flex items-center justify-center transition active:scale-95"
            aria-label="Call Helpline"
          >
            <Phone className="w-4 h-4 text-red-600" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl border border-slate-200 flex items-center justify-center transition active:scale-95"
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X className="w-5 h-5 text-red-600" /> : <Menu className="w-5 h-5 text-slate-800" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-3 shadow-2xl animate-fade-in max-h-[calc(100vh-80px)] overflow-y-auto">
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
                  className={`py-2.5 px-3.5 rounded-xl text-sm font-bold flex items-center justify-between transition ${
                    isActive
                      ? "bg-red-600 text-white shadow-sm"
                      : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="text-[11px] font-bold">● Active</span>}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <Link
              href="/contact#quote"
              onClick={() => setMobileOpen(false)}
              className="w-full py-2.5 text-center font-extrabold text-white bg-red-600 hover:bg-red-700 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md shadow-red-600/20 transition"
            >
              <span>GET INSTANT PRINT QUOTE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <a
              href={`tel:${COMPANY_INFO.primaryPhone}`}
              className="w-full py-2.5 text-center font-bold text-red-700 bg-red-50 rounded-xl text-xs flex items-center justify-center gap-2 border border-red-200"
            >
              <Phone className="w-3.5 h-3.5 text-red-600" />
              <span>Call Helpline: +91 {COMPANY_INFO.primaryPhone}</span>
            </a>

            <a
              href={`https://wa.me/91${COMPANY_INFO.primaryPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-center font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl text-xs flex items-center justify-center gap-2 shadow-sm transition"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp Hari Kumar Directly</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
