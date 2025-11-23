interface TopicButtonProps {
  title: string;
}

export default function TopicButton({ title }: TopicButtonProps) {
  return (
    <div className="flex items-center gap-3 py-3">
      <span className="font-semibold text-base text-gray-800">
        {title}
      </span>
      <div className="flex-1 h-px bg-gray-300" />
    </div>
  );
}
