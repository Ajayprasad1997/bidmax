
"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Headphones,
  Megaphone,
  PackageCheck,
  Briefcase,
  CheckCircle2,
  Phone,
  Mail,
  Globe,
  ArrowRight,
  Sparkles,
  Crown,
  ShieldCheck,
  Percent,
  TrendingUp,
  MapPin,
  X,
  Send,
} from "lucide-react";

interface FranchiseFormData {
  fullName: string;
  mobileNumber: string;
  email: string;
  city: string;
  pinCode: string;
  investmentCapacity: string;
  storeSpaceStatus: string;
  message: string;
}

const initialFormData: FranchiseFormData = {
  fullName: "",
  mobileNumber: "",
  email: "",
  city: "",
  pinCode: "",
  investmentCapacity: "₹2.5 – ₹5 Lakhs",
  storeSpaceStatus: "Own Shop Available",
  message: "",
};

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-[#06172E] outline-none transition placeholder:text-slate-400 focus:border-[#0866FF] focus:ring-2 focus:ring-[#0866FF]/15";

const labelClass = "mb-1.5 block text-xs font-bold text-[#06172E]";

export default function FranchiseSection() {
  const [formData, setFormData] =
    useState<FranchiseFormData>(initialFormData);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const formInputRef = useRef<HTMLInputElement>(null);

  const openForm = () => {
    setIsFormOpen(true);
    setIsSubmitted(false);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  // Focus first input when form opens
  useEffect(() => {
    if (isFormOpen) {
      const timer = window.setTimeout(() => {
        formInputRef.current?.focus();
      }, 350);

      return () => window.clearTimeout(timer);
    }
  }, [isFormOpen]);

  // Close form using Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeForm();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Prevent background scrolling while form is open
  useEffect(() => {
    if (!isFormOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isFormOpen]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      // Demo submission only.
      // Connect your actual API endpoint before production.
      await new Promise((resolve) => setTimeout(resolve, 800));

      setIsSubmitted(true);
    } catch (error) {
      console.error("Franchise submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefitCards = [
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Complete Customer Support",
      description:
        "We handle customer queries, after-sales, and service support.",
    },
    {
      icon: <Megaphone className="h-6 w-6" />,
      title: "Online Marketing & Growth",
      description:
        "Digital campaigns, local PIN-code leads, and social media promotion.",
    },
    {
      icon: <PackageCheck className="h-6 w-6" />,
      title: "Approved Stock Supply",
      description:
        "Genuine new and verified pre-owned smartphones.",
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Business & Training Guidance",
      description:
        "Staff training, operational support, and territory protection.",
    },
  ];

  const franchiseHighlights = [
    "Complete Business Support",
    "Marketing & Customer Leads",
    "Approved Stock Supply",
    "Territory Protection",
  ];

  return (
    <>
      {/* FRANCHISE MAIN SECTION */}
      <section
        id="franchise"
        className="relative isolate overflow-hidden bg-[#06172E] py-14 sm:py-20 lg:py-24"
        style={{
          backgroundImage: "url('/images/bidmax-storefront.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        {/* DARK BACKGROUND OVERLAY */}
        <div className="absolute inset-0 -z-10 bg-[#06172E]/85" />

        {/* BLUE GRADIENT OVERLAY */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#06172E]/10 via-[#0755D9]/5 to-[#06172E]/2" />

        {/* BACKGROUND GLOW */}
        <div className="pointer-events-none absolute -left-24 top-0 -z-10 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]" />

        <div className="pointer-events-none absolute -bottom-20 right-0 -z-10 h-96 w-96 rounded-full bg-blue-400/20 blur-[120px]" />

        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">

          {/* HERO SECTION */}
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">

            {/* LEFT CONTENT - 8 COLUMNS */}
            <div className="relative z-10 lg:col-span-8">

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-bold text-blue-100 shadow-lg backdrop-blur-md sm:text-xs">
                <Sparkles className="h-4 w-4 text-amber-400" />
                Franchise Opportunity • Your Success Our Priority
              </div>

              <h2 className="max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
                Start Your Own

                <span className="mt-2 block bg-gradient-to-r from-blue-300 via-white to-blue-300 bg-clip-text text-transparent">
                  BidMax Mobile Store
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-blue-100 sm:text-base lg:text-lg">
                Join India&apos;s trusted{" "}
                <strong className="text-white">
                  BUY • SELL • BID
                </strong>{" "}
                mobile network. Zero royalty up to ₹1 Crore and
                100% stock buy-back protection.
              </p>

              {/* APPLY BUTTON */}
              <button
                type="button"
                onClick={openForm}
                className="mt-7 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-extrabold text-[#0755D9] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-2xl"
              >
                Apply for Franchise
                <ArrowRight className="h-5 w-5" />
              </button>

              {/* CONTACT DETAILS */}
              <div className="mt-7 flex flex-wrap gap-3">

                <a
                  href="tel:+919000000000"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-xs font-bold text-white backdrop-blur-md transition hover:bg-white/20"
                >
                  <Phone className="h-4 w-4 text-blue-300" />
                  +91 90000 00000
                </a>

                <a
                  href="mailto:franchise@bidmax.in"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-xs font-bold text-white backdrop-blur-md transition hover:bg-white/20"
                >
                  <Mail className="h-4 w-4 text-blue-300" />
                  franchise@bidmax.in
                </a>

                <a
                  href="https://bidmax.in"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-xs font-bold text-white backdrop-blur-md transition hover:bg-white/20"
                >
                  <Globe className="h-4 w-4 text-blue-300" />
                  www.bidmax.in
                </a>

              </div>
            </div>

            {/* RIGHT CONTENT - 4 COLUMNS */}
            <div className="relative z-10 lg:col-span-4">

              <div className="rounded-3xl border border-white/20 bg-[#06172E]/65 p-6 text-white shadow-2xl backdrop-blur-xl sm:p-8">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-300">
                  <Crown className="h-8 w-8" />
                </div>

                <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
                  Become a Business Partner
                </p>

                <h3 className="mt-3 text-3xl font-black">
                  Your Own
                  <span className="block text-blue-300">
                    BidMax Store
                  </span>
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-blue-100">
                  Build your business with franchise support,
                  approved stock supply, marketing assistance
                  and business training.
                </p>

                <div className="my-6 h-px bg-white/20" />

                <div className="space-y-4">
                  {franchiseHighlights.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-emerald-400" />

                      <span className="text-sm font-semibold text-white">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={openForm}
                  className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0755D9] to-[#0866FF] px-5 py-4 text-sm font-extrabold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-blue-500/30"
                >
                  Get Franchise Details
                  <ArrowRight className="h-4 w-4" />
                </button>

              </div>
            </div>
          </div>
{/* INVESTMENT AND BENEFITS */}
          <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-12">

            {/* INVESTMENT CARD */}
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-[#06172E]/95 via-[#0B3674]/95 to-[#0866FF]/90 p-6 text-white shadow-xl backdrop-blur-md lg:col-span-4">

              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

              <div className="relative z-10">

                <div className="flex items-center gap-2">
                  <Crown className="h-6 w-6 text-yellow-300" />

                  <span className="rounded-full bg-yellow-300 px-3 py-1 text-[10px] font-extrabold text-[#06172E]">
                    ONE TIME
                  </span>
                </div>

                <p className="mt-5 text-xs font-bold uppercase tracking-widest text-blue-100">
                  Franchise Investment
                </p>

                <h3 className="mt-2 text-4xl font-black sm:text-5xl">
                  ₹50,000
                </h3>

                <div className="my-5 h-px bg-white/20" />

                <div className="flex items-start gap-2">
                  <ShieldCheck className="h-5 w-5 flex-shrink-0 text-emerald-300" />

                  <p className="text-xs leading-relaxed text-blue-50">
                    Pay only for official BidMax franchise rights and
                    onboarding.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={openForm}
                  className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-extrabold text-[#0755D9] transition hover:bg-blue-50"
                >
                  Your Business Starts Here
                  <ArrowRight className="h-4 w-4" />
                </button>

              </div>
            </div>

            {/* THREE METRICS */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:col-span-8">

              {/* ROYALTY */}
              <div className="rounded-2xl border border-white/15 bg-white/10 p-5 text-center text-white shadow-lg backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/15 hover:shadow-xl">

                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 text-blue-300">
                  <Percent className="h-7 w-7" />
                </div>

                <h3 className="mt-3 text-xl font-extrabold text-white">
                  0% Royalty
                </h3>

                <span className="mt-2 inline-block rounded-full bg-emerald-400/20 px-3 py-1 text-[13px] font-bold text-emerald-300">
                  Up to ₹1 Cr
                </span>

                <p className="mt-3 text-xs leading-relaxed text-blue-100">
                  Zero royalty fee on your first ₹1 Crore sales. Only 2%
                  yearly thereafter.
                </p>
              </div>

              {/* BUYBACK */}
              <div className="rounded-2xl border border-white/15 bg-white/10 p-5 text-center text-white shadow-lg backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/15 hover:shadow-xl">

                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/20 text-emerald-300">
                  <ShieldCheck className="h-7 w-7" />
                </div>

                <h3 className="mt-3 text-xl font-extrabold text-white">
                  100% Buy-Back
                </h3>

                <span className="mt-2 inline-block rounded-full bg-blue-400/20 px-3 py-1 text-[13px] font-bold text-blue-200">
                  0 Stock Risk
                </span>

                <p className="mt-3 text-xs leading-relaxed text-blue-100">
                  Stock buy-back protection after agreement.
                </p>
              </div>

              {/* ROI */}
              <div className="rounded-2xl border border-white/15 bg-white/10 p-5 text-center text-white shadow-lg backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/15 hover:shadow-xl">

                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-purple-400/20 text-purple-300">
                  <TrendingUp className="h-7 w-7" />
                </div>

                <h3 className="mt-3 text-xl font-extrabold text-white">
                  ≈40% ROI
                </h3>

                <span className="mt-2 inline-block rounded-full bg-purple-400/20 px-3 py-1 text-[13px] font-bold text-purple-200">
                  16 Months
                </span>

                <p className="mt-3 text-xs leading-relaxed text-blue-100">
                  Approximate return with a 16-month payback period.
                </p>
              </div>

            </div>
          </div>
          {/* BENEFIT CARDS */}
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {benefitCards.map((card) => (
              <div
                key={card.title}
                className="group rounded-2xl border border-white/15 bg-white/10 p-5 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-300/50 hover:bg-white/15 hover:shadow-xl"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 text-blue-300 transition group-hover:bg-[#0866FF] group-hover:text-white">
                  {card.icon}
                </div>

                <h3 className="text-sm font-extrabold text-white">
                  {card.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-blue-100">
                  {card.description}
                </p>
              </div>
            ))}

          </div>

          

          {/* TRUST BAR */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 rounded-2xl border border-white/20 bg-white/10 px-5 py-5 text-xs font-bold text-white shadow-lg backdrop-blur-md">

            <span className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-emerald-400" />
              Franchise Support
            </span>

            <span className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-blue-300" />
              Territory Opportunities
            </span>

            <span className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-blue-300" />
              BidMax Network
            </span>

          </div>

        </div>
      </section>

      {/* RIGHT SIDE FRANCHISE FORM OVERLAY */}
      {isFormOpen && (
        <div className="fixed inset-0 z-[999]">

          {/* BACKGROUND OVERLAY */}
          <button
            type="button"
            aria-label="Close franchise form"
            onClick={closeForm}
            className="absolute inset-0 h-full w-full cursor-default bg-[#06172E]/70 backdrop-blur-sm"
          />

          {/* FORM PANEL */}
          <div className="animate-in slide-in-from-right duration-300 absolute right-0 top-0 flex h-full w-full max-w-[520px] flex-col overflow-hidden bg-white shadow-2xl sm:w-[90%]">

            {/* FORM HEADER */}
            <div className="relative overflow-hidden bg-gradient-to-r from-[#06172E] to-[#0755D9] px-5 py-6 text-white sm:px-7">

              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/10 blur-2xl" />

              <div className="relative flex items-start justify-between gap-4">

                <div>
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-blue-100">
                    <Sparkles className="h-3.5 w-3.5" />
                    Become a Franchise Partner
                  </div>

                  <h3 className="text-xl font-extrabold sm:text-2xl">
                    Apply for BidMax Franchise
                  </h3>

                  <p className="mt-2 max-w-sm text-xs leading-relaxed text-blue-100">
                    Fill out your details to check PIN code availability
                    and get the franchise brochure.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={closeForm}
                  aria-label="Close form"
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 transition hover:bg-white/20"
                >
                  <X className="h-5 w-5" />
                </button>

              </div>
            </div>

            {/* FORM CONTENT */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-7">

              {isSubmitted ? (

                /* SUCCESS MESSAGE */
                <div className="flex min-h-[400px] flex-col items-center justify-center text-center">

                  <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <CheckCircle2 className="h-12 w-12" />
                  </div>

                  <h3 className="text-2xl font-extrabold text-[#06172E]">
                    Application Submitted!
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-500">
                    Thank you,{" "}
                    <strong className="text-[#06172E]">
                      {formData.fullName}
                    </strong>
                    . Our franchise expansion team will check PIN code{" "}
                    <strong className="text-[#06172E]">
                      {formData.pinCode}
                    </strong>{" "}
                    and reach out shortly.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setFormData(initialFormData);
                      setIsSubmitted(false);
                    }}
                    className="mt-6 rounded-xl border border-blue-200 px-5 py-3 text-xs font-bold text-[#0866FF] transition hover:bg-blue-50"
                  >
                    Submit Another Inquiry
                  </button>

                  <button
                    type="button"
                    onClick={closeForm}
                    className="mt-3 text-xs font-semibold text-slate-400 hover:text-[#06172E]"
                  >
                    Close Form
                  </button>

                </div>

              ) : (

                /* FRANCHISE APPLICATION FORM */
                <form onSubmit={handleSubmit} className="space-y-4">

                  {/* FULL NAME */}
                  <div>
                    <label htmlFor="fullName" className={labelClass}>
                      Full Name *
                    </label>

                    <input
                      ref={formInputRef}
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      autoComplete="name"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={inputClass}
                    />
                  </div>

                  {/* MOBILE */}
                  <div>
                    <label htmlFor="mobileNumber" className={labelClass}>
                      Mobile Number *
                    </label>

                    <input
                      id="mobileNumber"
                      name="mobileNumber"
                      type="tel"
                      required
                      inputMode="numeric"
                      pattern="[0-9]{10}"
                      maxLength={10}
                      autoComplete="tel-national"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      placeholder="Enter 10-digit mobile number"
                      className={inputClass}
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email Address *
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className={inputClass}
                    />
                  </div>

                  {/* CITY */}
                  <div>
                    <label htmlFor="city" className={labelClass}>
                      City / District *
                    </label>

                    <input
                      id="city"
                      name="city"
                      type="text"
                      required
                      autoComplete="address-level2"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Enter city or district"
                      className={inputClass}
                    />
                  </div>

                  {/* PIN CODE */}
                  <div>
                    <label htmlFor="pinCode" className={labelClass}>
                      Target PIN Code *
                    </label>

                    <input
                      id="pinCode"
                      name="pinCode"
                      type="text"
                      required
                      inputMode="numeric"
                      pattern="[0-9]{6}"
                      maxLength={6}
                      value={formData.pinCode}
                      onChange={handleChange}
                      placeholder="Enter 6-digit PIN code"
                      className={inputClass}
                    />
                  </div>

                  {/* INVESTMENT */}
                  <div>
                    <label
                      htmlFor="investmentCapacity"
                      className={labelClass}
                    >
                      Total Investment Capacity *
                    </label>

                    <select
                      id="investmentCapacity"
                      name="investmentCapacity"
                      required
                      value={formData.investmentCapacity}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="₹1.5 – ₹2.5 Lakhs">
                        ₹1.5 – ₹2.5 Lakhs
                      </option>

                      <option value="₹2.5 – ₹5 Lakhs">
                        ₹2.5 – ₹5 Lakhs
                      </option>

                      <option value="₹5 – ₹10 Lakhs">
                        ₹5 – ₹10 Lakhs
                      </option>

                      <option value="₹10 Lakhs+">
                        ₹10 Lakhs+
                      </option>
                    </select>
                  </div>

                  {/* SHOP STATUS */}
                  <div>
                    <label
                      htmlFor="storeSpaceStatus"
                      className={labelClass}
                    >
                      Store Space Status *
                    </label>

                    <select
                      id="storeSpaceStatus"
                      name="storeSpaceStatus"
                      required
                      value={formData.storeSpaceStatus}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="Own Shop Available">
                        Own Shop Available
                      </option>

                      <option value="Rented Shop Finalized">
                        Rented Shop Finalized
                      </option>

                      <option value="Looking for Shop Location">
                        Looking for Shop Location
                      </option>

                      <option value="Existing Mobile Store">
                        Existing Mobile Store
                      </option>
                    </select>
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label htmlFor="message" className={labelClass}>
                      Message / Experience (Optional)
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your business experience..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* SUBMIT BUTTON */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0755D9] to-[#0866FF] px-5 py-4 text-sm font-extrabold text-white shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      "Submitting Application..."
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Apply Now for Franchise
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[10px] leading-relaxed text-slate-400">
                    By submitting this form, you agree to be contacted
                    by the BidMax Franchise Team.
                  </p>

                </form>
              )}

            </div>
          </div>
        </div>
      )}
    </>
  );
}
