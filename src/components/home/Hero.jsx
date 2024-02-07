import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div
      className="relative flex-wrap min-h-screen gap-2 md:-mt-10 flex-center-center"
      style={{
        background: "url('/images/hero-bg-pattern.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <div className="absolute top-0 right-0 rounded-full bg-[#04a7ff]/30 dark:bg-[#04a7ff]/50 w-72 h-72 -z-10 blur-[120px]"></div>
      <div className="flex-1 basis-[30rem]">
        <h1 className="text-4xl font-bold capitalize md:text-5xl">
        Selling Smiles, <br /> One Home at a Time
        </h1>
        <div className="pl-3 mt-5 border-l-4 border-primary">
          <div>
          Welcome to <h6 className="font-bold">Moomin Homes</h6> where we sell smiles one home at a time. Our mission is simple: to match you with the perfect place that fills your heart with joy. Let's find your happiness together.
          </div>
        </div>
        <div className="mt-6 flex-align-center gap-x-3">
          <button className="btn btn-primary" onClick={()=>{navigate('/property')}}>find property</button>
          <button className="px-2 py-2 rounded-md btn-secondary">
            <FiArrowRight />
          </button>
        </div>
        {/* <div className="mt-6 overflow-hidden rounded-lg sm:cursor-pointer flex-align-center card-shadow dark:shadow-none w-fit dark:bg-card-dark">
          <div className="px-3 py-1 bg-primary">
            <span className="text-white">Buy</span>
          </div>
          <div className="px-3 py-1">
            <span>Rent</span>
          </div>
          <div className="px-3 py-1">
            <span>Sell</span>
          </div>
        </div> */}
      </div>
      <div className="flex-1 basis-[20rem] h-full">
        <img
          src="/images/hero-5.jpeg"
          alt=""
          className="w-full h-fit  md:h-[80vh] rounded-xl object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
