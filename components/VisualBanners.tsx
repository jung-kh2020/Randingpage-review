import React from 'react';
import { IMAGES, TEXTS } from '../constants';

export const HeroOverlay: React.FC = () => {
  return (
    <section className="relative">
      <div 
        className="flex min-h-[480px] flex-col items-center justify-center gap-6 bg-cover bg-center bg-no-repeat p-5 text-center relative"
        style={{ 
          backgroundImage: `url("${IMAGES.heroOverlay}")`
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E2A4A]/40 to-[#1E2A4A]/80" />
        
        <div className="relative z-10 flex flex-col gap-4 max-w-[320px]">
          <h2 className="text-white text-4xl font-black leading-tight tracking-tight drop-shadow-lg">
            {TEXTS.bannerTitle}
          </h2>
          <p className="text-white text-base font-medium leading-relaxed drop-shadow-md">
            {TEXTS.bannerDesc}
          </p>
        </div>
      </div>
    </section>
  );
};

export const ComparisonGrid: React.FC = () => {
  return (
    <section className="py-12 px-5 bg-white">
      <div className="text-center mb-8">
        <h3 className="text-[#1E2A4A] text-[22px] font-bold leading-tight mb-3">
          {TEXTS.comparisonTitle}
        </h3>
        <p className="text-gray-500 text-base font-normal leading-relaxed whitespace-pre-line">
          {TEXTS.comparisonDesc}
        </p>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div 
          className="relative flex aspect-[4/3] flex-col justify-end rounded-2xl bg-cover bg-center overflow-hidden group"
          style={{ backgroundImage: `url("${IMAGES.busyStore}")` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <p className="relative z-10 text-white text-base font-bold p-4 leading-tight text-center">
            리뷰 많은 가게
          </p>
        </div>
        
        <div 
          className="relative flex aspect-[4/3] flex-col justify-end rounded-2xl bg-cover bg-center overflow-hidden group"
          style={{ backgroundImage: `url("${IMAGES.emptyStore}")` }}
        >
           <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <p className="relative z-10 text-white text-base font-bold p-4 leading-tight text-center">
            리뷰 없는 가게
          </p>
        </div>
      </div>
    </section>
  );
};