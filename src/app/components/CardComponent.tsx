interface CardComponentProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
}

export default function CardComponent({ title, description, icon }: CardComponentProps) {
    return (
        <div className="bg-[#6c63ff] w-48 h-44 p-3 flex flex-col items-start justify-end group cursor-pointer transition-all duration-300 relative">
            <div className="mb-2">{icon}</div>
            <h2 className="text-md font-medium mb-2 text-white">{title}</h2>
            <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-gray-700 text-center px-2 font-medium">{description}</p>
            </div>
        </div>
    );
}