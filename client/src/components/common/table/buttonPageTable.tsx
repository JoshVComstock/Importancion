import React from "react";

interface PageProps {
  onClick: () => void;
  disabled?: boolean;
  isActive?: boolean;
  children: React.ReactNode;
}

const ButtonPageTable = ({
  onClick,
  disabled,
  children,
  isActive,
}: PageProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-1  hover:bg-purple-300 border border-gray-300  flex items-center justify-center text-sm ${
        isActive ? "bg-primary text-customWhite" : ""
      } ${disabled ? "opacity-50 cursor-not-allowed bg-gray-300" : ""}`}
    >
      {children}
    </button>
  );
};

export default ButtonPageTable;
