"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, MapPinned } from "lucide-react";

interface PriceTier {
  id: string;
  labelTop: string;
  priceText: string;
  maxPrice: number;
  href: string;
}

const priceTiers: PriceTier[] = [
  {
    id: "under-9999",
    labelTop: "UNDER",
    priceText: "₹9,999",
    maxPrice: 9999,
    href: "/buy-phones?maxPrice=9999",
  },
  {
    id: "under-14999",
    labelTop: "UNDER",
    priceText: "₹14,999",
    maxPrice: 14999,
    href: "/buy-phones?maxPrice=14999",
  },
  {
    id: "under-19999",
    labelTop: "UNDER",
    priceText: "₹19,999",
    maxPrice: 19999,
    href: "/buy-phones?maxPrice=19999",
  },
  {
    id: "under-24999",
    labelTop: "UNDER",
    priceText: "₹24,999",
    maxPrice: 24999,
    href: "/buy-phones?maxPrice=24999",
  },
  {
    id: "under-29999",
    labelTop: "UNDER",
    priceText: "₹29,999",
    maxPrice: 29999,
    href: "/buy-phones?maxPrice=29999",
  },
  {
    id: "under-34999",
    labelTop: "UNDER",
    priceText: "₹34,999",
    maxPrice: 34999,
    href: "/buy-phones?maxPrice=34999",
  },
  {
    id: "under-39999",
    labelTop: "UNDER",
    priceText: "₹39,999",
    maxPrice: 39999,
    href: "/buy-phones?maxPrice=39999",
  },
  {
    id: "under-49999",
    labelTop: "UNDER",
    priceText: "₹49,999",
    maxPrice: 49999,
    href: "/buy-phones?maxPrice=49999",
  },
  {
    id: "above-50000",
    labelTop: "FLAGSHIP",
    priceText: "₹50,000+",
    maxPrice: 200000,
    href: "/buy-phones?minPrice=50000",
  },
];

export default function ShopByPrice() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftStart, setScrollLeftStart] = useState(0);
  const [hasDragged, setHasDragged] = useState(false);

  const handleScroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const step = 340;
    container.scrollBy({
      left: direction === "right" ? step : -step,
      behavior: "smooth",
    });
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = scrollRef.current;
    if (!container) return;
    setIsDragging(true);
    setHasDragged(false);
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeftStart(container.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.4;
    if (Math.abs(walk) > 5) {
      setHasDragged(true);
    }
    scrollRef.current.scrollLeft = scrollLeftStart - walk;
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  return (
    <section className="w-full bg-white py-8 sm:py-10 select-none">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Top Row: Two-Tone Italic Heading + Top-Right Mini Arrows */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-extrabold tracking-tight text-[#06172E] sm:text-2xl">
            <span>
                Shop By Price
              </span>
          </h2>
          

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleScroll("left")}
              aria-label="Previous price tiers"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-2xs transition hover:border-[#0866FF] hover:text-[#0866FF]"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={() => handleScroll("right")}
              aria-label="Next price tiers"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-[#06172E] shadow-2xs transition hover:border-[#0866FF] hover:text-[#0866FF]"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Relative Container for Circular Price Cards + Floating Right Arrow */}
        <div className="relative">
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={stopDragging}
            onMouseLeave={stopDragging}
            className={`flex items-center gap-4 sm:gap-5 overflow-x-auto py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
          >
            {priceTiers.map((tier) => (
              <Link
                key={tier.id}
                href={tier.href}
                draggable={false}
                onClick={(e) => {
                  if (hasDragged) e.preventDefault();
                }}
                className="group relative flex h-[152px] w-[152px] sm:h-[166px] sm:w-[166px] shrink-0 flex-col items-center justify-center rounded-full border border-blue-100 bg-gradient-to-b from-white via-[#F4F8FF] to-blue-50/90 text-center shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-[#0866FF] hover:shadow-lg"
              >
                <span className="text-[10px] sm:text-[11px] font-extrabold tracking-[0.12em] text-slate-600 uppercase">
                  {tier.labelTop}
                </span>

                <span className="mt-1 text-base sm:text-lg font-extrabold text-[#06172E] transition-colors group-hover:text-[#0866FF]">
                  {tier.priceText}
                </span>

                <span className="mt-3 flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-[#0866FF] transition-all duration-200 group-hover:scale-110 group-hover:bg-[#0866FF] group-hover:text-white">
                  <ArrowRight size={14} strokeWidth={2.5} />
                </span>
              </Link>
            ))}
          </div>

          {/* Floating Right Edge Circle Button */}
          <button
            type="button"
            onClick={() => handleScroll("right")}
            aria-label="Scroll price tiers right"
            className="absolute -right-3 top-1/2 z-20 hidden -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#06172E] shadow-md transition hover:border-[#0866FF] hover:text-[#0866FF] sm:flex"
          >
            <ChevronRight size={18} strokeWidth={2.2} />
          </button>
        </div>
          {/* 3. LOCAL RETAILER COVERAGE */}
        <div className="mt-12 overflow-hidden rounded-3xl bg-gradient-to-r from-[#102C59] via-[#164A9A] to-[#0866FF] p-6 sm:p-8">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

            <div className="flex items-start gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white">
                <MapPinned size={25} />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-200">
                  Local Retailer Network
                </span>

                <h3 className="mt-1 text-xl font-extrabold text-white sm:text-2xl">
                  Find Mobile Stores Near You
                </h3>

                <p className="mt-2 max-w-xl text-xs leading-6 text-blue-100 sm:text-sm">
                  Discover participating local mobile retailers by
                  entering your PIN code. Explore available phones,
                  compare dealer offers and connect directly with stores.
                </p>
              </div>

            </div>

            <Link
              href="/dealers"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-extrabold text-[#164A9A] transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50"
            >
              Find Local Retailers
              <ArrowUpRight size={18} />
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}
