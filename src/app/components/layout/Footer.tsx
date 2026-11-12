
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Store,
  MapPin,
  CreditCard,
  ChevronRight,
  Phone,
  MessageCircle,
  ExternalLink,
  Camera,
  CirclePlay,
  Mail,
  Smartphone,
  FileText,
  LockKeyhole,
  BadgeCheck,
  Wallet,
  Banknote,
  Building2,
  ArrowUpRight,
  MapPinned,
} from "lucide-react";

// TRUST HIGHLIGHTS
const trustHighlights = [
  {
    icon: MapPin,
    title: "PIN-Code Discovery",
    subtitle: "Find participating local dealers",
  },
  {
    icon: ShieldCheck,
    title: "New & Second-Hand",
    subtitle: "Explore different phone options",
  },
  {
    icon: Store,
    title: "Direct Store Pickup",
    subtitle: "Inspect phones before buying",
  },
  {
    icon: CreditCard,
    title: "Pay Retailer Directly",
    subtitle: "Store payment & partner EMI",
  },
];

// QUICK LINKS
const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Buy Phones", href: "/buy-phones" },
  { label: "Sell Your Phone", href: "/sell-phone" },
  { label: "Bid / Live Auctions", href: "/auctions" },
  { label: "Participating Dealers", href: "/dealers" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Contact Us", href: "/contact" },
];

// PHONE CATEGORIES
const mobileCategories = [
  {
    label: "New / Sealed-Pack Phones",
    href: "/buy-phones?condition=new",
    icon: Smartphone,
  },
  {
    label: "Second-Hand Phones",
    href: "/buy-phones?condition=second-hand",
    icon: Smartphone,
  },
  {
    label: "Apple iPhone",
    href: "/buy-phones?search=iPhone",
    icon: Smartphone,
  },
  {
    label: "Samsung Galaxy",
    href: "/buy-phones?search=Samsung",
    icon: Smartphone,
  },
  {
    label: "OnePlus 5G",
    href: "/buy-phones?search=OnePlus",
    icon: Smartphone,
  },
  {
    label: "Google Pixel",
    href: "/buy-phones?search=Pixel",
    icon: Smartphone,
  },
  {
    label: "5G Smartphones",
    href: "/buy-phones?search=5G",
    icon: Smartphone,
  },
];

// POLICIES
const policyLinks = [
  {
    label: "Terms & Conditions",
    href: "/terms",
    icon: FileText,
  },
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
    icon: LockKeyhole,
  },
  {
    label: "Marketplace Disclaimer",
    href: "/disclaimer",
    icon: ShieldCheck,
  },
  {
    label: "Dealer Onboarding Policy",
    href: "/dealers",
    icon: Store,
  },
  {
    label: "Buyer Safety Guidelines",
    href: "/how-it-works",
    icon: BadgeCheck,
  },
];

// SOCIAL LINKS
const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: Camera,
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: null,
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: CirclePlay,
  },
];

async function getCopyrightYear() {
  "use cache";
  return new Date().getFullYear();
}

export default async function Footer() {
  const copyrightYear = await getCopyrightYear();

  return (
    <footer className="w-full border-t border-slate-200 bg-white text-[#06172E]">

      {/* 1. TRUST HIGHLIGHTS */}
      <div className="border-b border-slate-100 bg-slate-50/70 py-6">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">

            {trustHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-center gap-3.5 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0866FF]">
                    <Icon size={21} strokeWidth={2} />
                  </div>

                  <div>
                    <h3 className="text-xs font-extrabold text-[#06172E] sm:text-[13.5px]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[11px] font-medium text-slate-500">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </div>

      {/* 2. MAIN FOOTER */}
      <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">

          {/* COLUMN 1: BRAND */}
          <div className="space-y-5 lg:col-span-5">

            <div className="flex flex-wrap items-center gap-3">
              <Link href="/" aria-label="BidMax Home">
                <Image
                  src="/images/bidmax-logo.png"
                  alt="BidMax - BUY SELL BID"
                  width={135}
                  height={48}
                  className="h-12 w-auto object-contain"
                />
              </Link>

              <span className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#0866FF]">
                BUY • SELL • BID
              </span>
            </div>

            <p className="max-w-md text-xs leading-relaxed text-slate-600 sm:text-[13.5px]">
              BidMax (
              <span className="font-semibold text-[#06172E]">
                www.bidmax.in
              </span>
              ) connects mobile-phone buyers with participating local
              retailers. Search by phone model and PIN code to compare
              new sealed-pack and second-hand phone offers near you.
            </p>

            {/* DEALER NETWORK */}
            <div className="flex max-w-sm items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3">

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-100 bg-white text-[#0866FF] shadow-sm">
                  <Building2 size={19} />
                </div>

                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-extrabold text-[#06172E]">
                      Local Dealer Network
                    </span>
                    <BadgeCheck size={14} className="text-blue-600" />
                  </div>

                  <p className="mt-1 text-[11px] text-slate-500">
                    Explore participating stores
                  </p>
                </div>
              </div>

              <Link
                href="/dealers"
                className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-xs font-bold text-[#06172E] transition hover:border-[#0866FF] hover:text-[#0866FF]"
              >
                Stores
                <ExternalLink size={12} />
              </Link>
            </div>

            {/* CONTACT BUTTONS */}
            <div className="flex flex-wrap items-center gap-2.5">

              <a
                href="tel:+919000000000"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-[#06172E] transition hover:border-[#0866FF] hover:text-[#0866FF]"
              >
                <Phone size={14} className="text-[#0866FF]" />
                +91 90000 00000
              </a>

              <a
                href="https://wa.me/919000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-xs font-bold text-emerald-700 transition hover:bg-emerald-100"
              >
                <MessageCircle size={14} />
                WhatsApp Us
              </a>

            </div>

            {/* SOCIAL MEDIA */}
            <div className="flex items-center gap-2 pt-1">

              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`BidMax ${social.label}`}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:border-[#0866FF] hover:bg-blue-50 hover:text-[#0866FF]"
                  >
                    {Icon ? (
                      <Icon size={16} />
                    ) : (
                      <span className="text-base font-black">f</span>
                    )}
                  </a>
                );
              })}

              <a
                href="mailto:support@bidmax.in"
                aria-label="Email BidMax"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-[#0866FF] hover:bg-blue-50 hover:text-[#0866FF]"
              >
                <Mail size={16} />
              </a>

            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div className="lg:col-span-2">

            <h3 className="flex items-center gap-2 text-sm font-extrabold text-[#06172E]">
              <div className="h-5 w-1 rounded-full bg-[#0866FF]" />
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 transition hover:text-[#0866FF] sm:text-[13px]"
                  >
                    <ChevronRight
                      size={14}
                      className="shrink-0 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-[#0866FF]"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: PHONE CATEGORIES */}
          <div className="lg:col-span-2">

            <h3 className="flex items-center gap-2 text-sm font-extrabold text-[#06172E]">
              <div className="h-5 w-1 rounded-full bg-[#0866FF]" />
              Phone Categories
            </h3>

            <ul className="mt-5 space-y-3">
              {mobileCategories.map((cat) => {
                const Icon = cat.icon;

                return (
                  <li key={cat.label}>
                    <Link
                      href={cat.href}
                      className="group flex items-start gap-2 text-xs font-medium text-slate-600 transition hover:text-[#0866FF] sm:text-[13px]"
                    >
                      <Icon
                        size={14}
                        className="mt-0.5 shrink-0 text-slate-400 transition-colors group-hover:text-[#0866FF]"
                      />
                      <span>{cat.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* COLUMN 4: POLICIES */}
          <div className="lg:col-span-3">

            <h3 className="flex items-center gap-2 text-sm font-extrabold text-[#06172E]">
              <div className="h-5 w-1 rounded-full bg-[#0866FF]" />
              Policies & Trust
            </h3>

            <ul className="mt-5 space-y-3">
              {policyLinks.map((policy) => {
                const Icon = policy.icon;

                return (
                  <li key={policy.label}>
                    <Link
                      href={policy.href}
                      className="group flex items-start gap-2 text-xs font-medium text-slate-600 transition hover:text-[#0866FF] sm:text-[13px]"
                    >
                      <Icon
                        size={14}
                        className="mt-0.5 shrink-0 text-slate-400 transition-colors group-hover:text-[#0866FF]"
                      />
                      <span>{policy.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

        </div>

        {/* 3. LOCAL RETAILER COVERAGE */}
        <div className="mt-12 overflow-hidden rounded-3xl bg-gradient-to-r from-[#102C59] via-[#164A9A] to-[#0866FF] p-6 sm:p-8">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

            <div className="flex items-start gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white">
                <CreditCard size={25} />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-200">
                  Local Retailer Network
                </span>

                <h3 className="mt-1 text-xl font-extrabold text-white sm:text-2xl">
                  Payment & Logistics Options
                </h3>

                <p className="mt-2 max-w-xl text-xs leading-6 text-blue-100 sm:text-sm">
                  Launch without Cash on Delivery (COD) to mitigate risk, with plans to add it in ~2 months. Integrate third-party APIs for online payments and EMI options.
                </p>
              </div>

            </div>

            <Link
              href="/dealers"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-extrabold text-[#164A9A] transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50"
            >
              Find Local Retailers
              <ArrowUpRight size={18} />
            </Link>

          </div>
        </div>

        {/* 4. MARKETPLACE & EMI DISCLOSURE */}
        <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50/70 p-5 sm:p-6">

          <div className="flex items-start gap-3">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
              <ShieldCheck size={21} />
            </div>

            <div>
              <h3 className="text-sm font-extrabold text-[#06172E]">
                Platform Role & EMI Disclosure
              </h3>

              <p className="mt-2 text-xs leading-6 text-slate-600 sm:text-[13px]">
                BidMax (www.bidmax.in) operates solely as a digital
                marketplace and lead-generation platform connecting
                mobile-phone buyers with participating local retailers.
                Customers pay the retailer directly for the phone;
                BidMax does not collect the phone purchase price.
                BidMax is not a lender. EMI applications, customer
                eligibility, KYC, loan approval and disbursement remain
                exclusively with the authorised finance company and
                its representatives.
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* 5. COPYRIGHT & PAYMENT METHODS */}
      <div className="border-t border-slate-200 bg-slate-50">

        <div className="mx-auto flex max-w-[1400px] flex-col gap-5 px-4 py-6 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">

          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <span>© {copyrightYear} BidMax.</span>
            <span>All Rights Reserved.</span>
            <span className="hidden text-slate-300 sm:inline">|</span>
            <Link
              href="/"
              className="font-bold text-[#0866FF] transition hover:text-blue-800"
            >
              www.bidmax.in
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-3">

            <span className="text-xs font-bold text-slate-600">
              Accepted at Participating Stores:
            </span>

            <div className="flex flex-wrap items-center gap-2">

              <div className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-extrabold text-[#06172E]">
                <Wallet size={15} className="text-[#0866FF]" />
                UPI
              </div>

              <div className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-black italic text-blue-800">
                <CreditCard size={15} />
                VISA
              </div>

              <div className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-extrabold text-slate-700">
                <span className="flex items-center">
                  <span className="h-3.5 w-3.5 rounded-full bg-red-500" />
                  <span className="-ml-1.5 h-3.5 w-3.5 rounded-full bg-amber-400/90" />
                </span>
                Mastercard
              </div>

              <div className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-[#06172E]">
                <Banknote size={15} className="text-green-600" />
                Cash
              </div>

            </div>
          </div>

        </div>

        <div className="border-t border-slate-200 py-3 text-center">
          <p className="text-[11px] font-medium text-slate-400">
            BUY <span className="text-blue-500">•</span> SELL{" "}
            <span className="text-blue-500">•</span> BID
          </p>
        </div>

      </div>

    </footer>
  );
}
