import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(106,208,197,0.18),transparent_70%)] blur-2xl pointer-events-none" />

      <div className="container mx-auto px-6 pt-20 pb-16">
        <motion.h1
          className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Здоровье кожи головы и волос
        </motion.h1>

        <motion.p
          className="max-w-2xl mx-auto text-center mt-6 text-[var(--color-muted)]"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Индивидуальные решения для вашей кожи головы и волос. Научный подход, деликатный уход и видимые результаты.
        </motion.p>

        <div className="mt-10 flex justify-center gap-3">
          <a href="#programs" className="px-5 py-3 rounded-lg bg-[var(--color-accent)] text-black font-medium shadow hover:shadow-lg transition-shadow">Программы ухода</a>
          <a href="#contact" className="px-5 py-3 rounded-lg border border-white/15 hover:border-white/25 text-[var(--color-text)] transition-colors">Консультация</a>
        </div>
      </div>
    </section>
  );
}
