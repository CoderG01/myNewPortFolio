const Hero = () => {
  return (
    <div className="w-[90%] md:w-[80%] lg:w-[75%] xl:w-[70%] mx-auto flex items-center justify-center min-h-screen">
      <div>
        <p className="text-[20px] md:text-[30px] font-inter capitalize text-center">
          hii 🖐🏻i'm
        </p>
        <h1 className="text-[50px] md:text-[90px] font-inter capitalize text-center text-mainBg my-2">
          harsh
        </h1>
        <dd className="text-[17px] md:text-[20px] w-[97%] lg:w-[80%] text-center mx-auto mt-4 capitalize text-[#666666]">
          By sunlight, I'm the GitHub guardian crafting code in VSCode; when the
          moon rises, I transform into the JavaScript Avenger patrolling the
          virtual streets of the night.
        </dd>
        <div className="w-[80%] md:w-[481px] h-[4px] sm:h-[6px] bg-black clip-path-polygon mx-auto mt-10"></div>
      </div>
      <div className="w-full  absolute -bottom-[32rem] left-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col justify-center items-center gap-4">
        <p className="text-3xl font-bold font-inter">you do scroll down ?</p>
        <div className="w-[1px] h-[242px] bg-black"></div>
      </div>
    </div>
  );
};
export default Hero;
