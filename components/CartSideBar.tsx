"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import { IoAddCircleOutline, IoCartOutline } from "react-icons/io5";
import { IoIosRemoveCircleOutline } from "react-icons/io";
//import SuccessModal from "./SuccessModal";

interface CartProps {
  onConfirmOrder?: () => void;
}
const CartSidebar = ({ onConfirmOrder }: CartProps) => {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();
  //const [showSuccessModal, setShowSuccessModal] = useState(false);
  const totalItems = Object.values(cart).reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const cartTotal = Object.values(cart).reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleConfirmOrder = () => {
    if (onConfirmOrder) {
      onConfirmOrder(); // Close mobile cart if onConfirmOrder is passed
    }
  };

  //const handleStartNewOrder = () => {
  //  clearCart();
  //  setShowSuccessModal(false);
  //};

  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-0">
      {totalItems === 0 ? (
        <h1 className="text-[#47663B] text-2xl font-bold mb-4 text-center relative">
          Your Cart
        </h1>
      ) : (
        <div className="mb-4 text-center relative inline-block">
          <IoCartOutline className="w-8 h-8 text-[#47663B]" />
          <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rounded-full border bg-[#47663B] text-white px-2 py-1 text-xs">
            {totalItems}
          </span>
        </div>
      )}

      {Object.keys(cart).length === 0 ? (
        <div className="text-center">
          <div className="flex justify-center items-center">
            <MdOutlineAddShoppingCart className="w-24 h-24 mb-4 text-[#f99d688c]" />
          </div>
          <p className="text-sm text-[#47663Bab]">
            Your added items will appear here
          </p>
        </div>
      ) : (
        <>
          <ul>
            {Object.entries(cart).map(([mealId, item]) => (
              <li
                key={mealId}
                className="flex flex-col gap-2 mb-2 border-b border-gray-200 pb-2"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded"
                  />
                  <span className="text-xs text-slate-700">{item.name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-slate-700">
                      {item.quantity}x
                    </span>
                    <span className="text-xs text-slate-700">
                      ${item.price.toFixed(2)}
                    </span>

                    <div className="flex items-center gap-4">
                      <button onClick={() => removeFromCart(mealId)}>
                        <IoIosRemoveCircleOutline className="text-[#47663B] w-6 h-6" />
                      </button>
                      <button onClick={() => addToCart(item)}>
                        <IoAddCircleOutline className="text-[#47663B] w-6 h-6" />
                      </button>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => removeFromCart(mealId)}
                      className="text-red-500"
                    >
                      <TiDelete className="w-6 h-6 mt-1" />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-right font-bold text-[#47663B]">
            Total: ${cartTotal.toFixed(2)}
          </div>
          <div className="mt-4 flex justify-between">
            <button onClick={clearCart} className="text-[#47663B]">
              Clear Cart
            </button>
            <button
              onClick={handleConfirmOrder}
              className="bg-[#47663B] text-white px-4 py-2 rounded"
            >
              Confirm Order
            </button>
          </div>
          {/**   {showSuccessModal && (
            <SuccessModal onClose={handleStartNewOrder} />
          )} */}
        </>
      )}
    </div>
  );
};

export default CartSidebar;
