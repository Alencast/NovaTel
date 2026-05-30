import Logo from "../ui/Logo.tsx";
import AtSignIcon from "../../assets/icons/AtSignIcon";
import EarthIcon from "../../assets/icons/EarthIcon";
import StarIcon from "../../assets/icons/StarIcon";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B1120] py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">

        {/* TOP AREA */}
        <div className="flex flex-col gap-12 border-b border-gray-700 pb-12 md:flex-row md:justify-between">

          {/* LEFT SIDE */}
          <div className="max-w-sm">
            <Logo />

            <p className="mt-6 leading-relaxed text-gray-400">
              High-performance connectivity for the modern digital era.
              Built for speed, secured for peace of mind.
            </p>

            {/* SOCIALS */}
            <div className="mt-6 flex items-center gap-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-white/10">
                <AtSignIcon />
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-white/10">
                <EarthIcon />
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-white/10">
                <StarIcon />
              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">

            {/* COMPANY */}
            <div>
              <h3 className="text-lg font-semibold text-white">
                Company
              </h3>

              <ul className="mt-5 space-y-3 text-gray-400">
                <li>
                  <a href="#" className="transition hover:text-white">
                    About
                  </a>
                </li>

                <li>
                  <a href="#" className="transition hover:text-white">
                    Leadership
                  </a>
                </li>

                <li>
                  <a href="#" className="transition hover:text-white">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* SERVICES */}
            <div>
              <h3 className="text-lg font-semibold text-white">
                Services
              </h3>

              <ul className="mt-5 space-y-3 text-gray-400">
                <li>
                  <a href="#" className="transition hover:text-white">
                    Enterprise Fiber
                  </a>
                </li>

                <li>
                  <a href="#" className="transition hover:text-white">
                    5G Solutions
                  </a>
                </li>

                <li>
                  <a href="#" className="transition hover:text-white">
                    Cloud Networking
                  </a>
                </li>
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="text-lg font-semibold text-white">
                Contact
              </h3>

              <ul className="mt-5 space-y-3 text-gray-400">
                <li>support@novatel.com</li>
                <li>+1 (800) 555-0199</li>
                <li>New York, USA</li>
              </ul>
            </div>

          </div>
        </div>

        {/* BOTTOM AREA */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">

          <p>
            © 2026 NovaTel. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="transition hover:text-white">
              Privacy Policy
            </a>

            <a href="#" className="transition hover:text-white">
              Terms of Service
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}