"use client";

import React from "react";
import { Award, Cog, Zap, Truck } from "lucide-react";

const PILLARS = [
  {
    icon: Award,
    title: "Over 15 years of experience",
    description:
      "Trusted by over 26+ major industrial, pharma, and institutional corporations across Hyderabad for accurate, audit-compliant printing.",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    borderColor: "hover:border-blue-200",
  },
  {
    icon: Cog,
    title: "In-house modern production",
    description:
      "We control every step from prepress artwork checking to multi-color offset runs, thermal lamination, laser cutting, and custom binding.",
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
    borderColor: "hover:border-emerald-200",
  },
  {
    icon: Zap,
    title: "Fast turnaround & reliability",
    description:
      "We understand tight deadlines. Get priority scheduling, rapid digital sampling, and expedited offset batch deliveries.",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
    borderColor: "hover:border-orange-200",
  },
  {
    icon: Truck,
    title: "Delivery across Hyderabad",
    description:
      "Direct doorstep dispatch to your factory, office, or event location with careful packaging to prevent damage in transit.",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    borderColor: "hover:border-purple-200",
  },
];

export default function Pillars() {
  return (
    <section className="py-8 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-xs font-bold text-orange-600 uppercase tracking-wider block mb-1">
            Why Businesses Choose Us
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            From business cards to outdoor advertising — a full cycle of printing and branding
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`bg-white rounded-3xl p-7 border border-slate-200 shadow-xs transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 ${pillar.borderColor} flex flex-col justify-between`}
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-2xl ${pillar.bgColor} ${pillar.iconColor} flex items-center justify-center mb-6 shadow-xs`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
