import AboutMeComponent from "../components/AboutMeComponent";

export default function AboutMe() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[40%] pt-30">
        <AboutMeComponent
          isAboutMePage
          aboutContext={
            "I am a passionate Frontend developer with a keen interest in building scalable web applications. My journey in tech has been driven by interest in designing the applications."
          }
          experience={3}
          experienceContext={
            "Years of Experience. Specialized in building apps, focusing on creating user-friendly interfaces and seamless user experiences."
          }
        />
      </div>
    </div>
  );
}
