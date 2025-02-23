import SingleSkill from "./SingleSkill";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { SiC } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "React Native",
    icon: FaReact,
  },
  // {
  //   skill: "TailwindCSS",
  //   icon: RiTailwindCssFill,
  // },
  {
    skill: "Mongodb",
    icon: SiMongodb,
  },
  {
    skill: "Git Hub",
    icon: FaGithub,
  },
  {
    skill: "Node JS",
    icon: IoLogoNodejs,
  },
  {
    skill: "Java",
    icon: FaJava,
  },
  {
    skill: "C",
    icon: SiC,
  },
  {
    skill: "C++",
    icon: SiCplusplus,
  },
];
const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
