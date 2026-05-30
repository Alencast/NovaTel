import Button from "../ui/Button.tsx";
import Logo from "../ui/Logo.tsx";
import CartButton from "../../components/ui/CartButton.tsx";
type HeaderProps = {
  showCart?: boolean;
  cartCount?: number;
  onCartClick?: () => void;
};

export default function Header({ showCart = false , cartCount = 0, onCartClick }: HeaderProps) {
  return (
    <header className="w-full shadow-sm">
      <nav className="flex items-center justify-between px-8 py-4">
        <div className="px-6 md:px-23 md:w-1/2">
          <Logo />
        </div>

        <div className="flex items-center gap-20">
          <a
            href="#"
            className="text-2xl hover:text-blue-700  hover:border-b-2 hover:border-blue-700"
          >
            Home
          </a>
          <a
            href="#"
            className="text-2xl hover:text-blue-700  hover:border-b-2 hover:border-blue-700"
          >
            Services
          </a>
          <a
            href="#"
            className="text-2xl hover:text-blue-700  hover:border-b-2 hover:border-blue-700"
          >
            About
          </a>
          <a
            href="#"
            className="text-2xl hover:text-blue-700  hover:border-b-2 hover:border-blue-700"
          >
            Contact
          </a>

          {showCart && (
            <CartButton count={cartCount} onClick={onCartClick ?? (() => {})} />
          )}

          <Button variant="primary">Get Started</Button>
        </div>
      </nav>
    </header>
  );
}
