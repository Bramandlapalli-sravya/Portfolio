interface ProjectCardComponentProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function ProjectCardComponent({
  title,
  description,
  icon,
}: ProjectCardComponentProps) {
  return (
    <div className="w-56 h-52 flex flex-col items-center justify-around cursor-pointer gap-3 rounded border border-[#6c63ff] px-3 py-4">
      <div>{icon}</div>
      <h2 className="text-left text-xs text-[#6c63ff]">{title}</h2>
      <p className="text-center text-white px-2 text-xs">{description}</p>
      <div className="w-full flex justify-around">
        <button className="bg-[#6c63ff] px-2 py-1 rounded cursor-pointer text-sm"><a href={'https://swiggy-without-create-react-app.netlify.app/home'} target="_blank">View Live</a></button>
        <button className="border border-[#6c63ff] text-white px-2 py-1 rounded cursor-pointer text-sm"><a href="https://github.com/Bramandlapalli-sravya/Swiggy-from-scratch-without-create-react-app" target="_blank">Github Repo</a></button>
      </div>
    </div>
  );
}
