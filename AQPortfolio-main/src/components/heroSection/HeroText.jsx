import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
  }),
};

const HeroText = () => {
  const firstName = "K Naga Venkata".split("");
  const lastName = "Teja".split("");

  // Function to handle resume download
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Kota Naga Venkata Teja.pdf"; // Ensure the resume is in the public folder
    link.download = "Teja_Resume.pdf";
    link.click();
  };

  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl uppercase text-lightGrey"
      >
        Web Developer & App Developer
      </motion.h2>

      {/* Animated Name */}
      <motion.div className="flex flex-col items-center md:items-start">
        <motion.h1
          className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase flex"
          initial="hidden"
          animate="show"
        >
          {firstName.map((letter, index) => (
            <motion.span
              key={index}
              variants={letterAnimation}
              initial="hidden"
              animate="show"
              custom={index}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.h1>

        {/* "Teja" below the first part */}
        <motion.h1
          className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase flex"
          initial="hidden"
          animate="show"
        >
          {lastName.map((letter, index) => (
            <motion.span
              key={index}
              variants={letterAnimation}
              initial="hidden"
              animate="show"
              custom={index + firstName.length}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>
      </motion.div>

      {/* Download Resume Button */}
      <motion.button
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        onClick={handleDownload}
        className="bg-orange text-white font-bold py-1 px-1 rounded-md mt-4 hover:bg-opacity-80 transition-all"   >
        My Resume
      </motion.button>
    </div>
  );
};

export default HeroText;
