export default function SectionCTA() {
  return (
    <section className="flex justify-center py-24 px-6 bg-gray-50 py-1">
      <div className="w-full max-w-6xl rounded-3xl bg-gradient-to-b from-[#0035C5] to-[#002896] px-12 py-20 text-center text-white shadow-2xl">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Ready to Accelerate Your Enterprise?
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-xl text-blue-100">
          Join thousands of businesses that trust NovaTel for their
          mission-critical communications.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="rounded-xl bg-white px-8 py-4 font-semibold text-[#0035C5] transition hover:scale-105">
            Explore Services
          </button>

          <button className="rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/20">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
}
