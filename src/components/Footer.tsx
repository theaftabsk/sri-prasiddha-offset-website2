"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Heart, Shield, ArrowUp, ArrowUpRight, Database } from "lucide-react";
import { COMPANY_INFO } from "@/data/printingData";

export default function Footer() {
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [storedEnquiries, setStoredEnquiries] = useState<any[]>([]);

  const handleOpenAdmin = () => {
    try {
      const data = JSON.parse(localStorage.getItem("spo_enquiries") || "[]");
      setStoredEnquiries(data);
    } catch {
      setStoredEnquiries([]);
    }
    setShowAdminModal(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 pt-16 pb-12 relative overflow-hidden">
      {/* Light Orange Bar on top */}
      <div className="h-1.5 w-full absolute top-0 left-0 right-0 bg-orange-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand info */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="/assets/images/logo.png"
                  alt="Sri Prasiddha Offset"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight block">
                  SRI PRASIDDHA <span className="text-orange-500">OFFSET</span>
                </span>
                <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                  A Complete Printing Solutions
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
              Hyderabad’s premier commercial and industrial offset printing facility. Serving 26+ corporate clients with registers, safety boards, stationery, and packaging materials.
            </p>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-orange-500" />
                <span>Primary: <strong className="text-white">+91 {COMPANY_INFO.primaryPhone}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-orange-500" />
                <span>Second Choice: <strong className="text-white">+91 {COMPANY_INFO.altPhone}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-orange-500" />
                <span className="text-slate-300">{COMPANY_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Core Services Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Printing Categories
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/services" className="hover:text-orange-400 transition">
                  Industrial Registers & Log Books
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-orange-400 transition">
                  Safety Precaution & Caution Boards
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-orange-400 transition">
                  Bill Books & Duplicate NCR Invoices
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-orange-400 transition">
                  Letterheads & Business Cards
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-orange-400 transition">
                  Roll-Up Standees & Banners
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-orange-400 transition">
                  Roll-Form Labels & Vinyl Stickers
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-orange-400 transition">
                  Branded T-Shirts & Custom Apparel
                </Link>
              </li>
            </ul>
          </div>

          {/* Client Sectors */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Client Sectors
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/clients" className="hover:text-orange-400 transition">
                  Pharma Formulations
                </Link>
              </li>
              <li>
                <Link href="/clients" className="hover:text-orange-400 transition">
                  Steel & Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/clients" className="hover:text-orange-400 transition">
                  Dairy & Food FMCG
                </Link>
              </li>
              <li>
                <Link href="/clients" className="hover:text-orange-400 transition">
                  Schools & Education
                </Link>
              </li>
              <li>
                <Link href="/clients" className="hover:text-orange-400 transition">
                  Civil Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/clients" className="hover:text-orange-400 transition">
                  Hospitality & Healthcare
                </Link>
              </li>
            </ul>
          </div>

          {/* Address & Office */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Factory Location
            </h4>
            <p className="text-xs leading-relaxed text-slate-400 mb-4">
              # 6-279/9, Kakatiya Nagar, Near Vegetable Market, Chintal, Hyderabad – 500054, Telangana, India.
            </p>

            <a
              href={COMPANY_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-500 hover:text-orange-400 transition"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Get Directions on Google Maps →</span>
            </a>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <button
                onClick={handleOpenAdmin}
                className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition"
              >
                <Database className="w-3.5 h-3.5 text-orange-500" />
                <span>View Stored Quotation Enquiries</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 <strong className="text-white">Sri Prasiddha Offset</strong>. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>Proprietor: <strong className="text-slate-300">Hari Kumar K</strong></span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="hover:text-orange-400 inline-flex items-center gap-1 transition"
            >
              <span>Back to Top</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Admin Enquiries Modal */}
      {showAdminModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-white/20 rounded-3xl max-w-2xl w-full p-6 text-white max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <h3 className="text-base font-bold text-white">
                Stored Website Enquiries ({storedEnquiries.length})
              </h3>
              <button
                onClick={() => setShowAdminModal(false)}
                className="text-slate-400 hover:text-white text-xs px-2 py-1 rounded bg-slate-800"
              >
                Close
              </button>
            </div>

            {storedEnquiries.length === 0 ? (
              <div className="py-8 text-center text-slate-400 text-sm">
                No inquiries submitted yet. Submit a test quote on the website to see it here!
              </div>
            ) : (
              <div className="space-y-3">
                {storedEnquiries.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-950 border border-white/10 text-xs space-y-1"
                  >
                    <div className="flex justify-between items-center text-orange-400 font-bold">
                      <span>Ref: {item.refId || "Direct Desk"}</span>
                      <span className="text-slate-500 font-normal">
                        {item.date ? new Date(item.date).toLocaleDateString() : ""}
                      </span>
                    </div>
                    <div>
                      <strong>Client:</strong> {item.name || "N/A"} ({item.phone})
                    </div>
                    <div>
                      <strong>Company:</strong> {item.company || "N/A"}
                    </div>
                    <div>
                      <strong>Service:</strong> {item.service}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </footer>
  );
}
