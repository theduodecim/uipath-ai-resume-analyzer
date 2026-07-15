import { Github, Linkedin, RadioTower } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <div className="flex flex-col justify-between gap-6 border-t border-slate-800 pt-8 md:flex-row md:items-center">
        <p className="text-slate-500">AI PDF Summarizer — UiPath + LLM Automation Portfolio</p>
        <div className="flex gap-4 text-slate-400">
          <a className="flex items-center gap-2 transition hover:text-cyan-300" href="https://github.com/"><Github className="h-4 w-4" />GitHub</a>
          <a className="flex items-center gap-2 transition hover:text-cyan-300" href="https://linkedin.com/"><Linkedin className="h-4 w-4" />LinkedIn</a>
          <a className="flex items-center gap-2 transition hover:text-cyan-300" href="https://example.com/"><RadioTower className="h-4 w-4" />Portfolio</a>
        </div>
      </div>
    </footer>
  );
}
