import ShoppingCartIcon from "../../assets/icons/ShoppingCartIcon.tsx";

type CartButtonProps = {
  count: number;
  onClick: () => void;
};

export default function CartButton({ count, onClick }: CartButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        relative p-2 
        text-gray-700 
        hover:text-blue-600 
        transition-colors
      "
    >
      <ShoppingCartIcon />

      {count > 0 && (
        <span className="
          absolute -top-2 -right-2
          bg-red-500 text-white
          text-xs rounded-full
          px-1 min-w-5 text-center
        ">
          {count}
        </span>
      )}
    </button>
  );
}