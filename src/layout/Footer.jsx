export default function Footer() {
  return (
    <footer className="mt-24 border-t border-neutral-200">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-2xl font bold">TechStore</h2>

            <p className="mt-4 max-w-xs textsm leading-6 text-neutral-600">
              Modern technology products for work, entertainment, and everyday
              life.
            </p>
          </div>

          {/* Products */}

          {/* Company */}

          {/* Social */}
        </div>

        <div className="mt-12 border-t border-neutral-200 pt-6">Copyright</div>
      </div>
    </footer>
  );
}
