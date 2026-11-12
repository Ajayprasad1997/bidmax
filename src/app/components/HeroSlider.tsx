"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Smartphone, Gavel, Tag } from "lucide-react";

interface BannerSlide {
  id: number;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  badgeText: string;
  highlightText: string;
  subBadgeText: string;
  bgGradient: string;
  accentColor: string;
  buttonBg: string;
  buttonText: string;
  bgImage: string;
  icon: React.ElementType;
}

const slides: BannerSlide[] = [
  {
    id: 1,
    title: "Dhamakedar deals are LIVE",
    subtitle: "Compare sealed-pack & verified second-hand mobile prices in your PIN code",
    ctaText: "Explore Deals",
    ctaHref: "/buy-phones",
    badgeText: "BIDMAX SALE",
    highlightText: "LIVE NOW",
    subBadgeText: "*Pay Retailer Directly at Store",
    bgGradient: "from-[#06172E] via-[#0755D9] to-[#0866FF]",
    accentColor: "text-[#FFD43B]",
    buttonBg: "bg-[#FFD43B] hover:bg-[#FCC419]",
    buttonText: "text-[#06172E]",
    bgImage:
      "images/banner3.jpg",
    icon: Smartphone,
  },
  {
    id: 2,
    title: "Bid & Win Best Local Quotes",
    subtitle: "Request your phone model & let trusted dealers in your PIN code compete for you",
    ctaText: "Start Bidding",
    ctaHref: "/auctions",
    badgeText: "LIVE BIDS",
    highlightText: "ZERO ADVANCE",
    subBadgeText: "*Direct Store Pickup",
    bgGradient: "from-[#04152D] via-[#0A2E63] to-[#0066FF]",
    accentColor: "text-sky-300",
    buttonBg: "bg-white hover:bg-blue-50",
    buttonText: "text-[#06172E]",
    bgImage:
      "images/banner2.jpg",
    icon: Gavel,
  },
  {
    id: 3,
    title: "Verified Second-Hand Phones",
    subtitle: "Inspect condition, battery health & warranty in person before paying at the store",
    ctaText: "Browse Pre-Owned",
    ctaHref: "/buy-phones?condition=second-hand",
    badgeText: "TESTED PHONES",
    highlightText: "LOCAL STORES",
    subBadgeText: "*T&C Applied",
    bgGradient: "from-[#06172E] via-[#0B3574] to-[#0866FF]",
    accentColor: "text-[#FFD43B]",
    buttonBg: "bg-[#FFD43B] hover:bg-[#FCC419]",
    buttonText: "text-[#06172E]",
    bgImage:
      "images/banner1.jpg",
    icon: Tag,
  },
  {
    id: 4,
    title: "Exchange Mobile Offer",
    subtitle: "Inspect condition, battery health & warranty in person before paying at the store",
    ctaText: "Browse Pre-Owned",
    ctaHref: "/buy-phones?condition=second-hand",
    badgeText: "TESTED PHONES",
    highlightText: "LOCAL STORES",
    subBadgeText: "*T&C Applied",
    bgGradient: "from-[#06172E] via-[#0B3574] to-[#0866FF]",
    accentColor: "text-[#FFD43B]",
    buttonBg: "bg-[#FFD43B] hover:bg-[#FCC419]",
    buttonText: "text-[#06172E]",
    bgImage:
      "images/banner4.jpg",
    icon: Tag,
  },
  {
    id: 5,
    title: "Dad Mobile Offer",
    subtitle: "Inspect condition, battery health & warranty in person before paying at the store",
    ctaText: "Browse Pre-Owned",
    ctaHref: "/buy-phones?condition=second-hand",
    badgeText: "TESTED PHONES",
    highlightText: "LOCAL STORES",
    subBadgeText: "*T&C Applied",
    bgGradient: "from-[#06172E] via-[#0B3574] to-[#0866FF]",
    accentColor: "text-[#FFD43B]",
    buttonBg: "bg-[#FFD43B] hover:bg-[#FCC419]",
    buttonText: "text-[#06172E]",
    bgImage:
      "images/banner5.jpg",
    icon: Tag,
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <section
      className="w-full bg-white pb-3 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Promotional Deals Slider"
    >
      {/* Full-Width Short-Height Banner Container */}
      <div className="relative w-full h-auto aspect-[16/6] sm:aspect-auto sm:h-[150px] md:h-[320px] lg:h-[411px] overflow-hidden">
        {/* Slides Track */}
        <div
          className="flex h-full w-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => {
            const SlideIcon = slide.icon;
            return (
              <div
                key={slide.id}
                className={`relative w-full h-full shrink-0 text-white overflow-hidden`}
              >
                {/* Subtle Online Banner Texture Overlay */}
                <div className="absolute inset-0">
                    <img
                        src={slide.bgImage}
                        alt={`Bidmax banner ${slide.id}`}
                        className="w-full h-full object-fill"
                        draggable={true}
                    />
                    </div>

                {/* Top & Bottom Decorative Scallop / Glow Trim (Matches Reference Banner Feel) */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-sky-400 via-white/60 to-sky-400 opacity-70" />
                <div className="absolute bottom-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-400 via-sky-300 to-blue-400 opacity-70" />

                {/* Banner Inner Content */}
                <div className="relative z-10 mx-auto flex h-full max-w-[1320px] items-center justify-between px-8 sm:px-12 lg:px-20">
                  {/* Left Side: Headline, Subtext & Rectangular CTA Button */}
                  <div className="max-w-xl">
                    {/* <h2
                      className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight ${slide.accentColor}`}
                    >
                      {slide.title}
                    </h2> */}
                    {/* <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm md:text-base font-medium text-white/95 line-clamp-2">
                      {slide.subtitle}
                    </p>

                    <div className="mt-4 sm:mt-5">
                      <Link
                        href={slide.ctaHref}
                        className={`inline-flex items-center justify-center rounded-md px-5 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm font-bold shadow-md transition ${slide.buttonBg} ${slide.buttonText}`}
                      >
                        {slide.ctaText}
                      </Link>
                    </div> */}
                  </div>

                  {/* Right Side: Circular Promo Crest Badge (Matches Reference Graphic) */}
                 
                </div>
              </div>
            );
          })}
        </div>

        {/* Left Edge Square White Navigation Tab (<) */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 flex h-10 w-7 sm:h-11 sm:w-8 items-center justify-center rounded-r-md bg-white text-gray-700 shadow-md hover:bg-blue-50 hover:text-[#0866FF] transition"
        >
          <ChevronLeft size={18} strokeWidth={2.5} />
        </button>

        {/* Right Edge Square White Navigation Tab (>) */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 flex h-10 w-7 sm:h-11 sm:w-8 items-center justify-center rounded-l-md bg-white text-gray-700 shadow-md hover:bg-blue-50 hover:text-[#0866FF] transition"
        >
          <ChevronRight size={18} strokeWidth={2.5} />
        </button>
      </div>

      {/* Bottom Dash Pagination Indicators (Matches Screenshot) */}
      <div className="mt-2.5 flex items-center justify-center gap-1.5">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "w-5 bg-[#06172E]"
                : "w-3 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
