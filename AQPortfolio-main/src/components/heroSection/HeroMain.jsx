import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

const HeroMain = () => {
  return (
    <div className="pt-40 pb-32 min-h-screen ">

      <div className="flex md:flex-row sm:flex-col  max-w-[1300px] mx-auto justify-between items-center  px-4">
        <HeroText />
        <HeroPic />
      </div>
    </div>
  );
};

export default HeroMain;
