import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const MESSAGE = 'Здравствуйте, Екатерина, сайт к вашим услугам!';

export default function IntroOverlay() {
  const [visible, setVisible] = useState(true);
  const [typed, setTyped] = useState('');
  const [phase, setPhase] = useState('fade-in'); // fade-in -> typing -> hold -> fade-out

  // Calculate a typing speed so the message completes in ~2.5s
  const typeDelay = useMemo(() => {
    const durationMs = 2500;
    return Math.max(18, Math.floor(durationMs / Math.max(1, MESSAGE.length)));
  }, []);

  useEffect(() => {
    let timers = [];

    // Start fade-in
    timers.push(setTimeout(() => setPhase('typing'), 200));

    // Typewriter effect
    let i = 0;
    function tick() {
      if (i <= MESSAGE.length) {
        setTyped(MESSAGE.slice(0, i));
        i += 1;
        timers.push(setTimeout(tick, typeDelay));
      } else {
        setPhase('hold');
        // Hold, then fade out
        timers.push(setTimeout(() => setPhase('fade-out'), 600));
        timers.push(setTimeout(() => setVisible(false), 1000)); // matches animation below
      }
    }

    timers.push(setTimeout(tick, 400));

    return () => timers.forEach(t => clearTimeout(t));
  }, [typeDelay]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-50"
        >
          {/* Soft background */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{ background: 'linear-gradient(135deg, #faf7f2 0%, #fff 60%)' }}
          />

          {/* Centered content */}
          <div className="relative h-full w-full flex items-center justify-center p-6">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="backdrop-blur-[1px]"
            >
              <div
                className="px-6 py-4 shadow-lg"
                style={{
                  background: 'rgba(255,255,255,0.6)',
                  borderRadius: '12px',
                  boxShadow: 'var(--shadow-soft)'
                }}
              >
                <p className="font-serif-elegant text-center"
                   style={{ color: 'var(--color-text)', fontSize: 'clamp(20px, 4vw, 34px)' }}>
                  <span>{typed}</span>
                  <span
                    className="inline-block"
                    style={{
                      width: '1ch',
                      marginLeft: '2px',
                      borderRight: '2px solid #5d4037',
                      animation: 'blink 0.9s steps(1) infinite',
                      opacity: phase === 'fade-out' ? 0 : 1
                    }}
                    aria-hidden
                  />
                </p>
              </div>
            </motion.div>
          </div>

          {/* Keyframes for caret */}
          <style>{`
            @keyframes blink { 0%, 49% { opacity: 1 } 50%, 100% { opacity: 0 } }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
