const About = () => {
  return (
    <div className="w-[60%] mx-auto min-h-screen flex justify-center items-center gap-3">
      <div className="w-3/5">
        <h1 className="font-inter text-[40px] capitalize font-bold">
          hey, i'm harsh
        </h1>
        <p className="text-[20px] font-inter mt-10 mb-7 capitalize">
          🌐 Welcome to my spot on the web.
        </p>
        <p className="font-inter text-[17px]">
          i am a front end developer working in india. i make{" "}
        </p>
      </div>
      <div className="w-2/5">
        <img
          src="https://www.taniarascia.com/ram.png"
          alt="cowCode"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default About;
