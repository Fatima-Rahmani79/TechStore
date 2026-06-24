export default function EmptyState({ icon, title, description, children }) {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center justify-center rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)] px-6 py-16 text-center shadow-sm sm:px-8 sm:py-20">
      <div className="mb-6 rounded-full bg-[var(--bg-subtle)] p-4 text-[var(--text-secondary)]">
        {icon}
      </div>

      <h3 className="text-xl font-semibold text-[var(--text-primary)] sm:text-2xl">
        {title}
      </h3>

      <p className="mt-3 max-w-md text-sm leading-6 text-[var(--text-muted)] sm:text-base">
        {description}
      </p>

      {children && <div className="mt-6">{children}</div>}
    </div>
  );
}
