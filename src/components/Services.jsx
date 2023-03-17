import React from 'react';

export default function Services () {
  return (
    <div className='flex flex-col w-full'>
      <img src='/assets/container.svg' alt='Container' className='md:h-4/6' />
      <div className='text-center flex flex-col items-center mt-20 gap-10'>
        <p className='md:w-2/4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices ultrices lobortis. Phasellus porta sodales nisi, ac maximus orci imperdiet bibendum.</p>
        <button className='bg-black text-white px-12 py-3' type='button'>Let's Talk</button>
      </div>
      <div className='bg-[#D9D9D9] p-5 gap-10 h-[700px] justify-center flex flex-col mt-20 items-center'>
        <p className='font-semibold text-2xl md:text-4xl'>WHY CHOOSE US</p>
        <div className='gap-10 flex flex-col md:flex-row items-center'>
          <div className='flex bg-white md:w-2/6 items-center md:justify-start justify-center gap-5 md:py-24 p-6'>
            <img alt='Location' src='/assets/location.svg' />
            <div className='gap-5'>
              <p className='font-semibold'>ONLINE SUPPORT</p>
              <p className='md:w-2/3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices ultrices lobortis. </p>
            </div>
          </div>
          <div className='flex bg-white md:w-2/6 md:justify-start md:py-24 items-center justify-center gap-5 p-6'>
            <img alt='Location' src='/assets/globe.svg' />
            <div className='gap-5'>
              <p className='font-semibold'>COST SAVE</p>
              <p className='md:w-2/3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices ultrices lobortis. </p>
            </div>
          </div>
          <div className='flex bg-white md:w-2/6 md:justify-start md:py-24 items-center justify-center gap-5 p-6'>
            <img alt='Location' src='/assets/box.svg' />
            <div className='gap-5'>
              <p className='font-semibold'>ORDER TRACKING</p>
              <p className='md:w-2/3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices ultrices lobortis. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
