import FontsLoader from './components/FontsLoader.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <FontsLoader />
      <Header />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-600">
          © {new Date().getFullYear()} Здоровье кожи головы и волос. Бережный уход, проверенные результаты.
        </div>
      </footer>
    </div>
  );
}
