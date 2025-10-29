import { Sparkles, Leaf, Shield } from 'lucide-react';

const items = [
  {
    icon: Sparkles,
    title: 'Детокс и баланс',
    text: 'Мягкое очищение и восстановление pH для чувствительной и склонной к жирности кожи головы.'
  },
  {
    icon: Leaf,
    title: 'Питание и рост',
    text: 'Активные сыворотки и массаж для стимуляции микроциркуляции и укрепления волосяных луковиц.'
  },
  {
    icon: Shield,
    title: 'Защита и блеск',
    text: 'Лёгкие спреи и термозащита для ежедневного ухода и гладкости без утяжеления.'
  }
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
      <div className="mb-8 sm:mb-12 max-w-2xl">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Программы ухода</h2>
        <p className="mt-3 text-gray-600">Подбираем решения под ваш тип кожи и образ жизни. Минимум лишнего — максимум пользы.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title} className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-medium text-gray-900">{title}</h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">{text}</p>
            <div className="mt-4 inline-flex text-sm text-emerald-700 group-hover:underline">Подробнее</div>
          </div>
        ))}
      </div>
    </section>
  );
}
