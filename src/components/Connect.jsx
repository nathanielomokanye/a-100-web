import React from 'react';

export default function Connect () {
  return (
    <div className='px-6 py-32 md:px-24 w-full'>
      <div
        style={{ backgroundImage: 'url(assets/connect.png)' }}
        className='bg-cover bg-no-repeat w-full px-6 py-10 md:px-12 md:py-20'
      >
        <div className='md:w-1/2 w-full mb-10'>
          <h1 className='font-bold text-2xl mb-4'>Let's Connect</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div className='bg-white justify-between md:w-1/2 w-full flex items-center'>
          <input
            type='text'
            name='send'
            placeholder='Enter Email Address'
            className='border-0 w-2/3'
          />
          <button className='bg-black text-white px-4 py-2'>Send</button>
        </div>
      </div>
    </div>
  );
}
