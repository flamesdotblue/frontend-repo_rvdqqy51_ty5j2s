import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08, ease: 'easeOut' } })
};

export default function TreatmentSections() {
  return (
    <section className="w-full py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <motion.h2
          className="font-serif-elegant text-[26px] sm:text-[32px]"
          style={{ color: 'var(--color-text)' }}
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          Персональные решения
        </motion.h2>

        <motion.p
          className="font-sans-clean mt-2 opacity-80"
          style={{ color: 'var(--color-text)' }}
          variants={fadeInUp}
          custom={1}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          Выберите направление работы с волосами и кожей головы.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mt-8">
          {/* Card 1 */}
          <motion.div
            variants={fadeInUp}
            custom={0}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="group"
          >
            <div className="card-growth p-6 sm:p-7 bg-white rounded-xl shadow-lg transition-transform duration-300"
                 style={{ boxShadow: 'var(--shadow-soft)' }}>
              <div className="flex items-start gap-4">
                <div className="icon-wrap w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center"
                     style={{ backgroundColor: 'rgba(168,213,186,0.25)' }}>
                  <span className="text-2xl sm:text-3xl block group-hover:icon-pulse" role="img" aria-label="growth">🌱</span>
                </div>
                <div>
                  <h3 className="font-serif-elegant text-lg sm:text-xl" style={{ color: 'var(--color-text)' }}>
                    Восстановление роста волос
                  </h3>
                  <p className="font-sans-clean mt-1 text-[15px] sm:text-[16px] opacity-85" style={{ color: 'var(--color-text)' }}>
                    Пробуждение спящих фолликулов и укрепление волос изнутри
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={fadeInUp}
            custom={0.5}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="group"
          >
            <div className="card-dandruff p-6 sm:p-7 bg-white rounded-xl shadow-lg transition-all duration-300"
                 style={{ boxShadow: 'var(--shadow-soft)' }}>
              <div className="flex items-start gap-4">
                <div className="icon-wrap w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center"
                     style={{ backgroundColor: 'rgba(173,216,230,0.25)' }}>
                  <span className="text-2xl sm:text-3xl" role="img" aria-label="snow">❄️</span>
                </div>
                <div>
                  <h3 className="font-serif-elegant text-lg sm:text-xl" style={{ color: 'var(--color-text)' }}>
                    Избавление от перхоти
                  </h3>
                  <p className="font-sans-clean mt-1 text-[15px] sm:text-[16px] opacity-85" style={{ color: 'var(--color-text)' }}>
                    Эффективные методы борьбы с перхотью и восстановление баланса
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={fadeInUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="group"
          >
            <div className="card-lice p-6 sm:p-7 bg-white rounded-xl shadow-lg transition-transform duration-300"
                 style={{ boxShadow: 'var(--shadow-soft)' }}>
              <div className="flex items-start gap-4">
                <div className="icon-wrap w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center"
                     style={{ backgroundColor: 'rgba(255,215,0,0.20)' }}>
                  <span className="text-2xl sm:text-3xl" role="img" aria-label="shield">🛡️</span>
                </div>
                <div>
                  <h3 className="font-serif-elegant text-lg sm:text-xl" style={{ color: 'var(--color-text)' }}>
                    Борьба и профилактика с вшами
                  </h3>
                  <p className="font-sans-clean mt-1 text-[15px] sm:text-[16px] opacity-85" style={{ color: 'var(--color-text)' }}>
                    Надежная защита и профилактические меры
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Component-scoped styles for hovers and subtle animations */}
      <style>{`
        .card-growth { transform: translateY(0); }
        .card-growth:hover { transform: translateY(-5px); }
        @keyframes subtlePulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.07); } }
        .group:hover .icon-pulse { animation: subtlePulse 1.2s ease-in-out infinite; }

        .card-dandruff { box-shadow: var(--shadow-soft); }
        .card-dandruff:hover { box-shadow: 0 8px 28px rgba(0, 140, 255, 0.18), 0 2px 10px rgba(0, 140, 255, 0.12); }

        .card-lice { position: relative; }
        .card-lice:hover { transform: translateY(-3px) scale(1.01); }
        .card-lice:hover::after {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 14px;
          pointer-events: none;
          background: radial-gradient(120px 60px at 20% 10%, rgba(255,215,0,0.35), transparent 55%),
                      radial-gradient(120px 60px at 80% 90%, rgba(255,215,0,0.25), transparent 60%);
          box-shadow: 0 0 0 2px rgba(255,215,0,0.35);
        }
      `}</style>
    </section>
  );
}
