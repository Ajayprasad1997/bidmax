
"use client";

import { useEffect, useRef, useState } from "react";
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
  Heart,
  ShoppingCart,
  MapPin,
  LocateFixed,
  Tag,
  Home,
  Trash2,
  Plus,
  Minus,
  ShieldCheck,
  CreditCard,
  LogIn,
  UserPlus,
  CheckCircle2,
  Wifi,
  RefreshCw,
  Layers,
  TabletSmartphone,
  RotateCcw,
  CheckSquare,
  Signal,
} from "lucide-react";

/* =========================
   TYPES
========================= */

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  image: string;
  condition: string;
}

/* =========================
   DEMO PRODUCTS
========================= */

const demoProducts: Product[] = [
  {
    id: 1,
    name: "Apple iPhone 13",
    price: 28999,
    oldPrice: 39999,
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&q=85",
    condition: "Excellent Condition",
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    price: 32999,
    oldPrice: 49999,
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&q=85",
    condition: "Like New",
  },
  {
    id: 3,
    name: "OnePlus 11 5G",
    price: 24999,
    oldPrice: 37999,
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=85",
    condition: "Verified Pre-Owned",
  },
];

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
  { label: "Apple iPhone", href: "/buy-phones?search=iPhone" },
  { label: "Samsung", href: "/buy-phones?search=Samsung" },
  { label: "OnePlus", href: "/buy-phones?search=OnePlus" },
  { label: "Google Pixel", href: "/buy-phones?search=Pixel" },
  { label: "Xiaomi / Redmi", href: "/buy-phones?search=Redmi" },
  { label: "Motorola", href: "/buy-phones?search=Motorola" },
  { label: "Foldable Phones", href: "/buy-phones?search=Fold" },
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
   HELPERS
========================= */

const formatPrice = (price: number) =>
  `₹${price.toLocaleString("en-IN")}`;

/* =========================
   HEADER
========================= */

export default function Header() {
  const router = useRouter();

  /* Mobile panels */
  const [mobileMenu, setMobileMenu] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);


  /* Desktop */
  const [buyPhonesDropdown, setBuyPhonesDropdown] = useState(false);
  const [signInDropdown, setSignInDropdown] = useState(false);
  const [announcementVisible, setAnnouncementVisible] = useState(true);

  /* Search */
  const [search, setSearch] = useState("");

  /* Location */
  const [locationModal, setLocationModal] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Kolkata");
  const [pincode, setPincode] = useState("");
  const [mapLocation, setMapLocation] = useState("Kolkata, India");
  const [locationLoading, setLocationLoading] = useState(false);
  const [locationError, setLocationError] = useState("");

  /* Account */
  const [authTab, setAuthTab] = useState<"login" | "register">("login");
  const [authMessage, setAuthMessage] = useState("");

  /* Demo cart and wishlist */
  const [cartItems, setCartItems] = useState<Product[]>([
    demoProducts[0],
    demoProducts[1],
  ]);

  const [wishlistItems, setWishlistItems] = useState<Product[]>([
    demoProducts[2],
  ]);

  const searchPanelRef = useRef<HTMLDivElement>(null);

  /* =========================
     CLOSE SEARCH ON OUTSIDE CLICK
  ========================= */

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        searchPanelRef.current &&
        !searchPanelRef.current.contains(event.target as Node)
      ) {
        setSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  /* =========================
     PREVENT BACKGROUND SCROLL
  ========================= */

  useEffect(() => {
    const hasOverlay =
      mobileMenu ||
      cartOpen ||
      wishlistOpen ||
      accountOpen ||
      locationModal;

    document.body.style.overflow = hasOverlay ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [
    mobileMenu,
    cartOpen,
    wishlistOpen,
    accountOpen,
    locationModal,
  ]);

  /* =========================
     SEARCH
  ========================= */

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!search.trim()) return;

    router.push(
      `/buy-phones?search=${encodeURIComponent(search.trim())}`
    );

    setSearchOpen(false);
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

      setSelectedLocation(`${city}, ${state}`);
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
     CART FUNCTIONS
  ========================= */

  const removeCartItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  /* =========================
     WISHLIST FUNCTIONS
  ========================= */

  const removeWishlistItem = (id: number) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  /* =========================
     OPEN DRAWERS
  ========================= */

  const openCart = () => {
    setMobileMenu(false);
    setWishlistOpen(false);
    setCartOpen(true);
  };

  const openWishlist = () => {
    setMobileMenu(false);
    setCartOpen(false);
    setWishlistOpen(true);
  };

  const openAccount = () => {
    setMobileMenu(false);
    setAccountOpen(true);
    setAuthTab("login");
    setAuthMessage("");
  };

  /* =========================
     ACCOUNT FORM
  ========================= */

  const handleAuthSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setAuthMessage(
      authTab === "login"
        ? "Demo login submitted. Connect your authentication API."
        : "Demo registration submitted. Connect your registration API."
    );
  };

  /* =========================
     PRODUCT CARD
  ========================= */

  const ProductCard = ({
    product,
    type,
  }: {
    product: Product;
    type: "cart" | "wishlist";
  }) => (
    <div className="flex gap-3 rounded-2xl border border-gray-100 bg-white p-3 shadow-sm">

      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-gray-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="96px"
          unoptimized
          className="object-contain p-2"
        />
      </div>

      <div className="min-w-0 flex-1">

        <h4 className="line-clamp-1 text-sm font-bold text-[#06172E]">
          {product.name}
        </h4>

        <p className="mt-1 text-[10px] font-medium text-emerald-600">
          <CheckCircle2 size={11} className="mr-1 inline" />
          {product.condition}
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-2">
          <span className="text-sm font-extrabold text-[#06172E]">
            {formatPrice(product.price)}
          </span>

          <span className="text-[10px] text-gray-400 line-through">
            {formatPrice(product.oldPrice)}
          </span>
        </div>

        <div className="mt-2 flex items-center justify-between">

          <Link
            href={`/buy-phones`}
            onClick={() => {
              setCartOpen(false);
              setWishlistOpen(false);
            }}
            className="text-[11px] font-bold text-[#0866FF]"
          >
            View Product
          </Link>

          <button
            type="button"
            onClick={() =>
              type === "cart"
                ? removeCartItem(product.id)
                : removeWishlistItem(product.id)
            }
            aria-label="Remove product"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-red-50 text-red-500 transition hover:bg-red-100"
          >
            <Trash2 size={15} />
          </button>

        </div>
      </div>
    </div>
  );

  /* =========================
     RENDER
  ========================= */

  return (
    <header className="sticky top-0 z-50 w-full bg-white">

      {/* =========================
          ANNOUNCEMENT BAR
      ========================= */}

      {/* ANNOUNCEMENT MARQUEE */}
{announcementVisible && (
   <div className="relative z-[60] overflow-hidden bg-gradient-to-r from-[#06172E] via-[#0755D9] to-[#0866FF] text-white">

    <div className="mx-auto flex min-h-[36px] max-w-7xl items-center overflow-hidden px-3 sm:px-6 lg:px-8">

      {/* MARQUEE CONTENT */}
      <div className="min-w-0 flex-1 overflow-hidden">
        <div className="announcement-marquee flex w-max items-center">

          {[1, 2].map((item) => (
            <div
              key={item}
              aria-hidden={item === 2}
              className="flex shrink-0 items-center whitespace-nowrap px-6"
            >
              <span className="text-[10px] font-bold tracking-wide sm:text-xs">
                BUY • SELL • BID
              </span>

              <span className="mx-3 text-white/50">|</span>

              <span className="text-[10px] sm:text-xs">
                Find the best mobile deals from trusted local retailers.
              </span>

              <span className="ml-3 inline-flex items-center gap-1 rounded-full bg-yellow-400 px-2 py-1 text-[9px] font-extrabold text-[#06172E]">
                <Tag size={10} />
                Special Offers
              </span>
            </div>
          ))}

        </div>
      </div>

      {/* CLOSE BUTTON */}
      <button
        type="button"
        onClick={() => setAnnouncementVisible(false)}
        aria-label="Close announcement"
        className="ml-2 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white transition hover:bg-white/20 active:scale-90"
      >
        <X size={16} />
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
          DESKTOP HEADER
      ========================= */}

      <div className="hidden border-b border-gray-100 lg:block">

        <div className="mx-auto flex h-[78px] max-w-[1400px] items-center justify-between gap-5 px-6">

          <Link href="/" aria-label="BidMax Home">
            <Image
              src="/images/bidmax-logo.png"
              alt="BidMax"
              width={85}
              height={85}
              priority
              className="h-[76px] w-[76px] object-contain"
            />
          </Link>

          <form
            onSubmit={handleSearch}
            className="flex h-[46px] w-full max-w-[550px] items-center rounded-full border border-gray-200 px-4 focus-within:border-[#0866FF]"
          >
            <Search size={19} className="text-gray-400" />

            <input
              type="search"
              placeholder="Search by mobile brand or model..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-full w-full bg-transparent px-3 text-sm outline-none"
            />

            <button type="submit" aria-label="Search">
              <Search size={18} className="text-[#0866FF]" />
            </button>
          </form>

          <div className="flex items-center gap-2">

            <button
              type="button"
              onClick={() => setLocationModal(true)}
              className="flex items-center gap-2 rounded-xl px-3 py-2 hover:bg-blue-50"
            >
              <MapPin size={20} className="text-[#0866FF]" />

              <span className="max-w-[130px] text-xs font-bold text-[#06172E]">
                {selectedLocation}
              </span>

              <ChevronDown size={13} />
            </button>

            <Link
              href="/wishlist"
              className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-blue-50"
              aria-label="Wishlist"
            >
              <Heart size={20} />
            </Link>

            <Link
              href="/cart"
              className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-blue-50"
              aria-label="Cart"
            >
              <ShoppingCart size={20} />
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setSignInDropdown(true)}
              onMouseLeave={() => setSignInDropdown(false)}
            >
              <button
                type="button"
                onClick={() => setSignInDropdown(!signInDropdown)}
                className="flex h-10 items-center gap-2 rounded-full border border-gray-200 px-4 text-sm font-semibold text-gray-800 hover:border-[#0866FF] hover:text-[#0866FF]"
              >
                <UserRound size={17} />
                Sign In
                <ChevronDown size={14} />
              </button>

              {signInDropdown && (
                <div className="absolute right-0 top-full z-50 w-[300px] pt-2">
                  <div className="rounded-3xl border border-gray-100 bg-white p-6 text-center shadow-2xl">

                    <h3 className="text-lg font-extrabold text-[#06172E]">
                      Welcome to BidMax
                    </h3>

                    <p className="mt-2 text-xs text-gray-500">
                      Login to manage your bids and saved deals.
                    </p>

                    <Link
                      href="/login"
                      className="mt-5 flex h-11 items-center justify-center rounded-full bg-[#0866FF] text-sm font-bold text-white"
                    >
                      Login
                    </Link>

                    <Link
                      href="/register"
                      className="mt-3 flex h-11 items-center justify-center rounded-full border border-gray-200 text-sm font-bold text-[#06172E]"
                    >
                      Create Account
                    </Link>

                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* =========================
          MOBILE TOP HEADER
      ========================= */}

      <div className="relative border-b border-gray-100 bg-white lg:hidden">

        <div className="flex h-[65px] items-center justify-between gap-2 px-3 sm:px-4">

          {/* MENU BUTTON */}

          <button
            type="button"
            onClick={() => setMobileMenu(true)}
            aria-label="Open navigation menu"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[#06172E] transition hover:bg-blue-50"
          >
            <Menu size={23} strokeWidth={2} />
          </button>

          {/* LOGO */}

          <Link href="/" className="flex min-w-0 items-center justify-center">
            <Image
              src="/images/bidmax-logo.png"
              alt="BidMax - Buy Sell Bid"
              width={80}
              height={80}
              priority
              className="h-[57px] w-[65px] object-contain"
            />
          </Link>

          {/* TOP ACTIONS */}

          <div className="flex shrink-0 items-center gap-1">

            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Open search"
              className={`flex h-10 w-10 items-center justify-center rounded-full transition ${
                searchOpen
                  ? "bg-blue-50 text-[#0866FF]"
                  : "text-[#06172E] hover:bg-blue-50"
              }`}
            >
              <Search size={21} />
            </button>

            <button
              type="button"
              onClick={() => setLocationModal(true)}
              aria-label="Select delivery location"
              className="flex h-10 w-10 items-center justify-center rounded-full text-[#0866FF] transition hover:bg-blue-50"
            >
              <MapPin size={21} />
            </button>

          </div>
        </div>

        {/* MOBILE SEARCH PANEL */}

        {searchOpen && (
          <div
            ref={searchPanelRef}
            className="absolute left-0 right-0 top-full z-[70] border-t border-gray-100 bg-white p-4 shadow-xl"
          >
            <form
              onSubmit={handleSearch}
              className="flex h-12 items-center gap-2 rounded-xl border border-blue-200 bg-[#F7FAFF] px-3 focus-within:border-[#0866FF]"
            >
              <Search size={19} className="shrink-0 text-[#0866FF]" />

              <input
                autoFocus
                type="search"
                placeholder="Search mobile brand or model..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="min-w-0 flex-1 bg-transparent text-sm outline-none"
              />

              <button
                type="submit"
                className="rounded-lg bg-[#0866FF] px-4 py-2 text-xs font-bold text-white"
              >
                Search
              </button>
            </form>

            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-semibold text-gray-400">
                POPULAR:
              </span>

              {["iPhone", "Samsung", "OnePlus", "5G"].map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => {
                    setSearch(item);
                    router.push(
                      `/buy-phones?search=${encodeURIComponent(item)}`
                    );
                    setSearchOpen(false);
                  }}
                  className="rounded-full border border-gray-100 bg-gray-50 px-3 py-1.5 text-[10px] font-semibold text-gray-600"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* MOBILE LOCATION SUMMARY */}

        <button
          type="button"
          onClick={() => setLocationModal(true)}
          className="flex w-full items-center gap-2 border-t border-gray-50 bg-[#F5F8FF] px-4 py-2.5 text-left"
        >
          <MapPin size={15} className="shrink-0 text-[#0866FF]" />

          <span className="text-[11px] text-gray-500">
            Deliver to{" "}
            <strong className="font-bold text-[#06172E]">
              {selectedLocation}
            </strong>
          </span>

          <ChevronDown size={13} className="ml-auto text-[#0866FF]" />
        </button>

      </div>

      {/* =========================
          DESKTOP NAVIGATION
      ========================= */}

      <nav
        className="relative hidden border-b border-gray-100 lg:block"
        onMouseLeave={() => setBuyPhonesDropdown(false)}
      >
        <div className="mx-auto flex h-[49px] max-w-[1400px] items-center justify-between gap-5 px-6">

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
                    className={`flex h-9 items-center gap-2 rounded-full px-4 text-[13px] font-semibold transition ${
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
                        className={`transition-transform ${
                          buyPhonesDropdown ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>
                </div>
              );
            })}
          </div>

          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-full border border-blue-100 px-3 py-1.5 text-xs font-semibold text-gray-700 hover:border-[#0866FF] hover:text-[#0866FF]"
          >
            <Headphones size={16} className="text-[#0866FF]" />
            Help & Support
          </Link>

        </div>

        {/* DESKTOP MEGA MENU */}

        {buyPhonesDropdown && (
          <div className="absolute left-0 right-0 top-full z-50 border-b border-gray-100 bg-white px-6 py-6 shadow-2xl">

            <div className="mx-auto grid max-w-[1150px] grid-cols-12 gap-6 rounded-3xl border border-gray-100 p-4">

              <div className="col-span-4 flex min-h-[300px] flex-col justify-between rounded-2xl bg-gradient-to-br from-[#06172E] via-[#0755D9] to-[#0866FF] p-7 text-white">

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-blue-200">
                    BIDMAX VERIFIED
                  </span>

                  <h3 className="mt-3 text-3xl font-extrabold">
                    Buy Phones
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-blue-100">
                    Discover sealed-pack and pre-owned phones with trusted local retailer deals.
                  </p>
                </div>

                <Link
                  href="/buy-phones"
                  className="inline-flex items-center gap-2 text-sm font-bold"
                >
                  Explore Phones <ArrowRight size={17} />
                </Link>

              </div>

              <div className="col-span-8 grid grid-cols-2 gap-8 rounded-xl bg-[#F7FAFF] p-5">

                <div>
                  <h4 className="mb-4 text-xs font-extrabold uppercase tracking-wider text-[#06172E]">
                    Shop By Brand
                  </h4>

                  <div className="space-y-4">
                    {leftColumnBrands.map((brand) => (
                      <Link
                        key={brand.label}
                        href={brand.href}
                        className="block text-sm font-medium text-gray-600 hover:text-[#0866FF]"
                      >
                        {brand.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="mb-4 text-xs font-extrabold uppercase tracking-wider text-[#06172E]">
                    Shop By Category
                  </h4>

                  <div className="space-y-4">
                    {rightColumnCategories.map((category) => {
                      const Icon = category.icon;

                      return (
                        <Link
                          key={category.label}
                          href={category.href}
                          className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#0866FF]"
                        >
                          <Icon size={15} />
                          {category.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}
      </nav>

      {/* =========================
          MOBILE LEFT SLIDE MENU
      ========================= */}

      {mobileMenu && (
        <div className="fixed inset-0 z-[110] lg:hidden">

          {/* OUTSIDE OVERLAY */}

          <button
            type="button"
            aria-label="Close navigation"
            onClick={() => setMobileMenu(false)}
            className="absolute inset-0 h-full w-full bg-[#06172E]/55 backdrop-blur-[2px]"
          />

          {/* SLIDE MENU */}

          <aside className="absolute bottom-0 left-0 top-0 flex w-[85%] max-w-[340px] flex-col overflow-hidden bg-white shadow-2xl animate-slide-left">

            {/* MENU HEADER */}

            <div className="flex items-center justify-between bg-gradient-to-r from-[#06172E] to-[#0755D9] px-5 py-5 text-white">

              <div className="flex items-center gap-3">
                <Image
                  src="/images/bidmax-logo.png"
                  alt="BidMax"
                  width={48}
                  height={48}
                  className="h-11 w-11 rounded-lg bg-white object-contain p-1"
                />

                <div>
                  <h3 className="text-lg font-extrabold">
                    BidMax
                  </h3>

                  <p className="text-[10px] tracking-widest text-blue-100">
                    BUY • SELL • BID
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setMobileMenu(false)}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15"
              >
                <X size={20} />
              </button>

            </div>

            {/* LOCATION */}

            <button
              type="button"
              onClick={() => {
                setMobileMenu(false);
                setLocationModal(true);
              }}
              className="mx-4 mt-4 flex items-center gap-3 rounded-xl border border-blue-100 bg-blue-50/60 p-3 text-left"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#0866FF]">
                <MapPin size={20} />
              </span>

              <span className="min-w-0 flex-1">
                <span className="block text-[10px] text-gray-500">
                  Deliver to
                </span>

                <span className="block truncate text-sm font-bold text-[#06172E]">
                  {selectedLocation}
                </span>
              </span>

              <ChevronDown size={16} className="text-[#0866FF]" />
            </button>

            {/* MENU LINKS */}

            <div className="flex-1 overflow-y-auto px-4 py-4">

              <p className="mb-3 px-2 text-[10px] font-extrabold uppercase tracking-widest text-gray-400">
                Main Menu
              </p>

              <div className="space-y-1">

                {navItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenu(false)}
                      className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-gray-700 transition hover:bg-blue-50 hover:text-[#0866FF]"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-50 text-[#0866FF]">
                        {Icon ? <Icon size={18} /> : <Smartphone size={18} />}
                      </span>

                      {item.label}

                      <ArrowRight size={14} className="ml-auto text-gray-300" />
                    </Link>
                  );
                })}

              </div>

              <div className="my-5 border-t border-gray-100" />

              <p className="mb-3 px-2 text-[10px] font-extrabold uppercase tracking-widest text-gray-400">
                Shop By Brand
              </p>

              <div className="grid grid-cols-2 gap-2">

                {leftColumnBrands.map((brand) => (
                  <Link
                    key={brand.label}
                    href={brand.href}
                    onClick={() => setMobileMenu(false)}
                    className="rounded-xl border border-gray-100 bg-gray-50 px-3 py-3 text-[11px] font-semibold text-gray-700 transition hover:border-blue-200 hover:text-[#0866FF]"
                  >
                    {brand.label}
                  </Link>
                ))}

              </div>

              <div className="my-5 border-t border-gray-100" />

              <Link
                href="/contact"
                onClick={() => setMobileMenu(false)}
                className="flex items-center gap-3 rounded-xl bg-[#F2F6FF] p-4 text-sm font-bold text-[#0755D9]"
              >
                <Headphones size={19} />
                Help & Support
                <ArrowRight size={15} className="ml-auto" />
              </Link>

            </div>

            {/* MENU FOOTER */}

            <div className="border-t border-gray-100 p-4">
              <p className="text-center text-[10px] text-gray-400">
                © {new Date().getFullYear()} BidMax. All rights reserved.
              </p>
            </div>

          </aside>
        </div>
      )}

      {/* =========================
          CART RIGHT DRAWER
      ========================= */}

      {cartOpen && (
        <div className="fixed inset-0 z-[120] lg:hidden">

          <button
            type="button"
            aria-label="Close cart"
            onClick={() => setCartOpen(false)}
            className="absolute inset-0 h-full w-full bg-[#06172E]/55 backdrop-blur-[2px]"
          />

          <aside className="absolute bottom-0 right-0 top-0 flex w-[90%] max-w-[420px] flex-col bg-white shadow-2xl animate-slide-right">

            {/* HEADER */}

            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-5">

              <div>
                <h3 className="text-lg font-extrabold text-[#06172E]">
                  My Cart
                </h3>

                <p className="mt-0.5 text-xs text-gray-400">
                  {cartItems.length} items in your cart
                </p>
              </div>

              <button
                type="button"
                onClick={() => setCartOpen(false)}
                aria-label="Close cart"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600"
              >
                <X size={19} />
              </button>

            </div>

            {/* CART ITEMS */}

            <div className="flex-1 space-y-3 overflow-y-auto bg-[#F8FAFF] p-4">

              {cartItems.length > 0 ? (
                cartItems.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    type="cart"
                  />
                ))
              ) : (
                <div className="flex h-full flex-col items-center justify-center py-12 text-center">

                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-[#0866FF]">
                    <ShoppingCart size={32} />
                  </div>

                  <h4 className="mt-4 text-lg font-bold text-[#06172E]">
                    Your Cart is Empty
                  </h4>

                  <p className="mt-2 max-w-[230px] text-xs leading-relaxed text-gray-500">
                    Looks like you haven't added any phones to your cart yet.
                  </p>

                  <Link
                    href="/buy-phones"
                    onClick={() => setCartOpen(false)}
                    className="mt-5 rounded-xl bg-[#0866FF] px-5 py-3 text-xs font-bold text-white"
                  >
                    Explore Phones
                  </Link>

                </div>
              )}

            </div>

            {/* CART FOOTER */}

            {cartItems.length > 0 && (
              <div className="border-t border-gray-100 bg-white p-5 shadow-[0_-5px_20px_rgba(0,0,0,0.04)]">

                <div className="mb-3 flex items-center justify-between text-sm">
                  <span className="text-gray-500">
                    Subtotal
                  </span>

                  <strong className="text-[#06172E]">
                    {formatPrice(cartTotal)}
                  </strong>
                </div>

                <div className="mb-4 flex items-center justify-between text-sm">
                  <span className="text-gray-500">
                    Delivery
                  </span>

                  <span className="font-bold text-emerald-600">
                    Calculated at checkout
                  </span>
                </div>

                <div className="mb-4 border-t border-dashed border-gray-200 pt-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#06172E]">
                      Estimated Total
                    </span>

                    <span className="text-xl font-extrabold text-[#0866FF]">
                      {formatPrice(cartTotal)}
                    </span>
                  </div>
                </div>

                <Link
                  href="/checkout"
                  onClick={() => setCartOpen(false)}
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0755D9] to-[#0866FF] text-sm font-extrabold text-white shadow-lg shadow-blue-500/20 transition hover:shadow-xl"
                >
                  Proceed to Checkout
                  <ArrowRight size={17} />
                </Link>

                <p className="mt-3 flex items-center justify-center gap-1 text-[10px] text-gray-400">
                  <ShieldCheck size={13} />
                  Secure checkout experience
                </p>

              </div>
            )}

          </aside>
        </div>
      )}

      {/* =========================
          WISHLIST RIGHT DRAWER
      ========================= */}

      {wishlistOpen && (
        <div className="fixed inset-0 z-[120] lg:hidden">

          <button
            type="button"
            aria-label="Close wishlist"
            onClick={() => setWishlistOpen(false)}
            className="absolute inset-0 h-full w-full bg-[#06172E]/55 backdrop-blur-[2px]"
          />

          <aside className="absolute bottom-0 right-0 top-0 flex w-[90%] max-w-[420px] flex-col bg-white shadow-2xl animate-slide-right">

            {/* HEADER */}

            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-5">

              <div>
                <h3 className="text-lg font-extrabold text-[#06172E]">
                  My Wishlist
                </h3>

                <p className="mt-0.5 text-xs text-gray-400">
                  {wishlistItems.length} saved products
                </p>
              </div>

              <button
                type="button"
                onClick={() => setWishlistOpen(false)}
                aria-label="Close wishlist"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600"
              >
                <X size={19} />
              </button>

            </div>

            {/* WISHLIST ITEMS */}

            <div className="flex-1 space-y-3 overflow-y-auto bg-[#F8FAFF] p-4">

              {wishlistItems.length > 0 ? (
                wishlistItems.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    type="wishlist"
                  />
                ))
              ) : (
                <div className="flex h-full flex-col items-center justify-center py-12 text-center">

                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-pink-50 text-pink-500">
                    <Heart size={32} />
                  </div>

                  <h4 className="mt-4 text-lg font-bold text-[#06172E]">
                    Your Wishlist is Empty
                  </h4>

                  <p className="mt-2 max-w-[230px] text-xs leading-relaxed text-gray-500">
                    Save your favourite mobile phones here for later.
                  </p>

                  <Link
                    href="/buy-phones"
                    onClick={() => setWishlistOpen(false)}
                    className="mt-5 rounded-xl bg-[#0866FF] px-5 py-3 text-xs font-bold text-white"
                  >
                    Discover Phones
                  </Link>

                </div>
              )}

            </div>

            {/* WISHLIST FOOTER */}

            {wishlistItems.length > 0 && (
              <div className="border-t border-gray-100 bg-white p-5">

                <Link
                  href="/buy-phones"
                  onClick={() => setWishlistOpen(false)}
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0755D9] to-[#0866FF] text-sm font-bold text-white"
                >
                  Explore More Phones
                  <ArrowRight size={17} />
                </Link>

                <p className="mt-3 text-center text-[10px] text-gray-400">
                  Your favourite phones, all in one place.
                </p>

              </div>
            )}

          </aside>
        </div>
      )}

      {/* =========================
          ACCOUNT LOGIN MODAL
      ========================= */}

      {accountOpen && (
        <div className="fixed inset-0 z-[130] flex items-center justify-center bg-[#06172E]/60 px-4 py-6 backdrop-blur-[3px] lg:hidden">

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="account-modal-title"
            className="relative max-h-[90vh] w-full max-w-[400px] overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl"
          >

            <button
              type="button"
              onClick={() => setAccountOpen(false)}
              aria-label="Close account popup"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-red-50 hover:text-red-500"
            >
              <X size={18} />
            </button>

            {/* LOGO */}

            <div className="flex justify-center">
              <Image
                src="/images/bidmax-logo.png"
                alt="BidMax"
                width={75}
                height={75}
                className="h-16 w-16 object-contain"
              />
            </div>

            <div className="mt-2 text-center">

              <h3
                id="account-modal-title"
                className="text-xl font-extrabold text-[#06172E]"
              >
                Welcome to BidMax
              </h3>

              <p className="mt-1 text-xs text-gray-500">
                Access exclusive mobile deals and manage your account.
              </p>

            </div>

            {/* LOGIN / REGISTER TABS */}

            <div className="mt-6 grid grid-cols-2 rounded-xl bg-gray-100 p-1">

              <button
                type="button"
                onClick={() => {
                  setAuthTab("login");
                  setAuthMessage("");
                }}
                className={`flex items-center justify-center gap-2 rounded-lg py-2.5 text-xs font-bold transition ${
                  authTab === "login"
                    ? "bg-white text-[#0866FF] shadow-sm"
                    : "text-gray-500"
                }`}
              >
                <LogIn size={15} />
                Login
              </button>

              <button
                type="button"
                onClick={() => {
                  setAuthTab("register");
                  setAuthMessage("");
                }}
                className={`flex items-center justify-center gap-2 rounded-lg py-2.5 text-xs font-bold transition ${
                  authTab === "register"
                    ? "bg-white text-[#0866FF] shadow-sm"
                    : "text-gray-500"
                }`}
              >
                <UserPlus size={15} />
                Create Account
              </button>

            </div>

            {/* AUTH FORM */}

            <form onSubmit={handleAuthSubmit} className="mt-5 space-y-4">

              {authTab === "register" && (
                <div>
                  <label
                    htmlFor="account-name"
                    className="mb-1.5 block text-xs font-bold text-[#06172E]"
                  >
                    Full Name
                  </label>

                  <input
                    id="account-name"
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none focus:border-[#0866FF]"
                  />
                </div>
              )}

              <div>
                <label
                  htmlFor="account-email"
                  className="mb-1.5 block text-xs font-bold text-[#06172E]"
                >
                  Email Address
                </label>

                <input
                  id="account-email"
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none focus:border-[#0866FF]"
                />
              </div>

              {authTab === "register" && (
                <div>
                  <label
                    htmlFor="account-phone"
                    className="mb-1.5 block text-xs font-bold text-[#06172E]"
                  >
                    Mobile Number
                  </label>

                  <input
                    id="account-phone"
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    maxLength={10}
                    placeholder="Enter 10-digit mobile number"
                    className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none focus:border-[#0866FF]"
                  />
                </div>
              )}

              <div>
                <label
                  htmlFor="account-password"
                  className="mb-1.5 block text-xs font-bold text-[#06172E]"
                >
                  Password
                </label>

                <input
                  id="account-password"
                  type="password"
                  required
                  minLength={6}
                  placeholder="Enter your password"
                  className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none focus:border-[#0866FF]"
                />
              </div>

              {authTab === "login" && (
                <div className="flex justify-end">
                  <Link
                    href="/forgot-password"
                    onClick={() => setAccountOpen(false)}
                    className="text-[11px] font-semibold text-[#0866FF]"
                  >
                    Forgot Password?
                  </Link>
                </div>
              )}

              <button
                type="submit"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0755D9] to-[#0866FF] text-sm font-extrabold text-white shadow-lg shadow-blue-500/20"
              >
                {authTab === "login" ? "Login to Account" : "Create Account"}
                <ArrowRight size={17} />
              </button>

            </form>

            {authMessage && (
              <div
                role="status"
                className="mt-4 rounded-xl bg-blue-50 p-3 text-center text-xs font-medium text-[#0755D9]"
              >
                {authMessage}
              </div>
            )}

            <div className="mt-5 flex items-center justify-center gap-1 text-[10px] text-gray-400">
              <ShieldCheck size={13} />
              Your account details are protected.
            </div>

          </div>
        </div>
      )}

      {/* =========================
          LOCATION MODAL
      ========================= */}

      {locationModal && (
        <div
          className="fixed inset-0 z-[140] flex items-center justify-center bg-[#06172E]/60 px-4 py-6 backdrop-blur-[3px]"
          onClick={() => {
            setLocationModal(false);
            setLocationError("");
          }}
        >

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="location-modal-title"
            className="relative max-h-[90vh] w-full max-w-[450px] overflow-y-auto rounded-3xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* MODAL HEADER */}

            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">

              <div>
                <h3
                  id="location-modal-title"
                  className="text-lg font-extrabold text-[#06172E]"
                >
                  Delivery Location
                </h3>

                <p className="mt-1 text-[11px] text-gray-500">
                  Find mobile deals available in your area.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setLocationModal(false)}
                aria-label="Close location"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600"
              >
                <X size={18} />
              </button>

            </div>

            <div className="p-5">

              <h4 className="text-lg font-bold text-[#06172E]">
                Where should we deliver?
              </h4>

              <p className="mt-1 text-xs leading-relaxed text-gray-500">
                Select your location to discover nearby mobile retailers,
                prices and exclusive offers.
              </p>

              {/* CURRENT LOCATION */}

              <button
                type="button"
                onClick={handleCurrentLocation}
                disabled={locationLoading}
                className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-[#0866FF] bg-blue-50/60 text-sm font-bold text-[#0866FF] transition hover:bg-blue-50 disabled:opacity-60"
              >
                <LocateFixed size={18} />

                {locationLoading
                  ? "Please wait..."
                  : "Use My Current Location"}
              </button>

              {/* MAP */}

              <div className="relative mt-4 h-[170px] overflow-hidden rounded-2xl border border-gray-200 bg-gray-100">

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

                <div className="pointer-events-none absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-white px-3 py-2 text-[10px] font-bold text-[#06172E] shadow-md">
                  <MapPin size={13} className="text-[#0866FF]" />
                  {selectedLocation}
                </div>

              </div>

              {/* PIN CODE */}

              <div className="my-5 flex items-center gap-3">
                <div className="h-px flex-1 bg-gray-200" />
                <span className="text-[10px] font-bold text-gray-400">
                  OR ENTER PIN CODE
                </span>
                <div className="h-px flex-1 bg-gray-200" />
              </div>

              <form onSubmit={handlePincodeSearch}>

                <label
                  htmlFor="delivery-pincode"
                  className="mb-2 block text-xs font-bold text-[#06172E]"
                >
                  Enter 6-digit PIN code
                </label>

                <div className="flex gap-2">

                  <input
                    id="delivery-pincode"
                    type="text"
                    inputMode="numeric"
                    maxLength={6}
                    placeholder="Enter your PIN code"
                    value={pincode}
                    onChange={(e) =>
                      setPincode(
                        e.target.value.replace(/\D/g, "").slice(0, 6)
                      )
                    }
                    className="h-12 min-w-0 flex-1 rounded-xl border border-gray-200 px-4 text-sm outline-none focus:border-[#0866FF]"
                  />

                  <button
                    type="submit"
                    disabled={locationLoading}
                    className="flex h-12 items-center gap-2 rounded-xl bg-gradient-to-r from-[#0755D9] to-[#0866FF] px-4 text-xs font-bold text-white disabled:opacity-60"
                  >
                    Search
                    <Search size={15} />
                  </button>

                </div>
              </form>

              {locationError && (
                <p role="alert" className="mt-3 text-xs font-medium text-red-500">
                  {locationError}
                </p>
              )}

              <div className="mt-4 flex items-center justify-between rounded-xl bg-gray-50 p-3">

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

      {/* =========================
          MOBILE FIXED BOTTOM NAVIGATION
      ========================= */}

      <div className="fixed bottom-0 left-0 right-0 z-[90] border-t border-gray-200 bg-white/95 shadow-[0_-5px_25px_rgba(6,23,46,0.08)] backdrop-blur-xl lg:hidden">

        <div className="mx-auto grid h-[66px] max-w-xl grid-cols-5 items-center px-2 pb-[env(safe-area-inset-bottom)]">

          {/* HOME */}

          <Link
            href="/"
            className="flex flex-col items-center justify-center gap-1 text-[#0866FF]"
          >
            <Home size={21} strokeWidth={2} />
            <span className="text-[9px] font-bold">Home</span>
          </Link>

          {/* SEARCH */}

          <button
            type="button"
            onClick={() => {
              setSearchOpen(true);
              setMobileMenu(false);
            }}
            className={`flex flex-col items-center justify-center gap-1 ${
              searchOpen ? "text-[#0866FF]" : "text-gray-500"
            }`}
          >
            <Search size={21} strokeWidth={2} />
            <span className="text-[9px] font-semibold">Search</span>
          </button>

          {/* CART */}

          <button
            type="button"
            onClick={openCart}
            className={`relative flex flex-col items-center justify-center gap-1 ${
              cartOpen ? "text-[#0866FF]" : "text-gray-500"
            }`}
          >
            <ShoppingCart size={21} strokeWidth={2} />

            {cartItems.length > 0 && (
              <span className="absolute right-[calc(50%-18px)] top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#0866FF] px-1 text-[9px] font-bold text-white">
                {cartItems.length}
              </span>
            )}

            <span className="text-[9px] font-semibold">Cart</span>
          </button>

          {/* WISHLIST */}

          <button
            type="button"
            onClick={openWishlist}
            className={`relative flex flex-col items-center justify-center gap-1 ${
              wishlistOpen ? "text-[#0866FF]" : "text-gray-500"
            }`}
          >
            <Heart size={21} strokeWidth={2} />

            {wishlistItems.length > 0 && (
              <span className="absolute right-[calc(50%-18px)] top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-pink-500 px-1 text-[9px] font-bold text-white">
                {wishlistItems.length}
              </span>
            )}

            <span className="text-[9px] font-semibold">Wishlist</span>
          </button>

          {/* ACCOUNT */}

          <button
            type="button"
            onClick={openAccount}
            className="flex flex-col items-center justify-center gap-1 text-gray-500"
          >
            <UserRound size={21} strokeWidth={2} />
            <span className="text-[9px] font-semibold">Account</span>
          </button>

        </div>
      </div>


     

    </header>
  );
}
