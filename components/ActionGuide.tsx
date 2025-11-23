import React from 'react';
import { TEXTS } from '../constants';
import { ActionStep } from '../types';

const STEPS: ActionStep[] = [
  {
    step: "Step 1. 직원 교육하기",
    title: "친절한 응대와 리뷰 요청 멘트",
    content: "\"맛있게 식사하셨나요? 괜찮으시다면 잠시 시간 내어 네이버 리뷰를 남겨주시면 큰 힘이 됩니다!\"",
    isQuote: true
  },
  {
    step: "Step 2. 고객에게 요청하기",
    title: "상황별 멘트 예시",
    content: "계산 시: \"오늘도 찾아주셔서 감사합니다. 리뷰 이벤트에 참여해보세요!\"\n만족한 고객에게: \"표정이 정말 좋아보이시네요! 소중한 경험을 다른 분들과 나눠주세요.\"",
    isQuote: true
  },
  {
    step: "Step 3. 리뷰 이벤트 준비",
    title: "홍보물 비치 및 혜택 제공",
    content: "테이블 위, 계산대에 작은 안내문을 비치하고 '음료수 서비스', '5% 할인' 등 작은 혜택을 제공하여 참여율을 높여보세요.",
    isQuote: false
  }
];

export const ActionGuide: React.FC = () => {
  return (
    <section className="bg-[#F2F4F7] py-12 px-5">
      <h3 className="text-[#1E2A4A] text-[22px] font-bold leading-tight mb-8 text-center">
        {TEXTS.actionTitle}
      </h3>
      
      <div className="space-y-4">
        {STEPS.map((item, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-[#03C75A] font-bold text-sm mb-2">{item.step}</p>
            <h4 className="text-[#1E2A4A] font-bold text-lg mb-4">{item.title}</h4>
            <div className={`text-gray-600 text-base leading-relaxed ${item.isQuote ? 'bg-[#F2F4F7] p-4 rounded-xl text-gray-700' : ''}`}>
               {item.content.split('\n').map((line, i) => (
                 <React.Fragment key={i}>
                   {line}
                   {i !== item.content.split('\n').length - 1 && <br />}
                 </React.Fragment>
               ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};