import ImageAbout from "./ImageAbout";

export default function ContentAbout() {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-1/2">
        <ImageAbout />
      </div>
      <div className="md:w-2/5 flex flex-col justify-center gap-5">
        <h2 className="text-1xl  font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-5xl">
          Our Commitment to Innovation
        </h2>
        <p>
          Founded on the principles of speed and stability, NovaTel has evolved
          from a local network provider into a global telecommunications leader.
          We don't just provide lines; we engineer pathways for business success
          in an increasingly digital world.
        </p>

        <p>
          Our research and development teams are constantly pushing the
          boundaries of what's possible, from implementing zero-trust network
          architectures to pioneering sustainable data center cooling
          technologies.
        </p>
        <a href="#" className="text-blue-500 hover:underline mt-10 font-bold">
          Meet our Leadership Team →
        </a>
      </div>
    </div>
  );
}
