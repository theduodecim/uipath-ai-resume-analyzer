import Footer from './components/Footer';
import Hero from './components/Hero';
import Roadmap from './components/Roadmap';
import Stack from './components/Stack';
import Workflow from './components/Workflow';

export default function App() {
  return (
    <main className="glow min-h-screen overflow-hidden text-slate-100">
      <Hero />
      <Workflow />
      <Stack />
      <Roadmap />
      <Footer />
    </main>
  );
}
