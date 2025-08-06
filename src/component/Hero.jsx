import { assets } from "../assets/frontend_assets/assets";

const Hero = () => {

  return (
    <div className="w-full min-h-[40vh] mt-17 lg:min-h-[70vh] lg:mt-20 flex flex-col items-center justify-center px-4">
      {/* Hero Image Section */}
      <div className="w-full flex items-center justify-center">
        <div className="w-40 sm:w-52 md:w-56 lg:w-64 xl:w-72 aspect-square bg-red-400 overflow-hidden rounded-full">
          <img
            src={assets.nightmare}
            alt="Hero"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      {/* Title */}
      <div className="w-full flex justify-center mt-4">
        <h1 className="text-2xl min-[370px]:text-[31px] sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-semibold text-center">
          ASUS VIVOBOOK
        </h1>
      </div>

      {/* Description */}
      <div className="w-full flex justify-center items-center md:pt-3 mt-2">
        <p className="text-sm max-[320px]:text-[10px] sm:text-base md:text-lg px-4 text-center leading-relaxed font-normal max-w-2xl">
          Lorem ipsum dolor sit amet consectetur quo, adipisci in. Lorem ipsum dolor sit corporis ex?
        </p>
      </div>
    </div>


  )
};

export default Hero;