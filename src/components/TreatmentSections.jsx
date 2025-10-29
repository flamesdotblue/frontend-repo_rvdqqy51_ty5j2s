import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Leaf, Shield } from 'lucide-react';

const cards = [
  {
    title: 'Диагностика и аналитика',
    desc: 'Комплексная оценка состояния кожи головы, фототрихограмма и план действий.',
    icon: Sparkles,
    accent: 'from-teal-300/20 to-teal-500/10',
  },
  {
    title: 'Восстановление и укрепление',
    desc: 'Пептиды, аминокислоты и мягкие кислотные пилинги для здорового роста.',
    icon: Leaf,
    accent: 'from-purple-300/20 to-purple-500/10',
  },
  {
    title: 'Профилактика и защита',
    desc: 'Нормализация микробиома, барьерная защита и поддерживающие протоколы.',
    icon: Shield,
    accent: 'from-cyan-300/20 to-cyan-500/10',
  },
];

export default function TreatmentSections() {
  return (
    <section id="programs" className="py-14">
      <div className="container mx-auto px-6">
        <motion.h2
          className="font-display text-2xl sm:text-3xl text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Персональные решения
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, idx) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: 0.05 * idx }}
              className="group relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-5 hover:border-white/20 transition-colors"
            >
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${c.accent} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} />

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-white/10 border border-white/10 shadow text-[var(--color-text)]">
                  <c.icon className="w-5 h-5" />
                </div>
                <h3 className="mt-4 font-medium text-lg">{c.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-muted)]">{c.desc}</p>
                <div className="mt-5">
                  <button className="px-4 py-2 rounded-md bg-[var(--color-accent)] text-black font-medium shadow hover:shadow-md transition-shadow">Подробнее</button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
