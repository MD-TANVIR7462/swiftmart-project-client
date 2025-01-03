import React from "react";

const ShopBenner = () => {
  return (
    <div
      className=" bg-cover bg-center  text-white py-[3%] md:py-[4%] lg:py-[5%%]  "
      style={{
        backgroundImage: `url(${"https://i.ibb.co/ZKcBXnk/h1-hero1-jpg.webp"})`,
      }}
    >
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-[#6a2171] font-bold mb-2 md:mb-4">
            Summer Sale
          </h1>
          <p className="text-md font-semibold  md:text-xl mb-6 text-black">
            Up to 50% Off
          </p>
        </div>
      </div>
     
    </div>
  );
};

export default ShopBenner;
