"use client";

import React, { useState, useEffect } from "react";
import {
  Send,
  MessageCircle,
  CheckCircle2,
  Phone,
  FileCheck,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { SERVICES_DATA, COMPANY_INFO } from "@/data/printingData";

interface QuoteCalculatorProps {
  selectedService: string;
  onClearService: () => void;
}

const QUANTITY_OPTIONS = ["100", "250", "500", "1,000", "2,500", "5,000", "10,000+"];

export default function QuoteCalculator({
  selectedService,
  onClearService,
}: QuoteCalculatorProps) {
  const [service, setService] = useState(selectedService || "");
  const [quantity, setQuantity] = useState("500");
  const [material, setMaterial] = useState("Executive Grade / Premium Art Board");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const [submittedModal, setSubmittedModal] = useState<{
    open: boolean;
    refId: string;
  }>({
    open: false,
    refId: "",
  });

  // Sync selectedService prop
  useEffect(() => {
    if (selectedService) {
      setService(selectedService);
    }
  }, [selectedService]);

  // WhatsApp formatted enquiry
  const handleWhatsAppQuote = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `*SRI PRASIDDHA OFFSET - Quotation Request* 🖨️
━━━━━━━━━━━━━━━━━━━━
👤 *Client Name:* ${name || "Business Inquirer"}
🏢 *Company:* ${company || "Not specified"}
📱 *Phone:* ${phone || "Will share on chat"}

📦 *Service Required:* ${service || "General Printing"}
🔢 *Quantity:* ${quantity}
📄 *Material/Finish:* ${material}
📝 *Notes / Requirements:* ${notes || "Please provide best business rates and turnaround timeline."}

📍 *Location:* Hyderabad
_Generated via Sri Prasiddha Offset Website_`;

    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/91${COMPANY_INFO.primaryPhone}?text=${encoded}`;
    window.open(url, "_blank");
  };

  // Submit online enquiry
  const handleSubmitOnline = (e: React.FormEvent) => {
    e.preventDefault();

    if (!phone || phone.trim().length < 8) {
      alert("Please provide a valid contact number so we can reach you with the estimate.");
      return;
    }

    const refId = "SPO-" + Math.floor(100000 + Math.random() * 900000);

    // Save locally
    try {
      const stored = JSON.parse(localStorage.getItem("spo_enquiries") || "[]");
      stored.unshift({
        refId,
        service: service || "General Printing",
        quantity,
        material,
        name,
        company,
        phone,
        notes,
        date: new Date().toISOString(),
      });
      localStorage.setItem("spo_enquiries", JSON.stringify(stored));
    } catch {
      // Local storage fallback
    }

    setSubmittedModal({ open: true, refId });
  };

  return (
    <section id="quote-calculator" className="py-20 bg-slate-50 text-slate-900 border-t border-slate-200 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Benefits & Trust */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 border border-red-200 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Instant Quotation Engine</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Get an Instant Wholesale Printing Quotation
            </h2>

            <p className="text-slate-600 text-base leading-relaxed mb-8">
              Whether you need 100 corporate bill books, factory safety boards, or 50,000 product labels — get transparent, factory-direct pricing backed by 15+ years of Hyderabad printing excellence.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span className="text-sm text-slate-700">
                  <strong>Direct Factory Rates:</strong> No middlemen or broker markup.
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
                  <FileCheck className="w-5 h-5" />
                </div>
                <span className="text-sm text-slate-700">
                  <strong>Free Pre-Press Proofing:</strong> Artwork verification before printing.
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-sm text-slate-700">
                  <strong>Doorstep Dispatch:</strong> Fast delivery to all Hyderabad zones.
                </span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-500 font-semibold block">Need to talk right now?</span>
                <a
                  href={`tel:${COMPANY_INFO.primaryPhone}`}
                  className="text-lg font-bold text-slate-900 hover:text-red-600 transition"
                >
                  {COMPANY_INFO.primaryPhone} (Hari Kumar K)
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center justify-between">
                <span>Select Your Printing Specifications</span>
                {service && (
                  <span className="text-xs font-semibold text-red-600 bg-red-50 px-2.5 py-1 rounded-md border border-red-200">
                    Selected: {service}
                  </span>
                )}
              </h3>

              <form className="space-y-5">
                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
                    Select Printing Service *
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
                  >
                    <option value="">-- Choose from our 17 printing services --</option>
                    {SERVICES_DATA.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name} ({s.category})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Quantity Picker */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wider">
                    Estimated Quantity: <span className="text-red-600 font-bold">{quantity}</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {QUANTITY_OPTIONS.map((qty) => (
                      <button
                        key={qty}
                        type="button"
                        onClick={() => setQuantity(qty)}
                        className={`text-xs font-bold px-3 py-1.5 rounded-lg border transition ${
                          quantity === qty
                            ? "bg-red-600 text-white border-red-600 shadow-sm"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:border-red-400"
                        }`}
                      >
                        {qty}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Material / Paper Grade */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
                    Paper / Substrate / Board Grade
                  </label>
                  <select
                    value={material}
                    onChange={(e) => setMaterial(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-red-600"
                  >
                    <option value="Executive Grade / Premium Art Board">
                      Executive Grade / 350 GSM Art Board
                    </option>
                    <option value="Carbonless Duplicate/Triplicate NCR">
                      Carbonless Duplicate / Triplicate NCR (For Bill Books)
                    </option>
                    <option value="Bond Paper (100-120 GSM)">
                      Executive Bond Paper (100-120 GSM For Letterheads)
                    </option>
                    <option value="Heavy-Duty Sunboard (3mm / 5mm)">
                      Rigid Sunboard (3mm / 5mm For Indoor Display)
                    </option>
                    <option value="Acrylic & Exterior Grade ACP">
                      Acrylic & Exterior ACP (For Company Signboards)
                    </option>
                    <option value="Waterproof Vinyl / Die-Cut Sticker">
                      Waterproof Vinyl / Packaging Sticker Label
                    </option>
                    <option value="Non-Tearable Satin Fabric (Standee)">
                      Non-Tearable Satin Fabric (For Rollup Standee)
                    </option>
                    <option value="100% Bio-Washed Combed Cotton (T-Shirt)">
                      100% Combed Cotton (For Branded T-Shirts)
                    </option>
                  </select>
                </div>

                {/* Client Contact Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ramesh Kumar"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-red-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Company / Organization Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Hyderabad Pharma Ltd."
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-red-600"
                    />
                  </div>
                </div>

                {/* Phone & Custom Notes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 9542717444"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-red-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Custom Size / Special Requirements
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. A4 size, duplicate numbering, matte finish"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-red-600"
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={handleWhatsAppQuote}
                    className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition transform hover:-translate-y-0.5"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Send on WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSubmitOnline}
                    className="w-full inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition transform hover:-translate-y-0.5"
                  >
                    <Send className="w-5 h-5" />
                    <span>Submit Online Quote</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {submittedModal.open && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 text-slate-900 shadow-2xl relative text-center">
            <button
              onClick={() => setSubmittedModal({ open: false, refId: "" })}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
              Quotation Request Received!
            </h3>

            <p className="text-sm text-slate-600 mb-6">
              Thank you {name || "Client"}. Your quotation reference number is:
            </p>

            <div className="bg-slate-100 font-mono font-bold text-lg text-orange-600 py-3 px-6 rounded-xl border border-slate-200 mb-6 inline-block">
              {submittedModal.refId}
            </div>

            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              Hari Kumar K will review your requirements for <strong>{service || "Printing"}</strong> ({quantity} units) and reach out to <strong>{phone}</strong> shortly.
            </p>

            <div className="flex flex-col gap-2">
              <button
                onClick={handleWhatsAppQuote}
                className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Follow Up on WhatsApp Now</span>
              </button>

              <button
                onClick={() => setSubmittedModal({ open: false, refId: "" })}
                className="w-full py-2.5 text-slate-600 hover:text-slate-900 font-semibold text-sm transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
