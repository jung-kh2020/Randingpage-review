import React from 'react';
import { Eye, TrendingUp, CheckCircle2 } from 'lucide-react';
import { TEXTS } from '../constants';
import { StatItem, BenefitItem } from '../types';

const STATS: StatItem[] = [
  {
    title: "네이버 노출 증가",
    description: "리뷰가 많을수록 검색 결과 상위에 노출됩니다.",
    percentage: 85,
    icon: Eye
  },
  {
    title: "방문 전환율 30% 상승",
    description: "긍정적인 리뷰는 고객의 방문 결정을 이끌어냅니다.",
    percentage: 30,
    icon: TrendingUp
  }
];

const BENEFITS: BenefitItem[] = [
  {
    title: "신규 고객 유입 증가",
    description: "높은 평점과 긍정적 리뷰는 새로운 고객을 끌어당기는 자석입니다."
  },
  {
    title: "단골 고객 확보",
    description: "리뷰에 정성껏 단 댓글은 고객 감동으로 이어져 재방문을 유도합니다."
  },
  {
    title: "가게 신뢰도 상승",
    description: "투명한 리뷰 관리는 고객에게 우리 가게의 자신감과 신뢰를 보여줍니다."
  }
];

export const StatsSection: React.FC = () => {
  return (
    <section className="py-12 px-5 bg-white">
      <div className="text-center mb-8">
        <h3 className="text-[#1E2A4A] text-[22px] font-bold leading-tight mb-2">
          {TEXTS.statsTitle}
        </h3>
        <p className="text-gray-500 text-base font-normal">
          {TEXTS.statsDesc}
        </p>
      </div>

      <div className="space-y-6">
        {STATS.map((stat, idx) => (
          <div key={idx} className="bg-[#F2F4F7] p-6 rounded-2xl">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex items-center justify-center bg-[#03C75A]/10 text-[#03C75A] rounded-full w-12 h-12 shrink-0">
                <stat.icon size={24} strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-[#1E2A4A] text-lg font-bold">{stat.title}</p>
                <p className="text-gray-500 text-sm mt-1">{stat.description}</p>
              </div>
            </div>
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
              <div 
                className="bg-[#03C75A] h-2.5 rounded-full transition-all duration-1000 ease-out" 
                style={{ width: `${stat.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const BenefitsSection: React.FC = () => {
  return (
    <section className="py-12 px-5 bg-white">
      <h3 className="text-[#1E2A4A] text-[22px] font-bold leading-tight mb-8 text-center">
        {TEXTS.benefitsTitle}
      </h3>
      <div className="space-y-8">
        {BENEFITS.map((benefit, idx) => (
          <div key={idx} className="flex items-start gap-4">
             <div className="shrink-0 pt-1">
               <CheckCircle2 className="text-[#03C75A]" size={28} strokeWidth={2.5} />
             </div>
            <div>
              <h4 className="text-[#1E2A4A] font-bold text-lg">{benefit.title}</h4>
              <p className="text-gray-600 text-base mt-1 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};