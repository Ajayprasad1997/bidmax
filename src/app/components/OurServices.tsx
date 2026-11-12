
"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ServiceCategory {
  id: string;
  label: string;
  href: string;
  imageUrl: string;
}

const phoneServices: ServiceCategory[] = [
  {
    id: "buy-new-phone",
    label: "Buy New Phone",
    href: "/buy-phones?condition=new",
    imageUrl:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "second-hand-phones",
    label: "Used Phone",
    href: "/buy-phones?condition=second-hand",
    imageUrl:
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "sell-phone",
    label: "Sell Phone",
    href: "/sell-phone",
    imageUrl:
      "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https%3A/assets.cdn.filesafe.space/NuU5xdJ2Kv99cKZVzFGr/media/68e93f25476e1f798d149768.png",
  },
  {
    id: "live-phone-bids",
    label: "Bid on Phones",
    href: "/auctions",
    imageUrl:
      "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "compare-dealer-prices",
    label: "Compare Prices",
    href: "/buy-phones",
    imageUrl:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "nearby-mobile-stores",
    label: "Nearby Stores",
    href: "/dealers",
    imageUrl:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: "5g-smartphones",
    label: "5G Smartphones",
    href: "/buy-phones?search=5G",
    imageUrl:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "4g-smartphones",
    label: "4G Smartphones",
    href: "/buy-phones?search=4G",
    imageUrl:
      "https://images.unsplash.com/photo-1603891128711-11b4b03bb138?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "budget-phones",
    label: "Budget Phones",
    href: "/buy-phones?search=Redmi",
    imageUrl:
      "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "exchange-upgrade",
    label: "Exchange Phone",
    href: "/sell-phone",
    imageUrl:
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=85",
  },
 
  {
    id: "dad-phones",
    label: "Dad Phones",
    href: "/buy-phones?search=Redmi",
    imageUrl:
      "https://images.pexels.com/photos/1268513/pexels-photo-1268513.jpeg",
  },
];

function ServiceCard({ service }: { service: ServiceCategory }) {
  return (
    <Link
      href={service.href}
      draggable={false}
      className="group flex w-full flex-col items-center text-center"
    >
      <div className="flex h-24 w-full items-center justify-center overflow-hidden rounded-2xl border border-blue-100/70 bg-[#EEF6FB] p-2.5 transition-all duration-200 group-hover:-translate-y-1 group-hover:border-[#0866FF]/40 group-hover:bg-blue-50/90 group-hover:shadow-md sm:h-28">
        <img
          src={service.imageUrl}
          alt={service.label}
          loading="lazy"
          draggable={false}
          className="h-full w-full rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <span className="mt-2.5 text-xs font-bold leading-snug text-[#06172E] transition-colors group-hover:text-[#0866FF] sm:text-[13px]">
        {service.label}
      </span>
    </Link>
  );
}

export default function OurServices() {
  const trackRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(0);
  const draggingRef = useRef(false);
  const lastPointerXRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);
  const halfWidthRef = useRef(0);

  const [isDragging, setIsDragging] = useState(false);

  // Keep the track moving infinitely from right to left.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateWidth = () => {
      halfWidthRef.current = track.scrollWidth / 2;
    };

    updateWidth();

    const resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(track);

    const animate = () => {
      const halfWidth = halfWidthRef.current;

      if (!draggingRef.current && halfWidth > 0) {
        positionRef.current -= 0.5;

        if (positionRef.current <= -halfWidth) {
          positionRef.current += halfWidth;
        }

        if (positionRef.current > 0) {
          positionRef.current -= halfWidth;
        }
      }

      track.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      resizeObserver.disconnect();
    };
  }, []);

  // Mouse and touch drag support.
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    setIsDragging(true);
    lastPointerXRef.current = e.clientX;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;

    const delta = e.clientX - lastPointerXRef.current;
    lastPointerXRef.current = e.clientX;

    positionRef.current += delta;

    const halfWidth = halfWidthRef.current;

    if (halfWidth > 0) {
      if (positionRef.current <= -halfWidth) {
        positionRef.current += halfWidth;
      }

      if (positionRef.current > 0) {
        positionRef.current -= halfWidth;
      }
    }

    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;
    }
  };

  const handlePointerUp = () => {
    draggingRef.current = false;
    setIsDragging(false);
  };

  // Move manually using the arrow buttons.
  const moveSlider = (direction: "left" | "right") => {
    const halfWidth = halfWidthRef.current;
    if (!halfWidth) return;

    positionRef.current += direction === "left" ? -200 : 200;

    if (positionRef.current <= -halfWidth) {
      positionRef.current += halfWidth;
    }

    if (positionRef.current > 0) {
      positionRef.current -= halfWidth;
    }

    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;
    }
  };

  return (
    <section className="w-full overflow-hidden bg-white py-8 sm:py-10">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-extrabold tracking-tight text-[#06172E] sm:text-2xl">
            Our Services
          </h2>

          {/* Mobile slider controls */}
          <div className="flex gap-2 md:hidden">
            <button
              type="button"
              onClick={() => moveSlider("right")}
              aria-label="Move services left"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-[#06172E] transition hover:bg-blue-50"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              type="button"
              onClick={() => moveSlider("left")}
              aria-label="Move services right"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-[#06172E] transition hover:bg-blue-50"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Mobile: Infinite draggable slider */}
        <div className="relative overflow-hidden md:hidden">
          <div
            ref={trackRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onLostPointerCapture={handlePointerUp}
            className={`flex w-max gap-3 ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            style={{
              touchAction: "pan-y",
              userSelect: "none",
              willChange: "transform",
            }}
          >
            {[...phoneServices, ...phoneServices].map((service, index) => (
              <div
                key={`${service.id}-${index}`}
                className="w-[105px] shrink-0"
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Original grid layout */}
        <div className="hidden grid-cols-4 gap-x-3 gap-y-6 sm:grid md:grid-cols-6 lg:grid-cols-8">
          {phoneServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
