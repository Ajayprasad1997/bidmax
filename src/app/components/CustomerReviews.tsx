
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  Quote,
  ArrowLeft,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

interface CustomerReview {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
  date: string;
  review: string;
}

const customerReviews: CustomerReview[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    location: "Kolkata, West Bengal",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=85",
    rating: 5,
    date: "Recent Review",
    review: "Finding the right smartphone at a good price is now much easier. Comparing different local store offers saves a lot of time.",
  },
  {
    id: 2,
    name: "Priya Das",
    location: "Barrackpore, West Bengal",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=85",
    rating: 5,
    date: "Recent Review",
    review: "I love the idea of checking mobile prices from nearby retailers. It makes discovering local deals simple and convenient.",
  },
  {
    id: 3,
    name: "Amit Verma",
    location: "Patna, Bihar",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=85",
    rating: 5,
    date: "Recent Review",
    review: "A useful platform for exploring new and second-hand smartphones. I can compare available options before contacting a retailer.",
  },
  {
    id: 4,
    name: "Sneha Roy",
    location: "Howrah, West Bengal",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=85",
    rating: 5,
    date: "Recent Review",
    review: "Comparing mobile offers from different retailers makes shopping more convenient. I like having local options in one place.",
  },
  {
    id: 5,
    name: "Vikash Kumar",
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=85",
    rating: 5,
    date: "Recent Review",
    review: "A convenient way to discover mobile stores and check available phone deals before visiting a retailer.",
  },
  {
    id: 6,
    name: "Ananya Singh",
    location: "Patna, Bihar",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&q=85",
    rating: 5,
    date: "Recent Review",
    review: "I like the simple approach of finding nearby retailers and comparing smartphone prices without visiting multiple shops.",
  },
  {
    id: 7,
    name: "Rohit Mehta",
    location: "Mumbai, Maharashtra",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&q=85",
    rating: 5,
    date: "Recent Review",
    review: "A helpful concept for buyers who want to explore different smartphone options and connect directly with local dealers.",
  },
  {
    id: 8,
    name: "Neha Gupta",
    location: "Jaipur, Rajasthan",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=85",
    rating: 5,
    date: "Recent Review",
    review: "Having access to different local store options makes it easier to research phones and make a buying decision.",
  },
  {
    id: 9,
    name: "Arjun Patel",
    location: "Ahmedabad, Gujarat",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&q=85",
    rating: 5,
    date: "Recent Review",
    review: "A nice platform concept for discovering smartphones, checking local retailer offers and contacting stores directly.",
  },
];

const CustomerReviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // Responsive slider
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();

    window.addEventListener("resize", updateVisibleCount);

    return () => {
      window.removeEventListener("resize", updateVisibleCount);
    };
  }, []);

  const maxIndex = Math.max(
    0,
    customerReviews.length - visibleCount
  );

  // Keep index within valid range
  useEffect(() => {
    setActiveIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev >= maxIndex ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  const nextSlide = () => {
    setActiveIndex((prev) =>
      prev >= maxIndex ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev <= 0 ? maxIndex : prev - 1
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#f7f8fc] py-16 sm:py-20 lg:py-24">

      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-100/60 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-indigo-100/60 blur-[100px]" />

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">

          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-700">
            <MessageCircle size={15} />
            Customer Experiences
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#172554] sm:text-4xl lg:text-5xl">
            What Our Customers{" "}
            <span className="text-[#2563eb]">Say</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-500 sm:text-base">
            Discover customer experiences and see how BidMax
            makes exploring smartphones and local retailer offers easier.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500" />
        </div>

        {/* Slider */}
        <div className="relative">

          {/* Previous Button */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous reviews"
            className="absolute -left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-[#172554] shadow-lg transition hover:bg-blue-600 hover:text-white sm:-left-5 lg:-left-6"
          >
            <ArrowLeft size={20} />
          </button>

          {/* Slider Viewport */}
          <div className="overflow-hidden px-1 py-5">

            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${activeIndex * (100 / visibleCount)}%)`,
              }}
            >

              {customerReviews.map((review) => (
                <div
                  key={review.id}
                  className="w-full shrink-0 px-2 sm:w-1/2 sm:px-3 lg:w-1/3"
                >

                  {/* Review Card */}
                  <div className="group flex h-full min-h-[365px] flex-col rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_8px_35px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-xl sm:p-7">

                    {/* Card Top */}
                    <div className="mb-6 flex items-center justify-between">

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                        <Quote size={23} />
                      </div>

                      <span className="text-xs font-medium text-gray-400">
                        {review.date}
                      </span>

                    </div>

                    {/* Stars */}
                    <div className="mb-4 flex items-center gap-1">
                      {Array.from({
                        length: review.rating,
                      }).map((_, i) => (
                        <Star
                          key={i}
                          size={17}
                          className="fill-[#FBBF24] text-[#FBBF24]"
                        />
                      ))}
                    </div>

                    {/* Review */}
                    <p className="flex-1 text-[14px] leading-7 text-gray-600 sm:text-[15px]">
                      "{review.review}"
                    </p>

                    {/* Divider */}
                    <div className="my-6 h-px w-full bg-gray-100" />

                    {/* Customer Info */}
                    <div className="flex items-center gap-3">

                      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-blue-50">
                        <Image
                          src={review.image}
                          alt={review.name}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>

                      <div className="min-w-0">
                        <h3 className="truncate text-sm font-bold text-[#172554]">
                          {review.name}
                        </h3>

                        <p className="mt-1 truncate text-xs text-gray-400">
                          {review.location}
                        </p>
                      </div>

                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next reviews"
            className="absolute -right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-[#172554] shadow-lg transition hover:bg-blue-600 hover:text-white sm:-right-5 lg:-right-6"
          >
            <ArrowRight size={20} />
          </button>

        </div>

        {/* Slider Controls */}
        <div className="mt-8 flex flex-col items-center justify-center gap-5">

          {/* Dots */}
          <div className="flex items-center justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to review slide ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-8 bg-blue-600"
                    : "w-2.5 bg-gray-300 hover:bg-blue-400"
                }`}
              />
            ))}
          </div>

          <p className="text-xs font-medium text-gray-400">
            Showing {Math.min(activeIndex + visibleCount, customerReviews.length)} of {customerReviews.length} reviews
          </p>

        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-3xl bg-gradient-to-r from-[#172554] via-[#1e40af] to-[#2563eb] p-8 text-center sm:flex-row sm:px-12 sm:text-left">

          <div>
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Your Next Smartphone Starts Here!
            </h3>

            <p className="mt-2 text-sm leading-6 text-blue-100">
              Explore local stores, compare offers and find your perfect phone.
            </p>
          </div>

          <Link
            href="/buy-phones"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#1e40af] transition-all hover:-translate-y-1 hover:bg-blue-50"
          >
            Explore Phones
            <ArrowRight size={18} />
          </Link>

        </div>

      </div>
    </section>
  );
};

export default CustomerReviews;
