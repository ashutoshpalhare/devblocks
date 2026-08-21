export const STARTER_HTML = `<!doctype html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>My Site — built with DevBlocks</title>
  <meta name="description" content="A starter page assembled from free DevBlocks Tailwind blocks." />
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-white text-slate-900 antialiased">

  <!-- ===== NAVBAR BLOCK ===== -->
  <header class="sticky top-0 z-40 border-b border-slate-200 bg-white/85 backdrop-blur">
    <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
      <a href="#" class="text-base font-bold tracking-tight">MySite</a>
      <nav class="hidden gap-6 text-sm text-slate-600 md:flex">
        <a href="#features" class="hover:text-slate-900">Features</a>
        <a href="#pricing" class="hover:text-slate-900">Pricing</a>
        <a href="#contact" class="hover:text-slate-900">Contact</a>
      </nav>
      <a href="#contact" class="rounded-lg bg-slate-900 px-3.5 py-2 text-sm font-semibold text-white">Get started</a>
    </div>
  </header>

  <!-- ===== HERO BLOCK ===== -->
  <section class="mx-auto max-w-6xl px-4 py-20 text-center">
    <h1 class="mx-auto max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">Ship your idea this weekend</h1>
    <p class="mx-auto mt-5 max-w-xl text-lg text-slate-600">Copy blocks, paste them here, change the words. That is the whole workflow.</p>
    <div class="mt-8 flex justify-center gap-3">
      <a href="#features" class="rounded-xl bg-cyan-600 px-5 py-3 text-sm font-semibold text-white">See features</a>
      <a href="#contact" class="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold">Contact us</a>
    </div>
  </section>

  <!-- ===== FEATURES BLOCK ===== -->
  <section id="features" class="border-y border-slate-200 bg-slate-50">
    <div class="mx-auto max-w-6xl px-4 py-16">
      <h2 class="text-2xl font-bold">Everything you need</h2>
      <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div class="rounded-xl border border-slate-200 bg-white p-5">
          <h3 class="font-semibold">Fast</h3>
          <p class="mt-1 text-sm text-slate-600">Static markup, no build step required.</p>
        </div>
        <div class="rounded-xl border border-slate-200 bg-white p-5">
          <h3 class="font-semibold">Responsive</h3>
          <p class="mt-1 text-sm text-slate-600">Mobile-first from 320px upward.</p>
        </div>
        <div class="rounded-xl border border-slate-200 bg-white p-5">
          <h3 class="font-semibold">Accessible</h3>
          <p class="mt-1 text-sm text-slate-600">Semantic tags and visible focus states.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== PASTE MORE BLOCKS HERE ===== -->

  <!-- ===== CONTACT BLOCK ===== -->
  <section id="contact" class="mx-auto max-w-md px-4 py-20">
    <h2 class="text-2xl font-bold">Get in touch</h2>
    <form class="mt-6 space-y-3">
      <label class="block text-sm font-medium" for="email">Email</label>
      <input id="email" type="email" required class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="you@example.com" />
      <label class="block text-sm font-medium" for="msg">Message</label>
      <textarea id="msg" rows="4" class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="Tell us what you need"></textarea>
      <button type="submit" class="w-full rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white">Send message</button>
    </form>
  </section>

  <!-- ===== FOOTER BLOCK ===== -->
  <footer class="border-t border-slate-200">
    <div class="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-slate-600 sm:flex-row sm:justify-between">
      <p>&copy; 2026 MySite. All rights reserved.</p>
      <p>Built with DevBlocks</p>
    </div>
  </footer>

</body>
</html>`;

export const STARTER_REACT = `// src/App.tsx — same starter, as a React component
export default function App() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Features />
      {/* Paste more DevBlocks blocks here */}
      <Contact />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 text-center">
      <h1 className="mx-auto max-w-3xl text-4xl font-bold sm:text-6xl">
        Ship your idea this weekend
      </h1>
      <p className="mx-auto mt-5 max-w-xl text-lg text-slate-600">
        Copy blocks, paste them here, change the words.
      </p>
    </section>
  );
}`;

export const STARTER_PREVIEW = `<div class="min-h-full bg-white">
  <div class="flex items-center justify-between border-b border-slate-200 px-4 py-3">
    <span class="text-xs font-bold text-slate-900">MySite</span>
    <span class="rounded-md bg-slate-900 px-2 py-1 text-[10px] font-semibold text-white">Get started</span>
  </div>
  <div class="px-4 py-8 text-center">
    <p class="text-base font-bold text-slate-900">Ship your idea this weekend</p>
    <p class="mt-1 text-xs text-slate-600">Copy blocks, paste, change the words.</p>
    <div class="mt-3 flex justify-center gap-2">
      <span class="rounded-lg bg-cyan-600 px-3 py-1.5 text-[10px] font-semibold text-white">See features</span>
      <span class="rounded-lg border border-slate-200 px-3 py-1.5 text-[10px] font-semibold text-slate-700">Contact</span>
    </div>
  </div>
  <div class="grid grid-cols-3 gap-2 bg-slate-50 p-4">
    <div class="h-12 rounded-lg border border-slate-200 bg-white"></div>
    <div class="h-12 rounded-lg border border-slate-200 bg-white"></div>
    <div class="h-12 rounded-lg border border-slate-200 bg-white"></div>
  </div>
</div>`;

export interface DocStep {
  step: string;
  title: string;
  body: string;
  code?: string;
  language?: string;
}

export const DOC_STEPS: DocStep[] = [
  {
    step: "01",
    title: "Create one HTML file",
    body: "Make a file called index.html anywhere on your computer. No installs, no terminal, no build tools. Copy the starter above into it and open it in your browser.",
  },
  {
    step: "02",
    title: "Load Tailwind",
    body: "The starter already includes the Tailwind CDN script in the <head>. It compiles utility classes in the browser, which is perfect for learning and prototypes.",
    code: `<script src="https://cdn.tailwindcss.com"></script>`,
    language: "html",
  },
  {
    step: "03",
    title: "Pick a block and copy it",
    body: "Open any component in the library, preview it, then hit Copy code. Every block is plain HTML plus Tailwind classes, so it works in the starter unchanged.",
  },
  {
    step: "04",
    title: "Paste it between the markers",
    body: "The starter has a comment marking where new sections go. Paste your block there — order the sections the way you want the page to read.",
    code: `  <!-- ===== PASTE MORE BLOCKS HERE ===== -->
  <section class="mx-auto max-w-6xl px-4 py-16">
    <!-- your copied block -->
  </section>`,
    language: "html",
  },
  {
    step: "05",
    title: "Make it yours",
    body: "Change the text first, then the colours. Swap every bg-cyan-600 / text-cyan-600 for your own accent, and keep the spacing scale (py-16, gap-4) consistent across sections.",
    code: `<!-- accent swap: cyan -> violet -->
<a class="rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white">Get started</a>`,
    language: "html",
  },
  {
    step: "06",
    title: "Check it at 320px",
    body: "Open dev tools, set the width to 320px and scroll. If anything overflows sideways, add min-w-0 to text containers and shrink-0 to icons. Then publish it anywhere that serves static files.",
  },
];

export const STARTER_FAQ = [
  {
    q: "Do I need Node.js or npm?",
    a: "No. The HTML starter runs from a single file with the Tailwind CDN. Use the React version only when your project already has a build setup.",
  },
  {
    q: "Can I use these blocks in a paid project?",
    a: "Yes. Every block is free to use in personal, academic and commercial work, with no attribution required.",
  },
  {
    q: "The CDN warns me in production — is that a problem?",
    a: "For a real production site, install Tailwind properly and keep the same markup. The classes never change; only how the CSS is generated does.",
  },
  {
    q: "How do I change the fonts?",
    a: "Add a Google Fonts <link> in the <head> and set the family on <body> with a style attribute or a font-sans override.",
  },
];
