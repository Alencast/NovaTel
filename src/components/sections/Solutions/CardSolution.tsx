type ServiceCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
};

export default function ServiceCard({
  icon: Icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 p-6 shadow-sm flex flex-col items-center text-center h-full">
      <div className="mb-6 flex items-center justify-center h-24">
        <div className="scale-155">
          <Icon />
        </div>
      </div>

      <h3 className="mb-4 text-2xl font-bold text-gray-900">{title}</h3>

      <p className="text-gray-600 flex-grow">{description}</p>

  
    </div>
  );
}
