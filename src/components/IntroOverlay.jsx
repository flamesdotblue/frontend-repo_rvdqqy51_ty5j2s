import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function IntroOverlay() {
  const [visible, setVisible] = useState(true);
  const [text, setText] = useState('');
  const phrase = 'Здоровье кожи головы и волос';

  useEffect(() => {
    let i = 0;
    const type = setInterval(() => {
      setText(phrase.slice(0, i + 1));
      i += 1;
      if (i === phrase.length) clearInterval(type);
    }, 60);

    const hide = setTimeout(() => setVisible(false), 3400);

    return () => {
      clearInterval(type);
      clearTimeout(hide);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[radial-gradient(60%_80%_at_50%_50%,#161821_0%,#0e0f12_60%)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          onClick={() => setVisible(false)}
        >
          <motion.div
            className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl"
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="text-center">
              <div className="font-display text-2xl sm:text-3xl md:text-4xl tracking-wide">
                {text}
                <span className="inline-block w-1 h-6 sm:h-7 md:h-8 bg-[var(--color-accent)] ml-1 animate-pulse align-middle" />
              </div>
              <p className="text-sm text-[var(--color-muted)] mt-3">нажмите, чтобы пропустить</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
