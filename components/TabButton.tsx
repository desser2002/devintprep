interface TabButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export default function TabButton({ label, isActive, onClick }: TabButtonProps) {
  return (
    <button
      role="tab"
      aria-selected={isActive}
      onClick={onClick}
      className={`
        rounded-full px-4 py-2 border transition-colors cursor-pointer
        font-medium text-sm
        ${
          isActive
            ? "bg-blue-500 text-white border-blue-600 hover:bg-blue-600"
            : "bg-white text-gray-900 border-gray-200 hover:bg-blue-50"
        }
      `}
    >
      {label}
    </button>
  );
}
