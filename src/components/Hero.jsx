export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,213,186,0.25),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#5d4037]">
            Здоровая кожа головы — основа красивых волос
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#5d4037]/80 leading-relaxed">
            Нежный и рациональный уход, персональные рекомендации и заметные результаты.
            Мы помогаем восстановить баланс кожи, укрепить корни и вернуть волосам природное сияние.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-md bg-[#a8d5ba] px-5 py-3 text-white shadow-sm transition hover:brightness-95"
            >
              Программы ухода
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-[#ffab91] px-5 py-3 text-white shadow-sm transition hover:brightness-95"
            >
              Бесплатная консультация
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
