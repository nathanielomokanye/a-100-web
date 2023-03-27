import React from 'react';

export default function Services () {
  return (
    <div id='about' className='flex flex-col w-full'>
      <img src='assets/container.svg' alt='Container' className='md:h-4/6' />
      <div className='text-center flex flex-col items-center mt-20 gap-10'>
        <p className='md:w-2/4 px-5'>Welcome to A100 Transporter, where we specialize in transporting goods and installing equipment to meet your unique requirements. With years of experience in the logistics industry, we understand the importance of timely and efficient deliveries. Trust A100 Transporter for all your transportation and installation needs.</p>
        <button className='bg-black text-white px-12 py-3' type='button'>Let's Talk</button>
      </div>
      <div className='bg-[#D9D9D9] p-5 gap-10 h-fit justify-center flex flex-col mt-20 items-center'>
        <p className='font-semibold text-2xl md:text-4xl'>WHY CHOOSE US</p>
        <div className='gap-10 flex flex-col md:flex-row items-center'>
          <div className='flex bg-white md:w-2/6 items-center md:justify-start justify-center gap-5 md:py-24 p-6'>
            <img alt='Location' src='assets/location.svg' />
            <div className='gap-5'>
              <p className='font-semibold'>SAFETY FIRST</p>
              <p className='md:w-2/3'>We prioritize the safety of your goods and equipment, employing strict safety protocols and careful handling throughout the transportation and installation processes. </p>
            </div>
          </div>
          <div className='flex bg-white md:w-2/6 md:justify-start md:py-24 items-center justify-center gap-5 p-6'>
            <img alt='Location' src='assets/globe.svg' />
            <div className='gap-5'>
              <p className='font-semibold'>EXPERTISE</p>
              <p className='md:w-2/3'>Our team of experienced professionals has the knowledge and skills to handle even the most complex logistics challenges.</p>
            </div>
          </div>
          <div className='flex bg-white md:w-2/6 md:justify-start md:py-24 items-center justify-center gap-5 p-6'>
            <img alt='Location' src='assets/box.svg' />
            <div className='gap-5'>
              <p className='font-semibold'>CUSTOMER SATISFACTION</p>
              <p className='md:w-2/3'>We believe in providing exceptional customer service and work closely with our clients to meet their specific needs and exceed their expectations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
