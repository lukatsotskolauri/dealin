import React, { useState } from "react";

const ResponsiveCards = () => {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Markets",
      description:
        "Up-to-date stock market data coverage from CNN. Get the latest updates on US markets, world markets, stock quotes, crypto, commodities, and currencies. Every weekday afternoon, get a snapshot of global markets, along with key company, economic, and world news of the day.",
      image: "https://shorturl.at/6mP6Z",
    },
    {
      id: 2,
      title: "Technology",
      description:
        "Up-to-date stock market data coverage from CNN. Get the latest updates on US markets, world markets, stock quotes, crypto, commodities, and currencies. Every weekday afternoon, get a snapshot of global markets, along with key company, economic, and world news of the day.",
      image: "https://shorturl.at/6mP6Z",
    },
  ]);

  const handleSwap = (direction) => {
    setData((prevData) => {
      const newData = [...prevData];
      if (direction === "left" || direction === "right") {
        [newData[0], newData[1]] = [newData[1], newData[0]];
      }
      return newData;
    });
  };

  return (
    <>
      <div className="py-10 flex flex-col items-center ">
        <div className="w-full max-w-screen-xl flex flex-row lg:flex-row lg:justify-between gap-8">
          {data.map((card, index) => (
            <div
              key={card.id}
              className={`bg-white rounded-[20px] shadow-md p-4 ${
                index === 0
                  ? "lg:w-[750px] lg:h-[380px]"
                  : "max-[550px]:hidden m-[auto] lg:w-[455px] lg:h-[241px]"
              } flex flex-col lg:flex-row lg:items-center`}
            >
              <img
                src={card.image}
                alt="card"
                className={`rounded-[20px] object-cover ${
                  index === 0
                    ? "w-full h-[300px] lg:w-[300px] lg:h-full"
                    : "w-full h-[150px] lg:w-[165px] lg:h-[200px]"
                }`}
              />
              <div className="flex flex-col justify-evenly p-4">
                <h2
                  className={`text-[#152C5E] font-bold ${
                    index === 0 ? "text-[24px]" : "text-[20px]"
                  }`}
                >
                  {card.title}
                </h2>
                <p
                  className={`text-[#152C5E] ${
                    index === 0 ? "text-[18px]" : "text-[11px]"
                  }`}
                >
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-8 items-center">
        <button
          className="w-12 h-12 bg-[#152C5E] text-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#152C5E] transition"
          onClick={() => handleSwap("left")}
        >
          &lt;
        </button>
        <button
          className="w-10 h-10 bg-[#152C5E] text-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#152C5E] transition"
          onClick={() => handleSwap("right")}
        >
          &gt;
        </button>
      </div>
    </>
  );
};

export default ResponsiveCards;
