import React from 'react';

export default function Home () {
  return (
    <div style={{ backgroundImage: 'url(assets/moving.png)' }} id='home' className='w-fulL flex md:pt-40 bg-no-repeat bg-cover pt-28 h-screen overflow-hidden flex-col'>
      <div className='flex md:justify-between md:flex-row flex-col md:mt-10 mt-20 px-6 md:px-16'>
        <div className='text-4xl text-white md:text-7xl font-bold md:items-start text-center items-center flex flex-col md:gap-10 gap-2'>
          <div className='flex gap-3 md:gap-6'>
            <p>Transport</p>
            <p className='text-[#0066FF]'>Solution</p>
          </div>
          <p>For you</p>
        </div>
        <a href='tel:7205181669' className='self-center mt-10'>
          <img
            className='w-16 h-16 md:w-32 md:h-32'
            alt='Call CTA'
            src='assets/call.svg'
          />
        </a>
      </div>
      {/* <div */}
      {/* // style={{ backgroundImage: 'url(assets/bg.svg)' }} */}
      {/* className='w-full mt-10 h-full self-start flex justify-center' */}
      {/* > */}
      {/* <img
          alt='Truck'
          className='md:w-11/12 w-full'
          src='assets/truck-1.svg'
        /> */}
      {/* </div> */}
    </div>
  );
}
