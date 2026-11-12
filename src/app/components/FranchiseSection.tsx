
"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  TrendingUp,
  BadgePercent,
  PackageCheck,
  MapPin,
  Headphones,
  Megaphone,
  Briefcase,
  CheckCircle2,
  Phone,
  Mail,
  Globe,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface FranchiseFormData {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  pinCode: string;
  investmentBudget: string;
  shopStatus: string;
  message: string;
}

const inputClass =
  "w-full rounded-xl border border-blue-100 bg-white px-4 py-3 text-sm text-[#06172E] outline-none transition placeholder:text-gray-400 focus:border-[#0866FF] focus:ring-2 focus:ring-[#0866FF]/10";

const labelClass = "mb-1.5 block text-xs font-bold text-[#06172E]";

export default function FranchiseSection() {
  const [formData, setFormData] = useState<FranchiseFormData>({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    pinCode: "",
    investmentBudget: "₹2.5 – ₹5 Lakhs",
    shopStatus: "Own Shop Available",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Connect your actual API endpoint here before using this form in production.
      await new Promise((resolve) => setTimeout(resolve, 800));
      setIsSubmitted(true);
    } catch (error) {
      console.error("Franchise application error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: <Headphones className="h-5 w-5" />,
      title: "Complete Customer Support",
      description:
        "We handle customer queries, after-sales, and service support.",
    },
    {
      icon: <Megaphone className="h-5 w-5" />,
      title: "Online Marketing & Growth",
      description:
        "Digital campaigns, local PIN-code leads, and social media promotion.",
    },
    {
      icon: <PackageCheck className="h-5 w-5" />,
      title: "Approved Stock Supply",
      description:
        "Genuine new and verified pre-owned phone smartphones via BidMax supply chain.",
    },
    {
      icon: <Briefcase className="h-5 w-5" />,
      title: "Business & Training Guidance",
      description:
        "Staff training, operational support, and exclusive territory protection.",
    },
  ];

  const additionalCosts = [
    { title: "Interior & Setup", amount: "Approx. ₹1,00,000" },
    { title: "Shop Rent & Deposit", amount: "As per location" },
    { title: "Initial Stock", amount: "As per requirement" },
    { title: "Staff & Operations", amount: "As per your plan" },
  ];

  const productLineup = [
    "New Mobiles",
    "Pre-Owned Phones",
    "Exchange & Upgrade",
    "Accessories",
    "Coupons & Offers",
  ];

  return (
    <section
      id="franchise"
      className="relative overflow-hidden bg-gradient-to-b from-[#F4F8FF] via-white to-[#F4F8FF] py-16 md:py-20"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#0866FF]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#06172E]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#0866FF]/20 bg-[#0866FF]/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0755D9]">
              <Sparkles className="h-3.5 w-3.5" />
              Franchise Opportunity • Your Success Our Priority
            </div>

            <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-[#06172E] sm:text-3xl md:text-4xl">
              Start Your Own{" "}
              <span className="bg-gradient-to-r from-[#0755D9] to-[#0866FF] bg-clip-text text-transparent">
                BidMax Mobile Store
              </span>
            </h2>

            <p className="mt-2.5 text-sm text-gray-600 sm:text-base">
              Join India&apos;s trusted{" "}
              <span className="font-semibold text-[#06172E]">
                BUY • SELL • BID
              </span>{" "}
              mobile network. Zero royalty up to ₹1 Crore and 100% stock
              buy-back protection.
            </p>
          </div>

          {/* Contact Details */}
          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
            <a
              href="tel:+91 90000 00000"
              className="inline-flex items-center gap-2 rounded-xl border border-blue-100 bg-white px-4 py-2.5 font-semibold text-[#06172E] shadow-sm transition-colors hover:border-[#0866FF]"
            >
              <Phone className="h-4 w-4 text-[#0866FF]" />
              +91 90000 00000
            </a>

            <a
              href="mailto:franchise@bidmax.in"
              className="inline-flex items-center gap-2 rounded-xl border border-blue-100 bg-white px-4 py-2.5 font-semibold text-[#06172E] shadow-sm transition-colors hover:border-[#0866FF]"
            >
              <Mail className="h-4 w-4 text-[#0866FF]" />
              franchise@bidmax.in
            </a>
          </div>
        </div>

        {/* Franchise Highlights */}
        <div className="mb-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* Franchise Fee */}
          <div className="relative rounded-2xl bg-gradient-to-br from-[#06172E] via-[#0B274D] to-[#0755D9] p-6 text-white shadow-lg">
            <span className="mb-3 inline-block rounded-md bg-white/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-blue-100">
              One-Time Investment
            </span>

            <div className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              ₹50,000
            </div>

            <p className="mt-1.5 text-xs font-medium text-blue-100">
              Pay only for official BidMax franchise rights & onboarding.
            </p>
          </div>

          {/* Royalty */}
          <div className="rounded-2xl border-2 border-[#0866FF]/25 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#0866FF]/10 text-[#0866FF]">
              <BadgePercent className="h-6 w-6" />
            </div>

            <div className="flex flex-wrap items-baseline gap-2">
              <span className="text-2xl font-extrabold text-[#06172E]">
                0% Royalty
              </span>
              <span className="rounded border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-xs font-bold text-emerald-700">
                Up to ₹1 Cr
              </span>
            </div>

            <p className="mt-1.5 text-xs leading-relaxed text-gray-600">
              Zero royalty fee on your first{" "}
              <strong className="text-[#06172E]">₹1 Crore</strong> sales. Only{" "}
              <strong className="text-[#0755D9]">2% yearly</strong> thereafter.
            </p>
          </div>

          {/* Stock Buyback */}
          <div className="rounded-2xl border-2 border-[#0866FF]/25 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
              <ShieldCheck className="h-6 w-6" />
            </div>

            <div className="flex flex-wrap items-baseline gap-2">
              <span className="text-2xl font-extrabold text-[#06172E]">
                0 Stock Risk
              </span>
              <span className="rounded border border-blue-200 bg-blue-50 px-2 py-0.5 text-xs font-bold text-[#0755D9]">
                100% Buy-Back
              </span>
            </div>

            <p className="mt-1.5 text-xs leading-relaxed text-gray-600">
              0 stock rate after agreement with a{" "}
              <strong className="text-emerald-700">
                100% buy-back guarantee
              </strong>{" "}
              on unsold stock.
            </p>
          </div>

          {/* Expected Returns */}
          <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#0866FF]/10 text-[#0866FF]">
              <TrendingUp className="h-6 w-6" />
            </div>

            <div className="flex flex-wrap items-baseline gap-2">
              <span className="text-2xl font-extrabold text-[#06172E]">
                ≈40% ROI
              </span>
              <span className="text-xs font-semibold text-gray-500">
                • 16 Months
              </span>
            </div>

            <p className="mt-1.5 text-xs leading-relaxed text-gray-600">
              Approximate annual return with a{" "}
              <strong className="text-[#06172E]">16-month payback</strong> and
              exclusive territory rights.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Left Column */}
          <div className="space-y-6 lg:col-span-7">
            {/* Why Partner */}
            <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="mb-5 flex items-center gap-2 text-lg font-bold text-[#06172E] sm:text-xl">
                <span className="h-6 w-1.5 rounded-full bg-gradient-to-b from-[#0755D9] to-[#0866FF]" />
                Why Partner With BidMax?
              </h3>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="flex items-start gap-3.5"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#F0F6FF] text-[#0866FF]">
                      {benefit.icon}
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-[#06172E]">
                        {benefit.title}
                      </h4>
                      <p className="mt-1 text-xs leading-relaxed text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Store Costs */}
            <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0866FF]/10 text-[#0866FF]">
                  <Briefcase className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#06172E]">
                    Additional Store Costs
                  </h3>
                  <p className="text-xs text-gray-500">
                    To be borne directly by franchise partner
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {additionalCosts.map((cost) => (
                  <div
                    key={cost.title}
                    className="flex items-center justify-between gap-3 rounded-xl border border-blue-50 bg-[#F8FAFF] p-4"
                  >
                    <span className="text-xs font-semibold text-[#06172E]">
                      {cost.title}
                    </span>
                    <span className="text-right text-xs font-bold text-[#0755D9]">
                      {cost.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Territory Rights */}
            <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#0866FF]/10 text-[#0866FF]">
                  <MapPin className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#06172E]">
                    Exclusive Territory Rights
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-gray-600">
                    Get protected area rights for your PIN code / locality as
                    per the BidMax franchise agreement.
                  </p>
                </div>
              </div>

              <div className="mt-5 border-t border-blue-50 pt-5">
                <h4 className="mb-3 text-sm font-bold text-[#06172E]">
                  Store Product Lineup
                </h4>

                <div className="flex flex-wrap gap-2">
                  {productLineup.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-blue-100 bg-[#F4F8FF] px-3 py-1.5 text-xs font-semibold text-[#0755D9]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
             <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-2xl border border-blue-100 bg-white px-5 py-5 text-xs font-semibold text-gray-600 shadow-sm">
          <span className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            Franchise Support
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-[#0866FF]" />
            Territory Opportunities
          </span>
          <span className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-[#0866FF]" />
            BidMax Network
          </span>
        </div>
          </div>

          {/* Right Column: Franchise Form */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-lg">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-[#06172E] to-[#0755D9] p-6 text-white">
                <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
                  <Briefcase className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-extrabold">
                  Apply for BidMax Franchise
                </h3>

                <p className="mt-1 text-xs leading-relaxed text-blue-100">
                  Fill out your details to check PIN code availability and get
                  the franchise brochure.
                </p>
              </div>

              <div className="p-6">
                {isSubmitted ? (
                  <div className="py-8 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                      <CheckCircle2 className="h-9 w-9" />
                    </div>

                    <h3 className="text-xl font-extrabold text-[#06172E]">
                      Application Received!
                    </h3>

                    <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-gray-600">
                      Thank you, {formData.fullName}. Our BidMax Franchise Team
                      will contact you shortly on{" "}
                      <strong className="text-[#06172E]">
                        {formData.phone}
                      </strong>{" "}
                      regarding PIN code{" "}
                      <strong className="text-[#06172E]">
                        {formData.pinCode}
                      </strong>
                      .
                    </p>

                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: "",
                          phone: "",
                          email: "",
                          city: "",
                          pinCode: "",
                          investmentBudget: "₹2.5 – ₹5 Lakhs",
                          shopStatus: "Own Shop Available",
                          message: "",
                        });
                      }}
                      className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#0866FF] hover:underline"
                    >
                      Submit another inquiry
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name */}
                    <div>
                      <label className={labelClass} htmlFor="fullName">
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className={inputClass}
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className={labelClass} htmlFor="phone">
                        Mobile Number *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        maxLength={10}
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter 10-digit mobile number"
                        className={inputClass}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className={labelClass} htmlFor="email">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        className={inputClass}
                      />
                    </div>

                    {/* City */}
                    <div>
                      <label className={labelClass} htmlFor="city">
                        City / District *
                      </label>
                      <input
                        id="city"
                        name="city"
                        type="text"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Enter city or district"
                        className={inputClass}
                      />
                    </div>

                    {/* PIN Code */}
                    <div>
                      <label className={labelClass} htmlFor="pinCode">
                        Target PIN Code *
                      </label>
                      <input
                        id="pinCode"
                        name="pinCode"
                        type="text"
                        required
                        pattern="[0-9]{6}"
                        maxLength={6}
                        value={formData.pinCode}
                        onChange={handleChange}
                        placeholder="Enter 6-digit PIN code"
                        className={inputClass}
                      />
                    </div>

                    {/* Investment Budget */}
                    <div>
                      <label
                        className={labelClass}
                        htmlFor="investmentBudget"
                      >
                        Total Investment Capacity *
                      </label>
                      <select
                        id="investmentBudget"
                        name="investmentBudget"
                        required
                        value={formData.investmentBudget}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="₹1.5 – ₹2.5 Lakhs">
                          ₹1.5 – ₹2.5 Lakhs
                        </option>
                        <option value="₹2.5 – ₹5 Lakhs">
                          ₹2.5 – ₹5 Lakhs
                        </option>
                        <option value="₹5 Lakhs & Above">
                          ₹5 Lakhs & Above
                        </option>
                      </select>
                    </div>

                    {/* Shop Status */}
                    <div>
                      <label className={labelClass} htmlFor="shopStatus">
                        Store Space Status *
                      </label>
                      <select
                        id="shopStatus"
                        name="shopStatus"
                        required
                        value={formData.shopStatus}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="Own Shop Available">
                          Own Shop Available
                        </option>
                        <option value="Rented Shop Ready">
                          Rented Shop Ready
                        </option>
                        <option value="Looking for Space">
                          Looking for Space
                        </option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className={labelClass} htmlFor="message">
                        Message / Experience (Optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your business experience..."
                        className={inputClass}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="cursor-pointer inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0755D9] to-[#0866FF] px-6 py-4 text-sm font-extrabold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSubmitting
                        ? "Submitting Application..."
                        : "Apply Now for Franchise"}

                      {!isSubmitting && <ArrowRight className="h-4 w-4" />}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Strip */}
       
      </div>
    </section>
  );
}
