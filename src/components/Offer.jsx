import React from "react";

export default function Offer() {
  return (
    <div className='bg-black text-white py-32 px-6  md:px-24 gap-10 justify-evenly flex flex-col'>
      <p className='text-2xl font-bold text-center'>
        HOW DO WE DELIVER YOUR PACKGE
      </p>
      <div
        className='pl-4 pb-2 md:w-full bg-cover bg-no-repeat md:h-[300px] flex items-end md:pt-0 pt-48 h-1/6'
        style={{ backgroundImage: "url(/assets/container-2.svg)" }}
      >
        <p className='font-bold'>CARGO CONTAINER</p>
      </div>
      <div
        className='pl-4 pb-2 bg-cover bg-no-repeat md:h-[300px] flex items-end md:pt-0 pt-48 h-1/6'
        style={{ backgroundImage: "url(/assets/container-3.svg)" }}
      >
        <p className='font-bold'>CARGO CONTAINER</p>
      </div>
      <div
        className='pl-4 pb-2 bg-cover bg-no-repeat md:h-[300px] flex items-end md:pt-0 pt-48 h-1/6'
        style={{ backgroundImage: "url(/assets/plane.svg)" }}
      >
        <p className='font-bold'>CARGO CONTAINER</p>
      </div>
    </div>
  );
}
