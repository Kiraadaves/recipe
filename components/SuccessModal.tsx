import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";
import CartSidebar from "./CartSideBar";

const SuccessModal = () => {
  return (
    <div className="sm:hidden fixed inset-0 z-50  bg-black bg-opacity-50  p-4 overflow-y-auto">
      <div className="bg-[#ebf4e7] rounded-[8px] p-4">
        <div className="flex justify-between text-[#47663B]">
          <FaRegCircleCheck className="w-8 h-8" />
          <IoIosCloseCircle className="w-8 h-8" />
        </div>
        <div>
          <h1>Order Confirmed</h1>
          <p>We hope you enjoy your food!</p>
        </div>
        <div className="mt-6">
          <CartSidebar />
        </div>
        <button>Start New Order</button>
      </div>
    </div>
  );
};

export default SuccessModal;
