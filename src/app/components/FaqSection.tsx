"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqCategory = "buy" | "sell-bid" | "payments-emi";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: Record<FaqCategory, FaqItem[]> = {
  buy: [
    {
      id: "buy-1",
      question: "How does BidMax help me find the best mobile deal near me?",
      answer:
        "BidMax lets you search by phone model and your 6-digit PIN code to compare live prices, freebies, and stock across participating local mobile retailers in your area—covering both new/sealed-pack and second-hand phones.",
    },
    {
      id: "buy-2",
      question: "Are both new/sealed-pack and second-hand phones available on BidMax?",
      answer:
        "Yes. Participating local dealers list brand-new sealed-pack smartphones alongside quality-checked second-hand phones with clear condition details so you can compare all options in one place.",
    },
    {
      id: "buy-3",
      question: "Can I inspect the phone before buying?",
      answer:
        "Yes. Once you compare offers and contact or visit your chosen local retailer, you can inspect the sealed box or second-hand device in person at the store before completing your purchase.",
    },
    {
      id: "buy-4",
      question: "What if my PIN code or desired phone model is not listed yet?",
      answer:
        "BidMax is expanding PIN code by PIN code with trusted local dealers. If your exact model isn't visible yet, use the Bid / Request Quote option to notify nearby participating retailers of your requirement.",
    },
    {
      id: "buy-5",
      question: "How do I contact a participating retailer?",
      answer:
        "Each dealer listing includes direct Call and WhatsApp buttons along with the store address so you can confirm stock, color availability, and store timings before visiting.",
    },
  ],
  "sell-bid": [
    {
      id: "sb-1",
      question: "What does BUY • SELL • BID mean on BidMax?",
      answer:
        "BUY lets you compare local dealer prices for new and second-hand phones, SELL helps you connect with participating local buyers for your old phone, and BID lets nearby retailers compete with their best quote for the phone you want.",
    },
    {
      id: "sb-2",
      question: "How does the Bid / Request Best Price feature work?",
      answer:
        "Submit your desired phone model, storage variant, condition preference (new or second-hand), and PIN code. Participating retailers in your area receive your inquiry and share their best store offers directly with you.",
    },
    {
      id: "sb-3",
      question: "What documents are needed when selling or exchanging a second-hand phone at a store?",
      answer:
        "Participating retailers typically require a valid government-issued photo ID (such as Aadhaar, Voter ID, or Driving Licence) along with the original purchase invoice or box if available.",
    },
    {
      id: "sb-4",
      question: "Is there any fee for buyers to compare prices or request bids?",
      answer:
        "No. Searching models by PIN code, comparing retailer offers, and sending inquiries to participating dealers on BidMax is completely free for buyers.",
    },
  ],
  "payments-emi": [
    {
      id: "pe-1",
      question: "Do I pay BidMax online for my mobile phone?",
      answer:
        "No. BidMax operates as a marketplace and lead-generation platform and does not collect the phone purchase price. You pay the participating retailer directly at their store via cash, UPI, card, or authorized finance.",
    },
    {
      id: "pe-2",
      question: "Does BidMax provide EMI or mobile loans directly?",
      answer:
        "No. BidMax is not a lender or finance company. All EMI applications, customer eligibility checks, KYC verification, loan approvals, and disbursements are handled exclusively by authorized finance companies and their representatives at the store.",
    },
    {
      id: "pe-3",
      question: "How can I check if in-store EMI is available on a phone?",
      answer:
        "Retailer offer cards on BidMax indicate whether authorized finance partner EMI is supported at that store. You can call or WhatsApp the dealer directly to check eligible schemes and required KYC documents.",
    },
    {
      id: "pe-4",
      question: "Who issues the GST invoice and warranty for my phone?",
      answer:
        "Your purchase invoice and applicable brand or store warranty are issued directly by the participating retailer from whom you buy the phone.",
    },
  ],
};

const tabs: { id: FaqCategory; label: string }[] = [
  { id: "buy", label: "Buy Phones" },
  { id: "sell-bid", label: "Sell / Bid" },
  { id: "payments-emi", label: "Payments & EMI" },
];

export default function FaqSection() {
  const [activeTab, setActiveTab] = useState<FaqCategory>("buy");
  const [openId, setOpenId] = useState<string | null>("buy-1");

  const currentFaqs = faqData[activeTab];

  const handleTabChange = (tabId: FaqCategory) => {
    setActiveTab(tabId);
    setOpenId(faqData[tabId][0]?.id ?? null);
  };

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Top Header Row: Left Title + Right Category Pills (Matches Screenshot) */}
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <h2 className="text-xl font-extrabold tracking-tight text-[#06172E] sm:text-2xl">
            Frequently Asked Questions
          </h2>

          <div className="flex flex-wrap items-center gap-2">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleTabChange(tab.id)}
                  className={`rounded-lg px-4 py-2 text-xs sm:text-sm font-bold transition-all ${
                    isActive
                      ? "bg-[#E9ECEF] text-[#06172E]"
                      : "bg-transparent text-slate-500 hover:bg-slate-100 hover:text-[#06172E]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Clean Bottom-Border Accordion List (Matches Screenshot) */}
        <div className="divide-y divide-slate-200 border-b border-slate-200">
          {currentFaqs.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="py-5">
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="text-sm sm:text-[15.5px] font-bold text-[#06172E] transition-colors hover:text-[#0866FF]">
                    {item.question}
                  </span>

                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-slate-600 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#0866FF]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <p className="mt-3 max-w-4xl text-xs sm:text-sm leading-relaxed text-slate-600">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
