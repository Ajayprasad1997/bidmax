
"use client";

import React from "react";
import {
  MapPin,
  Store,
  Smartphone,
  ShieldCheck,
  Tags,
  Wallet,
  ArrowUpRight,
  CheckCircle2,
  Search,
  TicketPercent,
} from "lucide-react";

const benefits = [
  {
    id: 1,
    number: "01",
    title: "Compare Local Prices",
    description:
      "Compare phone prices and genuine offers from participating retailers in your area before making a purchase.",
    icon: Tags,
    color: "bg-blue-50 text-blue-600",
    size: "lg:col-span-2",
  },
  {
    id: 2,
    number: "02",
    title: "PIN Code Based Search",
    description:
      "Find mobile deals available around your location by simply entering your PIN code.",
    icon: MapPin,
    color: "bg-orange-50 text-orange-600",
    size: "",
  },
  {
    id: 3,
    number: "03",
    title: "New & Second-Hand Phones",
    description:
      "Explore new, sealed-pack and second-hand smartphones from participating sellers.",
    icon: Smartphone,
    color: "bg-purple-50 text-purple-600",
    size: "",
  },
  {
    id: 4,
    number: "04",
    title: "Connect With Local Retailers",
    description:
      "Discover suitable nearby retailers and contact them directly to confirm availability and offers.",
    icon: Store,
    color: "bg-emerald-50 text-emerald-600",
    size: "",
  },
  {
    id: 5,
    number: "05",
    title: "Use Any Eligible Coupon",
    description:
      "Discover suitable nearby retailers and contact them directly to confirm availability and offers.",
    icon: TicketPercent,
    color: "bg-blue-50 text-blue-600",
    size: "",
  },
  {
    id: 6,
    number: "06",
    title: "Transparent Phone Offers",
    description:
      "Check retailer prices, stock availability, coupons, warranty and offer conditions before visiting.",
    icon: ShieldCheck,
    color: "bg-sky-50 text-sky-600",
    size: "lg:col-span-2",
  },
  {
    id: 7,
    number: "07",
    title: "Finance Assistance",
    description:
      "Connect with participating retailers or authorised finance representatives for available EMI options. Approval depends on the finance provider.",
    icon: Wallet,
    color: "bg-amber-50 text-amber-600",
    size: "",
  },
];

export default function WhyChooseBidmax() {
  return (
    <section className="relative isolate overflow-hidden bg-[#F6F8FC] py-16 sm:py-20 lg:py-24">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 -z-10 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-[#0866FF] shadow-sm">
            <CheckCircle2 size={15} />
            The BidMax Advantage
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-[#06172E] sm:text-4xl lg:text-5xl">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-[#0866FF] to-[#5145CD] bg-clip-text text-transparent">
              BidMax?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Your smarter way to discover mobile deals. Compare local prices,
            explore phone options and connect with participating retailers
            near you — all in one place.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl sm:p-7 ${item.size}`}
              >
                {/* Number */}
                <div className="absolute right-6 top-6 text-xs font-extrabold tracking-widest text-slate-200 transition-colors group-hover:text-blue-200">
                  {item.number}
                </div>

                {/* Icon */}
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${item.color}`}
                >
                  <Icon size={27} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-extrabold text-[#06172E] transition-colors group-hover:text-[#0866FF] sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-md text-sm leading-7 text-slate-500">
                  {item.description}
                </p>

                {/* Bottom Accent */}
                <div className="mt-6 flex items-center justify-between">
                  <span className="h-1 w-12 rounded-full bg-blue-100 transition-all duration-300 group-hover:w-20 group-hover:bg-[#0866FF]" />

                  <ArrowUpRight
                    size={19}
                    className="text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#0866FF]"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="relative mt-10 overflow-hidden rounded-3xl bg-gradient-to-r from-[#06172E] via-[#103B78] to-[#0866FF] px-6 py-9 shadow-xl sm:px-10 sm:py-11">
          <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border-[35px] border-white/5" />
          <div className="pointer-events-none absolute -bottom-28 right-40 h-64 w-64 rounded-full border-[35px] border-white/5" />

          <div className="relative z-10 flex flex-col items-center justify-between gap-7 text-center md:flex-row md:text-left">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
                Your Next Phone Is Closer
              </span>

              <h3 className="mt-3 text-2xl font-black leading-tight text-white sm:text-3xl">
                Ready to Find Your Pre-Owned Perfect Phone?
              </h3>

              <p className="mt-3 text-sm leading-6 text-blue-100">
                Search your favourite smartphone, compare local retailer
                offers and choose the deal that works for you.
              </p>
            </div>

            <a
              href="/buy-phones"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-extrabold text-[#0866FF] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50"
            >
              <Search size={17} />
              Explore Phones
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        {/* Brand Tagline */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3 text-xs font-extrabold tracking-[0.18em] text-slate-400">
          <span>BUY</span>
          <span className="h-1 w-1 rounded-full bg-[#0866FF]" />
          <span>SELL</span>
          <span className="h-1 w-1 rounded-full bg-[#0866FF]" />
          <span>BID</span>
        </div>
      </div>
    </section>
  );
}
