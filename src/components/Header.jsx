import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Главная' },
    { href: '#services', label: 'Услуги' },
    { href: '#contact', label: 'Контакты' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#eadfd5] bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-[#5d4037]">Здоровье кожи головы</a>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-[#5d4037]/80 hover:bg-[#fff3]"
          aria-label="Toggle menu"
          onClick={() => setOpen(v => !v)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map(item => (
            <a key={item.href} href={item.href} className="text-[#5d4037]/80 hover:text-[#5d4037]">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center rounded-md bg-[#a8d5ba] px-3 py-1.5 text-white shadow-sm hover:brightness-95">
            Записаться
          </a>
        </nav>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#eadfd5] bg-white/95">
          <div className="mx-auto max-w-6xl px-4 py-2 flex flex-col gap-2">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="py-2 text-[#5d4037]/90 hover:text-[#5d4037]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-1 inline-flex items-center justify-center rounded-md bg-[#a8d5ba] px-3 py-2 text-white shadow-sm hover:brightness-95"
              onClick={() => setOpen(false)}
            >
              Записаться
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
