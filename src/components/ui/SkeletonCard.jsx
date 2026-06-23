export default function SkeletonCard() {
  return (
    <div className="flex flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
      {/* Image */}
      <div className="skeleton aspect-square w-full" />

      {/* Content */}
      <div className="flex flex-col gap-3 p-4">
        {/* Badge */}
        <div className="skeleton h-5 w-20 rounded-full" />

        {/* Title */}
        <div className="space-y-2">
          <div className="skeleton h-4 w-full rounded" />
          <div className="skeleton h-4 w-3/4 rounded" />
        </div>

        {/* Description */}
        <div className="space-y-1.5">
          <div className="skeleton h-3 w-full rounded" />
          <div className="skeleton h-3 w-5/6 rounded" />
        </div>

        {/* Footer */}
        <div className="mt-2 flex items-center justify-between">
          <div className="skeleton h-6 w-16 rounded" />
          <div className="flex gap-2">
            <div className="skeleton h-8 w-8 rounded-full" />
            <div className="skeleton h-8 w-16 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
