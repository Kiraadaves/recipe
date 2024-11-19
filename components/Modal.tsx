import React from "react";
import { Button } from "./ui/button";

interface ModalProps {
  onClick: () => void;
  modalContent: string;
  modalHeading: string;
}

const Modal = ({ onClick, modalContent, modalHeading }: ModalProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-5 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold text-[#47663B] mb-4">
          {modalHeading}
        </h2>
        <p className="text-sm text-[#60686C] mb-4">{modalContent}</p>
        <Button
          variant="outline"
          className="w-full text-[#47663B] hover:text-[#c05f29]"
          onClick={onClick}
        >
          Close
        </Button>
      </div>
    </div>
  );
};

export default Modal;
