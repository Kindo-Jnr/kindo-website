import Hero from "@components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* Add more sections below the hero */}
      <section className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Next Section</h2>
          <p className="text-gray-400">Your content goes here...</p>
        </div>
      </section>
    </div>
  );
}