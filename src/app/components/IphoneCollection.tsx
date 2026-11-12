
"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Star,
  Smartphone,
} from "lucide-react";

interface Iphone {
  id: string;
  title: string;
  imageUrl: string;
  badge: string;
  price: number;
  mrp: number;
  discount: string;
  rating: string;
  condition: string;
  href: string;
}

const iphoneCollection: Iphone[] = [
  {
    id: "iphone-16-pro-max",
    title: "Apple iPhone 16 Pro Max (256GB)",
    imageUrl:
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&auto=format&fit=crop&q=80",
    badge: "BIDMAX VERIFIED",
    price: 119999,
    mrp: 144900,
    discount: "17%",
    rating: "4.9",
    condition: "Like New",
    href: "/buy-phones?search=iPhone+16+Pro+Max",
  },
  {
    id: "Oppo-Find-X6-Pro",
    title: "Oppo Find X6 Pro (256GB)",
    imageUrl:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=80",
    badge: "BIDMAX VERIFIED",
    price: 99999,
    mrp: 119900,
    discount: "16%",
    rating: "4.8",
    condition: "Excellent",
    href: "/buy-phones?search=iPhone+16+Pro",
  },
  {
    id: "relmi-16",
    title: "Realmi 16 (256GB)",
    imageUrl:
      "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=600&auto=format&fit=crop&q=80",
    badge: "BIDMAX SELECT",
    price: 89999,
    mrp: 134900,
    discount: "33%",
    rating: "4.8",
    condition: "Excellent",
    href: "/buy-phones?search=iPhone+15+Pro+Max",
  },
  {
    id: "iphone-15",
    title: "Apple iPhone 15 (128GB)",
    imageUrl:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=80",
    badge: "BIDMAX VERIFIED",
    price: 54999,
    mrp: 69900,
    discount: "21%",
    rating: "4.7",
    condition: "Like New",
    href: "/buy-phones?search=iPhone+15",
  },
  {
    id: "iphone-14-pro",
    title: "Apple iPhone 14 Pro (128GB)",
    imageUrl:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&auto=format&fit=crop&q=80",
    badge: "BIDMAX VERIFIED",
    price: 49999,
    mrp: 79900,
    discount: "37%",
    rating: "4.7",
    condition: "Good",
    href: "/buy-phones?search=iPhone+14+Pro",
  },
  {
    id: "vivo-x90-pro",
    title: "Vivo X90 Pro (256GB)",
    imageUrl:
      "https://images.unsplash.com/photo-1603891128711-11b4b03bb138?w=600&auto=format&fit=crop&q=80",
    badge: "BIDMAX SELECT",
    price: 39999,
    mrp: 69900,
    discount: "42%",
    rating: "4.6",
    condition: "Excellent",
    href: "/buy-phones?search=iPhone+14",
  },
];

export default function IphoneCollection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const slideBy = useCallback((direction: "left" | "right") => {
    const container = sliderRef.current;
    if (!container) return;

    const step = 274;
    const maxScroll =
      container.scrollWidth - container.clientWidth;

    if (direction === "right") {
      if (container.scrollLeft >= maxScroll - 10) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: step, behavior: "smooth" });
      }
    } else {
      if (container.scrollLeft <= 10) {
        container.scrollTo({ left: maxScroll, behavior: "smooth" });
      } else {
        container.scrollBy({ left: -step, behavior: "smooth" });
      }
    }
  }, []);

  // useEffect(() => {
  //   if (isPaused) return;

  //   const interval = setInterval(() => {
  //     slideBy("right");
  //   }, 3500);

  //   return () => clearInterval(interval);
  // }, [isPaused, slideBy]);

  return (
    <section className="w-full bg-white py-8 sm:py-10">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-5 flex items-center justify-between">
          <div>
            <div className="mb-1 flex items-center gap-2">
              <Smartphone size={18} className="text-[#0866FF]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0866FF]">
                Premium Collection 
              </span>
              <span className="text-xs">(The Bidmax Commitment to Selling Phones "in Broken Condition," Not Repaired Ones.)</span>
            </div>

            <h2 className="text-xl font-extrabold tracking-tight text-[#06172E] sm:text-2xl">
              Used Phone
            </h2>
          </div>

          <Link
            href="/buy-phones?search=iPhone"
            className="text-xs font-bold text-[#0866FF] hover:underline sm:text-sm"
          >
            View All &rarr;
          </Link>
        </div>

        {/* Slider */}
        <div
          className="group/slider relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Arrow */}
          <button
            type="button"
            onClick={() => slideBy("left")}
            aria-label="Previous iPhones"
            className="absolute -left-3 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-[#06172E] shadow-lg transition hover:border-[#0866FF] hover:text-[#0866FF] md:flex"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Product Track */}
          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {iphoneCollection.map((phone) => (
              <Link
                key={phone.id}
                href={phone.href}
                className="group flex w-[248px] shrink-0 flex-col rounded-2xl border border-slate-200 bg-white p-3.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0866FF] hover:shadow-lg sm:w-[258px]"
              >
                {/* Badge */}
                <div className="mb-2 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 rounded-md bg-[#06172E] px-2 py-1 text-[10px] font-extrabold tracking-wide text-white">
                    <ShieldCheck size={12} className="text-sky-400" />
                    {phone.badge}
                  </span>
                </div>

                {/* Product Image */}
                <div className="my-2 flex h-44 w-full items-center justify-center overflow-hidden rounded-xl bg-slate-50 p-3">
                  <img
                    src={phone.imageUrl}
                    alt={phone.title}
                    loading="lazy"
                    draggable={false}
                    className="h-full w-auto max-w-full rounded-lg object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Condition */}
                <div className="mt-2">
                  <span className="rounded-md bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-700">
                    {phone.condition}
                  </span>
                </div>

                {/* Product Title */}
                <h3 className="mt-2 line-clamp-2 min-h-[40px] text-sm font-bold leading-snug text-[#06172E] group-hover:text-[#0866FF]">
                  {phone.title}
                </h3>

                {/* Rating & Discount */}
                <div className="mt-2 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 rounded border border-slate-200 bg-slate-50 px-1.5 py-1 text-[11px] font-bold text-slate-700">
                    {phone.rating}
                    <Star
                      size={11}
                      className="fill-amber-400 text-amber-400"
                    />
                  </span>

                  <span className="text-xs font-extrabold text-emerald-600">
                    {phone.discount} OFF
                  </span>
                </div>

                {/* Price */}
                <div className="mt-3 flex flex-wrap items-baseline gap-2">
                  <span className="text-lg font-extrabold text-[#06172E]">
                    ₹{phone.price.toLocaleString("en-IN")}
                  </span>

                  <span className="text-xs font-medium text-slate-400 line-through">
                    ₹{phone.mrp.toLocaleString("en-IN")}
                  </span>
                </div>

                {/* Footer */}
                <div className="mt-3 border-t border-slate-100 pt-3">
                  <span className="text-[11px] font-semibold text-[#0866FF]">
                    Explore Phone Details →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={() => slideBy("right")}
            aria-label="Next iPhones"
            className="absolute -right-3 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-[#06172E] shadow-lg transition hover:border-[#0866FF] hover:text-[#0866FF] md:flex"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
