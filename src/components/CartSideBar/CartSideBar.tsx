import BagIcon from "../../assets/icons/BagIcon";
import CartItem from "./CartItem";

type CartSideBarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CartSideBar({ isOpen, onClose }: CartSideBarProps) {
  return (
    <aside
      className={`
        fixed top-0 right-0
        h-screen w-96
        bg-white shadow-2xl
        transition-transform duration-300
        z-50
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}
    >
      <div className="flex items-center justify-between p-6 border-b bg-gray-100">
        <div>
          <BagIcon />
        </div>
        <h2 className="text-2xl font-bold">Enterprise Cart</h2>

        <button onClick={onClose} className="text-2xl hover:text-red-500">
          ✕
        </button>
      </div>

      <div className="p-6">
        <p>Cart is empty</p>
        <CartItem />
      </div>
    </aside>
  );
}
