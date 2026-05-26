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
    <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
      <div className="mb-6">
        <Icon />
      </div>

      <h3 className="mb-4 text-2xl font-bold text-gray-900">{title}</h3>

      <p className="text-gray-600">{description}</p>

      <a href="#" className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800">
        Learn More →
      </a>
    </div>
  );
}
