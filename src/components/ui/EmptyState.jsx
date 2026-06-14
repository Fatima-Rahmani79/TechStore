export default function EmptyState({ title, description }) {
  return (
    <div className="py-20 text-center">
      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="mt-2 text-neutral-500">{description}</p>
    </div>
  );
}
