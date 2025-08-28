import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b10] text-white antialiased selection:bg-fuchsia-500/30 selection:text-fuchsia-200">
      <Header />
      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-white/60 md:flex-row">
          <p>© {new Date().getFullYear()} EchoLab Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white/90">Privacy</a>
            <a href="#" className="hover:text-white/90">Terms</a>
            <a href="#" className="hover:text-white/90">Status</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
