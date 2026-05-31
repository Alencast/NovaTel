import CardProducts from "./CardProducts";
import { serviceData } from "./DataProducts";

export default function SectionProducts() {
  return (
    <section className="m-20">
      <div className="flex flex-col items-center text-center mt-20">
        <h2 className="text-1xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-5xl">
          Scalable Service Modules
        </h2>
        <p className="text-2xl text-gray-600 mt-4">
          Choose the perfect tier of connectivity for your growing
          infrastructure needs. Our modules are designed to integrate
          seamlessly.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 w-full max-w-7xl mx-auto px-4">
        {serviceData.map((service) => (
          <CardProducts
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
            value={service.value}
          />
        ))}
      </div>
    </section>
  );
}
