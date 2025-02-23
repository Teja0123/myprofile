import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
      Hi, I’m K. Naga Venkata Teja, a passionate Web & App Developer with a strong interest in creating user-friendly and functional applications. Currently pursuing my BTech (3rd year) at Aditya Engineering College, I specialize in front-end and back-end development, focusing on building modern, efficient, and engaging digital solutions.

I have hands-on experience with HTML, CSS, JavaScript, React, MongoDB, and backend technologies, enabling me to develop full-stack applications. My journey in development has been driven by curiosity and a desire to build meaningful projects like NotifyNation, a platform for job notifications and exam updates.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
