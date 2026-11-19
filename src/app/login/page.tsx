
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  LogIn,
  UserPlus,
  ArrowRight,
  ShieldCheck,
  X,
  Smartphone,
  Sparkles,
  Tag,
  CheckCircle2,
  ShoppingBag,
} from "lucide-react";

export default function LoginPage() {
  const [authTab, setAuthTab] = useState<"login" | "register">("login");
  const [authMessage, setAuthMessage] = useState("");

  const handleAuthSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setAuthMessage(
      authTab === "login"
        ? "Login form submitted successfully!"
        : "Registration form submitted successfully!"
    );
  };

  return (
    <main className="min-h-screen bg-white">

      <div className="grid min-h-screen lg:grid-cols-2">

        {/* ================================= */}
        {/* LEFT SIDE - IMAGE SECTION */}
        {/* ================================= */}

        <section
          className="relative hidden min-h-screen overflow-hidden bg-[#06172E] bg-cover bg-center lg:flex lg:flex-col lg:justify-between"
          style={{
            backgroundImage:
              "url('/images/login.jpg')",
          }}
        >

          {/* IMAGE OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#06172E]/95 via-[#06172E]/65 to-[#06172E]/30" />

          {/* DECORATIVE LIGHT */}
          <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-blue-500/20 blur-[100px]" />

          <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-[100px]" />

          {/* LEFT CONTENT */}
          <div className="relative z-10 flex h-full flex-col justify-between p-10 xl:p-16">

            {/* MAIN CONTENT */}
            <div className="w-full py-12">

              <h1 className="text-4xl font-black leading-tight text-white xl:text-6xl">

                Find Your Next

                <span className="mt-2 block text-[#65A4FF]">
                  Favourite Phone.
                </span>

                <span className="mt-2 block">
                  At The Best Price.
                </span>

              </h1>

              <p className="mt-7 max-w-md text-sm leading-7 text-gray-300 xl:text-base">
                Discover amazing smartphone deals, explore premium brands
                and enjoy a smarter shopping experience with BidMax.
              </p>

              {/* FEATURES */}
              <div className="mt-10 grid grid-cols-3 gap-4">

                <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/20 text-blue-300">
                    <Smartphone size={22} />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-white">
                      Latest Phones
                    </h3>

                    <p className="mt-1 text-[10px] text-gray-300">
                      Top smartphone brands
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-500/20 text-yellow-300">
                    <Tag size={22} />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-white">
                      Best Deals
                    </h3>

                    <p className="mt-1 text-[10px] text-gray-300">
                      Amazing price offers
                    </p>
                  </div>

                </div>
               

              </div>

              

            </div>

          

          </div>

        </section>


        {/* ================================= */}
        {/* RIGHT SIDE - LOGIN FORM */}
        {/* ================================= */}

        <section className="relative flex min-h-screen items-center justify-center bg-white px-5 py-10 sm:px-10 lg:px-12 xl:px-20">

          {/* TOP RIGHT CLOSE */}
          <Link
            href="/"
            aria-label="Back to home"
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition hover:bg-red-50 hover:text-red-500"
          >
            <X size={19} />
          </Link>

          <div className="w-full max-w-[430px]">

            {/* MOBILE LOGO */}
            <div className="mb-9 flex justify-center lg:hidden">

              <Link href="/">
                <Image
                  src="/images/bidmax-logo.png"
                  alt="BidMax"
                  width={75}
                  height={75}
                  className="h-16 w-16 object-contain"
                  priority
                />
              </Link>

            </div>

            {/* FORM HEADING */}
            <div className="mb-8">

              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-2 text-[11px] font-bold text-[#0866FF]">

                <Sparkles size={14} />

                WELCOME TO BIDMAX

              </div>

              <h2 className="text-3xl font-black tracking-tight text-[#06172E] sm:text-4xl">

                {authTab === "login"
                  ? "Welcome Back!"
                  : "Create Account"}

              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-500">

                {authTab === "login"
                  ? "Sign in to continue exploring amazing smartphone deals."
                  : "Join BidMax and discover a smarter way to shop."}

              </p>

            </div>


            {/* LOGIN / REGISTER TABS */}
            <div className="grid grid-cols-2 gap-1 rounded-xl bg-gray-100 p-1.5">

              <button
                type="button"
                onClick={() => {
                  setAuthTab("login");
                  setAuthMessage("");
                }}
                className={`flex items-center justify-center gap-2 rounded-lg py-3 text-sm font-bold transition-all ${
                  authTab === "login"
                    ? "bg-white text-[#0866FF] shadow-md"
                    : "text-gray-500 hover:text-[#06172E]"
                }`}
              >
                <LogIn size={16} />
                Login
              </button>

              <button
                type="button"
                onClick={() => {
                  setAuthTab("register");
                  setAuthMessage("");
                }}
                className={`flex items-center justify-center gap-2 rounded-lg py-3 text-sm font-bold transition-all ${
                  authTab === "register"
                    ? "bg-white text-[#0866FF] shadow-md"
                    : "text-gray-500 hover:text-[#06172E]"
                }`}
              >
                <UserPlus size={16} />
                Register
              </button>

            </div>


            {/* AUTH FORM */}
            <form
              onSubmit={handleAuthSubmit}
              className="mt-7 space-y-5"
            >

              {/* FULL NAME */}
              {authTab === "register" && (
                <div>

                  <label
                    htmlFor="account-name"
                    className="mb-2 block text-sm font-bold text-[#06172E]"
                  >
                    Full Name
                  </label>

                  <input
                    id="account-name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Enter your full name"
                    className="h-13 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#0866FF] focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />

                </div>
              )}


              {/* EMAIL / PHONE */}
              <div>

                <label
                  htmlFor="account-email"
                  className="mb-2 block text-sm font-bold text-[#06172E]"
                >
                  {authTab === "login"
                    ? "Email Address / Phone"
                    : "Email Address"}
                </label>

                <input
                  id="account-email"
                  type={authTab === "login" ? "text" : "email"}
                  required
                  autoComplete="username"
                  placeholder={
                    authTab === "login"
                      ? "Enter email or phone number"
                      : "Enter your email address"
                  }
                  className="h-13 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#0866FF] focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />

              </div>


              {/* PHONE */}
              {authTab === "register" && (
                <div>

                  <label
                    htmlFor="account-phone"
                    className="mb-2 block text-sm font-bold text-[#06172E]"
                  >
                    Mobile Number
                  </label>

                  <input
                    id="account-phone"
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    maxLength={10}
                    autoComplete="tel"
                    placeholder="Enter 10-digit mobile number"
                    className="h-13 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#0866FF] focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />

                </div>
              )}


              {/* PASSWORD */}
              <div>

                <label
                  htmlFor="account-password"
                  className="mb-2 block text-sm font-bold text-[#06172E]"
                >
                  Password
                </label>

                <input
                  id="account-password"
                  type="password"
                  required
                  minLength={6}
                  autoComplete={
                    authTab === "login"
                      ? "current-password"
                      : "new-password"
                  }
                  placeholder="Enter your password"
                  className="h-13 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#0866FF] focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />

              </div>


              {/* FORGOT PASSWORD */}
              {authTab === "login" && (
                <div className="flex justify-end">

                  <Link
                    href="/forgot-password"
                    className="text-xs font-bold text-[#0866FF] transition hover:text-[#06172E] hover:underline"
                  >
                    Forgot Password?
                  </Link>

                </div>
              )}


              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="group flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#0755D9] to-[#0866FF] text-sm font-extrabold text-white shadow-xl shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/30"
              >

                {authTab === "login"
                  ? "Login to Account"
                  : "Create My Account"}

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </button>

            </form>


            {/* STATUS MESSAGE */}
            {authMessage && (
              <div
                role="status"
                className="mt-5 rounded-xl border border-blue-100 bg-blue-50 p-4 text-center text-sm font-semibold text-[#0755D9]"
              >
                {authMessage}
              </div>
            )}


            {/* SECURITY */}
            <div className="mt-7 flex items-center justify-center gap-2 text-xs text-gray-400">

              <ShieldCheck size={17} className="text-green-500" />

              Your account details are protected and secure.

            </div>


            {/* FOOTER */}
            <div className="mt-8 border-t border-gray-100 pt-6 text-center">

              <p className="text-xs text-gray-400">
                By continuing, you agree to BidMax's{" "}
                <Link
                  href="/terms"
                  className="font-semibold text-[#0866FF] hover:underline"
                >
                  Terms & Conditions
                </Link>
              </p>

              <Link
                href="/"
                className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-gray-500 transition hover:text-[#0866FF]"
              >
                <ArrowRight size={14} className="rotate-180" />
                Back to Home
              </Link>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}
