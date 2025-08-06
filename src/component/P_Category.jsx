import { assets } from "../assets/frontend_assets/assets";
import Title from './Title';

const P_Category = () => {
  return (
    <div className="w-full min:h-[50vh] mt-4 mb-7 bg-orange-600">

      <Title Category="Category" More="View All"/>

      <div className="mt-4 grid grid-cols-2 gap-2 p-1 min-[850px]:grid-cols-4">
        <div className="w-full h-[22vh] md:h-[35vh] min-[600px]:h-[30vh] flex justify-center items-center">
          <img
            src={assets.nightmare}
            alt="Hero"
            className="w-full h-full object-cover rounded-2xl"
          />
          <p className="absolute bg-black p-1 px-4 rounded-full opacity-50">
            NONE
          </p>
          <p className="absolute p-1 px-4 rounded-full text-white font-semibold">
            NONE
          </p>
        </div>
        <div className="w-full h-[22vh] md:h-[35vh] min-[600px]:h-[30vh] flex justify-center items-center">
          <img
            src={assets.nightmare}
            alt="Hero"
            className="w-full h-full object-cover rounded-2xl"
          />
          <p className="absolute bg-black p-1 px-4 rounded-full opacity-50">
            NONE
          </p>
          <p className="absolute p-1 px-4 rounded-full text-white font-semibold">
            NONE
          </p>
        </div>
        <div className="w-full h-[22vh] md:h-[35vh] min-[600px]:h-[30vh] flex justify-center items-center">
          <img
            src={assets.nightmare}
            alt="Hero"
            className="w-full h-full object-cover rounded-2xl"
          />
          <p className="absolute bg-black p-1 px-4 rounded-full opacity-50">
            NONE
          </p>
          <p className="absolute p-1 px-4 rounded-full text-white font-semibold">
            NONE
          </p>
        </div>
        <div className="w-full h-[22vh] md:h-[35vh] min-[600px]:h-[30vh] flex justify-center items-center">
          <img
            src={assets.nightmare}
            alt="Hero"
            className="w-full h-full object-cover rounded-2xl"
          />
          <p className="absolute bg-black p-1 px-4 rounded-full opacity-50">
            NONE
          </p>
          <p className="absolute p-1 px-4 rounded-full text-white font-semibold">
            NONE
          </p>
        </div>
      </div>
    </div>
  );
};

export default P_Category;
