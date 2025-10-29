import React from 'react';

export default function HeroSection() {
  return (
    <section className="w-full">
      <div
        className="mx-auto max-w-4xl px-6 sm:px-8 py-12 sm:py-16"
        style={{ color: 'var(--color-text)' }}
      >
        <div
          className="p-8 sm:p-10"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            borderRadius: '12px',
            boxShadow: 'var(--shadow-soft)'
          }}
        >
          <h1 className="font-serif-elegant leading-tight"
              style={{ fontSize: 'clamp(28px, 5vw, 48px)' }}>
            Здоровье кожи головы и волос
          </h1>

          <div className="mt-5 h-1 w-28 rounded"
               style={{ background: 'linear-gradient(90deg, var(--color-accent), var(--color-secondary))' }}
          />

          <p className="mt-6 font-sans-clean text-[17px] sm:text-[18px] leading-relaxed opacity-90">
            Персональный гид к здоровью и красоте ваших волос, Екатерина.
          </p>
        </div>
      </div>
    </section>
  );
}
