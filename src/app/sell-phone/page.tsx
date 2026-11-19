
"use client";

import React, { useState, useRef } from "react";
import {
  Plus,
  X,
  CheckCircle2,
  ChevronDown,
  Smartphone,
  ShieldCheck,
  Sparkles,
  Camera,
  Upload,
  ArrowRight,
  Image as ImageIcon,
} from "lucide-react";

type PhotoSideKey =
  | "frontScreen"
  | "backSide"
  | "chargerSide"
  | "topSide";

interface PhotoSlotConfig {
  key: PhotoSideKey;
  label: string;
  hint: string;
}

const PHOTO_SLOTS: PhotoSlotConfig[] = [
  {
    key: "frontScreen",
    label: "Front Screen",
    hint: "Display view",
  },
  {
    key: "backSide",
    label: "Back Side",
    hint: "Rear & camera",
  },
  {
    key: "chargerSide",
    label: "Bottom Side",
    hint: "Charging port",
  },
  {
    key: "topSide",
    label: "Top Side",
    hint: "Top frame",
  },
];

const BRAND_MODELS: Record<string, string[]> = {
  Apple: [
    "iPhone 15 Pro Max",
    "iPhone 15",
    "iPhone 14 Pro Max",
    "iPhone 14",
    "iPhone 13",
    "iPhone 12",
  ],
  Samsung: [
    "Galaxy S24 Ultra",
    "Galaxy S23",
    "Galaxy A54 5G",
    "Galaxy M34 5G",
    "Galaxy Z Flip 5",
  ],
  OnePlus: [
    "OnePlus 12",
    "OnePlus 11",
    "OnePlus Nord CE 4",
    "OnePlus 10R",
  ],
  Vivo: [
    "Vivo X100",
    "Vivo V29 Pro",
    "Vivo T3 5G",
    "Vivo Y200",
  ],
  Oppo: [
    "Oppo Reno 11 Pro",
    "Oppo Reno 10 Pro",
    "Oppo F25 Pro",
    "Oppo A79",
  ],
  Realme: [
    "Realme GT 2",
    "Realme 12 Pro+",
    "Realme Narzo 70 Pro",
  ],
  Xiaomi: [
    "Xiaomi 14",
    "Xiaomi 13 Pro",
    "Redmi Note 13 Pro+",
    "POCO X6 Pro",
  ],
};

const RAM_STORAGE_OPTIONS = [
  "4GB / 64GB",
  "4GB / 128GB",
  "6GB / 128GB",
  "8GB / 128GB",
  "8GB / 256GB",
  "12GB / 256GB",
  "12GB / 512GB",
];

const CONDITION_OPTIONS = [
  "Supermint (A+) - Like New",
  "Mint (A) - Lightly Used",
  "Good Condition - Minor Scratches",
  "Broken / Screen Issue",
];

interface SellFormData {
  brand: string;
  model: string;
  ramStorage: string;
  condition: string;
  description: string;
}

const initialFormState: SellFormData = {
  brand: "",
  model: "",
  ramStorage: "",
  condition: "",
  description: "",
};

export default function SellPhonePage() {
  const [formData, setFormData] =
    useState<SellFormData>(initialFormState);

  const [photoPreviews, setPhotoPreviews] = useState<
    Record<PhotoSideKey, string | null>
  >({
    frontScreen: null,
    backSide: null,
    chargerSide: null,
    topSide: null,
  });

  const [photoFiles, setPhotoFiles] = useState<
    Record<PhotoSideKey, File | null>
  >({
    frontScreen: null,
    backSide: null,
    chargerSide: null,
    topSide: null,
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fileInputRefs = useRef<
    Record<PhotoSideKey, HTMLInputElement | null>
  >({
    frontScreen: null,
    backSide: null,
    chargerSide: null,
    topSide: null,
  });

  const bulkInputRef = useRef<HTMLInputElement | null>(null);

  const uploadedCount = Object.values(photoFiles).filter(Boolean).length;

  const handleSinglePhotoChange = (
    side: PhotoSideKey,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setErrorMessage("Please select a valid image.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setErrorMessage("Each image must be smaller than 5MB.");
      return;
    }

    const previewUrl = URL.createObjectURL(file);

    setPhotoPreviews((prev) => ({
      ...prev,
      [side]: previewUrl,
    }));

    setPhotoFiles((prev) => ({
      ...prev,
      [side]: file,
    }));

    setErrorMessage("");
    e.target.value = "";
  };

  const handleBulkPhotoUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = Array.from(e.target.files || []);

    if (!files.length) return;

    const updatedPreviews = { ...photoPreviews };
    const updatedFiles = { ...photoFiles };

    const availableSlots = PHOTO_SLOTS.filter(
      (slot) => !updatedPreviews[slot.key]
    );

    for (let i = 0; i < files.length; i++) {
      if (i >= availableSlots.length) break;

      const file = files[i];

      if (!file.type.startsWith("image/") ||
          file.size > 5 * 1024 * 1024) {
        continue;
      }

      const side = availableSlots[i].key;

      updatedPreviews[side] = URL.createObjectURL(file);
      updatedFiles[side] = file;
    }

    setPhotoPreviews(updatedPreviews);
    setPhotoFiles(updatedFiles);
    setErrorMessage("");
    e.target.value = "";
  };

  const removePhoto = (side: PhotoSideKey) => {
    if (photoPreviews[side]) {
      URL.revokeObjectURL(photoPreviews[side]!);
    }

    setPhotoPreviews((prev) => ({
      ...prev,
      [side]: null,
    }));

    setPhotoFiles((prev) => ({
      ...prev,
      [side]: null,
    }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "brand" ? { model: "" } : {}),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (uploadedCount !== 4) {
      setErrorMessage(
        `Please upload all 4 required photos (${uploadedCount}/4 uploaded).`
      );
      return;
    }

    setErrorMessage("");
    setIsSubmitting(true);

    try {
      // Connect your actual API here.
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSubmitted(true);
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    Object.values(photoPreviews).forEach((url) => {
      if (url) URL.revokeObjectURL(url);
    });

    setFormData(initialFormState);

    setPhotoPreviews({
      frontScreen: null,
      backSide: null,
      chargerSide: null,
      topSide: null,
    });

    setPhotoFiles({
      frontScreen: null,
      backSide: null,
      chargerSide: null,
      topSide: null,
    });

    setIsSubmitted(false);
    setErrorMessage("");
  };

  const availableModels = formData.brand
    ? BRAND_MODELS[formData.brand] || []
    : [];

  const selectClass =
    "w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 pr-10 text-sm font-semibold text-[#06172E] outline-none transition-all focus:border-[#0866FF] focus:ring-4 focus:ring-blue-500/10";

  const labelClass =
    "mb-2 block text-sm font-bold text-[#10213D]";

  return (
    <main className="min-h-screen bg-[#F4F7FC] text-[#06172E]">

      {/* ================= HERO SECTION ================= */}

      <section className="relative h-auto min-h-[350px] w-full overflow-hidden bg-gradient-to-r from-[#06172E] via-[#092752] to-[#0866FF]">

        <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-blue-500/30 blur-3xl" />

        <div className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="relative mx-auto flex min-h-[350px] max-w-[1440px] items-center justify-between gap-8 px-5 py-12 sm:px-8 lg:px-12">

          {/* LEFT CONTENT */}

          <div className="relative z-10 max-w-xl text-white">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-wider text-blue-100 backdrop-blur-md">

              <Sparkles className="h-4 w-4 text-amber-300" />

              BidMax Instant Phone Listing

            </div>

            <h1 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">

              Sell Your Old Phone for the{" "}

              <span className="text-amber-300">
                Best Live Bid
              </span>

            </h1>

            <p className="mt-4 max-w-lg text-sm leading-7 text-blue-100/90 sm:text-base">

              Upload 4 clear side views of your smartphone.
              Get verified quotes from trusted local dealers
              and enjoy a hassle-free selling experience.

            </p>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-xs font-bold text-blue-100 sm:text-sm">

              <span className="flex items-center gap-2">

                <ShieldCheck className="h-5 w-5 text-emerald-400" />

                100% Safe & Verified

              </span>

              <span className="flex items-center gap-2">

                <Smartphone className="h-5 w-5 text-amber-300" />

                4-Side Inspection

              </span>

            </div>

          </div>

          {/* RIGHT PHONE IMAGES */}

          <div className="relative hidden h-[290px] w-[42%] items-center justify-end md:flex">

            <div className="absolute right-20 top-5 h-56 w-56 rounded-full bg-blue-400/20 blur-3xl" />

            <img
              src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500&q=85"
              alt="Smartphone front display"
              className="relative z-10 h-[235px] w-auto -rotate-12 rounded-[28px] border-4 border-white/20 object-cover shadow-2xl transition duration-500 hover:-translate-y-3"
            />

            <img
              src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&q=85"
              alt="Smartphone rear camera"
              className="relative z-20 -ml-10 h-[265px] w-auto rotate-6 rounded-[28px] border-4 border-white/20 object-cover shadow-2xl transition duration-500 hover:-translate-y-3"
            />

          </div>

        </div>
      </section>

      {/* ================= MAIN FORM ================= */}

      <section className="relative mx-auto max-w-[850px] px-4 py-10 sm:px-6 sm:py-14">

        <div className="overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-[0_15px_55px_rgba(6,23,46,0.08)]">

          {/* FORM HEADER */}

          <div className="border-b border-slate-100 px-5 py-6 sm:px-9 sm:py-8">

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#0866FF]">

                <Smartphone className="h-6 w-6" />

              </div>

              <div>

                <h2 className="text-xl font-black text-[#06172E] sm:text-2xl">
                  List Your Phone
                </h2>

                <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                  Sell your old phone in just a few steps.
                </p>

              </div>

            </div>

          </div>

          {isSubmitted ? (

            /* SUCCESS SCREEN */

            <div className="px-6 py-16 text-center sm:px-10">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50">

                <CheckCircle2 className="h-11 w-11 text-emerald-500" />

              </div>

              <h2 className="mt-6 text-2xl font-black text-[#06172E]">
                Phone Listed Successfully!
              </h2>

              <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-500">

                Your <strong>{formData.brand} {formData.model}</strong>{" "}
                ({formData.ramStorage}) has been submitted.
                Admin pricing approval will appear shortly.

              </p>

              <button
                type="button"
                onClick={resetForm}
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0866FF] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-700"
              >
                List Another Phone
                <ArrowRight className="h-4 w-4" />
              </button>

            </div>

          ) : (

            <form onSubmit={handleSubmit}>

              <div className="space-y-8 px-5 py-7 sm:px-9 sm:py-9">

                {/* ================= PHOTO UPLOAD ================= */}

                <div>

                  <div className="mb-4 flex flex-wrap items-center justify-between gap-3">

                    <div>

                      <h3 className="text-base font-extrabold text-[#06172E]">
                        Phone Photos
                      </h3>

                      <p className="mt-1 text-xs text-slate-500">
                        Upload all four sides of your phone.
                      </p>

                    </div>

                    <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-extrabold text-[#0866FF]">
                      {uploadedCount}/4 Uploaded
                    </span>

                  </div>

                  {/* PROGRESS */}

                  <div className="mb-5 h-2 overflow-hidden rounded-full bg-slate-100">

                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500"
                      style={{
                        width: `${(uploadedCount / 4) * 100}%`,
                      }}
                    />

                  </div>

                  {/* PHOTO GRID */}

                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">

                    {PHOTO_SLOTS.map((slot) => {

                      const preview = photoPreviews[slot.key];

                      return (

                        <div key={slot.key}>

                          <input
                            ref={(el) => {
                              fileInputRefs.current[slot.key] = el;
                            }}
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                              handleSinglePhotoChange(slot.key, e)
                            }
                            className="hidden"
                          />

                          {preview ? (

                            <div className="group relative h-[135px] overflow-hidden rounded-2xl border border-blue-200 bg-slate-50">

                              <img
                                src={preview}
                                alt={slot.label}
                                className="h-full w-full object-cover"
                              />

                              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-2 pb-2 pt-8">

                                <p className="text-center text-xs font-bold text-white">
                                  {slot.label}
                                </p>

                              </div>

                              <button
                                type="button"
                                onClick={() => removePhoto(slot.key)}
                                aria-label={`Remove ${slot.label}`}
                                className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-white shadow-md transition hover:bg-red-600"
                              >
                                <X className="h-4 w-4" />
                              </button>

                            </div>

                          ) : (

                            <button
                              type="button"
                              onClick={() =>
                                fileInputRefs.current[slot.key]?.click()
                              }
                              className="flex h-[135px] w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-[#F8FAFF] px-2 text-center transition hover:border-[#0866FF] hover:bg-blue-50"
                            >

                              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#0866FF]">

                                <Camera className="h-5 w-5" />

                              </div>

                              <span className="text-xs font-extrabold text-[#06172E]">
                                {slot.label}
                              </span>

                              <span className="mt-1 text-[10px] font-medium text-slate-400">
                                {slot.hint}
                              </span>

                            </button>

                          )}

                        </div>

                      );

                    })}

                  </div>

                  {/* BULK UPLOAD */}

                  <input
                    ref={bulkInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleBulkPhotoUpload}
                    className="hidden"
                  />

                  <button
                    type="button"
                    onClick={() => bulkInputRef.current?.click()}
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-blue-200 bg-blue-50/70 px-4 py-4 text-sm font-extrabold text-[#0866FF] transition hover:border-blue-400 hover:bg-blue-100"
                  >

                    <Plus className="h-5 w-5" />

                    Add Photos ({uploadedCount}/4 Photos Required)

                  </button>

                  <p className="mt-2 text-center text-[11px] text-slate-400">
                    JPG, PNG or WEBP · Maximum 5MB per image
                  </p>

                </div>

                {/* ERROR MESSAGE */}

                {errorMessage && (

                  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
                    {errorMessage}
                  </div>

                )}

                {/* ================= PHONE DETAILS ================= */}

                <div>

                  <div className="mb-5">

                    <h3 className="text-base font-extrabold text-[#06172E]">
                      Phone Information
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      Enter your smartphone details accurately.
                    </p>

                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                    {/* BRAND */}

                    <div>

                      <label htmlFor="brand" className={labelClass}>
                        Brand <span className="text-red-500">*</span>
                      </label>

                      <div className="relative">

                        <select
                          id="brand"
                          name="brand"
                          required
                          value={formData.brand}
                          onChange={handleInputChange}
                          className={selectClass}
                        >

                          <option value="">Select Brand</option>

                          {Object.keys(BRAND_MODELS).map((brand) => (
                            <option key={brand} value={brand}>
                              {brand}
                            </option>
                          ))}

                        </select>

                        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                      </div>

                    </div>

                    {/* MODEL */}

                    <div>

                      <label htmlFor="model" className={labelClass}>
                        Model <span className="text-red-500">*</span>
                      </label>

                      <div className="relative">

                        <select
                          id="model"
                          name="model"
                          required
                          disabled={!formData.brand}
                          value={formData.model}
                          onChange={handleInputChange}
                          className={`${selectClass} disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400`}
                        >

                          <option value="">
                            {formData.brand
                              ? "Select Model"
                              : "Select Brand First"}
                          </option>

                          {availableModels.map((model) => (
                            <option key={model} value={model}>
                              {model}
                            </option>
                          ))}

                        </select>

                        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                      </div>

                    </div>

                    {/* RAM STORAGE */}

                    <div>

                      <label htmlFor="ramStorage" className={labelClass}>
                        RAM / Storage <span className="text-red-500">*</span>
                      </label>

                      <div className="relative">

                        <select
                          id="ramStorage"
                          name="ramStorage"
                          required
                          value={formData.ramStorage}
                          onChange={handleInputChange}
                          className={selectClass}
                        >

                          <option value="">Select RAM / Storage</option>

                          {RAM_STORAGE_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}

                        </select>

                        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                      </div>

                    </div>

                    {/* CONDITION */}

                    <div>

                      <label htmlFor="condition" className={labelClass}>
                        Condition <span className="text-red-500">*</span>
                      </label>

                      <div className="relative">

                        <select
                          id="condition"
                          name="condition"
                          required
                          value={formData.condition}
                          onChange={handleInputChange}
                          className={selectClass}
                        >

                          <option value="">Select Condition</option>

                          {CONDITION_OPTIONS.map((cond) => (
                            <option key={cond} value={cond}>
                              {cond}
                            </option>
                          ))}

                        </select>

                        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                      </div>

                    </div>

                  </div>

                </div>

                {/* ================= DESCRIPTION ================= */}

                <div>

                  <label htmlFor="description" className={labelClass}>
                    Additional Description
                    <span className="ml-2 font-medium text-slate-400">
                      (Optional)
                    </span>
                  </label>

                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your phone, battery health, accessories, scratches or any other details..."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-medium text-[#06172E] outline-none transition placeholder:text-slate-400 focus:border-[#0866FF] focus:ring-4 focus:ring-blue-500/10"
                  />

                </div>

                {/* ================= SUBMIT BUTTON ================= */}

                <div className="border-t border-slate-100 pt-6">

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0866FF] to-[#2455D6] px-6 py-4 text-sm font-extrabold text-white shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/25 disabled:cursor-not-allowed disabled:opacity-60"
                  >

                    {isSubmitting ? (
                      <>
                        <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Submitting Listing...
                      </>
                    ) : (
                      <>
                        Submit Phone Listing
                        <ArrowRight className="h-5 w-5" />
                      </>
                    )}

                  </button>

                  {/* BOTTOM NOTICE */}

                  <div className="mt-5 flex flex-col items-center justify-center gap-2 text-center">

                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-600">

                      <CheckCircle2 className="h-4 w-4" />

                      Your listing will be submitted for review!

                    </div>

                    <p className="text-[11px] font-medium text-slate-400">
                      Final selling price will be displayed after admin approval.
                    </p>

                  </div>

                </div>

              </div>

            </form>

          )}

        </div>

      </section>

    </main>
  );
}
