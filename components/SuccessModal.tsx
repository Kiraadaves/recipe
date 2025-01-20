import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";

interface SuccessModalProps {
  onClose: () => void;
}

const SuccessModal = ({ onClose }: SuccessModalProps) => {
  return ( <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="bg-[#ebf4e7] rounded-[8px] p-4 max-w-lg mx-auto">
      <div className="flex justify-between text-[#47663B]">
        <FaRegCircleCheck className="w-8 h-8" />
        <button onClick={onClose}>
          <IoIosCloseCircle className="w-8 h-8" />
        </button>
      </div>
      <div className="text-center my-4">
        <h1 className="text-2xl font-bold text-[#47663B]">Order Confirmed</h1>
        <p className="text-[#47663B]">We hope you enjoy your food!</p>
      </div>
      <button
        onClick={onClose}
        className="w-full mt-4 bg-[#47663B] text-white px-4 py-2 rounded"
      >
        Start New Order
      </button>
    </div>
  </div>
  );
};

export default SuccessModal;
