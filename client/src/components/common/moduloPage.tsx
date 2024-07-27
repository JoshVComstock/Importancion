import { useNavigate } from "react-router-dom";
import React, { ReactNode } from "react";
interface Props {
  title: string;
  children: ReactNode;
}
const ModuloPage: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-3 h-full pb-5 pt-5">
      <div className="px-5 flex justify-between min-h-9 items-center">
        <div className="flex gap-2 items-center">
          <div className="flex gap-1 text-[35px] font-bold">{title}</div>
        </div>
      </div>
      {children}
      <div className="flex-1 relative flex flex-col overflow-y-scroll overflow-x-auto px-5"></div>
    </div>
  );
};

export default ModuloPage;
