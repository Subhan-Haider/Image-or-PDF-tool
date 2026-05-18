import { Layers, ShieldCheck, FileImage, Download, Type, Edit3, Sparkles, Award, Move } from 'lucide-react';
import { Card } from '../components/Card';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

const FEATURES = [
  { icon: Edit3,       color: 'primary', title: 'Interactive PDF Editor', desc: 'Draw, highlight, erase, and annotate directly on PDF pages in a beautiful dark-mode canvas.' },
  { icon: ShieldCheck, color: 'emerald', title: 'Zero-Upload Privacy',    desc: 'Every conversion and edit runs locally in your browser. Your documents never touch a server.' },
  { icon: Sparkles,    color: 'violet',  title: 'Scan Enhancements',      desc: 'Fix skewed scans, auto-rotate pages, and apply high-contrast B&W filters to clean up documents.' },
  { icon: Award,       color: 'amber',   title: 'Smart Badges & Stamps',  desc: 'Stamp documents with APPROVED, VOID, DRAFT, or upload and place your own custom signatures.' },
  { icon: Type,        color: 'sky',     title: 'Dynamic Text Overlay',   desc: 'Type anywhere on the document with dynamic scaling that preserves sharpness on high-res PDFs.' },
  { icon: Layers,      color: 'pink',    title: 'Batch Annotations',      desc: 'Apply your watermark, signature, or edits to every single page in the PDF instantly.' },
  { icon: FileImage,   color: 'orange',  title: 'Format Conversion',      desc: 'Convert PDFs to high-res images, or compile dozens of images into a single polished PDF file.' },
  { icon: Move,        color: 'teal',    title: 'Advanced Viewport',      desc: 'Pan, zoom, and navigate large documents effortlessly using intuitive hotkeys and trackpad gestures.' },
  { icon: Download,    color: 'indigo',  title: 'Instant Exports',        desc: 'Download individual edited pages or export the entire compiled document as a ZIP or PDF.' },
];

const colorMap: Record<string, string> = {
  primary: 'bg-primary-500/15 text-primary-600 dark:text-primary-400',
  emerald: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400',
  violet:  'bg-violet-500/15 text-violet-600 dark:text-violet-400',
  amber:   'bg-amber-500/15 text-amber-600 dark:text-amber-400',
  sky:     'bg-sky-500/15 text-sky-600 dark:text-sky-400',
  pink:    'bg-pink-500/15 text-pink-600 dark:text-pink-400',
  orange:  'bg-orange-500/15 text-orange-600 dark:text-orange-400',
  teal:    'bg-teal-500/15 text-teal-600 dark:text-teal-400',
  indigo:  'bg-indigo-500/15 text-indigo-600 dark:text-indigo-400',
};

export default function Features() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="font-display font-bold text-4xl sm:text-5xl mb-4">
          Every PDF Tool You <span className="gradient-text">Need</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
          From interactive document annotation to intelligent scan enhancements — all running
          privately in your browser without any installation or server uploads.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {FEATURES.map((f, i) => (
          <Card key={i} glow className="hover:-translate-y-1 transition-all duration-300">
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${colorMap[f.color]}`}>
              <f.icon size={22} />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">{f.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{f.desc}</p>
          </Card>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-4">
        <p className="text-slate-600 dark:text-slate-400 text-lg w-full sm:w-auto">Ready to try it yourself?</p>
        <div className="flex gap-4">
          <Link to="/pdf-tools">
            <Button size="lg">Open PDF Editor →</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
