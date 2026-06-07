export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to TechStore
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 mb-8">
          Your one-stop shop for the latest tech gadgets
        </p>
        <a href="#shop" className="btn-primary">
          Shop Now
        </a>
      </div>
    </section>
  );
}
