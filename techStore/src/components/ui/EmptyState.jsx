export default function EmptyState({ icon, title, description, children }) {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center justify-center rounded-3xl border border-neutral-200 bg-white px-6 py-16 text-center shadow-sm sm:px-8 sm:py-20">
      <div className="mb-6 rounded-full bg-neutral-100 p-4 text-neutral-600">
        {icon}
      </div>

      <h3 className="text-xl font-semibold text-neutral-900 sm:text-2xl">
        {title}
      </h3>

      <p className="mt-3 max-w-md text-sm leading-6 text-neutral-500 sm:text-base">
        {description}
      </p>

      {children && <div className="mt-6">{children}</div>}
    </div>
  );
}
