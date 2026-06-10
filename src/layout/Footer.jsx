const productLinks = ["Laptops", "Monitors", "Audio", "Accessories"];

const companyLinks = ["About", "Contact"];

const socialLinks = ["GitHub", "LinkedIn"];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-neutral-200">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">TechStore</h2>

            <p className="mt-4 max-w-xs textsm leading-6 text-neutral-600">
              Modern technology products for work, entertainment, and everyday
              life.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-4 font-semibold">Products</h3>

            <ul className="space-y-3">
              {productLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-neutral-600 transition hover:text-black"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 font-semibold">Company</h3>

            <ul className="space-y-3">
              {companyLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-neutral-600 transition hover:text-black"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-200 pt-6">
          <p className="text-sm text-neutral-500">
            © 2026 TechStore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
