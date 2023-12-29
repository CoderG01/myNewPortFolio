import ArrowButton from "./ArrowButton";
import TitleText from "./TitleText";

const Hero = () => {
  return (
    <div className="w-[90%] md:w-[80%] lg:w-[75%] xl:w-[70%] h-10 mx-auto mt-[100px]">
      <div className="rounded-xl font-inter bg-[#f3f3f3] py-14 px-16 relative group">
        <h1 className="text-[3rem] font-bold text-center">Harsh</h1>
        <p className="text-[24px] capitalize text-center">
          front end developer
        </p>
        <p className="capitalize text-[18px] mt-2 text-center">
          web developer by profession. providing web services maintaining
          balance of perfectionism & pragmatism.
        </p>
        <ArrowButton classNames="absolute bottom-[1.4rem] right-[2rem] text-[#676767] group-hover:text-mainBg transition-[0.3]" />
      </div>
      <div className="w-full lg:w-1/2 gap-4 flex pt-4">
        <div className="w-full md:w-1/2 bg-[#f3f3f3] h-[240px] rounded-xl relative group pt-3 px-4">
          <div className="bg-white w-[80%] h-[100px] rounded-md flex justify-center items-center mx-auto">
            <h1 className="font-saint text-[3rem]">Harsh</h1>
          </div>
          <TitleText title="Experience" subTitle="About me" />
          <ArrowButton classNames="absolute bottom-[1.4rem] right-[2rem] text-[#676767] group-hover:text-mainBg transition-[0.3]" />
        </div>
        <div className="w-full md:w-1/2 bg-[#f3f3f3] h-[300px] rounded-xl relative group pt-3 px-4 flex item-center justify-around flex-col">
          <img
            src="https://www.siddharth.network/assets/project-images/Theproart/brandbird%20(8).webp"
            alt="project"
            className="w-[90%]"
          />
          <div className="">
            <TitleText title="Experience" subTitle="About me" />
          </div>
          <ArrowButton classNames="absolute bottom-[1.4rem] right-[2rem] text-[#676767] group-hover:text-mainBg transition-[0.3]" />
        </div>
      </div>
      <div>
        <div className="bg-[#f3f3f3] h-[240px] w-full">
          <h1>hey</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
