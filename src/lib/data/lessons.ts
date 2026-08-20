import type { Lesson } from "../types";

export const LESSON_CATEGORIES = [
  "All",
  "HTML",
  "CSS",
  "Tailwind",
  "JavaScript",
  "React",
  "Responsive Design",
] as const;

export const lessons: Lesson[] = [
  {
    id: "l1",
    title: "Understanding Tailwind Flexbox",
    slug: "understanding-tailwind-flexbox",
    category: "Tailwind",
    difficulty: "Beginner",
    content:
      "Flexbox lays items out along one axis. In Tailwind you turn a container into a flex container with `flex`, choose the direction with `flex-row` or `flex-col`, and distribute space with `justify-between` (main axis) and `items-center` (cross axis). Gaps between children use `gap-*` instead of margins, which keeps spacing predictable.",
    code: `<div class="flex items-center justify-between gap-4 rounded-xl border border-slate-200 p-4">
  <div>
    <p class="text-sm font-semibold text-slate-900">Data Structures</p>
    <p class="text-xs text-slate-500">Semester 3</p>
  </div>
  <button class="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white">Open</button>
</div>`,
    challenge: "Add a second card and make both cards stack on mobile and sit side by side from the md breakpoint.",
  },
  {
    id: "l2",
    title: "Semantic HTML That Screen Readers Love",
    slug: "semantic-html-basics",
    category: "HTML",
    difficulty: "Beginner",
    content:
      "Tags carry meaning. Use `header`, `nav`, `main`, `section`, `article` and `footer` instead of stacking `div` elements. Assistive technology builds a document outline from these tags, and search engines use it too. A single `h1` per page, then `h2`/`h3` in order, keeps the outline readable.",
    code: `<main>
  <h1>Course catalogue</h1>
  <section aria-labelledby="cs">
    <h2 id="cs">Computer Science</h2>
    <article>
      <h3>Operating Systems</h3>
      <p>Processes, scheduling and memory management.</p>
    </article>
  </section>
</main>`,
    challenge: "Rewrite a div-only card layout using article, header and footer elements.",
  },
  {
    id: "l3",
    title: "The Box Model, Finally Explained",
    slug: "css-box-model",
    category: "CSS",
    difficulty: "Beginner",
    content:
      "Every element is a box: content, padding, border, margin. `box-sizing: border-box` makes width include padding and border, which is why Tailwind sets it globally. Padding pushes content inward, margin pushes neighbours away, and margins between siblings can collapse.",
    code: `.card {
  box-sizing: border-box;
  width: 320px;
  padding: 16px;
  border: 1px solid #e2e8f0;
  margin-bottom: 12px;
}`,
    challenge: "Set a fixed width card with 24px padding and confirm its rendered width stays the same after adding a border.",
  },
  {
    id: "l4",
    title: "Responsive Breakpoints Without Guesswork",
    slug: "responsive-breakpoints",
    category: "Responsive Design",
    difficulty: "Intermediate",
    content:
      "Tailwind is mobile-first: unprefixed utilities apply everywhere, and `sm:`, `md:`, `lg:` override them upward. Design the 320px layout first, then add breakpoints only where the layout actually breaks — not once per screen size you can name.",
    code: `<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
  <div class="rounded-xl border p-4">Card one</div>
  <div class="rounded-xl border p-4">Card two</div>
  <div class="rounded-xl border p-4">Card three</div>
</div>`,
    challenge: "Make a stat row that shows one column at 320px, two at 768px and four at 1280px.",
  },
  {
    id: "l5",
    title: "CSS Grid for Page Layouts",
    slug: "css-grid-layouts",
    category: "CSS",
    difficulty: "Intermediate",
    content:
      "Grid handles two dimensions at once. `grid-template-columns` defines tracks, `gap` spaces them, and `minmax(0, 1fr)` keeps text columns shrinkable so long words do not blow the layout out. Use grid for page structure and flex for rows of controls.",
    code: `<div class="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
  <h2 class="truncate text-lg font-semibold">A very long course title that must truncate</h2>
  <button class="shrink-0 rounded-lg border px-3 py-1.5 text-sm">Edit</button>
</div>`,
    challenge: "Build a dashboard shell: fixed 240px sidebar plus a flexible content column that collapses on mobile.",
  },
  {
    id: "l6",
    title: "Handling Forms in React",
    slug: "react-form-handling",
    category: "React",
    difficulty: "Beginner",
    content:
      "A controlled input keeps its value in state, so React is the source of truth. Track values with `useState`, update them in `onChange`, and call `event.preventDefault()` in `onSubmit` so the browser does not reload the page.",
    code: `function LoginForm() {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Sign in</button>
    </form>
  );
}`,
    challenge: "Add a password field and disable the submit button until both fields have values.",
  },
  {
    id: "l7",
    title: "useState and Re-renders",
    slug: "react-usestate",
    category: "React",
    difficulty: "Beginner",
    content:
      "State is a snapshot. Calling the setter schedules a re-render with the new value; the current render still sees the old one. When the next value depends on the previous one, pass a function: `setCount(c => c + 1)`. Never mutate state objects — create a new object or array.",
    code: `const [items, setItems] = useState([]);

function addItem(name) {
  setItems((prev) => [...prev, { id: crypto.randomUUID(), name }]);
}`,
    challenge: "Write a remove function that deletes an item by id without mutating the array.",
  },
  {
    id: "l8",
    title: "Array Methods You Will Use Daily",
    slug: "javascript-array-methods",
    category: "JavaScript",
    difficulty: "Beginner",
    content:
      "`map` transforms every item, `filter` keeps the ones matching a test, `find` returns the first match, and `reduce` folds a list into one value. They all return new values instead of mutating, which is exactly what React rendering needs.",
    code: `const students = [
  { name: "Ananya", marks: 88 },
  { name: "Dev", marks: 71 },
  { name: "Meera", marks: 94 },
];

const toppers = students.filter((s) => s.marks >= 85).map((s) => s.name);
const average = students.reduce((sum, s) => sum + s.marks, 0) / students.length;`,
    challenge: "Sort the students by marks descending and render the top two names.",
  },
  {
    id: "l9",
    title: "Fetching Data and Handling Errors",
    slug: "javascript-fetch",
    category: "JavaScript",
    difficulty: "Intermediate",
    content:
      "`fetch` returns a promise that resolves even for 404 and 500 responses, so always check `response.ok` before parsing. Wrap the call in `try/catch` for network failures, and always render a loading and an error state — not just the happy path.",
    code: `async function getCourses() {
  try {
    const res = await fetch("/api/courses");
    if (!res.ok) throw new Error("Request failed: " + res.status);
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}`,
    challenge: "Add a loading flag and show a skeleton row while the request is in flight.",
  },
  {
    id: "l10",
    title: "Composing Tailwind Utilities Without Chaos",
    slug: "tailwind-composition",
    category: "Tailwind",
    difficulty: "Intermediate",
    content:
      "Long class strings become unreadable fast. Keep order consistent (layout → spacing → typography → colour → state), extract repeated patterns into a React component rather than a CSS class, and lean on design tokens in your theme so colours change in one place.",
    code: `function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium">
      {children}
    </span>
  );
}`,
    challenge: "Extract a Card component with a variant prop for default and highlighted styles.",
  },
  {
    id: "l11",
    title: "Accessible Buttons and Focus States",
    slug: "accessible-buttons",
    category: "HTML",
    difficulty: "Intermediate",
    content:
      "If it performs an action, it is a `button`; if it navigates, it is an `a`. Never remove the focus outline without replacing it — keyboard users depend on it. Icon-only buttons need an `aria-label` describing the action.",
    code: `<button
  type="button"
  aria-label="Add student"
  class="inline-flex h-9 w-9 items-center justify-center rounded-lg border focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-600"
>
  +
</button>`,
    challenge: "Audit one of your pages with the keyboard only and fix any element you cannot reach with Tab.",
  },
  {
    id: "l12",
    title: "Designing for 320px First",
    slug: "mobile-first-design",
    category: "Responsive Design",
    difficulty: "Beginner",
    content:
      "The narrowest common phone is 320px wide. Start there: single column, generous tap targets, `min-w-0` on text containers so long strings truncate instead of overflowing, and `shrink-0` on icons so they never squash.",
    code: `<header class="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 sm:flex sm:justify-between">
  <h1 class="truncate text-lg font-bold">Attendance overview</h1>
  <button class="shrink-0 rounded-lg border px-3 py-1.5 text-sm">Export</button>
</header>`,
    challenge: "Open your page at 320px and remove every horizontal scrollbar you find.",
  },
];

export const getLesson = (slug: string) => lessons.find((l) => l.slug === slug);
