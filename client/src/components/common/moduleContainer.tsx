import { useNavigate } from "react-router-dom";
/* import { useGet } from "../hooks/useGet";
import Button from "./button/button";
import IconBack from "@assets/icons/iconBack";
import Title from "./title/title";
import { ApiResponse } from "@/types/interfaces/ApiResponse";
import { twMerge } from "@/utils/twMerge";
import Tag from "./tag/tag"; */

type Title = {
  title?: string;
  children: React.ReactNode;
  backRoute?: string | (() => void);
  padding?: boolean;
  scrollable?: boolean;
  paddingY?: boolean;
  buttons?: {
    icon: JSX.Element;
    onClick: () => void;
  }[];
  tags?: string[];
};

type BackendTitle<T> = {
  title: string;
  children: ({
    res,
    setRes,
  }: {
    res: ApiResponse<T> | null;
    setRes: React.Dispatch<React.SetStateAction<ApiResponse<T> | null>>;
  }) => React.ReactNode | React.ReactNode;
  backRoute?: string | (() => void);
  titleRequestRoute: string;
  titleRequestKey: keyof T;
  default?: string;
  padding?: boolean;
  scrollable?: boolean;
  paddingY?: boolean;
  buttons?: {
    icon: JSX.Element;
    onClick: () => void;
  }[];
  tags?: string[];
};

type Props<T> = Title | BackendTitle<T>;

const PageContainer = <T,>({
  title,
  children,
  backRoute,
  padding = true,
  scrollable = false,
  paddingY = true,
  buttons,
  tags,
  ...props
}: Props<T>) => {
  const navigate = useNavigate();
  const fromBackend = "titleRequestRoute" in props;
  const send = fromBackend && !props.default;

  return (
    <div
      className={`flex flex-col gap-3 h-full dark:bg-gray-800 ${
        paddingY ? "pb-5 pt-5" : ""
      }`}
    >
      {title && (
        <div className="px-5 flex justify-between min-h-9 items-center">
          <div className="flex gap-2 items-center">
           {/*  {backRoute && (
              <Button
                onClick={() =>
                  typeof backRoute === "function"
                    ? backRoute()
                    : navigate(backRoute)
                }
                icon={<IconBack />}
                btnType="tertiary"
              />
            )} */}
            <div className="flex gap-1">
              {/* <Title textSize="2xl">{renderName()}</Title> */}
              Producto
            </div>
          </div>
          <div className="flex gap-4 items-center">
            {buttons && (
              <div className="flex gap-4">
                {buttons.map((button, i) => (
                  <button
                  key={i}
                    /* size="small"
                    icon={button.icon} */
                    onClick={button.onClick}
                  />
                ))}
              </div>
            )}
            {tags && (
              <div className="flex gap-2">
                {tags.map((tag, i) => (
                  /* <Tag key={i}>{tag}</Tag> */
                  <label key={i}>{tag}</label>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      <div
        className={twMerge(
          "flex-1 relative flex flex-col",
          scrollable ? "overflow-y-scroll overflow-x-auto" : "overflow-auto",
          padding && "px-5"
        )}
      >
{/*         {typeof children === "function" ? children({ res, setRes }) : children}
 */}      </div>
    </div>
  );
};

export default PageContainer;
