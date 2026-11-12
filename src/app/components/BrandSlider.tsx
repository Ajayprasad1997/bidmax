'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

interface Brand {
  name: string;
  slug: string;
  bgColor: string;
  textColor: string;
  logoText?: string;
  icon?: React.ReactNode;
  subText?: string;
}

const AppleIcon = ({ size = 26 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 384 512"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>
);

const BRANDS: Brand[] = [
  { name: 'APPLE', slug: 'apple', bgColor: 'bg-black', textColor: 'text-white', icon: <AppleIcon size={26} /> },
  { name: 'SAMSUNG', slug: 'samsung', bgColor: 'bg-[#1428A0]', textColor: 'text-white', logoText: 'SAMSUNG' },
  { name: 'ONEPLUS', slug: 'oneplus', bgColor: 'bg-[#F5010C]', textColor: 'text-white', logoText: '1+' },
  { name: 'GOOGLE', slug: 'google', bgColor: 'bg-white border border-gray-200', textColor: 'text-[#4285F4]', logoText: 'G' },
  { name: 'XIAOMI', slug: 'xiaomi', bgColor: 'bg-[#FF6900]', textColor: 'text-white', logoText: 'mi' },
  { name: 'REDMI', slug: 'redmi', bgColor: 'bg-[#FF6900]', textColor: 'text-white', logoText: 'Redmi' },
  { name: 'POCO', slug: 'poco', bgColor: 'bg-[#FFD400]', textColor: 'text-black', logoText: 'POCO' },
  { name: 'VIVO', slug: 'vivo', bgColor: 'bg-[#0066CC]', textColor: 'text-white', logoText: 'vivo' },
  { name: 'IQOO', slug: 'iqoo', bgColor: 'bg-black', textColor: 'text-[#FFC915]', logoText: 'iQOO' },
  { name: 'OPPO', slug: 'oppo', bgColor: 'bg-[#008250]', textColor: 'text-white', logoText: 'oppo' },
  { name: 'REALME', slug: 'realme', bgColor: 'bg-[#FFC915]', textColor: 'text-black', logoText: 'realme' },
  { name: 'MOTOROLA', slug: 'motorola', bgColor: 'bg-black', textColor: 'text-white', logoText: 'M' },
  { name: 'NOTHING', slug: 'nothing', bgColor: 'bg-black', textColor: 'text-white', logoText: 'NOTHING' },
  { name: 'HONOR', slug: 'honor', bgColor: 'bg-[#0099E5]', textColor: 'text-white', logoText: 'honor' },
  { name: 'HMD', slug: 'hmd', bgColor: 'bg-black', textColor: 'text-white', logoText: 'HMD' },
  { name: 'NOKIA', slug: 'nokia', bgColor: 'bg-[#005AFF]', textColor: 'text-white', logoText: 'NOKIA' },
  { name: 'INFINIX', slug: 'infinix', bgColor: 'bg-[#00A650]', textColor: 'text-white', logoText: 'Infinix' },
  { name: 'TECNO', slug: 'tecno', bgColor: 'bg-[#0033A0]', textColor: 'text-white', logoText: 'TECNO' },
  { name: 'ITEL', slug: 'itel', bgColor: 'bg-white border border-gray-200', textColor: 'text-[#E60012]', logoText: 'itel' },
  { name: 'LAVA', slug: 'lava', bgColor: 'bg-[#E91E63]', textColor: 'text-white', logoText: 'LAVA' },
  { name: 'MICROMAX', slug: 'micromax', bgColor: 'bg-[#FF5722]', textColor: 'text-white', logoText: 'Micromax' },
  { name: 'LENOVO', slug: 'lenovo', bgColor: 'bg-[#4A154B]', textColor: 'text-white', logoText: 'Lenovo' },
  { name: 'ASUS', slug: 'asus', bgColor: 'bg-[#00539B]', textColor: 'text-white', logoText: 'ASUS' },
  { name: 'SONY', slug: 'sony', bgColor: 'bg-black', textColor: 'text-white', logoText: 'SONY' },
  { name: 'LG', slug: 'lg', bgColor: 'bg-white border border-gray-200', textColor: 'text-[#A50034]', logoText: 'LG' },
  { name: 'AI+', slug: 'ai-plus', bgColor: 'bg-black', textColor: 'text-white', logoText: 'Ai+', subText: 'Smartphone' },
];

export default function BrandSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hasDragged, setHasDragged] = useState(false);

  // Duplicate list to create seamless infinite loop
  const infiniteBrands = [...BRANDS, ...BRANDS, ...BRANDS];

  // Auto-scroll loop using requestAnimationFrame
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrameId: number;
    const speed = 0.8; // Adjust scrolling speed here

    const step = () => {
      if (!isHovered && !isDragging && slider) {
        slider.scrollLeft += speed;

        // Reset scroll position seamlessly at the halfway point
        const singleSetWidth = slider.scrollWidth / 3;
        if (slider.scrollLeft >= singleSetWidth * 2) {
          slider.scrollLeft -= singleSetWidth;
        } else if (slider.scrollLeft <= 0) {
          slider.scrollLeft += singleSetWidth;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, isDragging]);

  // Mouse Drag Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const slider = sliderRef.current;
    if (!slider) return;
    setIsDragging(true);
    setHasDragged(false);
    setStartX(e.pageX - slider.offsetLeft);
    setScrollLeft(slider.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Drag sensitivity
    if (Math.abs(walk) > 5) {
      setHasDragged(true);
    }
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
    setIsHovered(false);
  };

  return (
    <section className="py-10 bg-white">
      {/* Main Container */}
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-extrabold tracking-tight text-[#06172E] sm:text-2xl">
            Search by Brands
          </h2>
          <Link
            href="/brands"
            className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            View All &rarr;
          </Link>
        </div>

        {/* Slider Wrapper with Edge Fade */}
        <div className="relative group">
          {/* Left Fade Gradient */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent z-10" />
          {/* Right Fade Gradient */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Scrollable Track */}
          <div
            ref={sliderRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseUpOrLeave}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={() => setIsDragging(false)}
            className={`flex items-center gap-6 md:gap-8 overflow-x-auto select-none py-3 no-scrollbar ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {infiniteBrands.map((brand, index) => (
              <Link
                key={`${brand.slug}-${index}`}
                href={`/search?brand=${brand.slug}`}
                draggable={false}
                onClick={(e) => {
                  // Prevent accidental navigation while dragging
                  if (hasDragged) e.preventDefault();
                }}
                className="flex flex-col items-center flex-shrink-0 group/item w-20"
              >
                {/* Circular Brand Badge */}
                <div
                  className={`w-16 h-16 md:w-[72px] md:h-[72px] rounded-full shadow-sm flex flex-col items-center justify-center p-2 transition-transform duration-200 group-hover/item:scale-105 group-hover/item:shadow-md ${brand.bgColor} ${brand.textColor}`}
                >
                  {brand.icon ? (
                    brand.icon
                  ) : (
                    <>
                      <span
                        className={`font-bold tracking-tight text-center leading-none ${
                          (brand.logoText?.length || 0) > 6
                            ? 'text-[10px]'
                            : (brand.logoText?.length || 0) > 4
                            ? 'text-xs'
                            : 'text-base md:text-lg'
                        }`}
                      >
                        {brand.logoText}
                      </span>
                      {brand.subText && (
                        <span className="text-[7px] text-gray-300 mt-0.5">
                          {brand.subText}
                        </span>
                      )}
                    </>
                  )}
                </div>

                {/* Brand Label */}
                <span className="mt-2.5 text-[11px] font-semibold tracking-wider text-gray-700 uppercase text-center group-hover/item:text-blue-600 transition-colors">
                  {brand.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
