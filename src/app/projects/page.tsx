import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectCardComponent from "../components/ProjectCardComponent";
import { faBowlFood } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
  return (
    <div className="flex justify-center items-center pt-15">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-1xl font-medium mb-4 mt-10 text-[#6c63ff]">
          Featured Projects :
        </h1>
        <p className="text-white">
          I have worked on few projects over the period of being a Frontend Web
          Developer. Here are my projects list:{" "}
        </p>
        <div className="flex flex-col gap-3 justify-center mt-8">
          <ProjectCardComponent
            icon={
              <FontAwesomeIcon
                icon={faBowlFood}
                className="!w-8 !h-8 text-white"
              />
            }
            title={"SWIGGY"}
            description={
              "A live application inspired by Swiggy food delivery app."
            }
          />
        </div>
      </div>
    </div>
  );
}
