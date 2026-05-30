import CardSolution from "./CardSolution";
import { serviceData } from "./DataSolution";

export default function SectionSolution() {
  return (
    <section className="mt-20">
      <div className="flex flex-col items-center text-center mt-20">
        <h2 className="text-1xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-5xl">
          Core Infrastructure
        </h2>
        <p className="text-2xl text-gray-600 mt-4">
          Scale your operations with our suite of high-performance <br />
          telecommunication protocols
        </p>
      </div>

      {/* Cards */}
      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 w-full max-w-7xl mx-auto px-4">
        {serviceData.map((service) => (
          <CardSolution
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
      
    </section>
  );
}
