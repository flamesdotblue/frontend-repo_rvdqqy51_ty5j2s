import FontsLoader from './components/FontsLoader.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#5d4037]">
      <FontsLoader />
      <Header />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
      <footer className="border-t border-[#e9e0d7]">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-[#5d4037]/80">
          © {new Date().getFullYear()} Здоровье кожи головы и волос. Бережный уход, проверенные результаты.
        </div>
      </footer>
    </div>
  );
}
