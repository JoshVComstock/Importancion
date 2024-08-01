import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonNav } from "./buttonNav";
import Perfil from "./perfil";
import { mainNavItems, secondaryNavItems } from "./navItems";
import { IconLogout } from "./icons";
import { NavItem } from "./navBarTypes";

interface Props {
  isDashboard?: boolean;
}

const Navbar = ({ isDashboard }: Props) => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const redirect = (path: string) => {
    navigate(path);
  };

  const handleItemClick = useCallback((path: string) => {
    setExpandedItem((prev) => (prev === path ? null : path));
    if (path) {
      redirect(path);
    }
  }, []);

  const renderNavItems = (items: NavItem[]) =>
    items.map((item, i) => (
      <div key={i} className="w-full">
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
            {item.children.map((child ,i) => (
              <ButtonNav
                key={i}
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
        isExpanded ? "w-[240px] p-8" : "w-[80px] p-4 py-8"
      } bg-customWhite shadow-lg h-screen flex flex-col gap-2   justify-center items-center  transition-all duration-500 ease-in  `}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
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
    </nav>
  );
};

export default React.memo(Navbar);
