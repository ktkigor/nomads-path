"use client";

import React from "react";

type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

      {/* Scrollable modal content container */}
      <div className="relative bg-white rounded-xl shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto z-50 p-6">
        {children}
      </div>
    </div>
  );
};

export default Modal;
