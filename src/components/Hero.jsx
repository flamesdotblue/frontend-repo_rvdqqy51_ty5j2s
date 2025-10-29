export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-gray-900">
            Здоровая кожа головы — основа красивых волос
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Нежный и рациональный уход, персональные рекомендации и заметные результаты.
            Мы помогаем восстановить баланс кожи, укрепить корни и вернуть волосам природное сияние.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#services" className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-3 text-white shadow-sm hover:bg-emerald-700">
              Программы ухода
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-3 text-gray-900 hover:bg-gray-50">
              Бесплатная консультация
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
