import { Layers } from 'lucide-react';

const core = ['UiPath Studio Web', 'RPA Automation', 'OpenRouter API', 'LLM Integration'];
const presentation = ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'GitHub Pages'];

function StackGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="card rounded-3xl p-6">
      <h3 className="mb-5 flex items-center gap-2 text-xl font-bold text-white"><Layers className="h-5 w-5 text-cyan-300" />{title}</h3>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => <span key={item} className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-200">{item}</span>)}
      </div>
    </div>
  );
}

export default function Stack() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <h2 className="mb-8 text-3xl font-bold text-white">Technical Stack</h2>
      <div className="grid gap-6 lg:grid-cols-2">
        <StackGroup title="Core Project Technology" items={core} />
        <StackGroup title="Presentation Technology" items={presentation} />
      </div>
    </section>
  );
}
