import React from 'react';
import Marquee from 'react-fast-marquee';

export default function MarQuee () {
  return (
    <Marquee className='flex w-full bg-black md:h-20 h-14' gradientWidth={0}>
      <div className='flex items-center gap-28'>
        <p className='text-white md:text-2xl font-bold'>SERVICE</p>
        <img src='assets/star.svg' className='w-8' alt='Star' />
        <p className='text-white md:text-2xl font-bold'>SERVICE</p>
        <img src='assets/star.svg' className='w-8' alt='Star' />
        <p className='text-white md:text-2xl font-bold'>SERVICE</p>
        <img src='assets/star.svg' className='w-8' alt='Star' />
        <p className='text-white md:text-2xl font-bold'>SERVICE</p>
        <img src='assets/star.svg' className='w-8' alt='Star' />
        <p className='text-white md:text-2xl font-bold'>SERVICE</p>
        <img src='assets/star.svg' className='w-8' alt='Star' />
        <p className='text-white md:text-2xl font-bold'>SERVICE</p>
        <img src='assets/star.svg' className='w-8 mr-28' alt='Star' />
      </div>
    </Marquee>
  );
}
