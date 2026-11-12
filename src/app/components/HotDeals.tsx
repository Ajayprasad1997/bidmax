"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";

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
    <section className="w-full bg-white py-8 sm:py-10">
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
        
       <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#172554] to-[#2563eb] px-6 py-8 text-center sm:px-10">
          <h3 className="mt-1 text-xl font-extrabold text-white sm:text-2xl">
            Looking for a Specific Smartphone Model?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-blue-100">
            Can't find the smartphone you're looking for? Send your demand on
            BidMax and let us help you connect with the right seller. All
            pre-owned phone sales are securely facilitated through BidMax,
            ensuring a trusted transaction with a transparent 7.5% commission.
          </p>

          <Link
            href="/send-demand"
            className="mt-6 inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-extrabold text-[#0866FF] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50"
          >
            Send Your Demand
            <ArrowUpRight size={17} />
          </Link>

        </div>

      </div>
      
    </section>
  );
}
