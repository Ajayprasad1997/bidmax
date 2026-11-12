
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import type { FormEvent } from "react";

import {
  Search,
  UserRound,
  Menu,
  X,
  ChevronDown,
  Smartphone,
  Store,
  Gavel,
  ArrowRight,
  Headphones,
  RefreshCw,
  Wifi,
  Signal,
  CheckSquare,
  RotateCcw,
  TabletSmartphone,
  Layers,
  Heart,
  ShoppingCart,
  MapPin,
  LocateFixed,
  Tag,
} from "lucide-react";

/* =========================
   BRAND ICONS
========================= */

const AppleIcon = ({ size = 15 }: { size?: number }) => (
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

const GoogleIcon = ({ size = 14 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 488 512"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
  </svg>
);

/* =========================
   NAVIGATION
========================= */

const navItems = [
  { label: "Search By Brands", href: "/" },
  { label: "Buy Phones", href: "/buy-phones", icon: Smartphone },
  { label: "Sell Phone", href: "/sell-phone", icon: Store },
  { label: "Bid / Auctions", href: "/auctions", icon: Gavel },
  { label: "Dealers", href: "/dealers" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Contact", href: "/contact" },
];

const leftColumnBrands = [
  {
    label: "Apple iPhone",
    href: "/buy-phones?search=iPhone",
    icon: AppleIcon,
  },
  {
    label: "Samsung",
    href: "/buy-phones?search=Samsung",
    badge: "S",
  },
  {
    label: "OnePlus",
    href: "/buy-phones?search=OnePlus",
    badge: "1+",
  },
  {
    label: "Google Pixel",
    href: "/buy-phones?search=Pixel",
    icon: GoogleIcon,
  },
  {
    label: "Xiaomi / Redmi",
    href: "/buy-phones?search=Redmi",
    badge: "mi",
  },
  {
    label: "Motorola",
    href: "/buy-phones?search=Motorola",
    badge: "M",
  },
  {
    label: "Foldable Phones",
    href: "/buy-phones?search=Fold",
    icon: TabletSmartphone,
  },
];

const rightColumnCategories = [
  {
    label: "Refurbished Mobiles",
    href: "/buy-phones?condition=second-hand",
    icon: RefreshCw,
  },
  {
    label: "Usable Mobiles",
    href: "/buy-phones?condition=second-hand",
    icon: Smartphone,
  },
  {
    label: "5G Mobiles",
    href: "/buy-phones?search=5G",
    icon: Wifi,
  },
  {
    label: "4G Phones",
    href: "/buy-phones?search=4G",
    icon: Signal,
  },
  {
    label: "Android Phones",
    href: "/buy-phones?search=Android",
    icon: Layers,
  },
  {
    label: "Good Condition Mobiles",
    href: "/buy-phones?condition=second-hand",
    icon: CheckSquare,
  },
  {
    label: "Pre-Owned Mobiles",
    href: "/buy-phones?condition=second-hand",
    icon: RotateCcw,
  },
];

/* =========================
   HEADER COMPONENT
========================= */

export default function Header() {
  const router = useRouter();

  /* Header states */
  const [mobileMenu, setMobileMenu] = useState(false);
  const [search, setSearch] = useState("");
  const [buyPhonesDropdown, setBuyPhonesDropdown] = useState(false);
  const [signInDropdown, setSignInDropdown] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  /* Delivery location states */
  const [locationModal, setLocationModal] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Kolkata");
  const [pincode, setPincode] = useState("");
  const [mapLocation, setMapLocation] = useState("Kolkata, India");
  const [locationLoading, setLocationLoading] = useState(false);
  const [locationError, setLocationError] = useState("");

  /* =========================
     SEARCH FUNCTION
  ========================= */

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!search.trim()) return;

    router.push(
      `/buy-phones?search=${encodeURIComponent(search.trim())}`
    );

    setMobileMenu(false);
  };

  /* =========================
     CURRENT LOCATION
  ========================= */

  const handleCurrentLocation = () => {
    if (!navigator.geolocation) {
      setLocationError(
        "Your browser does not support location detection."
      );
      return;
    }

    setLocationLoading(true);
    setLocationError("");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setSelectedLocation("Current Location");
        setMapLocation(`${latitude},${longitude}`);
        setLocationLoading(false);
      },
      (error) => {
        setLocationLoading(false);

        if (error.code === error.PERMISSION_DENIED) {
          setLocationError(
            "Location permission denied. Please allow location access."
          );
        } else {
          setLocationError(
            "Unable to detect your location. Please try again."
          );
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
      }
    );
  };

  /* =========================
     PINCODE SEARCH
  ========================= */

  const handlePincodeSearch = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!/^[0-9]{6}$/.test(pincode)) {
      setLocationError("Please enter a valid 6-digit PIN code.");
      return;
    }

    setLocationLoading(true);
    setLocationError("");

    try {
      const response = await fetch(
        `https://api.postalpincode.in/pincode/${pincode}`
      );

      if (!response.ok) {
        throw new Error("Unable to check PIN code.");
      }

      const data = await response.json();

      if (
        data[0]?.Status !== "Success" ||
        !data[0]?.PostOffice?.length
      ) {
        setLocationError(
          "Invalid PIN code. Please enter a valid Indian PIN code."
        );
        setLocationLoading(false);
        return;
      }

      const office = data[0].PostOffice[0];

      const city = office.District || office.Block || office.Name;
      const state = office.State;

      const locationName = `${city}, ${state}`;

      setSelectedLocation(locationName);
      setMapLocation(`${pincode}, India`);
      setLocationModal(false);
      setPincode("");
      setLocationLoading(false);
    } catch {
      setLocationError(
        "Unable to verify PIN code. Please try again."
      );
      setLocationLoading(false);
    }
  };

  /* =========================
     CLOSE LOCATION MODAL
  ========================= */

  const closeLocationModal = () => {
    setLocationModal(false);
    setLocationError("");
  };

  /* =========================
     RENDER
  ========================= */

  return (
    <header className="sticky top-0 z-50 w-full bg-white">

      {/* =========================
          TOP GRADIENT BAR
      ========================= */}
     
      {/* =========================
          TOP ANNOUNCEMENT MARQUEE
      ========================= */}

     {isVisible && (
        <div className="relative z-[60] w-full overflow-hidden bg-gradient-to-r from-[#06172E] via-[#0755D9] to-[#0866FF] text-white">

          {/* MARQUEE CONTAINER */}
          <div className="mx-auto flex min-h-[42px] w-full max-w-7xl items-center px-3 sm:px-6 lg:px-8">

            {/* MARQUEE CONTENT */}
            <div className="min-w-0 flex-1 overflow-hidden">
              <div className="announcement-marquee flex w-max items-center">

                {/* FIRST GROUP */}
                <div className="flex shrink-0 items-center whitespace-nowrap px-6">
                  <span className="text-[11px] font-bold tracking-wide sm:text-xs">
                    BUY • SELL • BID
                  </span>

                  <span className="mx-3 text-white/50">|</span>

                  <span className="text-[11px] font-medium tracking-wide sm:text-xs">
                    Find the best mobile deals from trusted local retailers.
                  </span>

                  <span className="ml-3 inline-flex items-center gap-1 rounded-full bg-yellow-400 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wide text-[#06172E] sm:text-[10px]">
                    <Tag size={11} />
                    Special Offers
                  </span>
                </div>

                {/* DUPLICATE GROUP */}
                <div
                  aria-hidden="true"
                  className="flex shrink-0 items-center whitespace-nowrap px-6"
                >
                  <span className="text-[11px] font-bold tracking-wide sm:text-xs">
                    BUY • SELL • BID
                  </span>

                  <span className="mx-3 text-white/50">|</span>

                  <span className="text-[11px] font-medium tracking-wide sm:text-xs">
                    Find the best mobile deals from trusted local retailers.
                  </span>

                  <span className="ml-3 inline-flex items-center gap-1 rounded-full bg-yellow-400 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wide text-[#06172E] sm:text-[10px]">
                    <Tag size={11} />
                    Special Offers
                  </span>
                </div>

              </div>
            </div>

            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={() => setIsVisible(false)}
              aria-label="Close announcement bar"
              className="ml-2 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white transition-all duration-200 hover:bg-white/20"
            >
              <X size={16} strokeWidth={2} />
            </button>

          </div>

          {/* MARQUEE ANIMATION */}
          <style jsx>{`
            .announcement-marquee {
              animation: announcement-scroll 25s linear infinite;
            }

            .announcement-marquee:hover {
              animation-play-state: paused;
            }

            @keyframes announcement-scroll {
              from {
                transform: translateX(0);
              }

              to {
                transform: translateX(-50%);
              }
            }

            @media (prefers-reduced-motion: reduce) {
              .announcement-marquee {
                animation: none;
              }
            }
          `}</style>

        </div>
      )}


   
    

      {/* =========================
          MAIN HEADER
      ========================= */}

      <div className="border-b border-gray-100">

        <div className="mx-auto flex h-[78px] max-w-[1400px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">

          {/* LOGO */}

          <Link
            href="/"
            className="flex shrink-0 items-center"
            aria-label="BidMax Home"
          >
            <Image
              src="/images/bidmax-logo.png"
              alt="BidMax - Buy Sell Bid"
              width={85}
              height={85}
              priority
              className="h-[66px] w-[66px] object-contain sm:h-[76px] sm:w-[76px]"
            />
          </Link>

          {/* DESKTOP SEARCH */}

          <div className="mx-auto hidden w-full max-w-[550px] md:block">

            <form
              onSubmit={handleSearch}
              className="flex h-[46px] items-center rounded-full border border-gray-200 bg-white px-4 transition-all focus-within:border-[#0866FF] focus-within:shadow-[0_0_0_3px_rgba(8,102,255,0.08)]"
            >
              <Search
                size={19}
                className="shrink-0 text-gray-400"
              />

              <input
                type="search"
                placeholder="Search by mobile brand or model..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-full w-full bg-transparent px-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
              />

              <button
                type="submit"
                aria-label="Search phones"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#0755D9] to-[#0866FF] text-white transition hover:shadow-lg"
              >
                <Search size={17} />
              </button>
            </form>

          </div>

          {/* DESKTOP HEADER ACTIONS */}

          <div className="hidden shrink-0 items-center gap-2 lg:flex">

            {/* DELIVERY LOCATION */}

            <button
              type="button"
              onClick={() => setLocationModal(true)}
              className="group flex items-center gap-2 rounded-xl border border-transparent px-2.5 py-2 transition hover:border-blue-100 hover:bg-blue-50/50"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-[#0866FF]">
                <MapPin size={18} />
              </span>

              <span className="flex flex-col items-start">
                <span className="text-[10px] font-medium text-gray-400">
                  Deliver to
                </span>

                <span className="flex max-w-[125px] items-center gap-1 text-xs font-bold text-[#06172E]">
                  <span className="truncate">
                    {selectedLocation}
                  </span>

                  <ChevronDown
                    size={13}
                    className="shrink-0 text-gray-400 transition group-hover:text-[#0866FF]"
                  />
                </span>
              </span>
            </button>

            <div className="mx-1 h-8 w-px bg-gray-200" />

            {/* WISHLIST */}

            <Link
              href="/wishlist"
              aria-label="Wishlist"
              className="flex h-10 w-10 items-center justify-center rounded-full text-gray-700 transition hover:bg-blue-50 hover:text-[#0866FF]"
            >
              <Heart size={20} strokeWidth={1.8} />
            </Link>

            {/* CART */}

            <Link
              href="/cart"
              aria-label="Shopping cart"
              className="flex h-10 w-10 items-center justify-center rounded-full text-gray-700 transition hover:bg-blue-50 hover:text-[#0866FF]"
            >
              <ShoppingCart size={20} strokeWidth={1.8} />
            </Link>

            <div className="mx-1 h-8 w-px bg-gray-200" />

            {/* SIGN IN DROPDOWN */}

            <div
              className="relative"
              onMouseEnter={() => setSignInDropdown(true)}
              onMouseLeave={() => setSignInDropdown(false)}
            >

              <button
                type="button"
                onClick={() =>
                  setSignInDropdown(!signInDropdown)
                }
                aria-expanded={signInDropdown}
                className={`flex h-10 items-center gap-2 rounded-full border px-4 text-sm font-semibold transition ${
                  signInDropdown
                    ? "border-[#0866FF] text-[#0866FF]"
                    : "border-gray-200 text-gray-800 hover:border-[#0866FF] hover:text-[#0866FF]"
                }`}
              >
                <UserRound size={17} />

                Sign In

                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    signInDropdown ? "rotate-180 text-[#0866FF]" : ""
                  }`}
                />
              </button>

              {signInDropdown && (
                <div className="absolute right-0 top-full z-50 w-[300px] pt-2">

                  <div className="rounded-3xl border border-gray-100 bg-white p-6 text-center shadow-[0_12px_40px_rgba(6,23,46,0.12)]">

                    <h3 className="text-lg font-extrabold text-[#06172E]">
                      Welcome to BidMax
                    </h3>

                    <p className="mt-1.5 text-xs leading-relaxed text-gray-500">
                      Login to manage your bids, saved deals,
                      and local store inquiries.
                    </p>

                    <div className="my-5 border-t border-gray-100" />

                    <div className="space-y-3">

                      <Link
                        href="/login"
                        onClick={() => setSignInDropdown(false)}
                        className="flex h-11 w-full items-center justify-center rounded-full bg-[#0866FF] text-sm font-bold text-white shadow-sm transition hover:bg-[#0755D9]"
                      >
                        Login
                      </Link>

                      <Link
                        href="/register"
                        onClick={() => setSignInDropdown(false)}
                        className="flex h-11 w-full items-center justify-center rounded-full border border-gray-200 bg-white text-sm font-bold text-[#06172E] transition hover:border-[#0866FF] hover:text-[#0866FF]"
                      >
                        Create Account
                      </Link>

                    </div>
                  </div>
                </div>
              )}

            </div>

          </div>

          {/* MOBILE HEADER ACTIONS */}

          <div className="flex shrink-0 items-center gap-1 lg:hidden">

            <Link
              href="/wishlist"
              aria-label="Wishlist"
              className="flex h-9 w-9 items-center justify-center rounded-full text-gray-700 hover:bg-blue-50 hover:text-[#0866FF]"
            >
              <Heart size={19} />
            </Link>

            <Link
              href="/cart"
              aria-label="Shopping cart"
              className="flex h-9 w-9 items-center justify-center rounded-full text-gray-700 hover:bg-blue-50 hover:text-[#0866FF]"
            >
              <ShoppingCart size={19} />
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenu(!mobileMenu)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenu}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-800"
            >
              {mobileMenu ? (
                <X size={21} />
              ) : (
                <Menu size={21} />
              )}
            </button>

          </div>

        </div>

        {/* MOBILE SEARCH AND LOCATION */}

        <div className="space-y-2 px-4 pb-3 md:hidden">

          <form
            onSubmit={handleSearch}
            className="flex h-11 items-center rounded-full border border-gray-200 px-4 transition focus-within:border-[#0866FF]"
          >
            <Search size={18} className="shrink-0 text-gray-400" />

            <input
              type="search"
              placeholder="Search mobile phones..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent px-3 text-sm outline-none"
            />

            <button type="submit" aria-label="Search">
              <Search size={17} className="text-[#0866FF]" />
            </button>
          </form>

          {/* MOBILE DELIVERY LOCATION */}

          <button
            type="button"
            onClick={() => setLocationModal(true)}
            className="flex w-full items-center gap-2 rounded-lg bg-blue-50/70 px-3 py-2.5 text-left"
          >
            <MapPin size={17} className="shrink-0 text-[#0866FF]" />

            <span className="text-xs text-gray-500">
              Deliver to{" "}
              <span className="font-bold text-[#06172E]">
                {selectedLocation}
              </span>
            </span>

            <ChevronDown
              size={14}
              className="ml-auto text-[#0866FF]"
            />
          </button>

        </div>

      </div>

      {/* =========================
          DESKTOP NAVIGATION
      ========================= */}

      <nav
        className="relative hidden border-b border-gray-100 lg:block"
        onMouseLeave={() => setBuyPhonesDropdown(false)}
      >

        <div className="mx-auto flex h-[49px] max-w-[1400px] items-center justify-between gap-5 px-4 sm:px-6 lg:px-8">

          <div className="flex h-full items-center gap-1">

            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isBuyPhones = item.label === "Buy Phones";

              return (
                <div
                  key={item.label}
                  onMouseEnter={() =>
                    setBuyPhonesDropdown(isBuyPhones)
                  }
                  className="flex h-full items-center"
                >

                  <Link
                    href={item.href}
                    className={`flex h-9 items-center gap-2 rounded-full px-4 text-[13px] font-semibold transition-all duration-200 ${
                      index === 0 ||
                      (isBuyPhones && buyPhonesDropdown)
                        ? "bg-blue-50 text-[#0866FF]"
                        : "text-gray-600 hover:bg-blue-50 hover:text-[#0866FF]"
                    }`}
                  >

                    {Icon && <Icon size={16} />}

                    {item.label}

                    {isBuyPhones && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          buyPhonesDropdown
                            ? "rotate-180 text-[#0866FF]"
                            : "text-gray-400"
                        }`}
                      />
                    )}

                  </Link>

                </div>
              );
            })}

          </div>

          {/* HELP AND SUPPORT */}

          <Link
            href="/contact"
            className="flex shrink-0 items-center gap-2 rounded-full border border-blue-100 px-3 py-1.5 text-xs font-semibold text-gray-700 transition hover:border-[#0866FF] hover:text-[#0866FF]"
          >
            <Headphones size={16} className="text-[#0866FF]" />
            Help & Support
          </Link>

        </div>

        {/* =========================
            BUY PHONES MEGA MENU
        ========================= */}

        {buyPhonesDropdown && (
          <div
            onMouseEnter={() => setBuyPhonesDropdown(true)}
            className="absolute left-0 right-0 top-full z-50 border-b border-gray-100 bg-white/95 px-4 py-6 shadow-2xl backdrop-blur-sm sm:px-6 lg:px-8"
          >

            <div className="mx-auto grid max-w-[1150px] grid-cols-12 gap-6 rounded-3xl border border-gray-100 bg-white p-4 shadow-sm">

              {/* LEFT PROMO CARD */}

              <div className="relative col-span-4 flex min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-r from-[#06172E] via-[#0755D9] to-[#0866FF] p-7 text-white">

                <div className="relative z-10 text-center">

                  <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-blue-200">
                    BIDMAX VERIFIED
                  </span>

                  <Link
                    href="/buy-phones"
                    onClick={() => setBuyPhonesDropdown(false)}
                    className="mt-2 inline-flex items-center justify-center gap-2 text-3xl font-extrabold tracking-tight transition-transform hover:translate-x-1"
                  >
                    Buy <ArrowRight size={24} />
                  </Link>

                  <p className="mx-auto mt-3 max-w-[230px] text-[13px] leading-relaxed text-blue-100">
                    Discover sealed-pack and pre-owned
                    phones with trusted local retailer deals.
                  </p>

                </div>

                {/* DEVICE ILLUSTRATION */}

                <div className="relative z-10 mt-6 flex h-28 items-end justify-center">

                  <div className="z-10 -mr-3 flex h-24 w-14 flex-col justify-between rounded-xl border-2 border-[#06172E] bg-gradient-to-b from-sky-300 via-blue-500 to-indigo-700 p-1.5 shadow-lg">
                    <div className="mx-auto h-1 w-4 rounded-full bg-[#06172E]/50" />
                    <div className="h-2 w-full rounded bg-white/30" />
                  </div>

                  <div className="z-0 flex h-24 w-32 flex-col justify-between rounded-t-xl border-2 border-[#06172E] bg-gradient-to-tr from-[#06172E] via-[#0755D9] to-sky-300 p-2 shadow-xl">
                    <div className="flex gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                      <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                    </div>
                    <div className="mt-auto h-1.5 w-full rounded-full bg-gray-200" />
                  </div>

                  <div className="z-10 -ml-3 flex h-24 w-14 flex-col justify-between rounded-xl border-2 border-[#06172E] bg-gradient-to-b from-blue-300 via-blue-600 to-indigo-800 p-1.5 shadow-lg">
                    <div className="mx-auto h-1 w-4 rounded-full bg-[#06172E]/50" />
                    <div className="h-2 w-full rounded bg-white/30" />
                  </div>

                </div>

              </div>

              {/* RIGHT CATEGORIES */}

              <div className="relative col-span-8 flex flex-col justify-between overflow-hidden rounded-xl bg-[#f4f8fc] px-4 py-3">

                <div>

                  <div className="mb-5 flex items-center gap-3 border-b border-gray-100 pb-4">

                    <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-[#0866FF]">
                      <Smartphone size={16} />
                    </span>

                    <span className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#06172E]">
                      MOBILE
                    </span>

                  </div>

                  <div className="relative z-10 grid grid-cols-2 gap-x-8 gap-y-3.5">

                    {/* MOBILE BRANDS */}

                    <div className="space-y-3.5">

                      {leftColumnBrands.map((brand) => {
                        const BrandIcon = brand.icon;

                        return (
                          <Link
                            key={brand.label}
                            href={brand.href}
                            onClick={() =>
                              setBuyPhonesDropdown(false)
                            }
                            className="group flex items-center gap-3 text-[13px] font-medium text-gray-600 transition hover:text-[#0866FF]"
                          >

                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-gray-100 text-[11px] font-extrabold text-[#06172E] transition group-hover:bg-blue-50 group-hover:text-[#0866FF]">
                              {BrandIcon ? (
                                <BrandIcon size={14} />
                              ) : (
                                brand.badge
                              )}
                            </span>

                            <span>{brand.label}</span>

                          </Link>
                        );
                      })}

                    </div>

                    {/* MOBILE CATEGORIES */}

                    <div className="space-y-3.5">

                      {rightColumnCategories.map((category) => {
                        const CatIcon = category.icon;

                        return (
                          <Link
                            key={category.label}
                            href={category.href}
                            onClick={() =>
                              setBuyPhonesDropdown(false)
                            }
                            className="group flex items-center gap-3 text-[13px] font-medium text-gray-600 transition hover:text-[#0866FF]"
                          >

                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-gray-50 text-gray-400 transition group-hover:bg-blue-50 group-hover:text-[#0866FF]">
                              <CatIcon size={15} />
                            </span>

                            <span>{category.label}</span>

                          </Link>
                        );
                      })}

                    </div>

                  </div>

                </div>

                {/* WATERMARK */}

                <div className="pointer-events-none absolute -bottom-3 right-4 select-none text-[#06172E] opacity-[0.06]">
                  <Smartphone size={112} strokeWidth={1.5} />
                </div>

              </div>

            </div>

          </div>
        )}

      </nav>

      {/* =========================
          MOBILE NAVIGATION
      ========================= */}

      <div
        className={`overflow-hidden border-b border-gray-100 bg-white transition-all duration-300 lg:hidden ${
          mobileMenu
            ? "max-h-[600px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >

        <nav className="flex flex-col px-4 py-3">

          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenu(false)}
                className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-blue-50 hover:text-[#0866FF]"
              >
                {Icon && <Icon size={18} />}
                {item.label}
              </Link>
            );
          })}

          <div className="my-2 border-t border-gray-100" />

          <Link
            href="/login"
            onClick={() => setMobileMenu(false)}
            className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-semibold text-[#0866FF]"
          >
            <UserRound size={18} />

            Sign In / Register

            <ArrowRight size={16} className="ml-auto" />
          </Link>

        </nav>

      </div>

      {/* =========================
          DELIVERY LOCATION MODAL
      ========================= */}

      {locationModal && (

        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#06172E]/55 px-4 py-6 backdrop-blur-[3px]"
          onClick={closeLocationModal}
        >

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="location-modal-title"
            className="relative max-h-[90vh] w-full max-w-[470px] overflow-y-auto rounded-3xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* MODAL HEADER */}

            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">

              <div>

                <h2
                  id="location-modal-title"
                  className="text-lg font-extrabold text-[#06172E]"
                >
                  Delivery Location
                </h2>

                <p className="mt-1 text-xs text-gray-500">
                  Find mobile deals available in your area.
                </p>

              </div>

              <button
                type="button"
                onClick={closeLocationModal}
                aria-label="Close location popup"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-red-50 hover:text-red-500"
              >
                <X size={18} />
              </button>

            </div>

            <div className="p-6">

              {/* TITLE */}

              <h3 className="text-xl font-bold text-[#06172E]">
                Where should we deliver?
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                Select your location to discover nearby mobile
                retailers, prices and exclusive offers.
              </p>

              {/* CURRENT LOCATION */}

              <button
                type="button"
                onClick={handleCurrentLocation}
                disabled={locationLoading}
                className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-[#0866FF] bg-blue-50/60 text-sm font-bold text-[#0866FF] transition hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-60"
              >

                <LocateFixed size={18} />

                {locationLoading
                  ? "Please wait..."
                  : "Use My Current Location"}

              </button>

              {/* MAP PREVIEW */}

              <div className="relative mt-5 h-[190px] overflow-hidden rounded-2xl border border-gray-200 bg-gray-100">

                <iframe
                  key={mapLocation}
                  title="BidMax delivery location map"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    mapLocation
                  )}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                <div className="pointer-events-none absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-semibold text-[#06172E] shadow-md">

                  <MapPin size={14} className="text-[#0866FF]" />

                  {selectedLocation}

                </div>

              </div>

              {/* DIVIDER */}

              <div className="my-5 flex items-center gap-3">

                <div className="h-px flex-1 bg-gray-200" />

                <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                  OR ENTER PIN CODE
                </span>

                <div className="h-px flex-1 bg-gray-200" />

              </div>

              {/* PINCODE FORM */}

              <form onSubmit={handlePincodeSearch}>

                <label
                  htmlFor="delivery-pincode"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Enter 6-digit PIN code
                </label>

                <div className="flex gap-2">

                  <input
                    id="delivery-pincode"
                    type="text"
                    inputMode="numeric"
                    autoComplete="postal-code"
                    maxLength={6}
                    placeholder="Enter your PIN code"
                    value={pincode}
                    onChange={(e) =>
                      setPincode(
                        e.target.value.replace(/\D/g, "").slice(0, 6)
                      )
                    }
                    className="h-12 min-w-0 flex-1 rounded-xl border border-gray-200 px-4 text-sm font-medium text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#0866FF] focus:ring-4 focus:ring-blue-50"
                  />

                  <button
                    type="submit"
                    disabled={locationLoading}
                    className="flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0755D9] to-[#0866FF] px-5 text-sm font-bold text-white shadow-md transition hover:shadow-lg disabled:opacity-60"
                  >

                    Search

                    <Search size={16} />

                  </button>

                </div>

              </form>

              {/* ERROR MESSAGE */}

              {locationError && (

                <p
                  role="alert"
                  className="mt-3 text-xs font-medium text-red-500"
                >
                  {locationError}
                </p>

              )}

              {/* SELECTED LOCATION */}

              <div className="mt-5 flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">

                <div className="flex items-center gap-2">

                  <MapPin size={16} className="text-[#0866FF]" />

                  <div>

                    <p className="text-[10px] text-gray-400">
                      Current delivery location
                    </p>

                    <p className="text-xs font-bold text-[#06172E]">
                      {selectedLocation}
                    </p>

                  </div>

                </div>

                <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold text-[#0866FF]">
                  Selected
                </span>

              </div>

            </div>

          </div>

        </div>

      )}

    </header>
  );
}
