import React from 'react';
import FontsLoader from './components/FontsLoader.jsx';
import IntroOverlay from './components/IntroOverlay.jsx';
import HeroSection from './components/HeroSection.jsx';
import TreatmentSections from './components/TreatmentSections.jsx';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-[var(--color-accent)]/20 selection:text-[var(--color-text)]">
      <FontsLoader />
      <IntroOverlay />

      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/0 border-b border-white/10">
        <div className="container mx-auto px-6 h-14 flex items-center justify-between">
          <div className="font-display text-lg">Scalp & Hair</div>
          <nav className="hidden sm:flex items-center gap-5 text-sm">
            <a href="#programs" className="text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors">Программы</a>
            <a href="#contact" className="text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      <main>
        <HeroSection />
        <TreatmentSections />

        <section id="contact" className="py-14">
          <div className="container mx-auto px-6">
            <h2 className="font-display text-2xl sm:text-3xl text-center">Записаться на консультацию</h2>
            <p className="max-w-xl mx-auto text-center mt-3 text-[var(--color-muted)]">Оставьте ваши контакты, и мы свяжемся с вами для подбора программы ухода.</p>

            <form className="max-w-xl mx-auto mt-8 grid grid-cols-1 gap-4">
              <input className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-white/25" placeholder="Ваше имя" />
              <input className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-white/25" placeholder="Телефон или e-mail" />
              <textarea className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-white/25" rows="4" placeholder="Кратко опишите запрос"></textarea>
              <button type="button" className="mt-2 px-5 py-3 rounded-lg bg-[var(--color-accent)] text-black font-medium shadow hover:shadow-md transition-shadow">Отправить</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-[var(--color-muted)]">
        © {new Date().getFullYear()} Scalp & Hair. Все права защищены.
      </footer>
    </div>
  );
}
