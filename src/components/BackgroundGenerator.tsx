import React, { useState } from "react";

const gradients = [
  "bg-gradient-to-r",
  "bg-gradient-to-l",
  "bg-gradient-to-t",
  "bg-gradient-to-b",
  "bg-gradient-to-bl",
  "bg-gradient-to-br",
  "bg-gradient-to-tr",
  "bg-gradient-to-tl",
];

const randomGradients = () => {
  const randomIndex = Math.floor(Math.random() * gradients.length);
  return gradients[randomIndex];
};

const randomColors = () => {
  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "pink",
    "indigo",
    "teal",
  ];
  const colorNumbers = [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const randomColorNumbers =
    colorNumbers[Math.floor(Math.random() * colorNumbers.length)];
  return `${randomColor}-${randomColorNumbers}`;
};

const BackgroundGenerator = () => {
  const [bgClass, setBgClass] = useState("bg-white");
  const handleClick = () => {
    const gradient = randomGradients();
    const fromColor = `from-${randomColors()}`;
    const includeVia = Math.random() < 0.5;
    const viaColor = includeVia ? `via-${randomColors()} ` : "";
    const toColor = `to-${randomColors()}`;
    setBgClass(`${gradient} ${fromColor} ${viaColor} ${toColor}`);
  };
  return (
    <div
      className={`min-h-screen w-full flex justify-center items-center ${bgClass}`}
    >
      <div className=" font-mono text-center text-black flex flex-col justify-center items-center border-2 border-transparent bg-white rounded-3xl shadow-3xl mx-5 px-4 py-6 space-y-4">
        <h1 className="text-3xl font-bold p-3">Background Generator</h1>
        <button
          className="text-xl text-white bg-black rounded-lg p-2 cursor-pointer"
          onClick={handleClick}
        >
          Generate Background
        </button>
        <h2 className="bg-gray-100 border-2 border-gray-200 font-semibold shadow-lg rounded-lg p-3">
          {bgClass}
        </h2>
      </div>
    </div>
  );
};

export default BackgroundGenerator;
