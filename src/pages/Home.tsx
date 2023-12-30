import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#fff8ee]">
      <Hero />
      {/* <h1 className="text-3xl font-bold">Home</h1> */}
      {/* <Footer /> */}
      <section className="min-h-screen w-[90%] md:w-[80%] lg:w-[75%] xl:w-[70%] mx-auto flex pt-[20rem] gap-4">
        <div className="w-1/2 h-[200px] bg-red-400"></div>
        <div className="w-1/2 h-[200px] bg-red-400"></div>
      </section>
    </div>
  );
};

export default Home;
