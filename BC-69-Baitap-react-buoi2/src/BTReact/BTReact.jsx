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
        className="relative overflow-scroll rounded-lg bg-cover bg-no-repeat p-12 text-center"
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
                <img src="./glassesImage/model.jpg" alt="Left Model" />
              </div>

              {/* Right Model Image with selected glasses */}
              <div className="w-1/4 relative mx-5">
                <img src="./glassesImage/model.jpg" alt="Right Model" />
                {selectedGlasses && (
                  <Fragment>
                    <img
                      src={selectedGlasses.url}
                      alt={selectedGlasses.name}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-165 w-36 h-14"
                      style={{ mixBlendMode: "multiply" }}
                    />
                    <div className="absolute bot-[0] left-0 right-0 w-auto transform -translate-y-[100%] bg-amber-300 bg-opacity-50 rounded shadow-lg">
                      <p className="text-xl font-semibold text-pink-500">
                        {selectedGlasses.name}{" "}
                      </p>
                      <span className=" text-lime-600 font-extrabold text-lg">
                        {selectedGlasses.price}$
                      </span>

                      <p className="text-sm text-gray-600 mt-2 text-start px-2">
                        {selectedGlasses.desc}
                      </p>
                    </div>
                  </Fragment>
                )}
              </div>
            </div>

            {/* Glasses Selection */}
            <div className="">
              <div className="my-8 px-60 grid grid-cols-3 place-items-center gap-3">
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
