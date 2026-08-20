import type { Template } from "../types";

export const TEMPLATE_CATEGORIES = [
  "All",
  "Landing Page",
  "Portfolio",
  "Dashboard",
  "Authentication",
  "Education",
  "E-commerce",
  "SaaS",
  "Admin",
] as const;

export const templates: Template[] = [
  {
    id: "t1",
    name: "Developer Portfolio",
    slug: "developer-portfolio",
    description: "Single-page portfolio with hero, project grid, skills and contact form.",
    category: "Portfolio",
    technologies: ["React", "Tailwind CSS"],
    difficulty: "Beginner",
    sections: ["Hero", "Projects", "Skills", "Experience", "Contact", "Footer"],
    preview: `<div class="min-h-full bg-white p-5">
  <div class="mb-3 flex items-center justify-between"><span class="text-xs font-bold text-slate-900">ananya.dev</span><span class="text-xs text-slate-500">Projects · About</span></div>
  <div class="rounded-xl bg-slate-900 p-5 text-white"><p class="text-sm font-semibold">Frontend developer & CS student</p><p class="mt-1 text-xs text-slate-300">I build fast, accessible interfaces.</p></div>
  <div class="mt-3 grid grid-cols-3 gap-2"><div class="h-12 rounded-lg bg-slate-100"></div><div class="h-12 rounded-lg bg-slate-100"></div><div class="h-12 rounded-lg bg-slate-100"></div></div>
</div>`,
  },
  {
    id: "t2",
    name: "Course Landing Page",
    slug: "course-landing-page",
    description: "Marketing page for an online course with syllabus, instructor and enrolment CTA.",
    category: "Education",
    technologies: ["HTML", "Tailwind CSS"],
    difficulty: "Intermediate",
    sections: ["Hero", "Outcomes", "Syllabus", "Instructor", "FAQ", "Enrol CTA"],
    preview: `<div class="min-h-full bg-slate-50 p-5">
  <div class="rounded-xl border border-slate-200 bg-white p-4"><p class="text-sm font-semibold text-slate-900">Full-Stack Web Development</p><p class="mt-1 text-xs text-slate-600">12 weeks · Project based</p><button class="mt-3 rounded-lg bg-cyan-600 px-3 py-1.5 text-xs font-semibold text-white">Enrol now</button></div>
  <div class="mt-3 space-y-2"><div class="h-8 rounded-lg border border-slate-200 bg-white"></div><div class="h-8 rounded-lg border border-slate-200 bg-white"></div></div>
</div>`,
  },
  {
    id: "t3",
    name: "Analytics Dashboard",
    slug: "analytics-dashboard",
    description: "Admin dashboard shell with sidebar, KPI row, chart area and recent table.",
    category: "Dashboard",
    technologies: ["React", "Tailwind CSS"],
    difficulty: "Advanced",
    sections: ["Sidebar", "Topbar", "KPI cards", "Chart", "Recent table"],
    preview: `<div class="flex min-h-full gap-3 bg-slate-50 p-4">
  <div class="hidden w-24 rounded-lg bg-slate-900 sm:block"></div>
  <div class="flex-1 space-y-2"><div class="grid grid-cols-3 gap-2"><div class="h-10 rounded-lg border border-slate-200 bg-white"></div><div class="h-10 rounded-lg border border-slate-200 bg-white"></div><div class="h-10 rounded-lg border border-slate-200 bg-white"></div></div><div class="h-20 rounded-lg border border-slate-200 bg-white"></div></div>
</div>`,
  },
  {
    id: "t4",
    name: "Auth Flow Pack",
    slug: "auth-flow-pack",
    description: "Sign in, sign up, forgot password and OTP verification screens in one style.",
    category: "Authentication",
    technologies: ["React", "Tailwind CSS"],
    difficulty: "Beginner",
    sections: ["Sign in", "Sign up", "Forgot password", "OTP", "Success"],
    preview: `<div class="grid min-h-full grid-cols-2 gap-2 bg-slate-50 p-4">
  <div class="rounded-lg border border-slate-200 bg-white p-3"><div class="mb-2 h-2 w-10 rounded bg-slate-300"></div><div class="space-y-1"><div class="h-5 rounded bg-slate-100"></div><div class="h-5 rounded bg-slate-100"></div><div class="h-5 rounded bg-slate-900"></div></div></div>
  <div class="rounded-lg border border-slate-200 bg-white p-3"><div class="mb-2 h-2 w-14 rounded bg-slate-300"></div><div class="grid grid-cols-4 gap-1"><div class="h-6 rounded bg-slate-100"></div><div class="h-6 rounded bg-slate-100"></div><div class="h-6 rounded bg-slate-100"></div><div class="h-6 rounded bg-slate-100"></div></div></div>
</div>`,
  },
  {
    id: "t5",
    name: "Storefront Starter",
    slug: "storefront-starter",
    description: "Product listing and detail layout with filters, gallery and cart drawer.",
    category: "E-commerce",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    difficulty: "Advanced",
    sections: ["Header", "Filters", "Product grid", "Product detail", "Cart drawer", "Checkout"],
    preview: `<div class="min-h-full bg-white p-4">
  <div class="mb-3 flex items-center justify-between"><span class="text-xs font-semibold text-slate-900">Shop</span><span class="rounded-md border border-slate-200 px-2 py-0.5 text-xs">Cart · 2</span></div>
  <div class="grid grid-cols-3 gap-2"><div class="h-16 rounded-lg bg-slate-100"></div><div class="h-16 rounded-lg bg-slate-100"></div><div class="h-16 rounded-lg bg-slate-100"></div></div>
</div>`,
  },
  {
    id: "t6",
    name: "SaaS Marketing Site",
    slug: "saas-marketing-site",
    description: "Product marketing layout with feature grid, comparison and final CTA.",
    category: "SaaS",
    technologies: ["HTML", "Tailwind CSS"],
    difficulty: "Intermediate",
    sections: ["Nav", "Hero", "Features", "Comparison", "FAQ", "CTA", "Footer"],
    preview: `<div class="min-h-full bg-white p-5 text-center">
  <p class="text-sm font-semibold text-slate-900">One workspace for your team</p>
  <p class="mt-1 text-xs text-slate-600">Plan, build and review in one place.</p>
  <div class="mt-3 grid grid-cols-3 gap-2"><div class="h-10 rounded-lg border border-slate-200"></div><div class="h-10 rounded-lg border border-slate-200"></div><div class="h-10 rounded-lg border border-slate-200"></div></div>
</div>`,
  },
];

export const getTemplate = (slug: string) => templates.find((t) => t.slug === slug);
