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
    <nav className="sticky top-0 z-50 bg-[#080b11]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl transition-all duration-300">
      {/* 4-Color CMYK Signature Spectrum Strip on Very Top */}
      <div className="flex h-1 w-full">
        <div className="flex-1 bg-[#00d2ff]" title="Cyan" />
        <div className="flex-1 bg-[#ff007a]" title="Magenta" />
        <div className="flex-1 bg-[#ffdf00]" title="Yellow" />
        <div className="flex-1 bg-[#ff6b35]" title="Spot Orange" />
      </div>

      {/* Mobile Top Helpline & Get Quote Quick Strip */}
      <div className="md:hidden bg-slate-900 text-white px-4 py-2 flex items-center justify-between text-xs font-bold border-b border-white/5">
        <a
          href={`tel:${COMPANY_INFO.primaryPhone}`}
          className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300"
        >
          <Phone className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>HELP: <strong className="text-white">+{COMPANY_INFO.primaryPhone}</strong></span>
        </a>

        <Link
          href="/contact#quote"
          className="inline-flex items-center gap-1 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm"
        >
          <span>GET QUOTE</span>
          <ArrowUpRight className="w-3 h-3" />
        </Link>
      </div>

      {/* Main Navbar Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-4">
        {/* Brand Left */}
        <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
            <Image
              src="/assets/images/logo.png"
              alt="Sri Prasiddha Offset CMYK Logo"
              fill
              className="object-contain drop-shadow-[0_0_12px_rgba(0,210,255,0.4)]"
              priority
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base sm:text-xl tracking-tight text-white uppercase">
                SRI PRASIDDHA
              </span>
              <span className="font-extrabold text-base sm:text-xl tracking-tight bg-gradient-to-r from-orange-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent uppercase">
                OFFSET
              </span>
            </div>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="bg-[#831843] text-white text-[9px] font-black px-1.5 py-0.2 rounded-xs uppercase tracking-wider">
                A Complete
              </span>
              <span className="bg-[#10b981] text-white text-[9px] font-black px-1.5 py-0.2 rounded-xs uppercase tracking-wider">
                Printing Solutions
              </span>
            </div>
          </div>
        </Link>

        {/* Center Nav Pills (Dark Glass Container) */}
        <div className="hidden lg:flex items-center bg-slate-900/80 p-1.5 rounded-full border border-white/10 shadow-inner backdrop-blur-md">
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
                    ? "bg-gradient-to-r from-orange-500 to-rose-600 text-white shadow-lg shadow-orange-500/30"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right Action Widgets */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Desktop Helpline Phone Pill */}
          <a
            href={`tel:${COMPANY_INFO.primaryPhone}`}
            className="hidden md:flex items-center gap-2.5 bg-slate-900/80 hover:bg-slate-850 text-cyan-400 px-4 py-2 rounded-full border border-cyan-500/30 text-xs font-bold transition-all duration-300 transform hover:scale-102 hover:border-cyan-400 shadow-[0_0_15px_rgba(0,210,255,0.15)]"
          >
            <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <div className="flex flex-col text-left leading-tight">
              <span className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">
                DIRECT HELPLINE
              </span>
              <span className="font-extrabold text-[12px] text-white">
                +{COMPANY_INFO.primaryPhone}
              </span>
            </div>
          </a>

          {/* GET QUOTE Button */}
          <Link
            href="/contact#quote"
            className="inline-flex items-center gap-1.5 bg-gradient-to-r from-orange-500 via-rose-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-extrabold text-[11px] sm:text-xs px-4 sm:px-6 py-2.5 rounded-full shadow-lg shadow-orange-500/25 transition-all duration-300 transform hover:-translate-y-0.5 uppercase tracking-wider whitespace-nowrap"
          >
            <span>GET QUOTE</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white bg-slate-900/90 hover:bg-slate-800 rounded-xl border border-white/10 transition"
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X className="w-5 h-5 text-rose-400" /> : <Menu className="w-5 h-5 text-cyan-400" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-slate-950/98 backdrop-blur-2xl border-t border-white/10 px-5 py-5 space-y-3 shadow-2xl animate-fade-in">
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
                      ? "bg-gradient-to-r from-orange-500 to-rose-600 text-white shadow-md shadow-orange-500/20"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="text-xs font-semibold">● Active</span>}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <Link
              href="/contact#quote"
              onClick={() => setMobileOpen(false)}
              className="w-full py-3 text-center font-extrabold text-white bg-gradient-to-r from-orange-500 to-rose-600 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-lg shadow-orange-500/25"
            >
              <span>GET INSTANT PRINT QUOTE</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href={`tel:${COMPANY_INFO.primaryPhone}`}
              className="w-full py-3 text-center font-bold text-cyan-400 bg-slate-900 rounded-xl text-xs flex items-center justify-center gap-2 border border-cyan-500/20"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>Call Helpline: +91 {COMPANY_INFO.primaryPhone}</span>
            </a>

            <a
              href={`https://wa.me/91${COMPANY_INFO.primaryPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 text-center font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl text-xs flex items-center justify-center gap-2 shadow-sm transition"
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
