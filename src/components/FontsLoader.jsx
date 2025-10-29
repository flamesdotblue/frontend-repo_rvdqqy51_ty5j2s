import React from 'react';

// Inject design tokens (CSS variables) and base typography
export default function FontsLoader() {
  return (
    <style>{`
      :root {
        --color-bg: #0e0f12;
        --color-text: #eaeaf0;
        --color-muted: #a8aab3;
        --color-accent: #6ad0c5;
        --color-secondary: #a58bff;
        --radius-12: 12px;
        --shadow-soft: 0 10px 30px rgba(0,0,0,0.35);
      }
      body { font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"; background: var(--color-bg); color: var(--color-text); }
      .font-display { font-family: "Playfair Display", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif; }
    `}</style>
  );
}
