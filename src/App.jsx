import React from 'react';
import FontsLoader from './components/FontsLoader.jsx';
import IntroOverlay from './components/IntroOverlay.jsx';
import HeroSection from './components/HeroSection.jsx';
import AccentBar from './components/AccentBar.jsx';

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)' }}>
      {/* Load design system fonts and CSS variables */}
      <FontsLoader />

      {/* Intro animation overlay (auto hides after ~3.5s) */}
      <IntroOverlay />

      {/* Main content */}
      <main className="pt-10 sm:pt-16 pb-20">
        <div className="mx-auto max-w-6xl">
          {/* Subtle decorative header area */}
          <div className="px-6 sm:px-8">
            <div
              className="rounded-xl p-6 sm:p-8"
              style={{
                background: 'linear-gradient(180deg, rgba(168,213,186,0.16), rgba(255,171,145,0.10))',
                boxShadow: 'var(--shadow-soft)'
              }}
            >
              <p className="font-sans-clean text-sm tracking-wide" style={{ color: 'var(--color-text)', opacity: 0.75 }}>
                Добро пожаловать, Екатерина
              </p>
            </div>
          </div>

          <HeroSection />
          <AccentBar />
        </div>
      </main>
    </div>
  );
}
