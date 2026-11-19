
'use client';

import React, { Suspense, useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { SAMPLE_PRODUCTS } from '../../types/product';

export default function ProductDetailsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f5f7fb]" />}>
      <ProductDetailsContent />
    </Suspense>
  );
}

function ProductDetailsContent() {
  const params = useParams<{ id: string }>();

  const product = SAMPLE_PRODUCTS.find(
    (p) => p.id === params.id
  );

  const [selectedImage, setSelectedImage] = useState('');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [notifyModalOpen, setNotifyModalOpen] = useState(false);
  const [notifyContact, setNotifyContact] = useState('');
  const [notifySubmitted, setNotifySubmitted] = useState(false);

  // Product Gallery
  const galleryImages = product
    ? product.gallery?.length
      ? product.gallery
      : [product.image]
    : [];

  // Set Default Product Image
  useEffect(() => {
    if (product) {
      setSelectedImage(product.gallery?.[0] || product.image);
    }
  }, [product?.id]);

  // Reset Product-specific states when product changes
  useEffect(() => {
    setIsWishlisted(false);
    setOpenAccordion(null);
    setNotifyModalOpen(false);
    setNotifyContact('');
    setNotifySubmitted(false);
  }, [product?.id]);

  // Auto Close Notification Success
  useEffect(() => {
    if (!notifySubmitted) return;

    const timer = window.setTimeout(() => {
      setNotifyModalOpen(false);
      setNotifySubmitted(false);
      setNotifyContact('');
    }, 1800);

    return () => window.clearTimeout(timer);
  }, [notifySubmitted]);

  // Accordion Toggle
  const toggleAccordion = (section: string) => {
    setOpenAccordion((prev) =>
      prev === section ? null : section
    );
  };

  // Notification Form Submit
  const handleNotifySubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!notifyContact.trim()) return;

    setNotifySubmitted(true);
  };

  // Product Not Found
  if (!product) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#f5f7fb] px-4 text-center">
        <h1 className="text-3xl font-bold text-[#06172E]">
          Product Not Found
        </h1>

        <p className="mt-3 text-sm text-slate-500">
          Sorry, this product is currently unavailable.
        </p>

        <Link
          href="/mobile-phones"
          className="mt-6 rounded-xl bg-[#0866ff] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0052d9]"
        >
          Browse Mobile Phones
        </Link>
      </div>
    );
  }

  // Accordion Sections
  const accordionSections = [
    {
      key: 'condition',
      title: 'Product Condition',
      items: product.details.conditionNotes,
    },
    {
      key: 'box',
      title: 'Box & Accessories',
      items: product.details.boxAccessories,
    },
    {
      key: 'warranty',
      title: 'Warranty & Service',
      items: product.details.warrantyService,
    },
    {
      key: 'inspection',
      title: 'Inspection Details',
      items: product.details.inspectionDetails,
    },
  ];

  // Product Specifications
  const specifications = [
    {
      title: 'Display',
      value: product.specs.display,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
    },
    {
      title: 'Processor',
      value: product.specs.processor,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="5" width="14" height="14" rx="2" />
          <path d="M9 9h6v6H9zM9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4" />
        </svg>
      ),
    },
    {
      title: 'Camera',
      value: product.specs.camera,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="6" width="18" height="14" rx="2" />
          <circle cx="12" cy="13" r="4" />
          <path d="M8 6l1.5-3h5L16 6" />
        </svg>
      ),
    },
    {
      title: 'Battery',
      value: product.specs.battery,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="7" width="18" height="12" rx="2" />
          <path d="M23 11v4M7 11h6" />
        </svg>
      ),
    },
  ];

  // Related Products
  const relatedProducts = SAMPLE_PRODUCTS
    .filter((item) => item.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-[#06172E]">

      <div className="mx-auto max-w-[1380px] px-4 py-6 pb-16 sm:px-6">

        {/* BREADCRUMB */}
        <nav className="mb-5 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 sm:text-sm">
          <Link href="/" className="transition hover:text-[#0866ff]">
            Home
          </Link>

          <span>/</span>

          <Link
            href="/mobile-phones"
            className="transition hover:text-[#0866ff]"
          >
            Mobile Phones
          </Link>

          <span>/</span>

          <span className="truncate font-semibold text-[#06172E]">
            {product.name} {product.storage}
          </span>
        </nav>

        {/* MAIN PRODUCT CARD */}
        <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_4px_20px_rgba(6,23,46,0.04)] sm:p-8">

          {/* PRODUCT GALLERY + INFORMATION */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">

            {/* LEFT SIDE: IMAGE GALLERY */}
            <div className="md:col-span-6">

              <div className="flex gap-3 rounded-2xl border border-slate-100 bg-[#fafbfe] p-3 sm:gap-4 sm:p-4">

                {/* THUMBNAILS */}
                <div className="flex shrink-0 flex-col gap-2.5">

                  {galleryImages.map((imgUrl, idx) => (
                    <button
                      key={`${imgUrl}-${idx}`}
                      type="button"
                      onClick={() => setSelectedImage(imgUrl)}
                      aria-label={`View product image ${idx + 1}`}
                      aria-pressed={selectedImage === imgUrl}
                      className={`flex h-12 w-12 items-center justify-center rounded-lg border bg-white p-1 transition-all sm:h-14 sm:w-14 ${
                        selectedImage === imgUrl
                          ? 'border-[#0866ff] ring-2 ring-[#0866ff]/20'
                          : 'border-slate-200 hover:border-[#0866ff]/60'
                      }`}
                    >
                      <img
                        src={imgUrl}
                        alt={`${product.name} view ${idx + 1}`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </button>
                  ))}

                </div>

                {/* MAIN IMAGE */}
                <div className="flex min-h-[280px] flex-1 items-center justify-center py-2 sm:min-h-[350px]">
                  <img
                    src={selectedImage || product.image}
                    alt={`${product.name} ${product.storage}`}
                    className="max-h-[270px] w-auto max-w-full object-contain transition-all duration-300 sm:max-h-[340px]"
                  />
                </div>

              </div>
            </div>

            {/* RIGHT SIDE: PRODUCT INFORMATION */}
            <div className="flex flex-col justify-center md:col-span-6">

              {/* PRODUCT TITLE */}
              <h1 className="text-2xl font-bold leading-snug text-[#06172E] sm:text-3xl">
                {product.name}

                <span className="mt-1 block text-lg font-semibold text-slate-500 sm:text-xl">
                  {product.storage}
                </span>
              </h1>

              {/* BRAND */}
              <p className="mt-2 text-sm font-medium text-slate-500">
                Brand:{' '}
                <span className="font-bold text-[#06172E]">
                  {product.brand}
                </span>
              </p>

              {/* RAM AND CONDITION */}
              <div className="mt-4 flex flex-wrap items-center gap-2.5">

                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  {product.ram} RAM
                </span>

                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-200">
                  {product.condition}
                </span>

                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${
                    product.inStock
                      ? 'bg-emerald-50 text-emerald-700 ring-emerald-200'
                      : 'bg-red-50 text-red-600 ring-red-200'
                  }`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      product.inStock ? 'bg-emerald-500' : 'bg-red-500'
                    }`}
                  />

                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>

              </div>

              {/* PRICE */}
              <div className="mt-6 text-2xl font-bold text-[#06172E] sm:text-[28px]">
                ₹ —
              </div>

              {/* PRICE REQUEST */}
              <div className="mt-3">
                <div className="w-full rounded-xl bg-[#f5b041] px-4 py-3 text-center text-sm font-bold text-[#06172E] shadow-sm sm:text-base">
                  Price on Request
                </div>

                <div className="mt-2 flex items-center gap-1.5 text-xs font-medium text-[#0866ff]">
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-amber-100 text-[10px] font-bold text-amber-600">
                    !
                  </span>
                  <span>Admin pricing pending</span>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="mt-6 space-y-3">

                <button
                  type="button"
                  disabled={!product.inStock}
                  onClick={() => {
                    setNotifySubmitted(false);
                    setNotifyModalOpen(true);
                  }}
                  className="w-full rounded-xl bg-[#0866ff] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0052d9] disabled:cursor-not-allowed disabled:bg-slate-400 sm:text-base"
                >
                  Notify Me
                </button>

                {/* <button
                  type="button"
                  onClick={() => setIsWishlisted((prev) => !prev)}
                  aria-pressed={isWishlisted}
                  className={`flex w-full items-center justify-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold transition-all sm:text-base ${
                    isWishlisted
                      ? 'border-red-200 bg-red-50 text-red-600'
                      : 'border-slate-200 bg-white text-[#06172E] hover:border-[#0866ff] hover:text-[#0866ff]'
                  }`}
                >
                  <svg
                    className={`h-5 w-5 ${
                      isWishlisted
                        ? 'fill-red-500 stroke-red-500'
                        : 'fill-none stroke-current'
                    }`}
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>

                  {isWishlisted ? 'Added to Wishlist' : 'Add to Wishlist'}
                </button> */}

              </div>
            </div>
          </div>

          {/* KEY SPECIFICATIONS */}
          <div className="mt-10">

            <h2 className="mb-4 text-lg font-bold text-[#06172E] sm:text-xl">
              Key Specifications
            </h2>

            <div className="divide-y divide-slate-200/80 overflow-hidden rounded-xl border border-slate-200/80 bg-[#fafbfe]">

              {specifications.map((spec) => (
                <div
                  key={spec.title}
                  className="grid grid-cols-12 items-center px-4 py-4 sm:px-5"
                >
                  <div className="col-span-5 flex items-center gap-2.5 text-xs font-medium text-slate-600 sm:text-sm">

                    <span className="h-5 w-5 shrink-0 text-[#06172E]">
                      {spec.icon}
                    </span>

                    <span>{spec.title}</span>
                  </div>

                  <div className="col-span-7 text-xs font-semibold text-[#06172E] sm:text-sm">
                    {spec.value}
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* EXPANDABLE ACCORDION SECTIONS */}
          <div className="mt-10">

            <h2 className="mb-4 text-lg font-bold text-[#06172E] sm:text-xl">
              Product Details
            </h2>

            <div className="divide-y divide-slate-200 overflow-hidden rounded-xl border border-slate-200 bg-white">

              {accordionSections.map((section) => {
                const isOpen = openAccordion === section.key;

                return (
                  <div key={section.key}>

                    <button
                      type="button"
                      onClick={() => toggleAccordion(section.key)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between px-4 py-4 text-left text-sm font-bold text-[#06172E] transition-colors hover:bg-slate-50 sm:px-5 sm:text-[15px]"
                    >
                      <span>{section.title}</span>

                      <svg
                        className={`h-4 w-4 shrink-0 text-[#06172E] transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>

                    {isOpen && (
                      <div className="bg-[#fafbfe] px-4 pb-4 pt-1 sm:px-5">

                        <ul className="space-y-3">
                          {section.items.map((detail, index) => (
                            <li
                              key={`${section.key}-${index}`}
                              className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-600 sm:text-sm"
                            >
                              <svg
                                className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                              >
                                <path d="m5 12 4 4L19 6" />
                              </svg>

                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>

                      </div>
                    )}

                  </div>
                );
              })}

            </div>
          </div>

        </div>

        {/* RELATED PRODUCTS SECTION - OUTSIDE MAIN CARD */}
        <section className="mt-12">

          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">

            <div>
              <span className="text-xs font-bold uppercase tracking-[2px] text-[#0866ff]">
                You May Also Like
              </span>

              <h2 className="mt-2 text-2xl font-extrabold text-[#06172E] sm:text-3xl">
                Related Products
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Explore more quality-checked smartphones.
              </p>
            </div>

            <Link
              href="/mobile-phones"
              className="text-sm font-bold text-[#0866ff] transition hover:text-[#0052d9]"
            >
              View All Phones →
            </Link>

          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

            {relatedProducts.map((item) => (
              <Link
                key={item.id}
                href={`/product/${item.id}`}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0866ff]/40 hover:shadow-xl"
              >

                {/* PRODUCT IMAGE */}
                <div className="relative flex h-[170px] items-center justify-center overflow-hidden bg-[#f5f7fb] p-4 sm:h-[220px]">

                  <span className="absolute left-3 top-3 z-10 rounded-full bg-white px-2.5 py-1 text-[10px] font-bold text-emerald-700 shadow-sm sm:text-xs">
                    {item.condition}
                  </span>

                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />

                </div>

                {/* PRODUCT INFORMATION */}
                <div className="p-3 sm:p-4">

                  <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 sm:text-xs">
                    {item.brand}
                  </p>

                  <h3 className="mt-1 line-clamp-2 min-h-[40px] text-sm font-bold text-[#06172E] transition group-hover:text-[#0866ff] sm:text-base">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-xs font-medium text-slate-500">
                    {item.ram} RAM · {item.storage}
                  </p>

                  <div className="mt-3 flex items-center justify-between gap-2 border-t border-slate-100 pt-3">

                    <span className="text-xs font-bold text-[#06172E] sm:text-sm">
                      Price on Request
                    </span>

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0866ff] text-white transition group-hover:bg-[#0052d9]">
                      →
                    </span>

                  </div>

                </div>

              </Link>
            ))}

          </div>
        </section>

      </div>

      {/* NOTIFY ME MODAL */}
      {notifyModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#06172E]/60 px-4 py-6 backdrop-blur-sm"
          onClick={() => setNotifyModalOpen(false)}
        >

          <div
            className="relative w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl sm:p-7"
            onClick={(e) => e.stopPropagation()}
          >

            {/* MODAL HEADER */}
            <div className="flex items-center justify-between gap-3">

              <h2 className="text-lg font-bold text-[#06172E] sm:text-xl">
                Get Price Notification
              </h2>

              <button
                type="button"
                onClick={() => setNotifyModalOpen(false)}
                aria-label="Close modal"
                className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-[#06172E]"
              >
                ✕
              </button>

            </div>

            {notifySubmitted ? (

              /* SUCCESS MESSAGE */
              <div className="py-9 text-center">

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <svg
                    className="h-7 w-7"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="m5 12 4 4L19 6" />
                  </svg>
                </div>

                <h3 className="mt-4 text-xl font-bold text-[#06172E]">
                  Request Received!
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  We will notify you as soon as admin pricing for{' '}
                  <strong className="text-[#06172E]">
                    {product.name}
                  </strong>{' '}
                  is live.
                </p>

              </div>

            ) : (

              /* NOTIFICATION FORM */
              <form onSubmit={handleNotifySubmit} className="mt-5">

                <p className="mb-5 text-sm leading-relaxed text-slate-500">
                  Enter your WhatsApp number or email to receive the best
                  quote for{' '}
                  <strong className="text-[#06172E]">
                    {product.name} ({product.storage})
                  </strong>.
                </p>

                <label
                  htmlFor="notifyContact"
                  className="mb-2 block text-sm font-semibold text-[#06172E]"
                >
                  WhatsApp Number / Email
                </label>

                <input
                  id="notifyContact"
                  type="text"
                  required
                  value={notifyContact}
                  onChange={(e) => setNotifyContact(e.target.value)}
                  placeholder="Enter phone number or email"
                  className="w-full rounded-xl border border-slate-200 px-3.5 py-3 text-sm text-[#06172E] outline-none transition focus:border-[#0866ff] focus:ring-2 focus:ring-[#0866ff]/10"
                />

                <button
                  type="submit"
                  className="mt-5 w-full rounded-xl bg-[#0866ff] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0052d9]"
                >
                  Notify Me When Priced
                </button>

                <p className="mt-3 text-center text-xs text-slate-400">
                  We will contact you when the price is available.
                </p>

              </form>

            )}

          </div>
        </div>
      )}

    </div>
  );
}
