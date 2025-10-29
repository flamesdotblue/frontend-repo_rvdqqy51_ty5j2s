import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Главная' },
    { href: '#services', label: 'Услуги' },
    { href: '#contact', label: 'Контакты' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold text-gray-900 tracking-tight">Здоровье кожи головы</a>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100"
          aria-label="Toggle menu"
          onClick={() => setOpen(v => !v)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map(item => (
            <a key={item.href} href={item.href} className="text-gray-700 hover:text-gray-900">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center rounded-md bg-gray-900 px-3 py-1.5 text-white hover:bg-gray-800">Записаться</a>
        </nav>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-2 flex flex-col gap-2">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="py-2 text-gray-700 hover:text-gray-900"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" className="mt-1 inline-flex items-center justify-center rounded-md bg-gray-900 px-3 py-2 text-white hover:bg-gray-800" onClick={() => setOpen(false)}>
              Записаться
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
