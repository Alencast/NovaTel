import Button from "../../ui/Button";

type ServiceCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
};

export default function CardProducts({
  icon: Icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="mx-auto max-w-sm rounded-2xl border border-gray-200 p-6 shadow-sm flex flex-col items-center text-center h-full">
      <div className="mb-6 flex items-center justify-center h-24">
        <div className="scale-155">
          <Icon />
        </div>
      </div>

      <h3 className="mb-4 text-2xl font-bold text-gray-900">{title}</h3>

      <p className="text-gray-600 flex-grow">{description}</p>

      <div className="mt-6 flex gap-4">
        <Button variant="secondary" rounded="md" size="md">
            Details
        </Button>
        <Button variant="primary" rounded="md" size="md">
            Add to Cart
        </Button>
      </div>
    </div>
  );
}
