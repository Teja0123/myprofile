import { Link } from "react-scroll";
import { motion } from "framer-motion";

const FooterMain = () => {
  const footerLinks = [
    {
      name: "About Me",
      section: "about",
    },
    {
      name: "Skills",
      section: "skills",
    },
    // {
    //   name: "Experience",
    //   section: "experience",
    // },
    {
      name: "Projects",
      section: "projects",
    },
  ];

  const nameAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.05 } },
  };

  const letterAnimation = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div className="px-4">
      <div className="w-full h-[1px] bg-lightGrey mt-24"></div>
      <div className="md:flex justify-between mt-4 max-w-[1200px] mx-auto sm:hidden">
        <motion.p
          className="text-3xl text-lightGrey"
          variants={nameAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {["K", " ", "N", "a", "g", "a", " ", "V", "e", "n", "k", "a", " ", "T", "e", "j", "a"].map((letter, index) => (
            <motion.span key={index} variants={letterAnimation}>
              {letter}
            </motion.span>
          ))}
        </motion.p>
        <ul className="flex gap-4 text-lightGrey text-xl">
          {footerLinks.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-120}
                  to={item.section}
                  className="hover:text-white transition-all duration-500 cursor-pointer"
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightBrown">
        © 2025 Teja | All Rights Reserved.
      </p>
    </div>
  );
};

export default FooterMain;
