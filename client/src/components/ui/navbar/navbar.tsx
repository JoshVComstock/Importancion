import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonNav } from "./buttonNav";
import Perfil from "./perfil";
import { mainNavItems, secondaryNavItems } from "./navItems";
import { IconLogout } from "./icons";
import Button from "@/components/common/button";
import { ROUTES } from "@/types/enums/Routes";

interface Props {
  isExpanded?: boolean;
}

const Navbar = ({ isExpanded }: Props) => {
  const navigate = useNavigate();

  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const redirect = (path: string) => {
    navigate(path);
  };
  const handleLogout = () => {
    navigate(ROUTES.LOGIN);
  };
  const handleItemClick = useCallback((path: string) => {
    setExpandedItem((prev) => (prev === path ? null : path));
  }, []);

  const renderNavItems = (items: typeof mainNavItems) =>
    items.map((item) => (
      <div key={item.path} className="w-full">
        <ButtonNav
          onClick={() => handleItemClick(item.path)}
          label={isExpanded ? item.label : ""}
          icon={item.icon}
        />
        {item.children && expandedItem === item.path && (
          <div
            className={`${
              isExpanded ? "" : "w-[80%] mx-auto"
            } py-2 bg-primary100 w-full rounded-lg  `}
          >
            {item.children.map((child) => (
              <ButtonNav
                key={child.path}
                onClick={() => redirect(child.path)}
                label={isExpanded ? child.label : ""}
                icon={child.icon}
              />
            ))}
          </div>
        )}
      </div>
    ));

  return (
    <nav
      className={`${
        isExpanded ? "w-[240px] p-8" : "w-[80px] p-0 py-8"
      } bg-customWhite shadow-lg h-screen flex flex-col gap-2 transition-all duration-300 justify-center items-center`}
    >
      <Perfil
        name="Mega"
        photo=""
        description={`${isExpanded ? "Importaciones" : ""}`}
      />
      <hr className="my-4" />
      {renderNavItems(mainNavItems)}
      <hr className="my-2" />
      {renderNavItems(secondaryNavItems)}
      <hr className="my-2" />
      <ButtonNav
        onClick={() => redirect("")}
        label={isExpanded ? "Cerrar sesión" : ""}
        icon={IconLogout}
        important
      />
      <Button onClick={handleLogout} text="Cerra sesión" />
    </nav>
  );
};

export default Navbar;
