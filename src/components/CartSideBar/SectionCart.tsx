import CartSideBar from "./CartSideBar";

type SectionCartProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SectionCart({ isOpen, onClose }: SectionCartProps) {
  return <CartSideBar isOpen={isOpen} onClose={onClose} />;
}
