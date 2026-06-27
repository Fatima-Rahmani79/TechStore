import {
  //   Github,
  //   Linkedin,
  ExternalLink,
  Code2,
  Palette,
  Zap,
  ShoppingCart,
  Search,
  Moon,
  MessageCircle,
  Smartphone,
} from "lucide-react";
import { Link } from "react-router-dom";

const skills = [
  "React.js",
  "JavaScript (ES6+)",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Redux",
  "React Router",
  "Git & GitHub",
];

const techStack = [
  { name: "React.js", desc: "UI framework", icon: <Code2 size={18} /> },
  { name: "Redux", desc: "State management", icon: <Zap size={18} /> },
  { name: "Tailwind CSS", desc: "Styling", icon: <Palette size={18} /> },
  {
    name: "React Router",
    desc: "Navigation",
    icon: <ExternalLink size={18} />,
  },
];

const features = [
  {
    icon: <Search size={18} />,
    label: "Search & Filter",
    desc: "Real-time product search with category filters",
  },
  {
    icon: <ShoppingCart size={18} />,
    label: "Shopping Cart",
    desc: "Add, remove and manage cart items with Redux",
  },
  {
    icon: <Zap size={18} />,
    label: "Wishlist",
    desc: "Save favorite products for later",
  },
  {
    icon: <Moon size={18} />,
    label: "Dark Mode",
    desc: "System-aware light and dark theme",
  },
  {
    icon: <MessageCircle size={18} />,
    label: "AI Assistant",
    desc: "Smart product recommendations chatbot",
  },
  {
    icon: <Smartphone size={18} />,
    label: "Responsive",
    desc: "Fully responsive across all screen sizes",
  },
];

export default function About() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      {/* ── Hero ──*/}
      <div className="mb-20">
        <p className="badge badge-accent mb-4">About</p>
        <h1 className="max-w-2xl text-5xl font-bold leading-tight tracking-tight text-[var(--text-primary)]">
          A modern e-commerce built with React
        </h1>
        <p className="mt-4 max-w-xl text-lg text-[var(--text-secondary)]">
          TechStore is a portfolio project showcasing modern frontend
          development — from state management and routing to AI-powered features
          and dark mode.
        </p>
      </div>

      {/* ── Features ──*/}
      <div className="mb-20">
        <h2 className="mb-2 text-2xl font-bold text-[var(--text-primary)]">
          Features
        </h2>
        <p className="mb-8 text-[var(--text-secondary)]">
          What's included in this project.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon, label, desc }) => (
            <div
              key={label}
              className="flex gap-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)] text-[var(--accent-text)]">
                {icon}
              </div>
              <div>
                <h3 className="font-semibold text-[var(--text-primary)]">
                  {label}
                </h3>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Tech Stack ──*/}
      <div className="mb-20">
        <h2 className="mb-2 text-2xl font-bold text-[var(--text-primary)]">
          Tech Stack
        </h2>
        <p className="mb-8 text-[var(--text-secondary)]">
          Technologies used to build this project.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map(({ name, desc, icon }) => (
            <div
              key={name}
              className="rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] p-5 transition hover:border-[var(--accent)]"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--bg-subtle)] text-[var(--text-secondary)]">
                {icon}
              </div>
              <h3 className="font-semibold text-[var(--text-primary)]">
                {name}
              </h3>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Developer Card ──*/}
      <div className="mb-20 overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)]">
        <div className="h-2 w-full bg-[var(--accent)]" />
        <div className="flex flex-col gap-8 p-8 sm:flex-row sm:items-start">
          {/* Avatar */}
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[var(--accent)] text-3xl font-bold text-[var(--accent-text)]">
            FR
          </div>

          {/* Info */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">
              Fatima Rahmani
            </h2>
            <p className="mt-1 text-[var(--text-secondary)]">
              Frontend developer passionate about building modern web apps
            </p>

            {/* Skills */}
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[var(--border)] bg-[var(--bg-subtle)] px-3 py-1 text-xs font-medium text-[var(--text-secondary)]"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://github.com/Fatima-Rahmani79"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
              >
                {/* <Github size={16} /> */}
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/fatima-rahmani-556320365"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] px-4 py-2.5 text-sm font-semibold text-[var(--text-primary)] transition hover:bg-[var(--bg-subtle)]"
              >
                {/* <Linkedin size={16} /> */}
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA ──*/}
      <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)] p-10 text-center">
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">
          Ready to explore?
        </h2>
        <p className="mt-2 text-[var(--text-secondary)]">
          Browse our collection of premium tech products.
        </p>
        <Link
          to="/shop"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--accent-text)] transition hover:opacity-90"
        >
          <ShoppingCart size={16} />
          Shop Now
        </Link>
      </div>
    </div>
  );
}
