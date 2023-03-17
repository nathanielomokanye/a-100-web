import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

export default function Footer() {
  return (
    <div className='px-6 pt-32 pb-10 md:px-24 bg-black text-white flex justify-between flex-col'>
      <div className='flex flex-wrap items-center justify-between'>
        <img src='/assets/logo.svg' alt='' />
        <div className='flex items-end justify-center gap-6'>
          <AiFillFacebook size={24} color={"white"} />
          <AiFillInstagram size={24} color={"white"} />
          <AiOutlineTwitter size={24} color={"white"} />
        </div>
      </div>

      <div className='flex items-center justify-between flex-wrap mt-16'>
        <div className='mb-10 md:w-1/2'>
          <h1>Address</h1>
          <p>
            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus
          </p>
        </div>

        <div className='flex items-center md:justify-end justify-center gap-10 flex-col md:flex-row md:w-1/2'>
          <ul className='flex flex-col gap-6'>
            <li>
              <a href='/home'>Home</a>
            </li>
            <li>
              <a href='/abour'>About</a>
            </li>
            <li>
              <a href='/testimonials'>Testimonials</a>
            </li>
            <li>
              <a href='/contact'>Contact</a>
            </li>
          </ul>

          <ul className='flex flex-col gap-6'>
            <li>
              <a href='/faq'>FAQ</a>
            </li>
            <li>
              <a href='/services'>Services</a>
            </li>
            <li>
              <a href='/support'>Support</a>
            </li>
            <li>
              <a href='/privacy'>Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
      <p className='text-left mt-20  md:text-center md:text-2xl'>
        A - 100 Transporter © 2023
      </p>
    </div>
  );
}
