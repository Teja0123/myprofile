import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/naga-teja-70704a240/" Icon={FaLinkedinIn} />
    <SingleContactSocial link="https://github.com/Teja0123" Icon={FiGithub} />
    <SingleContactSocial link="https://x.com/KNV_Teja" Icon={FaSquareTwitter} />
    </div>
  );
};

export default ContactSocial;
