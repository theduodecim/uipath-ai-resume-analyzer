import { ArrowRight, Bot, FileText, Workflow } from 'lucide-react';

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-20 lg:flex-row lg:items-center lg:px-8 lg:py-28">
      <div className="max-w-3xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
          <Bot className="h-4 w-4" /> UiPath Studio Web + LLM Automation
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight text-white md:text-7xl">AI PDF Summarizer</h1>
        <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-300">UiPath RPA workflow powered by LLM integration</p>
        <p className="mt-5 max-w-2xl text-slate-400">A professional automation portfolio project documenting PDF intake, text extraction, OpenRouter API integration, and structured AI analysis.</p>
        <a href="https://github.com/theduodecim/uipath-ai-resume-analyzer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300">
          View Repository <ArrowRight className="h-4 w-4" />
        </a>
      </div>
      <div className="card relative flex-1 rounded-3xl p-6">
        <div className="grid gap-4">
          {[['PDF Input', FileText], ['UiPath Automation', Workflow], ['AI Analysis', Bot]].map(([label, Icon]) => (
            <div key={label as string} className="flex items-center gap-4 rounded-2xl border border-slate-700/70 bg-slate-900/80 p-4">
              <Icon className="h-6 w-6 text-cyan-300" />
              <span className="font-semibold">{label as string}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
