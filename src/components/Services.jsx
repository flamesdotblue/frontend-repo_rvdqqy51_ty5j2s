import { Sparkles, Leaf, Shield } from 'lucide-react';

const items = [
  {
    icon: Sparkles,
    title: 'Детокс и баланс',
    text: 'Мягкое очищение и восстановление pH для чувствительной и склонной к жирности кожи головы.',
    styles: {
      iconWrap: 'bg-sky-50 text-sky-600',
      card: 'hover:shadow-md',
      hoverRing: 'hover:ring-1 hover:ring-sky-200',
    },
  },
  {
    icon: Leaf,
    title: 'Питание и рост',
    text: 'Активные сыворотки и массаж для стимуляции микроциркуляции и укрепления волосяных луковиц.',
    styles: {
      iconWrap: 'bg-emerald-50 text-emerald-600',
      card: 'border-[#a8d5ba]',
      hoverRing: 'hover:ring-1 hover:ring-emerald-200',
    },
  },
  {
    icon: Shield,
    title: 'Защита и блеск',
    text: 'Лёгкие спреи и термозащита для ежедневного ухода и гладкости без утяжеления.',
    styles: {
      iconWrap: 'bg-amber-50 text-amber-600',
      card: 'hover:shadow-md',
      hoverRing: 'hover:ring-1 hover:ring-amber-200',
      shimmer: true,
    },
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
      <div className="mb-8 sm:mb-12 max-w-2xl">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#5d4037]">Программы ухода</h2>
        <p className="mt-3 text-[#5d4037]/80">Подбираем решения под ваш тип кожи и образ жизни. Минимум лишнего — максимум пользы.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map(({ icon: Icon, title, text, styles }) => (
          <div
            key={title}
            className={`group relative rounded-xl border border-[#eadfd5] bg-white p-6 shadow-sm transition ${styles.card} ${styles.hoverRing}`}
          >
            {/* shimmer overlay for shield card */}
            {styles.shimmer && (
              <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                   style={{
                     background:
                       'radial-gradient(120px 60px at 85% 20%, rgba(255, 215, 130, 0.18), transparent 60%), radial-gradient(160px 80px at 10% 90%, rgba(255, 215, 130, 0.12), transparent 60%)',
                   }}
              />
            )}

            <div className={`relative flex h-12 w-12 items-center justify-center rounded-lg ${styles.iconWrap}`}>
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-medium text-[#5d4037]">{title}</h3>
            <p className="mt-2 text-sm text-[#5d4037]/80 leading-relaxed">{text}</p>
            <div className="mt-4 inline-flex text-sm text-[#5d4037]/80 group-hover:text-[#5d4037]">Подробнее</div>
          </div>
        ))}
      </div>
    </section>
  );
}
