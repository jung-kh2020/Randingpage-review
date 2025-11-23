import React from 'react';
import { TEXTS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <section className="py-16 px-5 bg-[#1E2A4A] text-center">
      <h3 className="text-white text-2xl font-bold leading-tight mb-4">
        {TEXTS.ctaTitle}
      </h3>
      <p className="text-gray-300 mb-10 text-base leading-relaxed whitespace-pre-line">
        {TEXTS.ctaDesc}
      </p>
      <button className="w-full max-w-[320px] mx-auto h-14 bg-[#03C75A] hover:bg-[#02b04e] active:scale-95 transition-all text-[#1E2A4A] text-lg font-bold rounded-xl shadow-lg shadow-green-900/20 flex items-center justify-center">
        {TEXTS.ctaButton}
      </button>
      
      <div className="mt-12 text-gray-500 text-xs">
        &copy; 2024 Review Project. All rights reserved.
      </div>
    </section>
  );
};