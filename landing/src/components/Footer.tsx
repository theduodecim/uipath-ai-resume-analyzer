function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.5v-1.88c-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.66.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.95c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.8c0 .28.18.6.69.5A10.16 10.16 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M6.94 8.98H3.75V20h3.19V8.98ZM7.22 5.57A1.85 1.85 0 1 0 3.5 5.56a1.85 1.85 0 0 0 3.72.01ZM20.5 13.68c0-2.96-1.58-4.34-3.7-4.34a3.18 3.18 0 0 0-2.87 1.58h-.04V8.98h-3.06V20h3.19v-5.45c0-1.44.27-2.83 2.05-2.83 1.76 0 1.78 1.64 1.78 2.92V20h3.19v-6.32h-.54Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <div className="flex flex-col justify-between gap-6 border-t border-slate-800 pt-8 md:flex-row md:items-center">
        <p className="text-slate-500">AI PDF Summarizer — UiPath + LLM Automation Portfolio</p>
        <div className="flex gap-4 text-slate-400">
          <a className="inline-flex items-center gap-1.5 transition hover:text-cyan-300" href="https://github.com/">
            <GitHubIcon className="h-4 w-4" />
            GitHub
          </a>
          <a className="inline-flex items-center gap-1.5 transition hover:text-cyan-300" href="https://linkedin.com/">
            <LinkedInIcon className="h-4 w-4" />
            LinkedIn
          </a>
          <a className="transition hover:text-cyan-300" href="https://example.com/">Portfolio</a>
        </div>
      </div>
    </footer>
  );
}
