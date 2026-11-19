"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronRight,Smartphone,
  Sparkles,
  Search } from "lucide-react";

interface DealCard {
  id: string;
  lines: string[];
  href: string;
  bgColor: string;
  circleBg: string;
  primaryPhoneImg: string;
  secondaryPhoneImg: string;
}

const hotDealsCards: DealCard[] = [
  {
    id: "sealed-pack-offers",
    lines: ["New Sealed-Pack", "Offers"],
    href: "/buy-phones?condition=new",
    bgColor: "bg-[#FAD4D4]",
    circleBg: "bg-[#F3BDBD]",
    primaryPhoneImg:
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&q=85",
    secondaryPhoneImg:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=85",
  },
  {
    id: "second-hand-deals",
    lines: ["Pre-Owned", "Phone Deals"],
    href: "/buy-phones?condition=second-hand",
    bgColor: "bg-[#C7EFE4]",
    circleBg: "bg-[#ADE2D3]",
    primaryPhoneImg:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&q=85",
    secondaryPhoneImg:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&q=85",
  },
  {
    id: "live-bid-offers",
    lines: ["Live Bid", "Dealer Offers"],
    href: "/auctions",
    bgColor: "bg-[#C8C6F7]",
    circleBg: "bg-[#B5B2EC]",
    primaryPhoneImg:
      "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=600&q=85",
    secondaryPhoneImg:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&q=85",
  },
  {
    id: "local-store-deals",
    lines: ["Local Store", "Bumper Deals"],
    href: "/dealers",
    bgColor: "bg-[#F8EBAD]",
    circleBg: "bg-[#EFE097]",
    primaryPhoneImg:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&q=85",
    secondaryPhoneImg:
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&q=85",
  },
  {
    id: "exchange-phone",
    lines: ["Exchange", "Your Phone"],
    href: "/exchange-phone",
    bgColor: "bg-[#D7E8FA]",
    circleBg: "bg-[#BBD7F3]",
    primaryPhoneImg:
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&q=85",
    secondaryPhoneImg:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=85",
  },
];

export default function HotDeals() {
  return (
    <section className="w-full bg-white py-2 sm:py-10">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Subtitle (Matches Reference Screenshot) */}
        <div className="mb-6">
          <h2 className="text-xl font-extrabold tracking-tight text-[#06172E] sm:text-2xl">
            Hot Deals
          </h2>
          <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
            Exciting offers for more value
          </p>
        </div>

        {/* 4-Column Pastel Promo Cards Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {hotDealsCards.map((card) => (
            <Link
              key={card.id}
              href={card.href}
              className={`group relative flex h-[155px] sm:h-[168px] items-stretch justify-between overflow-hidden rounded-2xl ${card.bgColor} p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
            >
              {/* Soft Decorative Circular Glow Behind Phones (Matches Screenshot) */}
              <div
                className={`pointer-events-none absolute right-2 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full ${card.circleBg} opacity-75 transition-transform duration-300 group-hover:scale-110`}
              />

              {/* Left Column: Multi-Line Title + White Circular Chevron Button */}
              <div className="relative z-10 flex flex-col justify-between">
                <h3 className="text-[16px] sm:text-[17px] font-extrabold leading-snug text-[#06172E]">
                  {card.lines.map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </h3>

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#06172E] shadow-xs transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#0866FF]">
                  <ChevronRight size={15} strokeWidth={2.5} />
                </span>
              </div>

              {/* Right Column: Overlapping Realistic Smartphone Mockups */}
              <div className="relative z-10 flex w-[135px] items-end justify-end">
                {/* Back Secondary Smartphone */}
                <div className="relative -mr-5 mb-0.5 h-[106px] w-[56px] overflow-hidden rounded-t-xl border-[2.5px] border-[#06172E] bg-[#06172E] shadow-md transition-transform duration-300 group-hover:-translate-x-1">
                  <img
                    src={card.secondaryPhoneImg}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Front Primary Smartphone */}
                <div className="relative z-10 h-[124px] w-[66px] overflow-hidden rounded-t-xl border-[3px] border-[#06172E] bg-[#06172E] shadow-lg transition-transform duration-300 group-hover:scale-105">
                  {/* Top Speaker Notch */}
                  <div className="absolute left-1/2 top-1 z-20 h-1 w-5 -translate-x-1/2 rounded-full bg-[#06172E]" />
                  <img
                    src={card.primaryPhoneImg}
                    alt={card.lines.join(" ")}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
         {/* Bottom CTA */}
      
        {/* SMARTPHONE DEMAND CTA SECTION */}
        <div className="relative mt-3 md:mt-14 overflow-hidden rounded-[28px] border border-blue-400/20 bg-gradient-to-br from-[#071B42] via-[#123B85] to-[#0866FF] px-6 py-7 md:py-12 shadow-2xl shadow-blue-900/20 sm:px-10 lg:px-14">

          {/* Background Effects */}
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

          {/* Decorative Circles */}
          <div className="absolute right-10 top-8 h-32 w-32 rounded-full border border-white/10 sm:right-20 sm:h-48 sm:w-48" />
          <div className="absolute right-20 top-16 h-20 w-20 rounded-full border border-white/10 sm:right-32 sm:top-20 sm:h-32 sm:w-32" />

          <div className="relative z-10 grid items-center gap-1 md:gap-10 md:grid-cols-12">

            {/* LEFT CONTENT */}
            <div className="text-center md:col-span-8 md:text-left">
              
              <h3 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
                Looking for a
                <span className="text-cyan-300"> Specific Smartphone </span>
                Model?
              </h3>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-blue-100 sm:text-base md:mx-0">
                Can't find the smartphone you're looking for? Tell us your preferred
                brand and model.
              </p>

              <div className="mt-7 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">

                <Link
                  href="/send-demand"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-extrabold text-[#0755D9] shadow-xl shadow-blue-950/20 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-50 hover:shadow-2xl"
                >
                  Send Your Demand
                  <ArrowUpRight
                    size={19}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>

              </div>
            </div>

            {/* RIGHT PHONE ILLUSTRATION */}
            <div className="relative flex h-48 items-center justify-center md:col-span-4 md:h-64">

              {/* Glow */}
              <div className="absolute h-40 w-40 rounded-full bg-cyan-300/20 blur-3xl sm:h-52 sm:w-52" />

              {/* Floating Phone Icons */}
              <div className="absolute left-4 top-7 rotate-[-15deg] rounded-2xl border border-white/20 bg-white/10 p-4 text-cyan-200 shadow-xl backdrop-blur-lg sm:left-5">
                <Smartphone size={34} />
              </div>

              <div className="absolute right-5 top-5 rotate-[15deg] rounded-2xl border border-white/20 bg-white/10 p-3 text-blue-100 shadow-xl backdrop-blur-lg">
                <Smartphone size={27} />
              </div>

              {/* Main Phone */}
              <div className="relative z-10 flex h-40 w-24 rotate-[-7deg] items-center justify-center rounded-[26px] border-[5px] border-slate-300/80 bg-gradient-to-br from-slate-900 to-blue-950 shadow-2xl shadow-black/40 sm:h-48 sm:w-28">
                <div className="absolute left-1/2 top-2 h-2 w-10 -translate-x-1/2 rounded-full bg-slate-500" />

                <div className="flex h-[78%] w-[82%] flex-col items-center justify-center rounded-[17px] bg-gradient-to-br from-[#087BFF] via-[#1646B5] to-[#071B42]">
                  <Smartphone size={34} className="text-white" />
                  <span className="mt-2 text-[9px] font-black tracking-widest text-cyan-200">
                    BIDMAX
                  </span>
                  <span className="mt-1 text-[7px] font-medium text-white/70">
                    FIND YOUR PHONE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
      
    </section>
  );
}
