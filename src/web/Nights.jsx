import React, { useState } from "react";

const Nights = () => {
  const [startDate, setStartDate] = useState("");
  const [nights, setNights] = useState(0);

  const NightCalculator = () => {
    const start = new Date(startDate);
    const end = new Date();
    const differenceInTime = end - start;
    const diffInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    setNights(diffInDays);
  };

  return (
    <>
      <div className="flex justify-center flex-col w-[40vw] h-[28vh] mt-28">
        <h2 className="text-white font-poppins -mt-20 mb-8 font-bold">
          Wie viele Nächte hast du bisher geschlafen?
        </h2>
        <div className=" shadow-md rounded-xl w-[256px] h-[384px] flex justify-center items-center flex-col gray-radient">
          <label className="text-white underline underline-offset-4">
            Startdatum{": "}
            <input
              className="bg-transparent rounded-lg"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </label>
          <br />
          <button
            onClick={NightCalculator}
            className="border border-gray-500 text-white rounded-xl w-[200px] sm:mt-6 bg-gray hover:bg-gray-600 hover:border-gray-600"
          >
            Berechnen
          </button>
          {nights !== null &&(
            <div className="text-white leading-10">
              <h2>
                Du hast{" "}
                <span className="text-white font-bold font-poppins">{nights >= 0 ? nights : 0} </span>Nächte
                geschlafen!
              </h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Nights;
