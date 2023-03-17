import React from 'react';

export default function Offer () {
  return (
    <div className='bg-black text-white px-5 h-screen justify-evenly flex flex-col'>
      <p className='text-xl font-bold text-center'>SERVICES WE OFFER</p>
      <div className='pl-4 pb-2 md:w-full bg-no-repeat md:h-[300px] flex items-end md:pt-0 pt-48 h-1/6' style={{ backgroundImage: 'url(/assets/container-2.svg)' }}>
        <p>CARGO CONTAINER</p>
      </div>
      <div className='pl-4 pb-2 bg-no-repeat md:h-[300px] flex items-end md:pt-0 pt-48 h-1/6' style={{ backgroundImage: 'url(/assets/container-3.svg)' }}>
        <p>CARGO CONTAINER</p>
      </div>
      <div className='pl-4 pb-2 bg-no-repeat md:h-[300px] flex items-end md:pt-0 pt-48 h-1/6' style={{ backgroundImage: 'url(/assets/plane.svg)' }}>
        <p>CARGO CONTAINER</p>
      </div>
    </div>
  );
}
