export default function ContentHero() {
  return (
    <div className="space-y-6">
      <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-xl font-semibold text-blue-700">
        <svg
          width="20"
          height="24"
          viewBox="0 0 9 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0"
        >
          <path
            d="M3.2655 9.09661L6.28425 5.47994H3.95092L4.37384 2.16953L1.67592 6.06328H3.703L3.2655 9.09661ZM2.11457 10.9879L2.6979 6.93825H0L4.80686 0H5.52477L4.94705 4.60496H8.15536L2.83248 10.9879H2.11457Z"
            fill="#0035C5"
          />
        </svg>
        <span>NEXT-GEN CONNECTIVITY</span>
      </div>

      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
        Fast, Reliable Telecom Solutions for{" "}
        <span className="text-[#0035C5]">Modern Businesses</span>
      </h1>

      <p className="text-3xl text-gray-700 max-w-2xl">
        Empowering enterprises with ultra-low latency infrastructure, global 5G
        coverage, and secure communication channels that never sleep
      </p>
    </div>
  );
}
