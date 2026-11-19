
"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Send,
  Sparkles,
  Clock,
  Headphones,
  ExternalLink,
  MessageCircle,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

interface ContactFormData {
  name: string;
  mobile: string;
  message: string;
}

const initialFormState: ContactFormData = {
  name: "",
  mobile: "",
  message: "",
};

export default function ContactUsPage() {
  const [formData, setFormData] =
    useState<ContactFormData>(initialFormState);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "mobile" && !/^[0-9]*$/.test(value)) {
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrorMessage("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      // Connect your actual /api/contact endpoint here.
      await new Promise((resolve) => setTimeout(resolve, 800));

      setIsSubmitted(true);
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-medium text-[#06172E] outline-none transition-all placeholder:text-slate-400 focus:border-[#0866FF] focus:ring-4 focus:ring-blue-500/10";

  return (
    <main className="min-h-screen bg-[#F4F7FC] text-[#06172E]">

      {/* ================= HERO BANNER ================= */}

      <section className="relative min-h-[340px] w-full overflow-hidden bg-gradient-to-r from-[#06172E] via-[#092752] to-[#0866FF] sm:min-h-[370px]">

        <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-blue-500/30 blur-3xl" />

        <div className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="relative mx-auto flex min-h-[340px] max-w-[1280px] items-center justify-between gap-8 px-5 py-12 sm:min-h-[370px] sm:px-8 lg:px-10">

          {/* LEFT CONTENT */}

          <div className="relative z-10 max-w-xl text-white">

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-extrabold uppercase tracking-wider text-blue-100 backdrop-blur-md sm:text-xs">

              <Sparkles className="h-4 w-4 text-amber-300" />

              BidMax Customer Support

            </div>

            <h1 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">

              Get in Touch With{" "}

              <span className="text-amber-300">
                BidMax Support
              </span>

            </h1>

            <p className="mt-4 max-w-lg text-sm leading-7 text-blue-100/90 sm:text-base">

              Have a question about buying a verified phone, listing your old
              device, or joining our retailer network? Our team is ready to help
              you.

            </p>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-xs font-bold text-blue-100 sm:text-sm">

              <span className="flex items-center gap-2">

                <Clock className="h-5 w-5 text-emerald-400" />

                Mon – Sun, 9AM – 9PM

              </span>

              <span className="flex items-center gap-2">

                <Headphones className="h-5 w-5 text-amber-300" />

                Fast Customer Assistance

              </span>

            </div>

          </div>

          {/* RIGHT IMAGES */}

          <div className="relative hidden h-[285px] w-[43%] items-center justify-end md:flex">

            <div className="absolute right-10 top-0 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl" />

            <div className="relative flex items-center gap-4">

              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=85"
                alt="BidMax customer support team"
                className="h-[235px] w-[185px] -rotate-6 rounded-2xl border-2 border-white/20 object-cover shadow-2xl transition duration-500 hover:-translate-y-2"
              />

              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=85"
                alt="Customer assistance"
                className="h-[260px] w-[200px] translate-y-3 rotate-3 rounded-2xl border-2 border-white/25 object-cover shadow-2xl transition duration-500 hover:-translate-y-2"
              />

            </div>

          </div>

        </div>

      </section>

      {/* ================= CONTACT SECTION ================= */}

      <section className="mx-auto max-w-[1400px] px-4 py-10 pb-16 sm:px-6 sm:py-14 lg:px-8">

        <div className="overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-[0_12px_45px_rgba(6,23,46,0.07)]">

          <div className="grid grid-cols-1 md:grid-cols-12">

            {/* ================= LEFT CONTACT DETAILS ================= */}

            <div className="bg-gradient-to-br from-white to-[#F5F8FF] p-6 sm:p-9 md:col-span-5">

              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-[#0866FF]">

                <Headphones className="h-3.5 w-3.5" />

                Contact Information

              </div>

              <h2 className="mt-5 text-2xl font-black tracking-tight text-[#06172E] sm:text-3xl">

                Contact Us

              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">

                Have questions? We would love to hear from you.
                Reach out to our team anytime.

              </p>

              <div className="mt-8 space-y-6">

                {/* PHONE */}

                <a
                  href="tel:+916296421840"
                  className="group flex items-center gap-4"
                >

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0866FF]/10 text-[#0866FF] transition-all duration-300 group-hover:bg-[#0866FF] group-hover:text-white">

                    <Phone className="h-5 w-5" />

                  </div>

                  <div className="min-w-0">

                    <p className="text-xs font-bold text-slate-400">
                      Call Us
                    </p>

                    <p className="mt-1 text-base font-extrabold text-[#06172E] transition group-hover:text-[#0866FF]">
                      +91 6296421840
                    </p>

                    <p className="mt-1 text-[11px] font-medium text-slate-500">
                      Mon – Sun, 9AM – 9PM
                    </p>

                  </div>

                </a>

                {/* EMAIL */}

                <a
                  href="mailto:support@bidmax.in"
                  className="group flex items-center gap-4"
                >

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0866FF]/10 text-[#0866FF] transition-all duration-300 group-hover:bg-[#0866FF] group-hover:text-white">

                    <Mail className="h-5 w-5" />

                  </div>

                  <div className="min-w-0">

                    <p className="text-xs font-bold text-slate-400">
                      Email Support
                    </p>

                    <p className="mt-1 break-all text-sm font-extrabold text-[#06172E] transition group-hover:text-[#0866FF] sm:text-base">
                      support@bidmax.in
                    </p>

                    <p className="mt-1 text-[11px] font-medium text-slate-500">
                      We are happy to assist you
                    </p>

                  </div>

                </a>

                {/* ADDRESS */}

                <div className="flex items-start gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0866FF]/10 text-[#0866FF]">

                    <MapPin className="h-5 w-5" />

                  </div>

                  <div>

                    <p className="text-xs font-bold text-slate-400">
                      Our Location
                    </p>

                    <p className="mt-1 text-sm font-extrabold leading-6 text-[#06172E]">
                      Ramganga, Patharpratima,
                      <br />
                      PIN - 743371, West Bengal
                    </p>

                  </div>

                </div>

              </div>

              {/* SUPPORT HIGHLIGHT */}

              <div className="mt-9 rounded-2xl bg-gradient-to-r from-[#06172E] to-[#0866FF] p-5 text-white">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">

                    <ShieldCheck className="h-5 w-5 text-emerald-300" />

                  </div>

                  <div>

                    <h3 className="text-sm font-extrabold">
                      We Are Here to Help!
                    </h3>

                    <p className="mt-1 text-[11px] text-blue-100">
                      Your satisfaction is our priority.
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* ================= RIGHT MESSAGE FORM ================= */}

            <div className="p-6 sm:p-9 md:col-span-7">

              {isSubmitted ? (

                /* SUCCESS MESSAGE */

                <div className="flex min-h-[420px] flex-col items-center justify-center py-10 text-center">

                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50">

                    <CheckCircle2 className="h-11 w-11 text-emerald-500" />

                  </div>

                  <h3 className="mt-6 text-2xl font-black text-[#06172E]">
                    Message Sent Successfully!
                  </h3>

                  <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-slate-500">

                    Thank you,{" "}
                    <strong className="text-[#06172E]">
                      {formData.name}
                    </strong>
                    . Our support team will contact you on{" "}
                    <strong className="text-[#0866FF]">
                      {formData.mobile}
                    </strong>
                    .

                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setFormData(initialFormState);
                      setIsSubmitted(false);
                      setErrorMessage("");
                    }}
                    className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#0866FF] px-6 py-3.5 text-sm font-extrabold text-white transition hover:bg-blue-700"
                  >

                    Send Another Message

                    <ArrowRight className="h-4 w-4" />

                  </button>

                </div>

              ) : (

                <>

                  <div className="mb-7">

                    <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-[#0866FF]">

                      <MessageCircle className="h-3.5 w-3.5" />

                      Send Us a Message

                    </div>

                    <h2 className="mt-4 text-2xl font-black tracking-tight text-[#06172E] sm:text-3xl">

                      Let&apos;s Talk!

                    </h2>

                    <p className="mt-2 text-sm leading-6 text-slate-500">

                      Fill out the form below and our team will get back
                      to you as soon as possible.

                    </p>

                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">

                    {/* NAME */}

                    <div>

                      <label
                        htmlFor="name"
                        className="mb-2 block text-xs font-extrabold text-[#06172E]"
                      >
                        Your Name <span className="text-red-500">*</span>
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        minLength={2}
                        maxLength={80}
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className={inputClass}
                      />

                    </div>

                    {/* MOBILE */}

                    <div>

                      <label
                        htmlFor="mobile"
                        className="mb-2 block text-xs font-extrabold text-[#06172E]"
                      >
                        Mobile Number <span className="text-red-500">*</span>
                      </label>

                      <div className="flex overflow-hidden rounded-xl border border-slate-200 bg-white transition focus-within:border-[#0866FF] focus-within:ring-4 focus-within:ring-blue-500/10">

                        <div className="flex items-center gap-2 border-r border-slate-200 bg-slate-50 px-3 text-sm font-bold text-[#06172E]">
                          +91
                        </div>

                        <input
                          id="mobile"
                          name="mobile"
                          type="tel"
                          inputMode="numeric"
                          maxLength={10}
                          required
                          value={formData.mobile}
                          onChange={handleChange}
                          placeholder="Enter 10-digit mobile number"
                          className="w-full px-4 py-3.5 text-sm font-medium text-[#06172E] outline-none placeholder:text-slate-400"
                        />

                      </div>

                    </div>

                    {/* MESSAGE */}

                    <div>

                      <label
                        htmlFor="message"
                        className="mb-2 block text-xs font-extrabold text-[#06172E]"
                      >
                        Your Message <span className="text-red-500">*</span>
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        minLength={5}
                        maxLength={1000}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help you? Tell us about your query..."
                        className={`${inputClass} resize-none`}
                      />

                    </div>

                    {/* ERROR */}

                    {errorMessage && (

                      <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs font-bold text-red-600">
                        {errorMessage}
                      </div>

                    )}

                    {/* SUBMIT */}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0866FF] to-[#2455D6] px-6 py-4 text-sm font-extrabold text-white shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
                    >

                      {isSubmitting ? (

                        <>
                          <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                          Sending Message...
                        </>

                      ) : (

                        <>
                          <Send className="h-4 w-4" />
                          Send Message
                        </>

                      )}

                    </button>

                    <p className="text-center text-[11px] font-medium text-slate-400">
                      Your contact information will be used to respond to your enquiry.
                    </p>

                  </form>

                </>

              )}

            </div>

          </div>

        </div>

        {/* ================= MAP SECTION ================= */}

        <div className="mt-8 overflow-hidden rounded-[25px] border border-slate-200 bg-white p-3 shadow-sm sm:p-5">

          <div className="mb-4 flex flex-wrap items-center justify-between gap-3 px-2">

            <div>

              <div className="flex items-center gap-2">

                <MapPin className="h-5 w-5 text-[#0866FF]" />

                <h3 className="text-lg font-black text-[#06172E]">
                  Find Us on Map
                </h3>

              </div>

              <p className="mt-1 text-xs text-slate-500">
                Visit our location in Ramganga, Patharpratima.
              </p>

            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Ramganga%2C+Patharpratima%2C+743371%2C+West+Bengal%2C+India"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#0866FF] px-4 py-2.5 text-xs font-extrabold text-white transition hover:bg-blue-700"
            >

              Open Google Maps

              <ExternalLink className="h-3.5 w-3.5" />

            </a>

          </div>

          {/* MAP */}

          <div className="relative h-[260px] overflow-hidden rounded-2xl bg-slate-100 sm:h-[350px]">

            <iframe
              title="BidMax Location - Ramganga Patharpratima"
              src="https://maps.google.com/maps?q=Ramganga%2C%20Patharpratima%2C%20West%20Bengal%20743371&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

          </div>

        </div>

      </section>

    </main>
  );
}
