
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowUpRight, BadgeCheck, Store } from "lucide-react";

interface ExclusiveStore {
  id: number;
  name: string;
  location: string;
  pincode: string;
  image: string;
  href: string;
  verified: boolean;
}
const exclusiveStores: ExclusiveStore[] = [
  {
    id: 1,
    name: "Bidmax Retail One",
    location: "Kolkata, West Bengal",
    pincode: "700001",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=85",
    href: "/stores/mobile-world",
    verified: true,
  },
  {
    id: 2,
    name: "Bidmax Retail Two",
    location: "Barrackpore, West Bengal",
    pincode: "700120",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=85",
    href: "/stores/smart-phone-hub",
    verified: true,
  },
  {
    id: 3,
    name: "Bidmax Retail Three",
    location: "Patna, Bihar",
    pincode: "800001",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=85",
    href: "/stores/digital-mobile-store",
    verified: true,
  },
  {
    id: 4,
    name: "Bidmax Retail Four",
    location: "New Delhi",
    pincode: "110001",
    image:
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&q=85",
    href: "/stores/mobile-gallery",
    verified: true,
  },
];


const ExclusiveStores = () => {
  return (
    <section className="relative overflow-hidden bg-[#f7f8fc] py-16 sm:py-20 lg:py-24">

      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-12 sm:flex-row sm:items-end">

          <div>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-700">
              <Store size={15} />
              Trusted Retail Partners
            </span>

            <h2 className="text-3xl font-extrabold tracking-tight text-[#172554] sm:text-4xl lg:text-5xl">
              Our Exclusive{" "}
              <span className="text-[#2563eb]">Stores</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
              Discover trusted local mobile retailers. Explore genuine
              deals, compare prices and find your nearest store.
            </p>
          </div>

          <Link
            href="/stores"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-bold text-[#172554] transition hover:border-blue-600 hover:text-blue-600"
          >
            Explore All Stores
            <ArrowUpRight size={17} />
          </Link>
        </div>

        {/* Store Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {exclusiveStores.map((store) => (
            <Link
              href={store.href}
              key={store.id}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-100 hover:shadow-xl"
            >

              {/* Store Image */}
              <div className="relative h-52 overflow-hidden bg-gray-100">

                <Image
                  src={store.image}
                  alt={store.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#101d3d]/60 via-transparent to-transparent" />

                {store.verified && (
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[11px] font-bold text-green-700 shadow-sm">
                    <BadgeCheck size={14} />
                    Verified Dealer
                  </span>
                )}

                <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#2563eb] shadow-lg transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#2563eb] group-hover:text-white">
                  <ArrowUpRight size={20} />
                </span>
              </div>

              {/* Store Information */}
              <div className="p-5">

                <h3 className="text-lg font-bold text-[#172554] transition-colors group-hover:text-blue-600">
                  {store.name}
                </h3>

                {/* <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                  <MapPin size={16} className="shrink-0 text-blue-600" />
                  {store.location}
                </div> */}

                <div className="mt-2 flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="text-xs font-medium text-gray-400">
                    PIN Code: {store.pincode}
                  </span>

                  <span className="text-xs font-bold text-blue-600 transition-all group-hover:translate-x-1">
                    Visit Store →
                  </span>
                </div>

              </div>
            </Link>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#172554] to-[#2563eb] px-6 py-8 text-center sm:px-10">

          <h3 className="mt-1 text-xl font-extrabold text-white sm:text-2xl">
            Are You a Mobile Phone Retailer?
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-blue-100">
            Join BidMax and connect with customers looking for smartphones
            and great local deals.
          </p>

          <Link
            href="/become-a-dealer"
            className="mt-6 inline-flex items-center gap-2 inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-extrabold text-[#0866FF] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50"
          >
            Become a Dealer
            <ArrowUpRight size={17} />
          </Link>

        </div>

      </div>
    </section>
  );
};

export default ExclusiveStores;
