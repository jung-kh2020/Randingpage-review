import React from 'react';
import { Share2 } from 'lucide-react';
import { TEXTS } from '../constants';

export const Header: React.FC = () => {
  const handleShare = async () => {
    const currentUrl = window.location.href;

    try {
      await navigator.clipboard.writeText(currentUrl);
      alert('주소가 복사되었습니다!');
    } catch (err) {
      console.error('Failed to copy:', err);
      alert('주소 복사에 실패했습니다.');
    }
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-white/90 px-4 py-3 backdrop-blur-md border-b border-gray-100">
      <div className="w-10" /> {/* Spacer for centering */}
      <h1 className="text-[#1E2A4A] text-lg font-bold leading-tight tracking-tight text-center flex-1">
        {TEXTS.headerTitle}
      </h1>
      <div className="flex w-10 items-center justify-end">
        <button
          onClick={handleShare}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-[#1E2A4A] hover:bg-gray-100 transition-colors"
        >
          <Share2 size={24} strokeWidth={2} />
        </button>
      </div>
    </header>
  );
};