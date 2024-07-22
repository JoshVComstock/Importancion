interface ButtonNavProps {
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  important?: boolean;
}

export const ButtonNav = ({
  icon: Icon,
  label,
  important,
  onClick,
  ...props
}: ButtonNavProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex justify-start items-center gap-2 hover:bg-primary100 w-full p-1 px-2 rounded-md ${
        important ? "bg-primary100 mt-auto " : "bg-transparent w-full" 
      }  ${label?"":"justify-center "} ` }
      {...props}
    >
      {Icon && <Icon />}
      {label}
    </button>
  );
};
