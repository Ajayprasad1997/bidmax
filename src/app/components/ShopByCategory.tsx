
"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Category {
  name: string;
  slug: string;
  image: string;
}

const CATEGORIES: Category[] = [
  {
    name: "iPhone",
    slug: "iphone",
    image:
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&q=85",
  },
  {
    name: "Android Phones",
    slug: "android-phones",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=85",
  },
  {
    name: "Laptop",
    slug: "laptop",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=85",
  },
  {
    name: "Gaming Laptop",
    slug: "gaming-laptop",
    image:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&q=85",
  },
  {
    name: "Tablet",
    slug: "tablet",
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&q=85",
  },
  {
    name: "Smartwatch",
    slug: "smartwatch",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=85",
  },
  {
    name: "Smart TV",
    slug: "smart-tv",
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&q=85",
  },
  {
    name: "Speaker",
    slug: "speaker",
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=85",
  },
  {
    name: "Desktop",
    slug: "desktop",
    image:
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400&q=85",
  },
  {
    name: "Headphones",
    slug: "headphones",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=85",
  },
  {
    name: "Earbuds",
    slug: "earbuds",
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&q=85",
  },
  {
    name: "Camera",
    slug: "camera",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=85",
  },
  {
    name: "Gaming Console",
    slug: "gaming-console",
    image:
      "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=400&q=85",
  },
  {
    name: "Printer",
    slug: "printer",
    image:
      "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&q=85",
  },
  {
    name: "Router",
    slug: "router",
    image:
      "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400&q=85",
  },
  {
    name: "Power Bank",
    slug: "power-bank",
    image:
      "https://fdn.gsmarena.com/imgroot/news/24/05/samsung-new-power-banks-india/inline/-1200/gsmarena_001.jpg",
  },
  {
    name: "Chargers",
    slug: "chargers",
    image:
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&q=85",
  },
  {
    name: "Accessories",
    slug: "accessories",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?w=400&q=85",
  },
];

export default function ShopByCategory() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-xl font-extrabold tracking-tight text-[#06172E] sm:text-2xl">
              Shop by Category
            </h2>

            <p className="mt-1 text-xs text-gray-500 md:text-sm">
              Browse new and second-hand electronics across multiple categories
              from trusted local dealers.
            </p>
          </div>

          <Link
            href="/categories"
            className="self-start text-sm font-semibold text-[#0866FF] transition-colors hover:text-[#06172E] sm:self-auto"
          >
            View All &rarr;
          </Link>
        </div>

        {/* Category Carousel */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            type="button"
            onClick={() => handleScroll("left")}
            aria-label="Scroll categories left"
            className="absolute -left-4 top-[42%] z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-blue-100 bg-white text-[#06172E] shadow-md transition-colors hover:bg-[#0866FF] hover:text-white md:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Category Track */}
          <div
            ref={scrollRef}
            className="no-scrollbar flex items-center gap-5 overflow-x-auto scroll-smooth py-3 md:gap-7"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {CATEGORIES.map((category) => (
              <Link
                key={category.slug}
                href={`/search?category=${category.slug}`}
                className="group flex w-24 shrink-0 flex-col items-center md:w-[100px]"
              >
                {/* Circular Image */}
                <div className="flex h-[100px] w-[100px] items-center justify-center overflow-hidden rounded-full border border-blue-100/80 bg-[#F5F8FF] shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-[#0866FF] group-hover:bg-white group-hover:shadow-md md:h-24 md:w-24">
                  <img
                    src={category.image}
                    alt={category.name}
                    loading="lazy"
                    draggable={false}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Category Name */}
                <span className="mt-3 text-center text-xs font-semibold text-[#06172E] transition-colors group-hover:text-[#0866FF] md:text-sm">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={() => handleScroll("right")}
            aria-label="Scroll categories right"
            className="absolute -right-4 top-[42%] z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-blue-100 bg-white text-[#06172E] shadow-md transition-colors hover:bg-[#0866FF] hover:text-white md:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
