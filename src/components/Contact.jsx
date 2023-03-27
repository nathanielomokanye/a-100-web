import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoLocationSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';

export default function Contact () {
  return (
    <div id='contact' className='py-32 px-6 md:px-24 items-center text-center'>
      <div className='mb-10'>
        <h1 className='font-bold text-2xl mb-4'>CONTACT US</h1>
        <p>If you have any questions, concerns, or would like to request a quote, feel free to reach out to us directly.</p>
      </div>

      <div className='flex flex-wrap gap-10 items-center justify-center mb-20'>
        <div className='flex items-center gap-3 '>
          <BsFillTelephoneFill size={24} color='#0066FF' />
          <p>+123-456-7890</p>
        </div>
        <div className='flex items-center gap-3'>
          <IoLocationSharp size={24} color='#0066FF' />
          <p>46 Blair Court, Slater, MO 65349</p>
        </div>
        <div className='flex items-center gap-3'>
          <MdEmail size={24} color='#0066FF' />
          <p>A100@gmail.com</p>
        </div>
      </div>

      <iframe
        title='map'
        className='h-96 w-full rounded-lg'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.581102951369!2d3.36936691422531!3d6.574432024394426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b927a52975997%3A0xf9ee82e74b331fe5!2s3%20Adedotun%20Dina%20Cres%2C%20Mende%20105102%2C%20Lagos!5e0!3m2!1sen!2sng!4v1675749124521!5m2!1sen!2sng'
        allowfullscreen=''
        loading='lazy'
        referrerpolicy='no-referrer-when-downgrade'
      />
    </div>
  );
}
