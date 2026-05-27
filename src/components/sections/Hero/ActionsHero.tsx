import Button from "../../ui/Button";

export default function ActionsHero() {
  return (
    <div className="flex gap-10 ">
      <Button variant="primary" rounded="lg" size="lg">
        View Services
      </Button>
      <Button variant="secondary" rounded="lg" size="lg">
        Contact Sales
      </Button>
    </div>
  );
}
