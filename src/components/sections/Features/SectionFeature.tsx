import ServiceCard from "../Solutions/CardSolution.tsx";
import { featureData, valuesData } from "./DataFeature.tsx";
export default function SectionFeature() {
  return ( 
    <section className="mt-20 bg-gray-50 py-1">
      <div className="flex flex-col items-center text-center mt-20">
        <h2 className="text-1xl  font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-5xl">
          Why Leading Brands Choose NovaTel
        </h2>
      </div>

      {/* Cards */}
      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-4">
        {featureData.map((featureCard) => (
          <ServiceCard
            key={featureCard.title}
            icon={featureCard.icon}
            title={featureCard.title}
            description={featureCard.description}
          />
        ))}
      </div>

      {/* List of Values */}
      <div className="bg-blue-900 flex justify-center gap-30 text-center  text-white mt-20 py-10">
        {valuesData.map((valueCard) => ( 
         <div key={valueCard.value} className="flex flex-col m-10">
            <h3 className="text-3xl font-bold   tracking-tight sm:text-6xl lg:text-7xl">
              {valueCard.value} 
            </h3>
            <p> 
              {valueCard.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
