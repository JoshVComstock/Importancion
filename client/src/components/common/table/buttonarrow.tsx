import React from "react";
import { IconArrowLeft, IconArrowRight } from "@/components/ui/icons";

interface ButtonArrowProps {
  table: any;
  jump: number;
  label?: string;
}

const ButtonArrow = ({ table, jump, label }: ButtonArrowProps) => {
  const handleClick = () => {
    const newIndex = Math.min(
      Math.max(table.getState().pagination.pageIndex + jump, 0),
      table.getPageCount() - 1
    );
    table.setPageIndex(newIndex);
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
    >
      {label || (jump < 0 ? <IconArrowLeft /> : <IconArrowRight />)}
    </button>
  );
};

export default ButtonArrow;
