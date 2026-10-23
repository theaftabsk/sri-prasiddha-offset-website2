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
    <section id="clients" className="py-20 bg-slate-50 border-y border-slate-200 overflow-hidden text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span>Trusted Corporate Partnerships</span>
          </div>
          <h2 className="font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-3 uppercase">
            Our Valued Clients
          </h2>
          <div className="inline-block bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold px-4 py-1 rounded-full mb-4">
            26+ Happy Running Clients
          </div>
          <p className="text-slate-600 text-sm sm:text-base">
            Proudly supplying continuous commercial offset printing, factory registers, and brand packaging to leading corporations across Hyderabad and Telangana.
          </p>
        </div>

        {/* Running Marquee Ticker */}
        <div className="relative mb-12 bg-white border border-slate-200 rounded-2xl py-3.5 overflow-hidden shadow-xs">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee flex items-center gap-4">
            {marqueeList.map((client, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-200 text-xs font-semibold text-slate-800 whitespace-nowrap shadow-xs"
              >
                <span className="w-2 h-2 rounded-full bg-orange-500" />
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
                className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 ${
                  activeSector === sector.key
                    ? "bg-orange-500 text-white shadow-sm"
                    : "bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:bg-slate-100"
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
              className="w-full bg-white border border-slate-200 rounded-full pl-10 pr-4 py-2 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-orange-500 focus:outline-none transition shadow-xs"
            />
          </div>
        </div>

        {/* 26 Clients Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredClients.map((client) => (
            <div
              key={client.id}
              className="bg-white rounded-2xl p-4 border border-slate-200 hover:border-orange-300 transition-all duration-300 flex items-center gap-3.5 group hover:-translate-y-1 shadow-xs hover:shadow-md"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center font-black text-sm flex-shrink-0 shadow-xs transition-transform group-hover:scale-105"
                style={{
                  background: `${client.color}15`,
                  borderLeft: `3px solid ${client.color}`,
                  color: client.color,
                }}
              >
                {client.code}
              </div>

              <div className="flex flex-col min-w-0">
                <h3 className="font-bold text-sm text-slate-900 truncate group-hover:text-orange-500 transition">
                  {client.name}
                </h3>
                <span className="text-xs text-slate-500 flex items-center gap-1 mt-0.5 truncate">
                  <Building2 className="w-3 h-3 text-slate-400 flex-shrink-0" />
                  {client.sector}
                </span>
                <span className="text-[10px] text-emerald-700 font-bold flex items-center gap-1 mt-1">
                  <CheckCircle className="w-2.5 h-2.5 text-emerald-600" /> Verified Running Client
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
