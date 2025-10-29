export default function Contact() {
  return (
    <section id="contact" className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Связаться с нами</h2>
          <p className="mt-3 text-gray-600">Оставьте заявку — подберём индивидуальный план ухода и ответим на ваши вопросы.</p>
        </div>

        <form className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-gray-700">Имя</label>
            <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-600 focus:ring-emerald-600" placeholder="Ваше имя" required />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-gray-700">Телефон или e‑mail</label>
            <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-600 focus:ring-emerald-600" placeholder="+7... или email" required />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Комментарий</label>
            <textarea rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-600 focus:ring-emerald-600" placeholder="Коротко опишите запрос" />
          </div>
          <div className="sm:col-span-2">
            <button type="submit" className="inline-flex items-center rounded-md bg-emerald-600 px-5 py-3 text-white hover:bg-emerald-700">
              Отправить заявку
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
