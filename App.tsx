import React from 'react';
import { Header } from './components/Header';
import { ProcessFlow } from './components/ProcessFlow';
import { HeroOverlay, ComparisonGrid } from './components/VisualBanners';
import { StatsSection, BenefitsSection } from './components/StatsAndBenefits';
import { ActionGuide } from './components/ActionGuide';
import { Footer } from './components/Footer';

const Separator = () => <div className="h-2 bg-[#F2F4F7]" />;

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-white font-sans text-[#1E2A4A] max-w-[480px] mx-auto shadow-2xl overflow-hidden">
      <Header />
      <main>
        <ProcessFlow />
        <HeroOverlay />
        <ComparisonGrid />
        <Separator />
        <StatsSection />
        <Separator />
        <BenefitsSection />
        <Separator />
        <ActionGuide />
        <Footer />
      </main>
    </div>
  );
};

export default App;