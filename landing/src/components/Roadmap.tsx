const items = [
  { version: 'v1', title: 'Completed', detail: 'UiPath workflow, PDF extraction, OpenRouter request, JSON response.' },
  { version: 'v2', title: 'Backend API', detail: 'Node.js + Express layer to separate AI logic from RPA orchestration.' },
  { version: 'v3', title: 'MCP Integration', detail: 'External tools such as GitHub, search, and knowledge base MCP servers.' },
];

export default function Roadmap() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <h2 className="mb-8 text-3xl font-bold text-white">Roadmap Timeline</h2>
      <div className="card rounded-3xl p-6">
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item, index) => (
            <div key={item.version} className="relative rounded-2xl bg-slate-950/60 p-5">
              <span className="text-sm font-bold text-cyan-300">{item.version}</span>
              <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{item.detail}</p>
              {index < items.length - 1 && <span className="mt-4 block text-2xl text-cyan-300 md:hidden">↓</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
