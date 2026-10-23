"use client";

import React, { useState } from "react";
import { Building2, CheckCircle, Search, Sparkles } from "lucide-react";
import { CLIENTS_DATA } from "@/data/printingData";

const SECTORS = [
  { key: "all", label: "All Clients (26)" },
  { key: "pharma", label: "Pharma & Healthcare" },
  { key: "industrial", label: "Industrial & Manufacturing" },
  { key: "food", label: "Food & FMCG" },
  { key: "infra", label: "Infrastructure & Tech" },
  { key: "schools", label: "Institutions & Retail" },
];

export default function ClientsSection() {
  const [activeSector, setActiveSector] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredClients = CLIENTS_DATA.filter((client) => {
    const matchesSearch =
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.sector.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (activeSector === "all") return true;
    if (activeSector === "pharma")
      return (
        client.sector.toLowerCase().includes("pharma") ||
        client.sector.toLowerCase().includes("healthcare") ||
        client.sector.toLowerCase().includes("clinical") ||
        client.sector.toLowerCase().includes("chemical") ||
        client.sector.toLowerCase().includes("scientific")
      );
    if (activeSector === "industrial")
      return (
        client.sector.toLowerCase().includes("industrial") ||
        client.sector.toLowerCase().includes("steel") ||
        client.sector.toLowerCase().includes("polymer") ||
        client.sector.toLowerCase().includes("manufacturing") ||
        client.sector.toLowerCase().includes("rubber") ||
        client.sector.toLowerCase().includes("metallurgy")
      );
    if (activeSector === "food")
      return (
        client.sector.toLowerCase().includes("food") ||
        client.sector.toLowerCase().includes("fmcg") ||
        client.sector.toLowerCase().includes("dairy") ||
        client.sector.toLowerCase().includes("hospitality")
      );
    if (activeSector === "infra")
      return (
        client.sector.toLowerCase().includes("infra") ||
        client.sector.toLowerCase().includes("engineering") ||
        client.sector.toLowerCase().includes("aerospace") ||
        client.sector.toLowerCase().includes("automation") ||
        client.sector.toLowerCase().includes("logistics")
      );
    if (activeSector === "schools")
      return (
        client.sector.toLowerCase().includes("school") ||
        client.sector.toLowerCase().includes("education") ||
        client.sector.toLowerCase().includes("retail") ||
        client.sector.toLowerCase().includes("distribution")
      );
    return true;
  });

  const marqueeList = [...CLIENTS_DATA, ...CLIENTS_DATA];

  return (
    <section id="clients" className="py-20 bg-[#080b11] border-y border-white/10 overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-pink-500/20 border border-orange-500/30 text-orange-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Trusted Corporate Partnerships</span>
          </div>
          <h2 className="font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-3 uppercase">
            Our Valued Clients
          </h2>
          <div className="inline-block bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold px-4 py-1 rounded-full mb-4">
            26+ Happy Running Clients
          </div>
          <p className="text-slate-400 text-sm sm:text-base">
            Proudly supplying continuous commercial offset printing, factory registers, and brand packaging to leading corporations across Hyderabad and Telangana.
          </p>
        </div>

        {/* Running Marquee Ticker */}
        <div className="relative mb-12 bg-slate-900/50 border border-white/10 rounded-2xl py-3.5 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#080b11] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#080b11] to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee flex items-center gap-4">
            {marqueeList.map((client, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-2 bg-slate-950/80 px-4 py-2 rounded-full border border-white/10 text-xs font-semibold text-slate-200 whitespace-nowrap shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>{client.name}</span>
                <span className="text-[11px] text-slate-500 font-normal">({client.sector})</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sector Filter Buttons & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            {SECTORS.map((sector) => (
              <button
                key={sector.key}
                onClick={() => setActiveSector(sector.key)}
                className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 ${
                  activeSector === sector.key
                    ? "bg-gradient-to-r from-orange-500 to-pink-600 text-white shadow-md shadow-orange-500/20"
                    : "bg-slate-900/80 text-slate-400 hover:text-white border border-white/5 hover:border-white/20"
                }`}
              >
                {sector.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search 26 clients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900/90 border border-white/10 rounded-full pl-10 pr-4 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none transition"
            />
          </div>
        </div>

        {/* 26 Clients Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredClients.map((client) => (
            <div
              key={client.id}
              className="bg-slate-900/70 backdrop-blur-xl rounded-2xl p-4 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 flex items-center gap-3.5 group hover:-translate-y-1 shadow-md hover:shadow-cyan-500/10"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center font-black text-sm flex-shrink-0 shadow-md transition-transform group-hover:scale-105"
                style={{
                  background: `${client.color}20`,
                  borderLeft: `3px solid ${client.color}`,
                  color: client.color,
                }}
              >
                {client.code}
              </div>

              <div className="flex flex-col min-w-0">
                <h3 className="font-bold text-sm text-white truncate group-hover:text-cyan-400 transition">
                  {client.name}
                </h3>
                <span className="text-xs text-slate-400 flex items-center gap-1 mt-0.5 truncate">
                  <Building2 className="w-3 h-3 text-slate-500 flex-shrink-0" />
                  {client.sector}
                </span>
                <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1 mt-1">
                  <CheckCircle className="w-2.5 h-2.5" /> Verified Running Client
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
