import { ReactNode } from "react";

interface TechnologyButtonProps {
  label: string;
  iconUrl?: string | ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

export default function TechnologyButton({
  label,
  iconUrl,
  isActive = false,
  onClick,
}: TechnologyButtonProps) {
  const renderIcon = () => {
    if (!iconUrl) return null;

    if (typeof iconUrl === "string") {
      return (
        <img
          src={iconUrl}
          alt=""
          className="w-5 h-5 mr-2.5"
        />
      );
    }

    return <span className="w-5 h-5 mr-2.5 flex items-center">{iconUrl}</span>;
  };

  return (
    <button
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={label}
      aria-pressed={isActive}
      className={`
        flex items-center
        rounded-full
        bg-white
        py-2 px-5
        border
        font-medium text-sm
        cursor-pointer
        transition-all duration-200 ease-in-out
        hover:shadow-lg hover:text-gray-900
        active:shadow-md active:translate-y-0.5
        ${
          isActive
            ? "border-blue-500 shadow-md text-gray-900"
            : "border-transparent shadow-sm text-gray-700"
        }
      `}
    >
      {renderIcon()}
      <span>{label}</span>
    </button>
  );
}
