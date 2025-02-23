import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  // Function to handle resume download
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Kota Naga Venkata Teja.pdf"; // Ensure resume.pdf is in the public folder
    link.download = "Teja_Resume.pdf";
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      className="px-4 py-1 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow"
    >
      Hire Me
      <div className="sm:hidden md:block ">
        <LuArrowDownRight />
      </div>
    </button>
  );
};

export default NavbarBtn;
