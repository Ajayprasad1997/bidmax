
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
  image: string;
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
  {
    name: 'APPLE',
    slug: 'apple',
    bgColor: 'bg-[#F5010C]',
    textColor: 'text-white',
    icon: <AppleIcon size={22} />,
    image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-pro-max.jpg',
  },
  {
    name: 'SAMSUNG',
    slug: 'samsung',
    bgColor: 'bg-[#a795f8]',
    textColor: 'text-white',
    logoText: 'SAMSUNG',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a57.jpg',
  },
  {
    name: 'ONEPLUS',
    slug: 'oneplus',
    bgColor: 'bg-[#F5010C]',
    textColor: 'text-white',
    logoText: '1+',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/oneplus-13.jpg',
  },
  {
    name: 'GOOGLE',
    slug: 'google',
    bgColor: 'bg-[#fc7073]',
    textColor: 'text-[#000]',
    logoText: 'G',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/google-pixel-10a.jpg',
  },
  {
    name: 'XIAOMI',
    slug: 'xiaomi',
    bgColor: 'bg-[#FF6900]',
    textColor: 'text-white',
    logoText: 'mi',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-15.jpg',
  },
  {
    name: 'REDMI',
    slug: 'redmi',
    bgColor: 'bg-[#FF6900]',
    textColor: 'text-white',
    logoText: 'Redmi',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-14-pro-plus-5g.jpg',
  },
  {
    name: 'POCO',
    slug: 'poco',
    bgColor: 'bg-[#FFD400]',
    textColor: 'text-black',
    logoText: 'POCO',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x7-pro.jpg',
  },
  {
    name: 'VIVO',
    slug: 'vivo',
    bgColor: 'bg-[#0066CC]',
    textColor: 'text-white',
    logoText: 'vivo',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/vivo-x200-pro.jpg',
  },
  {
    name: 'IQOO',
    slug: 'iqoo',
    bgColor: 'bg-[#fb9dbc]',
    textColor: 'text-[#000]',
    logoText: 'iQOO',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/vivo-v60-lite.jpg',
  },
  {
    name: 'OPPO',
    slug: 'oppo',
    bgColor: 'bg-[#008250]',
    textColor: 'text-white',
    logoText: 'oppo',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x8-pro.jpg',
  },
  {
    name: 'REALME',
    slug: 'realme',
    bgColor: 'bg-[#FFC915]',
    textColor: 'text-black',
    logoText: 'realme',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/realme-gt7-pro.jpg',
  },
  {
    name: 'MOTOROLA',
    slug: 'motorola',
    bgColor: 'bg-[#b6b69b]',
    textColor: 'text-white',
    logoText: 'M',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/motorola-signature-27-new.jpg',
  },
  {
    name: 'NOTHING',
    slug: 'nothing',
    bgColor: 'bg-[#FFC915]',
    textColor: 'text-white',
    logoText: 'NOTHING',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/nothing-phone-4a-pro.jpg',
  },
  {
    name: 'HONOR',
    slug: 'honor',
    bgColor: 'bg-[#0099E5]',
    textColor: 'text-white',
    logoText: 'honor',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/honor-magic7-pro.jpg',
  },
  {
    name: 'HMD',
    slug: 'hmd',
    bgColor: 'bg-[#d89eb7]',
    textColor: 'text-white',
    logoText: 'HMD',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/hmd-skyline.jpg',
  },
  {
    name: 'NOKIA',
    slug: 'nokia',
    bgColor: 'bg-[#005AFF]',
    textColor: 'text-white',
    logoText: 'NOKIA',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/nokia-x30-5g.jpg',
  },
  {
    name: 'INFINIX',
    slug: 'infinix',
    bgColor: 'bg-[#00A650]',
    textColor: 'text-white',
    logoText: 'Infinix',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/infinix-note60-pro.jpg',
  },
  {
    name: 'TECNO',
    slug: 'tecno',
    bgColor: 'bg-[#0033A0]',
    textColor: 'text-white',
    logoText: 'TECNO',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-40-pro-5g.jpg',
  },
  {
    name: 'ITEL',
    slug: 'itel',
    bgColor: 'bg-[#af9893]',
    textColor: 'text-[#fff]',
    logoText: 'itel',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/itel-rs4.jpg',
  },
  {
    name: 'LAVA',
    slug: 'lava',
    bgColor: 'bg-[#fc984e]',
    textColor: 'text-white',
    logoText: 'LAVA',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/lava-agni4.jpg',
  },
  {
    name: 'MICROMAX',
    slug: 'micromax',
    bgColor: 'bg-[#f69575]',
    textColor: 'text-white',
    logoText: 'Micromax',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/micromax-in-2c.jpg',
  },
  {
    name: 'LENOVO',
    slug: 'lenovo',
    bgColor: 'bg-[#4A154B]',
    textColor: 'text-white',
    logoText: 'Lenovo',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/lenovo-legion-y70.jpg',
  },
  {
    name: 'ASUS',
    slug: 'asus',
    bgColor: 'bg-[#00539B]',
    textColor: 'text-white',
    logoText: 'ASUS',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/asus-zenfone-12-ultra.jpg',
  },
  {
    name: 'SONY',
    slug: 'sony',
    bgColor: 'bg-[#a9c3c6]',
    textColor: 'text-white',
    logoText: 'SONY',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1-vi.jpg',
  },
  {
    name: 'LG',
    slug: 'lg',
    bgColor: 'bg-[#ee955b]',
    textColor: 'text-[#A50034]',
    logoText: 'LG',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/lg-velvet-.jpg',
  },
  {
    name: 'AI+',
    slug: 'ai-plus',
    bgColor: 'bg-[#f7d852]',
    textColor: 'text-white',
    logoText: 'Ai+',
    subText: 'Smartphone',
    image: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-a1-plus-new.jpg',
  },
];

export default function BrandSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const startX = useRef(0);
  const scrollStart = useRef(0);
  const hasDragged = useRef(false);

  const infiniteBrands = [...BRANDS, ...BRANDS, ...BRANDS];
// Auto Slide One Card Every 3 Seconds
useEffect(() => {
  const slider = sliderRef.current;
  if (!slider) return;

  const interval = setInterval(() => {
    if (isHovered || isDragging) return;

    const cards = slider.children;

    if (!cards.length) return;

    const currentScroll = slider.scrollLeft;
    const maxScroll = slider.scrollWidth - slider.clientWidth;

    let nextCard = Array.from(cards).find((card) => {
      return (card as HTMLElement).offsetLeft > currentScroll + 10;
    }) as HTMLElement | undefined;

    if (!nextCard || currentScroll >= maxScroll - 10) {
      slider.scrollTo({
        left: 0,
        behavior: "smooth",
      });
      return;
    }

    slider.scrollTo({
      left: nextCard.offsetLeft - (slider.offsetLeft || 0),
      behavior: "smooth",
    });

  }, 3000);

  return () => clearInterval(interval);
}, [isHovered, isDragging]);

  // Mouse Drag
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const slider = sliderRef.current;
    if (!slider) return;

    setIsDragging(true);
    hasDragged.current = false;

    startX.current = e.pageX;
    scrollStart.current = slider.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !sliderRef.current) return;

    const walk = (e.pageX - startX.current) * 1.5;

    if (Math.abs(walk) > 5) {
      hasDragged.current = true;
    }

    sliderRef.current.scrollLeft = scrollStart.current - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section className="bg-white py-3 md:py-10">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-extrabold tracking-tight text-[#06172E] sm:text-2xl">
            Search by Brands
          </h2>

          <Link
            href="/brands"
            className="text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
          >
            View All &rarr;
          </Link>
        </div>

        {/* Slider Wrapper */}
        <div className="relative group">

          {/* Left Fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-transparent" />

          {/* Right Fade */}
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-transparent" />

          {/* Scrollable Track */}
          <div
            ref={sliderRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              setIsDragging(false);
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
            className={`flex items-center gap-3 overflow-x-auto select-none py-3 md:gap-8 ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >

            {infiniteBrands.map((brand, index) => (
              <Link
                key={`${brand.slug}-${index}`}
                href={`/search?brand=${brand.slug}`}
                draggable={false}
                onClick={(e) => {
                  if (hasDragged.current) {
                    e.preventDefault();
                    hasDragged.current = false;
                  }
                }}
                className="group/item flex w-20 shrink-0 flex-col items-center"
              >

                {/* Original Circular Brand Badge */}
                <div
                  className={`relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full p-2 shadow-sm transition-all duration-300 group-hover/item:scale-105 border border-slate-200 bg-white p-3.5 shadow-sm transition-all duration-200 hover:border-[#0866FF] hover:shadow-md group-hover/item:shadow-md md:h-[100px] md:w-[100px] ${brand.textColor}`}
                >

                  {/* Brand Logo */}
                  {/* <div className="absolute left-0 right-0 top-3 z-20 flex justify-center">
                    {brand.icon ? (
                      brand.icon
                    ) : (
                      <span className="text-[9px] font-extrabold leading-none">
                        {brand.logoText}
                      </span>
                    )}
                  </div> */}

                  {/* Smartphone Image */}
                  <img
                    src={brand.image}
                    alt={`${brand.name} smartphone`}
                    loading="lazy"
                    draggable={false}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                    className="absolute bottom-0 left-1/2 h-[76%] w-[76%] -translate-x-1/2 object-contain object-bottom mix-blend-multiply drop-shadow-md transition-transform duration-300 group-hover/item:scale-110"
                  />


                </div>


                {/* Original Brand Label */}
                <span className="mt-2.5 text-center text-[11px] font-semibold uppercase tracking-wider text-gray-700 transition-colors group-hover/item:text-blue-600">
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
