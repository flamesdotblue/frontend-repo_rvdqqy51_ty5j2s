import React from 'react';

export default function AccentBar() {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div
          className="w-full h-14 sm:h-16 mt-8 rounded-xl"
          style={{
            background: 'linear-gradient(90deg, rgba(168,213,186,0.45), rgba(255,171,145,0.45))',
            boxShadow: 'var(--shadow-soft)'
          }}
        />
      </div>
    </div>
  );
}
