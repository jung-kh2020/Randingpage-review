import React, { useState, useEffect } from 'react';
import { TEXTS } from '../constants';

export const Footer: React.FC = () => {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [password, setPassword] = useState('');
  const [linkUrl, setLinkUrl] = useState('');
  const [currentLink, setCurrentLink] = useState('');

  // URL 파라미터에서 ID 가져오기
  const getPageId = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get('id') || 'default';
  };

  // 저장된 링크 불러오기
  useEffect(() => {
    const pageId = getPageId();
    const savedLink = localStorage.getItem(`ctaLink_${pageId}`);
    setCurrentLink(savedLink || '');
  }, []);

  const handleCopyrightClick = () => {
    setShowPasswordModal(true);
    setPassword('');
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '1234') {
      setShowPasswordModal(false);
      setShowLinkModal(true);
      setLinkUrl(currentLink);
      setPassword('');
    } else {
      alert('비밀번호가 틀렸습니다.');
      setPassword('');
    }
  };

  const handleLinkSave = (e: React.FormEvent) => {
    e.preventDefault();
    const pageId = getPageId();
    localStorage.setItem(`ctaLink_${pageId}`, linkUrl);
    setCurrentLink(linkUrl);
    setShowLinkModal(false);
    alert('링크가 저장되었습니다!');
  };

  const handleCtaClick = () => {
    if (currentLink) {
      window.open(currentLink, '_blank');
    } else {
      alert('링크를 먼저 설정해주세요.\n하단 © 2024 Review Project를 클릭하여 링크를 설정할 수 있습니다.');
    }
  };

  return (
    <>
      <section className="py-16 px-5 bg-[#1E2A4A] text-center">
        <h3 className="text-white text-2xl font-bold leading-tight mb-4">
          {TEXTS.ctaTitle}
        </h3>
        <p className="text-gray-300 mb-10 text-base leading-relaxed whitespace-pre-line">
          {TEXTS.ctaDesc}
        </p>
        <button
          onClick={handleCtaClick}
          className="w-full max-w-[320px] mx-auto h-14 bg-[#03C75A] hover:bg-[#02b04e] active:scale-95 transition-all text-[#1E2A4A] text-lg font-bold rounded-xl shadow-lg shadow-green-900/20 flex items-center justify-center"
        >
          {TEXTS.ctaButton}
        </button>

        <div
          onClick={handleCopyrightClick}
          className="mt-12 text-gray-500 text-xs cursor-pointer hover:text-gray-400 transition-colors"
        >
          &copy; 2024 Review Project. All rights reserved.
        </div>
      </section>

      {/* 비밀번호 입력 모달 */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm">
            <h3 className="text-lg font-bold mb-4 text-[#1E2A4A]">비밀번호 입력</h3>
            <form onSubmit={handlePasswordSubmit}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호를 입력하세요"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-[#03C75A]"
                autoFocus
              />
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setShowPasswordModal(false);
                    setPassword('');
                  }}
                  className="flex-1 py-3 bg-gray-200 hover:bg-gray-300 rounded-lg font-medium transition-colors"
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-[#03C75A] hover:bg-[#02b04e] text-white rounded-lg font-medium transition-colors"
                >
                  확인
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 링크 편집 모달 */}
      {showLinkModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm">
            <h3 className="text-lg font-bold mb-4 text-[#1E2A4A]">링크 주소 설정</h3>
            <form onSubmit={handleLinkSave}>
              <input
                type="url"
                value={linkUrl}
                onChange={(e) => setLinkUrl(e.target.value)}
                placeholder="https://example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-[#03C75A]"
                autoFocus
              />
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setShowLinkModal(false);
                    setLinkUrl('');
                  }}
                  className="flex-1 py-3 bg-gray-200 hover:bg-gray-300 rounded-lg font-medium transition-colors"
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-[#03C75A] hover:bg-[#02b04e] text-white rounded-lg font-medium transition-colors"
                >
                  저장
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};