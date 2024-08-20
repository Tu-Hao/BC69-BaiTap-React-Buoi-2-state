import React, { Fragment, useState } from "react";
import glassesImg from "./dataGlasses.json";

export const BTReact = () => {
  const [selectedGlasses, setSelectedGlasses] = useState("");

  const handleGlassesClick = (glasses) => {
    setSelectedGlasses(glasses);
  };

  return (
    <Fragment>
      <div
        className="relative rounded-lg bg-cover bg-no-repeat p-12 text-center"
        style={{
          backgroundImage: "url('./glassesImage/background.jpg')",
          height: "100vh",
        }}
      >
        <div
          className="absolute overflow-scroll bottom-0 left-0 right-0 top-0 h-full w-full bg-fixed bg"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
        >
          <div className="mx-auto p-4">
            <h1
              className="text-center text-2xl font-bold py-16 text-stone-50"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.35)" }}
            >
              TRY GLASSES APP ONLINE
            </h1>
            <div className="flex justify-center items-center mt-5">
              {/* Left Model Image */}
              <div className="w-1/4 mx-5">
                <img
                  src="./glassesImage/model.jpg"
                  alt="Left Model"
                  className="xl:w-[300px] xl:h-[400px] 2xl:w-[300px] 2xl:h-[400px] md:w-[200px] md:h-[300px]"
                />
              </div>

              {/* Right Model Image with selected glasses */}
              <div className="w-1/4 relative  mx-5 flex justify-center items-center">
                <img
                  src="./glassesImage/model.jpg"
                  alt="Right Model"
                  className=" xl:w-[300px] xl:h-[400px] 2xl:w-[300px] 2xl:h-[400px] md:w-[200px] md:h-[300px]"
                />
                {selectedGlasses && (
                  <Fragment>
                    <img
                      src={selectedGlasses.url}
                      alt={selectedGlasses.name}
                      className="absolute -translate-y-[110%] xl:w-40 xl:h-16 md:w-[6.5rem] md:h-[3rem]"
                      style={{ mixBlendMode: "multiply" }}
                    />
                    <div className="absolute 2xl:w-[300px] xl:w-[300px] md:w-[200px] md:text-sm bottom-0 bg-amber-300 bg-opacity-50 shadow-lg">
                      <p className="xl:text-xl font-semibold text-pink-500 md:text-sm">
                        {selectedGlasses.name}{" "}
                      </p>
                      <span className=" text-lime-600 font-extrabold xl:text-lg md:text-sm">
                        {selectedGlasses.price}$
                      </span>

                      <p className="xl:text-sm md:text-xs text-gray-600 mt-2 text-start px-2">
                        {selectedGlasses.desc}
                      </p>
                    </div>
                  </Fragment>
                )}
              </div>
            </div>

            {/* Glasses Selection */}
            <div className="">
              <div className="my-8 px-60 grid 2xl:grid-cols-8 xl:grid-cols-5 md:grid-cols-3  place-items-center gap-3">
                {glassesImg.map((glasses) => (
                  <button
                    key={glasses.id}
                    onClick={() => handleGlassesClick(glasses)}
                    className="w-36 h-24 "
                  >
                    <img
                      src={glasses.icon}
                      alt={glasses.name}
                      className="w-36 h-24 border-solid border-[1px] border-black hover:border-dashed"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
