import React from 'react';

const AddaProductBenner = ({name,subtitle,img}) => {
   return (
      <div
      className="relative bg-cover bg-center  py-20  md:py-24 mb-4 md:mb-12  "
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="text-2xl md:text-5xl font-bold  md:mb-4 uppercase text-[#168a73]">{name}</h1>
          <p className="text-lg md:text-3xl font-semibold mb-6 text-white">For <span>{subtitle}</span></p>
         
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black opacity-50"
      />
    </div>
   );
};

export default AddaProductBenner;