
"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Star,
  Store,
} from "lucide-react";

interface RefurbishedPhone {
  id: string;
  title: string;
  imageUrl: string;
  badgeLabel: string;
  savingsText: string;
  saleTag: string;
  rating: string;
  discountPercent: string;
  price: number;
  mrp: number;
  storeOfferNote?: string;
  href: string;
}


const refurbishedMobiles: RefurbishedPhone[] = [
  {
    id: "iphone-15-pro-refurb",
    title: "Apple iPhone 15 Pro - Refurbished",
    imageUrl:
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&auto=format&fit=crop&q=80",
    badgeLabel: "BIDMAX VERIFIED",
    savingsText: "₹28,500 OFF",
    saleTag: "Hot Deal",
    rating: "4.8",
    discountPercent: "-24%",
    price: 89999,
    mrp: 118499,
    storeOfferNote: "Pay at Store • 6M Warranty",
    href: "/buy-phones?search=iPhone+15+Pro&condition=second-hand",
  },
  {
    id: "galaxy-s24-ultra-refurb",
    title: "Samsung Galaxy S24 Ultra 5G - Refurbished",
    imageUrl:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=80",
    badgeLabel: "BIDMAX VERIFIED",
    savingsText: "₹52,000 OFF",
    saleTag: "Bumper Offer",
    rating: "4.9",
    discountPercent: "-40%",
    price: 77999,
    mrp: 129999,
    storeOfferNote: "Direct Retailer Inspection",
    href: "/buy-phones?search=Galaxy+S24+Ultra&condition=second-hand",
  },
  {
    id: "oneplus-12-5g-refurb",
    title: "OnePlus 12 5G (16GB RAM) - Refurbished",
    imageUrl:
      "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=600&auto=format&fit=crop&q=80",
    badgeLabel: "BIDMAX VERIFIED",
    savingsText: "₹22,500 OFF",
    saleTag: "Hot Deal",
    rating: "4.7",
    discountPercent: "-32%",
    price: 47499,
    mrp: 69999,
    href: "/buy-phones?search=OnePlus+12&condition=second-hand",
  },
  {
    id: "pixel-8-pro-refurb",
    title: "Google Pixel 8 Pro 5G - Refurbished",
    imageUrl:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=80",
    badgeLabel: "BIDMAX SELECT",
    savingsText: "₹44,000 OFF",
    saleTag: "Bumper Offer",
    rating: "4.6",
    discountPercent: "-41%",
    price: 62999,
    mrp: 106999,
    storeOfferNote: "Original Box & Bill Available",
    href: "/buy-phones?search=Pixel+8+Pro&condition=second-hand",
  },
  {
    id: "galaxy-z-flip6-refurb",
    title: "Samsung Galaxy Z Flip6 5G - Refurbished",
    imageUrl:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&auto=format&fit=crop&q=80",
    badgeLabel: "BIDMAX VERIFIED",
    savingsText: "₹48,000 OFF",
    saleTag: "Hot Deal",
    rating: "4.8",
    discountPercent: "-44%",
    price: 61999,
    mrp: 109999,
    href: "/buy-phones?search=Z+Flip6&condition=second-hand",
  },
  {
    id: "iphone-14-refurb",
    title: "Apple iPhone 14 (128 GB) - Refurbished",
    imageUrl:
      "https://images.unsplash.com/photo-1603891128711-11b4b03bb138?w=600&auto=format&fit=crop&q=80",
    badgeLabel: "BIDMAX VERIFIED",
    savingsText: "₹26,400 OFF",
    saleTag: "Bumper Offer",
    rating: "4.7",
    discountPercent: "-38%",
    price: 43500,
    mrp: 69900,
    storeOfferNote: "90%+ Battery Health Checked",
    href: "/buy-phones?search=iPhone+14&condition=second-hand",
  },
];


export default function RefurbishedMobilesSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftStart, setScrollLeftStart] = useState(0);
  const [hasDragged, setHasDragged] = useState(false);

  // Slider Navigation
  const slideBy = useCallback((direction: "left" | "right") => {
    const container = sliderRef.current;
    if (!container) return;

    const cardStep = 274;

    if (direction === "right") {
      const isAtEnd =
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 10;

      if (isAtEnd) {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        container.scrollBy({
          left: cardStep,
          behavior: "smooth",
        });
      }
    } else {
      if (container.scrollLeft <= 10) {
        container.scrollTo({
          left: container.scrollWidth,
          behavior: "smooth",
        });
      } else {
        container.scrollBy({
          left: -cardStep,
          behavior: "smooth",
        });
      }
    }
  }, []);

  // Auto Slide
  useEffect(() => {
    if (isPaused || isDragging) return;

    const interval = setInterval(() => {
      slideBy("right");
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, isDragging, slideBy]);

  // Mouse Drag Start
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
  if (e.button !== 0) return;
  if ((e.target as HTMLElement).closest("button, a")) return;

  const container = sliderRef.current;
  if (!container) return;

  setIsDragging(true);
  setHasDragged(false);

  setStartX(e.pageX - container.offsetLeft);
  setScrollLeftStart(container.scrollLeft);
};

  // Mouse Drag Move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !sliderRef.current) return;

    e.preventDefault();

    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.4;

    if (Math.abs(walk) > 5) {
      setHasDragged(true);
    }

    sliderRef.current.scrollLeft = scrollLeftStart - walk;
  };

  // Stop Dragging
    const stopDragging = () => {
    if (isDragging) {
        setIsDragging(false);
    }
    };
  return (
    <section
      className="relative w-full bg-white py-8 sm:py-10 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        stopDragging();
      }}
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-extrabold tracking-tight text-[#06172E] sm:text-2xl">
            Buy Refurbished Mobiles
          </h2>

          <Link
            href="/buy-phones?condition=second-hand"
            className="text-xs font-bold text-[#0866FF] hover:underline sm:text-sm"
          >
            View All
          </Link>
        </div>

        {/* Slider Wrapper */}
        <div className="relative">

          {/* Left Arrow */}
          <button
            type="button"
            onClick={() => slideBy("left")}
            aria-label="Scroll refurbished mobiles left"
            className="absolute -left-3 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-[#06172E] shadow-lg transition hover:border-[#0866FF] hover:text-[#0866FF] md:flex"
          >
            <ChevronLeft size={20} strokeWidth={2.2} />
          </button>

          {/* Scrollable Track */}
         <div
                ref={sliderRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={stopDragging}
                onMouseLeave={stopDragging}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
                onTouchCancel={() => setIsPaused(false)}
                className={`flex gap-4 overflow-x-auto overflow-y-hidden pb-2
                    overscroll-x-contain
                    touch-pan-x touch-pan-y
                    [scrollbar-width:none]
                    [&::-webkit-scrollbar]:hidden
                    ${
                    isDragging ? "cursor-grabbing" : "cursor-grab"
                    }`}
                >
            {refurbishedMobiles.map((phone) => (
              <Link
                key={phone.id}
                href={phone.href}
                draggable={false}
                onClick={(e) => {
                  if (hasDragged) {
                    e.preventDefault();
                    setHasDragged(false);
                  }
                }}
                className="group relative flex w-[248px] shrink-0 flex-col justify-between rounded-2xl border border-slate-200 bg-white p-3.5 shadow-sm transition-all duration-200 hover:border-[#0866FF] hover:shadow-md sm:w-[258px]"
              >
                <div>
                  {/* Verified Badge */}
                  <div className="mb-2 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 rounded-md bg-[#06172E] px-2 py-0.5 text-[10px] font-extrabold tracking-wide text-white uppercase">
                      <ShieldCheck
                        size={12}
                        className="text-sky-400"
                      />
                      {phone.badgeLabel}
                    </span>
                  </div>

                  {/* Phone Image */}
                  <div className="relative mx-auto my-2 flex h-44 w-full items-center justify-center overflow-hidden rounded-xl bg-slate-50/80 p-3">
                    <img
                      src={phone.imageUrl}
                      alt={phone.title}
                      draggable={false}
                      loading="lazy"
                      className="h-full w-auto rounded-lg object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Savings Pill */}
                  <div className="mt-2">
                    <span className="inline-block rounded-md bg-emerald-50 px-2 py-0.5 text-[11px] font-extrabold text-emerald-700">
                      {phone.savingsText}
                    </span>
                  </div>

                  {/* Model Title */}
                  <h3 className="mt-2 line-clamp-2 min-h-[40px] text-[14px] font-bold leading-snug text-[#06172E] group-hover:text-[#0866FF]">
                    {phone.title}
                  </h3>

                  {/* Sale Tag + Rating */}
                  <div className="mt-2.5 flex items-center gap-2">
                    <span className="rounded bg-[#0755D9] px-2 py-0.5 text-[11px] font-bold text-white">
                      {phone.saleTag}
                    </span>

                    <span className="inline-flex items-center gap-1 rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[11px] font-bold text-slate-700">
                      {phone.rating}
                      <Star
                        size={11}
                        className="fill-amber-400 text-amber-400"
                      />
                    </span>
                  </div>

                  {/* Discount & Price */}
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs font-extrabold text-emerald-600">
                      {phone.discountPercent} OFF
                    </span>

                    <span className="text-[11px] font-semibold text-slate-400">
                      Deal Price
                    </span>
                  </div>

                  <div className="mt-1 flex flex-wrap items-baseline gap-2">
                    <span className="text-lg font-extrabold text-[#06172E]">
                      ₹{phone.price.toLocaleString("en-IN")}
                    </span>

                    <span className="text-xs font-medium text-slate-400 line-through">
                      ₹{phone.mrp.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>

                {/* Store Offer Footer */}
                <div className="mt-3 flex min-h-[34px] items-center gap-1.5 border-t border-slate-100 pt-2">
                  <Store
                    size={14}
                    className="shrink-0 text-[#0866FF]"
                  />

                  <span className="text-[10px] font-semibold text-slate-600">
                    {phone.storeOfferNote || "Verified Local Store"}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={() => slideBy("right")}
            aria-label="Scroll refurbished mobiles right"
            className="absolute -right-3 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-[#06172E] shadow-lg transition hover:border-[#0866FF] hover:text-[#0866FF] md:flex"
          >
            <ChevronRight size={20} strokeWidth={2.2} />
          </button>

        </div>
      </div>
    </section>
  );
}
