export default function Contact() {
  return (
    <section id="contact" className="border-t border-[#eadfd5]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#5d4037]">Связаться с нами</h2>
          <p className="mt-3 text-[#5d4037]/80">Оставьте заявку — подберём индивидуальный план ухода и ответим на ваши вопросы.</p>
        </div>

        <form className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-[#5d4037]">Имя</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-[#e4d8cc] bg-white text-[#5d4037] shadow-sm placeholder:text-[#5d4037]/40 focus:border-[#a8d5ba] focus:ring-[#a8d5ba]"
              placeholder="Ваше имя"
              required
            />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-[#5d4037]">Телефон или e‑mail</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-[#e4d8cc] bg-white text-[#5d4037] shadow-sm placeholder:text-[#5d4037]/40 focus:border-[#a8d5ba] focus:ring-[#a8d5ba]"
              placeholder="+7... или email"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-[#5d4037]">Комментарий</label>
            <textarea
              rows={4}
              className="mt-1 block w-full rounded-md border-[#e4d8cc] bg-white text-[#5d4037] shadow-sm placeholder:text-[#5d4037]/40 focus:border-[#a8d5ba] focus:ring-[#a8d5ba]"
              placeholder="Коротко опишите запрос"
            />
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="inline-flex items-center rounded-md bg-[#a8d5ba] px-5 py-3 text-white shadow-sm transition hover:brightness-95"
            >
              Отправить заявку
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
