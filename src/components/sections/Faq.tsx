"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqList } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First question open by default

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-20 md:py-28 max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <Reveal>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--cyan-soft)] text-[var(--cyan)] border border-[rgba(34,211,238,0.3)] text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tanya Jawab</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-1)] mb-3">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-2)]">
            Semua yang perlu kamu ketahui tentang fitur, keamanan, dan implementasi TalentaCloud.
          </p>
        </Reveal>
      </div>

      <div className="space-y-3">
        {faqList.map((item, idx) => {
          const isOpen = openIndex === idx;

          return (
            <Reveal key={idx} delay={idx * 50}>
              <div
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? "bg-[var(--surface-2)] border-[var(--border-accent)]"
                    : "bg-[var(--surface-1)] border-[var(--border-1)] hover:border-[var(--border-2)]"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus-visible:outline-2 focus-visible:outline-[var(--cyan)] focus-visible:outline-offset-2 rounded-2xl"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  id={`faq-question-${idx}`}
                >
                  <span className="text-sm sm:text-base font-semibold text-[var(--text-1)]">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[var(--cyan)] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    role="region"
                    aria-labelledby={`faq-question-${idx}`}
                    className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[var(--text-2)] leading-relaxed border-t border-[var(--border-1)]/40"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
