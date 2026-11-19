
"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import {
  BRANDS,
  PRICE_RANGES,
  CONDITIONS,
  RAM_OPTIONS,
  SAMPLE_PRODUCTS,
} from "../types/product";

import {  
  Heart,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  Smartphone,
  RotateCcw,
  ArrowUpDown,
  X,
  Search,
  PackageOpen,
} from "lucide-react";

export default function MobilePhonesCategoryPage() {
  // FILTER STATES
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedPrices, setSelectedPrices] = useState<string[]>([]);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [selectedRams, setSelectedRams] = useState<string[]>([]);

  // OTHER STATES
  const [sortBy, setSortBy] = useState<
    "latest" | "brand-asc" | "brand-desc"
  >("latest");

  const [wishlist, setWishlist] = useState<string[]>([]);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 8;

  // FILTER TOGGLE
  const toggleSelection = (
    value: string,
    currentList: string[],
    setter: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setter(
      currentList.includes(value)
        ? currentList.filter((item) => item !== value)
        : [...currentList, value]
    );

    setCurrentPage(1);
  };

  // MOBILE BRAND FILTER
  const handleMobileBrandSelect = (brand: string) => {
    setSelectedBrands(brand === "All" ? [] : [brand]);
    setCurrentPage(1);
  };

  // WISHLIST
  const toggleWishlist = (id: string) => {
    setWishlist((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  // RESET FILTERS
  const resetFilters = () => {
    setSelectedBrands([]);
    setSelectedPrices([]);
    setSelectedConditions([]);
    setSelectedRams([]);
    setSortBy("latest");
    setCurrentPage(1);
  };

  // FILTER AND SORT PRODUCTS
  const filteredProducts = useMemo(() => {
    const result = SAMPLE_PRODUCTS.filter((product) => {
      const matchBrand =
        selectedBrands.length === 0 ||
        selectedBrands.includes(product.brand);

      const matchPrice =
        selectedPrices.length === 0 ||
        selectedPrices.includes(product.priceRange);

      const matchCondition =
        selectedConditions.length === 0 ||
        selectedConditions.includes(product.condition);

      const matchRam =
        selectedRams.length === 0 ||
        selectedRams.includes(product.ram);

      return (
        matchBrand &&
        matchPrice &&
        matchCondition &&
        matchRam
      );
    });

    if (sortBy === "brand-asc") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortBy === "brand-desc") {
      result.sort((a, b) => b.name.localeCompare(a.name));
    }

    return result;
  }, [
    selectedBrands,
    selectedPrices,
    selectedConditions,
    selectedRams,
    sortBy,
  ]);

  // PAGINATION
  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / productsPerPage)
  );

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const activeFilterCount =
    selectedBrands.length +
    selectedPrices.length +
    selectedConditions.length +
    selectedRams.length;

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-[#06172E]">

      <div className="mx-auto max-w-[1380px] px-4 py-6 pb-14 sm:px-6">

        {/* MOBILE BRAND SLIDER */}
        <div className="mb-5 md:hidden">

          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-xs font-extrabold uppercase tracking-wider">
              Shop By Brand
            </h3>

            <span className="text-[11px] text-slate-400">
              Slide for more →
            </span>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

            <button
              type="button"
              onClick={() => handleMobileBrandSelect("All")}
              className={`shrink-0 rounded-full border px-4 py-2 text-xs font-bold transition ${
                selectedBrands.length === 0
                  ? "border-[#0866ff] bg-[#0866ff] text-white"
                  : "border-slate-200 bg-white text-[#06172E]"
              }`}
            >
              All Brands
            </button>

            {BRANDS.map((brand) => (
              <button
                key={brand}
                type="button"
                onClick={() => handleMobileBrandSelect(brand)}
                className={`shrink-0 rounded-full border px-4 py-2 text-xs font-bold transition ${
                  selectedBrands.includes(brand)
                    ? "border-[#0866ff] bg-[#0866ff] text-white"
                    : "border-slate-200 bg-white text-[#06172E]"
                }`}
              >
                {brand}
              </button>
            ))}

          </div>
        </div>

        {/* MAIN LAYOUT */}
        <div className="flex flex-col items-start gap-6 md:flex-row">

          {/* FILTER SIDEBAR */}
          <aside
            className={`${
              mobileFilterOpen ? "block" : "hidden"
            } w-full shrink-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:sticky md:top-24 md:block md:w-[245px]`}
          >

            {/* FILTER HEADER */}
            <div className="mb-5 flex items-center justify-between border-b border-slate-100 pb-4">

              <div className="flex items-center gap-2">
                <SlidersHorizontal size={18} />

                <h2 className="text-base font-extrabold">
                  Filters
                </h2>
              </div>

              <div className="flex items-center gap-3">

                <button
                  type="button"
                  onClick={resetFilters}
                  className="text-xs font-bold text-[#0866ff] hover:underline"
                >
                  Reset
                </button>

                <button
                  type="button"
                  onClick={() => setMobileFilterOpen(false)}
                  className="text-slate-400 md:hidden"
                  aria-label="Close filters"
                >
                  <X size={19} />
                </button>

              </div>

            </div>

            {/* BRAND FILTER */}
            <div className="mb-6 hidden md:block">

              <h3 className="mb-3 text-sm font-extrabold">
                Brand
              </h3>

              <ul className="space-y-3">

                {BRANDS.map((brand) => (
                  <li key={brand}>

                    <label className="flex cursor-pointer items-center gap-3 text-[13px] text-slate-600 hover:text-[#0866ff]">

                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() =>
                          toggleSelection(
                            brand,
                            selectedBrands,
                            setSelectedBrands
                          )
                        }
                        className="h-4 w-4 accent-[#0866ff]"
                      />

                      {brand}

                    </label>

                  </li>
                ))}

              </ul>
            </div>

            {/* PRICE FILTER */}
            <div className="mb-6 border-t border-slate-100 pt-5">

              <h3 className="mb-3 text-sm font-extrabold">
                Price Range
              </h3>

              <ul className="space-y-3">

                {PRICE_RANGES.map((range) => (
                  <li key={range.value}>

                    <label className="flex cursor-pointer items-center gap-3 text-[13px] text-slate-600 hover:text-[#0866ff]">

                      <input
                        type="checkbox"
                        checked={selectedPrices.includes(range.value)}
                        onChange={() =>
                          toggleSelection(
                            range.value,
                            selectedPrices,
                            setSelectedPrices
                          )
                        }
                        className="h-4 w-4 accent-[#0866ff]"
                      />

                      {range.label}

                    </label>

                  </li>
                ))}

              </ul>
            </div>

            {/* CONDITION FILTER */}
            <div className="mb-6 border-t border-slate-100 pt-5">

              <h3 className="mb-3 text-sm font-extrabold">
                Condition
              </h3>

              <ul className="space-y-3">

                {CONDITIONS.map((condition) => (
                  <li key={condition}>

                    <label className="flex cursor-pointer items-center gap-3 text-[13px] text-slate-600 hover:text-[#0866ff]">

                      <input
                        type="checkbox"
                        checked={selectedConditions.includes(condition)}
                        onChange={() =>
                          toggleSelection(
                            condition,
                            selectedConditions,
                            setSelectedConditions
                          )
                        }
                        className="h-4 w-4 accent-[#0866ff]"
                      />

                      {condition}

                    </label>

                  </li>
                ))}

              </ul>
            </div>

            {/* RAM FILTER */}
            <div className="border-t border-slate-100 pt-5">

              <h3 className="mb-3 text-sm font-extrabold">
                RAM
              </h3>

              <ul className="space-y-3">

                {RAM_OPTIONS.map((ram) => (
                  <li key={ram}>

                    <label className="flex cursor-pointer items-center gap-3 text-[13px] text-slate-600 hover:text-[#0866ff]">

                      <input
                        type="checkbox"
                        checked={selectedRams.includes(ram)}
                        onChange={() =>
                          toggleSelection(
                            ram,
                            selectedRams,
                            setSelectedRams
                          )
                        }
                        className="h-4 w-4 accent-[#0866ff]"
                      />

                      {ram}

                    </label>

                  </li>
                ))}

              </ul>
            </div>

            {/* MOBILE APPLY */}
            <button
              type="button"
              onClick={() => setMobileFilterOpen(false)}
              className="mt-6 h-11 w-full rounded-xl bg-[#0866ff] text-sm font-bold text-white md:hidden"
            >
              Show {filteredProducts.length} Products
            </button>

          </aside>

          {/* RIGHT PRODUCT SECTION */}
          <section className="min-w-0 flex-1 w-full">

            {/* HEADER BAR */}
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:px-5">

              <div>
                <h1 className="text-lg font-extrabold sm:text-xl">
                  Mobile Phones
                </h1>

                <p className="mt-1 text-xs text-slate-500">
                  Showing{" "}
                  <span className="font-bold text-[#0866ff]">
                    {filteredProducts.length}
                  </span>{" "}
                  results
                </p>
              </div>

              <div className="flex items-center gap-2">

                {/* MOBILE FILTER BUTTON */}
                <button
                  type="button"
                  onClick={() =>
                    setMobileFilterOpen((prev) => !prev)
                  }
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-[#06172E] transition hover:border-[#0866ff] md:hidden"
                >
                  <SlidersHorizontal size={15} />

                  Filters

                  {activeFilterCount > 0 && (
                    <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#0866ff] px-1 text-[10px] text-white">
                      {activeFilterCount}
                    </span>
                  )}
                </button>

                {/* SORT */}
                <div className="flex items-center gap-2">

                  <ArrowUpDown
                    size={15}
                    className="hidden text-slate-400 sm:block"
                  />

                  <select
                    id="sortSelect"
                    value={sortBy}
                    onChange={(e) => {
                      setSortBy(
                        e.target.value as
                          | "latest"
                          | "brand-asc"
                          | "brand-desc"
                      );
                      setCurrentPage(1);
                    }}
                    className="max-w-[145px] cursor-pointer rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-[#06172E] outline-none focus:border-[#0866ff] sm:max-w-none"
                  >
                    <option value="latest">Latest</option>
                    <option value="brand-asc">Brand: A to Z</option>
                    <option value="brand-desc">Brand: Z to A</option>
                  </select>

                </div>

              </div>
            </div>

            {/* ACTIVE FILTERS */}
            {activeFilterCount > 0 && (
              <div className="mb-4 flex flex-wrap items-center gap-2">

                <span className="text-xs font-bold text-slate-500">
                  Active filters:
                </span>

                {[
                  ...selectedBrands,
                  ...selectedPrices.map(
                    (price) =>
                      PRICE_RANGES.find((r) => r.value === price)?.label || price
                  ),
                  ...selectedConditions,
                  ...selectedRams,
                ].map((filter, index) => (
                  <span
                    key={`${filter}-${index}`}
                    className="rounded-full bg-blue-50 px-3 py-1.5 text-[11px] font-semibold text-[#0866ff]"
                  >
                    {filter}
                  </span>
                ))}

                <button
                  type="button"
                  onClick={resetFilters}
                  className="text-xs font-bold text-red-500 hover:underline"
                >
                  Clear All
                </button>

              </div>
            )}

            {/* PRODUCT GRID */}
            {filteredProducts.length === 0 ? (

              <div className="flex min-h-[380px] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-8 text-center">

                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-[#0866ff]">
                  <PackageOpen size={35} />
                </div>

                <h3 className="text-lg font-extrabold text-[#06172E]">
                  No Mobile Phones Found
                </h3>

                <p className="mt-2 max-w-xs text-sm text-slate-500">
                  We couldn't find any phones matching your selected filters.
                  Try changing your filters.
                </p>

                <button
                  type="button"
                  onClick={resetFilters}
                  className="mt-6 rounded-xl bg-[#0866ff] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0755d9]"
                >
                  Clear All Filters
                </button>

              </div>

            ) : (

              <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 xl:grid-cols-4">

                {paginatedProducts.map((product) => {

                  const isLiked = wishlist.includes(product.id);

                  return (

                    <article
                      key={product.id}
                      className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                    >

                      {/* PRODUCT IMAGE */}
                      <Link
                        href={`/product/${product.id}`}
                        className="relative flex h-[165px] items-center justify-center overflow-hidden bg-gradient-to-b from-[#f8faff] to-[#edf3fc] p-4 sm:h-[210px]"
                      >

                        <img
                          src={product.image}
                          alt={`${product.name} ${product.storage}`}
                          loading="lazy"
                          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => {
                            e.currentTarget.src =
                              "https://placehold.co/400x500/f1f5f9/64748b?text=Mobile+Phone";
                          }}
                        />

                        {/* CONDITION BADGE */}
                        <span className="absolute left-2 top-2 max-w-[calc(100%-3rem)] truncate rounded-full bg-green-50 px-2.5 py-1 text-[9px] font-extrabold text-green-700 sm:text-[10px]">
                          {product.condition}
                        </span>

                      </Link>

                      {/* WISHLIST */}
                      <button
                        type="button"
                        onClick={() => toggleWishlist(product.id)}
                        aria-label={
                          isLiked
                            ? "Remove from wishlist"
                            : "Add to wishlist"
                        }
                        aria-pressed={isLiked}
                        className="absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-[#06172E] shadow-md transition hover:scale-110"
                      >

                        <Heart
                          size={17}
                          className={
                            isLiked
                              ? "fill-red-500 text-red-500"
                              : "text-slate-500"
                          }
                        />

                      </button>

                      {/* PRODUCT DETAILS */}
                      <div className="p-3 sm:p-4">

                        <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-[#0866ff]">
                          {product.brand}
                        </p>

                        <Link href={`/product/${product.id}`}>
                          <h3 className="truncate text-sm font-extrabold text-[#06172E] transition hover:text-[#0866ff] sm:text-base">
                            {product.name}
                          </h3>
                        </Link>

                        <p className="mt-1 text-[11px] font-medium text-slate-500">
                          {product.storage} Storage
                        </p>

                        {/* SPECS */}
                        <div className="mt-3 flex flex-wrap gap-1.5">

                          <span className="rounded-md bg-slate-100 px-2 py-1 text-[9px] font-semibold text-slate-600 sm:text-[10px]">
                            {product.ram} RAM
                          </span>

                          <span className="rounded-md bg-slate-100 px-2 py-1 text-[9px] font-semibold text-slate-600 sm:text-[10px]">
                            {product.condition === "Supermint (A+)"
                              ? "A+ Grade"
                              : product.condition === "Mint (A)"
                                ? "A Grade"
                                : "Good Grade"}
                          </span>

                        </div>

                        {/* PRICE */}
                        <div className="mt-4 border-t border-slate-100 pt-3">

                          <div className="flex flex-col">

                            <span className="text-sm font-black text-[#06172E] sm:text-base">
                              Price on Request
                            </span>

                            <span className="mt-1 text-[10px] text-slate-400">
                              Contact us for best price
                            </span>

                          </div>

                          {/* VIEW DETAILS */}
                          <Link
                            href={`/product/${product.id}`}
                            className="mt-3 flex h-9 w-full items-center justify-center rounded-lg bg-[#0866ff] text-[11px] font-extrabold text-white transition hover:bg-[#0755d9] sm:h-10 sm:text-xs"
                          >
                            View Details
                          </Link>

                        </div>

                      </div>

                    </article>

                  );

                })}

              </div>

            )}

            {/* PAGINATION */}
            {filteredProducts.length > 0 && (

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-4">

                <p className="text-xs font-medium text-slate-500">
                  Showing{" "}
                  <span className="font-bold text-[#06172E]">
                    {(currentPage - 1) * productsPerPage + 1}
                  </span>
                  {" - "}
                  <span className="font-bold text-[#06172E]">
                    {Math.min(
                      currentPage * productsPerPage,
                      filteredProducts.length
                    )}
                  </span>
                  {" of "}
                  <span className="font-bold text-[#06172E]">
                    {filteredProducts.length}
                  </span>
                  {" products"}
                </p>

                <div className="flex items-center gap-2">

                  <button
                    type="button"
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    aria-label="Previous page"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-[#06172E] transition hover:border-[#0866ff] hover:text-[#0866ff] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <ChevronLeft size={17} />
                  </button>

                  {Array.from(
                    { length: totalPages },
                    (_, index) => index + 1
                  ).map((page) => (

                    <button
                      key={page}
                      type="button"
                      onClick={() => goToPage(page)}
                      aria-current={
                        currentPage === page ? "page" : undefined
                      }
                      className={`flex h-9 w-9 items-center justify-center rounded-lg border text-xs font-bold transition ${
                        currentPage === page
                          ? "border-[#0866ff] bg-[#0866ff] text-white"
                          : "border-slate-200 bg-white text-[#06172E] hover:border-[#0866ff] hover:text-[#0866ff]"
                      }`}
                    >
                      {page}
                    </button>

                  ))}

                  <button
                    type="button"
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    aria-label="Next page"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-[#06172E] transition hover:border-[#0866ff] hover:text-[#0866ff] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <ChevronRight size={17} />
                  </button>

                </div>

              </div>

            )}

          </section>

        </div>

      </div>

    </div>
  );
}
