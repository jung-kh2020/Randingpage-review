import React from 'react';
import { Search, Map, MessageSquare, Store } from 'lucide-react';
import { ProcessStep } from '../types';
import { TEXTS } from '../constants';

const STEPS: ProcessStep[] = [
  {
    id: 1,
    title: "1. 검색",
    description: "'강남역 맛집' 등 키워드로 가게 탐색",
    icon: Search
  },
  {
    id: 2,
    title: "2. 지도",
    description: "지도에서 가게 위치와 정보 확인",
    icon: Map
  },
  {
    id: 3,
    title: "3. 리뷰",
    description: "방문자 리뷰와 별점으로 신뢰도 판단",
    icon: MessageSquare
  },
  {
    id: 4,
    title: "4. 방문",
    description: "긍정적인 경험을 기대하며 가게 방문",
    icon: Store
  }
];

export const ProcessFlow: React.FC = () => {
  return (
    <section className="py-12 px-5 bg-[#F2F4F7]">
      <div className="text-center mb-10">
        <h2 className="text-[#1E2A4A] text-[28px] font-black leading-tight whitespace-pre-line mb-4">
          {TEXTS.heroTitle}
        </h2>
        <p className="text-gray-600 text-base whitespace-pre-line leading-relaxed">
          {TEXTS.heroDesc}
        </p>
      </div>

      <div className="space-y-2 relative">
        {STEPS.map((step, index) => (
          <div key={step.id} className="relative">
            <div className="flex items-center gap-4 z-10 relative">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#03C75A] text-white shadow-md">
                <step.icon size={28} strokeWidth={2.5} />
              </div>
              <div className="flex-grow py-2">
                <h3 className="text-[#1E2A4A] text-lg font-bold">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </div>
            
            {/* Connecting dotted line */}
            {index !== STEPS.length - 1 && (
              <div className="absolute left-[27px] top-14 bottom-0 h-8 w-[2px] border-l-2 border-dashed border-gray-300 -mb-2" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};