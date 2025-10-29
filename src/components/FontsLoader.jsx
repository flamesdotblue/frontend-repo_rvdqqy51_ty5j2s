import React from 'react';

// Injects Google Fonts and CSS variables for the design system
export default function FontsLoader() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');
        :root {
          --color-bg: #faf7f2; /* кремовый */
          --color-accent: #a8d5ba; /* шалфейно-зелёный */
          --color-text: #5d4037; /* тёмный шоколад */
          --color-secondary: #ffab91; /* тёплый персиковый */
          --radius-12: 12px;
          --shadow-soft: 0 6px 24px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.04);
        }
        .font-serif-elegant { font-family: 'Playfair Display', Georgia, serif; }
        .font-sans-clean { font-family: 'Inter', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; }
      `}</style>
    </>
  );
}
