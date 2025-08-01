interface CourseCardComponentProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function CourseCardComponent({
  title,
  description,
  icon,
}: CourseCardComponentProps) {
  return (
    <div className="w-48 h-52 flex flex-col items-center justify-center cursor-pointer rounded border border-[#6c63ff] p-3">
      <div className="mb-2">{icon}</div>
      <h2 className="mb-4 text-white text-xs">{title}</h2>
      <p className="text-center text-white px-2 text-xs">{description}</p>
    </div>
  );
}
