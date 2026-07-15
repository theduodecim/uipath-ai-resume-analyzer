import { Brain, FileInput, FileText, Settings2, Sparkles } from 'lucide-react';
import workflowScreenshot from '../assets/screenshots/workflow.png';
import executionScreenshot from '../assets/screenshots/execution.png';

const steps = [
  { title: 'PDF Input', icon: FileInput, text: 'PDF document retrieved from Google Drive.' },
  { title: 'RPA Processing', icon: Settings2, text: 'UiPath Studio Web orchestrates the workflow.' },
  { title: 'Text Extraction', icon: FileText, text: 'Read PDF Text extracts document content.' },
  { title: 'AI Analysis', icon: Brain, text: 'OpenRouter routes the request to an LLM.' },
  { title: 'Structured Output', icon: Sparkles, text: 'The model returns JSON-ready analysis.' },
];

export default function Workflow() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="mb-10 max-w-2xl">
        <h2 className="text-3xl font-bold text-white">Workflow Visual</h2>
        <p className="mt-3 text-slate-400">The landing is a visual presentation layer only. The core project is the UiPath RPA + AI workflow.</p>
      </div>
      <div className="card rounded-3xl p-6">
        <div className="grid gap-4 md:grid-cols-5">
          {['PDF Input', 'UiPath Automation', 'Text Extraction', 'LLM Processing', 'AI Analysis'].map((item, index) => (
            <div key={item} className="rounded-2xl bg-slate-950/60 p-5 text-center">
              <p className="font-semibold text-white">{item}</p>
              {index < 4 && <p className="mt-4 text-2xl text-cyan-300 md:hidden">↓</p>}
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-slate-700">
            <img src={workflowScreenshot} alt="UiPath Studio Web workflow: Manual Trigger, Download File, Read PDF Text, Message Box, HTTP Request" className="w-full" />
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-700">
            <img src={executionScreenshot} alt="UiPath Studio Web execution result" className="w-full" />
          </div>
        </div>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-5">
        {steps.map(({ title, icon: Icon, text }) => (
          <article key={title} className="card rounded-2xl p-5 transition hover:-translate-y-1">
            <Icon className="mb-4 h-7 w-7 text-cyan-300" />
            <h3 className="font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm text-slate-400">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
