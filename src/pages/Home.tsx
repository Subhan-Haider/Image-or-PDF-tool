import {
  Badge,
  Brush,
  Circle,
  Download,
  Eraser,
  FileStack,
  Highlighter,
  Home as HomeIcon,
  Image as ImageIcon,
  Layers,
  Minus,
  Move,
  PenLine,
  Plus,
  Redo2,
  RotateCw,
  Save,
  Search,
  Settings,
  Shapes,
  Sparkles,
  Type,
  Undo2,
  X,
} from 'lucide-react';

const tools = [
  { label: 'Move/Pan', icon: Move },
  { label: 'Draw', icon: PenLine, active: true },
  { label: 'Highlight', icon: Highlighter },
  { label: 'Add Text', icon: Type },
  { label: 'Shapes', icon: Shapes },
  { label: 'Signature', icon: Brush },
  { label: 'Stamp Image', icon: ImageIcon },
  { label: 'Whiteout', icon: Eraser },
  { label: 'Blur/Mask', icon: Circle },
  { label: 'Doc Badge', icon: Badge },
];

const swatches = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#050505', '#ffffff'];

const navItems = [
  { label: 'Home', icon: HomeIcon },
  { label: 'Encode', icon: Sparkles },
  { label: 'Decode', icon: Badge },
  { label: 'History', icon: FileStack, active: true },
  { label: 'Settings', icon: Settings },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#303441] px-4 py-8 text-white sm:px-8 lg:px-16">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_88%_83%,rgba(77,63,213,0.28),transparent_18%),radial-gradient(circle_at_14%_18%,rgba(255,255,255,0.08),transparent_22%)]" />

      <section className="relative mx-auto flex h-[calc(100vh-4rem)] min-h-[620px] max-w-[1152px] flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#080d1c] shadow-2xl shadow-black/30">
        <header className="flex h-20 items-center justify-between border-b border-white/8 bg-[#101827] px-6">
          <div>
            <h1 className="font-display text-lg font-bold tracking-tight text-white">Basic Page Annotator</h1>
            <p className="mt-1 text-sm font-medium text-slate-400">Annotating Page 2 of compiled_document (3).pdf</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden h-9 items-center rounded-xl border border-white/10 bg-white/[0.04] px-3 text-sm font-bold text-slate-100 sm:flex">
              <button className="grid h-7 w-8 place-items-center rounded-lg text-slate-400 transition hover:bg-white/10 hover:text-white" aria-label="Zoom out">
                <Minus size={16} />
              </button>
              <span className="min-w-16 text-center">100%</span>
              <button className="grid h-7 w-8 place-items-center rounded-lg text-slate-400 transition hover:bg-white/10 hover:text-white" aria-label="Zoom in">
                <Plus size={16} />
              </button>
              <span className="ml-2 border-l border-white/10 pl-3 text-[10px] font-semibold text-slate-500">Reset</span>
            </div>
            <button className="inline-flex h-9 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm font-bold text-slate-200 transition hover:bg-white/10">
              <RotateCw size={15} className="text-indigo-300" />
              Rotate 90
            </button>
            <button className="grid h-9 w-9 place-items-center rounded-full bg-white/[0.06] text-slate-400 transition hover:bg-white/10 hover:text-white" aria-label="Close annotator">
              <X size={18} />
            </button>
          </div>
        </header>

        <div className="flex min-h-0 flex-1">
          <aside className="custom-sidebar-scrollbar hidden w-64 shrink-0 overflow-y-auto border-r border-white/8 bg-[#111a2b] p-4 lg:block">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-slate-500">Interactive Tools</p>
            <div className="grid grid-cols-2 gap-2">
              {tools.map((tool) => (
                <button
                  key={tool.label}
                  className={`flex h-[52px] flex-col items-center justify-center gap-1 rounded-xl border text-[11px] font-bold transition ${
                    tool.active
                      ? 'border-indigo-400/20 bg-indigo-500 text-white shadow-lg shadow-indigo-950/30'
                      : 'border-white/7 bg-white/[0.04] text-slate-300 hover:border-white/14 hover:bg-white/[0.07]'
                  }`}
                >
                  <tool.icon size={17} strokeWidth={tool.active ? 2.3 : 1.8} />
                  <span>{tool.label}</span>
                </button>
              ))}
            </div>

            <div className="my-5 h-px bg-white/8" />

            <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-slate-500">Stroke Color</p>
            <div className="flex items-center gap-2">
              {swatches.map((color, index) => (
                <button
                  key={color}
                  className={`h-6 w-6 rounded-full border transition ${index === 0 ? 'border-white ring-2 ring-white/80' : 'border-white/10 hover:scale-105'}`}
                  style={{ backgroundColor: color }}
                  aria-label={`Select ${color}`}
                />
              ))}
            </div>

            <div className="my-5 h-px bg-white/8" />

            <div className="mb-3 flex items-center justify-between text-[11px] font-bold text-slate-500">
              <span>Brush / Font Size</span>
              <span>8px</span>
            </div>
            <input className="w-full" type="range" min="1" max="24" defaultValue="4" aria-label="Brush or font size" />

            <div className="mt-8">
              <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-slate-500">Hotkeys Guide</p>
              <div className="rounded-lg bg-[#0b1323] p-3 text-[11px] font-semibold text-slate-400">
                {[
                  ['T', 'Ctrl+T', 'Add Text'],
                  ['D', 'Ctrl+D', 'Brush Paint'],
                  ['H', 'Ctrl+H', 'Highlight'],
                  ['X', 'Ctrl+E', 'Whiteout'],
                  ['Ctrl+Z', '', 'Undo'],
                  ['Ctrl+Y', '', 'Redo'],
                  ['Ctrl + / -', '', 'Canvas Zoom'],
                ].map(([key, chord, label]) => (
                  <div key={`${key}-${label}`} className="mb-1.5 flex items-center gap-1 last:mb-0">
                    <kbd className="rounded bg-slate-700 px-1.5 py-0.5 text-[10px] text-white">{key}</kbd>
                    {chord && <kbd className="rounded bg-slate-800 px-1.5 py-0.5 text-[10px] text-white">{chord}</kbd>}
                    <span>: {label}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <main className="relative flex min-w-0 flex-1 items-center justify-center bg-[#020717] p-6">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30" />
            <div
              className="relative aspect-[313/635] overflow-hidden rounded-xl bg-slate-50 text-slate-950 shadow-2xl shadow-black/40 ring-1 ring-white/70"
              style={{ height: 'min(635px, calc(100vh - 190px))' }}
            >
              <div className="p-3">
                <h2 className="font-display text-lg font-bold">History</h2>
                <label className="mt-2 flex h-11 items-center gap-2 rounded border border-slate-400 bg-white px-3 text-sm text-slate-500">
                  <Search size={15} />
                  <input className="min-w-0 flex-1 bg-transparent text-xs outline-none" placeholder="Search vault..." />
                </label>
                <div className="mt-5 flex gap-1.5">
                  {['All', 'Encoded', 'Decoded'].map((filter, index) => (
                    <button
                      key={filter}
                      className={`h-6 rounded-md border px-3 text-[11px] ${index === 0 ? 'border-violet-100 bg-violet-100 text-slate-900' : 'border-slate-400 bg-white text-slate-700'}`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex h-[440px] flex-col items-center justify-center">
                <div className="relative mb-4 h-32 w-32">
                  <div className="absolute left-11 top-10 h-8 w-10 rounded-t bg-yellow-400" />
                  <div className="absolute left-14 top-8 h-4 w-10 rounded-t bg-blue-500" />
                  <div className="absolute left-8 top-9 h-5 w-10 rounded-t bg-red-500" />
                  <div className="absolute left-10 top-11 h-5 w-12 rounded-t bg-green-500" />
                  <div className="absolute left-9 top-12 h-[30px] w-16 rounded-sm border border-amber-500 bg-yellow-400 shadow-sm" />
                </div>
                <p className="text-xs font-extrabold text-slate-950">No history yet</p>
              </div>

              <nav className="absolute bottom-0 left-0 right-0 grid h-[61px] grid-cols-5 border-t border-slate-200 bg-[#eaf0ff]">
                {navItems.map((item) => (
                  <button key={item.label} className="flex flex-col items-center justify-center gap-1 text-[9px] text-slate-900">
                    <span className={`grid h-8 w-8 place-items-center rounded-full ${item.active ? 'bg-pink-100' : ''}`}>
                      <item.icon size={16} strokeWidth={1.5} />
                    </span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </main>
        </div>

        <footer className="flex h-[66px] items-center justify-between border-t border-white/8 bg-[#111a2b] px-6">
          <div className="flex items-center gap-2">
            <button className="grid h-9 w-9 place-items-center rounded-xl bg-white/[0.03] text-slate-500" aria-label="Undo">
              <Undo2 size={17} />
            </button>
            <button className="grid h-9 w-9 place-items-center rounded-xl bg-white/[0.03] text-slate-500" aria-label="Redo">
              <Redo2 size={17} />
            </button>
            <button className="ml-1 h-9 rounded-xl border border-red-400/25 bg-red-500/10 px-4 text-sm font-bold text-red-400">
              Reset Page
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden h-9 items-center gap-2 rounded-xl border border-indigo-400/30 bg-indigo-500/10 px-4 text-sm font-bold text-indigo-300 sm:inline-flex">
              <Download size={16} />
              Instant Download
            </button>
            <button className="inline-flex h-9 items-center gap-2 rounded-xl bg-blue-500 px-4 text-sm font-bold text-white shadow-lg shadow-blue-950/20">
              <Layers size={16} />
              Apply to All Pages
            </button>
            <button className="hidden h-9 rounded-xl bg-white/[0.06] px-5 text-sm font-bold text-slate-200 md:block">Cancel</button>
            <button className="inline-flex h-9 items-center gap-2 rounded-xl bg-emerald-500 px-5 text-sm font-bold text-white shadow-lg shadow-emerald-950/20">
              <Save size={16} />
              Apply Changes
            </button>
          </div>
        </footer>
      </section>

    </div>
  );
}
