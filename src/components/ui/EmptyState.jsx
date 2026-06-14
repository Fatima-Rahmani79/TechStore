export default function EmptyState({ icon, title, description, children }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-neutral-200 bg-white px-8 py-16 text-center shadow-sm">
      <div className="mb-6 rounded-full bg-neutral-100 p-4 text-neutral-600">
        {icon}
      </div>

      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="mt-3 max-w-md text-neutral-500">{description}</p>

      {children && <div className="mt-6">{children}</div>}
    </div>
  );
}
