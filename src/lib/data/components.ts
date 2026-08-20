import type { UIComponent } from "../types";

const c = (x: Omit<UIComponent, "id" | "created_at"> & { created_at?: string }): UIComponent => ({
  id: x.slug,
  created_at: x.created_at ?? "2026-01-12T09:00:00.000Z",
  ...x,
});

export const COMPONENT_CATEGORIES = [
  "All",
  "Navbar",
  "Hero",
  "Buttons",
  "Cards",
  "Forms",
  "Login",
  "Signup",
  "Tables",
  "Dashboard",
  "Sidebar",
  "Modal",
  "Alert",
  "Pricing",
  "Footer",
  "Portfolio",
  "Education",
  "Admin",
] as const;

export const components: UIComponent[] = [
  c({
    name: "Modern Student Login",
    slug: "modern-student-login",
    description: "Responsive login interface designed for student portals and education platforms.",
    category: "Login",
    technologies: ["React", "Tailwind CSS"],
    difficulty: "Beginner",
    tags: ["login", "auth", "student", "form", "education"],
    learn: ["Flexbox centering", "Responsive spacing", "Form handling", "Tailwind utility classes"],
    preview: `<div class="flex min-h-full items-center justify-center bg-slate-50 p-6">
  <div class="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
    <div class="mb-5">
      <div class="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold text-white">S</div>
      <h2 class="text-lg font-semibold text-slate-900">Student sign in</h2>
      <p class="text-sm text-slate-500">Use your campus credentials to continue.</p>
    </div>
    <label class="mb-1 block text-xs font-medium text-slate-700">Roll number</label>
    <input class="mb-3 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900" placeholder="22CS1043" />
    <label class="mb-1 block text-xs font-medium text-slate-700">Password</label>
    <input type="password" class="mb-4 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900" placeholder="••••••••" />
    <button class="w-full rounded-lg bg-slate-900 py-2 text-sm font-semibold text-white">Sign in</button>
    <p class="mt-3 text-center text-xs text-slate-500">Forgot password?</p>
  </div>
</div>`,
  }),
  c({
    name: "Split Login",
    slug: "split-login",
    description: "Two-column login with a branded panel on the left and a compact form on the right.",
    category: "Login",
    technologies: ["HTML", "Tailwind CSS"],
    difficulty: "Intermediate",
    tags: ["login", "split", "auth", "grid"],
    learn: ["CSS grid columns", "Hiding panels on mobile", "Contrast and hierarchy"],
    preview: `<div class="grid h-full min-h-full grid-cols-1 md:grid-cols-2">
  <div class="hidden flex-col justify-between bg-slate-900 p-8 md:flex">
    <span class="text-sm font-semibold text-white">Campus Portal</span>
    <p class="text-2xl font-semibold leading-snug text-white">Everything your course needs, in one place.</p>
    <span class="text-xs text-slate-400">Semester 2026</span>
  </div>
  <div class="flex items-center justify-center bg-white p-8">
    <div class="w-full max-w-xs">
      <h2 class="mb-4 text-xl font-semibold text-slate-900">Welcome back</h2>
      <input class="mb-3 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="Email" />
      <input type="password" class="mb-4 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="Password" />
      <button class="w-full rounded-lg bg-cyan-600 py-2 text-sm font-semibold text-white">Continue</button>
    </div>
  </div>
</div>`,
  }),
  c({
    name: "Minimal Login",
    slug: "minimal-login",
    description: "A stripped-back centered login card with only the essentials.",
    category: "Login",
    technologies: ["HTML", "Tailwind CSS"],
    difficulty: "Beginner",
    tags: ["login", "minimal", "auth"],
    learn: ["Vertical rhythm", "Input states", "Minimal UI design"],
    preview: `<div class="flex min-h-full items-center justify-center bg-white p-6">
  <form class="w-full max-w-xs space-y-3">
    <h2 class="text-center text-base font-semibold tracking-tight text-slate-900">Sign in</h2>
    <input class="w-full rounded-md border-b border-slate-300 bg-transparent px-1 py-2 text-sm" placeholder="Email address" />
    <input type="password" class="w-full rounded-md border-b border-slate-300 bg-transparent px-1 py-2 text-sm" placeholder="Password" />
    <button class="w-full rounded-md bg-slate-900 py-2 text-sm font-medium text-white">Continue</button>
  </form>
</div>`,
  }),
  c({
    name: "Dark Login",
    slug: "dark-login",
    description: "Dark-themed authentication card with subtle borders for developer tools.",
    category: "Login",
    technologies: ["HTML", "Tailwind CSS"],
    difficulty: "Beginner",
    tags: ["login", "dark", "auth"],
    learn: ["Dark surfaces and contrast", "Border-based depth", "Accessible placeholder text"],
    preview: `<div class="flex min-h-full items-center justify-center bg-slate-950 p-6">
  <div class="w-full max-w-sm rounded-2xl border border-white/10 bg-slate-900 p-6">
    <h2 class="mb-1 text-lg font-semibold text-white">Sign in to Console</h2>
    <p class="mb-5 text-sm text-slate-400">Use your workspace account.</p>
    <input class="mb-3 w-full rounded-lg border border-white/10 bg-slate-950 px-3 py-2 text-sm text-white" placeholder="you@team.dev" />
    <input type="password" class="mb-4 w-full rounded-lg border border-white/10 bg-slate-950 px-3 py-2 text-sm text-white" placeholder="Password" />
    <button class="w-full rounded-lg bg-cyan-400 py-2 text-sm font-semibold text-slate-950">Sign in</button>
  </div>
</div>`,
  }),
  c({
    name: "Student Signup",
    slug: "student-signup",
    description: "Registration form with name, email, branch selection and terms checkbox.",
    category: "Signup",
    technologies: ["React", "Tailwind CSS"],
    difficulty: "Intermediate",
    tags: ["signup", "register", "form", "student"],
    learn: ["Select inputs", "Checkbox labels", "Two-column form fields"],
    preview: `<div class="flex min-h-full items-center justify-center bg-slate-50 p-6">
  <div class="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6">
    <h2 class="mb-4 text-lg font-semibold text-slate-900">Create your account</h2>
    <div class="mb-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
      <input class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="First name" />
      <input class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="Last name" />
    </div>
    <input class="mb-3 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="College email" />
    <select class="mb-3 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-700">
      <option>Computer Science</option>
      <option>Information Technology</option>
    </select>
    <label class="mb-4 flex items-center gap-2 text-xs text-slate-600"><input type="checkbox" class="rounded border-slate-300" /> I agree to the terms</label>
    <button class="w-full rounded-lg bg-slate-900 py-2 text-sm font-semibold text-white">Create account</button>
  </div>
</div>`,
  }),
  c({
    name: "Product Navbar",
    slug: "product-navbar",
    description: "Sticky top navigation with links, search field and a primary action button.",
    category: "Navbar",
    technologies: ["HTML", "Tailwind CSS"],
    difficulty: "Beginner",
    tags: ["navbar", "navigation", "header", "menu"],
    learn: ["Flexbox alignment", "Responsive visibility", "Spacing scale"],
    preview: `<div class="min-h-full bg-white p-4">
  <nav class="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3">
    <div class="flex items-center gap-6">
      <span class="text-sm font-bold text-slate-900">Orbit</span>
      <div class="hidden gap-5 text-sm text-slate-600 md:flex"><a href="#">Product</a><a href="#">Docs</a><a href="#">Pricing</a></div>
    </div>
    <div class="flex items-center gap-2">
      <input class="hidden w-40 rounded-lg border border-slate-200 px-3 py-1.5 text-xs sm:block" placeholder="Search" />
      <button class="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white">Get started</button>
    </div>
  </nav>
</div>`,
  }),
  c({
    name: "App Navbar with Avatar",
    slug: "app-navbar-avatar",
    description: "Application header with breadcrumb, notification dot and user avatar.",
    category: "Navbar",
    technologies: ["React", "Tailwind CSS"],
    difficulty: "Intermediate",
    tags: ["navbar", "app", "avatar", "dashboard"],
    learn: ["Avatar patterns", "Truncating text", "Icon buttons"],
    preview: `<div class="min-h-full bg-slate-50 p-4">
  <header class="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3">
    <div class="min-w-0">
      <p class="truncate text-xs text-slate-500">Workspace / Courses</p>
      <h3 class="truncate text-sm font-semibold text-slate-900">Data Structures</h3>
    </div>
    <div class="flex shrink-0 items-center gap-3">
      <span class="relative inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-xs">🔔<span class="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-rose-500"></span></span>
      <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">AK</span>
    </div>
  </header>
</div>`,
  }),
  c({
    name: "Gradient-Free Hero",
    slug: "clean-product-hero",
    description: "Centered marketing hero with headline, supporting copy and dual actions.",
    category: "Hero",
    technologies: ["HTML", "Tailwind CSS"],
    difficulty: "Beginner",
    tags: ["hero", "landing", "marketing"],
    learn: ["Typographic scale", "Max-width for readability", "Button hierarchy"],
    preview: `<div class="flex min-h-full flex-col items-center justify-center bg-white px-6 py-12 text-center">
  <span class="mb-4 rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600">v2.0 is out</span>
  <h1 class="max-w-lg text-3xl font-semibold tracking-tight text-slate-900">Ship your interface in an afternoon</h1>
  <p class="mt-3 max-w-md text-sm text-slate-600">Composable blocks that stay readable when your project grows.</p>
  <div class="mt-6 flex flex-wrap justify-center gap-3">
    <button class="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Get started</button>
    <button class="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900">Documentation</button>
  </div>
</div>`,
  }),
  c({
    name: "Split Feature Hero",
    slug: "split-feature-hero",
    description: "Hero with copy on one side and a mock interface panel on the other.",
    category: "Hero",
    technologies: ["HTML", "Tailwind CSS"],
    difficulty: "Intermediate",
    tags: ["hero", "split", "landing", "grid"],
    learn: ["Responsive grid", "Mock UI panels", "Balanced whitespace"],
    preview: `<div class="grid min-h-full grid-cols-1 items-center gap-6 bg-white p-8 md:grid-cols-2">
  <div>
    <h1 class="text-2xl font-semibold tracking-tight text-slate-900">Track attendance without spreadsheets</h1>
    <p class="mt-3 text-sm text-slate-600">Mark, review and export attendance for every class in seconds.</p>
    <button class="mt-5 rounded-lg bg-cyan-600 px-4 py-2 text-sm font-semibold text-white">Try the demo</button>
  </div>
  <div class="rounded-xl border border-slate-200 bg-slate-50 p-4">
    <div class="mb-2 h-2 w-16 rounded bg-slate-300"></div>
    <div class="space-y-2">
      <div class="flex items-center justify-between rounded-lg bg-white p-2 text-xs text-slate-700"><span>Ananya R.</span><span class="text-emerald-600">Present</span></div>
      <div class="flex items-center justify-between rounded-lg bg-white p-2 text-xs text-slate-700"><span>Dev P.</span><span class="text-rose-600">Absent</span></div>
      <div class="flex items-center justify-between rounded-lg bg-white p-2 text-xs text-slate-700"><span>Meera S.</span><span class="text-emerald-600">Present</span></div>
    </div>
  </div>
</div>`,
  }),
  c({
    name: "Button Set",
    slug: "button-set",
    description: "Primary, secondary, ghost, destructive and icon button variants in one sheet.",
    category: "Buttons",
    technologies: ["HTML", "Tailwind CSS"],
    difficulty: "Beginner",
    tags: ["buttons", "variants", "actions"],
    learn: ["Variant thinking", "Focus rings", "Consistent padding"],
    preview: `<div class="flex min-h-full flex-wrap items-center justify-center gap-3 bg-white p-8">
  <button class="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Primary</button>
  <button class="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900">Secondary</button>
  <button class="rounded-lg px-4 py-2 text-sm font-semibold text-slate-700">Ghost</button>
  <button class="rounded-lg bg-rose-600 px-4 py-2 text-sm font-semibold text-white">Delete</button>
  <button class="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 text-sm">+</button>
</div>`,
  }),
  c({
    name: "Stat Card Row",
    slug: "stat-card-row",
    description: "Three KPI cards with labels, values and change indicators.",
    category: "Dashboard",
    technologies: ["React", "Tailwind CSS"],
    difficulty: "Beginner",
    tags: ["dashboard", "stats", "kpi", "cards"],
    learn: ["Responsive grids", "Numeric hierarchy", "Semantic color for change"],
    preview: `<div class="grid min-h-full grid-cols-1 gap-3 bg-slate-50 p-6 sm:grid-cols-3">
  <div class="rounded-xl border border-slate-200 bg-white p-4"><p class="text-xs text-slate-500">Attendance</p><p class="mt-1 text-2xl font-semibold text-slate-900">92%</p><p class="text-xs text-emerald-600">+3.1% this week</p></div>
  <div class="rounded-xl border border-slate-200 bg-white p-4"><p class="text-xs text-slate-500">Assignments</p><p class="mt-1 text-2xl font-semibold text-slate-900">18</p><p class="text-xs text-slate-500">4 pending</p></div>
  <div class="rounded-xl border border-slate-200 bg-white p-4"><p class="text-xs text-slate-500">CGPA</p><p class="mt-1 text-2xl font-semibold text-slate-900">8.4</p><p class="text-xs text-emerald-600">+0.2</p></div>
</div>`,
  }),
  c({
    name: "Course Progress Card",
    slug: "course-progress-card",
    description: "Course card with instructor, progress bar and continue action.",
    category: "Education",
    technologies: ["React", "Tailwind CSS"],
    difficulty: "Beginner",
    tags: ["course", "progress", "education", "card", "lms"],
    learn: ["Progress bars with width utilities", "Card composition", "Meta text styling"],
    preview: `<div class="flex min-h-full items-center justify-center bg-slate-50 p-6">
  <div class="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-5">
    <span class="rounded-md bg-cyan-50 px-2 py-0.5 text-xs font-medium text-cyan-700">Semester 4</span>
    <h3 class="mt-3 text-base font-semibold text-slate-900">Operating Systems</h3>
    <p class="text-xs text-slate-500">Dr. N. Iyer · 24 lessons</p>
    <div class="mt-4 h-2 w-full rounded-full bg-slate-100"><div class="h-2 w-2/3 rounded-full bg-cyan-600"></div></div>
    <div class="mt-2 flex items-center justify-between text-xs text-slate-500"><span>66% complete</span><span>16/24</span></div>
    <button class="mt-4 w-full rounded-lg bg-slate-900 py-2 text-sm font-semibold text-white">Continue</button>
  </div>
</div>`,
  }),
  c({
    name: "Students Table",
    slug: "students-table",
    description: "Data table with status pills, row actions and a sticky header row.",
    category: "Tables",
    technologies: ["HTML", "Tailwind CSS"],
    difficulty: "Intermediate",
    tags: ["table", "data", "students", "admin"],
    learn: ["Table semantics", "Horizontal scroll on mobile", "Status pills"],
    preview: `<div class="min-h-full bg-white p-4">
  <div class="overflow-x-auto rounded-xl border border-slate-200">
    <table class="w-full text-left text-sm">
      <thead class="bg-slate-50 text-xs uppercase tracking-wide text-slate-500"><tr><th class="px-4 py-2">Name</th><th class="px-4 py-2">Roll</th><th class="px-4 py-2">Status</th></tr></thead>
      <tbody class="divide-y divide-slate-100 text-slate-700">
        <tr><td class="px-4 py-2">Ananya Rao</td><td class="px-4 py-2">22CS101</td><td class="px-4 py-2"><span class="rounded-full bg-emerald-50 px-2 py-0.5 text-xs text-emerald-700">Active</span></td></tr>
        <tr><td class="px-4 py-2">Dev Patel</td><td class="px-4 py-2">22CS118</td><td class="px-4 py-2"><span class="rounded-full bg-amber-50 px-2 py-0.5 text-xs text-amber-700">On leave</span></td></tr>
        <tr><td class="px-4 py-2">Meera Shah</td><td class="px-4 py-2">22CS142</td><td class="px-4 py-2"><span class="rounded-full bg-emerald-50 px-2 py-0.5 text-xs text-emerald-700">Active</span></td></tr>
      </tbody>
    </table>
  </div>
</div>`,
  }),
  c({
    name: "Admin Sidebar",
    slug: "admin-sidebar",
    description: "Vertical navigation with sections, active state and account footer.",
    category: "Sidebar",
    technologies: ["React", "Tailwind CSS"],
    difficulty: "Intermediate",
    tags: ["sidebar", "navigation", "admin", "dashboard"],
    learn: ["Active navigation states", "Vertical spacing", "Sticky footers in columns"],
    preview: `<div class="flex min-h-full bg-slate-50 p-4">
  <aside class="flex w-56 flex-col justify-between rounded-xl border border-slate-200 bg-white p-3">
    <div>
      <p class="px-2 pb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">Manage</p>
      <nav class="space-y-1 text-sm">
        <a class="block rounded-lg bg-slate-900 px-3 py-2 font-medium text-white" href="#">Overview</a>
        <a class="block rounded-lg px-3 py-2 text-slate-700" href="#">Students</a>
        <a class="block rounded-lg px-3 py-2 text-slate-700" href="#">Courses</a>
        <a class="block rounded-lg px-3 py-2 text-slate-700" href="#">Reports</a>
      </nav>
    </div>
    <div class="flex items-center gap-2 rounded-lg border border-slate-200 p-2 text-xs text-slate-600"><span class="h-6 w-6 rounded-full bg-slate-900"></span> Admin</div>
  </aside>
</div>`,
  }),
  c({
    name: "Confirm Modal",
    slug: "confirm-modal",
    description: "Destructive confirmation dialog with overlay, title and action pair.",
    category: "Modal",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    difficulty: "Intermediate",
    tags: ["modal", "dialog", "confirm", "overlay"],
    learn: ["Overlay layering", "Dialog accessibility", "Action ordering"],
    preview: `<div class="relative flex min-h-full items-center justify-center bg-slate-900/40 p-6">
  <div role="dialog" aria-label="Delete record" class="w-full max-w-sm rounded-2xl bg-white p-5 shadow-xl">
    <h3 class="text-base font-semibold text-slate-900">Delete this record?</h3>
    <p class="mt-1 text-sm text-slate-600">This action cannot be undone and will remove all related results.</p>
    <div class="mt-5 flex justify-end gap-2">
      <button class="rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700">Cancel</button>
      <button class="rounded-lg bg-rose-600 px-3 py-1.5 text-sm font-semibold text-white">Delete</button>
    </div>
  </div>
</div>`,
  }),
  c({
    name: "Inline Alerts",
    slug: "inline-alerts",
    description: "Success, warning and error alert banners with icons and messages.",
    category: "Alert",
    technologies: ["HTML", "Tailwind CSS"],
    difficulty: "Beginner",
    tags: ["alert", "banner", "feedback", "notification"],
    learn: ["Semantic color usage", "Icon and text alignment", "Readable feedback copy"],
    preview: `<div class="min-h-full space-y-3 bg-white p-6">
  <div class="flex gap-2 rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800"><span>✓</span><p>Assignment submitted successfully.</p></div>
  <div class="flex gap-2 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800"><span>!</span><p>Attendance is below 75% this month.</p></div>
  <div class="flex gap-2 rounded-lg border border-rose-200 bg-rose-50 p-3 text-sm text-rose-800"><span>×</span><p>We could not save your changes. Try again.</p></div>
</div>`,
  }),
  c({
    name: "Pricing Card",
    slug: "pricing-card",
    description: "Single highlighted plan card with feature list and call to action.",
    category: "Pricing",
    technologies: ["HTML", "Tailwind CSS"],
    difficulty: "Beginner",
    tags: ["pricing", "plan", "card", "marketing"],
    learn: ["List styling", "Emphasising a plan", "Price typography"],
    preview: `<div class="flex min-h-full items-center justify-center bg-slate-50 p-6">
  <div class="w-full max-w-xs rounded-2xl border-2 border-slate-900 bg-white p-5">
    <p class="text-xs font-semibold uppercase tracking-wide text-slate-500">Team</p>
    <p class="mt-2 text-3xl font-semibold text-slate-900">$19<span class="text-sm font-normal text-slate-500">/mo</span></p>
    <ul class="mt-4 space-y-2 text-sm text-slate-600"><li>Unlimited projects</li><li>Shared workspaces</li><li>Priority support</li></ul>
    <button class="mt-5 w-full rounded-lg bg-slate-900 py-2 text-sm font-semibold text-white">Choose Team</button>
  </div>
</div>`,
  }),
  c({
    name: "Contact Form",
    slug: "contact-form",
    description: "Accessible contact form with labels, textarea and helper text.",
    category: "Forms",
    technologies: ["HTML", "Tailwind CSS"],
    difficulty: "Beginner",
    tags: ["form", "contact", "input", "textarea"],
    learn: ["Label association", "Textarea sizing", "Helper text patterns"],
    preview: `<div class="min-h-full bg-white p-6">
  <form class="mx-auto w-full max-w-md space-y-3">
    <div><label for="n" class="mb-1 block text-xs font-medium text-slate-700">Name</label><input id="n" class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" /></div>
    <div><label for="e" class="mb-1 block text-xs font-medium text-slate-700">Email</label><input id="e" type="email" class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" /></div>
    <div><label for="m" class="mb-1 block text-xs font-medium text-slate-700">Message</label><textarea id="m" rows="3" class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"></textarea><p class="mt-1 text-xs text-slate-500">We reply within two working days.</p></div>
    <button class="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Send message</button>
  </form>
</div>`,
  }),
  c({
    name: "Portfolio Project Card",
    slug: "portfolio-project-card",
    description: "Project showcase card with stack badges and repository link.",
    category: "Portfolio",
    technologies: ["React", "Tailwind CSS"],
    difficulty: "Beginner",
    tags: ["portfolio", "project", "card", "showcase"],
    learn: ["Badge groups", "Card hover affordance", "Content truncation"],
    preview: `<div class="flex min-h-full items-center justify-center bg-slate-50 p-6">
  <article class="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-5">
    <div class="mb-3 h-24 rounded-lg bg-slate-100"></div>
    <h3 class="text-base font-semibold text-slate-900">Campus Bus Tracker</h3>
    <p class="mt-1 text-sm text-slate-600">Realtime bus locations and arrival estimates for campus routes.</p>
    <div class="mt-3 flex flex-wrap gap-1.5 text-xs text-slate-600"><span class="rounded-md border border-slate-200 px-2 py-0.5">React</span><span class="rounded-md border border-slate-200 px-2 py-0.5">Maps API</span></div>
    <a href="#" class="mt-4 inline-block text-sm font-semibold text-cyan-700">View repository →</a>
  </article>
</div>`,
  }),
  c({
    name: "Site Footer",
    slug: "site-footer",
    description: "Multi-column footer with product links, resources and legal line.",
    category: "Footer",
    technologies: ["HTML", "Tailwind CSS"],
    difficulty: "Beginner",
    tags: ["footer", "links", "site"],
    learn: ["Column grids", "Small text hierarchy", "Link groups"],
    preview: `<div class="min-h-full bg-white p-6">
  <footer class="rounded-xl border border-slate-200 p-5">
    <div class="grid grid-cols-2 gap-6 sm:grid-cols-3">
      <div><p class="mb-2 text-xs font-semibold text-slate-900">Product</p><ul class="space-y-1 text-xs text-slate-600"><li>Components</li><li>Templates</li></ul></div>
      <div><p class="mb-2 text-xs font-semibold text-slate-900">Learn</p><ul class="space-y-1 text-xs text-slate-600"><li>Lessons</li><li>Challenges</li></ul></div>
      <div><p class="mb-2 text-xs font-semibold text-slate-900">Company</p><ul class="space-y-1 text-xs text-slate-600"><li>About</li><li>Contact</li></ul></div>
    </div>
    <p class="mt-5 border-t border-slate-100 pt-3 text-xs text-slate-500">© 2026 Orbit Labs</p>
  </footer>
</div>`,
  }),
  c({
    name: "Admin Activity Feed",
    slug: "admin-activity-feed",
    description: "Timeline list of recent administrative actions with timestamps.",
    category: "Admin",
    technologies: ["React", "Tailwind CSS"],
    difficulty: "Intermediate",
    tags: ["admin", "activity", "feed", "timeline"],
    learn: ["List timelines", "Relative timestamps", "Dividers vs cards"],
    preview: `<div class="min-h-full bg-slate-50 p-6">
  <div class="mx-auto max-w-md rounded-xl border border-slate-200 bg-white p-4">
    <p class="mb-3 text-sm font-semibold text-slate-900">Recent activity</p>
    <ul class="space-y-3 text-sm">
      <li class="flex gap-3"><span class="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-cyan-600"></span><div><p class="text-slate-800">Results published for Semester 4</p><p class="text-xs text-slate-500">12 minutes ago</p></div></li>
      <li class="flex gap-3"><span class="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-slate-300"></span><div><p class="text-slate-800">3 new students enrolled</p><p class="text-xs text-slate-500">1 hour ago</p></div></li>
      <li class="flex gap-3"><span class="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-slate-300"></span><div><p class="text-slate-800">Timetable updated for CSE-B</p><p class="text-xs text-slate-500">Yesterday</p></div></li>
    </ul>
  </div>
</div>`,
  }),
  c({
    name: "Empty State Card",
    slug: "empty-state-card",
    description: "Friendly empty state with explanation and a single next action.",
    category: "Cards",
    technologies: ["HTML", "Tailwind CSS"],
    difficulty: "Beginner",
    tags: ["empty", "state", "card", "placeholder"],
    learn: ["Writing helpful empty copy", "Centering content", "Dashed borders"],
    preview: `<div class="flex min-h-full items-center justify-center bg-white p-6">
  <div class="w-full max-w-sm rounded-2xl border border-dashed border-slate-300 p-8 text-center">
    <div class="mx-auto mb-3 h-10 w-10 rounded-xl bg-slate-100"></div>
    <h3 class="text-sm font-semibold text-slate-900">No assignments yet</h3>
    <p class="mt-1 text-sm text-slate-600">When your teacher posts work, it will show up here.</p>
    <button class="mt-4 rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-900">Refresh</button>
  </div>
</div>`,
  }),
];

export function getComponent(slug: string) {
  return components.find((x) => x.slug === slug);
}

export function relatedComponents(item: UIComponent, count = 3) {
  return components
    .filter((x) => x.slug !== item.slug)
    .map((x) => ({
      x,
      score:
        (x.category === item.category ? 3 : 0) +
        x.tags.filter((t) => item.tags.includes(t)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map((r) => r.x);
}
