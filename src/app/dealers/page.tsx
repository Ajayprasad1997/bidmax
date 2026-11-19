
"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  MapPin,
  CheckCircle2,
  Star,
  Store,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  X,
  Navigation,
} from "lucide-react";

interface DealerStore {
  id: string;
  name: string;
  location: string;
  pinCode: string;
  verified: boolean;
  rating: number;
  reviewsCount: string;
  image: string;
}

const DEALER_STORES: DealerStore[] = [
  {
    id: "mobile-world-patharpratima",
    name: "Mobile World",
    location: "Patharpratima",
    pinCode: "743371",
    verified: true,
    rating: 4.8,
    reviewsCount: "120+",
    image:
      "/images/bidmax-storefront.jpg",
  },
  {
    id: "tech-hub-ramganga",
    name: "Tech Hub",
    location: "Ramganga",
    pinCode: "743371",
    verified: true,
    rating: 4.7,
    reviewsCount: "90+",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=85",
  },
  {
    id: "smart-zone-kakdwip",
    name: "Smart Zone",
    location: "Kakdwip",
    pinCode: "743347",
    verified: true,
    rating: 4.9,
    reviewsCount: "150+",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=85",
  },
  {
    id: "gadget-point-barrackpore",
    name: "Gadget Point",
    location: "Barrackpore",
    pinCode: "700120",
    verified: true,
    rating: 4.8,
    reviewsCount: "110+",
    image:
      "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=600&q=85",
  },
  {
    id: "city-mobiles-diamond-harbour",
    name: "City Mobiles",
    location: "Diamond Harbour",
    pinCode: "743331",
    verified: true,
    rating: 4.6,
    reviewsCount: "85+",
    image:
      "/images/bidmax-storefront.jpg",
  },
  {
    id: "prime-telecom-baruipur",
    name: "Prime Telecom",
    location: "Baruipur",
    pinCode: "700144",
    verified: true,
    rating: 4.8,
    reviewsCount: "140+",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=85",
  },
];

export default function DealersPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDealers = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) return DEALER_STORES;

    return DEALER_STORES.filter(
      (dealer) =>
        dealer.name.toLowerCase().includes(query) ||
        dealer.location.toLowerCase().includes(query) ||
        dealer.pinCode.includes(query)
    );
  }, [searchQuery]);

  return (
    <main className="min-h-screen bg-[#F4F7FC] text-[#06172E]">

      {/* ================= HERO BANNER ================= */}

      <section className="relative min-h-[340px] w-full overflow-hidden bg-gradient-to-r from-[#06172E] via-[#092752] to-[#0866FF] sm:min-h-[370px]">

        {/* Background Glow */}

        <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-blue-500/30 blur-3xl" />

        <div className="pointer-events-none absolute bottom-0 right-1/3 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="relative mx-auto flex min-h-[340px] max-w-[1360px] items-center justify-between gap-8 px-4 py-12 sm:min-h-[370px] sm:px-6 lg:px-10">

          {/* LEFT CONTENT */}

          <div className="relative z-10 max-w-xl text-white">

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-extrabold uppercase tracking-wider text-blue-100 backdrop-blur-md sm:text-xs">

              <Sparkles className="h-4 w-4 text-amber-300" />

              Authorized BidMax Store Network

            </div>

            <h1 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">

              Visit Your Nearest{" "}

              <span className="text-amber-300">
                BidMax Partner Store
              </span>

            </h1>

            <p className="mt-4 max-w-lg text-sm leading-7 text-blue-100/90 sm:text-base">

              Buy verified smartphones, get instant cash for your old device,
              or inspect live bid phones at trusted local partner stores.

            </p>

            {/* SEARCH BAR */}

            <div className="mt-6 flex max-w-[520px] items-center rounded-xl bg-white p-1.5 shadow-xl">

              <div className="flex min-w-0 flex-1 items-center gap-3 px-3">

                <Search className="h-5 w-5 shrink-0 text-[#0866FF]" />

                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search store, city or PIN code..."
                  className="w-full min-w-0 bg-transparent py-2 text-xs font-semibold text-[#06172E] outline-none placeholder:text-slate-400 sm:text-sm"
                />

              </div>

              {searchQuery && (

                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="mr-1 flex shrink-0 items-center gap-1 rounded-lg bg-slate-100 px-3 py-2 text-xs font-bold text-slate-600 transition hover:bg-slate-200"
                >

                  <X className="h-3.5 w-3.5" />

                  Clear

                </button>

              )}

            </div>

            {/* TRUST INDICATORS */}

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-xs font-bold text-blue-100">

              <span className="flex items-center gap-2">

                <ShieldCheck className="h-4 w-4 text-emerald-400" />

                Verified Dealers

              </span>

              <span className="flex items-center gap-2">

                <CheckCircle2 className="h-4 w-4 text-amber-300" />

                Trusted Local Stores

              </span>

            </div>

          </div>

          {/* RIGHT STORE IMAGE */}

          <div className="relative hidden h-[285px] w-[44%] items-center justify-end md:flex">

            <div className="absolute right-10 top-0 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl" />

            <div className="relative h-full w-full overflow-hidden rounded-[24px] border border-white/20 bg-white/10 shadow-2xl">

              <img
                src="/images/bidmax-storefront.jpg"
                alt="Modern electronics retail store"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#06172E]/95 via-[#06172E]/20 to-[#06172E]/10" />

              {/* BRAND SIGNBOARD */}

              <div className="absolute left-5 top-5 rounded-xl border border-white/20 bg-[#06172E]/90 px-4 py-3 text-white shadow-lg backdrop-blur-md">

                <div className="text-xl font-black tracking-tight">
                  BidMax<span className="text-amber-300">.</span>
                </div>

                <div className="mt-1 text-[9px] font-extrabold tracking-[0.2em] text-blue-200">
                  BUY • SELL • BID
                </div>

              </div>

              {/* BOTTOM INFORMATION */}

              <div className="absolute bottom-5 left-5 right-5">

                <div className="flex items-center justify-between gap-3">

                  <div>

                    <p className="text-sm font-extrabold text-white">
                      Your Trusted Mobile Network
                    </p>

                    <p className="mt-1 text-[11px] text-blue-100">
                      Quality phones. Trusted dealers.
                    </p>

                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0866FF] text-white">

                    <Store className="h-5 w-5" />

                  </div>

                </div>

                <div className="mt-4 flex items-center gap-2 border-t border-white/20 pt-3 text-[11px] font-bold text-white">

                  <ShieldCheck className="h-4 w-4 text-emerald-400" />

                  Verified Local Dealer Network

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= DEALER NETWORK ================= */}

      <section className="mx-auto max-w-[1360px] px-4 py-10 pb-16 sm:px-6 sm:py-12 lg:px-10">

        {/* SECTION HEADING */}

        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">

          <div>

            <div className="mb-2 flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#0866FF]">

              <Store className="h-4 w-4" />

              Find Our Partners

            </div>

            <h2 className="text-2xl font-black tracking-tight text-[#06172E] sm:text-3xl">

              Our Retailer Network

            </h2>

            <p className="mt-2 text-xs font-medium text-slate-500 sm:text-sm">

              Find trusted BidMax partners near you.

            </p>

          </div>

          <div className="rounded-xl border border-blue-100 bg-white px-4 py-3 shadow-sm">

            <p className="text-xs font-bold text-slate-500">
              Verified Stores
            </p>

            <p className="mt-1 text-xl font-black text-[#0866FF]">
              {filteredDealers.length.toString().padStart(2, "0")}
              <span className="ml-1 text-sm font-bold text-slate-400">
                / {DEALER_STORES.length}
              </span>
            </p>

          </div>

        </div>

        {/* SEARCH RESULTS */}

        {filteredDealers.length === 0 ? (

          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-16 text-center shadow-sm">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-[#0866FF]">

              <Store className="h-8 w-8" />

            </div>

            <h3 className="mt-5 text-lg font-extrabold text-[#06172E]">

              No Stores Found

            </h3>

            <p className="mt-2 text-sm text-slate-500">

              No stores found for "{searchQuery}". Try another city or PIN code.

            </p>

            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#0866FF] px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
            >

              Show All Stores

              <ArrowRight className="h-4 w-4" />

            </button>

          </div>

        ) : (

          /* DEALER GRID */

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {filteredDealers.map((dealer) => (

              <article
                key={dealer.id}
                className="group overflow-hidden rounded-[22px] border border-slate-200/80 bg-white shadow-[0_4px_18px_rgba(6,23,46,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_15px_35px_rgba(6,23,46,0.10)]"
              >

                {/* STORE IMAGE */}

                <div className="relative h-[190px] overflow-hidden bg-slate-100">

                  <img
                    src={dealer.image}
                    alt={`${dealer.name} store in ${dealer.location}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#06172E]/75 via-transparent to-transparent" />

                  {/* VERIFIED LABEL */}

                  {dealer.verified && (

                    <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-white/30 bg-[#06172E]/85 px-3 py-1.5 text-[10px] font-extrabold text-white shadow-lg backdrop-blur-md">

                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />

                      Verified Partner

                    </div>

                  )}

                  {/* IMAGE BRAND LABEL */}

                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">

                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-white/20 backdrop-blur-md">

                      <Store className="h-4 w-4" />

                    </div>

                    <div>

                      <p className="text-sm font-extrabold">
                        BidMax Partner
                      </p>

                      <p className="text-[10px] font-medium text-blue-100">
                        Local Retailer
                      </p>

                    </div>

                  </div>

                </div>

                {/* STORE DETAILS */}

                <div className="p-5">

                  <div className="flex items-start justify-between gap-3">

                    <div className="min-w-0">

                      <h3 className="truncate text-lg font-black text-[#06172E] transition-colors group-hover:text-[#0866FF]">

                        {dealer.name}

                      </h3>

                      <div className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-slate-500">

                        <MapPin className="h-4 w-4 shrink-0 text-[#0866FF]" />

                        {dealer.location}

                      </div>

                    </div>

                    {/* RATING */}

                    <div className="flex shrink-0 items-center gap-1 rounded-lg bg-amber-50 px-2.5 py-2">

                      <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />

                      <span className="text-xs font-black text-[#06172E]">
                        {dealer.rating.toFixed(1)}
                      </span>

                    </div>

                  </div>

                  {/* PINCODE & REVIEWS */}

                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">

                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">

                      <Navigation className="h-3.5 w-3.5 text-[#0866FF]" />

                      PIN: {dealer.pinCode}

                    </div>

                    <span className="text-[11px] font-semibold text-slate-400">

                      {dealer.reviewsCount} Reviews

                    </span>

                  </div>

                  {/* VIEW STORE BUTTON */}

                  <Link
                    href={`/dealers/${dealer.id}`}
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#0866FF] px-4 py-3.5 text-sm font-extrabold text-white shadow-md shadow-blue-500/15 transition-all hover:bg-[#0052D9] hover:shadow-lg"
                  >

                    View Store

                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />

                  </Link>

                </div>

              </article>

            ))}

          </div>

        )}

      </section>

    </main>
  );
}
