"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Search,
  MessageCircle,
  Clock,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import { COMPANY_INFO, SERVICES_DATA, CLIENTS_DATA } from "@/data/printingData";

interface HeaderProps {
  onSelectService: (serviceName: string) => void;
}

export default function Header({ onSelectService }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Search filter
  const matchingServices = searchQuery.trim()
    ? SERVICES_DATA.filter(
        (s) =>
          s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const matchingClients = searchQuery.trim()
    ? CLIENTS_DATA.filter((c) =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleSelectServiceFromSearch = (serviceName: string) => {
    onSelectService(serviceName);
    setSearchQuery("");
    setIsSearchOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Utility Notice Bar */}
      <div className="bg-gradient-to-r from-[#701a35] via-[#4a0d20] to-[#15803d] text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              A Complete Printing Solutions · Hyderabad
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-amber-300" /> Mon - Sat: 9:00 AM - 9:00 PM
            </span>
          </div>

          <div className="flex items-center gap-5 font-semibold">
            <a
              href={`tel:${COMPANY_INFO.primaryPhone}`}
              className="inline-flex items-center gap-1 text-amber-200 hover:text-white transition"
            >
              <Phone className="w-3.5 h-3.5" /> {COMPANY_INFO.primaryPhone}
            </a>
            <span className="text-white/40">|</span>
            <a
              href={`tel:${COMPANY_INFO.altPhone}`}
              className="hidden sm:inline-flex items-center gap-1 text-amber-200 hover:text-white transition"
            >
              <Phone className="w-3.5 h-3.5" /> {COMPANY_INFO.altPhone}
            </a>
            <span className="hidden sm:inline text-white/40">|</span>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="hidden lg:inline-flex items-center gap-1 text-amber-200 hover:text-white transition"
            >
              <Mail className="w-3.5 h-3.5" /> {COMPANY_INFO.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 flex-shrink-0 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-105">
            <Image
              src="/assets/images/logo.png"
              alt="Sri Prasiddha Offset Logo"
              fill
              className="object-contain drop-shadow-sm"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-orange-600 leading-none">
              SRI PRASIDDHA OFFSET
            </span>
            <div className="flex items-center gap-1 mt-1 font-bold text-[10px] tracking-wide uppercase text-white">
              <span className="bg-[#701a35] px-2 py-0.5 rounded-sm">A Complete</span>
              <span className="bg-[#15803d] px-2 py-0.5 rounded-sm">Printing Solutions</span>
            </div>
          </div>
        </Link>

        {/* Global Search Bar (Printora Dribbble style) */}
        <div className="relative hidden md:flex flex-1 max-w-md mx-4">
          <div className="w-full flex items-center bg-slate-100 border border-slate-200 rounded-full px-4 py-2 focus-within:bg-white focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-200 transition">
            <Search className="w-4 h-4 text-slate-400 mr-2" />
            <input
              type="text"
              placeholder="Search registers, bill books, safety boards, stickers..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsSearchOpen(true);
              }}
              onFocus={() => setIsSearchOpen(true)}
              className="w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-slate-400 hover:text-slate-600 text-xs px-1"
              >
                Clear
              </button>
            )}
          </div>

          {/* Autocomplete Dropdown */}
          {isSearchOpen && searchQuery.trim().length > 1 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-slate-200 p-3 z-50 max-h-96 overflow-y-auto">
              {matchingServices.length === 0 && matchingClients.length === 0 ? (
                <div className="p-4 text-center text-sm text-slate-500">
                  No direct match found. Call <strong>9542717444</strong> for custom printing!
                </div>
              ) : (
                <>
                  {matchingServices.length > 0 && (
                    <div className="mb-2">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2">
                        Printing Services ({matchingServices.length})
                      </span>
                      <div className="mt-1 space-y-1">
                        {matchingServices.slice(0, 5).map((service) => (
                          <button
                            key={service.id}
                            onClick={() => handleSelectServiceFromSearch(service.name)}
                            className="w-full text-left px-3 py-2 rounded-lg hover:bg-orange-50 flex items-center justify-between text-sm transition"
                          >
                            <span className="font-medium text-slate-800">{service.name}</span>
                            <span className="text-xs text-orange-600 bg-orange-100 font-semibold px-2 py-0.5 rounded-full">
                              Select
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {matchingClients.length > 0 && (
                    <div className="pt-2 border-t border-slate-100">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2">
                        Clients ({matchingClients.length})
                      </span>
                      <div className="mt-1 space-y-1">
                        {matchingClients.slice(0, 3).map((client) => (
                          <a
                            key={client.id}
                            href="#clients"
                            onClick={() => setIsSearchOpen(false)}
                            className="w-full text-left px-3 py-1.5 rounded-lg hover:bg-slate-50 flex items-center justify-between text-sm transition"
                          >
                            <span className="font-medium text-slate-700">{client.name}</span>
                            <span className="text-xs text-slate-400">{client.sector}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href={`https://wa.me/91${COMPANY_INFO.primaryPhone}?text=${encodeURIComponent(
              "Hi Hari Kumar garu, I need a quotation from Sri Prasiddha Offset."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm px-4 py-2.5 rounded-full shadow-md shadow-emerald-500/20 transition transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>

          <a
            href="#quote-calculator"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-md shadow-orange-500/25 transition transform hover:-translate-y-0.5"
          >
            <span>Get Free Quote</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Sub Navigation Bar - Category Pills (Printora Dribbble style) */}
      <nav className="border-t border-slate-100 bg-white py-2 overflow-x-auto scrollbar-none">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-2 whitespace-nowrap text-sm">
          <a
            href="#services"
            className="px-4 py-1.5 rounded-full bg-slate-100 hover:bg-slate-900 hover:text-white font-semibold text-slate-700 transition"
          >
            Industrial Printing & Signage
          </a>
          <a
            href="#services"
            className="px-4 py-1.5 rounded-full bg-slate-100 hover:bg-slate-900 hover:text-white font-semibold text-slate-700 transition"
          >
            Corporate Stationery
          </a>
          <a
            href="#services"
            className="px-4 py-1.5 rounded-full bg-slate-100 hover:bg-slate-900 hover:text-white font-semibold text-slate-700 transition"
          >
            Marketing Materials
          </a>
          <a
            href="#services"
            className="px-4 py-1.5 rounded-full bg-slate-100 hover:bg-slate-900 hover:text-white font-semibold text-slate-700 transition"
          >
            Promotional & Custom Printing
          </a>
          <a
            href="#clients"
            className="px-4 py-1.5 rounded-full bg-orange-50 text-orange-700 hover:bg-orange-600 hover:text-white font-bold transition flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
            Our 26 Clients
          </a>
          <a
            href="#gallery"
            className="px-4 py-1.5 rounded-full bg-slate-100 hover:bg-slate-900 hover:text-white font-semibold text-slate-700 transition"
          >
            Sample Showcase
          </a>
          <a
            href="#contact"
            className="px-4 py-1.5 rounded-full bg-slate-100 hover:bg-slate-900 hover:text-white font-semibold text-slate-700 transition"
          >
            Office & Location
          </a>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3 shadow-lg">
          <div className="flex items-center bg-slate-100 rounded-lg px-3 py-2">
            <Search className="w-4 h-4 text-slate-400 mr-2" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-sm focus:outline-none"
            />
          </div>
          <div className="flex flex-col space-y-2 pt-2">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-slate-800 font-semibold"
            >
              All Printing Services
            </a>
            <a
              href="#clients"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-slate-800 font-semibold flex items-center justify-between"
            >
              <span>Our Valued Clients</span>
              <span className="bg-orange-100 text-orange-700 text-xs px-2 py-0.5 rounded-full font-bold">
                26 Companies
              </span>
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-slate-800 font-semibold"
            >
              Print Gallery
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-slate-800 font-semibold"
            >
              Contact & Google Map
            </a>
          </div>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`tel:${COMPANY_INFO.primaryPhone}`}
              className="w-full py-2.5 text-center font-bold text-slate-900 bg-slate-100 rounded-lg"
            >
              Call: {COMPANY_INFO.primaryPhone}
            </a>
            <a
              href={`https://wa.me/91${COMPANY_INFO.primaryPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-center font-bold text-white bg-emerald-500 rounded-lg"
            >
              WhatsApp Hari Kumar
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
