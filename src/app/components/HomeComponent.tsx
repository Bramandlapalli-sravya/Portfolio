"use client";

import { Slide } from "react-awesome-reveal";
import ProfileComponent from "./ProfileComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faBarsProgress,
  faLaptopCode,
  faMobile,
  faTools,
  faShareNodes,
  faBowlFood,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import AboutMeComponent from "./AboutMeComponent";
import CardComponent from "./CardComponent";
import CourseCardComponent from "./CourseCardComponent";
import ProjectCardComponent from "./ProjectCardComponent";
import { useRouter } from "next/navigation";
import ContactForm from "./ContactForm";

export default function HomeComponent({
  name,
  roleDescription,
}: {
  name?: string;
  roleDescription?: string;
}) {
  const router = useRouter();

  return (
    <div className="flex flex-col pt-6 px-20">
      <div>
        <div className="flex justify-between items-center">
          <Slide direction="left" duration={2000} className="text-white">
            <div className="flex flex-col">
              <div className="flex flex-col gap-2">
                <label className="text-1xl">Hello I'm</label>
                <label className="text-2xl">{name}</label>
                <p className="text-sm">{roleDescription}</p>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => router?.push("/about")}
                  className="bg-[#6c63ff] cursor-pointer text-white px-4 py-1.5 rounded-md mt-6 hover:scale-105 duration-300 flex items-center"
                >
                  About Me{" "}
                  <FontAwesomeIcon icon={faCircleUser} className="ml-2" />
                </button>
                <button
                  onClick={() => router?.push("/projects")}
                  className="bg-black cursor-pointer border-[#6c63ff] border text-white mt-6 px-4 py-1.5 rounded-md hover:scale-105 transition duration-300 flex items-center"
                >
                  Projects{" "}
                  <FontAwesomeIcon icon={faBarsProgress} className="ml-2" />
                </button>
              </div>
            </div>
          </Slide>
          <div className="pr-5">
            <Slide direction="right" duration={2000}>
              <ProfileComponent />
            </Slide>
          </div>
        </div>
        <div className="mt-2">
          <Slide direction="left" duration={2000}>
            <AboutMeComponent
              aboutContext={
                "I am a passionate Frontend developer with a keen interest in building scalable web applications. My journey in tech has been driven by interest in designing the applications."
              }
              experience={3}
              experienceContext={
                "Years of Experience. Specialized in building apps, focusing on creating user-friendly interfaces and seamless user experiences."
              }
            />
          </Slide>
        </div>
      </div>
      <Slide direction="right" duration={2000}>
        <div className="flex mt-12 gap-4 justify-center">
          <CardComponent
            title={"WEB DEVELOPMENT"}
            description={
              "Building responsive and scalable web applications using modern frameworks and technologies."
            }
            icon={
              <FontAwesomeIcon
                icon={faLaptopCode}
                className="!w-10 !h-10 text-white"
              />
            }
          />
          <CardComponent
            title={"MOBILE DEVELOPMENT"}
            description={
              "Specialized in building beautiful and intuitive mobile user interfaces for Android and iOS platforms."
            }
            icon={
              <FontAwesomeIcon
                icon={faMobile}
                className="!w-6 !h-6 text-white"
              />
            }
          />
        </div>
      </Slide>
      <Slide direction="left" duration={2000}>
        <div className="flex flex-col gap-3 justify-center items-center">
          <h1 className="text-1xl font-medium mb-4 mt-12 text-[#6c63ff]">
            The Services i offer :
          </h1>
          <div className="flex gap-3">
            <CourseCardComponent
              icon={
                <FontAwesomeIcon
                  icon={faLaptopCode}
                  className="!w-8 !h-8 text-white"
                />
              }
              title={"WEB DEVELOPMENT"}
              description={
                "I create beautiful colorful interfaces with simple HTML, CSS & Javascript and also frameworks like ReactJS and NextJS"
              }
            />
            <CourseCardComponent
              icon={
                <FontAwesomeIcon
                  icon={faMobile}
                  className="!w-8 !h-8 text-white"
                />
              }
              title={"MOBILE DEVELOPMENT"}
              description={
                "I am a mobile developer. I have experience using React Native for Mobile Apps."
              }
            />
            <CourseCardComponent
              icon={
                <FontAwesomeIcon
                  icon={faTools}
                  className="!w-8 !h-8 text-white"
                />
              }
              title={"VERSION CONTROL"}
              description={
                "I can use version control system well, Git is my go-to tool."
              }
            />
            <CourseCardComponent
              icon={
                <FontAwesomeIcon
                  icon={faShareNodes}
                  className="!w-8 !h-8 text-white"
                />
              }
              title={"NPM"}
              description={
                "I have used NPM in all the applications i worked in."
              }
            />
          </div>
        </div>
      </Slide>
      <Slide  direction="right" duration={2000}>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-1xl font-medium mb-4 mt-10 text-[#6c63ff]">
            Featured Projects :
          </h1>
          <p className="text-white">
            I have worked on few projects over the period of being a Frontend
            Web Developer. Here are my projects list:{" "}
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
      </Slide>
      {/* contact with me */}
      <div className="flex justify-around mt-28 items-center ">
        <Slide direction="left" duration={2000}>
          <div className="flex flex-col gap-2 pl-20">
            <h1 className="text-[#6c63ff] text-xl">Contact with me:</h1>
            <h3 className="text-[white] text-lg">
              Satisfied with me? Please Contact me
            </h3>
            <div className="flex gap-2 pl-2">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="!w-6 !h-6 text-white"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className="!w-6 !h-6 text-white"
              />
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="!w-6 !h-6 text-white"
              />
            </div>
          </div>
        </Slide>
        <Slide direction="right" duration={2000}>
          <div className="pr-20">
            <ContactForm />
          </div>
        </Slide>
      </div>
    </div>
  );
}
